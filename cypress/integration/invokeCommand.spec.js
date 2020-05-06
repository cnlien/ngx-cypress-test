///<reference types="cypress"/>

describe('Invoke Command', () => {
    it('Using the Invoke Command', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
				
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            .should('contain', 'checked')
    })
})

describe('Picking a Date with the date picker', () =>{
    it('Selects the Correct Date', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        
        cy.get('[placeholder="Form Picker"]').click()
        cy.get('nb-calendar-navigation').click()
        cy.get('.year-cell').contains('2019').click()
        cy.get('.month-cell').contains('Dec').click()
        cy.get('.day-cell').contains('21').click()

        cy.get('[placeholder="Form Picker"]').invoke('prop', 'value').should('contain', 'Dec 21, 2019')
    })
})