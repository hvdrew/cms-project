import { Server } from './server';
import { config } from './server.config';
import { mainRouter } from './controllers/main.controller';
import { Database } from './lib/db/main.db';

// Setting up our configs and class instances
const PORT: number = config.PORT || 3000;
const dbUrl: string = config.DB || 'mongodb://localhost:27017/crm-test';
const App = new Server(config);
const DB = new Database();

// Connect to DB
DB.connect(dbUrl);

// Load routes and fire up the server
App.routeLoader(mainRouter);
App.listen(PORT, () => console.log(`Listening on port ${PORT}`));