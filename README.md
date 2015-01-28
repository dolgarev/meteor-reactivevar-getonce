meteor-reactivevar-getonce
====================
Adds a a simple `getOnce` method to ReactiveVar.

```js
var v = new ReactiveVar('test');
v.getOnce(); // => "test"
v.get(); // => undefined
```
