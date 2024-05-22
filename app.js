const express = require("express");
const app = express();
const ejs = require("ejs");
const API = require("./API");

const PORT = process.env.PORT || 3000;

const path = require("path");
const bodyParser = require("body-parser");

//CSS app.use: middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//Routing
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/resume", (req, res) => {
    res.sendFile(__dirname + "/Resume.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Contact.html");
});

app.get("/project", (req, res) => {
    res.sendFile(__dirname + "/Project.html");
});

//Contact Form (handling query)
app.post("/contactHandling", (req, res) => {
    let {name, email, message} = req.body;
    code = res.statusCode;
    let reply = {name: name, email: email, message: message};
    API.sendEmail(name, email, message);
    res.render("common.ejs", {reply:reply, code:code});
    // res.send(`<h3>Hi ${name},<h3><h3>thanks for your response!</h3> <h3>I would reply your email asap.</h3>`);
})

app.get("*", (req, res) => {
	res.status(404);
    code = res.statusCode;
    res.render("common.ejs", {code:code});
    // res.sendFile(__dirname + "/common.html");
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});