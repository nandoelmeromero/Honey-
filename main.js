

const video = document.getElementById ('video').currentTime = 42;
const clickButton = document.getElementById('clickButton'); 
const name = document.getElementById('fundacion');
const RS = document.getElementById('razonSocial');
const username = document.getElementById('nombre');
const telephone= document.getElementById('telefono');
const email = document.getElementById ('email');
const combo = document.getElementById ('combobox')
const text = document.getElementById ('historia')
const check = document.getElementById ('checkbox')


// FORMULARIO REGISTRO 
const click = (event) => {
    event.preventDefault (); 
    console.log (username.value, email.value);
    if (name.value && RS.value && username.value && telephone.value && email.value && combo.value && text.value && check.checked){
        console.log ("formulario completo")
        alert ("Thanks for registered, we'll contact you soon")
        
    } else {
        console.log ("faltan campos")
        alert ("Please complete the missing fields")
        
    }
    if (check.checked === true){
        console.log ('Checked')
    }else {
        console.log ('Not checked')

    }
}
clickButton.addEventListener ('click', click)