function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
    //se o campo pesquisa for uma string sem nada
    if (campoPesquisa){
      section.innerHTML = "<p> nada foi encontrado <p>"
      return

    }

campoPesquisa = campoPesquisa.tolowercase ()

    
    console.log(campoPesquisa == ""); 
  
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // se o titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa))  || dado.
       console.log(dado.titulo.includes(campoPesquisa))
      // Cria um novo elemento div para cada dado
      resultados += `
      <div class="item-resultado">
        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
      `;
    }
  
    // Atribui os resultados gerados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }