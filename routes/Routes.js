let users = require('../modul/Controller');
let auth = require('../modul/Auth');

async function routes (fastify, options) {
    //Route Ujicoba
    fastify.get('/', function (request, reply) {
        reply.send({message: 'hello', code: 200})
    });

    fastify.post('/api/users/register', users.register);
    fastify.post('/api/users/login', users.login);
    fastify.post('/api/users/token', auth.createToken);
}

module.exports = routes;
