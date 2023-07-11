const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "public/pages/homePage/index.html"));
});

app.get("/about", (req, res) => {
   res.sendFile(path.join(__dirname, "public/pages/aboutPage/index.html"));
});

app.get("/socials", (req, res) => {
   res.sendFile(path.join(__dirname, "public/pages/socialsPage/index.html"));
});

app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, "public/pages/404Page/index.html"));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);