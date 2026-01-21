import LoginPage from "../../page-objects/loginPage"
import logOutPage from "../../page-objects/logOutPage"

const ln = new LoginPage() /// created for all login test cases 
const Lo = new logOutPage()

describe('automation testing on Saucedemo.com', () =>{
   
it.skip('Verifying the website Url and Title', ()=>{

    cy.visit("https://www.saucedemo.com/")
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
    cy.contains('Swag Labs').should('be.visible')

})
it("login with invalid input", ()=>{
    ln.vist()
    ln.setUsername('standard_user')
    ln.setPassword('secret_s')
    ln.clickSubmit()
    cy.contains('Epic sadface: Username and password do not match any user in this service')

})
it('login with valid input', ()=>{
    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    ln.verifyproduct()

})

it('login with empty field', ()=>{
    ln.vist()
    ln.clickSubmit()
    ln.emptyInput()
    




})

it('verifying the number of list products',()=>{
    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    ln.verifylistProduct()

    
})

it('verifying if  1st and 5th products matach Item list', ()=>{

    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    cy.get('div.inventory_item:first-child').contains('Sauce Labs Backpack')
    cy.get('div.inventory_item:nth-child(5)').contains('Sauce Labs Onesie')

})

it('verifying the Cart functionality',()=>{

    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    cy.get('.shopping_cart_link').should('be.visible').click()

})

it('verify users can add to cart & view numbers of products cart & checkout',() =>{

    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    ln.Addcart$viewcart()


    

})

it('verify user can fill payment information', ()=>{
    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    ln.paymentform()
    
})
 
it('verify Payment summary information',()=>{
   ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    

})
  
it('verify the logout functionality',()=>{

    ln.vist()
    ln.setUsername('visual_user')
    ln.setPassword('secret_sauce')
    ln.clickSubmit()
    Lo.logOutPage()
    cy.wait(2000)
    
})


})




   