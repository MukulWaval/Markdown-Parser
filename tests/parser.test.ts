import Parser, { ParserOptions } from "../src/parser";

describe("Parser", () => {
  let options: ParserOptions;
  let parser: Parser;

  beforeEach(() => {
    options = {}; // Mock options
    parser = new Parser(options);
  });

  test("should create an instance of Parser", () => {
    expect(parser).toBeInstanceOf(Parser);
  });

  test("should have a parse method", () => {
    expect(parser.parse).toBeDefined();
    expect(typeof parser.parse).toBe("function");
  });

  test("should initialize options correctly", () => {
    expect(parser["options"]).toBe(options);
  });
});
