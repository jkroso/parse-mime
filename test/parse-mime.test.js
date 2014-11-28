var parse = require('..')

it('undefined', function(){
  assert(parse('unknown/type', 'data') == 'data')
})

it('json', function(){
  assert.equal(parse('application/json', '{"a":1}'), {a:1})
})

it('querystrings', function(){
  assert.equal(parse('application/x-www-form-urlencoded', 'a=1'), {a:'1'})
})

it('parsemime.define', function(){
  assert.throws(function(){
    parse.define('application/json', function(){})
  }, 'application/json is already defined')
})
