"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenomTransporter = void 0;
const venom_bot_1 = require("venom-bot");
class VenomTransporter {
    constructor() {
        (0, venom_bot_1.create)({ session: "session" }).then((client) => (this.intance = client));
    }
    sendMsg(lead) {
        var _a;
        try {
            const { message, phone } = lead;
            const response = (_a = this.intance) === null || _a === void 0 ? void 0 : _a.sendText(`${phone}@c.us`, message);
            return Promise.resolve(response);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.VenomTransporter = VenomTransporter;
