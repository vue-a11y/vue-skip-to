describe('Skip link list', () => {
  beforeEach(() => {
    cy.visit('/skip-to-list.html')
  })

  it('Should render list label', () => {
    cy
      .get('[data-vst="skip-to-list"]')
      .should('contain', 'Skip links')
  })

  it('Should traverse links on tab', () => {
    cy.get('body').tab().tab()
    cy.focused().should('contain', 'Footer')
  })

  it('Should focus relevant element on link press', () => {
    cy.get('body').tab().click()
    cy.focused().should('have.id', 'main')
  })
})
