const express = require('express');

const routes = express.Router();

routes.get("/usuario",(request, response)=> {

    const parametros = request.body;

    console.log(parametros);

    return response.json({
        "nome" : "adriane",
        "altura" : 1.75,
        "peso" : 50,
        "idade" : 18,
        "signo" : "gemeos",
        "dog" : "fred"
    });
});

module.exports = routes;