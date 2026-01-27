export default class Pageproduct{

    productList()
    {
        // Verify  product card is displayed
      cy.get("div.card.h-100").should("have.length.greaterThan", 7);

      // //verify the product match its product item name
      cy.get("div.card.h-100").contains('Samsung galaxy s6').should('be.visible')
      cy.get("div.card.h-100").contains('Nokia lumia 1520').should('be.visible')
      cy.get("div.card.h-100").contains('Nexus 6').should('be.visible')
      cy.get("div.card.h-100").contains('Iphone 6 32gb').should('be.visible')
      cy.get("div.card.h-100").contains('Sony xperia z5').should('be.visible')
      cy.get("div.card.h-100").contains('HTC One M9').should('be.visible')

          }

    verifyItemsList() 
    {
      //verify the monitors production and laptop product match
      cy.get('#next2').click()
      cy.get("div.card.h-100:nth-child(1)").contains('MacBook air').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('Dell i7 8gb').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('2017 Dell 15.6 Inch').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('ASUS Full HD').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('MacBook Pro').should('be.visible')
     }

      
        
       
    }
