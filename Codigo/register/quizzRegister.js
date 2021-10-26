function lerDados() {
  let strDados = localStorage.getItem("db");
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      users: [
        { email: "teste@gmail.com", nome: "Teste", sobrenome: "testte" },
        { email: "fulano_99@hotmail.com", nome: "Fulano", sobrenome: "da Silva" },
        { email: "abacate@jorel.com.br", nome: "Irmão", sobrenome: "do Jorel" }],
    }
  }
  return objDados;
}

function salvarDados(dados) {
  localStorage.setItem("db", JSON.stringify(dados));
}

function registrarUsuario() {
  alert("TESTE VOID")
  //Ler dados do localStorage
  let objDados = lerDados();

  //registrar novo usuário
  let strEmail = document.getElementById('email').value;
  let strNome = document.getElementById('name').value;
  let strSobrenome = document.getElementById('lastName').value;
  let novoUsuario = {
    email: strEmail,
    nome: strNome,
    sobrenome: strSobrenome
  };
  objDados.users.push(novoUsuario);

  //salvar os dados no localStorage novamente 
  salvarDados(objDados);

  imprimirDados();

}

function imprimirDados() {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = lerDados();

  for (i = 0; i < objDados.users.length; i++) {
    strHtml = strHtml + `<p>${objDados.users[i].email} - ${objDados.users[i].nome} ${objDados.users[i].sobrenome}</p>`;
  }
  tela.innerHTML = strHtml
}

//configuração dos botões
document.getElementById('imprimir').addEventListener('click', imprimirDados)
document.getElementById('salvar').addEventListener('click', registrarUsuario)

