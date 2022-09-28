Feature: Home page features

    @sprint2 @phone @TC-30
    Scenario: Verify invalid phone number error
        Given I go to Hotels.com
        When I scroll to “Get the app“ button
        And I enter 0000000000 in Phone number
        And I click on Get the app button

    @sprint2 @language @TC-31
    Scenario: Verify language can be changed successfully
        Given I go to Hotels.com
        When I click on “English“ language
        And I select Español (Estados Unidos) in Language dropdown
        And I click on “Save“ button
        And I verify “Español” is displayed
        And I click on “Español“ language
        And I pick English (United States) Language in dropdown menu
        And I click on “Guardar“ button
        Then I verify “English” is displayed
