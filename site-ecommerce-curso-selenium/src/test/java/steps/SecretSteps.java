package steps;

import cucumber.api.java.pt.Entao;

import pages.SecretPage;
import runner.RunCucumberTest;

public class SecretSteps extends RunCucumberTest {

    SecretPage secretPage = new SecretPage();

    @Entao("^vejo a mensage de cadastro realizado com sucesso$")
    public void vejo_a_mensage_de_cadastro_realizado_com_sucesso() {
        secretPage.verificaMensagemSucesso();
    }

}
