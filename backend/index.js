const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
app.use(cors())

//const dotenv = require('dotenv');
//dotenv.config({ path: './config/.env' });

//const DB_URL = process.env.MDB_URL || "mongodb://db:27018/books"
const DB_URL = "mongodb://localhost:27018/books"
console.log(DB_URL)
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database", DB_URL);
}).catch(err => {
    console.log(`Could not connect to the database ${DB_URL}. Exiting now...`, err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({ "message": "Welcome to the book database backend." });
});

require('./routes/routes.js')(app);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})