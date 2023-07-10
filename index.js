const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/home", (req, res) => {
   res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/about", (req, res) => {
   res.sendFile(path.join(__dirname, "public/about.html"));
});

app.get("/socials", (req, res) => {
   res.sendFile(path.join(__dirname, "public/socials.html"));
});

app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, "public/404page.html"));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
//console.log(`Your Website is now Online: ${website}`)