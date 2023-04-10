package pages;

import org.openqa.selenium.By;

import runner.RunCucumberTest;
import support.Utils;


public class LoginPage extends RunCucumberTest {



    private By botao_login = By.cssSelector("section[id='top_header'] li:nth-child(1) a:nth-child(1)");

    public void acessaAplicacao(){
        getDriver().manage().window().maximize();
        getDriver().get("http://automationpratice.com.br/");
    }
    public void acessarTelaLogin(){
        Utils.esperarElementoEstarPresente(botao_login,8);
        getDriver().findElement(botao_login).click();
    }

}
