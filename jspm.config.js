SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "cycle-encapsulated": {
      "main": "main.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "core": "npm:@cycle/core@6.0.3",
    "dom": "npm:@cycle/dom@9.1.0",
    "isolate": "npm:@cycle/isolate@1.2.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.7",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "rx": "npm:rx@4.0.8",
    "vdom-virtualize": "npm:vdom-virtualize@1.0.5",
    "virtual-dom": "npm:virtual-dom@2.1.1"
  },
  packages: {
    "npm:@cycle/dom@9.1.0": {
      "map": {
        "hyperscript-helpers": "npm:hyperscript-helpers@2.0.3",
        "matches-selector": "npm:matches-selector@1.0.0",
        "vdom-parser": "npm:vdom-parser@1.2.1",
        "vdom-to-html": "npm:vdom-to-html@2.2.0",
        "virtual-dom": "npm:virtual-dom@2.1.1",
        "x-is-array": "npm:x-is-array@0.1.0"
      }
    },
    "npm:error@4.4.0": {
      "map": {
        "camelize": "npm:camelize@1.0.0",
        "string-template": "npm:string-template@0.2.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:ev-store@7.0.0": {
      "map": {
        "individual": "npm:individual@3.0.0"
      }
    },
    "npm:global@4.3.0": {
      "map": {
        "min-document": "npm:min-document@2.18.0",
        "node-min-document": "npm:min-document@2.18.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:param-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3"
      }
    },
    "npm:sentence-case@1.1.3": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:vdom-to-html@2.2.0": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "param-case": "npm:param-case@1.1.2",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:virtual-dom@2.1.1": {
      "map": {
        "browser-split": "npm:browser-split@0.0.1",
        "error": "npm:error@4.4.0",
        "ev-store": "npm:ev-store@7.0.0",
        "global": "npm:global@4.3.0",
        "is-object": "npm:is-object@1.0.1",
        "next-tick": "npm:next-tick@0.2.2",
        "x-is-array": "npm:x-is-array@0.1.0",
        "x-is-string": "npm:x-is-string@0.1.0"
      }
    }
  }
});
