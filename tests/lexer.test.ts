import Lexer, { LexerOptions, Token } from "../src/lexer";

describe("Lexer", () => {
  let options: LexerOptions;
  let lexer: Lexer;

  beforeEach(() => {
    options = {};
    lexer = new Lexer(options);
  });

  test("should create an instance of Lexer", () => {
    expect(lexer).toBeInstanceOf(Lexer);
  });

  test("should have a tokenize method", () => {
    expect(lexer.tokenize).toBeDefined();
    expect(typeof lexer.tokenize).toBe("function");
  });

  test("should initialize options correctly", () => {
    expect(lexer["options"]).toBe(options);
  });

  test("should have setInput method", () => {
    expect(lexer.setInput).toBeDefined();
    expect(typeof lexer.setInput).toBe("function");
  });

  test("should set input correctly", () => {
    const input = "# Hello, World!";
    lexer.setInput(input);
    expect(lexer["input"]).toBe(input);
  });

  test("should have a matchHeading method", () => {
    expect(lexer["matchHeading"]).toBeDefined();
    expect(typeof lexer["matchHeading"]).toBe("function");
  });

  test("should tokenize an empty string", () => {
    let tokens: Token[] = [];
    lexer.setInput("");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([]);
  });

  test("should tokenize a headings", () => {
    let tokens: Token[] = [];
    lexer.setInput("# Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_1",
        value: "# Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);

    lexer.setInput("## Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_2",
        value: "## Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);

    lexer.setInput("### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_3",
        value: "### Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);

    lexer.setInput("#### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_4",
        value: "#### Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);

    lexer.setInput("##### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_5",
        value: "##### Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);

    lexer.setInput("###### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_6",
        value: "###### Hello, World!",
        location: {
          line: 1,
          column: 1
        }
      }
    ]);
  });
});
