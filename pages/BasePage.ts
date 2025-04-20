import { Page } from 'playwright';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Metodo para entregar el URL Context
    public async baseNavigate(url: string): Promise<void> {
        await this.page.goto(url)
    }

    // Metodo para Escribir en un campo de texto
    public async baseFillField(locator: string, value: string): Promise<void> {
        await this.page.fill(locator, value)
    }

    // Metodo para clickear en un Elemento
    public async baseClickElement(locator: string): Promise<void> {
        await this.page.click(locator)
    }

    //Metodo para Obtener texto de un elemento
    public async baseGetTextFromElement(locator: string): Promise<string>{
        let text = await this.page.textContent(locator)
        return text ? text : ''
    }
    

}