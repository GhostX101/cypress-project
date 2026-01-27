 export default class ProductPage {

    addProduct1(){
        //verify product visible 
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").should('be.visible')
        //verify the add cart is visible 
        cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible').click()
    }

    addProduct2(){
        cy.get("a[id='item_0_title_link'] div[class='inventory_item_name ']").should('be.visible')
        cy.get("#add-to-cart-sauce-labs-bike-light").should('be.visible').click()
    }

    cartIcon()
    {
        cy.get("[data-test$='shopping-cart-badge']").should('be.visible').click()
    }
   
}
