import { app } from "../config/app";
import signInController from "../controllers/signIn.controller";
import signUpController from "../controllers/signUp.controller";

app.post('/api/signup', signUpController.execute);
app.post('/api/signin', signInController.execute);