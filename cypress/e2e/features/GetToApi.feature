Feature: API Test
  Scenario: Get name field from the list structure and validate status code
    Given I send a GET request to the Trello API
    Then I should receive a 200 status code
    And I should see the name field in the list structure
