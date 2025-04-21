import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons'


test('Login Test', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await allure.parentSuite('Web Test Suite');
    await allure.suite('Login Test Suite');
    await allure.displayName('Login Success Test');
    await allure.description('Test para validar el login exitoso en la pagina de Swag Labs');    
    

    await allure.step('Navegamos al Login', async() => {
        await loginPage.navigateToLoginPage();
    });

    await allure.step('Escribimos el usuario', async() => {
        await loginPage.loginFillUsername();
    });

    await allure.step('Escribimos la contraseña', async() => {
        await loginPage.loginFillPassword();
    });

    await allure.step('Click en el boton de login', async() => {
        await loginPage.loginClickButton();
    });

    await allure.step('Validamos que el login fue exitoso', async() => {
        const text = await loginPage.getTextFromInventoryButton();
        expect(text).toBe('Add to cart');

        const loginPageBuffer = await loginPage.takeScreenshot();
        allure.attachment('Captura de Pantalla', loginPageBuffer, {
            contentType: allure.ContentType.PNG,
            fileExtension: 'png'
            }
        )
    });      
    
});


