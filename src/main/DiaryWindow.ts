import { ElectronWindowBase } from 'electron-base';


export class DiaryWindow
	extends ElectronWindowBase {
		
	constructor(name: string) {
		super(name, {
			triggerGlobalClose: false // Closing this window quits the app.
		});
		
	}
	/**
	 * @override
	 */
	public start(): void {
		this.loadView('diary.html');
	}
	
}
