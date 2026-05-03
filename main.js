const supportBot = document.getElementById("support-bot");
const chatLauncher = document.getElementById("chat-launcher");
const chatClose = document.getElementById("chat-close");
const openChatButtons = document.querySelectorAll("[data-open-chat]");
const themeToggle = document.getElementById("theme-toggle");
const themeToggleLabel = document.getElementById("theme-toggle-label");
const inputBox = document.getElementById("input");
const tooltip = document.getElementById("tooltip");

function setThemeToggleLabel(isDark) {
  themeToggleLabel.innerText = isDark ? "🌙 Dark mode" : "☀️ Light mode";
}

function openSupportBot(shouldFocus = true) {
  supportBot.classList.remove("is-collapsed");
  chatLauncher.setAttribute("aria-expanded", "true");
  if (shouldFocus && inputBox) {
    setTimeout(() => inputBox.focus(), 180);
  }
}

function closeSupportBot() {
  supportBot.classList.add("is-collapsed");
  chatLauncher.setAttribute("aria-expanded", "false");
  if (tooltip) {
    tooltip.classList.remove("show");
  }
  chatLauncher.focus();
}

if (chatLauncher) {
  chatLauncher.addEventListener("click", () => openSupportBot());
}

if (chatClose) {
  chatClose.addEventListener("click", closeSupportBot);
}

openChatButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    openSupportBot();
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark-mode", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    setThemeToggleLabel(isDark);
  });

  const isDarkAtLoad = document.body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDarkAtLoad));
  setThemeToggleLabel(isDarkAtLoad);
}
