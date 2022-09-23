Feature: Sign in

    @sprint1 @signin @TC-21
    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels website
        When I click on “Sign in” link
        And I enter invalid email address "kc27pd@kcl.com"
        And I enter invalid password "c238&69ax"
        And I click on Sign in button
        Then I verify Verification message is displayed

    @sprint1 @signin @TC-22
    Scenario: Verify error message for invalid data in SignUp form
        Given I am on hotels website
        When I click on Sign in link from homepage
        And I click on I click on Sign up page
        When I enter invalid email address with at least '@' symbol "#!@##"
        And I verify error message is showing
        When I Enter invalid first name "!@"
        And I verify error for first name is visible
        When I enter invalid last name "%^&"
        And I verify error for last name paramiters is displayed
        And I enter password "password1"
        Then I verify “Keep me signed in” checkbox is displayed and enabled
        And I verify “Continue” button is displayed but NOT enabled

    @sprint1 @signin @TC-20
    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels website
        When I click on Sign in link from homepage
        And I click on I click on Sign up page
        And I click “Terms and Conditions” link
        And I verify “Terms and Conditions” page opens in new tab
        And I click “Privacy Statement” link
        Then I verify “Privacy Statement” page opens in new tab