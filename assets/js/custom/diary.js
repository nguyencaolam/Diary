const database = require('../src/dal/Database.ts');

window.onload = function() {

	loadDate();
  // Populate the table
  populateTable();

  // Add the add button click event
var btnClick = document.getElementById('add');
btnClick.addEventListener('click', () => {

// Retrieve the input fields
		validateInput();
		var firstname = document.getElementById('firstname');
		var lastname = document.getElementById('lastname');

		// Save the person in the database
		database.addPerson(firstname.value, lastname.value);

		// Reset the input fields
		firstname.value = '';
		//lastname.value = '';

		// Repopulate the table
		populateTable();
	
	});
}
function loadDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	var hr = today.getHours();
	var mi = today.getMinutes();
	today = mm + '/' + dd + '/' + yyyy + '-' + hr + ':' + mi;
	document.getElementById('lastname').value = today;
}

function validateInput() {
	if(firstname.value == '') {

		alert ('Please write your diary into the box ^^');
		breakFunc();
	}
}
function breakFunc () {
	break;
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
	  tableBody += '<tr>';
	  tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table
  populateTable();
}
