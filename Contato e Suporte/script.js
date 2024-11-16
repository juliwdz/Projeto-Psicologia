// Seleciona o botão de menu hamburguer e o ul com os links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Adiciona um evento de clique ao menu hamburguer
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggla a classe 'show' para exibir ou esconder os links
});

// Função para validar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const isPsychologist = document.querySelector('input[name="is_psychologist"]:checked');

    // Validação simples
    if (!name || !email || !message || !isPsychologist) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui você pode implementar a lógica de envio do formulário
    alert('Obrigada por enviar a mensagem, entraremos em contato em breve.');

    // Limpando os campos
    document.getElementById('contact-form').reset();
});

