async function ok(values, messages, reply) {
    return reply.code(200).header('Content_Type', 'application/json; charset=utf-8')
        .send({
            code: 200,
            values: values,
            messages: messages
        });
}

async function badRequest(values, messages, reply) {
    return reply.code(400)
        .header('Content-Type','application/json;charset=utf-8').send({
            code : 400,
            values: values,
            messages: messages
        });
}
module.exports = {
    ok, badRequest
};
