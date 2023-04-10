$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mensagem.feature");
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
  "duration": 7982653200,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.preencho_todos_os_campos()"
});
formatter.result({
  "duration": 1371810700,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.clico_em_enviar_mensagem()"
});
formatter.result({
  "duration": 145777400,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.vejo_o_feedback_de_viagem_enviada_com_sucesso()"
});
formatter.result({
  "duration": 97267000,
  "status": "passed"
});
});