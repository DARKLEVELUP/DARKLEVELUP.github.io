document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-links');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });

  if (toggle) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  }
});
