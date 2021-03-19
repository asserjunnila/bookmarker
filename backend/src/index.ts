import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes';

const app = express();
app.use(cors());

const port = process.env.REACT_APP_BACKPORT || 8080;
const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27018/books';

// TODO: better logging config
console.log(DB_URL); // eslint-disable-line no-console
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.info('Successfully connected to the database', DB_URL); // eslint-disable-line no-console
}).catch((err) => {
  console.error(err); // eslint-disable-line no-console
});

app.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`); // eslint-disable-line no-console
});
