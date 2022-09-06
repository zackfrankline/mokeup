const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/mokeup", (req, res) => {
    res.send("hi from server <3")
})

require("./routes/mokeup_routes")(app);

app.listen(port, () => {
    console.log("Server is Running");
})