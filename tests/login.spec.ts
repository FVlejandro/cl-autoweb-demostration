import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons'
import { DataUtil } from '../utils/DataFilter';


test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page, 'TC001');
    await loginPage.navigateToLoginPage();
    await loginPage.loginFillUsername();
    await loginPage.loginFillPassword();
    await loginPage.loginClickButton();

    const inventoryText = await loginPage.getTextFromInventoryButton();
    expect(inventoryText).toBe('Add to cart');
    await loginPage.takeScreenshot();
    
});


test('Login Test with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page, 'TC002');
    await loginPage.navigateToLoginPage();
    await loginPage.loginFillUsername();
    await loginPage.loginFillPassword();
    await loginPage.loginClickButton();

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    await loginPage.takeScreenshot();
});

test('Login Test with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page, 'TC003');
    await loginPage.navigateToLoginPage();
    await loginPage.loginClickButton();

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe('Epic sadface: Username is required');

    await loginPage.takeScreenshot();
});



