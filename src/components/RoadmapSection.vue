<script setup lang="ts">
interface RoadmapItem {
  tag: string;
  body: string;
}

const items: RoadmapItem[] = [
  { tag: "Multi-modal",       body: "See and hear — images, voice, and video at the agent boundary." },
  { tag: "Long-term memory",  body: "Never forget important context across sessions and channels." },
  { tag: "Better reasoning",  body: "Multi-step planning and reflection inside the small core loop." },
  { tag: "More integrations", body: "Calendar and other day-to-day surfaces, kept thin and pluggable." },
  { tag: "Self-improvement",  body: "Learn from feedback and mistakes — the Dream loop, made smarter." },
];
</script>

<template>
  <section class="section section--quiet" aria-labelledby="rm-h">
    <div class="container">
      <p class="section__kicker">Roadmap</p>
      <h2 id="rm-h" class="section__title">Where we're heading.</h2>

      <ul class="roadmap" role="list">
        <li v-for="item in items" :key="item.tag" class="roadmap__item">
          <span class="roadmap__tag">{{ item.tag }}</span>
          <p>{{ item.body }}</p>
        </li>
      </ul>

      <p class="roadmap__cta">
        Pick an item and
        <a href="https://github.com/mohamed-elkholy95/Pythinker-ai/pulls" target="_blank" rel="noopener">open a PR</a>
        on the <code>dev</code> branch.
      </p>
    </div>
  </section>
</template>
