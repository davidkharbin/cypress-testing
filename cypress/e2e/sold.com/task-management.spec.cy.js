const setupMethod = () => {
  for (let i = 1; i <= 5; i++) {
    cy.get('.new-todo').type(`Add item #${i}!{enter}`)
  }
}

const markComplete = () => {

}

describe('task-management-tests-TodoMVC-JS-React', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8000')
    setupMethod()
  })

  it('Items marked complete have "completed" class name', () => {
    cy.get('ul.todo-list>li').each(($el) => {
      $el.addClass('completed')
    })

    cy.get('ul.todo-list>li').then((item) => {
      // expect(item.className).to.equal('completed')
    })
  })

  it('When toggled, items marked complete have "completed" class name removed', () => { })

  it('".todo-count" has text "2 items left"', () => { })

  it('"Clear Completed button available after an item is marked completed', () => { })

  it('After an item is marked completed, clicking the "Clear Completed" button removes the item', () => { })

  it('Hides other controls while editing', () => { })

  it('Highlights the currently applied filter', () => { })
})