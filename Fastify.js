require('dotenv').config();

//Inisialisasi awal
const fastify = require('fastify')({
    logger: true //aktifkan untuk menerima log setiap request dari fastify
});

//Fungsi ini untuk membuat kita bisa melakuakn post melalui www-url-encoded
fastify.register(require('fastify-formbody'));

//Route yang dipisah dari root file
fastify.register(require('./routes/Routes'));

const start = async () => {
    try {
        await fastify.listen(process.env.APP_PORT || 3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
};

start();
