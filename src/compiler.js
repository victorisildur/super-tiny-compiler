import tokenizer from './tokenizer';
import parser from './parser';
import transform from './transform';
import codeGenerator from './code_generator';

const compiler = lisp => {
    let tokens = tokenizer(lisp);
    let ast = parser(tokens);
    let newAst = transform(ast);
    let newCode = codeGenerator(newAst);
    return newCode;
};

export default compiler;
