# Docker Context Status Bar 🦄

A lightweight Visual Studio Code extension that shows your **current Docker context** in the VS Code **status bar**, with the ability to **switch contexts with a single click**.

Perfect if you regularly work with multiple Docker environments (local, remote VM, SSH, cloud, etc.) and want to avoid *“oops, wrong context”* moments.

---

## ✨ Features

- 🔍 Displays the **active Docker context** in the VS Code status bar
- 🖱️ Click the status bar item to **list all available Docker contexts**
- 🔄 Instantly **switch context** from the dropdown
- 🚀 Automatically updates after context changes
- 🧠 Minimal, fast, and unobtrusive — no background polling loops

---

## 📦 Requirements

- Docker installed and available in your terminal
- `docker context` command supported (Docker 19.03+)
- VS Code 1.80+

---

## 🛠️ How It Works

The extension:
1. Reads the active Docker context using the Docker CLI
2. Displays it in the VS Code status bar
3. On click, fetches all available contexts
4. Lets you select a new context
5. Switches it immediately using `docker context use`

No configuration needed.

---

## ▶️ Usage

1. Open VS Code
2. Look at the **status bar (bottom area)**
3. You’ll see something like: 🐳 Docker: default
4. Click on it
5. Select another Docker context from the list
6. Done — the context is switched globally

---

## ⚠️ Notes

- The context change affects **your entire system**, not just VS Code
- If Docker is not available, the status bar item will show an error state
- Designed to stay visible at all times (no manual activation needed)

---

## 🧩 Extension Activation

The extension activates automatically when VS Code starts.
No commands or settings required.

---

## 📄 License

MIT

---

## 👤 Author

**Andras Valics**
