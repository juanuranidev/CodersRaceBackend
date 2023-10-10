class AuthRepository {
  async login(profile) {
    console.log(profile);
  }
}

const authRepository = new AuthRepository();
export default authRepository;
