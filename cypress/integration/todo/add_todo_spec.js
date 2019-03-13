Cypress.Commands.add('login', () => { 
    console.log("sdasd")
    window.localStorage.setItem('accessToken', 'sdsadasdsa')
  })


describe('Add Todo ', function () {
  beforeEach(() => {
   cy.login()
  })
    it('visit the add todo screen', function () {
      let typedtext = 'adding todo using cypress'
     cy.visit('/alltodo') 
     cy.get('.add-todo-btn')
     .click() 
     cy.get('#name')
       .type(typedtext)
       .should('have.value',typedtext)
       cy.get('#order')
       .type('321')
       .should('have.value','321')
       cy.get('.signup-form-button')
       .click()   
    })
})