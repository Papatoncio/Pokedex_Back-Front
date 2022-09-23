export interface JwtResponseI {
    dataUser: {
        idUsuario: number,
        usuario: String,
        correo: String,
        accesToken:String,
        expiresIn:String
    }
}