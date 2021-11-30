Scenario: Check Coffee
  Given I make a GET request to "http://localhost:3000/coffees/1"
  When I receive a response
  Then response should have a status 200
