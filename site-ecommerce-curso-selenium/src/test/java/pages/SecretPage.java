package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;


public class SecretPage extends RunCucumberTest {

    private final By mensagem_cadastro_sucesso = By.id("swal2-title");


    public void verificaMensagemCadastroSucesso(String mensagemEsperada) {
        Utils.esperarElementoEstarVisivel(mensagem_cadastro_sucesso, 8);
        Assert.assertEquals(mensagemEsperada, getDriver().findElement(mensagem_cadastro_sucesso).getText());
    }


}
