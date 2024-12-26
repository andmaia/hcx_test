import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the home page to add product to cart", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("I click on the {string} link to see products", (linkText) => {
  cy.contains(linkText).click(); 
});

When("I search for a product {string} in imput" , (product) => {
  cy.get("#search_product").type(product);
});

When("I click on the search button to find product", () => {
  cy.get("#submit_search").click(); 
});

When("I add the product to the cart", () => {
    cy.get('a[data-product-id="2"]').first().click();

});

Then("I should see the {string} button to exit the modal", (buttonText) => {
  cy.contains(buttonText).should("be.visible");
  cy.get("button[data-dismiss='modal']").click(); 
});
