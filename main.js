document.getElementById('year').textContent = new Date().getFullYear();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    setTimeout(() => {
        alert("Thank you for contacting B7 Fine Print. We'll get back to you shortly!");
        form.reset();
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const user = "b7fineprint";
  const domain = "gmail.com";
  const subject = encodeURIComponent("Inquiry from B7 Fine Print");
  const body = encodeURIComponent("Hello! B7 Fine Prints,\n\nI would like to inquire about...");

  const fullEmail = `${user}@${domain}`;
  const emailLink = document.getElementById("emailLink");

  if (emailLink) {
    emailLink.href = `mailto:${fullEmail}?subject=${subject}&body=${body}`;
    emailLink.textContent = "Email Us Now";
  }
});

AOS.init({
    duration: 2000,
    once: false,
    offset: 100,
    easing: "ease-in-out",
});