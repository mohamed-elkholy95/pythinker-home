<script setup lang="ts">
interface DesignCard {
  num: string;
  title: string;
  body: string;
  icon: string;
  feature?: boolean;
}

const cards: DesignCard[] = [
  {
    num: "01",
    title: "Two-queue message bus",
    body: 'Every channel publishes onto one <code>inbound</code> queue; one <code>outbound</code> queue dispatches replies. The agent loop never knows which platform a message came from.',
    icon: '<rect x="4" y="3" width="6" height="18" rx="2"/><rect x="14" y="3" width="6" height="18" rx="2"/><path d="M7 8v8M17 8v8"/><path d="M5.5 12h3M15.5 12h3"/>',
  },
  {
    num: "02",
    title: "Per-session lock + pending queue",
    body: "Subagent results and follow-on messages fold into the in-flight turn instead of waiting for the next user message.",
    icon: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/><circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>',
  },
  {
    num: "03",
    title: "Sandboxed shell by default",
    body: "Bubblewrap on Linux, SSRF block-lists on every HTTP fetch, workspace boundary enforcement on file tools.",
    icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    num: "04",
    title: "Two-phase memory — “Dream”",
    body: 'A scheduled agent reads <code>history.jsonl</code> and rewrites <code>MEMORY.md</code> / <code>SOUL.md</code> / <code>USER.md</code>. Auto-versioned via pure-Python git.',
    icon: '<path d="M20 14a8 8 0 1 1-10-10 6 6 0 0 0 10 10z"/><circle cx="17.2" cy="6" r="0.9" fill="currentColor" stroke="none"/><circle cx="14" cy="3.5" r="0.6" fill="currentColor" stroke="none"/>',
    feature: true,
  },
  {
    num: "05",
    title: "Crash-safe turns",
    body: "Mid-turn state is checkpointed into session metadata so a restart resumes exactly where it stopped.",
    icon: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  },
];
</script>

<template>
  <section class="section section--design" aria-labelledby="design-h">
    <div class="container">
      <p class="section__kicker">Agent Design Style</p>
      <h2 id="design-h" class="section__title">Built around a small, calm core.</h2>
      <p class="design__lede">
        Five primitives keep the runtime predictable under load — readable end-to-end,
        restartable mid-turn, and small enough to audit in an afternoon.
      </p>

      <ol class="design-grid" role="list">
        <li
          v-for="card in cards"
          :key="card.num"
          class="design-card"
          :class="{ 'design-card--feature': card.feature }"
        >
          <header class="design-card__head">
            <span class="design-card__num">{{ card.num }}</span>
            <span class="design-card__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                v-html="card.icon"
              ></svg>
            </span>
          </header>
          <h3 v-html="card.title"></h3>
          <p v-html="card.body"></p>
        </li>
      </ol>

      <p class="design__footnote">
        Read the runtime spine end-to-end in
        <a
          href="https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/ARCHITECTURE.md"
          target="_blank"
          rel="noopener"
        ><code>docs/ARCHITECTURE.md</code></a>.
      </p>
    </div>
  </section>
</template>
