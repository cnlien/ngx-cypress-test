///<reference types="cypress"/>

// RADIO BUTTONS
describe('Testing Radio Buttons in Using the Grid', () =>{
	it('Selects only one radio button at a time', ()=> {
		cy.visit('/')
		cy.contains('Forms').click()
		cy.contains('Form Layout').click()

		cy.contains('nb-card', 'Using the Grid')
			.find('[type="radio"]')
			.then(radioButtons => {
				cy.wrap(radioButtons)
                    .first().check({force: true})
                    .should('be.checked')
                
                cy.wrap(radioButtons)
                // the eq method is assigned a number indicating the index to find 
                // the element at within an array of elements. A negative number counts index
                // from the end of the list.
                    .eq(1).check({force: true})
                    .should('be.checked')
                    
                cy.wrap(radioButtons)
                    .first().should('not.be.checked')
                
                cy.wrap(radioButtons)
                    .eq(2).should('be.disabled')
			})
	})
})

// CHECK BOXES
describe('Testing Check Boxes on Toastr Page', () =>{
	it('Selects the checkboxes', ()=> {
		cy.visit('/')
		cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
        
        
        // CHECKS THE FIRST BOX
        cy.get('[type="checkbox"]').eq(0).check({force: true}).should('be.checked')
        
        // UNCHECKS THE FIRST BOX
        cy.get('[type="checkbox"]').eq(0).click({force: true}).should('not.be.checked')
        
        // CHECKS ALL OF THE BOXES
        cy.get('[type="checkbox"]').check({force: true}).should('be.checked')
	})
})
