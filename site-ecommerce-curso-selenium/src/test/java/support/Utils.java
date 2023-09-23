package support;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.util.Random;


public class Utils extends RunCucumberTest {
    public static void esperarElementoEstarClicavel(By elemento, int tempo) {
        WebDriverWait wait = new WebDriverWait(getDriver(), tempo);
        wait.until(ExpectedConditions.elementToBeClickable(elemento));
    }

    public static void esperarElementoEstarVisivel(By elemento, int tempo) {
        WebDriverWait wait = new WebDriverWait(getDriver(), tempo);
        wait.until(ExpectedConditions.visibilityOfElementLocated(elemento));
    }

    public static String randomEmail(){

        String emailInit = "calazans";
        String emailFinal= "@testHQ.com.br";

        Random random = new Random();
        int minimo = 1;
        int maximo = 9999999;
        int resultado = random.nextInt(maximo-minimo) + minimo;

        return emailInit+resultado+emailFinal;
    }


}
