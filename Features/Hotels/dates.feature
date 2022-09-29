Feature: Destination dates verification on hotels website

    Scenario: Verify destination and check-in/ and check-out dates are as user selected
        Given I am on hotels landing page
        When I click in destination field and type Man
        And I select Manila from autosuggestions list
        When I click in date field
        And I select check in September 25 date
        And I select check out October 2 date
        And I click done button
        When I click Search button
        Then I verify page displayes correct destination and dates

    @sprint2 @disabaled @TC-17
    Scenario: Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels landing page
        When I click in date field
        And I go to current month of September if not shown
        Then I verify for this month past dates are disabled
        And I verify back button on present month is disabled

    @sprint2 @feedback @TC-19
    Scenario: Verify Share feedback button is displayed at the end of search results
        Given I am on hotels landing page
        When I click in destination field and type bora
        And I select Bora Bora from autosuggestions list
        And I select Dec 1, 2022 as Check-in
        And I select Dec 10, 2022 as Check-out
        And I click done button
        And I click Search button
        Then I verify Tell us how we can improve our site is displayed
        And I verify button Share feedback is displayed and enabled
