package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;

import pages.CadastroPage;
import runner.RunCucumberTest;


public class CadastroSteps extends RunCucumberTest {

    CadastroPage cadastroPage = new CadastroPage();


    @Dado("^acesso o cadastro de usuário$")
    public void acesso_o_cadastro_de_usuário() {
        cadastroPage.acessaPaginaCadastro();
    }

    @Quando("^eu preencho o formulário de cadastro$")
    public void eu_preencho_o_formulário_de_cadastro() {
        cadastroPage.preencheFormularioCadastro("Henrique","henrique@calazans.com","henrique1234");
    }
    @Quando("^clico em registrar$")
    public void clico_em_registrar()  {
        cadastroPage.clicarBotaoCadastrar();
    }
}
