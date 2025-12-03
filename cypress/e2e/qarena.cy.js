describe('Automation testing with Qarena', () =>{


it('login functionality', () =>{


    cy.visit('https://qarena.vercel.app/');

    cy.title().should('include','client');

    cy.url().should('include', 'qarena.vercel.app');

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(5) > div:nth-child(1) > div:nth-child(1)')
    .click()
    
    cy.get("div[class='rounded-lg text-card-foreground shadow-sm bg-purple-50 border-purple-200 border-2 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full'] div[class='flex items-center gap-4 mb-4']")
    .click()

    cy.get("div[class='grid grid-cols-3 gap-2'] button:nth-child(1)").click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)').click()

    cy.get('button:nth-child(3)').should('be.visible').click()

    cy.get('button:nth-child(4)').should('be.visible').click()

    cy.get("button[data-cy='atm-key-Enter']").should('be.visible').click()

    cy.contains('Select Transaction').should('be.visible')

    cy.get("button[data-cy='atm-menu-balance']").should('be.visible').click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)').click()

        ///Deposit functionality     
     cy.get("button[data-cy='atm-menu-deposit']").click()

     cy.get('button:nth-child(4)').should('be.visible').click()

     cy.get("div[class='grid grid-cols-3 gap-2'] button:nth-child(1)").click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)').click()

    cy.get('button:nth-child(3)').should('be.visible').click()

    cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)")
    .click()

    
})


})