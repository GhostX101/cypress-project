export default class loginPage2{
    LoginIcon(){
        cy.get('.nav-link#login2',).click()
          }
    setUsername(username)
    {
        cy.get('#loginusername').type(username).should('be.visible')
    
    }
    setPassword(password)
    {
        cy.get('#loginpassword').type(password).should('be.visible')

    }
    submitClick(){
        cy.get("button[onclick='logIn()']").click()
        cy.wait(2000)
        
    }



    SetExpected(){
        cy.get('#nameofuser').should('be.visible')
        cy.contains('Welcome Ghost101')
    }

  

    EmptyField(){
        cy.get('.nav-link#login2',).click()
       //cy.wait(2000)
       cy.get("button[onclick='logIn()']").click()
       
    }
}