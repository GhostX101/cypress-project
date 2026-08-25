export default class loginPage2{
    LoginIcon(){
                cy.get('.nav-link#login2').should('be.visible').click()
                cy.get('#logInModal').should('be.visible')
          }
    setUsername(username)
    {
        cy.get('#loginusername').should('be.visible').clear().type(username)
    
    }
    setPassword(password)
    {
        cy.get('#loginpassword').should('be.visible').clear().type(password)

    }
    submitClick(){

        cy.get("button[onclick='logIn()']").click()

             
    }



    SetExpected(){
      
        cy.contains('Welcome Ghost101')
    }

  

    EmptyField(){
        cy.get('.nav-link#login2',).click()
       //cy.wait(2000)
       cy.get("button[onclick='logIn()']").click()
       
    }
}