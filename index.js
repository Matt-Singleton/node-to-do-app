let express = require("express");
let app = express();
let path = require("path");
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.use(express.static(__dirname + '/public'));

app.listen(3000);