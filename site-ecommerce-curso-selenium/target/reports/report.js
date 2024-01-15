$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
  "duration": 6214169700,
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
  "duration": 812980700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 52286400,
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
  "duration": 58129400,
  "status": "passed"
});
formatter.after({
  "duration": 81900,
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
  "duration": 3405408400,
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
  "duration": 820711400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 55002200,
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
  "duration": 51926800,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
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
  "duration": 3387581100,
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
  "duration": 806976700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 39804100,
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
  "duration": 51518200,
  "status": "passed"
});
formatter.after({
  "duration": 17100,
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
  "duration": 3277661100,
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
  "duration": 818930100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 54101200,
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
  "duration": 53549000,
  "status": "passed"
});
formatter.after({
  "duration": 16400,
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
  "duration": 3231548700,
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
  "duration": 814502400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "duration": 39209200,
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
  "duration": 53975300,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
});