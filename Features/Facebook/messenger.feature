Feature: Messenger Flow
    Scenario: Verify empty messenger login flow
        Given I am on facebook landing page
        When I click messenger link
        And I verify "Keep me sign in" check box is not selectd
        And I click sign in button
        And I verify error messege error message is displayed
        And I verify continue button is enabled
        And I verify "Stay signed in" checkbox is not selected
        And I click "Stay signed in" checkbox
        Then I veify "Stay signed in" checkbox is selected

