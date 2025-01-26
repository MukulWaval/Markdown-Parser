import Lexer from "./src/lexer";

const lexer = new Lexer({});
lexer.setInput(`## Heading 2\n### Heading 3`);
const tokens = lexer.tokenize();
console.log(tokens);
