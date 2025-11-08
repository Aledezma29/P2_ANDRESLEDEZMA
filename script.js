
function sumarValores() {
  
    let c1 = parseFloat(document.getElementById("const1").value);
    let c2 = parseFloat(document.getElementById("const2").value);
    let c3 = parseFloat(document.getElementById("const3").value);
   
    let suma = c1 + c2 + c3;
 
    document.getElementById("resultadoSuma").innerText = "La suma de los valores constantes son: " + suma;
}


function calcularCuadrado() {

    let num = parseInt(document.getElementById("numCuadrado").value);
    let cuadrado = num * num;
    document.getElementById("resultadoCuadrado").innerText = "El cuadrado de " + num + " es: " + cuadrado;
}

function calcularPromedio() {

    let nombre = document.getElementById("nombreEstudiante").value;
    let c1 = parseFloat(document.getElementById("calif1").value);
    let c2 = parseFloat(document.getElementById("calif2").value);
    let c3 = parseFloat(document.getElementById("calif3").value);
    let promedio = ((c1 + c2 + c3) / 3).toFixed(2);
    document.getElementById("resultadoPromedio").innerText = 
      "El promedio de " + nombre + " es: " + promedio + " puntos";
}


function convertirMetros() {

    let metros = parseFloat(document.getElementById("metros").value);
    let centimetros = metros * 100;
    let kilometros = (metros / 1000).toFixed(2);
    document.getElementById("resultadoConversion").innerText = 
      metros + " metros equivalen a " + centimetros + " centímetros y " + kilometros + " kilómetros.";
}


function compararValores() {

    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let mayor, menor, diferencia;
    if (n1 > n2) {
        mayor = n1; menor = n2;
    } else {
        mayor = n2; menor = n1;
    }
    diferencia = Math.abs(n1 - n2);
    document.getElementById("resultadoComparacion").innerText = 
      "El número mayor es " + mayor + ", el menor es " + menor + ", y su diferencia es " + diferencia + ".";
}
