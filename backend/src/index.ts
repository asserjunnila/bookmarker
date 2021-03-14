import express from 'express';
import cors from 'cors';
import router from './routes/routes';

const app = express()
app.use(cors())

const port = process.env.REACT_APP_BACKPORT || 8080
const DB_URL = process.env.MONGO_URL || "mongodb://localhost:27018/books"

console.log(DB_URL)
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database", DB_URL);
});


app.use(router)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})