export class UserEntity {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public githubUsername: string,
    public githubId: string
  ) {}

  public static fromObject(object: { [key: string]: any }): UserEntity {
    const { id, name, image, githubUsername, githubId } = object;

    if (!id) throw "id is required";
    if (!name) throw "name is required";
    if (!image) throw "image is required";
    if (!githubUsername) throw "githubUsername is required";
    if (!githubId) throw "githubID is required";

    return new UserEntity(id, name, image, githubUsername, githubId);
  }
}
