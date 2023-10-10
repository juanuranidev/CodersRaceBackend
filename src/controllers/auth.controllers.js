import authService from "../services/auth.services.js";

class AuthController {
  async login(req, res) {
    const { profile } = req.body;

    const _profile = await authService.getRandom(profile);
    res.status(200).json(_profile);
  }
}

const authController = new AuthController();
export default authController;
