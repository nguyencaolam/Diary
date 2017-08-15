"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Diary_1 = require("../diary/Diary");
class DiaryScreen {
    constructor() {
        this._$diary = new Diary_1.Diary();
    }
    start() {
        this._$diary.onLoad();
        this._$diary.validateInput();
        this._$diary.addNewDiary();
    }
}
exports.DiaryScreen = DiaryScreen;
window['diaryScreen'] = new DiaryScreen();
window['diaryScreen'].start();

//# sourceMappingURL=DiaryScreen.js.map
