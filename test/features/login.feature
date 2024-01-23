Feature: The Guinea Pig Website Test

  Scenario Outline: <TestID> : As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples: 
      | username | password             | message                        | TestID |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! | abc123 |
      | foobar   | barfoo               | Your username is invalid!      | qwe123 |
