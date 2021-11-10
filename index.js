// setup for express
const express = require("express");
const app = express();


const port = 3000;

// require some data form your data.js file
let {students, instructors} = require('./data')

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));

// ROUTES DEFINED BELOW

app.get("/home/:country", (req, res) => {
    console.log(req.params)
    res.send("my file")
    //res.sendFile(__dirname + '/views/landing.html')
});

app.get("/", (req, res) => {
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", (req, res) => {
    let {animal} =  req.params  
    if (animal == "pig") {
        res.send( "The pig says 'Oink!'")
    }
    else if (animal == "cow") {
        res.send("The cow says 'Moo'")
    }
    else if (animal == "dog") {
        res.send("The dog says 'Woof Woof!'")
    }
});


app.get("/greet/:word/:count", (req, res) => {
    let {word, count} =  req.params  
    let repeat = word.repeat(count)
    res.send(repeat)
});


app.get("/user/:name", (req, res) => {
    let {name} =  req.params  
    res.send(`My dynamic ${name} route `)
});


// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);