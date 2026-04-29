<script setup lang="ts"></script>

<template>
  <header class="hero">
    <div class="hero__backdrop" aria-hidden="true"></div>

    <nav class="nav" aria-label="Primary">
      <a class="nav__brand" href="#top" aria-label="Pythinker home">
        <img class="nav__icon" src="/brand/icon.svg" alt="" width="28" height="28">
        <span class="nav__wordmark">Pythinker</span>
      </a>

      <ul class="nav__links">
        <li><a href="#install">Docs</a></li>
        <li><a href="https://github.com/mohamed-elkholy95/Pythinker-ai" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://pypi.org/project/pythinker-ai/" target="_blank" rel="noopener">PyPI</a></li>
      </ul>
    </nav>

    <div class="hero__inner" id="top">
      <div class="hero__text">
        <p class="hero__eyebrow"><span class="dot"></span> Open source · MIT licensed · ~55k LOC core</p>
        <h1 class="hero__title">
          The ultra-lightweight<br>
          <em>personal-AI-agent</em> framework.
        </h1>
        <p class="hero__sub">
          One Python process listens to Slack, Telegram, Discord, WhatsApp, Matrix,
          Teams, email, a WebSocket WebUI and an OpenAI-compatible HTTP API —
          all multiplexed by one calm agent loop.
        </p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#install">
            Install
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a class="btn btn--ghost" href="https://github.com/mohamed-elkholy95/Pythinker-ai" target="_blank" rel="noopener">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 0a8 8 0 0 0-2.5 15.6c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.88-3.64-3.94 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.07-1.87 3.74-3.65 3.94.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"/></svg>
            View on GitHub
          </a>
        </div>
        <div class="hero__badges" aria-label="Project badges">
          <a href="https://pypi.org/project/pythinker-ai/" target="_blank" rel="noopener"><img src="https://img.shields.io/pypi/v/pythinker-ai?cacheSeconds=300" alt="PyPI version"></a>
          <a href="https://pepy.tech/projects/pythinker-ai" target="_blank" rel="noopener"><img src="https://img.shields.io/pepy/dt/pythinker-ai?label=downloads&color=%2312b76a&cacheSeconds=600" alt="Downloads"></a>
          <img src="https://img.shields.io/badge/python-%E2%89%A53.11-blue" alt="Python ≥ 3.11">
          <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT licensed">
        </div>
      </div>

      <div class="hero__art" aria-hidden="true">
        <div class="brand-mark">
          <span class="brand-mark__halo"></span>
          <object class="brand-mark__img" type="image/svg+xml" data="/brand/pythinker_animated.svg" aria-label="Pythinker mascot — blinking and talking">
            <img src="/brand/icon.svg" alt="" width="320" height="400">
          </object>
        </div>
      </div>
    </div>
  </header>
</template>
