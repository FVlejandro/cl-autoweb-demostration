import { Page } from "playwright-core";
import * as allure from 'allure-js-commons'
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage { 

    constructor(page: Page){
        super(page)
    }
    
    async navegarHaciaLogin(){
        await allure.step('Navemagos hacia el Login de SauceLogin', async() =>{
            await this.baseNavigate(`${process.env.BASE_URL}`)
        })
    }

    async loginConCredencialesValidas(){
        await allure.step('Ingresamos Credenciales válidas para realizar login', async() => {
            await this.fillByRoleInput('username', 'standard_user')
            await this.fillByRoleInput('password', 'secret_sauce')
            await allure.attachment('Login Page', await this.page.screenshot(), 'image/png')
            await this.clickByRoleButton('Login')
        });
    }

    async loginConCredencialesInvalidas(){
        await allure.step('Ingresamos Credenciales invalidas para realizar login', async() => {
            await this.fillByIdInput('user-name', 'usuarioIncorrecto')
            await this.fillByIdInput('password', 'password Incorrecta')
            await this.clickByIdButton('login-button')
            await allure.attachment('Login Invalido', await this.page.screenshot(), 'image/png')
        });
    }

    async loginConCredencialesVacias(){
        await allure.step('No se ingresa ninguna Credencial para realizar login', async()=>{
            await this.clickByRoleButton('Login')
            await allure.attachment('Login Vacío', await this.page.screenshot(), 'image/png')
        });
    }
}