// const   btn_izquierdo = document.querySelector(".btn_izquierdo"),
//         btn_derecho = document.querySelector(".btn_derecho"),
//         slider = document.querySelector("#slider"),
//         Nslider = document.querySelectorAll(".banner");

// btn_derecho.addEventListener("click", e => movDerecho())
// btn_izquierdo.addEventListener("click", e => movIzquierdo())

// setInterval(()=>{
//     movDerecho()
// },3000)

// let operacion = 0,
//     contar = 0,
//     anchoImg = 100/ Nslider.length;
// function movDerecho(){
//     if(contar >= Nslider.length-1){
//         contar = 0;
//         operacion = 0;
//         slider.style.transform = `translate(-${operacion}%)`;
//     }else{
//         contar++;
//         operacion = operacion + anchoImg;
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "all ease .6s";
//     }
// }
// function movIzquierdo(){
//     contar--;
//     if(contar < 0){
//         contar = Nslider.length-1;
//         operacion = anchoImg * (Nslider.length-1)
//         slider.style.transform = `translate(-${operacion}%)`;
//     }else{
//         operacion = operacion -  anchoImg;
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "all ease .6s";
//     }
// }
function movScroll(){
    let linkheader = document.querySelector('.menu a')
    let header = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        linkheader.style.color = '#fff';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left ='calc(50%-250px)';
        header.style.width = '100%';
        header.style.backgroundColor = 'rgba(192, 192, 192, 0.8)';
    } else {
        linkheader.style.color = '#5e5e5e';
        header.style.position = "static";
        header.style.backgroundColor = 'transparent';
    }

}
window.addEventListener("scroll",movScroll);