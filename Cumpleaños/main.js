import './styles.css'

document.getElementById('fecha').addEventListener('change', calcularDias);


function calcularDias() {
  const cumpleFecha = document.getElementById('fecha').value;

  const hoy = new Date();
  const cumple = new Date(cumpleFecha);

  cumple.setFullYear(hoy.getFullYear());

  if (cumple < hoy) {
    cumple.setFullYear(hoy.getFullYear() + 1);
  }

  const dias = Math.floor((cumple - hoy) / (1000 * 60 * 60 * 24))+1

  document.getElementById('resp').innerText = `Faltan ${dias} dias para tu cumpleaños.`;
}



