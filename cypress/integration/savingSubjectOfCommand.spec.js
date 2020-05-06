///<reference types="cypress"/>

describe('These tests are to show how to save the subject of a cypress command', ()=> {
    it('Then and Wrap Methods', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[for=inputEmail1]')
            .should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid')
            .find('[for=inputPassword2]')
            .should('contain', 'Password')

        cy.contains('nb-card', 'Basic form')
            .find('[for=exampleInputEmail1]')
            .should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form')
            .find('[for=exampleInputPassword1]')
            .should('contain', 'Password')
    })
})