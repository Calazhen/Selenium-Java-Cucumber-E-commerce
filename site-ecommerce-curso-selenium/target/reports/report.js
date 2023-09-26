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
  "name": "vejo a mensagem \"Cadastro realizado!\" com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3352079700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.acesso_o_cadastro_de_usuário()"
});
formatter.result({
  "duration": 619882700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.eu_preencho_o_formulário_de_cadastro()"
});
formatter.result({
  "duration": 836902400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_em_registrar()"
});
formatter.result({
  "duration": 58780600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro realizado!",
      "offset": 17
    }
  ],
  "location": "SecretSteps.vejo_a_mensagem_com_sucesso(String)"
});
formatter.result({
  "duration": 71766800,
  "status": "passed"
});
formatter.after({
  "duration": 62700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "Eu como usuário do sistema\r\nQuero fazer login\r\nPara fazer uma compra no site",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login com sucesso",
  "description": "",
  "id": "login;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "preencho login \"henrique.calazans@test.com\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "vejo a mensagem \"Login realizado\" com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2713565100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "henrique.calazans@test.com",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 53
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 828724300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 61229600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login realizado",
      "offset": 17
    }
  ],
  "location": "SecretSteps.vejo_a_mensagem_com_sucesso(String)"
});
formatter.result({
  "duration": 72010000,
  "status": "passed"
});
formatter.after({
  "duration": 28400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "falha no login, email",
  "description": "",
  "id": "login;falha-no-login,-email",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"\u003cE-mail\u003e\" e senha \"\u003cSenha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "vejo a mensagem de email \"\u003cMensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 23,
  "name": "Valores inválidos para e-mail",
  "description": "",
  "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail",
  "rows": [
    {
      "cells": [
        "E-mail",
        "Senha",
        "Mensagem"
      ],
      "line": 24,
      "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;1"
    },
    {
      "cells": [
        "a.com",
        "123456",
        "E-mail inválido."
      ],
      "line": 25,
      "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;2"
    },
    {
      "cells": [
        "1.com",
        "123456",
        "E-mail inválido."
      ],
      "line": 26,
      "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;3"
    },
    {
      "cells": [
        "1@.com",
        "123456",
        "E-mail inválido."
      ],
      "line": 27,
      "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;4"
    },
    {
      "cells": [
        "1@a",
        "123456",
        "E-mail inválido."
      ],
      "line": 28,
      "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 25,
  "name": "falha no login, email",
  "description": "",
  "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"a.com\" e senha \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "vejo a mensagem de email \"E-mail inválido.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2698499500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a.com",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 803701500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 52330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.vejo_a_mensagem_de_email(String)"
});
formatter.result({
  "duration": 51319100,
  "status": "passed"
});
formatter.after({
  "duration": 15900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "falha no login, email",
  "description": "",
  "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"1.com\" e senha \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "vejo a mensagem de email \"E-mail inválido.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2772988900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.com",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 826357500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 51829000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.vejo_a_mensagem_de_email(String)"
});
formatter.result({
  "duration": 59812000,
  "status": "passed"
});
formatter.after({
  "duration": 21500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "falha no login, email",
  "description": "",
  "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"1@.com\" e senha \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "vejo a mensagem de email \"E-mail inválido.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2720297100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1@.com",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 804146800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 49623500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.vejo_a_mensagem_de_email(String)"
});
formatter.result({
  "duration": 52583200,
  "status": "passed"
});
formatter.after({
  "duration": 17200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "falha no login, email",
  "description": "",
  "id": "login;falha-no-login,-email;valores-inválidos-para-e-mail;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "preencho login \"1@a\" e senha \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "vejo a mensagem de email \"E-mail inválido.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2723584300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1@a",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 30
    }
  ],
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "duration": 832110500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 49614100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.vejo_a_mensagem_de_email(String)"
});
formatter.result({
  "duration": 65664700,
  "status": "passed"
});
formatter.after({
  "duration": 14400,
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
  "duration": 4511276800,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.preencho_todos_os_campos()"
});
formatter.result({
  "duration": 510547400,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.clico_em_enviar_mensagem()"
});
formatter.result({
  "duration": 48204300,
  "status": "passed"
});
formatter.match({
  "location": "mensagemSteps.vejo_o_feedback_de_viagem_enviada_com_sucesso()"
});
formatter.result({
  "duration": 49244800,
  "status": "passed"
});
formatter.after({
  "duration": 27400,
  "status": "passed"
});
});