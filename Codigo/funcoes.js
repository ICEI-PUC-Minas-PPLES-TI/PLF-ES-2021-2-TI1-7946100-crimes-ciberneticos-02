// declara um conjunto inicial de contatos
var db_perguntaQuizzStdin = {
    data: [
      {
        id: 1,
        titulo: "80% dos crimes cibernéticos estão ligados à engenharia social, diz especialista",
        autores: "Álvaro Gadelha e Ludmila Candal",
        plataforma: "CNN Brasil",
        link: "https://www.cnnbrasil.com.br/business/80-dos-crimes-ciberneticos-estao-ligados-a-engenharia-social-diz-especialista/",
      },
      {
        id: 2,
        titulo: "Lumu Technologies divulga relatório sobre monetização de crimes cibernéticos",
        autores: "Redação da plataforma",
        plataforma: "CNN Brasil",
        link: "https://tiinside.com.br/07/10/2021/lumu-technologies-divulga-relatorio-sobre-monetizacao-de-crimes-ciberneticos/",
      },
    ],
  };
  
  // Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
  var db = JSON.parse(localStorage.getItem("db_quizz"));
  if (!db) {
    db = db_perguntaQuizzStdin;
  }
  
  // Exibe mensagem em um elemento de ID msg
  function displayMessage(msg) {
    $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
  }
  
  function insertPergunta(perguntaQuizz) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) novoId = db.data[db.data.length - 1].id + 1;
    let novaPergunta = {
      id: novoId,
      titulo: perguntaQuizz.titulo,
      autores: perguntaQuizz.autores,
      plataforma: perguntaQuizz.plataforma,
      link: perguntaQuizz.link,
    };
  
    // Insere o novo objeto no array
    db.data.push(novaPergunta);
    displayMessage("Pergunta inserido com sucesso");
  
    // Atualiza os dados no Local Storage
    localStorage.setItem("db_quizz", JSON.stringify(db));
  }
  
  function updatePergunta(id, perguntaQuizz) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map((obj) => obj.id).indexOf(id);
  
    // Altera os dados do objeto no array
      (db.data[index].pergunta = perguntaQuizz.pergunta),
      (db.data[index].autores = perguntaQuizz.autores),
      (db.data[index].plataforma = perguntaQuizz.plataforma),
      (db.data[index].link = perguntaQuizz.link),
  
  
    displayMessage("Pergunta alterado com sucesso");
  
    // Atualiza os dados no Local Storage
    localStorage.setItem("db_quizz", JSON.stringify(db));
  }
  
  function deletePergunta(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) {
      return element.id != id;
    });
  
    displayMessage("Pergunta removida com sucesso");
  
    // Atualiza os dados no Local Storage
    localStorage.setItem("db_quizz", JSON.stringify(db));
  }
  