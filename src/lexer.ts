export type Token = {
  type: string;
  value: string;
  location: {
    column: number;
    line: number;
  };
};

export interface LexerOptions {}

/**
 * Lexer class is responsible for tokenizing a given input string
 * into an array of tokens based on specific rules defined for
 * token types such as headings.
 */
export class Lexer {
  private options: LexerOptions; // Options for the lexer configuration
  private input: string = ""; // The input string to be tokenized

  /**
   * Constructs a new Lexer instance with the provided options.
   *
   * @param options - Configuration options for the lexer.
   */
  constructor(options: LexerOptions) {
    this.options = options;
  }

  /**
   * Sets the input string to be tokenized.
   *
   * @param input - The input string to be processed.
   */
  public setInput(input: string): void {
    this.input = input;
  }

  /**
   * Tokenizes the input string and returns an array of tokens.
   *
   * @returns An array of tokens extracted from the input string.
   */
  public tokenize(): Token[] {
    const tokens: Token[] = []; // Array to hold the generated tokens
    let line = 1; // Current line number
    let column = 1; // Current column number
    let position = 0; // Current position in the input string

    while (position < this.input.length) {
      // Handle new line characters
      if (this.input[position] === "\n") {
        line++;
        column = 1;
        position++;
        continue;
      }

      // Attempt to match a heading token
      const headingToken = this.matchHeading(
        this.input,
        position,
        line,
        column
      );
      if (headingToken) {
        tokens.push(headingToken); // Add the matched token to the array
        position += headingToken.value.length; // Update position
        column += headingToken.value.length; // Update column
        continue;
      }

      position++; // Move to the next character
      column++; // Increment column count
    }

    return tokens; // Return the array of tokens
  }

  /**
   * Matches a heading token in the input string starting from a given position.
   *
   * @param input - The input string to search within.
   * @param position - The current position in the input string.
   * @param line - The current line number.
   * @param column - The current column number.
   * @returns A Token object if a heading is matched, otherwise null.
   */
  private matchHeading(
    input: string,
    position: number,
    line: number,
    column: number
  ): Token | null {
    const match = input.slice(position).match(/^(#{1,6})\s+(.*)/); // Regex to match headings
    if (match) {
      const [matched, hashes, text] = match; // Destructure the match result
      return {
        type: `HEADING_${hashes.length}`, // Determine the token type based on the number of hashes
        value: matched, // The matched heading text
        location: {
          line, // Line number of the token
          column // Column number of the token
        }
      };
    }
    return null; // Return null if no heading is matched
  }
}

export default Lexer;
