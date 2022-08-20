const FaxApiDocsPage = require('./fax.api.docs.page')
const FaxSupportPage = require('./fax.support.page')
const AllProductPage = require('./all.product.page')


class FaxApiProdPage extends AllProductPage{

    getFaxDocsLink() {
        return cy.get('p [href$="fax"][href*="/docs"]')
    }

    getFaxSupportPage() {
        return cy.get('a[href*="articles"]')
    }

    faxDocsLinkClick() {
        cy.linkClick(this.getFaxDocsLink())

        return new FaxApiDocsPage
    }

    faxSupportLinkClick() {
        cy.linkClick(this.getFaxSupportPage())

        return new FaxSupportPage
    }
}

module.exports = FaxApiProdPage