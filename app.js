'use strict'
const tenis = [
    {nome: 'Air Force', descricao: 'Branco', imagem: './tenis 1.jpg', preco: 'R$ 559,90'},
    {nome: 'Evoque L11', descricao: 'Branco com Cinza', imagem: './tenis 2.jpg', preco: 'R$ 550,00'},
    {nome: 'Air Max Plus', descricao: 'Azul com Preto.', imagem: './tenis 3.jpg', preco: 'R$ 600,90'},
    {nome: 'Nike Dunk', descricao: 'Branco com Verde ', imagem: './tenis 4.jpg', preco: 'R$ 549,90'},
    {nome: 'Nike TN Plus', descricao: 'Preto e Branco.', imagem: './tenis 5.jpg', preco: 'R$ 500,00'}
]

function criarCard(produto, index) {
    const container = document.getElementById('cards-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `card-${index}`;

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <span>${produto.preco}</span>
        <button>Comprar</button>
    `;
    
    container.appendChild(card);
}

function criarMenu() {
    const menu = document.getElementById('menu');
    tenis.forEach((produto, index) => {
        const menuItem = document.createElement('li');
        menuItem.textContent = produto.nome;
        menuItem.style.cursor = 'pointer';
        menuItem.addEventListener('click', () => {
            document.getElementById(`card-${index}`).scrollIntoView({ behavior: 'smooth', inline: 'center' });
        });
        menu.appendChild(menuItem);
    });
}

tenis.forEach(criarCard);
criarMenu();
