<script setup lang="ts">
interface Link {
  label: string;
  href: string;
}
interface Column {
  title: string;
  links: Link[];
}

const columns: Column[] = [
  {
    title: "Product",
    links: [
      { label: "Docs",          href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/README.md" },
      { label: "Configuration", href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/configuration.md" },
      { label: "Architecture",  href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/ARCHITECTURE.md" },
      { label: "Memory",        href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/memory.md" },
      { label: "Chat Apps",     href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/chat-apps.md" },
      { label: "Deployment",    href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/deployment.md" },
      { label: "Security",      href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/docs/security.md" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub",       href: "https://github.com/mohamed-elkholy95/Pythinker-ai" },
      { label: "Issues",       href: "https://github.com/mohamed-elkholy95/Pythinker-ai/issues" },
      { label: "Contributing", href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/CONTRIBUTING.md" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "PyPI",          href: "https://pypi.org/project/pythinker-ai/" },
      { label: "License",       href: "https://github.com/mohamed-elkholy95/Pythinker-ai/blob/main/LICENSE" },
      { label: "Release notes", href: "https://github.com/mohamed-elkholy95/Pythinker-ai/releases" },
    ],
  },
];

const year = new Date().getFullYear();
const base = import.meta.env.BASE_URL;
</script>

<template>
  <footer class="footer">
    <div class="container container--footer">
      <div v-for="col in columns" :key="col.title" class="footer__col">
        <h4>{{ col.title }}</h4>
        <ul>
          <li v-for="link in col.links" :key="link.href">
            <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__strip">
      <div class="container container--strip">
        <span class="footer__brand">
          <img class="nav__icon" :src="`${base}brand/icon.svg`" alt="" width="22" height="22">
          Pythinker
        </span>
        <span>© {{ year }} · MIT licensed</span>
      </div>
    </div>
  </footer>
</template>
