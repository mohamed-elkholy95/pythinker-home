<script setup lang="ts">
import { ref, computed } from "vue";
import { useClipboard } from "../composables/useClipboard";

interface Tab {
  id: string;
  label: string;
  lines: string[];
}

const tabs: Tab[] = [
  {
    id: "uv",
    label: "uv",
    lines: ["uv tool install pythinker-ai", "pythinker --version"],
  },
  {
    id: "pipx",
    label: "pipx",
    lines: ["pipx install pythinker-ai"],
  },
  {
    id: "pip",
    label: "pip",
    lines: ["python -m pip install --user pythinker-ai"],
  },
  {
    id: "source",
    label: "from source",
    lines: [
      "git clone https://github.com/mohamed-elkholy95/Pythinker-ai",
      "cd Pythinker-ai && uv sync --all-extras",
    ],
  },
];

const active = ref<Tab["id"]>("uv");
const activeTab = computed(() => tabs.find((t) => t.id === active.value)!);

const installCmd = "uv tool install pythinker-ai";

const quickstartLines = [
  "pythinker onboard",
  "pythinker provider login openai-codex",
  "pythinker agent",
  "pythinker tui",
];

interface PyOS {
  id: string;
  label: string;
  lines: string[];
  note?: string;
}

const pyOptions: PyOS[] = [
  {
    id: "macos",
    label: "macOS",
    lines: [
      "# Recommended — Homebrew (https://brew.sh)",
      "brew install python@3.13",
      "python3 --version    # should print 3.11 or newer",
    ],
    note: "Or grab the installer from python.org/downloads/macos.",
  },
  {
    id: "linux",
    label: "Linux",
    lines: [
      "# Debian / Ubuntu",
      "sudo apt update && sudo apt install -y python3.13 python3.13-venv python3-pip",
      "",
      "# Fedora / RHEL / Rocky",
      "sudo dnf install -y python3.13 python3-pip",
      "",
      "# Arch",
      "sudo pacman -S python python-pip",
      "",
      "python3 --version    # should print 3.11 or newer",
    ],
    note: "If your distro doesn't ship 3.11+, use pyenv or the uv flow below — uv fetches a managed Python automatically.",
  },
  {
    id: "windows",
    label: "Windows",
    lines: [
      "# winget (built into Windows 10/11)",
      "winget install Python.Python.3.13",
      "",
      "# Or download the installer at python.org/downloads/windows",
      "# At the bottom, tick \"Add python.exe to PATH\" before installing.",
      "",
      "python --version    # should print 3.11 or newer",
    ],
    note: "If python isn't found, restart your shell so the new PATH takes effect.",
  },
];

const activePyOS = ref<PyOS["id"]>("macos");
const activePy = computed(() => pyOptions.find((p) => p.id === activePyOS.value)!);

function onPyTabKey(e: KeyboardEvent, idx: number) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault();
  const dir = e.key === "ArrowRight" ? 1 : -1;
  const next = pyOptions[(idx + dir + pyOptions.length) % pyOptions.length];
  activePyOS.value = next.id;
  queueMicrotask(() => {
    document.getElementById(`py-${next.id}`)?.focus();
  });
}

interface Extra {
  flag: string;
  blurb: string;
}

const extras: Extra[] = [
  { flag: "reports",  blurb: "Markdown → PDF reports" },
  { flag: "matrix",   blurb: "Matrix (E2E) channel" },
  { flag: "discord",  blurb: "Discord channel" },
  { flag: "msteams",  blurb: "Microsoft Teams channel" },
  { flag: "browser",  blurb: "Headless browser tool (Playwright)" },
  { flag: "pdf",      blurb: "Read PDF files (PyMuPDF)" },
  { flag: "api",      blurb: "OpenAI-compatible HTTP server" },
];

const { copy, isCopied, toastMessage, toastVisible } = useClipboard();

function onTabKey(e: KeyboardEvent, idx: number) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault();
  const dir = e.key === "ArrowRight" ? 1 : -1;
  const next = tabs[(idx + dir + tabs.length) % tabs.length];
  active.value = next.id;
  queueMicrotask(() => {
    document.getElementById(`t-${next.id}`)?.focus();
  });
}
</script>

<template>
  <section class="section" id="install" aria-labelledby="install-h">
    <div class="container">
      <p class="section__kicker">Install</p>
      <h2 id="install-h" class="section__title">One command. No build pipeline.</h2>

      <div class="install">
        <h3 class="step__title"><span class="step__num">1</span> Install Python 3.11+</h3>
        <p class="install__caption">
          Already on Python 3.11 or newer? Skip ahead to step 2. Check with
          <code>python3 --version</code>.
        </p>

        <div class="tabs" role="tablist" aria-label="Install Python by OS">
          <button
            v-for="(p, i) in pyOptions"
            :key="p.id"
            :id="`py-${p.id}`"
            class="tab"
            :class="{ 'is-active': activePyOS === p.id }"
            role="tab"
            :aria-selected="activePyOS === p.id ? 'true' : 'false'"
            :aria-controls="`pypanel-${p.id}`"
            type="button"
            @click="activePyOS = p.id"
            @keydown="onPyTabKey($event, i)"
          >{{ p.label }}</button>
        </div>

        <div class="tabpanels">
          <div
            :id="`pypanel-${activePy.id}`"
            class="tabpanel is-active"
            role="tabpanel"
            :aria-labelledby="`py-${activePy.id}`"
          >
            <pre><code><template v-for="(line, idx) in activePy.lines" :key="idx"><span v-if="line.startsWith('#') || line === ''" class="comment">{{ line }}</span><template v-else><span class="prompt">$</span> {{ line }}</template><template v-if="idx < activePy.lines.length - 1">{{ "\n" }}</template></template></code></pre>
          </div>
        </div>
        <p v-if="activePy.note" class="install__caption">{{ activePy.note }}</p>

        <h3 class="step__title"><span class="step__num">2</span> Install Pythinker</h3>
        <div class="terminal terminal--primary">
          <div class="terminal__chrome" aria-hidden="true">
            <span class="dot dot--r"></span>
            <span class="dot dot--y"></span>
            <span class="dot dot--g"></span>
            <span class="terminal__title">~/projects · zsh</span>
          </div>
          <pre><code><span class="prompt">$</span> {{ installCmd }}</code></pre>
          <button
            class="copy-btn"
            :class="{ 'is-copied': isCopied }"
            type="button"
            aria-label="Copy install command"
            @click="copy(installCmd)"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="4" y="4" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
              <rect x="2.5" y="2.5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
            </svg>
            <span>{{ isCopied ? "Copied" : "Copy" }}</span>
          </button>
        </div>

        <p class="install__caption">
          Default config is wired for ChatGPT OAuth — no API key needed to start.
        </p>

        <div class="tabs" role="tablist" aria-label="Install alternatives">
          <button
            v-for="(tab, i) in tabs"
            :key="tab.id"
            :id="`t-${tab.id}`"
            class="tab"
            :class="{ 'is-active': active === tab.id }"
            role="tab"
            :aria-selected="active === tab.id ? 'true' : 'false'"
            :aria-controls="`tab-${tab.id}`"
            type="button"
            @click="active = tab.id"
            @keydown="onTabKey($event, i)"
          >{{ tab.label }}</button>
        </div>

        <div class="tabpanels">
          <div
            :id="`tab-${activeTab.id}`"
            class="tabpanel is-active"
            role="tabpanel"
            :aria-labelledby="`t-${activeTab.id}`"
          >
            <pre><code><template v-for="(line, idx) in activeTab.lines" :key="idx"><span class="prompt">$</span> {{ line }}<template v-if="idx < activeTab.lines.length - 1">{{ "\n" }}</template></template></code></pre>
          </div>
        </div>

        <h3 class="quickstart__title">Quick start</h3>
        <div class="terminal terminal--quiet">
          <pre><code><template v-for="(line, idx) in quickstartLines" :key="idx"><span class="prompt">$</span> {{ line }}<template v-if="idx < quickstartLines.length - 1">{{ "\n" }}</template></template></code></pre>
        </div>

        <h3 class="quickstart__title">Optional extras</h3>
        <p class="install__caption">
          Pythinker ships small. Pull in only the features you actually use:
        </p>
        <ul class="extras" role="list">
          <li v-for="x in extras" :key="x.flag" class="extras__item">
            <code>uv tool install 'pythinker-ai[{{ x.flag }}]'</code>
            <span>{{ x.blurb }}</span>
          </li>
        </ul>
        <p class="install__caption">
          Combine with commas:
          <code>uv tool install 'pythinker-ai[reports,discord,browser]'</code>
        </p>

        <h3 class="quickstart__title">WebUI (development)</h3>
        <p class="install__caption">
          The WebUI ships from a source checkout. Enable the WebSocket channel,
          then start the gateway and dev server:
        </p>
        <div class="terminal terminal--quiet">
          <pre><code><span class="prompt">$</span> pythinker gateway
<span class="prompt">$</span> cd webui &amp;&amp; bun install &amp;&amp; bun run dev</code></pre>
        </div>
        <p class="install__caption">
          Full steps:
          <a
            href="https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/webui/README.md"
            target="_blank"
            rel="noopener"
          >webui/README.md</a>.
        </p>
      </div>

      <div class="toast" :class="{ 'is-visible': toastVisible }" role="status" aria-live="polite">
        {{ toastMessage }}
      </div>
    </div>
  </section>
</template>
