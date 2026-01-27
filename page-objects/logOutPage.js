export default class logOutPage {
   logOutPage(){
    cy.get('#react-burger-menu-btn').should('be.visible').click()
   }
}