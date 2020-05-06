///<reference types="cypress"/>


describe('Picking a Date with the date picker', () =>{
    it('Selects the Correct Date', ()=> {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        let date = new Date()
        date.setDate(date.getDate() + 5)
        let futureDate = date.getDate()
        let futureMonth = date.toLocaleDateString('default', {month: 'short'})

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if(!dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()
                    cy.get('nb-calendar-day-picker').contains(futureDate).click()
                } else {
                    cy.get('nb-calendar-day-picker').contains(futureDate).click()
                }
            })

            // cy.get('nb-calendar-day-picker').contains('17').click()
            // cy.wrap(input).invoke('prop', 'value').should('contain', 'May 17, 2020')
        })
    })
})