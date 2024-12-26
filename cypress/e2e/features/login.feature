Feature: Login page functionality

Scenario: User logs in with valid credentials
  Given I open the login page
  When I fill in the username and password
  Then I should be logged in
