class LoginPage {
    get emailInput() {
        return cy.get("input[id='email']")
    }
    get passwordInput() {
        return cy.get("input[id='password']")
    }
    get submitButton() {
        return cy.get("button[class='btn btn-custom']")
    }

    get errorAlert() {
        return cy.get("p[class='alert alert-danger']")
    }

    login(email,password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}

export const loginPage = new LoginPage()