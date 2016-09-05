import expect from 'expect';

const ast1 = {
    type: 'Program',
    body: [{
        type: 'CallExpression',
        name: 'add',
        params: [
            {
                type: 'NumberLiteral',
                value: '2'
            },
            {
                type: 'CallExpression',
                name: 'subtract',
                params: [{
                    type: 'NumberLiteral',
                    value: '4'
                },{
                    type: 'NumberLiteral',
                    value: '2'
                }]
            }]
    }]
};

const ast2 = {
    type: 'Program',
    body: [{
        type: 'ExpressionStatement',
        expression: {
            type: 'CallExpression',
            callee: {
                type: 'Identifier',
                name: 'add'
            },
            arguments: [{
                type: 'NumberLiteral',
                value: '2'
            }, {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'subtract'
                },
                arguments: [{
                    type: 'NumberLiteral',
                    value: '4'
                }, {
                    type: 'NumberLiteral',
                    value: '2'
                }]
            }]
        }
    }]
};

import transform from '../src/transform';

expect(
    transform(ast1)
).toEqual(ast2);

console.info('transformer test passed');
