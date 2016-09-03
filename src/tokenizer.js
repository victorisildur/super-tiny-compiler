const tokenizer = str => {
    let current = 0,
	tokens = [],
	NUM = /[0-9]/,
	NAME = /[a-zA-Z]/,
	WHITESPACE = /\s/;
    while (current < str.length) {
	let char = str[current];
	if (char === '(') {
	    tokens.push({
		type: 'paren',
		value: '('
	    });
	    current ++;
	    continue;
	}
	if (char === ')') {
	    tokens.push({
		type: 'paren',
		value: ')'
	    });
	    current ++;
	    continue;
	}
	if (WHITESPACE.test(char)) {
	    current++;
	    continue;
	}
	if (NAME.test(char)) {
	    let value = '';
	    while (NAME.test(char)) {
		value += char;
		char = str[++current];
	    }
	    tokens.push({
		type: 'name',
		value: value
	    });
	    continue;
	}
	if (NUM.test(char)) {
	    let value = '';
	    while (NUM.test(char)) {
		value += char;
		char = str[++current];
	    }
	    tokens.push({
		type: 'number',
		value: value
	    });
	    continue;
	}
    }
    return tokens;
};

export default tokenizer;
