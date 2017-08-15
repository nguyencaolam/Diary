import { rendererUtil } from 'electron-base';
import { ElectronSampleApp } from './app';
import { DefaultWindow } from './DefaultWindow';
import { Login } from '../login/Login';
import { DiaryWindow } from './DiaryWindow';




export class DefaultScreen {
	private _$body: JQuery;
	private _$login: Login;

	constructor() {
		this._$login = new Login();
	}

	public start(): void {
		this._$login.validateForm();
		this._$login.submitLogin();
	}	
}

window['defaultScreen'] = new DefaultScreen();
window['defaultScreen'].start();
