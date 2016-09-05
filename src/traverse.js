/* inner traverse iterator
 */
const _traverse = (node, parent, visitor) => {
    switch(node.type) {
    case 'Program':
        visitor.Program(node, null);
        node.body.forEach(child => {
            _traverse(child, node, visitor);
        });
        break;
    case 'NumberLiteral':
        visitor.NumberLiteral(node, parent);
        break;
    case 'CallExpression':
        visitor.CallExpression(node, parent);
        node.params.forEach(child => {
            _traverse(child, node, visitor);
        });
        break;
    default:
        throw new Error('unknown node type, node:' + JSON.stringify(node));
    }
};

/*
 * DFS a ast, calling vistor's method on each node
 * Visitor format: {NumberLiteral, CallExpression, Program}
 */
const traverse = (ast, visitor) => {
    _traverse(ast, null, visitor);
};

export default traverse;
