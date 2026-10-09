const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Abrir y cerrar el menú
if (menu && nav) {
    menu.onclick = () => {
        nav.classList.toggle("open");
    };
}


// Formulario de contacto
const form = document.getElementById("contactForm");

if (form) {

    const tel = document.getElementById("tel");

    // Evitar que el teléfono acepte letras
    if (tel) {
        tel.addEventListener("input", () => {
            tel.value = tel.value.replace(/\D/g, "").slice(0, 10);
        });
    }


    form.onsubmit = (e) => {
        e.preventDefault();

        const respuesta = document.getElementById("respuesta");

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("tel").value.trim();
        const servicio = document.getElementById("serv").value;
        const mensaje = document.getElementById("msg").value.trim();
        const acepto = document.getElementById("acepto").checked;


        // Verificar campos vacíos
        if (!nombre || !email || !telefono || !servicio || !mensaje) {
            respuesta.textContent = "Completa todos los campos requeridos.";
            return;
        }


        // Verificar teléfono
        if (telefono.length !== 10) {
            respuesta.textContent = "El teléfono debe tener 10 números.";
            return;
        }


        // Verificar aceptación
        if (!acepto) {
            respuesta.textContent =
                "Debes aceptar el uso de tus datos para enviar la solicitud.";
            return;
        }


        // Envío correcto
        respuesta.textContent =
            "Solicitud enviada correctamente. Te contactaremos pronto.";


        // Limpiar formulario después de enviar
        form.reset();
    };
}