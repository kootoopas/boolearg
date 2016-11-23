boolearg
========

Returns `true` if `process.argv` contains given string(s).

Examples
--------

```javascript
// cmd --debug
boolearg('--debug')
// => true

// cmd --lol
boolearg(['-d', '--debug', '--debug=404'])
// => false

// cmd --lol
boolearg(123)
// => TypeError
```
