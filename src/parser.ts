export interface ParserOptions {}

export class Parser {
  private options: ParserOptions;

  constructor(options: ParserOptions) {
    this.options = options;
  }

  public parse(): void {}
}

export default Parser;
