import * as express from 'express';
import * as debug from 'debug';

// Logger
const log = debug('app:log');
const requestLogger = debug('request');

const app = express();

// App setup
app.set('name', 'slack-karte');
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'pug');
app.set('views', `${process.cwd()}/src/common/view`);

// Middleware setup
import * as helmet from 'helmet';
import * as morgan from 'morgan';
app.use(helmet());
app.use(morgan('dev', {stream: {write: msg => requestLogger(msg.trimEnd())}}));
app.use(express.static('src/public'));

// Router setup
import {router} from './packages/routes';
app.use(router);

// Error handler setup
import {serverError, notFoundError} from './common/middleware';
app.use(notFoundError);
app.use(serverError);

// Create and listen server
import {createServer} from 'http';
const server = createServer(app);
server.listen(app.get('port'), () => {
  log(`${app.get('name')} server is listening on port ${app.get('port')}`);
});
