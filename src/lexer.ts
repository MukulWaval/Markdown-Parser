export interface LexerOptions {}

export class Lexer {
  private options: LexerOptions;

  constructor(options: LexerOptions) {
    this.options = options;
  }

  public lex(): void {}
}

export default Lexer;
