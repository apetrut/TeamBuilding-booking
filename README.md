# TeamBuilding bot
This is a chatbot built with Google Assistant for booking team building locations around the world.

## The users can do the following actions:

1. Add a new venue - implemented
2. Search for a venue - in progress
3. Authentication - not implemented

## The tools/platforms that were used are listed below:

### 1. Node.js
### 2. DialogFlow - Platform used for building bots
### 3. Firebase - Install Firebase CLI – Firebase will be used to create the deploy Google cloud functions. The commands are listed below:
    
    npm install firebase-functions@latest firebase-admin@latest –save
    
    npm install -g firebase-tools
    
    firebase login
    
    firebase init – this command installs dependencies with npm. After that we can start writing our cloud functions. The code can be found here.
    
    firebase deploy – deploy the cloud functions as fulfillment to Google Cloud. You will see a functions url available like below:

### 4. Google Cloud DataStore - NoSQl database service offered by Google

### 5. Create the intents using DialogFlow console - the intents are listed below:

1. List of intents:

![list_of_intents](https://user-images.githubusercontent.com/13006228/48904650-b6294400-ee67-11e8-93e6-fb6ec083b41c.png)

2. Create the intent 'Add venue' (part 1):
![add_venue_1](https://user-images.githubusercontent.com/13006228/48903302-cccd9c00-ee63-11e8-919a-19429e0600e3.png)

3. Create the intent 'Add venue' (part 2):
![add_venue_2](https://user-images.githubusercontent.com/13006228/48904635-ae699f80-ee67-11e8-9a4d-bb9f67e9773b.png)

4. Create the intent 'Get check-in date':
![get_checkin_date](https://user-images.githubusercontent.com/13006228/48904642-b1fd2680-ee67-11e8-921c-84bed718bb02.png)

5. Create the intent 'Get check-out date' (part 1):
![get_checkout_date_1](https://user-images.githubusercontent.com/13006228/48904646-b3c6ea00-ee67-11e8-85a2-6b3b4ee4e374.png)

6. Create the intent 'Get check-out date' (part 2):
![get_checkout_date_2](https://user-images.githubusercontent.com/13006228/48904648-b4f81700-ee67-11e8-9f40-d490d6284242.png)

