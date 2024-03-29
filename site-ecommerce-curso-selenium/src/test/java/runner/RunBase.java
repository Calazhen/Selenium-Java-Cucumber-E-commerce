package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class RunBase {

    static WebDriver driver;

    public enum Browser {CHROME, FIREFOX}

    public static WebDriver getDriver() {

        if (driver == null) {
            return getDriver(Browser.CHROME);
        } else {
            return driver;
        }

    }

    public static WebDriver getDriver(Browser browser) {

        if (driver != null) {
            driver.quit();
        }

        switch (browser) {
            case CHROME:
                System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") + "\\src\\resources\\chromedriver.exe");
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--headless");
                driver = new ChromeDriver(chromeOptions);
                break;

            case FIREFOX:
                System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\src\\resources\\geckodriver.exe");
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.setHeadless(true);
                driver = new FirefoxDriver(firefoxOptions);
                break;

            default:
                throw new IllegalArgumentException("Passe um  navegador válido");
        }
        return driver;
    }
}
