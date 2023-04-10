package pages;

import org.openqa.selenium.By;

import support.Utils;


public class LoginPage extends Utils {

    private By botao_login = By.cssSelector("section[id='top_header'] li:nth-child(1) a:nth-child(1)");
    private By ainda_nao_tem_conta = By.cssSelector("#createAccount");

    public void acessaAplicacao(){
        driver.manage().window().maximize();
        driver.get("http://automationpratice.com.br/");
    }
    public void acessarTelaLogin(){
        esperarElementoEstarPresente(botao_login,8);
        driver.findElement(botao_login).click();
    }

}
