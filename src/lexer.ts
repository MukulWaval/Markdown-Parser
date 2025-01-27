export type Token = {
  type:
    | "HEADING_1"
    | "HEADING_2"
    | "HEADING_3"
    | "HEADING_4"
    | "HEADING_5"
    | "HEADING_6"
    | "TEXT"
    | "LINE_BREAK";
  value: string;
};

export interface LexerOptions {}

/**
 * Lexer class is responsible for tokenizing a given input string
 * into an array of tokens based on specific rules defined for
 * token types such as headings, text, and line breaks.
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
    let position = 0; // Current position in the input string

    while (position < this.input.length) {
      const char = this.input[position];

      switch (char) {
        case "\n":
          const newLineToken = this.lexNewline(tokens);
          if (newLineToken) {
            tokens.push(newLineToken);
          }
          position++;
          break;

        case "#":
          const headingToken = this.matchHeading(this.input, position);
          if (headingToken) {
            tokens.push({
              type: headingToken.type,
              value: headingToken.value.trim()
            });
            position += headingToken.value.length;
            break;
          }

        default:
          const textToken = this.matchText(this.input, position);
          if (textToken) {
            tokens.push(textToken);
            position += textToken.value.length;
            break;
          }
          position++;
          break;
      }
    }

    return tokens; // Return the array of tokens
  }

  /**
   * Lexes a newline character and adds it to the tokens array.
   *
   * @param tokens - The array of tokens to append to.
   * @returns A Token object representing the newline character.
   */
  private lexNewline(tokens: Token[]): Token | null {
    return {
      type: "LINE_BREAK",
      value: "\n"
    };
  }

  /**
   * Matches a heading token in the input string starting from a given position.
   *
   * @param input - The input string to search within.
   * @param position - The current position in the input string.
   * @returns A Token object if a heading is matched, otherwise null.
   */
  private matchHeading(input: string, position: number): Token | null {
    const match = input.slice(position).match(/^(#{1,6})\s+/); // Regex to match hashes for headings
    if (match) {
      const [hashes] = match; // Extract the hashes
      return {
        type: `HEADING_${hashes.trim().length}` as Token["type"], // Determine the token type based on the number of hashes
        value: hashes // The matched hashes
      };
    }
    return null; // Return null if no heading is matched
  }

  /**
   * Matches plain text in the input string starting from a given position.
   *
   * @param input - The input string to search within.
   * @param position - The current position in the input string.
   * @returns A Token object if text is matched, otherwise null.
   */
  private matchText(input: string, position: number): Token | null {
    const match = input.slice(position).match(/^[^\n]+/); // Regex to match plain text
    if (match) {
      const [text] = match; // Extract the matched text
      return {
        type: "TEXT", // Token type for plain text
        value: text // Trim any leading/trailing whitespace
      };
    }
    return null; // Return null if no text is matched
  }
}

export default Lexer;
