"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Datastore = require('nedb');
let db = new Datastore({ filename: 'assets/db/Diary.json', autoload: true });
class DB {
    constructor() {
        // Initialize the database
    }
    // Adds a person
    addPerson(firstname, lastname) {
        // Create the person object
        let person = {
            'firstname': firstname,
            'lastname': lastname,
        };
        // Save the person to the database
        db.insert(person, function (err, newDoc) {
            // Do nothing
        });
    }
    // Returns all persons
    getPersons(fnc) {
        // Get all persons from the database
        db.find({}, function (err, docs) {
            // Execute the parameter function
            fnc(docs);
        });
        //console.log('Hello!');
    }
    // Deletes a person
    deletePerson(id) {
        db.remove({ _id: id }, {}, function (err, numRemoved) {
            // // Do nothing
        });
    }
}
exports.DB = DB;

//# sourceMappingURL=Database.js.map
