$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de usuário",
  "description": "",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@cadastro"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Registrar novo usuário com sucesso",
  "description": "",
  "id": "cadastro-de-usuário;registrar-novo-usuário-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@cadastro_sucesso"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "acesso o cadastro de usuário",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "eu preencho o formulário de cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "vejo a mensage de cadastro realizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2745638500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.acesso_o_cadastro_de_usuário()"
});
formatter.result({
  "duration": 629505900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.eu_preencho_o_formulário_de_cadastro()"
});
formatter.result({
  "duration": 758309400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_em_registrar()"
});
formatter.result({
  "duration": 54330800,
  "status": "passed"
});
formatter.match({
  "location": "SecretSteps.vejo_a_mensage_de_cadastro_realizado_com_sucesso()"
});
formatter.result({
  "duration": 59913600,
  "status": "passed"
});
formatter.after({
  "duration": 62400,
  "status": "passed"
});
formatter.uri("mensagem.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Enviar mensagem com Anexo",
  "description": "",
  "id": "enviar-mensagem-com-anexo",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@mensagem"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Enviar uma mensagem com sucesso",
  "description": "",
  "id": "enviar-mensagem-com-anexo;enviar-uma-mensagem-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@enviar-mensagem-sucesso"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou na tela de mensagem",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "preencho todos os campos",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico em enviar mensagem",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "vejo o feedback de viagem enviada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "mensagemSteps.que_estou_na_tela_de_mensagem()"
});
formatter.result({
  "duration": 5467548100,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.preencho_todos_os_campos()"
});
formatter.result({
  "duration": 525910800,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.clico_em_enviar_mensagem()"
});
formatter.result({
  "duration": 68234000,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.vejo_o_feedback_de_viagem_enviada_com_sucesso()"
});
formatter.result({
  "duration": 42565400,
  "status": "passed"
});
formatter.after({
  "duration": 33600,
  "status": "passed"
});
});