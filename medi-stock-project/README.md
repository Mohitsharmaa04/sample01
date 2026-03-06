# MediStock - Hospital Inventory Management System

## Overview
MediStock is a hospital inventory management system designed to streamline the management of medical supplies and equipment. This project utilizes modern web technologies including TypeScript, Tailwind CSS, and Vite for a responsive and efficient user interface.

## Project Structure
```
medi-stock-project
├── src
│   ├── index.css          # Styles for the project using Tailwind CSS
│   ├── main.ts            # Main entry point for the TypeScript application
│   ├── components         # Directory for reusable UI components
│   │   └── index.ts       # Exports components used in the application
│   └── types              # Directory for TypeScript types
│       └── index.ts       # Exports TypeScript types for type safety
├── .github
│   └── workflows
│       └── preview.yml     # GitHub Actions workflow for live preview
├── package.json           # npm configuration file with dependencies and scripts
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Documentation for the project
```

## Installation
To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd medi-stock-project
npm install
```

## Dependencies
This project requires the following dependencies:

- **tailwindcss**: For utility-first CSS styling.
- **postcss**: For transforming CSS with JavaScript plugins.
- **autoprefixer**: For adding vendor prefixes to CSS rules.
- **typescript**: For adding static type definitions to JavaScript.

### Development Dependencies
- **vite**: A build tool that provides a faster and leaner development experience.
- **vite-plugin-tailwindcss**: A Vite plugin for integrating Tailwind CSS.

## Live Preview
To enable live preview of the project on GitHub Box, ensure your `.github/workflows/preview.yml` file is set up to build and serve your project using Vite.

## Usage
After installation, you can run the development server with:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.