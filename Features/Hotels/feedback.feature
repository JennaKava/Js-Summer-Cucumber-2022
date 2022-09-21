Feature: Feedback

    @sprint1 @feedback @TC-24
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I launch Hotels.com landing page
        When I click on Sign In
        And I click “Feedback”
        And I click on Submit button
        # Then I verify error message is displayed (Please fill in the required information highlighted below.)
        And I verify star boxes section is in a red dotted box