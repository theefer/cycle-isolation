import Cycle from 'core';
import Rx from 'rx';
import {h, makeDOMDriver} from 'dom';
import isolate from 'isolate';

function Component(impl) {
    return (sources) => isolate(impl)(sources);
}

const component = Component(function(sources) {
    const inputEv$ = sources.DOM.select('.name-input').events('input');
    const name$ = inputEv$.map(ev => ev.target.value).startWith('');
    return {
        DOM: name$.map(name => {
            return h('div', [
                h('h2', `hello ${name}`),
                h('input.name-input', {type: 'text'})
            ]);
        })
    };
});

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
  DOM: makeDOMDriver('#app')
});
