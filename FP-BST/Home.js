document.addEventListener('DOMContentLoaded', function () {
    // Example of adding interactivity
    const socialIcons = document.querySelectorAll('.icons i');
    socialIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        alert(`Redirecting to ${this.classList[1]}`);
      });
    });

    const exploreProjectsButton = document.querySelector('.projects .inner > button');
    exploreProjectsButton.addEventListener('click', function () {
      window.location.href = 'https://github.com/RifkiJunn';
    });

    const viewMyWorkButton = document.querySelector('.contact .items .item:nth-child(2) button');
    viewMyWorkButton.addEventListener('click', function () {
      window.location.href = 'https://www.linkedin.com/in/rifki-junianto-a119742b1';
    });
  });