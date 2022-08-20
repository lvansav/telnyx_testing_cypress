class SupportPage {
    getSearchInput() {
        return cy.get('input.search__input')
    }

    getLastBreadcrumb() {
        return cy.get('.breadcrumb div:last-child')
    }
}

module.exports = SupportPage