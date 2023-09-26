package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumberTest;
import support.ScreenshotUtils;

public class LoginSteps extends RunCucumberTest {

    LoginPage loginPage = new LoginPage();

    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() {
        loginPage.acessaAplicacao();
        loginPage.acessarTelaLogin();
    }

    @Quando("^preencho login \"([^\"]*)\" e senha \"([^\"]*)\"$")
    public void preencho_login_e_senha(String email, String senha) {
        loginPage.preencheEmail(email);
        loginPage.preencheSenha(senha);

    }

    @Quando("^clico em Login$")
    public void clico_em_Login() {
        loginPage.clicaBotaoLogin();

    }

    @Então("^vejo a mensagem de email \"([^\"]*)\"$")
    public void vejo_a_mensagem_de_email(String mensagem_esperada_email) {
        loginPage.verificaMensagemEmail(mensagem_esperada_email);
    }


    @Então("^vejo a mensagem de senha \"([^\"]*)\"$")
    public void vejo_a_mensagem_de_senha(String mensagem_esperada_senha) {
        loginPage.verificaMensagemSenha(mensagem_esperada_senha);
    }

    @After
    public static void takeScreenShoot(Scenario scenario) {
        if ((scenario.isFailed())) {
            System.out.println("============================");
            System.out.println("Test que falhou: " + scenario.getName());
            System.out.println("Status: " + scenario.getStatus());
            System.out.println("Tag: " + scenario.getSourceTagNames());
            System.out.println("============================");
            // Tirar print da tela
            ScreenshotUtils.addScreenshotOnScenario(scenario);
        }
    }
}
