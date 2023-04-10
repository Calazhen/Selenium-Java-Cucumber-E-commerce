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
        tags = {"@cadastro"}, //~@ignore para todos os testes com a anotação diferente de ignore
        glue = {"steps"}

)
public class RunCucumberTest {

    public static WebDriver driver;

    @BeforeClass
    public static void start() {
        System.setProperty("webdriver.chrome.driver", "/Users/calaz/chromedriver.exe");
        driver = new ChromeDriver();

    }

    @AfterClass
    public static void stop() {
        driver.quit();
    }
}