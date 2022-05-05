num = prompt("Escribe un numero")

out = isNaN(num)

if(out == true){
    alert("debe escribir un numero")
}else if(num < 16){
    alert("eres muy joven")
}else if(num < 26){
    alert("todo un adulto")
}else if(num < 45){
    alert("tu numero es: " + num)
}