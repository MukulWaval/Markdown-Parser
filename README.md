# Markdown Parser

This project is a **TypeScript-based Markdown parser** designed to process Obsidian-flavored Markdown and convert it into a desired output format. It includes a fully automated development workflow with build, testing, linting, and debugging capabilities.

---

## Features

- **Markdown Parsing**: Handles headings, lists, bold, italics, links, and other Markdown syntax.
- **Jest Testing**: Comprehensive unit tests for robust functionality.
- **ESLint Integration**: Ensures code quality and adherence to best practices.
- **TypeScript Support**: Provides type safety and modern JavaScript features.
- **Automated Workflow**: Scripts for build, test, lint, debug, and watch tasks.

---

## Project Structure

```
Markdown-Parser/
├── src/
│   └── parser.ts       # Main parser logic
├── tests/
│   └── parser.test.ts  # Test cases for the parser
├── dist/               # Compiled JavaScript files
├── tsconfig.json       # TypeScript configuration
├── jest.config.ts      # Jest configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MukulWaval/Markdown-Parser.git
   cd Markdown-Parser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Build the Project

Compile the TypeScript files to JavaScript:

```bash
npm run build
```

### Start the Application

Run the compiled JavaScript files:

```bash
npm run start
```

### Watch Mode

Recompile TypeScript files on changes:

```bash
npm run watch
```

### Run Tests

Execute unit tests using Jest:

```bash
npm run test
```

### Lint the Code

Check the code for linting issues:

```bash
npm run lint
```

Automatically fix linting issues:

```bash
npm run lint:fix
```

### Debugging

Start debugging using Node.js' inspector:

```bash
npm run debug
```

---

## Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run build`    | Compile TypeScript to JavaScript             |
| `npm run watch`    | Watch and recompile TypeScript files         |
| `npm run test`     | Run unit tests using Jest                    |
| `npm run lint`     | Check code for linting issues                |
| `npm run lint:fix` | Fix linting issues automatically             |
| `npm run start`    | Run the compiled JavaScript files            |
| `npm run debug`    | Debug the application with Node.js inspector |

---

## Debugging in Visual Studio Code

To debug the project in VS Code, configure the `.vscode/launch.json` file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "preLaunchTask": "npm: build",
      "program": "${workspaceFolder}/dist/parser.js",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach Debugger",
      "port": 9229,
      "restart": true
    }
  ]
}
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear descriptions.
4. Submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
