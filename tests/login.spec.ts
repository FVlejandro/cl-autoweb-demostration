import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons'


test('Login Test', async ({ page }) => {

    // Creamos una instancia de la clase LoginPage
    const loginPage = new LoginPage(page);

    // Creamos un Step en el reporte de Allure
    await allure.step('Navegamos al sitio web', async () => {
        await loginPage.navigateToLoginPage(); // --> Metodo proveniente de LoginPage
    });
    
    // Creamos un Step en el reporte de Allure con un Substep Dentro
    await allure.step('Ingresamos Credenciales', async () => {
        // Substep  Ingreso Usuario
        await allure.step('Validamos el campo de usuario', async (ctx) => {             
            ctx.parameter('Usuario', 'standard_user');
                await loginPage.loginFillUsername(); // --> Metodo proveniente de LoginPage
        });
        // Substep Ingreso Contraseña
        await allure.step('Validamos el campo de contraseña', async (ctx) => {
            ctx.parameter('Contraseña','secret_sauce');
            await loginPage.loginFillPassword(); // --> Metodo proveniente de LoginPage
        });

    });

    // Creamos un Step en el reporte de Allure
    await allure.step('Hacemos clic en el botón de login', async () => {
        await loginPage.loginClickButton(); // --> Metodo proveniente de LoginPage
    });

    // Creamos un Step en el reporte de Allure
    await allure.step('Validamos Inicio de sesión Exitoso', async () => {

        const text = await loginPage.getTextFromInventoryButton(); // --> Metodo proveniente de LoginPage
        expect(text).toBe('Add to cart'); // Assertion para validar el texto del botón

        //Tomamos una captura de pantalla y la guardamos
        const loginPageBuffer = await loginPage.takeScreenshot(); // --> Metodo proveniente de LoginPage

        allure.attachment( // --> Adjuntamos la captura de pantalla al reporte
            'Captura de Pantalla',
            loginPageBuffer,
            {
                contentType: allure.ContentType.PNG,
                fileExtension: 'png'
            }
        )        
        
    });

});