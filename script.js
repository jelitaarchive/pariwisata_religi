let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");

  // Hapus kelas 'active' dari semua slide
  slides.forEach(slide => slide.classList.remove("active"));

  // Loop kembali ke awal jika perlu
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  // Tampilkan slide aktif
  slides[slideIndex].classList.add("active");
}

// Fungsi untuk mengubah slide sesuai tombol
function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

// Auto-slide setiap 3 detik (opsional)
setInterval(() => {
  changeSlide(1);
}, 5000);

// Fungsi untuk navigasi ke section tertentu
function navigateTo(sectionId) {
  // Ambil semua elemen dengan kelas 'content-section'
  const sections = document.querySelectorAll('.content-section');
  
  // Loop melalui semua section dan hapus kelas 'active'
  sections.forEach(section => section.classList.remove('active'));
  
  // Tambahkan kelas 'active' pada section yang dipilih
  document.getElementById(sectionId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
  const fadeSections = document.querySelectorAll(".fade-section");

  const toggleFadeInSection = () => {
    fadeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      
      // Cek apakah section berada di dalam viewport
      if (rect.top <= window.innerHeight - 100 && rect.bottom >= 100) {
        section.classList.add("fade-in");
      } else {
        section.classList.remove("fade-in");
      }
    });
  };

  window.addEventListener("scroll", toggleFadeInSection);
  toggleFadeInSection(); // Trigger pertama kali saat halaman dimuat
});

// JavaScript for Sending Message in Assistant
function sendMessage() {
  const messageBox = document.querySelector(".assistant-input input");
  const message = messageBox.value;
  if (message) {
      // Create a new chat bubble for the user's message
      const userBubble = document.createElement("div");
      userBubble.className = "chat-bubble user";
      userBubble.textContent = message;
      
      // Append to chat assistant
      const chatAssistant = document.querySelector(".chat-assistant");
      chatAssistant.appendChild(userBubble);

      // Clear input
      messageBox.value = "";

      // Auto-reply from assistant
      setTimeout(() => {
          const replyBubble = document.createElement("div");
          replyBubble.className = "chat-bubble";
          replyBubble.textContent = "Thank you for your message! We'll get back to you shortly.";
          chatAssistant.appendChild(replyBubble);
      }, 1000);
  }
}