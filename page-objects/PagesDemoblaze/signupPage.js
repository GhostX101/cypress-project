export default class signupPage{

    sigup(){
        cy.get('#signin2').should('be.visible').click()

         cy.wait(2000)

    ///sigup information 
        cy.get('#sign-username').should('be.visible').type('solomon')
        cy.get('#sign-password').should('be.visible').type('solomon')
        //button
        cy.get("button[onclick='register()']").should('be.visible').click()
    

    }
    
    existingUSer(){
       
        cy.get('#signin2').should('be.visible').click()

        cy.wait(2000)

    ///sigup information 
    cy.get('#sign-username').should('be.visible').type('solomon')
    cy.get('#sign-password').should('be.visible').type('solomon')
    cy.get("button[onclick='register()']").should('be.visible').click()
   
    

    }

    emptyfield(){

    cy.get('#signin2').should('be.visible').click()
    cy.wait(2000)
    cy.get("button[onclick='register()']").should('be.visible').click()
    }

  specialSignup() {
    const username = `User_${Date.now()}_*&%`;
    const password = `Pass_${Date.now()}_)(%$#@!`;

    cy.get('#signin2').should('be.visible').click();

    cy.get('#sign-username')
      .should('be.visible')
      .clear()
      .type(username);

    cy.get('#sign-password')
      .should('be.visible')
      .clear()
      .type(password);

    cy.get("button[onclick='register()']")
      .should('be.visible')
      .click();
  }



}

