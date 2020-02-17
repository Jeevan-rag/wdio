Feature: performing opeartions in espn home page

Background: 
Given I'm on the Home page


Scenario: Login with valid user credentials 
When I click on log in option
And I shall be on login page
And I login with valid user credentials 
Then I should be logged in successfully 

Scenario: Login with invalid user credentials
When I click on log in option
And I shall be on login page
And I login with invalid user credentials 
Then I should not get logged in 

Scenario: Verifying search button is present
When I click on search option 
Then I should see user input section

# Scenario:Validating user input and search results
# Given I'm on the Home page
# When I click on search option
# When I search sports,teams,players
# Then I should see related results for my input