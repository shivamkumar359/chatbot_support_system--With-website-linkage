document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(
    ".button-primary, .button-secondary, .button-on-dark, .chat-launcher, .icon-button, .theme-toggle, .mobile-menu, .send-btn"
  );

  buttons.forEach((button) => {
    button.addEventListener("mousedown", function (e) {
      // Calculate coordinates relative to the button
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple element
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      
      // Calculate size of ripple (based on button size to fully cover it)
      const size = Math.max(rect.width, rect.height) * 1.5;
      ripple.style.width = ripple.style.height = `${size}px`;
      
      // Center the ripple element exactly on the click point
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;

      this.appendChild(ripple);

      // Remove the ripple element after the animation duration (600ms)
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
