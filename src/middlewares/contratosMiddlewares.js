const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined){
        return response.status(400).send({message: 'the field "nome, id" is required'});
    }
    if (body.title === ''){
        return response.status(400).send({message: "'nome, id' cannot be empty"});
    }
};

    next();

module.exports = {
    validateBody
};