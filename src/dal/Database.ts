let Datastore = require('nedb');
let db = new Datastore({ filename: 'assets/db/Diary.json', autoload: true });
export class DB {
	
	constructor() {
		
		
		// Initialize the database
	}

	// Adds a person
	public addPerson (firstname, lastname) {
		// Create the person object
		let person = {
			'firstname' : firstname,
			'lastname': lastname,
		};
		// Save the person to the database
		db.insert(person, function(err, newDoc) {
		// Do nothing
		});
	}

	// Returns all persons
	public getPersons (fnc) {
		// Get all persons from the database
		db.find({}, function(err, docs) {
		// Execute the parameter function
		fnc(docs);
		});
		//console.log('Hello!');
	}

	// Deletes a person
	public deletePerson (id) {
		db.remove({ _id: id }, {}, function(err, numRemoved) {
		// // Do nothing
		});
	}
}
