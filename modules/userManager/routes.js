/**
 * Created by USER on 8/31/2015.
 */
var Handlers = require('./handlers');

var routes = [
    {
        path: '/users',
        method: 'GET',
        handler:Handlers.getUsersHandler
    },
    {
        path: '/user/{id}',
        method: 'GET',
        handler:Handlers.getUserHandler
    }
];

module.exports = routes;