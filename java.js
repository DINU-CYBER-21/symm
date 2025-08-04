function sendData() {
  const number = document.getElementById("whatsapp").value.trim().replace(/\D/g, '');
  const checkboxes = document.querySelectorAll('#bugs input:checked');
  const bugs = Array.from(checkboxes).map(cb => `• ${cb.value}`).join('\n');

  const previewBox = document.getElementById("preview");

  if (!number || bugs.length === 0) {
    alert("Please enter a WhatsApp number and select at least one bug.");
    return;
  }

  const message = `🪲 *Bug Attack Request* 🪲\n\n👤 Target: ${number}\n\n📋 *Bug List:*\n${bugs}`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${number}?text=${encodedMessage}`;

  // Show preview with red glow animation
  previewBox.innerText = message;
  previewBox.style.display = "block";
  previewBox.classList.add('red-glow');

  // Remove animation class after 2 seconds (optional)
  setTimeout(() => {
    previewBox.classList.remove('red-glow');
  }, 2000);

  // Open WhatsApp after 1.5 seconds delay
  setTimeout(() => {
    window.open(waLink, '_blank');
  }, 1500);
}
