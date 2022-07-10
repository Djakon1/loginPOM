const locators = require('../fixtures/locators.json')
const faker = require ('@faker-js/faker')


describe('login case',() => {
    beforeEach( 'visit gallery',() =>{
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.Header.loginBtn).click() 
    })


    it('login with Bad credentials',() => {
        cy.get(locators.Login.EmailInput).type(faker.internet.email()),
        cy.get(locators.Login.PasswordInput).type(faker.internet.password()
    ),
        cy.get(locators.Login.Submit).click()
        cy.contains('Bad Credentials')
        //cy.should('401')   
    })

    it('login with bad password',() => {
        cy.get(locators.Login.EmailInput).type('peraperic@gmail.com'),
        cy.get(locators.Login.PasswordInput).type('rape'),
        cy.get(locators.Login.Submit).click()
        //cy.should('stay.on.https://gallery-app.vivifyideas.com/')
    
    })
    it('login with bad email',() => {
        cy.get(locators.Login.EmailInput).type('peraperic@mail.com'),
        cy.get(locators.Login.Submit).type('peraperic12'),
        cy.get(locators.Login.Submit).click()
        
    
    })
    
    it('login with valid credentials',() => {
        cy.get(locators.Login.EmailInput).type('peraperic@gmail.com'),
        cy.get(locators.Login.Submit).type('peraperic12'),
        cy.get(locators.Login.Submit).click()
        
    
    })
    
    
})