"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_base_1 = require("electron-base");
class DiaryWindow extends electron_base_1.ElectronWindowBase {
    constructor(name) {
        super(name, {
            triggerGlobalClose: false // Closing this window quits the app.
        });
    }
    /**
     * @override
     */
    start() {
        this.loadView('diary.html');
    }
}
exports.DiaryWindow = DiaryWindow;

//# sourceMappingURL=DiaryWindow.js.map
