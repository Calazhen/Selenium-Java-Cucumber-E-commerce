package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import support.Utils;


public class SecretPage extends Utils {

    private By mensagem_sucesso = By.id("swal2-title");
    private By mensagem_bem_vindo = By.id("swal2-html-container");
    private By botao_ok = By.id("");


    public void verificaMensagemSucesso(){
        Assert.assertEquals("Cadastro realizado!",driver.findElement(mensagem_sucesso).getText());
    }

}
