//código para la pagina iniciarsesion.html
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formInicioSesion').addEventListener('submit', function(event){
        //prevengo que se envie el form
        event.preventDefault();

        //reseteo de mensajes de error
        resetMensajesError();

        //declaro variables y las valido
        let mail = document.getElementById('mail').value.trim();
        let password = document.getElementById('password').value.trim();
        let valido = true;
        
        if (mail === ''){
            mostrarMensajeError('errorMail', 'El campo no puede estar vacío.');
            valido = false;
        } else if (!validarMail(mail)){
            mostrarMensajeError('errorMail', 'Formato de mail inváldo.');
            valido = false;
        }

        if (password.length < 8){
            mostrarMensajeError('errorPassword', 'La contraseña debe tener al menos 8 caracteres');
            valido = false;
        }

        if (valido){
            alert('Ingreso correcto. Bienvenido!');
            this.submit();
        }
    })
})

function validarMail(mail){
    const expresionMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expresionMail.test(String(mail).toLowerCase());
}

function mostrarMensajeError(elementId, mensaje){
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = mensaje;
}

function resetMensajesError(){
    let errorElements = document.querySelectorAll('.mensajeError');
    errorElements.forEach(function(element){
        element.innerText = '';
    })
}