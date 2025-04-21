import { Page } from "playwright-core";
import { InventoryLocators } from "../locators/InventoryLocators";
import { LoginLocators } from "../locators/LoginLocators";
import * as allure from 'allure-js-commons'
import { BasePage } from "./BasePage";
import { DataUtil } from "../utils/DataFilter";


export class LoginPage extends BasePage { 

    // Obtenemos los locators y la url para la página de login
    private usernameInput: string = LoginLocators.usernameInput;
    private passwordInput: string = LoginLocators.passwordInput;
    private loginButton: string = LoginLocators.loginButton;
    private validateInventoryButton: string = InventoryLocators.bag_to_cart_button;
    private errorButton: string = LoginLocators.errorMessage;

    private username: string;
    private password: string;
    private path: string;
    private displayName: string;
    private description: string;
    private parentSuite: string;
    private suite: string;
    private subSuite: string;
    private owner: string;
    private severity: string; 

    // Constructor de la clase LoginPage
    constructor(page: Page, testCase: string) {
        const testcase = new DataUtil('../data/LoginTestData.json', testCase);
        super(page);
        this.username = testcase.username;
        this.password = testcase.password;
        this.path = testcase.path;
        this.displayName = testcase.displayName;
        this.description = testcase.description;
        this.parentSuite = testcase.parentSuite;
        this.suite = testcase.suite;
        this.subSuite = testcase.subSuite;
        this.owner = testcase.owner;
        this.severity = testcase.severity;

        allure.parentSuite(this.parentSuite);
        allure.suite(this.suite);
        allure.subSuite(this.subSuite);
        allure.displayName(this.displayName);
        allure.description(this.description);
        allure.owner(this.owner);
        allure.severity(this.severity);
        
    }

    //Navegamos al Login
    public async navigateToLoginPage(): Promise<void> {
        await allure.step('Navegamos a la Url', async() => {
            await this.baseNavigate(this.path);
        });
    }

    //Escribimos el usuario
    public async loginFillUsername(): Promise<void> {
        await allure.step('Ingresamos el usuario', async() => {
            await this.baseFillField(this.usernameInput, this.username);
        });        
    }

    //Escribimos la contraseña
    public async loginFillPassword(): Promise<void> {
        await allure.step('Ingresamos la contraseña', async() => {
            await this.baseFillField(this.passwordInput, this.password);
        });        
    }

    //Click en el boton de login
    public async loginClickButton(): Promise<void> {  
        await allure.step('Click en el boton de login', async() => {
            await this.baseClickElement(this.loginButton);
        });        
    }

    //Obtenemos un elemento desde el HomePage para saber si el login fue exitoso
    public async getTextFromInventoryButton(): Promise<string> {
        return await allure.step('Validamos que el login fue exitoso', async() => {
            let text = await this.baseGetTextFromElement(this.validateInventoryButton);
            return text;
        });
    }

    //Obtenemos el mensaje de error en caso de que el login falle
    public async getErrorMessage(): Promise<string> {
        return await allure.step('Validamos El mensaje de error en el login', async() => {
            let text = await this.baseGetTextFromElement(this.errorButton);
            return text;
        });
    }

    //Tomamos una captura de pantalla y la guardamos
    public async takeScreenshot(): Promise<void> {
        await allure.step('Tomamos una captura de pantalla', async () => {
            const screenshot = await this.baseTakeScreenshot({
                'fullPage': true,
                'type': 'png'
            });
    
            // Adjuntar la captura de pantalla al reporte de Allure
            allure.attachment('Screenshot', screenshot, {
                contentType: allure.ContentType.PNG,
                fileExtension: 'png'
            });
        });    
        
    }
    
}