import * as eltr from 'electron';
const {app, BrowserWindow, ipcMain} = require('electron');
import { ElectronAppBase, ElectronAppOptions, ElectronWindowBase } from 'electron-base';
import { DefaultWindow } from './DefaultWindow';
import { DiaryWindow } from './DiaryWindow';




const DEBUG = true;

export class ElectronSampleApp
	extends ElectronAppBase {

	constructor(appRoot: string) {
		super(appRoot, {
			globalClose: false,
			//* DEV
			packMode: false
			/* /DEV */

			/*/ PROD
			packMode: true
			/* /PROD */
		});

		if (DEBUG) {
			this.logger.info('Debug mode is ON.');
		}
	}


	/**
	 * @override
	 */
	public isDebug(): boolean {
		return DEBUG;
	}

	/**
	 * Public method must always have JSDoc comment.
	 */
	public getDefaultWindow(): DefaultWindow {
		return <DefaultWindow>this._windows.get('Default');
	}

	/**
	 * @override
	 */
	protected onStarted(): void {
		let first = this.addWindow(new DefaultWindow('Default'));
		//let second = this.addWindow(new DiaryWindow('Diary'));
			ipcMain.on('login-success', () => {
			this.addWindow(new DiaryWindow('Diary'));
		});
			ipcMain.on('hide-login', () => {
			
		});
	}
}

