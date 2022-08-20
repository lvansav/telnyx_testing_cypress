const { faker } = require('@faker-js/faker')
const VerifyEmailPage = require('./verify.email.page')


class SignUpPage {
    getEmailInput() {
        return cy.get('#email')
    }

    getPasswordInput() {
        return cy.get('#password')
    }

    getNameInput() {
        return cy.get('#full_name')
    }

    getTermsCheckbox() {
        return    cy.get('#terms_and_conditions')
                    .parent()
    }

    getSubscribeCheckbox() {
        return    cy.get('#subscription_opt_in')
                    .parent()
    }

    getSubmitBtn() {
        return cy.get('[type="submit"]')
    }

    signUpAfterTryItForFree() {
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubmitBtn().click()
        this.getSubmitBtn().click({ force: true })
        this.getSubmitBtn().click('bottom', { force: true })

        const verifyEmailPage = new VerifyEmailPage
        return verifyEmailPage
    }

    signUpByRequireFields() {
        const email = faker.internet.email()
        
        this.getEmailInput().type(email)
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubscribeCheckbox().click()
        this.getSubmitBtn().click()
  

        const verifyEmailPage = new VerifyEmailPage()
        return {page: verifyEmailPage, 
                email: email}
    }

    signUpByAllFields() {
        const email = faker.internet.email()
        
        this.getEmailInput().type(email)
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubscribeCheckbox().click()
        this.getSubmitBtn().click()
  

        const verifyEmailPage = new VerifyEmailPage()
        return {page: verifyEmailPage, 
                email: email}
    }
}

module.exports = SignUpPage;