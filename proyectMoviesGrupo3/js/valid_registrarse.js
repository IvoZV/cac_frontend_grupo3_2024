//código para la pagina registrarse.html
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formRegistracion').addEventListener('submit', function(event){
        //detenemos el evento del envio del form
        event.preventDefault();

        //reseto de valores
        resetMensajesError();

        //asignamos y validamos parametros
        let txtNombre = document.getElementById('txtNombre').value.trim();
        let txtApellido = document.getElementById('txtApellido').value.trim();
        let txtEmail = document.getElementById('txtEmail').value.trim();
        let txtContrasenia = document.getElementById('txtContrasenia').value.trim();
        let txtFecha = document.getElementById('txtFecha').value;
        let txtPais = document.getElementById('txtPais').value;
        let chkTerminos = document.getElementById('chkTerminos').checked;
        let isValid = true;
        
        if (txtNombre === ''){
            mostrarMensajeError('errortxtNombre', 'El campo no puede estar vacío.');
            isValid = false;
        }

        if (txtApellido === ''){
            mostrarMensajeError('errortxtApellido', 'El campo no puede estar vacio.');
            isValid = false;
        }

        if (txtEmail === ''){
            mostrarMensajeError('errortxtEmail', 'El campo no puede estar vacio.');
            isValid = false;
        } else if (!validarMail(txtEmail)){
            mostrarMensajeError('errortxtEmail', 'Formato de correo no válido.');
            isValid = false;
        }

        if (txtContrasenia.length < 8){
            mostrarMensajeError('errortxtContrasenia', 'La contraseña debe tener al menos 8 caracteres.');
            isValid = false;
        }

        if (txtFecha === ''){
            mostrarMensajeError('errortxtFecha', 'Debe seleccionar su fecha de nacimiento.');
            isValid = false;
        }

        if (txtPais === ''){
            mostrarMensajeError('errortxtPais', 'Debe seleccionar Nacionalidad.');
            isValid = false;
        }

        if (!chkTerminos){
            mostrarMensajeError('errorchkTerminos', 'Debe aceptar términos y condiciones.');
            isValid = false;
        }

        if (isValid){
            this.submit();
            alert('Registro enviado correctamente!');
        }
    })
})