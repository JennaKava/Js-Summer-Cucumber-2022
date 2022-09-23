Feature: Travelers count

    @sprint1 @travelers @TC-28
    Scenario: Verify Child-age dropdowns are same as number of Children selected
        Given Launch Hotels main page
        When I click on Travelers
        And I select “Children” as 2
        And I verify children-age dropdown are 2
        And I verify Plus button is enabled
        And I verify Minus button is enabled
        When I select “Children” as 6
        And I verify Children-age dropdown are 6
        And I verify plus-button is disabled
        And I verify Minus button is enabled
        And I select “Children” as 5
        And I verify Children-age dropdown are 5
        And I verify Plus button is enabled
        And I verify Minus button is enabled
        And I select “Children” as 0
        And I verify Children-age dropdown is NOT displayed
        And I verify Plus button is enabled
        Then I verify minus-button is disabled