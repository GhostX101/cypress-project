// cypress/page-objects/loginPage.js

export default class LoginPage {
   vist(){
      cy.visit("https://www.saucedemo.com/")
   }
  setUsername(username) {
    cy.get('#user-name').type(username)
  }

  setPassword(password) {
    cy.get('#password').type(password)
  }

  clickSubmit() {
    cy.get('#login-button').click()
  }
  
  verifyproduct(verifyproduct){
   cy.get('.title').should('have.text', 'Products')
  }
  verifylistProduct()
  {
   cy.get("div.inventory_item").should('have.length','6')
  }

  emptyInput(){
   cy.get('.error-message-container.error').should('have.text','Epic sadface: Username is required')
  }
  }
