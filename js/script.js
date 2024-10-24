
/* VARIABLES */

let usuario
let contrasena
let intentos=3
let eleccion=0

/* FUNCIONES */

function login () {
    let usuarioIngresado
    let contrasenaIngresada

    while(intentos>0){
        usuarioIngresado = prompt('LOGIN: ingrese el nombre de usuario')
        contrasenaIngresada = prompt('LOGIN: ingrese la contraseña')

        if(usuarioIngresado == usuario && contrasenaIngresada == contrasena){
            alert('Sesión iniciada con éxito!')
            break
        }else{
            alert('Usuario o contraseña erróneos. Intentos restantes: '+ (intentos-1))
            intentos=intentos-1
        }
    }
    if (intentos == 0){
        alert('Usted ha realizado demasiados intentos, intente en otro momento')
    }
}

function LoginRegistro(){
    while(eleccion == 0){
        eleccion=prompt('Registrarse: ingrese 1 Iniciar sesión: ingrese 2')
            if(eleccion == 1){
                registro()
            }else{
                if(eleccion == 2){
                    login()
                }else{
                    if(eleccion = NaN || eleccion != 1 || eleccion !=2){
                        alert('Por favor ingrese una opcion correcta')
                        eleccion=0
                    }
                }
            }
            
        }
    }

    function registro () {
        usuario = prompt('REGISTRO: Ingrese el nombre de usuario')
        contrasena = prompt('REGISTRO: Ingrese la contraseña')
        alert ('usuario creado con éxito!')
        login()
    }


/* EJECUCIÓN */

LoginRegistro()

