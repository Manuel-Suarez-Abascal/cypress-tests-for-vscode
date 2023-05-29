# Cypress Runner Extension

## Description

Cypress Runner is a Visual Studio Code extension that provides convenient commands for installing Cypress and running Cypress tests directly from the editor.

## Installation

1. Launch Visual Studio Code.
2. Open the Extensions view by clicking on the square icon in the sidebar or by pressing `Ctrl+Shift+X`.
3. Search for "Cypress Runner" in the Extensions Marketplace.
4. Click on the "Install" button.
5. Once installed, the extension will be activated automatically.

## Features

- **Install Cypress:** Run `npm init -y` and `npm i cypress --save-dev` to install Cypress and set up the necessary configuration files (`package.json`).
- **Run Cypress Tests (In UI):** Open the Cypress Test Runner UI using `npx cypress open`.
- **Run Cypress Tests (Headless):** Execute Cypress tests in headless mode using `npx cypress run`.

## Usage

### Install Cypress

1. Open a workspace or project folder where you want to install Cypress.
2. Open the Command Palette (`Ctrl+Shift+P`) and search for "CY: Install Cypress".
3. Select "CY: Install Cypress" from the list to execute the command.
4. The VSCode terminal will open and run `npm init -y` and `npm i cypress --save-dev` to install Cypress.

### Run Cypress Tests (In UI)

1. Open a workspace or project folder that contains Cypress tests.
2. Open the Command Palette (`Ctrl+Shift+P`) and search for "CY: Run Cypress Tests in UI mode".
3. Select "CY: Run Cypress Tests in UI mode" to execute the command.
4. The VSCode terminal will open and run `npx cypress open` to launch the Cypress Test Runner UI.

### Run Cypress Tests (Headless)

1. Open a workspace or project folder that contains Cypress tests.
2. Open the Command Palette (`Ctrl+Shift+P`) and search for "CY: Run Cypress Tests in headless mode)".
3. Select "CY: Run Cypress Tests in headless mode" to execute the command.
4. The VSCode terminal will open and run `npx cypress run` to execute Cypress tests in headless mode.

## Contributing

Contributions, bug reports, and feature requests are welcome! Please feel free to [submit an issue](https://github.com/Manuel-Suarez-Abascal/cypress-tests-for-vscode/issues) or create a pull request on the GitHub repository.

## License

This extension is released under the [MIT License](https://opensource.org/licenses/MIT).

