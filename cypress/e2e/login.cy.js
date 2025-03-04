describe('template spec', () => {
    it('登入成功', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('input').first().type('test');
        cy.get('input').last().type('0000');
        cy.get('button').click();
        cy.get('#resultTrue').should('be.visible').and('contain', '合法使用者');
      })
     
      it('登入失敗', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('input').first().type('test');
        cy.get('input').last().type('0000');
        cy.get('button').click();
        cy.get('#resultFalse').should('be.visible').and('contain', '非法使用者');
      })
  })