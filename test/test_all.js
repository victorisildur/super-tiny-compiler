import expect from 'expect';

const lisp = '(add 2 (subtract 4 2))';
const c = 'add(2, subtract(4, 2))';

import compiler from '../src/compiler';

expect(
    compiler(lisp)
).toEqual(c);

console.log('compiler tests passed!');
