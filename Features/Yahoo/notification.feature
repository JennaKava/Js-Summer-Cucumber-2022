Feature: notification

@notification
Scenario: Verify notifications can be seen by mouse hover on bell icon
    Given I Launch yahoo landing page
    When I move mouse on bell icon
    Then I verify the notifications is displayed


