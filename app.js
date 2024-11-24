if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const engine = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require("passport");
const LocalStratergy = require('passport-local');
const User = require("./models/user.js");
const bodyParser = require('body-parser');

app.engine('ejs', engine);
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: true }));


const Mongo_URL = process.env.MONGO_URL;
const PORT=process.env.PORT || 8080;

main().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("error in db")
});

async function main() {
    await mongoose.connect(Mongo_URL);
}


const store=MongoStore.create({
    mongoUrl:Mongo_URL,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 5 * 365 * 24 * 60 * 60 * 1000,
        maxAge:  5 * 365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",(req,res)=>{
    // res.render("./homepage/index.ejs");
    res.render("./menu/index.ejs");
})

app.get("/login",(req,res)=>{
    res.render("./login/index.ejs");
});

app.post('/login', (req, res, next) => {
    console.log("Login route hit");
    console.log("Request body:", req.body); // Log the request body to check if credentials are being received

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return next(err);
        }
        if (!user) {
            console.log("Authentication failed:", info.message);
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error("Error during login:", err);
                return next(err);
            }
            console.log("Login successful");
            return res.redirect('/');
        });
    })(req, res, next);
});


app.get("/reg",(req,res)=>{
    res.render("./reg/index.ejs");
});

app.post("/reg", async (req, res) => {
    console.log(req.body);
    try {
        const { username, email, age, password } = req.body;
        const user = new User({ username, email, age });
        
        const registeredUser = await User.register(user, password);
        
        req.login(registeredUser, (err) => {
            if (err) {
                console.error("Error during login:", err);
                return res.redirect('/reg'); // Redirect to registration page on error
            }
            console.log("Registration and login successful");
            return res.redirect('/'); // Redirect to home page on successful registration and login
        });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.redirect('/reg'); // Redirect to registration page on error
    }
});

app.get("/allgames",(req,res)=>{
    res.render("./allgames/index.ejs");
})

app.get("/play",(req,res)=>{
    res.render("./playpage/index.ejs");
})

app.get("/chatbot",(req,res)=>{
    res.render("./chatbot/index.ejs");
});

app.get("/resource",(req,res)=>{
    res.render("./resource/index.ejs");
});

app.get("/map",(req,res)=>{
    res.render("./map/index.ejs");
});

app.get("/cardgame",(req,res)=>{
    res.render("./cardgame/index.ejs");
});


app.get("/matchup",(req,res)=>{
    res.render("./matchup/index.ejs");
});

app.get("/quizgame",(req,res)=>{
    res.send("ON PROGRESS");
});

app.get("/situationgame",(req,res)=>{
    res.send("ON PROGRESS");
})

app.get("/spin",(req,res)=>{
    res.render("./spin/index.ejs");
});

app.get("*",(req,res)=>{
    res.render("./404/index.ejs");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

