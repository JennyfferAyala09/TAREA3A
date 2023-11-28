document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = registroForm.querySelector('input[type="text"]').value;
        const foto = registroForm.querySelector('input[type="text"]').value;
        const email = registroForm.querySelector('input[type="email"]').value;
        const telefono = registroForm.querySelector('input[type="tel"]').value;
        const nacionalidad = registroForm.querySelector('input[type="text"]').value;
        const tipo = registroForm.querySelector('input[type="text"]').value;
        const historial = registroForm.querySelector('input[type="text"]').value;
        const medicamentos = registroForm.querySelector('input[type="text"]').value;
        const alergias = registroForm.querySelector('input[type="text"]').value;

        // Expresiones regulares para validar el correo, contraseña y número de teléfono
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const telefonoRegex = /^\d{10}$/;

        let error = false;

        if (!nombre || !foto || !email || !nacionalidad || !telefono || !tipo || !historial || !medicamentos || !alergias) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos',
                icon: 'error',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            });
            error = true;
        } else {
            if (!emailRegex.test(email)) {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, ingrese un correo válido',
                    icon: 'error',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
                error = true;
            }

            if (!telefonoRegex.test(telefono)) {
                Swal.fire({
                    title: 'Error',
                    text: 'El número de teléfono debe contener 10 dígitos numéricos',
                    icon: 'error',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
                error = true;
            }
        }

        if (!error) {
            Swal.fire({
                title: 'Éxito',
                text: 'Registro exitoso',
                icon: 'success',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                // Redirige al usuario o realiza otra acción después de 3 segundos
                window.location.href = 'panel.html';
            });
        }
    });
});

document.getElementById('eliminarPersona').addEventListener('click', function() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará permanentemente a la persona. ¿Estás seguro de que deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para eliminar la persona
        // Por ejemplo, puedes enviar una solicitud al servidor para eliminar el registro.
        Swal.fire('¡Persona eliminada!', '', 'success');
      }
    });
  });
