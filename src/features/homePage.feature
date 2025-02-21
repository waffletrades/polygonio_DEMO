@Demo
Feature:  Verify navigation and interaction with the polygon homepage 

    @Demo
    Scenario: Navigate through main menu items and verify page buttons and redirections
        Given I navigate to the polygon home page
        When I click on the "Products" menu item
        And I click on the "Stocks" dropdown item under Products
        Then I click on the polygon icon to navigate back to the home page
        When I click on the "Products" menu item
        And I click on the "Options" dropdown item under Products
        Then I click on the polygon icon to navigate back to the home page
        When I click on the "Products" menu item
        And I click on the "Indices" dropdown item under Products
        Then I click on the polygon icon to navigate back to the home page
        And I click on the Sign Up button
        Then I navigate to the polygon home page
        And I click on the Log In button
        Then I navigate to the polygon home page
        And I click on the Create API Key button
        Then I navigate to the polygon home page
        And I navigate to the polygon home page
        Then I navigate to the polygon home page
        Then I verify the Facebook icon navigation




