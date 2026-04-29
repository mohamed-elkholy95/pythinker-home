import { ref } from "vue";

const TOAST_MS = 1500;

export function useClipboard() {
  const isCopied = ref(false);
  const toastMessage = ref("");
  const toastVisible = ref(false);
  let toastTimer: ReturnType<typeof setTimeout> | undefined;
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;

  function showToast(msg: string) {
    toastMessage.value = msg;
    toastVisible.value = true;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (toastVisible.value = false), TOAST_MS);
  }

  async function copy(text: string) {
    const clean = text.replace(/^\s*\$\s?/gm, "").trim();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(clean);
      } else {
        const ta = document.createElement("textarea");
        ta.value = clean;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      isCopied.value = true;
      showToast("Copied to clipboard");
      clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => (isCopied.value = false), TOAST_MS);
    } catch {
      // clipboard unavailable — silently no-op
    }
  }

  return { copy, isCopied, toastMessage, toastVisible };
}
