// ------------------------------------js for active link--------------------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});

// -----------------------------------------nav bar resposnsive bar button--------------------------------------------------------------------



  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });



