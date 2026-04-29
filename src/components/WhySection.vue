<script setup lang="ts">
interface WhyCard {
  title: string;
  body: string;
  icon: string;
}

const cards: WhyCard[] = [
  {
    title: "Ultra-lightweight",
    body: "~55k LOC, zero monolithic orchestration layer. Stable long-running behavior — no microservices, no broker, no Kubernetes.",
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M4 7l8-4 8 4-8 4-8-4zm0 5l8 4 8-4M4 17l8 4 8-4"/>',
  },
  {
    title: "Channel-agnostic",
    body: "Slack, Telegram, Discord, WhatsApp, Matrix, MS Teams, email, WebSocket WebUI, plus an OpenAI-compatible HTTP API — one agent loop multiplexes them all.",
    icon: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  },
  {
    title: "Provider-rich",
    body: "25+ LLM providers behind one interface — Anthropic, OpenAI, Azure OpenAI, OpenAI Codex, GitHub Copilot, DashScope, MiniMax, VolcEngine, Moonshot, DeepSeek, StepFun, and more.",
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/>',
  },
  {
    title: "Memory that learns",
    body: 'Two-phase “Dream” process consolidates long-term memory into <code>MEMORY.md</code> / <code>SOUL.md</code> / <code>USER.md</code>, auto-versioned with pure-Python git.',
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M8 9h8M8 13h5"/>',
  },
  {
    title: "Skills &amp; MCP",
    body: 'Bundled skills (GitHub, cron, weather, tmux, summarize, skill-creator…) plus first-class <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener">Model Context Protocol</a> tool access.',
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z"/>',
  },
  {
    title: "Sandboxed by default",
    body: "Every shell command is wrapped in bubblewrap on Linux. SSRF block-lists guard outbound HTTP. File tools enforce workspace boundaries.",
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M9 12h6M12 9v6"/>',
  },
];
</script>

<template>
  <section class="section" aria-labelledby="why-h">
    <div class="container">
      <p class="section__kicker">Why Pythinker</p>
      <h2 id="why-h" class="section__title">A small core, on purpose.</h2>

      <div class="cards cards--3">
        <article v-for="card in cards" :key="card.title" class="card">
          <div class="card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" v-html="card.icon"></svg>
          </div>
          <h3 v-html="card.title"></h3>
          <p v-html="card.body"></p>
        </article>
      </div>
    </div>
  </section>
</template>
