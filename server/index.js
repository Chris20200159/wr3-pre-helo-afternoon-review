const express = require("express");
const ctrl = require("./controller");
const app = express();

app.use(express.json());

app.get("/auth/user", ctrl.getUser);

app.listen(4040, () => console.log("*Hacker voice* I'm in"));
