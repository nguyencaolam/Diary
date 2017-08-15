//const database = require('../dal/Database');

import { DB } from '../dal/Database';
let data = new DB();
export class Diary {
	
	private _$btnAdd: JQuery;
	
	constructor() {
		this._$btnAdd = $('#add');
	}
	
	public onLoad() {
		this.loadDate();
		this.populateTable();
	}

	public addNewDiary() {
		 this._$btnAdd.on('click', function(){
			let firstname = (<HTMLInputElement>document.getElementById('firstname'));
			let lastname = (<HTMLInputElement>document.getElementById('lastname'));
			//Save Diary in the database
			data.addPerson(firstname.value, lastname.value);
			//Reset the input fields
			firstname.value = '';
			let reload = new Diary();
			reload.populateTable();
		});
		//Repopulate the table
		
	}

	public loadDate() {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();
		let hr = today.getHours();
		let mi = today.getMinutes();
		let date = (mm + '/' + dd + '/' + yyyy + '-' + hr + ':' + mi);
		(<HTMLInputElement>document.getElementById('lastname')).value = date;
	}

	public validateInput() {
		this._$btnAdd.on('click', function() {
			if ((<HTMLInputElement>document.getElementById('firstname')).value == '') {
				alert ('Please write your diary into the box ^^');
				return false;
			}
		});
	}

	public populateTable() {
		data.getPersons(function(persons) {
			// Generate the table body
			let tableBody = '';
			for (let i = 0; i < persons.length; i++) {
			tableBody += '<tr>';
			tableBody += '  <td>' + persons[i].lastname + '</td>';
			tableBody += '  <td>' + persons[i].firstname + '</td>';
			//tableBody += '  <td><input type="button" value="Delete" HTMLInputElement.onclick=test()></td>';
			//tableBody += '  <td><input type="button" value="Delete" HTMLInputElement.onclick="delPerson(' + persons[i]._id + ')"></td>';
			tableBody += '</tr>';
			}
			// Fill the table content
			(<HTMLInputElement>document.getElementById('tablebody')).innerHTML = tableBody;
		 });
	}
	public delPerson(id) {
		//Delete the person from the database
		data.deletePerson(id);
		let reload = new Diary();
		//Repopulate the table
		reload.populateTable();
	}
	public test() {
		alert('WTF is going on!');
	}
}
