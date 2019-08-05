/// <reference types="Cypress" />

describe('My First Test', function () {
  it('Visits the star wars app', function () {
    cy.visit('localhost:3000')

    cy.contains('Home Planet')

    cy.contains('Next').click()

    cy.contains('Chewbacca')

    cy.contains('Prev').click()

    cy.contains('Luke')


  })
})