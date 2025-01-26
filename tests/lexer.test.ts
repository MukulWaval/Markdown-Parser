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

  test("should have a matchText method", () => {
    expect(lexer["matchText"]).toBeDefined();
    expect(typeof lexer["matchText"]).toBe("function");
  });

  test("should have a lexNewline method", () => {
    expect(lexer["lexNewline"]).toBeDefined();
    expect(typeof lexer["lexNewline"]).toBe("function");
  });

  test("should tokenize an empty string", () => {
    let tokens: Token[] = [];
    lexer.setInput("");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([]);
  });

  test("should tokenize a single line of text", () => {
    lexer.setInput("Hello, world!");
    const tokens: Token[] = lexer.tokenize();
    expect(tokens).toEqual([{ type: "TEXT", value: "Hello, world!" }]);
  });

  test("should tokenize a heading", () => {
    lexer.setInput("# Heading 1");
    const tokens: Token[] = lexer.tokenize();
    expect(tokens).toEqual([
      { type: "HEADING_1", value: "#" },
      { type: "TEXT", value: " Heading 1" }
    ]);
  });

  test("should tokenize multiple headings", () => {
    lexer.setInput("## Heading 2\n### Heading 3");
    const tokens: Token[] = lexer.tokenize();
    expect(tokens).toEqual([
      { type: "HEADING_2", value: "##" },
      { type: "TEXT", value: " Heading 2" },
      { type: "LINE_BREAK", value: "\n" },
      { type: "HEADING_3", value: "###" },
      { type: "TEXT", value: " Heading 3" }
    ]);
  });

  test("should tokenize all types of headings", () => {
    let tokens: Token[] = [];
    lexer.setInput("# Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_1",
        value: "#"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);

    lexer.setInput("## Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_2",
        value: "##"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);

    lexer.setInput("### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_3",
        value: "###"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);

    lexer.setInput("#### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_4",
        value: "####"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);

    lexer.setInput("##### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_5",
        value: "#####"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);

    lexer.setInput("###### Hello, World!");
    tokens = lexer.tokenize();
    expect(tokens).toEqual([
      {
        type: "HEADING_6",
        value: "######"
      },
      {
        type: "TEXT",
        value: " Hello, World!"
      }
    ]);
  });

  test("should tokenize text with line breaks", () => {
    lexer.setInput("Hello\nWorld");
    const tokens: Token[] = lexer.tokenize();
    expect(tokens).toEqual([
      { type: "TEXT", value: "Hello" },
      { type: "LINE_BREAK", value: "\n" },
      { type: "TEXT", value: "World" }
    ]);
  });

  test("should tokenize mixed content", () => {
    lexer.setInput("# Heading\nSome text\n## Subheading\nMore text");
    const tokens: Token[] = lexer.tokenize();
    expect(tokens).toEqual([
      { type: "HEADING_1", value: "#" },
      { type: "TEXT", value: " Heading" },
      { type: "LINE_BREAK", value: "\n" },
      { type: "TEXT", value: "Some text" },
      { type: "LINE_BREAK", value: "\n" },
      { type: "HEADING_2", value: "##" },
      { type: "TEXT", value: " Subheading" },
      { type: "LINE_BREAK", value: "\n" },
      { type: "TEXT", value: "More text" }
    ]);
  });
});
