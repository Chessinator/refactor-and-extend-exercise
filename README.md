After the starter project is posted, you and your team can begin refactoring the existing application and adding the functionality listed in the remaining user stories. Also you and your team may use the architectural guidelines to help you decide how to organize the application.

## Architectural Guidelines (Optional)

Use the following optional architectural guidelines while refactoring and implementing user stories:

- Use a centralized git repository (GitHub, GitLab, BitBucket, etc...)
- Use a CI/CD pipeline for your builds
- Use a RESTful API for business rules and storing to a persistence layer
- Organize your application into appropriate domains and slice it into micro services
- Use message queues, events, and services buses to pass information between services
- Run your services in Docker containers
- Deploy the master branch of your application to a cloud host

## User Stories

- I want to see a full inventory of vehicles the company owns so I can see if my car is already listed.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|1|2|-1|1|2|2|7|
    |2|1|2|0|2|2|2|9|

    Rejected, as it allows access to the wrong content of another user group.
    But it gets fulfilled with the next user story and correct visible scope.

- I want to see a history of the cars I have submitted to the form so that I don't submit a vehicle a second time.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|1|2|2|1|2|2|10|
    |2|1|1|1|1|2|2|8|

    > GIVEN I have never entered any cars
    > 
    > WHEN I check my history
    > 
    > THEN it should show an empty list

    > GIVEN I have submitted only one car
    > 
    > WHEN I check my history
    > 
    > THEN it should show me exactly that one car

    > GIVEN the API is down
    > 
    > WHEN I check my history
    > 
    > THEN it should show me an error.

    > GIVEN I am not logged in
    > 
    > WHEN I check my history
    > 
    > THEN I am am redirected to the login


- I want to be able to create new model and year acceptance rules through the website so that I can accept more types of vehicles.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|1|2|2|-1|-1|2|5|
    |2|1|2|1|1|1|2|8|
    
    > GIVEN I have entered a valid rule
    > 
    > WHEN I submit the rule
    > 
    > THEN the rule should be added the current rules and applied

    > GIVEN I have entered an invalid rule
    > 
    > WHEN I submit the rule
    > 
    > THEN it should show me an error showing which inputs are wrong

    > GIVEN I have entered a rule
    > 
    > AND the API is down
    > 
    > WHEN I submit the rule
    > 
    > THEN it should show me an error
    > 
    > AND stay on the filled out form

    > GIVEN I have entered a rule
    > 
    > AND I am not logged in
    > 
    > WHEN I submit the rule
    > 
    > THEN I am am redirected to the login

    > GIVEN I have been redirected...
    > 
    > WHEN i succesfully log in
    > 
    > THEN I am being redirect back to the rules screen

    > GIVEN I haven just been re-redirected to the rules screen after logging in
    > 
    > WHEN
    > 
    > THEN the previous rule values are applied

- I want to see the value of each vehicle in my inventory so I can price the vehicles on my lot.
- I want to see a message that tells me why a car is not valid so that I know why my submission is being rejected.
- I want to be able to see information about the company I am submitting the car information to so that I know it is a legitimate business.
- I want to be able to send the business owner a message so that I can ask a follow up question if my car is accepted or rejected.
- I want to be able to access the website from my phone so I can submit a vehicle while I'm away from home.
- I want my choices of vehicle makes, models, and years to be automatically populated so that I can easily pick my vehicle.
- I want to be able to accept specific models of vehicles along with their year and make so that I can accept a wider range of vehicles.
- I want to be able to know the colors of the vehicles being submitted to the form so that I can make better decisions about my inventory.
- I want to be able to remove acceptance rules so that I can stop accepting vehicles that are already in my inventory.
- I want to be able to see a list of email addresses of customers who use the website so that I can send them a newsletter.
- I want to be able to see a picture of the vehicle submitted by the customer so that I can manually reject a vehicle if it has damage.

## Helpful Resources

- [Project Board With Pre-written Stories](https://github.com/gSchool/refactor-and-extend-exercise/projects/1)
- [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/)
- [VIN Audit - Market Value API](https://www.vinaudit.com/vehicle-market-value-api)
  
