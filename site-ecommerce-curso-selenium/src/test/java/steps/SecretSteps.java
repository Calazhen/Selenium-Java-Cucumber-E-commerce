package steps;

import cucumber.api.java.pt.Entao;

import cucumber.api.java.pt.Então;
import pages.SecretPage;
import runner.RunCucumberTest;

public class SecretSteps extends RunCucumberTest {

    SecretPage secretPage = new SecretPage();

    @Entao("^vejo a mensagem \"([^\"]*)\" com sucesso$")
    public void vejo_a_mensagem_com_sucesso(String mensagem_login_sucesso_esperada) {
        secretPage.verificaMensagemCadastroSucesso(mensagem_login_sucesso_esperada);
    }

}
