Feature: Temperature
    Scenario: Verify feelsLikeTempValue is between lowTempValue and highTempValue
        Given I am on darksky landing page
        Then I verify "feels like temp" is above "min temp"
        And I veryfy "feels like temp" is below "max temp" 

    Scenario: Verify user can get temperature based on zipcode
        Given I am on darksky landing page
        When I verify temperature for current location
        When I enter "97201" zipcode
        When I click search button
        Then I verify that temperature displayed is based on zipcode

       