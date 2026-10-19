const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
const nextButton = document.getElementById("next-button");
const welcomeScreen = document.getElementById("welcome-screen");

if (nextButton && welcomeScreen) {
  nextButton.addEventListener("click", function () {
    welcomeScreen.classList.add("hide");

    setTimeout(function () {
      welcomeScreen.remove();
    }, 500);
  });
}
