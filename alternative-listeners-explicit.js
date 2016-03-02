import Cycle from 'core';
import Rx from 'rx';
import {h} from 'dom';

import diff       from 'virtual-dom/diff';
import patch      from 'virtual-dom/patch';
import virtualize from 'vdom-virtualize';

// virtual-dom Hook
class Listener {
    constructor() {
      const subject$ = new Rx.Subject();
      this._callback = (ev) => subject$.onNext(ev);

      // read-only Observable
      this._events$ = subject$.asObservable();
    }
    hook(el, propName) {
        // FIXME: use event delegation?
        el.addEventListener(propName, this._callback);
    }
    unhook(el, propName) {
        el.removeEventListener(propName, this._callback);
    }
}


// Simple application of virtual-dom to real DOM
function renderToDom(vtree$, rootEl) {
    const initialDom = virtualize(rootEl);
    return vtree$.
        startWith(initialDom).
        bufferWithCount(2, 1).
        map(([last, current]) => diff(last, current)).
        reduce((out, patches) => patch(out, patches), rootEl).
        subscribeOnError(err => {
            console.error(err)
        });
}


function makeDOMListenerDriver(rootSelector) {
    return function(vtree$) {
        const rootEl = document.querySelector(rootSelector);
        const initialDom = virtualize(rootEl);

        renderToDom(vtree$, rootEl);

        return {
            createToken: function() {
                return new Listener();
            },
            // extra indirection to facilitate testing? maybe?
            events: function(listener) {
                return listener._events$;
            }
        };
    };
}


function component(sources) {
    const token = sources.DOM.createToken();
    const name$ = sources.DOM.events(token).map(ev => ev.target.value).startWith('');
    return {
        DOM: name$.map(name => {
            return h('div', [
                h('h2', `hello ${name}`),
                // Makes explicit what event is being listened to in
                // the returned virtual-dom, which avoids having to
                // CSS-select on common class names
                h('input', {type: 'text', input: token})
            ]);
        })
    };
}

function main(sources) {
    const comp1 = component(sources);
    const comp2 = component(sources);
    return {
        DOM: Rx.Observable.combineLatest(comp1.DOM, comp2.DOM, (c1, c2) => {
            return h('div', [
                h('h1', `TEST`),
                c1, c2
            ]);
        })
    };
}


Cycle.run(main, {
  DOM: makeDOMListenerDriver('#app')
});
