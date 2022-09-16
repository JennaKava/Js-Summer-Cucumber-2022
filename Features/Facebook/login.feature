Feature: Login

    # Scenario: Verify login fields are enabled by default
    #    Given I am on facebook landing page
    #    Then I verify login username field is enabled
    #    And I verify login password field is enabled
    #    And I verify login button field is enabled
    @signup
     Scenario: Verify user get error for invalid credentials
         Given I am on facebook landing page
         When I enter "@#$%^^^" as username
         And I enter "invalidPwd" as password
         And I click login button
         Then I verify error is displayed

    #   Scenario: Verify user get error for valid credentials
    #   Given I am on facebook landing page
    #   When I enter "deepak@facebook.com" as username
    #   And I enter "validPwd@1234" as password
    #   And I click login button
    #   Then I am on facebook landing page

    #    Scenario: Verify ligin gets error on empty login form
    #   Given I am on facebook landing page
    #   When I click login button
    #   Then I verify error is displayed
        
    