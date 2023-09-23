package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

import java.util.concurrent.TimeUnit;


public class SecretPage extends RunCucumberTest {

    private By mensagem_sucesso = By.id("swal2-title");


    public void verificaMensagemSucesso() {
        Utils.esperarElementoEstarVisivel(mensagem_sucesso,8);
        Assert.assertEquals("Cadastro realizado!", getDriver().findElement(mensagem_sucesso).getText());
    }

}
