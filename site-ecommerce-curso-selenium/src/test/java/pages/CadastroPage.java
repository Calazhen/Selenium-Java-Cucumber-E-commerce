package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

public class CadastroPage extends RunCucumberTest {

    //
    final private By ainda_nao_tem_conta = By.cssSelector("#createAccount");
    final private By campo_usuario = By.id("user");
    final private By campo_email = By.id("email");
    final private By campo_senha = By.id("password");
    final private By botao_cadastrar = By.id("btnRegister");


    public void acessaPaginaCadastro() {
        Utils.esperarElementoEstarClicavel(ainda_nao_tem_conta, 8);
        getDriver().findElement(ainda_nao_tem_conta).click();
    }

    public void preencheFormularioCadastro(String nome_usuario, String email, String senha) {
        Utils.esperarElementoEstarVisivel(campo_usuario, 8);
        getDriver().findElement(campo_usuario).sendKeys(nome_usuario);
        Utils.esperarElementoEstarVisivel(campo_email, 8);
        getDriver().findElement(campo_email).sendKeys(email);
        Utils.esperarElementoEstarVisivel(campo_senha, 8);
        getDriver().findElement(campo_senha).sendKeys(senha);
    }

    public void clicarBotaoCadastrar() {
        getDriver().findElement(botao_cadastrar).click();
    }
    
}
