Feature: Sign in

    @signinerror
    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels website
        When I click on “Sign in” link
        And I enter invalid email address kc27pd@kcl.com
        And I enter invalid password c238&69ax
        And I click on Sign in button
        Then I verify Verification message is displayed