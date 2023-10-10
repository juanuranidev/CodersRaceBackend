import authService from "../services/auth.services.js";

class AuthController {
  async login(req, res) {
    const { profile } = req.body;

    const user = await authService.login(profile);
    console.log(user);
    res.status(200).json(user);
  }
}

const authController = new AuthController();
export default authController;
