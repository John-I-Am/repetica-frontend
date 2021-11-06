/* eslint-disable prefer-arrow-callback */
describe('App test', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    const user = {
      email: 'root@root',
      name: 'root',
      surname: 'root',
      password: 'rootroot',
    };
    cy.request('POST', 'http://localhost:3001/api/users/', user);
    cy.visit('http://localhost:3000');
  });

  it('front page be can opened', function () {
    cy.contains('Work in Progress');
  });

  it('login form can be opened', function () {
    cy.contains('Login').click();
  });

  it('user can login', function () {
    cy.contains('Login').click();
    cy.get('#email').type('root@root');
    cy.get('#password').type('rootroot');
    cy.get('#login-button').click();
    cy.contains('No Cards');
  });

  it('login fails with wrong credentials', function () {
    cy.contains('Login').click();
    cy.get('#email').type('root@root');
    cy.get('#password').type('root');
    cy.get('#login-button').click();

    cy.get('#error')
      .contains('Incorrect Credentials');
  });

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'root@root', password: 'rootroot' });
    });

    it('a new note can be created', function () {
      cy.get('#deck-nav').click();
      cy.get('input').type('test');
      cy.get('form').submit();
      cy.contains('Now');
    });
  });
});
