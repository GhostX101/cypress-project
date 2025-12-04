describe('Automation testing on demoblaze.com', () =>{

  beforeEach('login',()=>{
    cy.visit('https://www.demoblaze.com/index.html');

  })


it('verify Url and title of the Page', () =>{

          cy.url().should('eq', 'https://www.demoblaze.com/index.html')
          cy.title().should('include','STORE')
})




it('verifying the Navbar Element',()=>{

        cy.get('#navbarExample').should('be.visible')
        cy.get('#nava').should('be.visible')

        // Verify categories sidebar
        cy.get("#cat").should("be.visible");
        cy.get('#itemc').contains('Phones').should('be.visible')
        cy.get('#itemc.list-group-item').contains('Laptops').should('be.visible')
        cy.get('#itemc.list-group-item').contains('Monitors').should('be.visible')


        // Verify carousel is visible
       cy.get("#carouselExampleIndicators").should("be.visible");

       // Verify at least one product card is displayed
      cy.get("div.card.h-100").should("have.length.greaterThan", 7);

      //verify the product match its product item name
      cy.get("div.card.h-100").contains('Samsung galaxy s6').should('be.visible')
      cy.get("div.card.h-100").contains('Nokia lumia 1520').should('be.visible')
      cy.get("div.card.h-100").contains('Nexus 6').should('be.visible')
      cy.get("div.card.h-100").contains('Iphone 6 32gb').should('be.visible')
      cy.get("div.card.h-100").contains('Sony xperia z5').should('be.visible')
      cy.get("div.card.h-100").contains('HTC One M9').should('be.visible')
      

      ///verify the monitors production and laptop product match
      cy.get('#next2').click()
      cy.get("div.card.h-100:nth-child(1)").contains('MacBook air').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('Dell i7 8gb').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('2017 Dell 15.6 Inch').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('ASUS Full HD').should('be.visible')
      cy.get("div.card.h-100:nth-child(1)").contains('MacBook Pro').should('be.visible')
})      



it("should filter products when a category is clicked", () => {

        cy.get("#itemc").contains("Phones").click();

        cy.get(".card-title").each(($el) => {

       cy.wrap($el).should("be.visible");

    });

  })
  


it('verify login Functionality with valid input', () =>{

      cy.get('.nav-link#login2',).click()
       cy.wait(5000)

       cy.get('#loginusername').should('be.visible').type('Ghost101')
    
       cy.get('#loginpassword').should('be.visible').type('Ghost101')

       cy.get("button[onclick='logIn()']").should('be.visible').click()

       cy.get('#nameofuser').should('be.visible')

       cy.contains('Welcome Ghost101')



})

it('verify login Functionality with invalid input', () =>{

       cy.get('.nav-link#login2',).click()
       cy.wait(2000)
       cy.get('#loginusername').type('Ghost1011')
    
       cy.get('#loginpassword').type('Ghost101')

       cy.get("button[onclick='logIn()']").click()
       
       cy.on('window:alert', (text) =>{

       expect(text).to.contains('User does not exist.')

       })


})


it('verify login Functionality with empty field', () =>{

       cy.get('.nav-link#login2',).click()
       //cy.wait(2000)
       cy.get("button[onclick='logIn()']").click()
       cy.on('window:alert', (text) =>{

      expect(text).to.contains('Please fill out Username and Password.')

       })

      })



it('verify signup page functionality', ()=>{

    cy.get('#signin2').should('be.visible').click()

    cy.wait(2000)

    ///sigup information 
    cy.get('#sign-username').should('be.visible').type('solomon')
    cy.get('#sign-password').should('be.visible').type('solomon')
    //button
    cy.get("button[onclick='register()']").should('be.visible').click()
    
}) 

it('verify signup page functionality with existin user Login', ()=>{

    cy.get('#signin2').should('be.visible').click()

    cy.wait(2000)

    ///sigup information 
    cy.get('#sign-username').should('be.visible').type('solomon')
    cy.get('#sign-password').should('be.visible').type('solomon')
    cy.get("button[onclick='register()']").should('be.visible').click()
    ///assert window alert for user already exist 
    cy.on('window:alert',(text)=>{
      expect(text).to.include('This user already exist')
    })
    
}) 
    it('verify signup page functionality with empty field', ()=>{
    cy.get('#signin2').should('be.visible').click()
    cy.wait(2000)
    cy.get("button[onclick='register()']").should('be.visible').click()
    //assert window alert popup
    cy.on('window:alert',(text)=>{
      expect(text).to.include('Please fill out Username and Password.')
    })

})

it('verify user can signup with special characters', () => {

  // Auto-generated username & password (mixed special characters too)
  const randomUser = "User" + Date.now() + "_*&%";
  const randomPass = "Pass" + Date.now() + "_)(%$#@!";

  cy.get('#signin2').should('be.visible').click();
  cy.wait(1000);

  // Enter generated data
  cy.get('#sign-username')
    .should('be.visible')
    .type(randomUser);

  cy.get('#sign-password')
    .should('be.visible')
    .type(randomPass);

  // Submit form
  cy.get("button[onclick='register()']")
    .should('be.visible')
    .click();

  // Assert success message
  cy.on('window:alert', (text) => {
    expect(text).to.include('Sign up successful');

});
})


})

    