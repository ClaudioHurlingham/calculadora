//const pantalla = document.querySelector('pantalla');1
const pantalla= document.querySelector("pantalla");
const botones = document.querySelectorAll('input')

// v0

botones.forEach(boton =>{
    boton.onclick = ()=>{
        if(boton.id=='eliminar'){
            pantalla.textContent = '';
        }else if(boton.id == 'borrar'){
            pantalla.textContent = pantalla.textContent.slice(o,-1)
        }else if(pantalla.textContent==''&& boton.id=='='){
            pantalla.textContent= 'Vacio!';
            setTimeout(()=>(pantalla.textContent=''),2000);
        }else{
            pantalla.textContent += boton.id;
        }
    }

})