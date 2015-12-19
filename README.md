# is-cpf
Determine if a variable is a valid CPF

## Install
```
$ npm install --save is-cpf
```

## Usage
```js
const isCPF = require('is-cpf');

console.log(isCPF('265.827.252-97'));
//=> true

console.log(isCPF('123.456.789-01'));
//=> { 'module': 'is-cpf', 'message': 'This field should be a valid CPF.' }
```

## License
MIT © [Bruno Queiros](https://github.com/brunoqueiros)
