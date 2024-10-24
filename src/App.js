const express = require("express");
const Login = require("./routes/Login");
const Signup = require("./routes/Signup");
const connectDB = require("./dataBase/DB");
const Root = require("./routes/Root");
const Home = require("./routes/Home");

require("dotenv").config();
const app = express();

connectDB();

app.use(express.json());

app.get("/", Root);

app.post("/login", Login);

app.post("/signup", Signup);

app.get("/home", Home);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});