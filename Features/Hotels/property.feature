Feature: List property link
    @sprint2 @property @TC-29
    Scenario: Verify "List your Property" flow
        Given I go to hotels home page site
        When I click on “List your property”
        And I verify What would you like to list is displayed
        And I verify Lodging and Private residence options are displayed
        And I click on “Private residence“
        And I verify ”Step 1 of 3” is displayed
        And I verify “See how much you could earn!” is displayed
        And I enter ”4“ as bedroom quantity clicking plus 4 times
        And I enter “2.5“ as bathroom clicking plus 3 times
        And I click on “Next” button
        And I verify ”Step 2 of 3” is displayed
        And I verify Where is your property located is displayed
        And I enter 121 in address
        When I select 1211 6th Avenue, New York, NY, USA from auto-suggestion
        Then I verify graph is displayed
        And I verify pin in graph is displayed
        And I verify “Pin location may not be exact.“ is displayed below graph
