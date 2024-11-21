Feature: Payment With USSD
As a user i should be able to make payment with USSD successfully

    Scenario: A user i should be able to make payment with USSD successfully

        Given I launch the url
        When I input amount
        And I click on ussd button
        And I click on i select bank from dropdown list
        And I click on copy ussd button
        Then I click on i have paid button for ussd




        