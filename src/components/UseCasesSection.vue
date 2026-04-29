<script setup lang="ts">
interface UseCase {
  num: string;
  title: string;
  body: string;
}

const cases: UseCase[] = [
  {
    num: "📈",
    title: "24/7 real-time market analysis",
    body: "Discovery, insights, trends — long-running cron tasks summarize, alert, and learn what you actually care about.",
  },
  {
    num: "🚀",
    title: "Full-stack software engineer",
    body: "Develop, deploy, and scale with sandboxed shell tools, workspace-bounded file edits, and MCP integrations.",
  },
  {
    num: "📅",
    title: "Smart daily routine manager",
    body: "Schedule, automate, organize — Telegram in, calendar out; the agent runs on a tiny VM or your home server.",
  },
  {
    num: "📚",
    title: "Personal knowledge assistant",
    body: "Learn, remember, reason — Dream consolidates history into long-term memory you can read, edit, and version.",
  },
  {
    num: "🔌",
    title: "Self-hosted OpenAI-compatible API",
    body: '<code>pythinker serve</code> exposes <code>/v1/chat/completions</code>; point any OpenAI SDK at it and keep your data local.',
  },
  {
    num: "🧵",
    title: "Multi-channel persona",
    body: "Same memory across Discord, email, and WebUI — the agent remembers you everywhere it's reachable.",
  },
];
</script>

<template>
  <section class="section" aria-labelledby="uc-h">
    <div class="container">
      <p class="section__kicker">What people run</p>
      <h2 id="uc-h" class="section__title">From a single Python process.</h2>

      <div class="cards cards--2">
        <article v-for="c in cases" :key="c.title" class="usecase">
          <span class="usecase__num">{{ c.num }}</span>
          <h3>{{ c.title }}</h3>
          <p v-html="c.body"></p>
        </article>
      </div>
    </div>
  </section>
</template>
