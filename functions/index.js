'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const app = require('actions-on-google').dialogflow();

var dataLayer = require("./database");
var validation = require("./validation");

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// The parameters that are parsed from the Search Venue intent
const DESTINATION_ARGUMENT = 'destination';
const NUMBER_OF_GUESTS_ARGUMENT = 'guests';
const NUMBER_OF_ROOMS_ARGUMENT = 'rooms';
const CHECK_IN_ARGUMENT = 'check-in';
const CHECK_OUT_ARGUMENT = 'check-out';
const DESCRIPTION_ARGUMENT = "description";

// Other parameters
const PROJECT_ID = 'teambuilding-e0d78';

// Fallback intent when the user doesn't provide a valid check-out date.
app.intent('GetCheckoutDate', conv => {

	// validation
	const checkInDateString = conv.contexts.get('checkin_date').parameters[CHECK_IN_ARGUMENT];
	const checkOutDateString = conv.parameters[CHECK_OUT_ARGUMENT];

	if (!validation.isCheckOutDateValid(checkInDateString, checkOutDateString))
	{		
		// set the output context the same as the input
		conv.contexts.set('checkin_date',1);
		conv.ask('Please pick a check-out date that is later than the check-in date!');				
		console.error('The check-out date must be after the check-in date!');
	}
	else
	{
		const venue = {
			key: null,
			data: {
				Name: conv.contexts.get('location_set').parameters[DESTINATION_ARGUMENT],
				Description: conv.contexts.get('location_set').parameters[DESCRIPTION_ARGUMENT],
				Location: conv.contexts.get('location_set').parameters[DESTINATION_ARGUMENT],
				NumberOfRooms: conv.contexts.get('location_set').parameters[NUMBER_OF_ROOMS_ARGUMENT],
				NumberOfGuests: conv.contexts.get('location_set').parameters[NUMBER_OF_GUESTS_ARGUMENT],
				CheckInDate: checkInDateString,
				CheckOutDate: checkOutDateString
			},
			};

		// saves the data to DB (datastore, mongodb, etc.)		
		dataLayer.addVenue(venue);		
		console.info("The venue has been added successfully.");
	}
});

app.intent('SearchVenue', conv => {
						
			console.log('The project id is: ' + PROJECT_ID);

			// Creates a client
			const datastore = new Datastore({
				projectId: PROJECT_ID,
			});
			
			// create a query
			const query = datastore
						  .createQuery('Venue');
						  //.filter('name', '=', 'Baisoara');
						  
			console.log('Venues: ');
			
			// run query
			datastore.runQuery(query)
					 .then(results => {
				
						// Venues were found.
						 const venues = results[0];
						 //conv.ask('Venues: ');
						 console.log('Venues results: ');
						 
						 venues.forEach(venue => { 
							console.log(venue.Location);
						 });
					})
					.catch(err => {
						console.error('ERROR: ', err);
					});
	
			conv.close('Thanks for talking to me! Alright, you asked to search for: ' 
			+ conv.parameters[DESTINATION_ARGUMENT] + ' ' 
			+ conv.parameters[NUMBER_OF_GUESTS_ARGUMENT] + ' ' 
			+ conv.parameters[NUMBER_OF_ROOMS_ARGUMENT] + ' ' 
			+ conv.parameters[CHECK_IN_ARGUMENT] + ' ' 
			+ conv.parameters[CHECK_OUT_ARGUMENT]); // explicit mic close
		});

exports.TeamBuildingApp = functions.https.onRequest(app);