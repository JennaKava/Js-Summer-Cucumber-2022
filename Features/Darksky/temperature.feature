Feature: Temperature
    # Scenario: Verify feelsLikeTempValue is between lowTempValue and highTempValue
    #     Given I am on darksky landing page
    #     Then I verify "feels like temp" is above "min temp"
    #     And I veryfy "feels like temp" is below "max temp" 

    # Scenario: Verify user can get temperature based on zipcode
    #     Given I am on darksky landing page
    #     When I verify temperature for current location
    #     When I enter "97201" zipcode
    #     When I click search button
    #     Then I verify that temperature displayed is based on zipcode

    Scenario: Verify temperatures displayed with 2 hour gap from current hour
        Given I am on darksky landing page
        Then I Verify timeline has 12-data points with 2 hours gap from current hour
    
    Scenario: Verify Temperatures on  and in Today's timeline is the same
        Given I am on darksky landing page
        When I scroll to Today's timeline
        And I click on plus btn
        And I verify minimal Temperature on and in Today's view is equal
        Then I verify maxTemp on and in Today's timeline is same

       