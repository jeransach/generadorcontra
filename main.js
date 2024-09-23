let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let constrasena = document.getElementById("contrasena")
let texto = "texto";

const cadenacaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generar (){

    let numeroingresado = parseInt (cantidad.value);
    if( numeroingresado < 6){
        alert("La cantidad de caracteres tiene que ser mayor o igual que 6")
    }

let password = "";

    for (let i = 0; i < numeroingresado; i++) {
        
        let caracteraleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)]
    console.log(caracteraleatorio);

    password+=caracteraleatorio;

    }
    constrasena.value = password;


}






