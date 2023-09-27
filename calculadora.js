//const pantalla = document.querySelector('pantalla');1
const pantalla= document.querySelector(".pantalla");
const botones = document.querySelectorAll('input');

// v0

botones.forEach(boton =>{
    boton.addEventListener('click',()=>{
        if(boton.value=='C'){
            pantalla.textContent = '';
        }else if(boton.value == 'CE'){
            pantalla.textContent = pantalla.textContent.slice(o,-1)
        }else if(pantalla.textContent != '' && boton.value == '='){
            pantalla.textContent = eval(pantalla.textContent);
        }else if(pantalla.textContent == '' && boton.value=='='){
            pantalla.textContent= 'Vacio!';
            setTimeout(()=>(pantalla.textContent=''),2000);
        }else{
            pantalla.textContent += boton.value;
        }
    }
)});