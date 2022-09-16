Feature: Windows

    @instagram
    Scenario: Verify Instagram launched in new window
        Given I am on facebook.com
        When I click on Instagram
        And I verify new window opened
        When I verify I am on Facebook window
        And I switch from Facebook to a newly opened window
        Then Verify Instagram opened in Scenarioa new window
    @closewnds
    Scenario: Close all windows except Facebook Pay
        Given I am on facebook.com
        When I click on Instagram
        When I click on Portal
        When I click on Oculus
        When I click on Facebook Pay
        Then I close all pages except Facebook Pay page