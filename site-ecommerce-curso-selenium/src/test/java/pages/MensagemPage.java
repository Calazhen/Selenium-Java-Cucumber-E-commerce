package pages;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import runner.RunBase;
import runner.RunCucumberTest;
import support.Utils;


public class MensagemPage extends RunCucumberTest {

    final private By campo_nome_mensagem = By.cssSelector("input[placeholder='Name']");
    final private By campo_email_mensagem = By.cssSelector("input[placeholder='Email']");
    final private By campo_assunto_mensagem = By.cssSelector("input[placeholder='Subject']");
    final private By campo_corpo_da_mensagem = By.cssSelector("#message");
    final private By campo_anexo = By.cssSelector("input[name='upload_file']");
    final private By botao_enviar_mensagem = By.cssSelector("input[value='Submit']");
    final private By mensagem_sucesso = By.cssSelector(".status.alert.alert-success");


    public void acessaTelaMensagem() {
        RunBase.getDriver(Browser.CHROME);
        getDriver().get("https://automationexercise.com/contact_us");
        Utils.esperarElementoEstarClicavel(botao_enviar_mensagem, 8);
    }

    public void preencheCampoNome(String nome) {
        getDriver().findElement(campo_nome_mensagem).clear();
        getDriver().findElement(campo_nome_mensagem).sendKeys(nome);
    }

    public void preencheEmail(String email) {
        getDriver().findElement(campo_email_mensagem).clear();
        getDriver().findElement(campo_email_mensagem).sendKeys(email);
    }

    public void preencheAssuntoMensagem(String assunto) {
        getDriver().findElement(campo_assunto_mensagem).clear();
        getDriver().findElement(campo_assunto_mensagem).sendKeys(assunto);
    }

    public void preencheCorpoMensagem(String mensagem) {
        getDriver().findElement(campo_corpo_da_mensagem).clear();
        getDriver().findElement(campo_corpo_da_mensagem).sendKeys(mensagem);
    }

    public void anexarArquivo(String caminho_arquivo) {
        getDriver().findElement(campo_anexo).sendKeys(caminho_arquivo);

    }

    public void clicarBotaoEnviarMensagem() {
        getDriver().findElement(botao_enviar_mensagem).click();
    }

    public void verificaMensagemAlert(String sucesso_alert) {
        Alert alert = getDriver().switchTo().alert();
        Assert.assertEquals(sucesso_alert, alert.getText());
        alert.accept();
    }

    public void verificaMensagemSucesso(String mensagem_de_sucesso) {
        Assert.assertEquals(mensagem_de_sucesso, getDriver().findElement(mensagem_sucesso).getText());

    }


}
