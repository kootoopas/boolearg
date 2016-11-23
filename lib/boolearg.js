function boolearg(arg) {
  if (typeof arg === 'string') return process.argv.indexOf(arg) >= 0;
  else if (Array.isArray(arg)) {
    return arg.some(variations => process.argv.indexOf(variations) >= 0);
  }
  else throw new TypeError('Arg should either be an array or a string.')
}

module.exports = boolearg;
