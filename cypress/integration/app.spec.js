/* eslint-disable prefer-arrow-callback */
describe('Auth UI flow test', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    const user = {
      email: 'root@example.com',
      name: 'firstname',
      surname: 'lastname',
      password: 'rootpassword',
    };
    cy.request('POST', 'http://localhost:3001/api/users/', user);
    cy.visit('/');
  });

  it('front page be can opened', function () {
    cy.contains('Repetica - A Modern Spaced Repetition System');
  });

  it('login form can be opened', function () {
    cy.contains('Log in').click();
  });

  it('user can login', function () {
    cy.contains('Log in').click();
    cy.get('input[name="email"').type('root@example.com');
    cy.get('input[name="password"').type('rootpassword');
    cy.contains('Login').click();
    cy.contains('All Done :)');
  });

  it('login fails with wrong credentials', function () {
    cy.contains('Log in').click();
    cy.get('input[name="email"').type('wrong@example.com');
    cy.get('input[name="password"').type('wrongpassword');
    cy.contains('Login').click();

    cy.contains('Incorrect Login');
  });

  it('user can register', function () {
    cy.contains('Log in').click();
    cy.contains('here').click();
    cy.get('input[name="name"').type('firstname');
    cy.get('input[name="surname"').type('surname');
    cy.get('input[name="email"').type('newuser@example.com');
    cy.get('input[name="password"').type('userpassword');
    cy.get('input[name="confirmPassword"').type('userpassword');
    cy.contains('Sign up').click();
    cy.contains('All Done :)');
  });

  it('register fails with non unique email', function () {
    cy.contains('Log in').click();
    cy.contains('here').click();
    cy.get('input[name="name"').type('firstname');
    cy.get('input[name="surname"').type('surname');
    cy.get('input[name="email"').type('root@example.com');
    cy.get('input[name="password"').type('userpassword');
    cy.get('input[name="confirmPassword"').type('userpassword');
    cy.contains('Sign up').click();
    cy.contains('Email unavailable');
  });

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ email: 'root@example.com', password: 'rootpassword' });
    });

    it('a new deck can be created', function () {
      cy.get('[alt="edit"]').click();
      cy.contains('Create Deck').click();
      cy.contains('New Deck').click();
      cy.contains('Add').click();
    });
  });
});
