Feature: Add product to the cart

  Scenario: Add a product to the cart after searching
    Given I open the home page to add product to cart
    When I click on the "Products" link
    And I search for a product "Men Tshirt" in imput
    And I click on the search button
    And I add the product to the cart
    Then I should see the "Continue Shopping" button to exit the modal
