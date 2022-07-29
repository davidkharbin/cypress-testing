describe('general-tests-TodoMVC-JS-React', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8000')
  })

  it('Main and footer sections don\'t exist upon initial page display', () => {
    cy.get('.footer').should('not.exist')
    cy.get('.main').should('not.exist')
  })

  it('On page load, focus is on the todo input field', () => {
    cy.get('body').
      find('input')
      .should('have.focus')
      .and('have.class', 'new-todo')
  })

  it('Adding a todo clears the text input field', () => {
    cy.get('.new-todo')
      .type('todo item number one!{enter}')

    cy.get('input')
      .should('have.value', '')
  })

  it('Main and footer sections show after adding a todo', () => {
    cy.get('.new-todo')
      .type('adding todo item!{enter}')

    cy.get('.footer').should('exist')
    cy.get('.main').should('exist')
  })

  it('Adds a todo', () => {
    let item = 'adding todo item!'
    let li = 'ul.todo-list li'

    cy.get('.new-todo')
      .type(`${item}{enter}`)

    cy.get(`${li}`).should('have.length', 1)
  })

  it('Adds three todos', () => {
    let item = 'adding todo item!'
    let li = 'ul.todo-list li'

    cy.get('.new-todo')
      .type(`${item}{enter}`)
      .type(`${item}{enter}`)
      .type(`${item}{enter}`)

    cy.get(`${li}`).should('have.length', 3)
  })

  it('Trims todo whitespace', () => {
    let item = '  adding padded todo item !   '
    let li = 'ul.todo-list li'
    let trimmed = 'adding padded todo item !'

    cy.get('.new-todo')
      .type(`${item}{enter}`)

    cy.get(`${li} input.edit`).should('have.value', trimmed)
  })
})