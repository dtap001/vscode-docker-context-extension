import * as vscode from 'vscode';
import { exec } from 'child_process';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );

  statusBarItem.text = '🐳 Docker Context: …';
  statusBarItem.tooltip = 'Switch Docker context';
  statusBarItem.command = 'dockerContext.switch';
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'dockerContext.switch',
      switchDockerContext
    )
  );

  updateDockerContext();
  setInterval(updateDockerContext, 5000);
}

function updateDockerContext() {
  exec('docker context show', (error: any, stdout: string) => {
    if (error) {
      statusBarItem.text = '🐳 Docker: n/a';
      return;
    }

    statusBarItem.text = `🐳 Docker: ${stdout.trim()}`;
  });
}

function switchDockerContext() {
  exec('docker context ls --format "{{.Name}}"', async (error: any, stdout: string) => {
    if (error) {
      vscode.window.showErrorMessage('Failed to retrieve Docker contexts');
      return;
    }

    const contexts = stdout
      .split('\n')
      .map((c: string) => c.trim())
      .filter(Boolean);

    const selected = await vscode.window.showQuickPick(contexts, {
      placeHolder: 'Select a Docker context to switch to'
    });

    if (!selected) {
      return;
    }

    exec(`docker context use ${selected}`, (err: any) => {
      if (err) {
        vscode.window.showErrorMessage(
          `Failed to switch context: ${selected}`
        );
        return;
      }

      updateDockerContext();
    });
  });
}

export function deactivate() {}