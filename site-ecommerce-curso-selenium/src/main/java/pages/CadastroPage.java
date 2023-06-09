package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

public class CadastroPage extends RunCucumberTest {

    private By ainda_nao_tem_conta = By.cssSelector("#createAccount");
    private By campo_usuario = By.id("user");
    private By campo_email = By.id("email");
    private By campo_senha = By.id("password");
    private By botao_cadastrar = By.id("btnRegister");


    public void acessaPaginaCadastro() {
        Utils.esperarElementoEstarPresente(ainda_nao_tem_conta, 8);
        getDriver().findElement(ainda_nao_tem_conta).click();
    }

    public void preencheFormularioCadastro(String nome_usuario, String email, String senha) {
        Utils.esperarElementoEstarPresente(campo_usuario, 8);
        getDriver().findElement(campo_usuario).sendKeys(nome_usuario);
        getDriver().findElement(campo_email).sendKeys(email);
        getDriver().findElement(campo_senha).sendKeys(senha);
    }

    public void clicarBotaoCadastrar() {
        getDriver().findElement(botao_cadastrar).click();
    }
}
