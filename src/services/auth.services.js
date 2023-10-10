import authRepository from "../repositories/auth.repository.js";

class AuthService {
  async login(profile) {
    try {
      return await authRepository.login(profile);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const authService = new AuthService();
export default authService;
