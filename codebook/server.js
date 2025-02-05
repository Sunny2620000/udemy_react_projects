import { create, router as _router, defaults } from 'json-server';
import auth from 'json-server-auth';
const server = create();
const router = _router('data/db.json'); // Path to your db.json
const middlewares = defaults(); // Default middlewares for logging, CORS, etc.

// Use default middlewares (for logging, static files, etc.)
server.use(middlewares);

// Use json-server-auth middleware to enable authentication routes
server.use(auth);

// Use the router (API routes defined in db.json)
server.use(router);

// Start the server on port 8000
server.listen(8000, () => {
    console.log('JSON Server is running on http://localhost:8000');
});
