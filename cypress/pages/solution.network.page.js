const MainPage = require('./main.page')

class SolutionNetworkPage extends MainPage {

    getPricingBtn() {
        return cy.get('main [href="/pricing"]')
    }

    pricingBtnClick() {
        this.getPricingBtn()
            .click()
    }
}

module.exports = SolutionNetworkPage