
# parse-mime

A centralized parsing module that can be extended to handle any mime type

## Installation

With [packin](//github.com/jkroso/packin): `packin add jkroso/parse-mime`

then in your app:

```js
var parse = require('parse-mime')
```

## API

### `parse(mime, data)`

Takes a mimetype string and some data and returns the parsed value. If it doesn't know how to parse the given mimetype it will just return the data unchanged

```js
parse('application/json', '[1,2,3]') // => [1,2,3]
```

### `parse.define(mime, fn)`

Define a parser for a new mimetype

```js
parse.define('application/edn', JSON.parse)
parse('application/edn', '[1,2,3]') // => [1,2,3]
```

If the mimetype has already been defined then it will throw an error
