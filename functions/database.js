module.exports = {

	addVenue: function(venue){
		
		// TO DO: const common = require('./common');		

		// The kind for the new entity
		const kind = 'Venue';

		// The name/ID for the new entity
		 const name = 'newVenue10';
		 
		 // Import the datastore package.
		const Datastore = require('@google-cloud/datastore');

		// Other parameters
        const PROJECT_ID = 'teambuilding-e0d78';
        
        const datastore = new Datastore({
			projectId: PROJECT_ID,
		});

		// The Cloud Datastore key for the new entity
		const venueKey = datastore.key([kind]);

		venue.key = venueKey;

		// save the data to db.
		// Prepares the new entity
			datastore.save(venue)
					 .then(() => {
						console.log(`Saved ${venue.data.Description}: ${venue.data.NumberOfGuests}`);
					  })
					 .catch(err => {
						console.error('ERROR:', err);
					});	
	}
};