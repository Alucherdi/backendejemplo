var express = require("express")
// aquí agregaremos el module exports para que podamos requerir éste enrutado en el server.js
var app = module.exports = express()

// se importa el controlador y NUNCA el modelo
var Auth = require("./auth.controller")

app.post("/auth/login", (req, res) => {
    /* 
        se ocupa [req.body] para la obtención de los parametros de entrada del servicio, en este caso
        queremos obtener [name] y [password], validaremos antes si nos los han enviado
    */
    var serviceParams = req.body

    // checamos si no están definidos
    if (
        serviceParams.name == undefined ||
        serviceParams.password == undefined
    ) {
        // regresaremos un código 540 cuando los parametros de entrada sean incorrectos
        res.send({
            code: 540,
            msg:  "Parametros de entrada incorrectos"
        })

        // res.send por si solo no culminará la función, si no queremos que se procese lo demás, retornaremos aquí
        return
    }
    
    // se crea una instancia del controlador y se manda la respuesta del llamado del login
    var auth = new Auth()

    res.send(
        auth.login({
            name:     serviceParams.name,
            password: serviceParams.password
        })
    )
})