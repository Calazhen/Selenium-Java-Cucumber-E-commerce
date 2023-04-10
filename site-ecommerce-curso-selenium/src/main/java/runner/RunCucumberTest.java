package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber"},
        features = "src/main/resources/features",
        tags = {"@cadastro_sucesso"}, //~@ignore para todos os testes com a anotação diferente de ignore
        glue = {"steps"}

)
public class RunCucumberTest extends RunBase {
    public static WebDriver driver;

    @AfterClass
    public static void stop() {
        getDriver().quit();
    }
}