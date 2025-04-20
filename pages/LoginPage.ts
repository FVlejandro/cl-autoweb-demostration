import { Page } from "playwright-core";
import { InventoryLocators } from "../locators/InventoryLocators";
import { LoginLocators } from "../locators/LoginLocators";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {

    protected usernameInput: string = LoginLocators.usernameInput;
    protected passwordInput: string = LoginLocators.passwordInput;
    protected loginButton: string = LoginLocators.loginButton;
    protected url: string = LoginLocators.url;
    protected validateInventoryButton: string = InventoryLocators.bag_to_cart_button;

    // Constructor de la clase LoginPage
    constructor(page: Page) {
        super(page);
    }

    //Navegamos al Login
    public async navigateToLoginPage(): Promise<void> {
        await this.baseNavigate(this.url);
    }

    //Escribimos el usuario
    public async loginFillUsername(): Promise<void> {
        await this.baseFillField(this.usernameInput, "standard_user");
    }

    //Escribimos la contraseña
    public async loginFillPassword(): Promise<void> {
        await this.baseFillField(this.passwordInput, "secret_sauce");
    }

    //Click en el boton de login
    public async loginClickButton(): Promise<void> {    
        await this.baseClickElement(this.loginButton);
    }

    //Obtenemos un elemento desde el HomePage para saber si el login fue exitoso
    public async getTextFromInventoryButton(): Promise<string> {
        let text = await this.baseGetTextFromElement(this.validateInventoryButton);
        return text;
    }

    //Tomamos una captura de pantalla y la guardamos
    public async takeScreenshot(): Promise<Buffer> {
       return await this.baseTakeScreenshot({
            'fullPage': true,
            'type': 'png'            
        });
    }


}