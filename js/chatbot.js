const chatBox = document.getElementById("chat");
const chatInputBox = document.getElementById("input");
const chatTooltip = document.getElementById("tooltip");
let hasFocused = false;

function addMessage(text, type) {
  const msg = document.createElement("div");
  const componentClass = type.includes("user")
    ? "support-message-user"
    : type.includes("bot")
      ? "support-message-bot"
      : "";

  msg.className = ["message", type, componentClass].filter(Boolean).join(" ");
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

async function send() {
  const userText = chatInputBox.value.trim();
  if (!userText) return;

  chatTooltip.classList.remove("show");
  addMessage(userText, "user");
  chatInputBox.value = "";

  const typing = addMessage("Aria is typing...", "bot typing");

  try {
    const res = await fetch(
      "https://cloud.flowiseai.com/api/v1/prediction/7628b72c-7d41-4d5f-8c7c-e9ead8be7907",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText })
      }
    );

    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    typing.remove();
    addMessage(data.text, "bot");
  } catch (e) {
    typing.remove();
    addMessage("Oops, I could not reach the server. Please try again.", "bot");
  }
}

if (chatInputBox && chatTooltip && chatBox) {
  chatInputBox.addEventListener("focus", () => {
    if (!hasFocused) {
      hasFocused = true;
      chatTooltip.classList.add("show");
      setTimeout(() => {
        chatTooltip.classList.remove("show");
      }, 3000);
    }
  });

  chatInputBox.addEventListener("input", () => {
    chatTooltip.classList.remove("show");
  });

  chatInputBox.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      send();
    }
  });
}

window.send = send;
