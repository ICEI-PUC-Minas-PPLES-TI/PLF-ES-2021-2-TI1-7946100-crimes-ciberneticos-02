// declara um conjunto inicial de contatos
var db_perguntaQuizzStdin = {
  data: [
    {
      id: 1,
      pergunta:
        "Você conhece o site Registrato do Banco Central?",
      dica: "É um site que fornece Informações gratuitas de dívidas com bancos e órgãos públicos, cheques devolvidos, contas, chaves Pix e operações de câmbio.",
      alternativaA: "Sim",
      alternativaB: "Sim, mas nunca entrei",
      alternativaC: "Já ouvi falar",
      alternativaD: "Não",
      alternativaCorreta: "a",
      site: "https://www.bcb.gov.br/cidadaniafinanceira/registrato",
    },
    {
      id: 2,
      pergunta: "A maioria dos golpes são aplicados por :",
      dica: "Resposta sociais ou humanos",
      alternativaA: "meios tecnológicos",
      alternativaB: "sociais ou humanos",
      alternativaC: "em sites de pornografia",
      alternativaD: "nos sites de torrent",
      alternativaCorreta: "b",
      site: "encurtador.com.br/sDL46",
    },
  ],
};

//banco de questões
var db_myQuestions = {
  data: [
    {
      question:
        "O nome dado aos golpes aplicados por meios humanos e sociais se chama:",
      answers: {
        a: "Vigarice",
        b: "Pilantragem",
        c: "Hacking",
        d: "Engenharia social",
      },
      correctAnswer: "d",
    },
    {
      question: "A maioria dos golpes são aplicados por :",
      answers: {
        a: "meios tecnológicos",
        b: "sociais ou humanos",
        c: "em sites de pornografia",
        d: "nos sites de torrent",
      },
      correctAnswer: "b",
    },
  ],
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem("db_quizz"));
if (!db) {
  db = db_perguntaQuizzStdin;
}

// banco questões 
var myQuestions = JSON.parse(localStorage.getItem("myQuestions"));
if (!myQuestions) {
  myQuestions = db_myQuestions;
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
    dica: perguntaQuizz.dica,
    alternativaA: perguntaQuizz.alternativaA,
    alternativaB: perguntaQuizz.alternativaB,
    alternativaC: perguntaQuizz.alternativaC,
    alternativaD: perguntaQuizz.alternativaD,
    alternativaCorreta: perguntaQuizz.alternativaCorreta,
    site: perguntaQuizz.site,
  };


  var cquestion =
  {
    question: perguntaQuizz.pergunta,
    answers:
    {
      a: perguntaQuizz.alternativaA,
      b: perguntaQuizz.alternativaB,
      c: perguntaQuizz.alternativaC,
      d: perguntaQuizz.alternativaD,
    },
    correctAnswer: perguntaQuizz.alternativaCorreta,
  };


  // Insere o novo objeto no array
  db.data.push(novaPergunta);
  myQuestions.data.push(cquestion);
  displayMessage("Pergunta inserida com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_quizz", JSON.stringify(db));
  localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
}

function updatePergunta(id, perguntaQuizz) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  (db.data[index].pergunta = perguntaQuizz.pergunta),
    (db.data[index].dica = perguntaQuizz.dica),
    (db.data[index].alternativaA = perguntaQuizz.alternativaA),
    (db.data[index].alternativaB = perguntaQuizz.alternativaB),
    (db.data[index].alternativaC = perguntaQuizz.alternativaC),
    (db.data[index].alternativaD = perguntaQuizz.alternativaD),
    (db.data[index].alternativaCorreta = perguntaQuizz.alternativaCorreta),
    (db.data[index].site = perguntaQuizz.site),
    displayMessage("Pergunta alterada com sucesso");

  // Atualiza os dados no Local Storage

  localStorage.setItem("db_quizz", JSON.stringify(db));
  localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
}

function deletePergunta(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Pergunta removida com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_quizz", JSON.stringify(db));
  localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
}


function atualizaQuiz()
{
  let tamanhoDB = db.data.length //define tamanho do objeto
  localStorage.myQuestions.data
  for (let i=0; i<tamanhoDB;i++) //atualiza itens.
  {
    myQuestions.data[i].question = db.data[i].pergunta
    myQuestions.data[i].correctAnswer = db.data[i].alternativaCorreta
    myQuestions.data[i].answers.a = db.data[i].alternativaA
    myQuestions.data[i].answers.b = db.data[i].alternativaB
    myQuestions.data[i].answers.c = db.data[i].alternativaC
    myQuestions.data[i].answers.d = db.data[i].alternativaD
  }

  for (let j=tamanhoDB; j<myQuestions.data.length;j++)
  {
    myQuestions.data.splice(j,1)
  }
  localStorage.setItem("db_quizz", JSON.stringify(db));
  localStorage.setItem("myQuestions", JSON.stringify(myQuestions))
}



document.getElementById("btnAtualiza").addEventListener("click",atualizaQuiz)

