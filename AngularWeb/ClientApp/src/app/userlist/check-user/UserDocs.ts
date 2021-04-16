import { Byte } from "@angular/compiler/src/util";

export class UserDocs {
  constructor(
    public userId?: number,
    public fileCatsId? : number,
    public Specialization?: string,
    public Udv?: string,
    public Pension?: string,
    public Certificates?: string,
    public Employhis?: string,
    public Addres?: string,
    public Conviction?: string,
    public Narcodisp?: string,
    public Psychodisp?: string,
    public Military?: string,
    public Docphoto?: string,
    public Refmainjob?: string,
    public Marriage?: string,
    public Cash?: string,
    public Forma086?: string,
    public fileByte?: Byte[]
  ) { }
}
