// Seleciona o botão de menu hamburguer e o ul com os links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggla a classe 'show' para exibir ou esconder os links
});

// Funcionalidade do "Leia Mais"
const leiaMaisBtn = document.getElementById('leiaMaisBtn');
const textoCompleto = document.querySelector('.texto-completo');

leiaMaisBtn.addEventListener('click', () => {
    textoCompleto.classList.toggle('show');
    if (textoCompleto.classList.contains('show')) {
        leiaMaisBtn.textContent = "Leia menos";
    } else {
        leiaMaisBtn.textContent = "Leia mais";
    }
});

// Depoimentos
// Armazenar o índice do depoimento atual
let depoimentoAtual = 1;

// Função para exibir o depoimento baseado no índice
function showDepoimento(num) {
    const depoimentos = document.querySelectorAll('.depoimento');
    
    // Esconde todos os depoimentos
    depoimentos.forEach(depoimento => {
        depoimento.style.display = 'none'; // Esconde todos os depoimentos
    });

    // Exibe o depoimento atual
    const depoimentoAtivo = document.getElementById('depoimento' + num);
    depoimentoAtivo.style.display = 'block'; // Exibe o depoimento ativo
}

// Função para mostrar o próximo depoimento
function nextDepoimento() {
    depoimentoAtual++;
    if (depoimentoAtual > 15) {
        depoimentoAtual = 1; // Volta para o primeiro depoimento
    }
    showDepoimento(depoimentoAtual);
}

// Função para mostrar o depoimento anterior
function prevDepoimento() {
    depoimentoAtual--;
    if (depoimentoAtual < 1) {
        depoimentoAtual = 15; // Vai para o último depoimento
    }
    showDepoimento(depoimentoAtual);
}

// Inicializa o primeiro depoimento ao carregar a página
window.onload = () => showDepoimento(depoimentoAtual);
