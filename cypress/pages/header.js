

class Header {
    
    getHeaderSignUpBtn() {
        return cy.get('li div [href="/sign-up"]')
    }

    getHeaderContactUsBtn() {
        return cy.get('header li [href="/contact-us"]')
    }

    getAllProdHeaderLink() {
        return cy.get('header [href="/products"] span')
    }

    getManagedServHeadLink() {
        return cy.get('[href*="managed-services"] span')
    }

    getNetworkHeadBtn() {
        return cy.get('header li [href$="global-ip-network"]')
    }

    getDocsHeadLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href*="developers"]')
    }

    getBlogHeadLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/resources"]')
    }
};

module.exports = Header