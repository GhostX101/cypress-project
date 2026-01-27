export default class Footer{

    Verifyfooter(){

cy.get('.m-0.text-center.text-white').should('be.visible')
  cy.contains('Copyright © Product Store')

  cy.get('#footc').should('be.visible')
  cy.contains('Get in Touch').should('be.visible')
  cy.contains('We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.')
  .should('be.visible')
  cy.contains('Address: 2390 El Camino Real').should('be.visible')
  cy.contains('Phone: +440 123456').should('be.visible')
  cy.contains('Email: demo@blazemeter.com').should('be.visible')
    }
}