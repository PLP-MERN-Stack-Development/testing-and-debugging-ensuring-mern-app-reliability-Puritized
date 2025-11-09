describe('Authentication Flow', () => {
  it('should register and log in a new user', () => {
    cy.visit('http://localhost:3000');

    // Go to register page
    cy.get('[data-cy=nav-register]').click();
    cy.get('input[name=email]').type('e2euser@example.com');
    cy.get('input[name=password]').type('Password123!');
    cy.get('button[type=submit]').click();

    cy.contains('Registration successful');

    // Go to login page
    cy.get('[data-cy=nav-login]').click();
    cy.get('input[name=email]').type('e2euser@example.com');
    cy.get('input[name=password]').type('Password123!');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome');
  });
});