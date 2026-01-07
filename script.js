gsap.registerPlugin(ScrollTrigger);

// HEADER
gsap.from(".header", {
  y: -60,
  opacity: 0,
  duration: 1
});

// HERO
gsap.from(".hero-text", {
  y: 60,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-sub", {
  y: 40,
  opacity: 0,
  delay: 0.4
});




// SKILLS
gsap.to(".unity", { width: "90%", scrollTrigger: "#skills" });
gsap.to(".arvr", { width: "85%", scrollTrigger: "#skills" });
gsap.to(".ai", { width: "75%", scrollTrigger: "#skills" });

// PROJECTS
gsap.from(".project-card", {
  y: 40,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: "#projects"
});

// RESUME
gsap.from("#resume", {
  y: 40,
  opacity: 0,
  scrollTrigger: "#resume"
});

// SMOOTH SCROLL
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
