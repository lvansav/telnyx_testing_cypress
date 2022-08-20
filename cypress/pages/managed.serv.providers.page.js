const MainPage = require('./main.page')


class ManagedServProviders extends MainPage {

    getPricingVoiceApiLink() {
        return cy.get('main [href="/pricing/call-control"]')
    }

    pricingVoiceApiLinkClick() {
        return cy.linkClick(this.getPricingVoiceApiLink())
    }
}

module.exports = ManagedServProviders