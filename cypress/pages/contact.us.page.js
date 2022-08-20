const { faker } = require('@faker-js/faker')


class ContantUsPage {

    getReasonSelect() {
        return cy.get('#Reason_for_Contact__c')
    }

    getFirstNameField() {
        return cy.get('#FirstName')
    }
    
    getLastNameField() {
        return cy.get('#LastName')
    }

    getEmailField() {
        return cy.get('#Email')
    }

    getPhoneCode() {
        return cy.get('#Phone_Number_Extension__c')
    }

    getPhoneNumber() {
        return cy.get('#Phone_Number_Base__c')
    }

    getWebsiteField() {
        return cy.get('#Website')
    }

    getAdditionalField() {
        return cy.get('#Form_Additional_Information__c')
    }

    getSubscribeCheckbox() {
        return cy.get('[name="Subscription_Opt_In__c"]')
    }

    selectSupportReason() {
        return this.getReasonSelect()
                    .select('Support')
    }

    getSupportOption() {
        return this.getReasonSelect()
                    .find('[value="Support"]')
    }

    fillAllFields() {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email()
        const randomCode = Math.floor(Math.random() * 221) + 1;
        const randomNumber = faker.phone.number('##########')
        const randomURL = faker.internet.url()
        const lorem  =faker.lorem.paragraph()

        this.getFirstNameField()
            .type(firstName)

        this.getLastNameField()
            .type(lastName)

        this.getEmailField()
            .type(email)

        this.getPhoneCode()
            .select(randomCode)

        this.getPhoneNumber()
            .type(randomNumber)

        this.getWebsiteField()
            .type(randomURL)

        this.getAdditionalField()
            .type(lorem)

        this.getSubscribeCheckbox()
            .check()

        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            code: randomCode,
            number: randomNumber,
            url: randomURL,
            text: lorem
        }
    }
}

module.exports = ContantUsPage