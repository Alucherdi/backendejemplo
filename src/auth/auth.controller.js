// importamos el modelo
var AuthModel = require("./auth.model")

class Auth {
    constructor() {
        // manejamos un solo modelo por si requerimos más de una petición con el mismo objeto instanciado
        this.model = new AuthModel()
    }

    login({name, password}) {
        // definimos la variable de respuesta
        var res

        // le mandamos al modelo el objeto que espera con los dos parametros
        var userFromDB = this.model.getUser({
            name: name, password: password
        })

        // checamos si el resultado existe (recordemos que el retorno del modelo es un array, así que tenemos que checar el primer valor)
        if (userFromDB[0] != undefined) {
            /*
                una buena practica es que las respuestas que mandes siempre tengan un código para verificar desde ahí
                si la operacion a culminado de manera exitosa o se presentó algún error
                
                usaremos el código 200 para indicar que el usuario se validó correctamente
            */
            res = {
                code: 200,
                // solo regresamos la información pertinente del usuario hacia el front
                user: userFromDB[0].userInformation,
                msg: "Usuario validado correctamente"
            }
        } else {
            // usaremos el código 240 cuando la petición sea correcta pero el usuario sea invalido
            res = {
                code: 240,
                user: null,
                msg: "Usuario no valido"
            }
        }

        // retornamos la respuesta
        return res
    }
}

module.exports = Auth