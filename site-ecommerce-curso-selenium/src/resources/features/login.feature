#language: pt

@login
Funcionalidade: Login
  Eu como usuário do sistema
  Quero fazer login
  Para fazer uma compra no site

  @login-sucesso
  Cenario: Login com sucesso
    Dado que estou na tela de login
    Quando preencho login "henrique.calazans@test.com" e senha "123456"
    E clico em Login
    Então vejo a mensagem "login com sucesso" com sucesso

  @login-falha
  Esquema do Cenário: falha no login, email
    Dado que estou na tela de login
    Quando preencho login "<E-mail>" e senha "<Senha>"
    E clico em Login
    Então vejo a mensagem de email "<Mensagem>"

    Exemplos: Valores inválidos para e-mail
      | E-mail  | Senha  | Mensagem        |
      | a.com   | 123456 | E-mail inválido. |
      | 1.com   | 123456 | E-mail inválido. |
      | 1@.com  | 123456 | E-mail inválido. |
      | 1@a     | 123456 | E-mail inválido. |



