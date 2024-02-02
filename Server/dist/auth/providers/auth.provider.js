"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const bcrypt = require("bcrypt");
class AuthProvider {
    static async generateHash(password) {
        return bcrypt.hash(password, 10);
    }
    static async comparePassword(password, user) {
        return bcrypt.compare(password, user.password);
    }
    static async compare(data, encrypted) {
        return await bcrypt.compare(data, encrypted);
    }
}
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth.provider.js.map