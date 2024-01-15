package pages;

import org.junit.Assert;
import org.openqa.selenium.By;

import runner.RunBase;
import runner.RunCucumberTest;
import support.Utils;


public class LoginPage extends RunCucumberTest {


    final private By botao_acessa_tela_login = By.cssSelector("#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > a");
    final private By campo_email = By.id("oser");
    final private By campo_senha = By.id("password");
    final private By botao_login = By.id("btnLogin");
    final private By mensagem_erro_email = By.cssSelector("#login_area > div > div > div > div > div:nth-child(2) > span");
    final private By mensagem_erro_senha = By.cssSelector("#login_area > div > div > div > div > div:nth-child(3) > span");

    public void acessaAplicacao() {
        String browser = System.getProperty("browser").toUpperCase();
        getDriver(RunBase.Browser.valueOf(browser)).get("https://automationpratice.com.br/");
    }

    public void acessarTelaLogin() {
        Utils.esperarElementoEstarClicavel(botao_acessa_tela_login, 8);
        getDriver().findElement(botao_acessa_tela_login).click();
    }

    public void preencheEmail(String email) {
        Utils.esperarElementoEstarClicavel(campo_email, 8);
        getDriver().findElement(campo_email).clear();
        getDriver().findElement(campo_email).sendKeys(email);
    }

    public void preencheSenha(String senha) {
        Utils.esperarElementoEstarClicavel(campo_senha, 8);
        getDriver().findElement(campo_senha).clear();
        getDriver().findElement(campo_senha).sendKeys(senha);
    }

    public void clicaBotaoLogin() {
        getDriver().findElement(botao_login).click();
    }


    public void verificaMensagemEmail(String mensagemEsperada) {
        Utils.esperarElementoEstarVisivel(mensagem_erro_email, 8);
        Assert.assertEquals(mensagemEsperada, getDriver().findElement(mensagem_erro_email).getText());
    }

    public void verificaMensagemSenha(String mensagemEsperada) {
        Utils.esperarElementoEstarVisivel(mensagem_erro_senha, 8);
        Assert.assertEquals(mensagemEsperada, getDriver().findElement(mensagem_erro_senha).getText());
    }

}
