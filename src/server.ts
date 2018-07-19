import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

// Interface Imports
import { Configuration } from './server.config';

export class Server {
	app: express.Application;
	config: Configuration;

	constructor(configurationSettings: Configuration) {
		this.config = configurationSettings;
		this.init();
	}

	init() {
		// Prepare app object
		this.app = express();

		// Middlewares for development environment only
		this.app.use(morgan('dev'));

		// Dependencies for all configurations
		this.app.use(bodyParser.json());
		this.app.use('/public', express.static('public'));
		this.app.set('view engine', 'pug');
	}

	routeLoader(
		frontendRoute: express.Router,
		adminRouter?: express.Router,
		apiRouter?: express.Router
	) {
		// Frontend Router
		this.app.use('/', frontendRoute);

		// Admin Router
		if (adminRouter) {
			this.app.use('/admin', adminRouter);
		}

		// API Router
		if (apiRouter) {
			this.app.use('/api', apiRouter);
		}
	}

	listen(port: number, callback: Function) {
		this.app.listen(port, callback);
	}
}
