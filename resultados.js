// Verifica se há dados de busca no localStorage
const resultados = JSON.parse(localStorage.getItem('resultadosDrinks'));

const containerResultados = document.getElementById('resultados');

// Função para exibir os resultados
function exibirResultados() {
  if (!resultados || resultados.length === 0) {
    containerResultados.innerHTML = '<p class="text-center">Nenhum resultado encontrado.</p>';
    return;
  }

  resultados.forEach(drink => {
    // Criação do container do drink
    const containerDrink = document.createElement('div');
    containerDrink.classList.add('card', 'mb-3');
    
    // Nome do drink
    const tituloDrink = document.createElement('h3');
    tituloDrink.classList.add('bg-light', 'text-center');
    tituloDrink.textContent = drink.nome;
    containerDrink.appendChild(tituloDrink);
    
    // Imagem do drink
    const imagemDrink = document.createElement('img');
    imagemDrink.classList.add('card-img-top', 'imagem');
    imagemDrink.src = drink.imagem;
    containerDrink.appendChild(imagemDrink);
    
    // Lista de ingredientes
    const listaIngredientes = document.createElement('ul');
    listaIngredientes.classList.add('list-group', 'list-group-flush');
    for (let ingrediente in drink.ingredientes) {
      const itemIngrediente = document.createElement('li');
      itemIngrediente.classList.add('list-group-item', 'bg-dark', 'text-light', 'mt-2', 'mb-2');
      itemIngrediente.innerHTML = `${ingrediente}: <span>${drink.ingredientes[ingrediente]}</span> ml`;
      listaIngredientes.appendChild(itemIngrediente);
    }
    containerDrink.appendChild(listaIngredientes);
    
    // Descrição (modo de preparo)
    const descricaoDrink = document.createElement('div');
    descricaoDrink.classList.add('card-body', 'bg-dark', 'text-light');
    descricaoDrink.innerHTML = `<h5 class="card-title">Modo de Preparo</h5><p>${drink.descricao}</p>`;
    containerDrink.appendChild(descricaoDrink);
    
    // Adiciona o container do drink ao container de resultados
    containerResultados.appendChild(containerDrink);
  });
}

// Chama a função para exibir os resultados ao carregar a página
exibirResultados();
