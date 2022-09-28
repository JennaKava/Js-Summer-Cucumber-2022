Feature: Home page features

@sprint2 @phone @TC-30
    Scenario: Verify invalid phone number error
        Given I go to Hotels.com
        When I scroll to “Get the app“ button
        And I enter 0000000000 in Phone number
        And I click on Get the app button
        Then I verify “Please enter a valid phone number.“ error is displayed