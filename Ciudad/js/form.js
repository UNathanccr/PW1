//carga de la funcion init 
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    let nombreTxt = document.getElementById('nombreTxt');
    let lugarTxt = document.getElementById('lugarTxt');
    let mensajeTxt = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');

    emailjs.init("2IIMj-dN305Vw_6cq");

    btnEnviar.onclick = function (event) {
        event.preventDefault();

        let nombre = nombreTxt.value;
        let lugar = lugarTxt.value;
        let mensaje = mensajeTxt.value;

        if (nombre === '' || lugar === '' || mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos.';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Mensaje enviado. Pronto le confirmamos!';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            emailjs.sendForm('service_j79fepy', 'template_a2zgzqj', '#form1')
                .then(function () {
                    mostrarPopup();
                    limpiar();
                }, function (error) {
                    console.error('Error al enviar:', error);
                });
        }
    };

    function limpiar() {
        nombreTxt.value = '';
        lugarTxt.value = '';
        mensajeTxt.value = '';
    }
}

function mostrarPopup() {
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div id="popupSuccess" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            border: 3px solid #002060;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            z-index: 9999;
            max-width: 90%;
        ">
            <div style="font-size: 3rem; color: #28a745; margin-bottom: 0.5rem;">✔️</div>
            <h2 style="color: #002060; margin-bottom: 1rem;">¡Ticket Enviado!</h2>
            <p>Su solicitud ha sido enviada con éxito. Pronto nos pondremos en contacto.</p>
            <button onclick="cerrarPopup()" style="
                margin-top: 1.5rem;
                padding: 0.6rem 1.2rem;
                background-color: #e61610;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
            ">Cerrar</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Cierre automático después de 5 segundos
    setTimeout(() => {
        cerrarPopup();
    }, 5000);
}

function cerrarPopup() {
    const popup = document.getElementById("popupSuccess");
    if (popup) popup.parentNode.removeChild(popup);
}