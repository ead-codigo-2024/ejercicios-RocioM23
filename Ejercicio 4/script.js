// Código JavaScript para el formulario

// Manejar el envío del formulario
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para la demostración

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (fullName.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return; // Salir de la función si hay campos vacíos
    }

    // Aquí iría el envío real a la base de datos
    document.getElementById('successMessage').style.display = 'block'; // Mostrar mensaje de éxito
});

// Mostrar/ocultar contraseña
document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password'; // Cambiar el tipo de entrada
});

