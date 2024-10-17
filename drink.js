// Definir as receitas para vários drinks, incluindo descrição e imagem
        const receitas = {
            moscowMule: {
                nome: "Moscow Mule",
                base: "vodka",
                baseQty: 50,
                ingredientes: {
                    "Vodka": 50,
                    "Xarope de Gengibre": 30,
                    "Xarope Simples": 30,
                    "Suco de Limão": 30
                },
                descricao: "Misture a vodka, xarope de gengibre e suco de limão. Adicione gelo e complete com refrigerante de gengibre.",
                imagem: "img/mosc.webp" // URL da imagem
            },
            caipirinha: {
                nome: "Caipirinha",
                base: "cachaça",
                baseQty: 50,
                ingredientes: {
                    "Cachaça": 50,
                    "Açúcar": 20,
                    "Limão": 30
                },
                descricao: "Esmague o limão com o açúcar, adicione gelo e cachaça, e misture bem.",
                imagem: "https://exemplo.com/caipirinha.jpg" // URL da imagem
            },
            margarita: {
                nome: "Margarita",
                base: "tequila",
                baseQty: 50,
                ingredientes: {
                    "Tequila": 50,
                    "Cointreau": 30,
                    "Suco de Limão": 20
                },
                descricao: "Agite a tequila, o cointreau e o suco de limão com gelo. Coe para um copo com a borda salpicada de sal.",
                imagem: "https://exemplo.com/margarita.jpg" // URL da imagem
            }
        };

        // Função para exibir as receitas na página
        function exibirReceitas() {
            const drinksList = document.getElementById('drinksList');

            for (let drink in receitas) {
                const receita = receitas[drink];
                
                // Cria um contêiner para o drink
                const drinkContainer = document.createElement('div');
                drinkContainer.classList.add('container');
                drinkContainer.setAttribute('data-id', drink);

                // Adiciona o título do drink
                const drinkTitle = document.createElement('h2');
                drinkTitle.textContent = receita.nome;
                drinkContainer.classList.add('bg-light');
                drinkContainer.appendChild(drinkTitle);

                // Adiciona a imagem do drink
                const drinkImage = document.createElement('img');
                drinkImage.src = receita.imagem;
                drinkImage.alt = receita.nome;
                drinkImage.classList.add('imagem');
                drinkContainer.appendChild(drinkImage);

                // Cria o contêiner flexível para ingredientes e modo de preparo
                const drinkContent = document.createElement('div');
                drinkContent.classList.add('drink-content');

                // Cria a lista de ingredientes
                const ingredientesList = document.createElement('div');
                ingredientesList.classList.add('ingredientes');
                const ul = document.createElement('ul');
                for (let ingrediente in receita.ingredientes) {
                    const li = document.createElement('li');
                    li.innerHTML = `${ingrediente}: <span>${receita.ingredientes[ingrediente]}</span> ml`;
                    ul.appendChild(li);
                }
                ingredientesList.appendChild(ul);
                drinkContent.appendChild(ingredientesList);

                // Cria a seção do modo de preparo
                const modoPreparo = document.createElement('div');
                modoPreparo.classList.add('modo-preparo');
                const descricaoTitle = document.createElement('h3');
                descricaoTitle.textContent = "Modo de Preparo";
                const descricaoText = document.createElement('p');
                descricaoText.textContent = receita.descricao;
                modoPreparo.appendChild(descricaoTitle);
                modoPreparo.appendChild(descricaoText);
                drinkContent.appendChild(modoPreparo);

                // Adiciona o contêiner flexível ao contêiner principal do drink
                drinkContainer.appendChild(drinkContent);

                
                drinksList.appendChild(drinkContainer);
            }
        }

       

        // Inicializa a página com as receitas padrão
        window.onload = exibirReceitas;