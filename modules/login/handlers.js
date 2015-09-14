/**
 * Created by USER on 8/31/2015.
 */

var Handlers = {};

Handlers.loginHandler = function(request, reply){
    reply.file('./modules/login/login.html');
};

module.exports = Handlers;