///<reference types="cypress"/>

// EDIT THE VALUES ON THE TABLE
describe('Tests Web Tables', ()=> {
    it('Edits the Larry Bird age field and changes the age value', ()=> {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder=Age]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq('6').should('contain', '25')
        })
    })
})

// ADDS A NEW RECORD TO THE TABLE
describe('Adds New Record', ()=> {
    it('Creates a new record on the table', ()=>{
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('thead').find('.nb-plus').click()
        
        cy.get('thead').find('tr').eq(2).then( newRecord => {
            cy.wrap(newRecord).find('[placeholder="First Name"]').clear().type('FirstName')
            cy.wrap(newRecord).find('[placeholder="Last Name"]').clear().type('LastName')
            cy.wrap(newRecord).find('[placeholder="Username"]').clear().type('MyUserName')
            cy.wrap(newRecord).find('[placeholder="E-mail"]').clear().type('email@email.com')
            cy.wrap(newRecord).find('[placeholder="Age"]').clear().type('32')
        })

        cy.get('.nb-checkmark').click()
        
        cy.get('tbody tr').first().find('td').then( assertion => {
            cy.wrap(assertion).eq('2').should('contain', 'FirstName')
            cy.wrap(assertion).eq('3').should('contain', 'LastName')
            cy.wrap(assertion).eq('4').should('contain', 'MyUserName')
            cy.wrap(assertion).eq('5').should('contain', 'email@email.com')
            cy.wrap(assertion).eq('6').should('contain', '32')
        })
    })
})

// DYNAMICALLY TESTS THE TABLE SEARCH FUNCTION
describe('Test the Table Search', () => {
    it('Should return the correct Search Data', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        const age = [20, 30, 40, 200]
        
        cy.wrap(age).each(age => {
            cy.get('thead').find('[placeholder="Age"]').clear().type(age)
            cy.wait(1000)
            cy.get('tbody tr').each(tableRow => {
            if(age == 200){
                cy.wrap(tableRow).should('contain', 'No data found')
            } else {
                cy.wrap(tableRow).find('td').eq('6').should('contain', age)
            }
            })
        })
       
    })
})
