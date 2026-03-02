document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function openPreview(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("previewImg");

  img.src = src;
  modal.style.display = "flex";
}

function closePreview() {
  document.getElementById("imageModal").style.display = "none";
}

function openWhatsApp() {
  const phoneNumber = "916376030629"; // country code + number (no +, no spaces)
  const message = "Hello, I want to book an appointment.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}