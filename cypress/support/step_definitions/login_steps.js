import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('https://automationexercise.com/login');
});

When('I fill in the username and password', () => {
  cy.get('input[data-qa="login-email"]').type('teste2024@teste.com.br');
  cy.get('input[data-qa="login-password"]').type('teste');
  cy.get('button[data-qa="login-button"]').click();
});

Then('I should be logged in', () => {
  cy.contains('Logged in as').should('be.visible');
});
