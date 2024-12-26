Feature: Verify product pricing in the cart

  Scenario: Add product to cart and verify pricing
    Given I open the home page to see pricing
    When I click on the "Products" link to see pricing
    And I search for a product "Tshirt" in input see pricing
    And I click on the search button to find product see pricing
    And I add the product to the cart see pricing
    Then I should see the "Continue Shopping" button to exit the modal see pricing
    When I click on the Cart link to view cart
    Then I should see the quantity and pricing in the cart
