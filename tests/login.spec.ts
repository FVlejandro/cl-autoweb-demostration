import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons'

test.describe('Login Tests', () => {
    test('Login con Credenciales Válidas', {tag: ['@login', '@critical']} ,async ({ page }) => {
        allure.label('suite', 'Demo Login');
        const loginPage = new LoginPage(page);

        await loginPage.navegarHaciaLogin();
        await loginPage.loginConCredencialesValidas();    
    });

    test('Login con Credenciales Inválidas',{tag: ['@login', '@blackbox']}, async({page})=>{
        allure.label('suite', 'Demo Login')
        const loginPage = new LoginPage(page);

        await loginPage.navegarHaciaLogin();
        await loginPage.loginConCredencialesInvalidas();
    });

    test('Login con Credenciales Vacías', {tag: ['@login', '@smoke']}, async({page})=>{
        allure.label('suite', 'Demo Login')
        const loginPage = new LoginPage(page);

        await loginPage.navegarHaciaLogin();
        await loginPage.loginConCredencialesVacias();
    });
})




