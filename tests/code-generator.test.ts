import CodeGenerator, { CodeGeneratorOptions } from "../src/code-generator";

describe("CodeGenerator", () => {
  let options: CodeGeneratorOptions;
  let codeGenerator: CodeGenerator;

  beforeEach(() => {
    options = {}; // Mock options
    codeGenerator = new CodeGenerator(options);
  });

  test("should create an instance of CodeGenerator", () => {
    expect(codeGenerator).toBeInstanceOf(CodeGenerator);
  });

  test("should have a generateCode method", () => {
    expect(codeGenerator.generateCode).toBeDefined();
    expect(typeof codeGenerator.generateCode).toBe("function");
  });
});
