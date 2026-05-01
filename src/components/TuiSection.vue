<script setup lang="ts">
interface SlashCmd {
  cmd: string;
  desc: string;
}

const slashCmds: SlashCmd[] = [
  { cmd: "/help",      desc: "Built-in cheat sheet" },
  { cmd: "/status",    desc: "Session key, model, provider, message count" },
  { cmd: "/sessions",  desc: "Fuzzy-pick from past sessions and resume" },
  { cmd: "/model",     desc: "Fuzzy-pick a model from the active provider" },
  { cmd: "/provider",  desc: "Switch LLM provider on the fly" },
  { cmd: "/theme",     desc: "Swap between default and monochrome themes" },
  { cmd: "/mcp",       desc: "Show MCP status; /mcp reconnect retries" },
  { cmd: "/clear",     desc: "Clear chat; /clear --hard wipes session memory" },
  { cmd: "/exit",      desc: "Quit" },
];

interface KeyBind {
  key: string;
  action: string;
}

const keymap: KeyBind[] = [
  { key: "Enter",   action: "Submit message" },
  { key: "Ctrl+J",  action: "Newline inside the editor" },
  { key: "Ctrl+C",  action: "Cancel in-flight turn (or quit when idle)" },
  { key: "Esc",     action: "Close the active overlay / picker" },
  { key: "↑ / ↓",   action: "Navigate pickers; PgUp / PgDn for jumps" },
];
</script>

<template>
  <section class="section section--tui" aria-labelledby="tui-h">
    <div class="container">
      <p class="section__kicker">Terminal UI</p>
      <h2 id="tui-h" class="section__title">A full-screen chat, right in your terminal.</h2>
      <p class="tui__lede">
        <code>pythinker tui</code> (alias <code>pythinker chat</code>) opens a
        <code>prompt_toolkit</code> interface — a step up from the line-by-line REPL.
        Live-streamed tokens, slash-command autocomplete, fuzzy pickers, and two
        built-in themes.
      </p>

      <div class="tui__launch">
        <div class="terminal terminal--quiet">
          <pre><code><span class="prompt">$</span> pythinker tui
<span class="prompt">$</span> pythinker tui --theme monochrome
<span class="prompt">$</span> pythinker tui --workspace ~/work/agent
<span class="prompt">$</span> pythinker tui --logs ~/.pythinker/tui.log</code></pre>
        </div>
      </div>

      <div class="tui__grid">
        <div class="tui__col">
          <h3 class="tui__col-title">Slash commands</h3>
          <ul class="tui-list" role="list">
            <li v-for="s in slashCmds" :key="s.cmd" class="tui-list__item">
              <code>{{ s.cmd }}</code>
              <span>{{ s.desc }}</span>
            </li>
          </ul>
          <p class="tui__hint">
            Pickers support fuzzy search — start typing to filter, ↑/↓ to navigate,
            Enter to commit, Esc to dismiss.
          </p>
        </div>

        <div class="tui__col">
          <h3 class="tui__col-title">Keymap</h3>
          <ul class="tui-list" role="list">
            <li v-for="k in keymap" :key="k.key" class="tui-list__item">
              <kbd>{{ k.key }}</kbd>
              <span>{{ k.action }}</span>
            </li>
          </ul>

          <h3 class="tui__col-title tui__col-title--spaced">Theming</h3>
          <p class="tui__theme-note">
            Two themes ship by default: <strong>default</strong> and <strong>monochrome</strong>
            (high-contrast / accessibility-friendly). Set <code>cli.tui.theme</code> in
            <code>~/.pythinker/config.json</code> or pass <code>--theme</code>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
