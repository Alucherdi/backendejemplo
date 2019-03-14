/* 
    en el modelo van tus conexiones a base de datos y los querys más nativas que puedas hacer, 
    sencilas con el fin de que la lógica y respuesta quede completamente en el controlador, aquí solo
    se obtiene la información

    TODO Conexión a una base publica, por ahora se dejará data en un array en RAM
*/
class AuthModel {
    constructor() {
        /*
            creamos nuestra pseudo base para nuestra prueba de lógica de base de datos
            
            por buena practica, la información que regresaremos del usuario a buscar la pondré en en un bloque aparte del
            bloque de autenticación para no mandar información sensible al front
        */
        this.users = [
            { name: "a", password: "123", userInformation: {
                username: "user a",
                value1: "some user information",
                value2: "some user information"
            }},
            { name: "b", password: "124", userInformation: {
                username: "user b",
                value1: "some user information",
                value2: "some user information"
            }},
            { name: "c", password: "125", userInformation: {
                username: "user c",
                value1: "some user information",
                value2: "some user information"
            }},
            { name: "d", password: "126", userInformation: {
                username: "user d",
                value1: "some user information",
                value2: "some user information"
            }},
        ]
    }

    getUser(params) {
        // resuelve la petición a base

        // en este caso, regresaremos un array con el usuario que comparta los datos de name y password mandados en params
        return this.users.filter(
            user => (user.name == params.name && user.password == params.password)
        )
    }
}

module.exports = AuthModel