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
      "cd Pythinker-ai && uv sync && uv run pythinker",
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
      </div>

      <div class="toast" :class="{ 'is-visible': toastVisible }" role="status" aria-live="polite">
        {{ toastMessage }}
      </div>
    </div>
  </section>
</template>
