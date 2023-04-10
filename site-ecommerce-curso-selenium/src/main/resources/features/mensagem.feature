#language: pt
@mensagem
Funcionalidade: Enviar mensagem com Anexo

  @enviar-mensagem-sucesso
  Cenario: Enviar uma mensagem com sucesso
    Dado que estou na tela de mensagem
    E preencho todos os campos
    Quando clico em enviar mensagem
    Entao  vejo o feedback de viagem enviada com sucesso