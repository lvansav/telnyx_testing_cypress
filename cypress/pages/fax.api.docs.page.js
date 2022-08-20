const DocsPage = require('./docs.page')


class FaxApiDocsPage extends DocsPage {


    getSideBarSearchInput() {
        return super.getSideBarSearchInput()
    }
    
    getSetupProgFaxBtn() {
        return cy.get('a[color][href*="quickstart"]')
                .contains('Setup Programmable Fax')
    }

    getSeeTheSpecsBtn() {
        return cy.get('a[color][href*="api"]')
                .contains('See the Specs')
    }
}

module.exports = FaxApiDocsPage