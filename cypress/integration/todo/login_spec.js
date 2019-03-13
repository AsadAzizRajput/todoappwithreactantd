describe('Add Todo ', function () {
    it('visit the login screen', function () {
     cy.visit('/') 
     cy.get('#email').type('a@b.com')
     .should('have.value','a@b.com').click()
     cy.get('#password').type('abcd')
     .should('have.value','abcd').click()
     cy.get('.loginbtn')
     .click()    
    })
})