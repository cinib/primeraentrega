var  shampo= 0;
var acondicionador = 0;
var jabon = 0;
var velas = 0;
var tipo = "";
var resultadoShampo = 0;
var resultadoAcondicionador = 0;
var resultadoJabon = 0;
var resultadoVelas = 0;
var total = 0;



const precioShampo = 1300;
const precioAcondicionador = 1200;
const precioJabon = 400;
const precioVelas = 500;
const descuento = 0.90;
const iva = 0.21;


function solicitarShampo(){
    tipo = "Shampo solido";
    shampo = parseInt(prompt("Shampo solido\n\nPrecio unitario: " + precioShampo + " Ar\nDescuento del 10% para cantidades superiores a  4 unidades\n\nIngrese la cantidad:"));
    noEsNumero(shampo,tipo);
    resultadoShampo = calculos(shampo,tipo,precioShampo,resultadoShampo);
    return resultadoShampo;
}

function solicitarAcondicionador(){
    tipo = "Acondicionador solido";
    acondicionador = parseInt(prompt("Acondicionador solido\n\nPrecio unitario: " + precioAcondicionador + " Ar\nDescuento del 10% para cantidades superiores a  4 unidades\n\nIngrese la cantidad:"));
    noEsNumero(acondicionador,tipo);
    resultadoAcondicionador = calculos(acondicionador,tipo,precioAcondicionador,resultadoAcondicionador);
    return resultadoAcondicionador;
}

function solicitarJabon(){
    tipo = "Jabon natural";
    jabon = parseInt(prompt("Jabon de fabricacion naturalL\n\nPrecio por unidad: " + precioJabon + " AR\nDescuento del 10% para cantidades superiores a  4 unidades\n\nIngrese la cantidad:"));
    noEsNumero(jabon,tipo);
    resultadoJabon = calculos(jabon,tipo,precioJabon,resultadoJabon);
    return resultadoJabon;
}


function solicitarVelas(){
    tipo = "Velas de soja";
    velas = parseInt(prompt("velas de soja\n\nPrecio por unidad: " + precioVelas + " AR\nDescuento del 10% para cantidades superiores a  4 unidades\n\nIngrese la cantidad:"));
    noEsNumero(velas,tipo);
    resultadoVelas= calculos(velas,tipo,precioVelas,resultadoVelas);
    return resultadoVelas;
}


function Cotizacion(cantShampo,cantAcondicionador,cantJabon,cantVelas){
    this.cantShampo = cantShampo;
    this.cantAcondicionador = cantAcondicionador;
    this.cantJabon = cantJabon;
    this.cantVelas = cantVelas;


    this.composicion = function(){
        console.log("\n\nMi compra  se compuso de: "+
        "\n"+ cantShampo + " Shampo solidos"+
        "\n"+ cantAcondicionador + "Acondicionador solido"+
        "\n"+ cantJabon + " Jabon natural"+
        "\n"+ cantVelas + " Velas de soja ");
    }

    this.cotizar = function() {

        total = resultadoShampo + resultadoAcondicionador + resultadoJabon + resultadoVelas;
        totalIva = total + (total*iva);


        console.log("\n\nCOTIZACIÓN FINAL\n\nSHAMPO | Cantidad: " + cantShampo + " / Subtotal: " + resultadoShampo + " AR"+
                                "\nACONDICIONADOR | Cantidad: " + cantAcondicionador + " / Subtotal: " + resultadoAcondicionador + " AR"+
                                "\nJABON | Cantidad: " + cantJabon + " / Subtotal: " + resultadoJabon + " AR"+
                                "\nVELAS| Cantidad: " + cantVelas + " / Subtotal: " + resultadoVelas+ "AR"+
                                "\n\nTOTAL: " + total + " AR"+
                                "\nTOTAL + IVA (21%): " + totalIva + " AR"+
                                "\n\nRESUMEN DE CANTIDADES: " + resumenCantidades());
                                
        alert("COTIZACIÓN FINAL\n\nSHAMPO | Cantidad: " + cantShampo + " / Subtotal: " + resultadoShampo + " AR"+
                                "\nACONDICIONADOR | Cantidad: " + cantAcondicionador + " / Subtotal: " + resultadoAcondicionador + " AR"+
                                "\nJABON | Cantidad: " + cantJabon + " / Subtotal: " + resultadoJabon + " AR"+
                                "\nVELAS| Cantidad: " + cantVelas + " / Subtotal: " + resultadoVelas+ "AR"+
                                "\n\nTOTAL: " + total + " AR"+
                                "\nTOTAL + IVA (21%): " + totalIva + " AR"+
                                "\n\nRESUMEN DE CANTIDADES: " + resumenCantidades());

    }


}


//+
function totalCotizacion(){
    var miCotizacion = new Cotizacion(shampo,acondicionador,jabon,velas);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}


function resumenCantidades(){
    var partesCotizacion = [];
    partesCotizacion.push("Shampo solido: " + shampo);
    partesCotizacion.push("Acondicionador solido: " + acondicionador);
    partesCotizacion.push("Jabon natural: " + jabon);
    partesCotizacion.push("Velas de soja: " + velas);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}


function noEsNumero(numero,tipo){
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud");
    }
}



function calculos(cantidad,tipo,precio,resultado){
    if(cantidad < 5){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " AR");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " AR");
    }
    if(cantidad > 5 || cantidad == 5){
        resultado = cantidad*(precio*descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " AR");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " AR");
    }
    return resultado;
}