package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
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


    @After
    public static void takeScreenShoot (Scenario scenario){
        System.out.println("============================");
        System.out.println("Test que falhou: " + scenario.getName());
        System.out.println("Status: " + scenario.getStatus());
        System.out.println("Tag: " + scenario.getSourceTagNames());
        System.out.println("============================");
        if ((scenario.isFailed())) {
            // Tirar print da tela
            ScreenshotUtils.addScreenshotOnScenario(scenario);
        }
    }
}
