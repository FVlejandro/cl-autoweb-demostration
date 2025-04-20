import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Login Test', async ({ page }) => {
    // Instancia de la clase LoginPage
    const loginPage = new LoginPage(page);

    // Navegamos a la página de login
    await loginPage.navigateToLoginPage();

    // Llenamos el campo de usuario
    await loginPage.loginFillUsername();

    // Llenamos el campo de contraseña
    await loginPage.loginFillPassword();

    // Hacemos clic en el botón de login
    await loginPage.loginClickButton();

    // Obtenemos el texto del botón de validación
    const text = await loginPage.getTextFromInventoryButton();

    // Validamos la existencia del botón como
    expect(text).toBe('Add to cart');
});