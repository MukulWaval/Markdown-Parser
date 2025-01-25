export type Token = {
  type: string;
  value: string;
  location: {
    column: number;
    line: number;
  };
};
export interface LexerOptions {}

export class Lexer {
  private options: LexerOptions;

  constructor(options: LexerOptions) {
    this.options = options;
  }

  public tokenize(): Token[] {
    return [];
  }
}

export default Lexer;
