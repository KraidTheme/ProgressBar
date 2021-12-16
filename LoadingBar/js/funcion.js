var barra=document.getElementById("progressBar");
var iterador=0;
var bar;

function CallFill(){
bar=setInterval(fill,5);
}
function fill(){
    barra.style.width=iterador++ + "px";
    //barra.innerText=iterador/5 + "%";
    if(iterador>500){
        stopFill();
        alert("Se ha completado!");
    }
}
function stopFill(){
    clearInterval(bar);
}