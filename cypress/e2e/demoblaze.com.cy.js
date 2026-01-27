import cartPage from "../../page-objects/PagesDemoblaze/cartPage"
import loginPage2 from "../../page-objects/PagesDemoblaze/loginPage2";
import NavBar from "../../page-objects/PagesDemoblaze/NavBar";
import Pageproduct from "../../page-objects/PagesDemoblaze/Pageproduct"
import signupPage from "../../page-objects/PagesDemoblaze/signupPage";
import Homepage from "../../page-objects/PagesDemoblaze/homapage";
import footer from "../../page-objects/footer";
const cp = new cartPage();
const login = new loginPage2();
const Navar = new NavBar();
const Pp = new Pageproduct();
const sp = new signupPage
const invaliduser = "wronguser"
const invalidpass = "wrongpass"
const HP = new Homepage();
const Sf = new footer();
 


beforeEach('visit',()=>{
    cy.visit('https://www.demoblaze.com/index.html');

  })
describe('Automation testing on demoblaze.com', () =>{


it('verify Url and title of the Page', () =>{

          cy.url().should('eq', 'https://www.demoblaze.com/index.html')
          cy.title().should('include','STORE')
})




it('verifying the Navbar Element| sidebar| carousel',()=>{
      Navar.navicon();
      Navar.sidebar();
      Navar.carousel();

})

it('Verify product card is displayed',()=>{

      Pp.productList();


})

// //it.only('verify the monitors production and laptop product match', ()=>{

//   Pp.verify()

})
         

it('verify login Functionality with valid input', () =>{
    cy.fixture('login.json').then((data)=>{
      login.LoginIcon();
      login.setUsername(data.username);
      login.setPassword(data.password);
      login.submitClick();

      login.SetExpected();

    })
     
        

})

it('verify login Functionality with invalid Username', () =>{
 
      cy.fixture('login.json').then((data)=>{
      login.LoginIcon();
      login.setUsername("wronguser");
      login.setPassword(data.password);
      login.submitClick();
      cy.on('window:alert', (text)=>{
        expect(text).to.contains('Wrong password.')
      })

    })
    



})

it('verify login Functionality with invalid Password', () =>{
      
      cy.fixture('login.json').then((data)=>{
      login.LoginIcon();
      login.setUsername("wronguser");
      login.setPassword(data.password);
      login.submitClick();
      cy.wait(2000)
      cy.on('window:alert', (text)=>{
        expect(text).to.contains('Wrong password.')
      })

    })
    



})


it('verify login Functionality with empty field', () =>{

        login.EmptyField();
        cy.on('window:alert', (text) =>{

        expect(text).to.contains('Please fill out Username and Password.')

       })

      })



it('verify signup page functionality', ()=>{

  sp.sigup();
    
}) 

it('verify signup page functionality with existin user Login', ()=>{

    sp.existingUSer();
      ///assert window alert for user already exist
    cy.on('window:alert',(text)=>{
    expect(text).to.include('This user already exist')
    })
    
}) 
  


it('verify signup page functionality with empty field', ()=>{
   
    
    //assert window alert popup
    cy.on('window:alert',(text)=>{
      expect(text).to.include('Please fill out Username and Password.')
    })

})


it('verify user can signup with special characters', () => {
  
   sp.specialSignup();

          // Assert success message
  cy.on('window:alert', (text) => {
    expect(text).to.include('Sign up successful.');

});
})

it('verify user cannot signup with special characters', () => {
  
   sp.specialSignup();

          // Assert success message
  cy.on('window:alert', (text) => {
    expect(text).to.include('Special character not allowed ');

});
})

it('verifying Cart functionality from homepage', ()=>{

  // verify cart is visible
  cy.get('#cartur').contains('Cart')
  .should('be.visible').click()


})

it('verify user can add to product to cart from homepage', () =>{
           HP.productHomepage();

})

it('verify user can view product in cart',()=>{
    HP.viewCart();

})
it('verifying the if price| productName match description in the cart list', ()=>{
        HP.productList
})

it('verify user can place order',()=>{
        
         cp.PlaceOrder
   

        })

it('verify user can not place order with empty cand and payament information',()=>{
          
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

  Sf.Verifyfooter();
})


