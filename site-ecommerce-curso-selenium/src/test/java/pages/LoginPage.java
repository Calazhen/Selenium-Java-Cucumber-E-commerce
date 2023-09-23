package pages;

import org.openqa.selenium.By;

import runner.RunBase;
import runner.RunCucumberTest;
import support.Utils;


public class LoginPage extends RunCucumberTest {


    final private By botao_login = By.cssSelector("#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > a");

    public void acessaAplicacao() {
        String browser = System.getProperty("browser").toUpperCase();
        getDriver(RunBase.Browser.valueOf(browser)).get("https://automationpratice.com.br/");
    }

    public void acessarTelaLogin() {
        Utils.esperarElementoEstarClicavel(botao_login, 8);
        getDriver().findElement(botao_login).click();
    }

}
