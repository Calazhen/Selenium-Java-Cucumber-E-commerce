package pages;

import org.apache.maven.plugin.logging.Log;
import org.openqa.selenium.By;
import support.Utils;

public class CadastroPage extends Utils {

    private By ainda_nao_tem_conta = By.cssSelector("#createAccount");
    private By campo_usuario = By.id("user");
    private  By campo_email = By.id("email");
    private  By campo_senha = By.id("password");
    private  By botao_cadastrar = By.id("btnRegister");


    public void acessaPaginaCadastro (){
        esperarElementoEstarPresente(ainda_nao_tem_conta,8);
        driver.findElement(ainda_nao_tem_conta).click();
    }

    public void preencheFormularioCadastro (String nome_usuario,String email,String senha){
        esperarElementoEstarPresente(campo_usuario,8);
        driver.findElement(campo_usuario).sendKeys(nome_usuario);
        driver.findElement(campo_email).sendKeys(email);
        driver.findElement(campo_senha).sendKeys(senha);
    }

    public void clicarBotaoCadastrar(){
        driver.findElement(botao_cadastrar).click();
    }
}
