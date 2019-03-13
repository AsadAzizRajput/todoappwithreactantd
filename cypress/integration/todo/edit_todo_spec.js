//
Cypress.Commands.add('login', () => { 
    console.log("sdasd")
    window.localStorage.setItem('accessToken', 'sdsadasdsa')
  })
describe('Edit Todo ', function () {
    beforeEach(() => {
     cy.login()
    })
      it('visit the edit todo screen', function () {
        let typedtext = 'adding todo using cypress updated'
       cy.visit('/alltodo')
       cy.get('.ant-list-item a').first().click()
       cy.get('#name')
         .type(typedtext)
        // .should('have.value',typedtext)
         cy.get('#order')
         .type('321')
         //.should('have.value','321')
         cy.get('.signup-form-button')
         .click()   
      })
  })