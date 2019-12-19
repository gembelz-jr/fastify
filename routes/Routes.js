let users = require('../modul/Controller');
let auth = require('../modul/Auth');
let middleware = require('../modul/middleware/Middleware-token');
let todo = require('../modul/Todo')

async function routes (fastify, options) {
    //Route Ujicoba
    fastify.get('/', function (request, reply) {
        reply.send({message: 'hello', code: 200})
    });

    fastify.post('/api/users/register', users.register);
    fastify.post('/api/users/login', users.login);
    fastify.post('/api/users/token', auth.createToken);
    fastify.post('/api/users/check', auth.checkToken);
    fastify.route({
        method: 'GET',
        url: '/api/todo',
        preHandler: async function (request, reply, done) {
            await middleware.check(request, reply);
            done()
        },
        handler: todo.get
    });

    fastify.route({
        method: 'GET',
        url: '/api/todo/:id',
        preHandler: async function (request, reply, done) {
            await middleware.check(request, reply);
            done()
        },
        handler: todo.show
    });

    fastify.route({
        method: 'POST',
        url: '/api/todo',
        preHandler: async function (request, reply, done) {
            await middleware.check(request, reply);
            done()
        },
        handler: todo.store
    });

    fastify.route({
        method: 'PUT',
        url: '/api/todo',
        preHandler: async function (request, reply, done) {
            await middleware.check(request, reply);
            done()
        },
        handler: todo.update
    });

    fastify.route({
        method: 'DELETE',
        url: '/api/todo',
        preHandler: async function (request, reply, done) {
            await middleware.check(request, reply);
            done()
        },
        handler: todo.destroy
    });
}

module.exports = routes;
