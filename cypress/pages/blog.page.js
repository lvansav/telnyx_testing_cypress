import { faker } from '@faker-js/faker'
const MainPage = require('./main.page')


class BlogPage extends MainPage {

    getArticle(articleNum) {
        return cy.get('#articles a')
                .eq(articleNum)
    }

    getLastArticle() {
        return this.getArticle(1)
    }

    getEmailField() {
        return cy.get('#Email')
    }

    getSubscribeBtn() {
        return cy.get('button[type="submit"]')
    }
    
    getSubscribeSuccessMsg() {
        return cy.contains('Thanks for subscribing!',
                            { timeout: 120000})
    }
    
    moveFromHeader() {
        return cy.get('header')
                .realMouseMove(0, 1500)
    }

    subscribeBtn() {
        return this.getSubscribeBtn()
                    .click()
    }

    typeRandomEmail() {
        return this.getEmailField()
                    .type(faker.internet.email())
    }
}

module.exports = BlogPage