"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = exports.Company = exports.UserRole = exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, surname, lastname, male, status, birthDate, phone, email, password, defaultpass, regDate, roleId, companyId, positionId, role, company, position, token) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.lastname = lastname;
        this.male = male;
        this.status = status;
        this.birthDate = birthDate;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.defaultpass = defaultpass;
        this.regDate = regDate;
        this.roleId = roleId;
        this.companyId = companyId;
        this.positionId = positionId;
        this.role = role;
        this.company = company;
        this.position = position;
        this.token = token;
    }
    return User;
}());
exports.User = User;
var UserRole = /** @class */ (function () {
    function UserRole(id, name) {
        this.id = id;
        this.name = name;
    }
    return UserRole;
}());
exports.UserRole = UserRole;
var Company = /** @class */ (function () {
    function Company(id, name) {
        this.id = id;
        this.name = name;
    }
    return Company;
}());
exports.Company = Company;
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this.name = name;
    }
    return Position;
}());
exports.Position = Position;
//# sourceMappingURL=user.js.map