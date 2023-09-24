package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/reports/cucumberReport.json","html:target/reports/"},
        features = "src/resources/features",
        tags = {"@login-falha"}, //~@ignore para todos os testes com a anotação diferente de ignore
        glue = {"steps"}

)
public class RunCucumberTest extends RunBase {

    @AfterClass
    public static void stop() {
        getDriver().quit();

    }
}