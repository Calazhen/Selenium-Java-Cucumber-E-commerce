package support;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.junit.runner.Description;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.junit.rules.TestWatcher;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;

import static runner.RunBase.getDriver;

public class ScreenshotUtils {
    public static void addScreenshotOnScenario (Scenario scenario){
        byte[] screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot,"image/png");

    }
    public static void takeScreenshot(WebDriver driver, String screenshotName) {
        try {
            File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshotFile, new File("target/screenshots/" + screenshotName + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void failed (Throwable e, Description description){
        String testMethodName = description.getMethodName();
        ScreenshotUtils.takeScreenshot (getDriver(),testMethodName);
    }
}
