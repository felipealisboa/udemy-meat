"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.macthes = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.email;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23'),
    "rodrigo@gmail.com": new User('rodrigo@gmail.com', 'Rodrigo', 'rodrigo23'),
    "felipe@gmail.com": new User('felipe@gmail.com', 'Felipe', 'felipe23')
};
