function cargarHorarios() {
    const horario = document.getElementById("horario");
    const plan = document.getElementById("plan").value;
    const horarioInfo = document.getElementById("horario-info");
 
    const opciones = {
      basico: ["10am - 2pm"],
      premium: ["5am - 11am", "11am - 3pm", "3pm - 9pm"],
      elite: ["Acceso 24/7 ilimitado"]
    };
 
    const infoTexto = {
      basico: "Con el plan estudiante puedes acceder a la sala de máquinas durante tu horario seleccionado.",
      premium: "Con el plan Estandar tienes acceso a todas las instalaciones y clases grupales en tu horario.",
      elite: "El plan Elite te ofrece acceso VIP sin restricciones de horario, ¡entrena cuando quieras!"
    };
 
    horario.innerHTML = "";
    if (opciones[plan]) {
      opciones[plan].forEach(h => {
        let opt = document.createElement("option");
        opt.value = h;
        opt.textContent = h;
        horario.appendChild(opt);
      });
      
      // Mostrar información adicional sobre el plan
      horarioInfo.textContent = infoTexto[plan];
      horarioInfo.style.display = "block";
    } else {
      horario.innerHTML = '<option value="">-- Selecciona un plan primero --</option>';
      horarioInfo.style.display = "none";
    }
  }
  
  function actualizarEntrenador() {
    const plan = document.getElementById("plan").value;
    const entrenamiento = document.getElementById("entrenamiento").value;
    const entrenadorSection = document.getElementById("entrenador-section");
    const entrenadorInfo = document.getElementById("entrenador-info");
    
    if (!plan || !entrenamiento) {
      entrenadorSection.style.display = "none";
      return;
    }
    
    let entrenadorRecomendado = "";
    
    if (entrenamiento === "pesas" || entrenamiento === "ganarmusculo") {
      entrenadorRecomendado = `
        <div class="entrenador-mini">
          <img src="imagenes/sujeto.png" alt="Carlos Jiménez" width="50" height="50" style="border-radius: 50%;">
          <div>
            <strong>Carlos Jiménez</strong><br>
            Especialista en Hipertrofia<br>
            <small>Experto en programas de ganancia muscular</small>
          </div>
        </div>
      `;
    } else if (entrenamiento === "cardio" || entrenamiento === "salud") {
      entrenadorRecomendado = `
        <div class="entrenador-mini">
          <img src="imagenes/sujeto.png" alt="María Sánchez" width="50" height="50" style="border-radius: 50%;">
          <div>
            <strong>María Sánchez</strong><br>
            Experta en Nutrición Deportiva<br>
            <small>Especializada en mejora del rendimiento</small>
          </div>
        </div>
      `;
    } else if (entrenamiento === "crossfit" || entrenamiento === "funcional" || entrenamiento === "hiit") {
      entrenadorRecomendado = `
        <div class="entrenador-mini">
          <img src="imagenes/sujeto.png" alt="Roberto Gómez" width="50" height="50" style="border-radius: 50%;">
          <div>
            <strong>Roberto Gómez</strong><br>
            Instructor de Crossfit<br>
            <small>Especialista en entrenamiento de alta intensidad</small>
          </div>
        </div>
      `;
    }
    
    if (entrenadorRecomendado) {
      entrenadorInfo.innerHTML = entrenadorRecomendado;
      entrenadorSection.style.display = "block";
    } else {
      entrenadorSection.style.display = "none";
    }
  }
 
  function mostrarOtroObjetivo() {
    const valor = document.getElementById("objetivo").value;
    document.getElementById("campo-otro").style.display = (valor === "otro") ? "block" : "none";
  }
  
  function actualizarRecomendaciones() {
    const objetivo = document.getElementById("objetivo").value;
    const entrenamiento = document.getElementById("entrenamiento").value;
    const recomendaciones = document.getElementById("recomendaciones");
    const recomendacionTexto = document.getElementById("recomendacion-texto");
    
    if (!objetivo || objetivo === "otro") {
      recomendaciones.style.display = "none";
      return;
    }
    
    let texto = "";
    
    if (objetivo === "perderpeso") {
      texto = "Basado en tu objetivo de pérdida de peso, te recomendamos: " +
              "Combinar entrenamiento cardiovascular con ejercicios de fuerza, " +
              "mantener un déficit calórico moderado y consultar con nuestra nutricionista María Sánchez " +
              "para un plan alimenticio personalizado.";
    } else if (objetivo === "ganarmusculo") {
      texto = "Para tu objetivo de ganancia muscular, te sugerimos: " +
              "Priorizar el entrenamiento con pesas enfocado en hipertrofia, " +
              "mantener un superávit calórico controlado y contar con la asesoría de Carlos Jiménez " +
              "para maximizar tus resultados.";
    } else if (objetivo === "rendimiento") {
      texto = "Para mejorar tu rendimiento deportivo, te recomendamos: " +
              "Implementar entrenamiento periodizado con fases de fuerza, potencia y resistencia, " +
              "optimizar tu nutrición pre y post entrenamiento, y trabajar con Roberto Gómez " +
              "en ejercicios específicos para tu deporte.";
    } else if (objetivo === "salud") {
      texto = "Para mejorar tu salud general, te sugerimos: " +
              "Combinar actividad cardiovascular moderada con entrenamiento de fuerza, " +
              "incorporar ejercicios de movilidad y flexibilidad, y consultar con María Sánchez " +
              "sobre hábitos alimenticios saludables para el día a día.";
    }
    
    if (texto) {
      recomendacionTexto.innerHTML = texto;
      recomendaciones.style.display = "block";
    } else {
      recomendaciones.style.display = "none";
    }
  }
  
  function procesarFormulario() {
    const plan = document.getElementById("plan").value;
    const horario = document.getElementById("horario").value;
    const entrenamiento = document.getElementById("entrenamiento").value;
    const objetivo = document.getElementById("objetivo").value;
    
    if (!plan || !horario || !entrenamiento || !objetivo) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
    
    // Aquí se podría enviar la información a un servidor o procesarla
    alert("¡Gracias por programar tu consulta! Un representante de IRON INDUSTRY GYM se pondrá en contacto contigo pronto.");
  }
  
  // Añadir event listeners para actualizar en tiempo real
  document.getElementById("entrenamiento").addEventListener("change", actualizarEntrenador);