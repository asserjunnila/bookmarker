import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bookRoutes from './routes/routes';

const app = express()
app.use(cors())

//const dotenv = require('dotenv');
//dotenv.config({ path: './config/.env' });

const port = process.env.REACT_APP_BACKPORT || 8080;
const DB_URL = process.env.MONGO_URL || "mongodb://localhost:27018/books";

console.log(DB_URL);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.use(bookRoutes);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})