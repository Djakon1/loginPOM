import {navigation} from "../pageObjects/navigations.js" 
import {loginPage} from "../pageObjects/loginPage.js"
describe('loginCase',() => {
    beforeEach(() =>{
        cy.visit(' ')
        navigation.clickLoginButton()
    })
    it('login with Bad credentials',() => {
        loginPage.login("peraper@gmail.com","sifra123")    
    })
    it('login with bad password',() => {
        loginPage.login("peraperic@gmail.com","sifra123")

    })
    it('login with bad email',() => {
        loginPage.login("hahahah@gmail.com","peraperic12")
    
    })
    it('login with valid credentials',() => {
    loginPage.login("peraperic@gmail.com","peraperic12"), 
    navigation.clickLogoutButton() 
    })

})