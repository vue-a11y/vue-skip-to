describe('Skip to min content', () => {
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

describe('Skip to search', () => {
  beforeEach(() => {
    cy.visit('/search.html')
  })

  it('Should assert that page content is correct', () => {
    cy.get('[data-vst="skip-to"]').should('contain', 'search')
  })

  it('The input search must receive the focus', () => {
    cy.get('[data-vst="skip-to"]').focus().click()
    cy.focused().should('have.id', 'search')
  })
})
