/* Inicia js de Heli */
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
/* Termina js de Heli */




/* Inicia javascript del directorio (nando) */

 var animales = document.getElementById("Animales");
 var salud = document.getElementById("Salud");
 var educacion = document.getElementById("Educacion");
 var ecologia = document.getElementById("Ecologia");
 var caridad = document.getElementById("Caridad");
 var psicologia = document.getElementById("Psicologia");
 var fundacion7 = document.getElementById("opcion7");
 var fundacion8 = document.getElementById("opcion8");
 
 var boton = document.getElementById("btnGroupDrop1"); 
 var botona = document.getElementById("animales");
 var botons = document.getElementById("salud");
 var botone = document.getElementById("educacion");
 var botonec = document.getElementById("ecologia");
 var botonc = document.getElementById("caridad");
 var botonap = document.getElementById("psicologia");
 var botono7 = document.getElementById("fundacion7");
 var botono8 = document.getElementById("fundacion8");
 
 
 var animales = document.getElementById("animales");
 var salud = document.getElementById("salud");
 var educacion = document.getElementById("educacion");
 var ecologia = document.getElementById("ecologia");
 var caridad = document.getElementById("caridad");
 var psicologia = document.getElementById("psicologia");
 var fundacion7 = document.getElementById("fundacion7");
 var fundacion8 = document.getElementById("fundacion8");
    
 /* script type="text/javascript"> */
     function ocultar(){
     document.getElementById('salud').style.display = 'none';
     document.getElementById('educacion').style.display = 'none';
     document.getElementById('ecologia').style.display = 'none';
     document.getElementById('caridad').style.display = 'none';
     document.getElementById('psicologia').style.display = 'none';
     document.getElementById('fundacion7').style.display = 'none';
     document.getElementById('fundacion8').style.display = 'none';
    }
/* </script> */
    
/* Finaliza javascript del directorio */  
    







