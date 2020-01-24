describe('skip-link list', () => {
  beforeEach(() => {
    cy.visit('/skip-to-list.html')
  })

  it('Should render list label', () => {
    cy
      .get('[data-vst="skip-to-list"]')
      .should('contain', 'Skip links')
  })
})
