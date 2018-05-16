describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should assert that page content is correct', () => {
    cy.get('[data-vst="skip-to"]').should('contain', 'Skip to')
  })

  it('Checks if destination is receiving focus', () => {
    cy.get('[data-vst="skip-to"]').focus().click()
    cy.focused().should('have.id', 'main')
  })
})
