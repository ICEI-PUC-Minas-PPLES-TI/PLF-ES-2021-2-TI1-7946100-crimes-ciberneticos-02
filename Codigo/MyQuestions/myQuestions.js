// declara um conjunto inicial de contatos
var db_perguntaQuizzStdin = {
  data: [
    {
      id: 1,
      pergunta: "Você conhece o 2FA ?",
      resposta:
        "A autenticação de dois fatores é uma camada extra de proteção que pode ser ativada em contas online. Também conhecido pela sigla 2FA, originária do inglês 'two-factor authentication', o recurso insere uma segunda verificação de identidade do usuário no momento do login, evitando o acesso às contas mesmo quando a senha é vazada.",
      alternativa: true,
      site: "encurtador.com.br/myN38",
    },
    {
      id: 2,
      pergunta: "Você conhece o registrato do Bano cental ?",
      resposta: "É uma ferramenta que permite o cidadão saber Informações gratuitas de dívidas com bancos e órgãos públicos, cheques devolvidos, contas, chaves Pix e operações de câmbio.",
      alternativa: true,
      site: "encurtador.com.br/sDL46",
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
    pergunta: perguntaQuizz.pergunta,
    resposta: perguntaQuizz.resposta,
    alternativa: perguntaQuizz.alternativa,
    site: perguntaQuizz.site,
  };

  // Insere o novo objeto no array
  db.data.push(novaPergunta);
  displayMessage("Pergunta inserida com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_quizz", JSON.stringify(db));
}

function updatePergunta(id, perguntaQuizz) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  (db.data[index].pergunta = perguntaQuizz.pergunta),
    (db.data[index].resposta = perguntaQuizz.resposta),
    (db.data[index].alternativa = perguntaQuizz.alternativa),
    (db.data[index].site = perguntaQuizz.site),
    displayMessage("Pergunta alterada com sucesso");

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
