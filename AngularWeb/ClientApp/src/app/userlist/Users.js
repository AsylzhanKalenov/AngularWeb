"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = exports.Company = exports.Role = exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users(id, name, surname, lastname, male, status, birthDate, phone, email, password, defaultpass, regDate, roleId, companyId, positionId, role, company, position) {
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
    }
    return Users;
}());
exports.Users = Users;
var Role = /** @class */ (function () {
    function Role(id, name) {
        this.id = id;
        this.name = name;
    }
    return Role;
}());
exports.Role = Role;
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
//# sourceMappingURL=User.js.map