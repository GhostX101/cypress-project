export default class CartPage{

    PlaceOrder(){
        
        cy.get('.nav-link#login2',).click()

        cy.wait(2000)

        login.setUsername("Ghost101");

        cy.wait(2000)

        login.setPassword("Ghost101");

        login.submitClick();

        cy.get(".hrefch[href='prod.html?idp_=1']").click()

    }
}