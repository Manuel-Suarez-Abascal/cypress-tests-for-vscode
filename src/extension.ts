import * as vscode from 'vscode';
import { spawn } from 'child_process';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.installCypress', () => {
    const terminal = vscode.window.createTerminal('Cypress Installer');
    terminal.show();

    // Check if package.json already exists
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (workspaceFolder) {
      const packageJsonPath = `${workspaceFolder.uri.fsPath}/package.json`;
      if (!fs.existsSync(packageJsonPath)) {
        terminal.sendText('npm init -y');
      }
    }

    terminal.sendText('npm i cypress --save-dev');
  });

  const disposableRunTestsInUI = vscode.commands.registerCommand('extension.runCypressTestsInUI', () => {
    const terminal = vscode.window.createTerminal('Cypress Headed Runner');
    terminal.show();
    terminal.sendText('npx cypress open');
  });

  const disposableRunTestsHeadless = vscode.commands.registerCommand('extension.runCypressTestsHeadless', () => {
    const terminal = vscode.window.createTerminal('Cypress Headless Runner');
    terminal.show();
    terminal.sendText('npx cypress run');
  });

  context.subscriptions.push(disposable, disposableRunTestsInUI, disposableRunTestsHeadless);
}
