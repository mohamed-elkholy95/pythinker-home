<script setup lang="ts">
interface Channel {
  name: string;
  title: string;
  icon: string;
}

const channels: Channel[] = [
  {
    name: "Slack",
    title: "Slack",
    icon: '<path fill="currentColor" d="M5 14a2 2 0 1 1 2 2H5v-2zm1-7a2 2 0 1 1 2 2H6V7zm5 12a2 2 0 1 1-2-2v2h2zm7-1a2 2 0 1 1-2-2h2v2zm-1-5a2 2 0 1 1 2-2v2h-2zm-5-12a2 2 0 1 1 2 2v-2h-2zM10 6a2 2 0 1 1 2 2v-2h-2zm5 7a2 2 0 1 1-2 2v-2h2z"/>',
  },
  {
    name: "Telegram",
    title: "Telegram",
    icon: '<path fill="currentColor" d="M20.7 4.2 2.9 11.1c-1 .4-1 1 .2 1.4l4.6 1.4 1.7 5.4c.2.7.4.9 1 .9.4 0 .6-.2 1-.5l2.4-2.3 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.5-1.8-1.6-1.3z"/>',
  },
  {
    name: "Discord",
    title: "Discord",
    icon: '<path fill="currentColor" d="M20 5.4A18 18 0 0 0 15.5 4l-.2.4a16 16 0 0 0-6.6 0L8.5 4A18 18 0 0 0 4 5.4C1.4 9.5.7 13.5 1 17.5a18 18 0 0 0 5.5 2.7l.4-.6a13 13 0 0 1-2-1l.5-.4a13 13 0 0 0 11.2 0l.5.4a12 12 0 0 1-2 1l.4.6a18 18 0 0 0 5.5-2.7c.4-4.6-.6-8.6-2.5-12.1zM9 14.6c-1.1 0-2-1-2-2.4 0-1.3.9-2.4 2-2.4s2 1.1 2 2.4c0 1.3-.9 2.4-2 2.4zm6 0c-1.1 0-2-1-2-2.4 0-1.3.9-2.4 2-2.4s2 1.1 2 2.4c0 1.3-.9 2.4-2 2.4z"/>',
  },
  {
    name: "WhatsApp",
    title: "WhatsApp",
    icon: '<path fill="currentColor" d="M20 12a8 8 0 0 1-12 6.9L3 20l1.2-4.5A8 8 0 1 1 20 12zm-8.5-5C9 7 7 9 7 11.5c0 1 .3 1.9.8 2.7L7 17l3-1c.8.5 1.6.7 2.5.7 2.5 0 4.5-2 4.5-4.6 0-2.5-2-4.6-5-5zm2.7 6.3c-.1-.2-.5-.3-1-.6-.4-.2-.7-.3-1 .1-.3.4-.4.6-.7.6-.2 0-.7-.3-1.3-.8-.5-.5-.8-1-1-1.2 0-.3 0-.4.1-.6 0-.1.2-.2.3-.4 0-.1.1-.2.1-.4 0-.1 0-.3-.1-.4l-.4-1c-.1-.3-.3-.3-.4-.3h-.4c-.1 0-.4 0-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.2 1.4 2.2 3.4 3 .5.2.9.3 1.2.4.5.2 1 .1 1.4 0 .4-.1 1.2-.5 1.4-1 .2-.4.2-.8.1-1z"/>',
  },
  {
    name: "Matrix",
    title: "Matrix",
    icon: '<path fill="currentColor" d="M3 3v18h2v-1H4V4h1V3H3zm16 0v1h1v16h-1v1h2V3h-2zM7 8h2v1c.5-.7 1.4-1.2 2.4-1.2 1 0 1.7.4 2.1 1.2.5-.7 1.4-1.2 2.4-1.2C17.5 7.8 18 9 18 10.4V16h-2v-5.2c0-.8-.3-1.3-1-1.3s-1.3.6-1.3 1.6V16h-2v-5.2c0-.8-.3-1.3-1-1.3-.7 0-1.3.6-1.3 1.6V16H7V8z"/>',
  },
  {
    name: "Teams",
    title: "Microsoft Teams",
    icon: '<path fill="currentColor" d="M14 6h7a1 1 0 0 1 1 1v7a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6zm4-3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 7h10v2H9.5v8h-2V9H3V7zm9 9.5c0 1.6 1 3 2.5 3.5H4a1 1 0 0 1-1-1V19c0-2 2-3 4.5-3 .8 0 1.5.1 2.2.3.1 0 .2.1.3.2.3.1.8.5 1 1z"/>',
  },
  {
    name: "Email",
    title: "Email",
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" d="M3 6h18v12H3z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 7 9-7"/>',
  },
  {
    name: "WebUI",
    title: "WebUI",
    icon: '<rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M3 8h18M7 13h6"/>',
  },
  {
    name: "HTTP API",
    title: "HTTP API",
    icon: '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M9 4l-3 3 3 3M15 14l3 3-3 3M14 4l-4 16"/>',
  },
];
</script>

<template>
  <section class="section section--quiet" aria-labelledby="channels-h">
    <div class="container">
      <p class="section__kicker">Channels</p>
      <h2 id="channels-h" class="section__title">Talks to your platforms, not just your terminal.</h2>

      <ul class="channels" role="list">
        <li
          v-for="ch in channels"
          :key="ch.name"
          class="channel"
          :title="ch.title"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" v-html="ch.icon"></svg>
          <span>{{ ch.name }}</span>
        </li>
      </ul>

      <p class="channels__note">
        Add a new channel by implementing one interface and registering it. ~150 lines for most adapters.
      </p>
    </div>
  </section>
</template>
