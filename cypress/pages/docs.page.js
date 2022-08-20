class DocsPage {

    getSideBarSearchInput() {
        return cy.get('#docs-desktop-sidebar input')
    }

    inputInSearchField(value) {
        const searchInput = this.getSideBarSearchInput()
        searchInput.type(value)
    }

    clickPossibleSearchResult(resultCount) {
        const search = this.getSideBarSearchInput()
        search.parent()
            .siblings('div')
            .find('a')
            .eq(resultCount)
            .click()
    }
}

module.exports = DocsPage