export default class checkoutPage{

checkIcon()
{
    cy.get('#checkout').should('be.visible').click()
    cy.wait(3000)
}
    setfirstname(firstname)
    {
        cy.get('#first-name').type(firstname)
    }
    setLastname(lastname){
        cy.get('#last-name').type('lastname')

    }
    setPostcode(postalcode)
    {
        cy.get('#postal-code').type('postalcode')
    }

    setContiune()
    {
        cy.get('#continue').click()
    }

    expectSummary()
    {
        cy.get('.title').should('have.text','Checkout: Overview')
    }

    expectPayInfo()
    {
        cy.get("div[data-test='payment-info-label]").should('be.visible')

    }

    Finishbtn(){
        cy.get('#finish').click()
    }
}