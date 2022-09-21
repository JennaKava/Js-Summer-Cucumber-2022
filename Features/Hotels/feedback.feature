Feature: Feedback

    @sprint1 @feedback @TC-24
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I launch Hotels.com landing page
        When I click on Sign In
        And I click “Feedback”
        And I click on Submit button
        Then I verify error message is displayed
        And I verify star boxes section is in a red dotted box

    @sprint1 @feedback @TC-25
    Scenario: Verify user can submit feedback after completing the feedback form
        Given I launch Hotels.com landing page
        When I click on Sign In
        And I click “Feedback”
        And I select any star-rating
        And I enter any comments
        And I select from dropdown How likely are you to return to Hotels
        And I select any answer for “Prior to this visit, have you ever booked on Hotels website”
        And I select either button for ”Did you accomplish what you wanted to do on this page”
        And I click on Submit button
        Then I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed


        # And I select any answer for “Prior to this visit, have you ever booked on Hotels.com?”
