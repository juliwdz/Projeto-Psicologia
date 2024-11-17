// Seleciona o botão de menu hamburguer e o ul com os links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggla a classe 'show' para exibir ou esconder os links
});

