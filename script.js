// Toggle password visibility
function togglePassword() {
  const pwField = document.getElementById('contraseña');
  if (pwField.type === 'password') {
    pwField.type = 'text';
  } else {
    pwField.type = 'password';
  }
}

// Función para descargar el PDF subido (record_de_notas.pdf)
function downloadPDF() {
  // Crear un enlace temporal para descargar el archivo
  const link = document.createElement('a');
  link.href = 'record_de_notas.pdf';  // Ruta al archivo subido en el repo
  link.download = 'record_de_notas.pdf';  // Nombre del archivo al descargar
  link.click();  // Simula clic para descargar
}

// Login form submit event
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const user = document.getElementById('usuario').value.trim();
  const password = document.getElementById('contraseña').value;

  // Usuario y contraseña válidos
  if (user === '76868064' && password === '76868064Salmon') {
    document.getElementById('errorMsg').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('recordNotas').style.display = 'block';
  } else {
    // Mostrar mensaje de error si no coincide
    document.getElementById('errorMsg').style.display = 'block';
  }
});
