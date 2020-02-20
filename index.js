import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { removeAllListeners } from "nodemon";
const app = express();
const PORT = 3000;

function handleLisitening(){
    console.log(`Listening on http://localhost/${PORT}`)
}

const home = "/";
const aboutUs = "/about-us";
const contact = "/contact";
const PROTECTED = "/protected";

const handleHome = (req, res) => res.send("Home");
const handleAbout = (req, res) => res.send("About Us");
const handleContact = (req, res) => res.send("Contact");
const handleProtect = (req, res) => res.send("");

const middleOne = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const PROTECT = (req, res, next) => {
    if(req.url===PROTECTED){
    res.redirect(home)
    }
    next();
};

app.use(middleOne);
app.use(PROTECT);

app.get(home, handleHome);
app.get(aboutUs, handleAbout);
app.get(contact, handleContact);


app.listen(PORT, handleLisitening)
