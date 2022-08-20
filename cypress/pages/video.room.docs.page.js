const DocsPage = require('./docs.page')


class VideoRoomDocsPage extends DocsPage {

    getPageTitle() {
        return cy.get('#video-rooms')
    }
}

module.exports = VideoRoomDocsPage