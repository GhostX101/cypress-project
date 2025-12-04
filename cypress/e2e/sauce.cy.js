describe('automation testing Saucedemo.com', () =>{

    
it('Verifying the website Url and Title', ()=>{

    cy.visit('https://www.saucedemo.com/')

    cy.url().should('eq', 'https://www.saucedemo.com/')

    cy.title().should('eq', 'Swag Labs')

    cy.contains('Swag Labs').should('be.visible')

})


it("Verify Login functionality with invalid input", ()=>{

cy.visit('https://www.saucedemo.com/')

cy.get('#user-name').type('visual_user')

cy.get('#password').type('secret_sauce1')

cy.get('#login-button').click()

///verifying using alert 

cy.on('window:alert', (text) => {

      expect(text).to.contains('Epic sadface: Username and password do not match any user in this service');
    });

cy.contains('Epic sadface: Username and password do not match any user in this service')



})

it('Verify login Functionality with valid input', ()=>{

cy.visit('https://www.saucedemo.com/')

cy.get('#user-name').type('visual_user')

cy.get('#password').type('secret_sauce')

cy.get('#login-button').click()

cy.contains('Products')

})

it('verify login Functionality with empty field', ()=>{

cy.visit('https://www.saucedemo.com/')

cy.get('#login-button').click()

cy.contains('Epic sadface: Username is required')

cy.on('window alert',(test)=>{

    expect(text).to.contain('Epic sadface: Username is required')
})




})

it('verifying the number of list products',()=>{

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('visual_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get("div.inventory_item").should('have.length','6')

    
})

it('verifying if  1st and 5th products matach Item list', ()=>{

cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('visual_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('div.inventory_item:first-child').contains('Sauce Labs Backpack')

    cy.get('div.inventory_item:nth-child(5)').contains('Sauce Labs Onesie')

})

it('verifying the Cart functionality',()=>{

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('visual_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('.shopping_cart_link').should('be.visible')

    .click()

})

it('verify users can add to cart & view numbers of products cart & checkout',() =>{

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('visual_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

/// validating user can add to cart 
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('#add-to-cart-sauce-labs-bike-light').click()

/// validating user can click and check product cart 
    cy.get('.shopping_cart_link').click()

//validating the numbers of Item in the cart

    cy.get(".cart_list>.cart_item").should('be.visible')
    .should('have.length', 2)

// validating user can checkout
cy.get('#checkout').click()
    

})

it('verify user can fill payment information', ()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('visual_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    //validating user can input information 

    cy.get('#first-name').should('be.visible').type('ghost')
    cy.get('#last-name').should('be.visible').type('ghost')
    cy.get('#postal-code').should('be.visible').type('10001')
    cy.get('#continue').should('be.visible').click()
    cy.contains('Checkout: Overview')

})
 
it('verify Payment summary information',()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('visual_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').should('be.visible').type('ghost')
    cy.get('#last-name').should('be.visible').type('ghost')
    cy.get('#postal-code').should('be.visible').type('10001')
    cy.get('#continue').should('be.visible').click()
    cy.contains('Checkout: Overview')

//validating the payment information 
    cy.get(".summary_info_label").should('be.visible')
    .should('have.length', '3')
    cy.contains('Payment Information')
    cy.contains('Shipping Information:')
    cy.contains('Price Total')

    cy.get('.summary_total_label').contains('Total: $43.18')

    cy.get('#finish').should('be.visible').click()

})
  
it('verify the logout functionality',()=>{

    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('visual_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible').click()

})
   
})