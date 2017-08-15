"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { app, BrowserWindow, ipcMain } = require('electron');
const electron_base_1 = require("electron-base");
const DefaultWindow_1 = require("./DefaultWindow");
const DiaryWindow_1 = require("./DiaryWindow");
const DEBUG = true;
class ElectronSampleApp extends electron_base_1.ElectronAppBase {
    constructor(appRoot) {
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
    isDebug() {
        return DEBUG;
    }
    /**
     * Public method must always have JSDoc comment.
     */
    getDefaultWindow() {
        return this._windows.get('Default');
    }
    /**
     * @override
     */
    onStarted() {
        let first = this.addWindow(new DefaultWindow_1.DefaultWindow('Default'));
        //let second = this.addWindow(new DiaryWindow('Diary'));
        ipcMain.on('login-success', () => {
            this.addWindow(new DiaryWindow_1.DiaryWindow('Diary'));
        });
        ipcMain.on('hide-login', () => {
        });
    }
}
exports.ElectronSampleApp = ElectronSampleApp;

//# sourceMappingURL=app.js.map
