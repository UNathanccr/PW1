const infoPlan = document.getElementById("info-plan");
const selectPlan = document.getElementById("plan");

selectPlan.addEventListener("change", () => {
  const valor = selectPlan.value;
  let descripcion = "";

  switch (valor) {
    case "basico":
      descripcion = "Acceso a sala de máquinas y vestidores. Ideal para iniciar.";
      break;
    case "premium":
      descripcion = "Incluye acceso completo, clases grupales y seguimiento mensual.";
      break;
    case "elite":
      descripcion = "Plan completo con entrenador personal, área VIP y masaje mensual.";
      break;
    default:
      descripcion = "Selecciona un plan para ver detalles.";
  }

  infoPlan.innerHTML = `<p><strong>Descripción del plan:</strong> ${descripcion}</p>`;
});