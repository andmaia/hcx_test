import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the home page to see pricing", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("I click on the {string} link to see pricing", (linkText) => {
  cy.contains(linkText).click(); 
});

When("I search for a product {string} in input see pricing" , (product) => {
  cy.get("#search_product").type(product);
});

When("I click on the search button to find product see pricing", () => {
  cy.get("#submit_search").click(); 
});

When("I add the product to the cart see pricing", () => {
  cy.get('a[data-product-id="2"]').first().click(); 
});

Then("I should see the {string} button to exit the modal see pricing", (buttonText) => {
  cy.contains(buttonText).should("be.visible");
  cy.get("button[data-dismiss='modal']").click(); 
});

When("I click on the Cart link to view cart", () => {
  // Verificando a visibilidade de cada elemento antes de clicar
  cy.get('a[href="/view_cart"]').should('be.visible').first().click();
});

Then("I should see the quantity and pricing in the cart", () => {
  cy.get('#product-2').within(() => {
    cy.get('td.cart_quantity button.disabled').should('contain', '1');
    cy.get('td.cart_price p').should('contain', 'Rs. 400');
    cy.get('td.cart_total p.cart_total_price').should('contain', 'Rs. 400');
  });
});
