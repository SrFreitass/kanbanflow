import { app } from "../config/app";

app.get("/", async (request, reply) => {
    return { hello: "world!" };
});

app.get("/test", async (request, reply) => {
    return { test: "success" };
});
