const express =require("express");
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError } = require("./app/helpers/error");

const app = express();

var corsOptions ={
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

setupContactRoutes(app);

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book applicantion"});
});

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`sever is running on port ${PORT}.`);
});

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});