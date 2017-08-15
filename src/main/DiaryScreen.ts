import { rendererUtil } from 'electron-base';
import { ElectronSampleApp } from './app';
import { DefaultWindow } from './DefaultWindow';
import { Login } from '../login/Login';
import { DiaryWindow } from './DiaryWindow';
import { Diary } from '../diary/Diary';




export class DiaryScreen {
	private _$body: JQuery;
	private _$diary: Diary;

	constructor() {
		this._$diary = new Diary();
	}

	public start(): void {
		this._$diary.onLoad();
		this._$diary.validateInput();
		this._$diary.addNewDiary();
	}	
}

window['diaryScreen'] = new DiaryScreen();
window['diaryScreen'].start();
