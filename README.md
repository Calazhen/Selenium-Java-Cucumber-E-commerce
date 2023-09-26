## Automação de testes Web com Java, Selenium e Cucumber

Este é um projeto de testes automatizados de Web, aplicando conteúdos aprendidos no meu curso de Java com Selenium Web Driver.

### Pré-Requisitos

Antes de executar os testes, certifique-se de que os seguintes softwares estão instalados no seu sistema:

[INTELIJ](https://www.jetbrains.com/idea/)

[Java versão 1.8.0_361](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

[Apache Maven 3.9.0](https://maven.apache.org/download.cgi)

[Chrome](https://www.google.com/intl/pt-BR/chrome/)

[ChromeDriver](https://chromedriver.chromium.org/downloads)
## Funcionalidades

### Cadastro_usuario:
Esta funcionalidade testa o registro de usuários e a funcionalidade de login do site de E-commerce. O cenário de teste envolve os seguintes passos:

1. Navegar para o [site](http://automationpratice.com.br/).
2. Clicar no botão "Registrar".
3. Preencher o formulário de registro com informações válidas.
4. Enviar o formulário.
5. Verificar se o usuário foi autenticado.

O arquivo de funcionalidade pode ser encontrado em [cadastro_usuario](https://github.com/Calazhen/Selenium-Java-Cucumber-E-commerce/blob/master/site-ecommerce-curso-selenium/src/main/resources/features/cadastro_usuario.feature)

### Mensagem:
Esta funcionalidade testa o formulário de contato do site de E-commerce. O cenário de teste envolve os seguintes passos:

1. Navegar para o [site](https://automationexercise.com/contact_us).
2. Clicar no botão "Contato".
3. Preencher o formulário de contato com informações válidas.
4. Anexar uma foto ao formulário.
5. Enviar o formulário.
6. Verificar se a mensagem foi enviada com sucesso.

O arquivo de funcionalidade pode ser encontrado em [mensagem](https://github.com/Calazhen/Selenium-Java-Cucumber-E-commerce/blob/master/site-ecommerce-curso-selenium/src/main/resources/features/mensagem.feature)

## Executando os Testes:
Para executar os testes, siga estes passos:

1. Clone o repositório:

```powershell
git clone https://github.com/Calazhen/Selenium-Java-Cucumber-E-commerce.git
```

2. Navegue para o diretório do projeto:

```powershell
cd Selenium-Java-Cucumber-E-commerce
```

3. Execute os testes utilizando o Maven:

```powershell
mvn test -Dtest=**/*RunCucumberTest -Dbrowser=chrome
```
4. Gere o relatório do cucumber:

```powershell
mvn cluecumber-report:reporting
```

### Contatos:
Caso tenha alguma dúvida poderá entrar em contato pelo meu [Linkedin](https://www.linkedin.com/in/henrique-calazans/)

Bora se conectar? =]
