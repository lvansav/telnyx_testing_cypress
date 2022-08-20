// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('linkClick', (link) => {
    link.scrollIntoView( {top: 1000, left: 0} )
        .realMouseMove(0, 1000)
        .click()
})

Cypress.Commands.add('openAndGetAllDropItems', (dropNum) => {
    cy.get('header li')
        .eq(dropNum)
        .find('[tabindex]')
        .realHover()        
        .siblings('div')
        .find('a')
})

Cypress.Commands.add('getHeadeDropdown', (dropNum) => {
    cy.get('header li')
        .eq(dropNum)
        .find('[tabindex]')
})

Cypress.Commands.add('AcceptAllCookies', () => {
    cy.get('[id="__next"]').then(($btn) => {
        if ($btn.find('[aria-label="close and deny"]').is(':visible')) {
          cy.contains('Accept and close')
            .click()                                        //  //*[@aria-label="close and deny"]/following-sibling::div/div[1]/button - xPath for this button
        }
      })
})

Cypress.Commands.add('moveFromHeader', () => {
    cy.get('header')
        .realMouseMove(0, 1500)
})



    // cy.contains('Make and receive calls in')
    //   .siblings('div')
    //   .find('div')
    //   .eq(0)
    //   .find('button[aria-haspopup="listbox"]')
    //   .contains('United Kingdom')
    //   .should('contains', 'United Kingdom')