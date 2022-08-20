const MainPage = require('./main.page')
const NetworkPricingPage = require('./network.pricing.page')

class PricingPage extends MainPage {

    getNetworkPricingLink() {
        return cy.get('[href="/pricing/networking"]')
    }

    networkPricingLinkClick() {
        this.getNetworkPricingLink()
            .click()

        return new NetworkPricingPage
    }
}

module.exports = PricingPage