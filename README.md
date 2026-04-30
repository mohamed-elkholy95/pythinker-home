<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/mohamed-elkholy95/Pythinker-ai@main/webui/public/brand/icon.svg" alt="Pythinker" width="180">
</p>

<h1 align="center">🐍 Pythinker</h1>

<div align="center">
  <p>
    <a href="https://pypi.org/project/pythinker-ai/"><img src="https://img.shields.io/pypi/v/pythinker-ai?cacheSeconds=300" alt="PyPI"></a>
    <a href="https://pepy.tech/projects/pythinker-ai"><img src="https://img.shields.io/pepy/dt/pythinker-ai?label=downloads&color=%2312b76a&cacheSeconds=600" alt="Downloads"></a>
    <img src="https://img.shields.io/badge/python-%E2%89%A53.11-blue" alt="Python">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </p>
</div>

🐍 **Pythinker** is an open-source, ultra-lightweight personal-AI-agent framework. It keeps the core agent loop small and readable while still supporting chat channels, long-term memory, MCP, and practical deployment paths — so you can go from local setup to a long-running personal agent with minimal overhead.

> Powered by a small, multiplexing agent loop: one Python process listens to Slack, Telegram, Discord, WhatsApp, Matrix, MS Teams, email, a WebSocket WebUI, and an OpenAI-compatible HTTP API — all backed by a single session-scoped memory layer.

## 💡 Key Features

- **Ultra-lightweight** — a small readable core. Stable long-running behavior without orchestration sprawl.
- **Channel-agnostic** — Slack, Telegram, Discord, WhatsApp, Matrix, MS Teams, email, WebSocket, plus an OpenAI-compatible HTTP API.
- **Provider-rich** — 25+ LLM providers (Anthropic, OpenAI, Azure OpenAI, OpenAI Codex, GitHub Copilot, Qwen/DashScope, MiniMax, VolcEngine, Moonshot, DeepSeek, StepFun, and more) behind a single interface.
- **Memory that learns** — a two-phase "Dream" process consolidates long-term memory into `MEMORY.md` / `SOUL.md` / `USER.md`, auto-versioned with pure-Python git.
- **Skills & MCP** — bundled skills (GitHub, cron, weather, tmux, summarize, skill-creator, …) plus first-class [Model Context Protocol](https://modelcontextprotocol.io/) tool access.
- **Sandboxed shell** — every command is wrapped in a bubblewrap sandbox on Linux; file tools enforce workspace boundaries.
- **Hackable** — the Python package is ~55k LOC with zero monolithic orchestration layer. Read it, fork it, extend it.

## 📦 Install

> **Pythinker requires Python 3.11 or newer.** Check your version with `python3 --version`. If yours is older, follow the per-OS steps below first.

### 1. Install Python 3.11+ (skip if you already have it)

<details>
<summary><b>macOS</b></summary>

```bash
# Recommended — Homebrew (https://brew.sh)
brew install python@3.13

# Or download an installer from python.org:
#   https://www.python.org/downloads/macos/
# After install, verify:
python3 --version    # should print 3.11 or newer
```
</details>

<details>
<summary><b>Linux</b></summary>

```bash
# Debian / Ubuntu
sudo apt update && sudo apt install -y python3.13 python3.13-venv python3-pip

# Fedora / RHEL / Rocky
sudo dnf install -y python3.13 python3-pip

# Arch
sudo pacman -S python python-pip

# Verify
python3 --version    # should print 3.11 or newer
```

If your distro's repos don't ship 3.11+, install [pyenv](https://github.com/pyenv/pyenv#installation) or use the `uv` flow below — `uv` will fetch a managed Python automatically.
</details>

<details>
<summary><b>Windows</b></summary>

```powershell
# Recommended — winget (built into Windows 10/11)
winget install Python.Python.3.13

# Or download an installer from python.org:
#   https://www.python.org/downloads/windows/
# At the bottom of the installer, tick "Add python.exe to PATH" before clicking Install.

# Verify (open a new PowerShell):
python --version    # should print 3.11 or newer
```

If `python` isn't found, restart your shell (or sign out / back in) so the new `PATH` takes effect.
</details>

### 2. Install Pythinker

```bash
uv tool install pythinker-ai
```

This installs Pythinker into an isolated environment and puts `pythinker` on your `PATH`. [uv](https://docs.astral.sh/uv/) handles Python, PATH, and upgrades for you — and will fetch a managed Python 3.11+ if your system doesn't have one.

<details>
<summary>Don't have <code>uv</code>?</summary>

```bash
# macOS / Linux / WSL:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell):
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Restart your shell so the new `PATH` is picked up, then re-run `uv tool install pythinker-ai`.
</details>

<details>
<summary>Prefer <code>pipx</code>, plain <code>pip</code>, or source?</summary>

```bash
# pipx (equivalent to uv tool install, slower):
pipx install pythinker-ai

# Plain pip (last resort — you may need to add ~/.local/bin to PATH):
pip install --user pythinker-ai

# From source (contributors only):
git clone git@github.com:mohamed-elkholy95/Pythinker-ai.git
cd Pythinker-ai && uv sync --all-extras
```

If `pythinker` isn't found after install, run `pythinker doctor` (via `python -m pythinker doctor` if needed) for diagnostics.
</details>

### 3. Optional extras

Pythinker ships small to keep the default install fast. Pull in the features you actually use:

```bash
uv tool install 'pythinker-ai[reports]'   # Markdown → PDF reports (research/report deliverables)
uv tool install 'pythinker-ai[matrix]'    # Matrix channel (E2E messaging)
uv tool install 'pythinker-ai[discord]'   # Discord channel
uv tool install 'pythinker-ai[msteams]'   # Microsoft Teams channel
uv tool install 'pythinker-ai[browser]'   # Headless browser tool (Playwright)
uv tool install 'pythinker-ai[pdf]'       # Read PDF files (PyMuPDF)
uv tool install 'pythinker-ai[api]'       # OpenAI-compatible HTTP server
# Combine: uv tool install 'pythinker-ai[reports,discord,browser]'
```

## 🚀 Quick Start

```bash
pythinker onboard                           # write a config at ~/.pythinker/config.json
pythinker provider login openai-codex       # OAuth sign-in (the default provider)
pythinker agent                             # chat
```

`pythinker onboard` ships a config preconfigured for **OpenAI Codex via ChatGPT OAuth** (no API key needed). To use a different provider/model, edit `~/.pythinker/config.json` — see [Configuration](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/configuration.md) for the full catalog of 25+ providers.

- Want different LLM providers, web search, MCP, security settings, or more config options? See [Configuration](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/configuration.md).
- Want to run Pythinker in chat apps like Telegram, Discord, Slack, WhatsApp, or Matrix? See [Chat Apps](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/chat-apps.md).
- Want Docker or Linux service deployment? See [Deployment](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/deployment.md).

## 🧪 WebUI (Development)

> [!NOTE]
> The WebUI development workflow currently requires a source checkout and is not yet shipped together with the official packaged release. See the [WebUI README](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/webui/README.md) for full WebUI development docs and build steps.

**1. Enable the WebSocket channel in `~/.pythinker/config.json`**

```json
{ "channels": { "websocket": { "enabled": true } } }
```

**2. Start the gateway**

```bash
pythinker gateway
```

**3. Start the WebUI dev server**

```bash
cd webui
bun install
bun run dev
```

## 🏗️ Architecture

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/mohamed-elkholy95/Pythinker-ai@main/webui/public/brand/arctecture.webp" alt="Pythinker architecture" width="800">
</p>

🐍 Pythinker stays lightweight by centering everything around a small agent loop: messages come in from chat apps, the LLM decides when tools are needed, and memory or skills are pulled in only as context instead of becoming a heavy orchestration layer. That keeps the core path readable and easy to extend, while still letting you add channels, tools, memory, and deployment options without turning the system into a monolith.

See [`docs/ARCHITECTURE.md`](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/ARCHITECTURE.md) for a forensic walkthrough of the runtime.

## ✨ Features

<table align="center">
  <tr align="center">
    <th><p align="center">📈 24/7 Real-Time Market Analysis</p></th>
    <th><p align="center">🚀 Full-Stack Software Engineer</p></th>
    <th><p align="center">📅 Smart Daily Routine Manager</p></th>
    <th><p align="center">📚 Personal Knowledge Assistant</p></th>
  </tr>
  <tr>
    <td align="center">Discovery • Insights • Trends</td>
    <td align="center">Develop • Deploy • Scale</td>
    <td align="center">Schedule • Automate • Organize</td>
    <td align="center">Learn • Memory • Reasoning</td>
  </tr>
</table>

## 📚 Docs

Browse the [repo docs](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/README.md) for the current GitHub development version.

- Talk to Pythinker from familiar chat apps: [Chat Apps](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/chat-apps.md)
- Configure providers, web search, MCP, and runtime behavior: [Configuration](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/configuration.md)
- Integrate Pythinker with local tools and automations: [OpenAI-Compatible API](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/openai-api.md) · [Python SDK](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/python-sdk.md)
- Run Pythinker with Docker or as a Linux service: [Deployment](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/deployment.md)
- Deeper dives: [Architecture](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/ARCHITECTURE.md) · [Memory](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/memory.md) · [Multiple Instances](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/multiple-instances.md) · [Channel Plugin Guide](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/channel-plugin-guide.md)

## 🤝 Contribute & Roadmap

PRs welcome! The codebase is intentionally small and readable. 🤗

### Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Stable releases — bug fixes and minor improvements |
| `dev` | Experimental features — new features and breaking changes |

**Unsure which branch to target?** See [CONTRIBUTING.md](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/CONTRIBUTING.md) for details.

**Roadmap** — Pick an item and [open a PR](https://github.com/mohamed-elkholy95/Pythinker-ai/pulls)!

- **Multi-modal** — See and hear (images, voice, video)
- **Long-term memory** — Never forget important context
- **Better reasoning** — Multi-step planning and reflection
- **More integrations** — Calendar and more
- **Self-improvement** — Learn from feedback and mistakes

## 🔐 Security

Found a vulnerability? Please **do not open a public issue**. Follow the private disclosure process in [`SECURITY.md`](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/SECURITY.md).

## 📄 License

Pythinker is released under the [MIT License](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/LICENSE). Third-party components redistributed with the project are listed in [`THIRD_PARTY_NOTICES.md`](https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/THIRD_PARTY_NOTICES.md).

<p align="center">
  <em>Thanks for visiting ✨ Pythinker!</em>
</p>
