package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.MensagemPage;
import runner.RunCucumberTest;

public class mensagemSteps extends RunCucumberTest {

    MensagemPage mensagemPage = new MensagemPage();

    @Dado("^que estou na tela de mensagem$")
    public void que_estou_na_tela_de_mensagem() {
        mensagemPage.acessaTelaMensagem();

    }

    @Dado("^preencho todos os campos$")
    public void preencho_todos_os_campos() {
        mensagemPage.preencheCampoNome("henrique");
        mensagemPage.preencheEmail("henrique@henrique.com");
        mensagemPage.preencheAssuntoMensagem("TestAutomatizado");
        mensagemPage.preencheCorpoMensagem("lkjsbdkjsabdfbadskflbaksdjblakdsjbllakbdfkjabdsfkjabdsfkjabklabdsfkjb");
        mensagemPage.anexarArquivo("C:\\Users\\calaz\\IdeaProjects\\ecommerceCucumber\\site-ecommerce-curso-selenium\\meme.jpg");

    }

    @Quando("^clico em enviar mensagem$")
    public void clico_em_enviar_mensagem() {
        mensagemPage.clicarBotaoEnviarMensagem();

    }

    @Entao("^vejo o feedback de viagem enviada com sucesso$")
    public void vejo_o_feedback_de_viagem_enviada_com_sucesso() {
        mensagemPage.verificaMensagemAlert("Press OK to proceed!");
        mensagemPage.verificaMensagemSucesso("Success! Your details have been submitted successfully.");

    }


}
