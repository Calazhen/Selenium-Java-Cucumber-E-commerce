package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class RunBase {

    static WebDriver driver;

    private enum  Browser {CHROME,FIREFOX}

    public static WebDriver getDriver (){

        if (driver==null){
          return  getDriver(Browser.CHROME);
        }else {
            return driver;
        }

    }

    public static WebDriver getDriver(Browser browser){

        if (driver!= null){
            driver.quit();
        }

        switch (browser){
            case CHROME:
                System.setProperty("webdriver.chrome.driver", "/Users/calaz/chromedriver.exe");
                driver = new ChromeDriver();
                break;

            case FIREFOX:
                System.setProperty("webdriver.chrome.driver", "/Users/calaz/geckodriver.exe");
                driver = new FirefoxDriver();

            default:
                throw  new IllegalArgumentException("Passe um  navegador válido");
        }
        return driver;
    }
}
