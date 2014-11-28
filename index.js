var qs = require('qs')

var handlers = {
  'application/json': JSON.parse,
  'application/x-www-form-urlencoded': qs.parse
}

function parsemime(mime, data){
  var fn = handlers[mime]
  return fn ? fn(data) : data
}

parsemime.define = function(mime, fn){
  if (mime in handlers) throw new Error(mime + ' is already defined')
  return handlers[mime] = fn
}

module.exports = parsemime
