import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons'
import { describe } from 'node:test';
import { ProductPage } from '../pages/ProductPage';

test('Agregar Elemento al Carro de Compras', {tag: ['@critical']}, async({page}) =>{
    allure.label('suite', 'addToCart Tests')
    
    const products = new ProductPage(page);
    const login = new LoginPage(page);

    await login.navegarHaciaLogin();
    await login.loginConCredencialesValidas();
    await products.agregarMochilaAlCarro();

})