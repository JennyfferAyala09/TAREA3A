const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        Swal.fire({
            title: 'Error',
            text: 'Ambos campos son obligatorios',
            icon: 'error',
            position: 'top-end', // Posición en la parte superior derecha
            toast: true, // Mostrar como toast
            showConfirmButton: false, // No mostrar botón de confirmación
            timer: 3000, // Duración en milisegundos
        });
    } else if (email === "caro@gmail.com" && password === "123456") {
        Swal.fire({
            title: 'Éxito',
            text: 'Tus credenciales son correctas',
            icon: 'success',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
        }).then(() => {
            window.location.href = 'panel.html';
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Tus credenciales son incorrectas',
            icon: 'error',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
        });
    }
});


