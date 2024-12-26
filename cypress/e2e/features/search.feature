Feature: Search for a product on the website

  Scenario: Search for a valid product
    Given I open the home page
    When I click on the "Products" link
    And I search for a product "Men Tshirt"
    And I click on the search button
    Then I should see the product "Men Tshirt" in the search results
