    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing page

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }

      // ✅ Show thank-you message
      document.getElementById("responseMessage").textContent = `Thank you, ${name}! We'll get back to you shortly.`;

      // Clear form
      document.getElementById("contactForm").reset();
    });






    // Contact form handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert(`Thank you ${name}! Your message has been received.`);
        contactForm.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});
