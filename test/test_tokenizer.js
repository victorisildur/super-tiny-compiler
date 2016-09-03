import expect from 'expect';

const lisp = '(add 2 (subtract 4 2))';
const c = 'add(2, subtract(4, 2)';
const tokens = [
    {type: 'paren',  value: '('},
    {type: 'name',   value: 'add'},
    {type: 'number', value: '2'},
    {type: 'paren',  value: '('},
    {type: 'name',   value: 'subtract'},
    {type: 'number', value: '4'},
    {type: 'number', value: '2'},
    {type: 'paren',  value: ')'},
    {type: 'paren',  value: ')'}
]

import tokenizer from '../src/tokenizer';

expect(
    tokenizer(lisp)
).toEqual(tokens);

console.info('tokenizer test passed');
