const codeGenerator = ast => {
    let node = ast;
    switch(node.type) {
    case 'Program':
        // Program's direct children are ExpressionStatements
        return node.body.map(codeGenerator).join('\n');
    case 'ExpressionStatement':
        return codeGenerator(node.expression);
    case 'CallExpression':
        return codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')';
    case 'Identifier':
        return node.name;
    case 'NumberLiteral':
        return node.value;
    default:
        throw new Error('unknown node type: ' + node.type);
    }
};

export default codeGenerator;
