// Capturando os elementos criados no arquivo HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual com innerText
titulo.innerText = 'Bem-vindo ao Projeto!';
link.innerText = 'Clique aqui para visitar a página Prozeducação';

// Adicionando itens à lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.microsoft.com">Microsoft</a></li>
    <li><a href="https://www.github.com">GitHub</a></li>
`;