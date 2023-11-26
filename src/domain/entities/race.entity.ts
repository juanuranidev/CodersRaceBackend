export class RaceEntity {
  constructor(
    public id: number,
    public user: number,
    public language: number,
    public code: number,
    public cpm: number,
    public timeInMs: number
  ) {}

  public static fromObject(object: { [key: string]: any }): RaceEntity {
    const { id, user, language, code, cpm, timeInMs } = object;

    if (!id) throw "id is required";
    if (!user) throw "user is required";
    if (!language) throw "language is required";
    if (!code) throw "code is required";
    if (!cpm) throw "cpm is required";
    if (!timeInMs) throw "timeInMs is required";

    return new RaceEntity(id, user, language, code, cpm, timeInMs);
  }
}
