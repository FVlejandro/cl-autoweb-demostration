import { Page } from 'playwright';
import * as allure from 'allure-js-commons'

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async baseNavigate(url: string): Promise<void> {
        await this.page.goto(url)
    }

    async clickByIdButton(id: string): Promise<void>{
        await this.page.locator(`#${id}`).click()
    }

    async clickByFilterButton(filtro: string, name: string){
        const productCard = this.page.getByRole('listitem').filter({hasText: `${filtro}`})
        await productCard.getByRole('button', {name: `${name}`})
    }

    async fillByIdInput(id: string, value: string): Promise<void>{
        await this.page.locator(`#${id}`).fill(value)
    }

    async clickByRoleButton(name: string): Promise<void>{
        await this.page.getByRole('button', {name: `${name}`}).click()
    }

    async fillByRoleInput(name: string, value: string): Promise<void>{
        await this.page.getByRole('textbox', {name: `${name}`}).fill(value)
    }


    

}