import Lexer, { LexerOptions } from "../src/lexer";

describe("Lexer", () => {
  let options: LexerOptions;
  let lexer: Lexer;

  beforeEach(() => {
    options = {}; // Mock options
    lexer = new Lexer(options);
  });

  test("should create an instance of Lexer", () => {
    expect(lexer).toBeInstanceOf(Lexer);
  });

  test("should have a lex method", () => {
    expect(lexer.lex).toBeDefined();
    expect(typeof lexer.lex).toBe("function");
  });

  test("should initialize options correctly", () => {
    expect(lexer["options"]).toBe(options);
  });
});
