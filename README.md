## SUPER TINY COMPILER

Almost the *same* as James Kyle's [super-tiny-compiler](https://github.com/thejameskyle/the-super-tiny-compiler), great thanks.

However, I'm kind of man who don't get the gist until I typed the code and unit test it.
So here is my recreation.

## Compile Flow

* tokenizer: take a text string as input, output an array of tokens
* parser: take tokens as input, output a AST tree
* transformer: take ast as input, output another AST

## Better Do Yourself

run `babel-node --presets=es2015 test/test_tokenizer.js`,
`babel-node --presets=es2015 test/test_parser.js`,
`babel-node --presets=es2015 test/test_transformer.js`
 to see what the compiler does in each phase.
However, I recommand you to recreate your own compiler, too.
These phase are easily mixed up.