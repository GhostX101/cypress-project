export default class Homepage{

    productHomepage(){
        cy.get(".hrefch[href='prod.html?idp_=1']").click()
        cy.wait(5000)
        cy.contains('Samsung galaxy s6')
        cy.get('.btn.btn-success.btn-lg').click()
        cy.on('window:alert',(text)=>{
        expect(text).to.include('Product added')
})
    
}

viewCart(){

    cy.get('#cartur').contains('Cart')
  .should('be.visible').click()
  //verify product is visible 
   cy.get("div[class='col-lg-8'] h2").should('be.visible')

cy.get("div[class='col-lg-1'] h2").should('be.visible')

}

productList(){
    
      cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)')
          .click()

          cy.wait(5000)

          cy.contains('Samsung galaxy s6')

          cy.get('.btn.btn-success.btn-lg').click()
/// Window alert
          cy.on('window:alert',(text)=>{

          expect(text).to.include('Product added')
})  
      ///click on cart
        cy.get('#cartur').click()

        cy.wait(8000)

        //verfying the price on the Cart table 
        cy.get('table>tbody>tr>td:nth-child(3)').contains('360')

      //verifying the Title of the product  
       cy.get('table>tbody>tr>td:nth-child(2)').contains('Samsung galaxy s6')

       //verify the place order button is visible 
       cy.get('.btn.btn-success').should('be.visible').click()
}
}