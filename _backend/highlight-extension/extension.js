const vscode = require('vscode');

const STORAGE_KEY = 'persistentTextHighlighter.highlights';
const DEFAULT_COLOR = 'rgba(255,255,0,0.2)';

/** @type {Record<string, Array<{start: {line: number, character: number}, end: {line: number, character: number}, color: string}>>} */
let highlights = {};
/** @type {Map<string, vscode.TextEditorDecorationType>} */
const decorationTypes = new Map();
let extensionContext;

function keyFor(document) {
  return document.uri.toString();
}

function savedRange(range, color) {
  return {
    start: { line: range.start.line, character: range.start.character },
    end: { line: range.end.line, character: range.end.character },
    color
  };
}

function toRange(item) {
  return new vscode.Range(
    new vscode.Position(item.start.line, item.start.character),
    new vscode.Position(item.end.line, item.end.character)
  );
}

function getDecorationType(color) {
  if (!decorationTypes.has(color)) {
    decorationTypes.set(color, vscode.window.createTextEditorDecorationType({
      backgroundColor: color,
      borderRadius: '2px'
    }));
  }
  return decorationTypes.get(color);
}

async function persist() {
  await extensionContext.workspaceState.update(STORAGE_KEY, highlights);
}

function redrawEditor(editor) {
  const entries = highlights[keyFor(editor.document)] || [];
  const byColor = new Map();
  for (const item of entries) {
    const ranges = byColor.get(item.color) || [];
    try {
      ranges.push(toRange(item));
    } catch {
      // A stale range from a changed document is ignored rather than breaking the editor.
    }
    byColor.set(item.color, ranges);
  }

  for (const type of decorationTypes.values()) editor.setDecorations(type, []);
  for (const [color, ranges] of byColor) editor.setDecorations(getDecorationType(color), ranges);
}

function redrawAll() {
  for (const editor of vscode.window.visibleTextEditors) redrawEditor(editor);
}

function currentColor() {
  return vscode.workspace.getConfiguration('highlightExtension').get('highlightColor', DEFAULT_COLOR);
}

function rangesOverlap(a, b) {
  return a.start.isBeforeOrEqual(b.end) && b.start.isBeforeOrEqual(a.end);
}

function registerCommand(command, callback) {
  extensionContext.subscriptions.push(vscode.commands.registerCommand(command, callback));
}

async function highlightSelection() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.selection.isEmpty) {
    vscode.window.showInformationMessage('Select text before adding a highlight.');
    return;
  }

  const uri = keyFor(editor.document);
  const range = new vscode.Range(editor.selection.start, editor.selection.end);
  const color = currentColor();
  const entries = highlights[uri] || [];
  if (entries.some(item => item.color === color && toRange(item).isEqual(range))) {
    vscode.window.showInformationMessage('That selection is already highlighted.');
    return;
  }
  highlights[uri] = [...entries, savedRange(range, color)];
  await persist();
  redrawEditor(editor);
}

async function selectColor() {
  const options = [
    { label: 'Yellow', value: 'rgba(255,255,0,0.2)' },
    { label: 'Blue', value: 'rgba(80,160,255,0.25)' },
    { label: 'Green', value: 'rgba(80,200,120,0.25)' },
    { label: 'Red', value: 'rgba(255,99,71,0.3)' },
    { label: 'Purple', value: 'rgba(180,100,255,0.25)' },
    { label: 'Custom CSS color…', value: undefined }
  ];
  const choice = await vscode.window.showQuickPick(options, { placeHolder: 'Choose the color for new highlights' });
  if (!choice) return;

  let color = choice.value;
  if (!color) {
    color = await vscode.window.showInputBox({
      prompt: 'Enter a CSS color (for example, rgba(255, 99, 71, 0.4))',
      value: currentColor(),
      validateInput: value => value.trim() ? undefined : 'A CSS color is required.'
    });
  }
  if (!color) return;

  await vscode.workspace.getConfiguration('highlightExtension').update(
    'highlightColor', color.trim(), vscode.ConfigurationTarget.Workspace
  );
  vscode.window.showInformationMessage(`New highlights will use ${color.trim()}.`);
}

async function clearCurrentFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;
  const uri = keyFor(editor.document);
  if (!highlights[uri]?.length) return;
  delete highlights[uri];
  await persist();
  redrawEditor(editor);
  vscode.window.showInformationMessage('Cleared all highlights in the current file.');
}

async function clearSelectedRange() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;
  const uri = keyFor(editor.document);
  const entries = highlights[uri] || [];
  const selected = new vscode.Range(editor.selection.start, editor.selection.end);
  const remaining = entries.filter(item => !rangesOverlap(toRange(item), selected));
  if (remaining.length === entries.length) {
    vscode.window.showInformationMessage('No highlight covers the current selection.');
    return;
  }
  if (remaining.length) highlights[uri] = remaining;
  else delete highlights[uri];
  await persist();
  redrawEditor(editor);
}

async function clearWorkspace() {
  if (!Object.keys(highlights).length) return;
  highlights = {};
  await persist();
  redrawAll();
  vscode.window.showInformationMessage('Cleared all workspace highlights.');
}

function activate(context) {
  extensionContext = context;
  highlights = context.workspaceState.get(STORAGE_KEY, {});

  registerCommand('extension.highlightText', highlightSelection);
  registerCommand('extension.selectHighlightColor', selectColor);
  registerCommand('extension.clearAllHiglightsInCurrentFile', clearCurrentFile);
  registerCommand('extension.clearHighlightForSelectedRange', clearSelectedRange);
  registerCommand('extension.clearAllHighlights', clearWorkspace);

  context.subscriptions.push(vscode.window.onDidChangeVisibleTextEditors(redrawAll));
  context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor) redrawEditor(editor);
  }));
  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('highlightExtension.highlightColor')) redrawAll();
  }));
  redrawAll();
}

function deactivate() {
  for (const type of decorationTypes.values()) type.dispose();
  decorationTypes.clear();
}

module.exports = { activate, deactivate };
