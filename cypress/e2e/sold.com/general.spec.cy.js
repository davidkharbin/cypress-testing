describe('react-todomvc', () => {

  beforeEach(() => {
    cy.visit('http://0.0.0.0:8000')
  })


  it('Main and footer sections don\'t exist upon initial page display', () => {
    cy.get('.footer').should('not.exist')
    cy.get('.main').should('not.exist')
  })
})