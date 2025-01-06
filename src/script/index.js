const menuButton = document.querySelector('.menu');
const navMenu = document.querySelector('.nav');

// Exibir/ocultar menu ao clicar no ícone de hambúrguer
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
