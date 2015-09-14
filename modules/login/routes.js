/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var LoginRoutes = [
    {
        path: '/login',
        method: 'GET',
        handler:Handlers.loginHandler
    }
];

module.exports = LoginRoutes;