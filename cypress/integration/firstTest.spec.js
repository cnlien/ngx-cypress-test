///<reference types="cypress"/>

describe('Our First Test Suite', ()=> {
    it('Navigates to the Forms Page', ()=>{
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })
})