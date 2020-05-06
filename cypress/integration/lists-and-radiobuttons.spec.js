///<reference types="cypress"/>

describe('Testing the theme dropdown on the index page', ()=>{
    it('Selects the correct theme', ()=>{
        cy.visit('/') // VISITS THE INDEX PAGE OF OUR ROOT URL

        cy.get('nav nb-select').click() // FINDS THE nb-select TAG INSIDE OF THE nav TAG AND OPENS IT
        cy.get('.options-list').contains('Dark').click(); // FIND Dark INSIDE OF THE DROP DOWN LIST AND CLICKS IT
        cy.get('nav nb-select').should('contain', 'Dark')
        // THIS ASSERTS THAT THE BACKGROUND COLOR FOR THE DARK THEME IS THE CORRECT COLOR.
        // Cypress works with rgb values so any hex code will need to be converted to rgb.
        // It's best to use rgb values in style sheets to avoid converting the colors.
        // For this specific example the hex in stye style sheet was #222b45 and was converted with a simple Google search
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
    })
})

describe('Tests that the correct theme is displaying', ()=>{
	it('Selects an item from the theme drop down and changes the theme of the page',()=> {
		cy.get('nav nb-select').then( dropdown=>{
			cy.wrap(dropdown).click()
            // THE EACH FUNCTION IS A FOR EACH LOOP.
            
			cy.get('.options-list nb-option').each( (listItem, index) => {
                // TRIM REMOVES LEADING AND TRAILING SPACES
				const itemText = listItem.text().trim() 
                
                // COLORS JSON OBJECT THAT WILL BE PASSED TO THE TESTS BASED ON
                // WHAT THEME THEY HAVE SELECTED
				const colors = {
					"Light":"rgb(255, 255, 255)",
					"Dark":"rgb(34, 43, 69)",
					"Cosmic":"rgb(50, 50, 89)",
					"Corporate":"rgb(255, 255, 255)"
				}

				cy.wrap(listItem).click()

				// SINCE WERE STILL INSIDE THE DROP DOWN THEN STATEMENT WE CAN
				// CALL DROPDOWN AND RUN OUR ASSERTIONS WITH VARIABLES.
				cy.wrap(dropdown).should('contain', itemText)
				cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                
                // SINCE WE'RE LOOPING OVER THE LIST ITEMS IT'S NOT NECCESARRY TO
                // INCLUDE THE CLICK ON THE LAST ITEM TESTED. WE CAN DO THIS WITH
                // A SIMPLE IF STATEMENT
                if(index < 3){
                    cy.wrap(dropdown).click()
                }
			})
		})
	})
})
