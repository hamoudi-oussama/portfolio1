document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    }
  });
});

const yearSpan = document.createElement("span");
const year = new Date().getFullYear();
yearSpan.textContent = year;
document.querySelector("footer p").innerHTML = `© ${year} Oussama Hamoud. Tous droits réservés.`;
