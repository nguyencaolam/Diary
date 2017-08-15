"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = require("../login/Login");
class DefaultScreen {
    constructor() {
        this._$login = new Login_1.Login();
    }
    start() {
        this._$login.validateForm();
        this._$login.submitLogin();
    }
}
exports.DefaultScreen = DefaultScreen;
window['defaultScreen'] = new DefaultScreen();
window['defaultScreen'].start();

//# sourceMappingURL=DefaultScreen.js.map
