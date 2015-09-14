/**
 * Created by USER on 8/31/2015.
 */

var fs = require('fs');

var Handlers = {};

Handlers.getUsersHandler = function(request, reply){
    //reply.file('./modules/userManager/json/getUsers/all.json');


    var users = [];
   var files = fs.readdirSync('./modules/userManager/json/getUser');

    files.forEach(function(file){
        var content=JSON.parse(fs.readFileSync("./modules/userManager/json/getUser/"+file));
        users.push(content);
    });

    reply(users);
};

Handlers.getUserHandler = function(request, reply){
    reply.file('./modules/userManager/json/getUser/'+request.params.id+'.json');

};

module.exports = Handlers;