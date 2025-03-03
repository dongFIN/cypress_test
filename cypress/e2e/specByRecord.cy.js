describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get(':nth-child(1) > input').clear('t');
    cy.get(':nth-child(1) > input').type('test');
    cy.get(':nth-child(2) > input').clear('1');
    cy.get(':nth-child(2) > input').type('1234');
    cy.get('button').click();
    cy.get('.hint').should('have.text', '登入成功');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-test="account"]').clear('a');
    cy.get('[data-test="account"]').type('apple');
    cy.get(':nth-child(2) > input').clear();
    cy.get(':nth-child(2) > input').type('0000');
    cy.get('button').click();
    cy.get('.hint').should('have.text', '登入成功');
    /* ==== End Cypress Studio ==== */
  });
})