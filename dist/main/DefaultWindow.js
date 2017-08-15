"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const electron_base_1 = require("electron-base");
// This import is for TypeScript typing only, 
// this line will be removed from output .js file,
// hence the script in app.ts is not executed by this import.
//import { ElectronSampleApp } from './app';
class DefaultWindow extends electron_base_1.ElectronWindowBase {
    constructor(name) {
        super(name, {
            triggerGlobalClose: false,
            autoHideMenuBar: true,
            fullscreen: false,
            webPreferences: {
                //nodeIntegration: true, // If `false`, only web JS functionalities are available. NodeJS features will be disabled.
                webSecurity: false // Disable same-origin policy
            }
        });
    }
    /**
     * @override
     */
    start() {
        this.render();
        //	let app = <ElectronSampleApp>this.app;
    }
    readFile() {
        return new Promise((resolve, reject) => {
            // Let `path.join` decide "/" (Linux) or "\" (Windows).
            fs.readFile(path.join(global.appRoot, 'example.txt'), 'utf8', (err, text) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(text);
            });
        });
    }
    saySomething() {
        return 'Only serializable JSON objects can only be passed with properties of primary types.';
    }
    render() {
        if (this.app.isDebug()) {
            //Load view after dev tools has opened.
            // 	this.native.webContents
            // 		.on('devtools-opened', () => {
            // 			// Clear cache.
            // 			this.clearCache()
            // 				.then(() => this.loadView('index.html'));
            // 		})
            // 		.openDevTools();
            // } else {
            // 	this.setFullScreen(true);
            // 	// Same with: this.loadURL(`${global.appRoot}/views/default.html`);
            this.loadView('index.html');
            // 	// Change view location: this._viewRoot = `${global.appRoot}/new-views/`;
            // 	// this.loadView('default.html') same with: this.loadURL(`${global.appRoot}/new-views/default.html`);
            // }
        }
    }
}
exports.DefaultWindow = DefaultWindow;

//# sourceMappingURL=DefaultWindow.js.map
