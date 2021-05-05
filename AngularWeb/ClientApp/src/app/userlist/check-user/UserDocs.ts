import { Byte } from "@angular/compiler/src/util";

export class UserDocs {
  constructor(
    public userId?: number,
    public fileCatsId? : number,
    public specialization?: string[],
    public udv?: string[],
    public pension?: string[],
    public certificates?: string[],
    public employhis?: string[],
    public addres?: string[],
    public conviction?: string[],
    public narcodisp?: string[],
    public psychodisp?: string[],
    public military?: string[],
    public docphoto?: string[],
    public refmainjob?: string[],
    public marriage?: string[],
    public cash?: string[],
    public forma086?: string[], 
    public fileByte?: Byte[]
  ) { }
}
