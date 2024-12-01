// Función de validación
function validateForm() {
    // Obtener los valores de los campos
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const condiciones = document.getElementById("condiciones").checked;

    // Obtener los elementos de error
    const nameError = document.getElementById("nameError");
    const lastnameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const condicionesError = document.getElementById("condicionesError");

    // Resetear mensajes de error
    nameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    condicionesError.textContent = "";

    let isValid = true;
    // Validación de Nombre
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,40}$/;
    if (!name) {
        nameError.textContent = "El campo Nombre es obligatorio.";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "El nombre solo puede contener letras y espacios (3-40 caracteres).";
        isValid = false;
    }

    // Validación de Apellidos
    const lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,60}$/;
    if (!lastname) {
        lastnameError.textContent = "El campo Apellidos es obligatorio.";
        isValid = false;
    } else if (!lastnameRegex.test(lastname)) {
        lastnameError.textContent = "Los apellidos solo pueden contener letras y espacios (4-60 caracteres).";
        isValid = false;
    }
// Validación de Correo Electrónico
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!email) {
    emailError.textContent = "El campo Correo electrónico es obligatorio.";
    isValid = false;
} else if (!emailRegex.test(email)) {
    emailError.textContent = "Ingresa un correo electrónico válido (xxxxxx@xxxxx.xxx).";
    isValid = false;
}

// Validación de Teléfono
const phoneRegex = /^[0-9]{9}$/;
if (!phone) {
    phoneError.textContent = "El campo Teléfono es obligatorio.";
    isValid = false;
} else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "El teléfono debe tener exactamente 9 dígitos.";
    isValid = false;
}
// Validación de condiciones
if (!condiciones) {
    condicionesError.textContent = "Debes aceptar los términos y condiciones.";
    isValid = false;
}

// Si todo es válido
if (isValid) {
    alert("Formulario enviado correctamente.");
}
}

// Agregar evento al botón de envío
document.getElementById("enviar").addEventListener("click", validateForm);