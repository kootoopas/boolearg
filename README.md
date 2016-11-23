boolearg
========

Returns `true` if `process.argv` contains given string(s).

Examples
--------

```javascript
// $ example --debug
boolearg('--debug')
// => true

// $ example --lol
boolearg(['-d', '--debug', '--debug=404'])
// => false

// $ example --lol
boolearg(123)
// => TypeError
```
