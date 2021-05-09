const target = document.getElementById("hamburger-menu");
target.addEventListener('click', () => {
  const target = document.getElementById("hamburger-menu");
  target.classList.toggle('open');
  const nav = document.getElementById("hamburger-nav");
  nav.classList.toggle('in');
});