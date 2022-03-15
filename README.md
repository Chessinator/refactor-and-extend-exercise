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

        GIVEN I have never entered any cars
        WHEN I check my history
        THEN it should show an empty list

        GIVEN I have submitted only one car
        WHEN I check my history
        THEN it should show me exactly that one car

        GIVEN the API is down
        WHEN I check my history
        THEN it should show me an error.

        GIVEN I am not logged in
        WHEN I check my history
        THEN I am am redirected to the login


- I want to be able to create new model and year acceptance rules through the website so that I can accept more types of vehicles.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|1|2|2|-1|-1|2|5|
    |2|1|2|1|1|1|2|8|
    
        GIVEN I have entered a valid rule
        WHEN I submit the rule
        THEN the rule should be added the current rules and applied

        GIVEN I have entered an invalid rule
        WHEN I submit the rule
        THEN it should show me an error showing which inputs are wrong

        GIVEN I have entered a rule
        AND the API is down
        WHEN I submit the rule
        THEN it should show me an error
        AND stay on the filled out form

        GIVEN I have entered a rule
        AND I am not logged in
        WHEN I submit the rule
        THEN I am am redirected to the login

        GIVEN I have been redirected...
        WHEN i succesfully log in
        THEN I am being redirect back to the rules screen

        GIVEN I haven just been re-redirected to the rules screen after logging in 
        WHEN
        THEN the previous rule values are applied

- I want to see the value of each vehicle in my inventory so I can price the vehicles on my lot.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|-1|1|2|-1|0|2|3|
    |2|-2|1|2|0|0|2|3|
    
        Rejected, BUT will be implemented later, because we need an algorithm to calculate the value.

        Currently rejected due to the high difficulty, but it will be added to our backlog and a spike will
        be performed to acquire the needed expertise on interfaces, algorithms or apis needed to
        determine a "value" for a car.

- I want to see a message that tells me why a car is not valid so that I know why my submission is being rejected.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|-2|2|2|1|1|1|5|
    |2|0|1|2|1|0|2|6|
    
        GIVEN I enter an invalid car
        WHEN I try to submit
        THEN the submission will be declined
        AND I get an error message with the exact reason

        GIVEN I enter an invalid car
        AND the API is not available
        WHEN I try to submit
        THEN I should see an error

        GIVEN I am not logged in
        WHEN I try to submit
        THEN I should be redirected to the login
        AND after logging in redirect back to the car submission screen
        AND the previous car submission values are applied
    
- I want to be able to see information about the company I am submitting the car information to so that I know it is a legitimate business.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|0|1|1|1|1|1|5|
    |2|-1|1|1|1|1|2|5|

        GIVEN I am in the process of submitting a car to a company
        WHEN I view the car submission form
        THEN I can see the companies informations

        GIVEN I am in the process of submitting a car to a company
        AND the API for the company informations did not yet return anything
        WHEN I view the car submission form
        THEN I can see a loading animation for the companies informations

        GIVEN I am in the process of submitting a car to a company
        AND the API for the company informations is not accessible
        WHEN I view the car submission form
        THEN I can see an error message instead of the companies informations

- I want to be able to send the business owner a message so that I can ask a follow up question if my car is accepted or rejected.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|0|2|1|1|1|1|6|
    |2|1|1|1|1|1|2|7|

        GIVEN I submitted a car
        WHEN it has not yet been rejected or accepted
        THEN I want to be able to send a message

- I want to be able to access the website from my phone so I can submit a vehicle while I'm away from home.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|-2|1|1|0|0|1|1|
    |2|-2|1|1|0|0|1|1|

        Rejected as of now, BUT it is in the late back log.		

        GIVEN I am on a phone
        WHEN I access the website
        THEN I want to be able to submit cars

- I want my choices of vehicle makes, models, and years to be automatically populated so that I can easily pick my vehicle.

        drop down

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|-1|2|1|0|1|1|4|
    |2|0|2|1|0|0|2|5|
    
    	GIVEN I search for cars
        WHEN I click the make element
        THEN I see a selection of all available makes the website offers

        GIVEN I search for cars
        AND I have selected a make
        WHEN I click the model element
        THEN I see a selection of all available models for that make the website offers

        GIVEN I search for cars
        AND I have selected a make and model
        WHEN I click the year element
        THEN I see a selection of all available years for that model and make the website offers

        GIVEN I search for cars
        WHEN I select a make
        THEN the model and year selections are set to thair default values

        GIVEN I search for cars
        WHEN I select a model
        THEN the year selections is set to its default value

- I want to be able to accept specific models of vehicles along with their year and make so that I can accept a wider range of vehicles.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|1|2|2|1|1|2|9|
    |2|-1|2|0|1|1|2|5|
    
        GIVEN I specify informations about a car
        WHEN I enter model informations
        THEN those are added to the vehicle as well
    
- I want to be able to know the colors of the vehicles being submitted to the form so that I can make better decisions about my inventory.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1||||||||
    |2||||||||
    
        color of all cars known for the website?
        getColors ⟹ ["RED", "GREEN", "HOTPINK", "YELLOW", "SILVER"]


        color of all cars known and submitted to just one company, visible for that company?
        getColorStats("RED") ⟹ { name: "RED", submitted: 1002, sold: 134 }


        GIVEN I have an inventory of cars
        AND vehicles have been submitted
        WHEN I view all submitted cars
        THEN I see the quantity of cars with a matching color within my inventory
               alongside each submitted cars color

        GIVEN I have an empty inventory of cars
        AND vehicles have been submitted
        WHEN I view all submitted cars
        THEN I see the quantity zero alongside each submitted cars color

    ```
    Car 1, RED (15), someModel_X
    Car 2, GREEN (7), someModel_Y
    ...
    Car N-1, RED (15), someModel_Y
    Car N, YELLOW (2), someModel_Z

    --META--
    Red: 15 in inventory
    Green: 7 in inventory
    ```

- I want to be able to remove acceptance rules so that I can stop accepting vehicles that are already in my inventory.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|-1|1|1|2|2|2|7|
    |2|-1|1|1|1|1|2|5|
    
    	GIVEN I have a list of acceptance rules
        WHEN I select an acceptance rule
        AND click on delete
        THEN the rule should disappear from that list and no longer applies

        GIVEN I have a list of acceptance rules
        WHEN I select an acceptance rule
        AND click on delete
        THEN the rule is selected anymore

        GIVEN I have a list of acceptance rules
        WHEN I select no acceptance rule
        THEN the delete button is not useable

- I want to be able to see a list of email addresses of customers who use the website so that I can send them a newsletter.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|0|1|0|1|1|2|5|
    |2|0|1|2|1|0|1|5|

        Rejected for now, because the persona needs to be identified, but will be specified by the client later.

- I want to be able to see a picture of the vehicle submitted by the customer so that I can manually reject a vehicle if it has damage.

    |user|I|N|V|E|S|T|SUM|
    |-|-|-|-|-|-|-|-|
    |1|0|1|1|0|0|1|3|
    |2|-1|2|1|1|1|2|6|

        Rejected for now, BUT added to backlog as spike.

## Helpful Resources

- [Project Board With Pre-written Stories](https://github.com/gSchool/refactor-and-extend-exercise/projects/1)
- [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/)
- [VIN Audit - Market Value API](https://www.vinaudit.com/vehicle-market-value-api)
  
