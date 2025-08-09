import { Page } from "playwright-core";
import * as allure from 'allure-js-commons'
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage{
    
    constructor(page: Page){
        super(page)
    }

    async agregarMochilaAlCarro(){
        /**
         * Este Test case se construyó con la herramienta codegen 
         * npx playwright codegen https://saucedemo.com
         * 
         */
        await allure.step('Agregamos Producto Mochila al Carro de Compras', async()=>{
            await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await this.page.locator('[data-test="shopping-cart-link"]').click();
            await allure.attachment('Carro', await this.page.screenshot(), 'image/png')
        });
    }
}

