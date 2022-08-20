class PricingBase{

    getCountryDropdown(lable) {
        return cy.contains(lable)
                .siblings('div')
                .find('div')
                .eq(0)
                .find('button[aria-haspopup="listbox"]')
    }

    getCurrencyDropdown(lable) {
        return cy.contains(lable)
                .siblings('div')
                .find('div')
                .eq(1)
                .find('button[aria-haspopup="listbox"]')
    }

    selectCountry(lable, country) {
        return cy.contains(lable)
                .siblings('div')
                .find('div')
                .eq(0)
                .find('button[aria-haspopup="listbox"]')
                .siblings('ul')
                .realHover()
                .find(country)
                .scrollIntoView()
                .click()
    }

    getUK() {
        return 'li:nth-child(4) [href*="/gb"]'
    }

    selectUKCountry(lable) {
        const UK = this.getUK()
        return this.selectCountry(lable, UK)
    }

    getPageTitle() {
        return cy.get('main h1 span')
    }
}

module.exports = PricingBase