//DECLARATION OF VARIABLES

let max = 1000;
let numeroAzar = Math.floor(Math.random()*max)+1;
console.log(numeroAzar)
let send = document.getElementById('send')
let error = 0

// BUTTON CLICK EVENT

send.addEventListener('click', (event)=>{

    event.preventDefault()
    const num = document.getElementById('numero').value
    let res
    const menor = document.getElementById("menor")
    const mayor = document.getElementById("mayor")
    const acerto = document.getElementById("acerto")
    
    while (error < 15) {
        if(error == 14){
            alert('Tienes 15 errores, perdiste :(')
            location.reload()
        }
        if(num > numeroAzar){
            error++
            res = 'su numero es mayor'
            mayor.classList.add("mostrar")
            menor.classList.remove("mostrar")
            
            break
        }else if(num < numeroAzar){
            error++
            res = 'su numero es menor'
            menor.classList.add("mostrar")
            mayor.classList.remove('mostrar')
            break
        } else {
            alert('¡¡ HAZ ADIVINADO !!')
            location.reload()
            error = 9
            break
        }
        
        if(num === numeroAzar){
            function numero(){
                return '<h1> GANASTE </h1>'
            }
        }
    }
    
})

// PRESS ENTER EVENT

const input = document.getElementById('numero')
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    send.click()
  }
})
