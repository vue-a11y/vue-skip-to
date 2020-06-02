describe('Skip to main content', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should assert that page content is correct', () => {
    cy.get('[data-vst="skip-to"]').should('contain', 'Skip to')
  })

  it('vue-skip-to should be a first element focused', () => {
    cy.get('body').tab()
    cy.focused().should('have.attr', 'href', '#main')
  })

  it('Checks if destination is receiving focus', () => {
    cy.get('body').tab().click()
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

  it('vue-skip-to should be a first element focused', () => {
    cy.get('body').tab()
    cy.focused().should('have.attr', 'href', '#search')
  })

  it('The input search must receive the focus', () => {
    cy.get('body').tab().click()
    cy.focused().should('have.id', 'search')
  })
})
