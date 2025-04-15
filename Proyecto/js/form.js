(function() {
  emailjs.init("TU_USER_ID"); // Reemplaza con tu EmailJS user ID
})();

document.getElementById('form-contacto').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
    .then(function() {
      alert('Mensaje enviado correctamente.');
    }, function(error) {
      alert('Error al enviar el mensaje.', error);
    });
});

document.getElementById('form-suscripcion').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por suscribirte a nuestro boletín.');
  this.reset();
});

document.getElementById('sede').addEventListener('change', function () {
  const sede = this.value;
  const horarioSelect = document.getElementById('horario');
  const horarios = {
    cartago: ["6am - 10am", "12pm - 4pm", "6pm - 10pm"],
    san_jose: ["5am - 9am", "11am - 3pm", "5pm - 9pm"]
  };

  horarioSelect.innerHTML = '<option value="">-- Selecciona un horario --</option>';

  if (horarios[sede]) {
    horarios[sede].forEach(h => {
      const opt = document.createElement('option');
      opt.value = h;
      opt.textContent = h;
      horarioSelect.appendChild(opt);
    });
  }
});


