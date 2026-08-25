export default class logOutPage {
   logOutPage(){
    cy.get('#react-burger-menu-btn').should('be.visible').click()
      cy.get('#logout_sidebar_link').should('be.visible').click()
      cy.get('#login-button').should('be.visible')
   }
}