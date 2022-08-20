const MainPage = require('./main.page')


class AllProductPage extends MainPage{

    getFaxApiLabel() {
        return cy.get('main [href="/products/fax-api"]')
    }

    faxApiClick() {
        cy.linkClick(this.getFaxApiLabel())
    }
}

module.exports = AllProductPage