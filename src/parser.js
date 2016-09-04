const walk = (tokens, curr) => {
    let token = tokens[curr],
	node = null;
    if (token.type === 'number') {
	// leaf node
	node = {type: 'NumberLiteral', value: token.value};
	curr ++;
    } else if (token.type === 'paren' && token.value === '(') {
	token = tokens[++curr];
	node = {type: 'CallExpression', name: token.value, params: []};
	curr ++;
	let child = null;
	// recursively push nodes to CallExpression Node's params
	while (({curr: curr, node: child} = walk(tokens, curr)) &&
	       (child !== null)) {
	    node.params.push(child);
	}
    } else if (token.type === 'paren' && token.value === ')') {
	// when encounter ')', recursion ends
	node = null;
	curr ++;
    } else {
	throw new Error('unkown token: ' + JSON.stringify(token));
    }
    return {
	curr,
	node
    };
};

const parser = tokens => {
    let curr = 0,
	node = null,
	ast = {
	    type: 'Program',
	    body: []
	};
    // a program body may consists of mutiple CallExpressions
    while (curr < tokens.length) {
	({curr, node} = walk(tokens, curr));
	ast.body.push(node);
    }
    return ast;
}

export default parser;
