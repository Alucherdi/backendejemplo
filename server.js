var express = require("express")
var app = express()

// configuracion del body parser para obtener JSONS
var bodyParser = require("body-parser")
app.use(bodyParser.json())

// metemos el enrutador de auth
app.use(require("./src/auth/auth.router"))

/*
    process.env resuelve las variables de entorno de la ejecución de node, dejemos definida una variable PORT dentro de ellas
    que ocupan ciertos hostings de node como HEROKU para que no haya problema en un futuro, y definamos también, un puerto de bindeo
    en éste caso elegí el 3000, si te causa conflicto con algún otro proyecto montado ahí, sencillamente cambialo
*/
app.listen(process.env.PORT || 3000)