export interface CodeGeneratorOptions {}

export class CodeGenerator {
  private options: CodeGeneratorOptions;

  constructor(options: CodeGeneratorOptions) {
    this.options = options;
  }

  public generateCode(): void {}
}

export default CodeGenerator;
