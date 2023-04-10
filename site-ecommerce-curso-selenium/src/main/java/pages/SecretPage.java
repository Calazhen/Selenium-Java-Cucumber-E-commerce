package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;


public class SecretPage extends RunCucumberTest {

    private By mensagem_sucesso = By.id("swal2-title");



    public void verificaMensagemSucesso(){
        Assert.assertEquals("Cadastro realizado!",getDriver().findElement(mensagem_sucesso).getText());
    }

}
