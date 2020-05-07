///<reference types="cypress"/>
import { navigateTo } from '../support/page_objects/navigationPage'
import { onFormLayoutsPage } from '../support/page_objects/formLayoutsPage'

describe('Test with Page Objects', ()=>{
    beforeEach('open application', ()=>{
        cy.openHomePage()
    })

    it('verifies nav across pages',()=>{
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it('should submit inline and basic form', ()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitFormWithNameEmail('Chris', 'test@email.com')
        onFormLayoutsPage.submitBasicFormWithNameEmail('test@email.com', 'password')
        navigateTo.datepickerPage()

    })
})