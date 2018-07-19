import * as mongoose from 'mongoose';
import { Configuration } from '../../server.config';

// Main DB Class
export class Database {
	db: mongoose.Connection;
	dbUrl: string;
	configurationProvided: Boolean;

	constructor(configurationSettings?: Configuration) {
		// Check if settings were provided
		this.configurationProvided = configurationSettings ? true : false;
	}

	connect(dbUrl: string) {
		// Load config DB URL, or use the one passed to the connect method
		this.dbUrl = this.dbUrl || dbUrl;

		// Connect
		mongoose.connect(
			this.dbUrl,
			{ useNewUrlParser: true }
		);
		this.db = mongoose.connection;

		// Log any errors with Connecting
		this.db.on('error', (err) => {
			console.log(`${err.name}: ${err.message}`);
		});

		// Log success message on connection
		this.db.on('open', () =>
			console.log('Connected to Mongodb successfully!')
		);
	}
}
