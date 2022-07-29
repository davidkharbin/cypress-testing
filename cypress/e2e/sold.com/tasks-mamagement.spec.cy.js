describe('task-management-tests-TodoMVC-JS-React', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8000')
  })

  it('Items marked complete have "completed" class name'), () => { }

  it('When toggled, items marked complete have "completed" class name removed'), () => { }

  it('".todo-count" has text "2 items left"'), () => { }

  it('"Clear Completed button available after an item is marked completed'), () => { }

  it('After an item is marked completed, clicking the "Clear Completed" button removes the item'), () => { }

  it('Hides other controls while editing'), () => { }

  it('Highlights the currently applied filter'), () => { }
})