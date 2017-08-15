import { DiaryWindow } from '../main/DiaryWindow';
import { DefaultWindow } from '../main/DefaultWindow';
import * as eltr from 'electron';
import { ElectronAppBase, ElectronAppOptions, ElectronWindowBase } from 'electron-base';
let data = '{"user_name" : "lam", "password" : "123"}';
let windowManager = require('electron-window-manager');
let {ipcRenderer} = require('electron');



export class Login {
	
	private _$submit: JQuery;
	private _$form: JQuery;
	
	constructor() {
		this._$submit = $('#btnLogin');
		this._$form = $('#loginform');
	}

	public submitLogin() {
		this._$submit.on('click', function() {
			let user = document.forms['loginform']['username'].value;
			let pass = document.forms['loginform']['pass'].value;
			let json = JSON.parse(data);
			let username = json['user_name'];
			let password = json['password'];
			if (user == username && pass == password) {
				ipcRenderer.send('login-success');
				ipcRenderer.send('hide-login');
			}else {
				alert('Login Fail!');
			}
		});
	}

	public validateForm() {
		this._$submit.on('click', function() {
			let user = document.forms['loginform']['username'].value;
			let pass = document.forms['loginform']['pass'].value;
		if (user == '' || pass == '') {
			alert('Username and Password can not be blank!!!');
			//window.stop();
			}
		});
	}
}
