///<reference types="cypress"/>

// THIS TEST WILL PASS BUT THE CODE CAN BE DRIED UP
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

// DECLARE VARIABLES WITH THE .then() keyword and a callback function
describe('These tests are to show how to save the subject of a cypress command', ()=> {
    it('Then and Wrap Methods', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const firstEmailLabel = firstForm.find('[for=inputEmail1]').text()
            const firstPasswordLabel = firstForm.find('[for=inputPassword2]').text()
            expect(firstEmailLabel).to.equal('Email')
            expect(firstPasswordLabel).to.equal('Password')
        })
    })
})

// NEST FUNCTIONS TO ACCESS VARIABLES DECLARED INSIDE OF THE CLOSURE
describe('These tests are to show how to save the subject of a cypress command', ()=> {
    it('Then and Wrap Methods', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const firstEmailLabel = firstForm.find('[for=inputEmail1]').text()
            const firstPasswordLabel = firstForm.find('[for=inputPassword2]').text()
            expect(firstEmailLabel).to.equal('Email')
            expect(firstPasswordLabel).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const secondPasswordLabel = secondForm.find('[for=exampleInputPassword1]').text()
                // expect(firstPasswordLabel).to.equal(secondPasswordLabel)
                cy.wrap(secondForm).find('[for=exampleInputPassword1]').should('contain', 'Password')
            })
        })
    })
})