export class Users {
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
    public role?: Role,
    public company?: Company,
    public position?: Position
  ) { }
}

export class Role {
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
