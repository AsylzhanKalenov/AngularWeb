import { Role } from "./role";

export class User {
  constructor(
    public id?: number,
    public name?: string,
    public surname?: string,
    public lastname?: string,
    public male?: boolean,
    public status?: number,
    public birthDate?: Date,
    public phone?: string,
    public email?: string,
    public password?: string,
    public defaultpass?: boolean,
    public regDate?: Date,
    public roleId?: number,
    public companyId?: number,
    public positionId?: number,
    public role?: UserRole,
    public company?: Company,
    public position?: Position
  ) { }
}

export class UserRole {
  constructor(
    public id?: number,
    public name?: string
  ) { }
}

export class Company {
  constructor(
    public id?: number,
    public name?: string
  ) { }
}

export class Position {
  constructor(
    public id?: number,
    public name?: string
  ) { }
}
