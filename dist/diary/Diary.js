"use strict";
//const database = require('../dal/Database');
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../dal/Database");
let data = new Database_1.DB();
class Diary {
    constructor() {
        this._$btnAdd = $('#add');
    }
    onLoad() {
        this.loadDate();
        this.populateTable();
    }
    addNewDiary() {
        this._$btnAdd.on('click', function () {
            let firstname = document.getElementById('firstname');
            let lastname = document.getElementById('lastname');
            //Save Diary in the database
            data.addPerson(firstname.value, lastname.value);
            //Reset the input fields
            firstname.value = '';
            let reload = new Diary();
            reload.populateTable();
        });
        //Repopulate the table
    }
    loadDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let hr = today.getHours();
        let mi = today.getMinutes();
        let date = (mm + '/' + dd + '/' + yyyy + '-' + hr + ':' + mi);
        document.getElementById('lastname').value = date;
    }
    validateInput() {
        this._$btnAdd.on('click', function () {
            if (document.getElementById('firstname').value == '') {
                alert('Please write your diary into the box ^^');
                return false;
            }
        });
    }
    populateTable() {
        data.getPersons(function (persons) {
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
            document.getElementById('tablebody').innerHTML = tableBody;
        });
    }
    delPerson(id) {
        //Delete the person from the database
        data.deletePerson(id);
        let reload = new Diary();
        //Repopulate the table
        reload.populateTable();
    }
    test() {
        alert('WTF is going on!');
    }
}
exports.Diary = Diary;

//# sourceMappingURL=Diary.js.map
