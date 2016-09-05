import traverse from './traverse';

/* @func: Transform ast to newAst
 *        We use _context to point to a node's newNode's children,
 *        in this way we fully map the old tree to a new tree.
 *        Whenever we come across a node, this node's parent's _context point's to the newNode's parent's children,
 *        therefore we know where to place the newNode.
 * @param: ast{object}: old abstract syntax tree
 * @return: newAst{object}: new abstract syntax tree
 */
const transform = ast => {
    let newAst = {
        type: 'Program',
        body: []
    };

    // old node's _context point to new node's children
    ast._context = newAst.body;

    traverse(ast, {
        Program: () => {},
        NumberLiteral: (node, parent) => {
            let newNode = {
                type: 'NumberLiteral',
                value: node.value
            };
            // no further child
            node._context = null;
            // add newNode to parent's _context
            parent._context.push(newNode);
        },
        CallExpression: (node, parent) => {
            let newNode = {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: node.name
                },
                arguments: []
            };
            
            // old node's _context point to new node's children
            node._context = newNode.arguments;
            
            if (parent.type === 'Program') {
                newNode = {
                    type: 'ExpressionStatement',
                    expression: newNode
                };
            }

            // new node add to old node's parent's _context
            // aka, new node's parent's children
            parent._context.push(newNode);
        }
    });

    return newAst;
};

export default transform;
