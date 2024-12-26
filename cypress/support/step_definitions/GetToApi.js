import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I send a GET request to the Trello API", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('apiResponse');
});

Then("I should receive a 200 status code", () => {
  cy.get('@apiResponse').its('status').should('eq', 200);
});

Then("I should see the name field in the list structure", () => {
  cy.get('@apiResponse').its('body.data.list.name').should('not.be.empty');
  cy.get('@apiResponse').then((response) => {
    const listName = response.body.data.list.name;
    cy.log('List Name:', listName);
  });
});
