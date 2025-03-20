import { app } from "../config/app";
import signUpController from "../controllers/signUp.controller";

app.post('/api/signup', signUpController.execute);