export default class logOutPage {
   logOutPage(){
    cy.wait(3000)
    cy.get('#react-burger-menu-btn').should('be.visible').click()
   }
}