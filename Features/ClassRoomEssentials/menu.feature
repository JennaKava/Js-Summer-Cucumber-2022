Feature: menu

@menu
Scenario: Verify Church Chairs menu has 7 options
    Given I launch classroomessentialsonline.com website
    When I move mouse on Church Chairs menu
    Then I verify 7 option is displayed