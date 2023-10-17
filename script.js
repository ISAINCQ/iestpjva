const   btn_izquierdo = document.querySelector(".btn_izquierdo"),
        btn_derecho = document.querySelector(".btn_derecho"),
        slider = document.querySelector("#slider"),
        Nslider = document.querySelectorAll(".banner");

btn_derecho.addEventListener("click", e => movDerecho())
btn_izquierdo.addEventListener("click", e => movIzquierdo())

setInterval(()=>{
    movDerecho()
},3000)

let operacion = 0,
    contar = 0,
    anchoImg = 100/ Nslider.length;
function movDerecho(){
    if(contar >= Nslider.length-1){
        contar = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
    }else{
        contar++;
        operacion = operacion + anchoImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}
function movIzquierdo(){
    contar--;
    if(contar < 0){
        contar = Nslider.length-1;
        operacion = anchoImg * (Nslider.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
    }else{
        operacion = operacion -  anchoImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}