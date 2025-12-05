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

it('verify user can not signup with special characters', () => {

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
    expect(text).to.include('special character not allowed');

});

})

it('verifying Cart functionality from homepage', ()=>{

  // verify cart is visible
  cy.get('#cartur').contains('Cart')
  .should('be.visible').click()


})

it('verify user can add to product to cart from homepage', () =>{
cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)')
.click()
cy.wait(5000)
cy.contains('Samsung galaxy s6')
cy.get('.btn.btn-success.btn-lg').click()
cy.on('window:alert',(text)=>{
  expect(text).to.include('Product added')
})

})

it('verify user can view product in cart',()=>{
cy.get('#cartur').contains('Cart')
  .should('be.visible').click()
  //verify product is visible 
cy.get("div[class='col-lg-8'] h2").should('be.visible')

cy.get("div[class='col-lg-1'] h2").should('be.visible')

})
it('verifying the if price| productName match description in the cart list', ()=>{
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
})

it('verify user can place order',()=>{

          cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)')

          .click()

          cy.wait(6000)

          cy.contains('Samsung galaxy s6')

          cy.get('.btn.btn-success.btn-lg').click()
/// Window alert
          cy.on('window:alert',(text)=>{

          expect(text).to.include('Product added')
})  
      ///click on cart
        cy.get('#cartur').click()

        cy.wait(5000)

        //verfying the price on the Cart table 
        cy.get('table>tbody>tr>td:nth-child(3)').contains('360')

      //verifying the Title of the product  
       cy.get('table>tbody>tr>td:nth-child(2)').contains('Samsung galaxy s6')

       //verify the place order button is visible 
       cy.get('.btn.btn-success').should('be.visible').click()

       cy.get('#name').should('be.visible').type('Solotesting')
       
       cy.get('#country').should('be.visible').type('Nigeria')

       cy.get('#city').should('be.visible').type('Lagos')

       cy.get('#card').should('be.visible').type('123456789987')

       cy.get('#month').should('be.visible').type('August')

       cy.get('#year').should('be.visible').type('2025')
      
       cy.get("button[onclick='purchaseOrder()']").should('be.visible').click()

       //alert for successful purchase 

       cy.on('window:alert', (text)=>{
        expect(text).to.include('Thank you for your purchase!')
       })
})

it.only('verify user can not place order with empty cand and payament information',()=>{
          
        cy.get('#cartur').click()

        cy.wait(5000)

       //verify the place order button is visible 
       cy.get('.btn.btn-success').should('be.visible').click()
     
       cy.get("button[onclick='purchaseOrder()']").click()

       //alert for successful purchase 

       cy.on('window:alert', (text)=>{
        expect(text).to.include('Please fill out Name and Creditcard.')
       })
})


it('verifying the contact fuctionality',()=>{

  cy.get("a[data-target='#exampleModal']").should('be.visible')
  
  cy.contains('Contact')

})
it('verify user can contact the webpage',()=>{

  cy.get("a[data-target='#exampleModal']").click()

  cy.get('#recipient-email').should('be.visible').type('solotest@gmail.com')
  cy.get('#recipient-email').should('be.visible').type('solotest')
  cy.get('#message-text').should('be.visible').type('Thank you')
  cy.get("button[onclick='send()']").click()
  ///verifying the contact gives a successful message
  cy.on('window:alert', (text)=>{
    expect(text).to.include('Thanks for the message!!')
  })

})

it('verify the contact field with blank', ()=>{

            cy.get("a[data-target='#exampleModal']").click()
            cy.get("button[onclick='send()']").click()

      cy.on('window:alert', (text)=>{

    expect(text).should.not.include('Thanks for the message!!')

  })


})

it('verifying the About Us functionality', ()=>{

    cy.get("a[data-target='#videoModal']").should('be.visible')
    .click()
    cy.contains('About Us')
})

it('verify the play button functionality|About us', ()=>{
    cy.get("a[data-target='#videoModal']").click()

    cy.get("button[title='Play Video'] span[class='vjs-icon-placeholder']")

})

it('verify the website footer', ()=>{

  cy.get('.m-0.text-center.text-white').should('be.visible')
  cy.contains('Copyright © Product Store')

  cy.get('#footc').should('be.visible')
  cy.contains('Get in Touch').should('be.visible')
  cy.contains('We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.')
  .should('be.visible')
  cy.contains('Address: 2390 El Camino Real').should('be.visible')
  cy.contains('Phone: +440 123456').should('be.visible')
  cy.contains('Email: demo@blazemeter.com').should('be.visible')
})
})

    