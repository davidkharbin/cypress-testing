describe('general-tests-TodoMVC-JS-React', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8000')
  })

  it('Main and footer sections don\'t exist upon initial page display', () => {
    cy.get('.footer').should('not.exist')
    cy.get('.main').should('not.exist')
  })

  it('On page load, focus is on the todo input field'), () => { }

  it('Adding a todo clears the text input field'), () => { }

  it('Main and footer sectoins show after adding a todo'), () => { }

  it('Adds a todo'), () => { }

  it('Addds three todos'), () => { }

  it('Trims todo whitespace'), () => { }
})