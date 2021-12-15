// declara um conjunto inicial de contatos
var db_dicasStdin = {
  data: [
    {
      id: 1,
      titulo: "Verifique quantas vezes sua senha já foi vazada",
      texto: 
        "Esse site mostra quantas vezes sua senha foi vazada na web",
      site: "https://haveibeenpwned.com/",
    },
    {
      id: 2,
      titulo: "Verifique se alguem fez transações financeira em seu nome ?",
      texto: "O registrato é uma ferramenta que permite o cidadão saber Informações gratuitas de dívidas com bancos e órgãos públicos, cheques devolvidos, contas, chaves Pix e operações de câmbio.",
      site: "https://www.bcb.gov.br/cidadaniafinanceira/registrato",
    },
    {
      id: 3,
      titulo: "Dicas como proteger seu WhatsApp",
      texto: "O site nubank oferece dias de como se proteger contra clonagem de WhatsApp.",
      site: "https://url.gratis/5irLiE",
    },
  ],
};



// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem("db_dicas"));
if (!db) {
  db = db_dicasStdin;
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function insertDica(gestaoDicas) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.data.length != 0) novoId = db.data[db.data.length - 1].id + 1;
  let novaDica = 
    {
    id: novoId,
    titulo: gestaoDicas.titulo,
    texto: gestaoDicas.texto,
    site: gestaoDicas.site,
    };

  // Insere o novo objeto no array
  db.data.push(novaDica);
  displayMessage("Dica inserida com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_dicas", JSON.stringify(db));
}

function updateDica(id, gestaoDicas) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
    (db.data[index].titulo = gestaoDicas.titulo),
    (db.data[index].texto = gestaoDicas.texto),
    (db.data[index].site = gestaoDicas.site),
    
    displayMessage("Dica alterada com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_dicas", JSON.stringify(db));
}

function deleteDica(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Dica removida com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_dicas", JSON.stringify(db));
}


function carregaDicas()
{
  let dicas = JSON.parse(localStorage.getItem("db_dicas"))

  let textoDicas = "";

  for (let i=0; i<dicas.data.length;i++)
  {
    textoDicas = textoDicas + `<li class="list-group-item"><a href="${dicas.data[i].site}" target="_blank">${i+1}.     ${dicas.data[i].titulo} </a>`
  }
  document.getElementById("telaListaDicas").innerHTML = textoDicas

}

//<li class="list-group-item"><a href="#">1.Mantenha o Computador Atualizad </a>