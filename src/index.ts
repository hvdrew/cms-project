import * as express from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { config } from './server.config';
import { mainRouter } from './controllers/main.controller';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.set('view engine', 'pug');
app.use('/', mainRouter);

// Setup for Mongodb Connection
mongoose.connect(
	config.DB,
	{ useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', (err) => {
	console.log(`${err.name}: ${err.message}`);
});
db.on('open', () => console.log('Connected to Mongodb successfully!'));

// Spin up the server
app.listen(3000, () => console.log('Listening on port 3000.'));
