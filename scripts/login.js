// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de inicio de sesión
    const loginForm = document.getElementById('login-form');
  
    // Escuchar el evento de envío del formulario
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
      // Obtener los valores de los campos de entrada
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Realizar validaciones (puedes agregar tus propias validaciones aquí)
      if (username === '' || password === '') {
        showError('Por favor, complete todos los campos');
        return;
      }
  
      // Enviar los datos al servidor a través de una API (puedes adaptar esta parte según tus necesidades)
      const formData = {
        username: username,
        password: password
      };
  
      // Aquí puedes realizar una llamada a una API o simular una respuesta del servidor
      simulateLogin(formData);
    });
  
    // Función para mostrar un mensaje de error
    function showError(message) {
      let errorElement = document.getElementById('error-message');
      errorElement.textContent = message;
    }
  
    // Función para simular el inicio de sesión y la respuesta del servidor
    function simulateLogin(formData) {
      // Simulación del inicio de sesión
      if (formData.username === 'usuario' && formData.password === 'contraseña') {
        // Almacenar el nombre de usuario en el almacenamiento local si el login es válido
        localStorage.setItem('username', formData.username);
        // Inicio de sesión exitoso, redireccionar a la página de listado de cuentas
        window.location.href = 'accountList.html';
      } else {
        // Inicio de sesión fallido, mostrar mensaje de error
        showError('Credenciales inválidas');
      }
    }
  });
  