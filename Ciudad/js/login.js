document.getElementById("btn-login").addEventListener("click", login); 

function validation_alert(ptext) {
    Swal.fire({
        title: '<span style="color:#e74c3c; font-weight:bold;">❌ Verificación requerida</span>',
        showConfirmButton: true,
        confirmButtonText: "Volver a intentar",
        confirmButtonColor: "#e74c3c",
        background: '#fff8f8',
        width: 420,
        timer: 2000,
        padding: '1.5rem',
        html: `
            <iframe width="260" height="200" frameborder="0" 
                src="https://lottie.host/embed/2937f41e-c154-4fdc-aa35-d6bcfb45a5ff/XcK40Is5UL.lottie"></iframe>
            <p style="font-size: 16px; margin-top: 1rem; color: #333;">${ptext}</p>
        `,
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input]; 
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0; 
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error"); 
        if (input[i] == "") { 
            text = "Los campos requeridos <strong>NO</strong> pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error"); 
            error_count++;
        }
    }

    if (error_count == 0) {  
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: '<span style="color:#2ecc71; font-weight: bold;">✔ ¡Acceso Exitoso!</span>',
                showConfirmButton: false,
                timer: 3000,
                background: '#f0fff5',
                width: 400,
                padding: '1.5rem',
                html: `
                    <iframe src="https://lottie.host/embed/0ad80554-afc5-4724-a02e-b3387b719533/9RFrQruih4.lottie" 
                        frameborder="0" style="width: 250px; height: 250px;"></iframe>
                    <p style="font-size: 16px; margin-top: 1rem; color: #333;">
                        Datos de acceso <strong>correctos</strong>, estás siendo redirigido...
                    </p>
                `,
            }).then(() => {
                window.location.href = "landing.html";
            });
        } else {
            text = "Datos de Acceso incorrectos."; 
            validation_alert(text);
        }
    }
}

function limpiar(){
    document.getElementById('in-txt-user').value = "";
    document.getElementById('in-txt-pass').value = "";
}