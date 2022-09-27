Feature: Destination dates verification on hotels website
    Scenario: Verify destination and check-in/ and check-out dates are as user selected
        Given I am on hotels landing page
        When I click in destination field and type Man
        And I select Manila from autosuggestions list
        When I click in date field
        And I select check in September 25 date
        And I select check out October 2 date
        And I click button done
        When I click button search
        Then I verify page displayes correct destination and dates

    @sprint2 @disabaled @TC-17
    Scenario: Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels landing page
        When I click in date field
        And I go to current month of September if not shown
        Then I verify for this month past dates are disabled
        And I verify back button on present month is disabled
