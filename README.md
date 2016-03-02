# CycleJS isolation prototyping

A few code sample of ideas for native CycleJS component encapsulation,
instead of the global nature of the current drivers.

See __ for details.

## Install

```
$ npm install
$ npm start
```

Check out the different versions of the same sample app:

- [standard](http://localhost:7777/standard.html): non-isolated example with conflicting components
- [standard-isolate](http://localhost:7777/standard-isolate.html): example with components explicitly isolated using [isolate](https://github.com/cyclejs/isolate)
- [alternative-listeners](http://localhost:7777/alternative-listeners.html): example with alternative DOM driver and listener API (using virtual-dom hooks)
- [alternative-listeners-explicit](http://localhost:7777/alternative-listeners-explicit.html): same as alternative-listeners but requiring to explicitly request the events for a listener/token through the driver
