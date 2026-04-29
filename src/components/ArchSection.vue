<script setup lang="ts">
const base = import.meta.env.BASE_URL;
</script>

<template>
  <section class="section section--arch" aria-labelledby="arch-h">
    <div class="container">
      <p class="section__kicker">Architecture</p>
      <h2 id="arch-h" class="section__title">One small loop. Every channel. Pluggable everywhere.</h2>
      <p class="arch__lede">
        Pythinker stays lightweight by centering everything around a small agent loop:
        messages come in from chat apps, the LLM decides when tools are needed, and
        memory or skills are pulled in only as context — instead of becoming a heavy
        orchestration layer.
      </p>
      <figure class="arch__figure">
        <img
          :src="`${base}brand/arctecture.webp`"
          alt="Pythinker architecture: channels feed an inbound queue into a single agent loop, which calls LLM providers, tools and memory, then dispatches replies back through an outbound queue."
          width="1606"
          height="979"
          loading="lazy"
        >
        <figcaption>
          See
          <a
            href="https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/ARCHITECTURE.md"
            target="_blank"
            rel="noopener"
          ><code>docs/ARCHITECTURE.md</code></a>
          for the forensic walkthrough.
        </figcaption>
      </figure>
    </div>
  </section>
</template>
