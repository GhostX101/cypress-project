export default class NavBar{
    navicon(){
        cy.get('#navbarExample').should('be.visible')
        cy.get('#nava').should('be.visible')
        
        cy.get('#navbarExample').should('be.visible')
        cy.get('#nava').should('be.visible')
      
        
}
 sidebar() {
    // Verify categories sidebar
        cy.get('#itemc').contains('Phones').should('be.visible')
        cy.get('#itemc.list-group-item').contains('Laptops').should('be.visible')
        cy.get('#itemc.list-group-item').contains('Monitors').should('be.visible')

         }

    carousel(){
        // Verify carousel is visible
       cy.get("#carouselExampleIndicators").should("be.visible");
   
    }

}