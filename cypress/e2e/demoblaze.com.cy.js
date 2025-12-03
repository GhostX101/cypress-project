describe('Exploratory testing  Website', () =>{

it.skip('demoblaze login Functionality', () =>{

    ///valid login functionality 

    cy.visit('https://www.demoblaze.com/index.html');

    cy.title().should('include','STORE');

    cy.url().should('eq','https://www.demoblaze.com/index.html');
   
    cy.get('#login2').click({force:true})
    cy.wait(500)

    cy.get('#loginusername').should('be.visible').type('Ghost101')
    
    cy.get('#loginpassword').should('be.visible').type('Ghost101')

    cy.get("button[onclick='logIn()']").should('be.visible').click()

    cy.get('#nameofuser').should('be.visible')

    cy.contains('Welcome Ghost101')

})













//login fucntionality with Invalid credentials 
it.skip('Incorrect Login & alert', () =>{

    cy.visit('https://www.demoblaze.com/index.html');

     cy.get('#login2').click();
     
     cy.wait(5000)

    cy.get('#loginusername').type('Ghost1011')

    cy.get('#loginpassword').type('Ghost101')

    cy.get("button[onclick='logIn()']").click()

     cy.on('window:alert', (text) => {
  expect(text).to.equal('User does not exist.');  
    })

 })




 /////////HOMEPAGE| ADD to Cart| Checkout
it('verify home page, Add to cart and checkout', () =>{

     cy.visit('https://www.demoblaze.com/index.html');

     //cy.get('#login2').click();
     
     //cy.wait(1000)

     //cy.get('#loginusername').type('Ghost101')

     //cy.get('#loginpassword').type('Ghost101')

     //cy.get("button[onclick='logIn()']").click()

     cy.contains('a', 'Home').click()

     cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)')
     
     .click()

      cy.get('.btn.btn-success.btn-lg').click()
    
     cy.get('.btn.btn-success.btn-lg').click()

     cy.on('window:alert', (text) => {
      
     expect(text).to.equal('Product added.');  

      ////add cart
      cy.contains('a', 'Cart').click()
    




    })



})
})