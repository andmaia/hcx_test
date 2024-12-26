import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the home page", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("I click on the {string} link", (linkText) => {
  cy.contains(linkText).click(); 
});

When("I search for a product {string}", (product) => {
  cy.get("#search_product").type(product); 
});

When("I click on the search button", () => {
  cy.get("#submit_search").click(); 
});

Then("I should see the product {string} in the search results", (product) => {
  cy.contains(product).should("be.visible"); 
});
