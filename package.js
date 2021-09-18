const express =require("express");
const cors = require("cors");
const config = require("./app/config");

const app = express();

var corsOptions ={
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book applicantion"});
});

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT}.`);
});