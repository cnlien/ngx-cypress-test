///<reference types="cypress"/>

describe('Our Second Test Suite', ()=> {
    it('Navigates to the Forms Page', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy=signInButton][status=primary]')
    })
})