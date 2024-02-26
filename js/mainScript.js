//mensaje de invitación a ver mi portfolio
let message = document.getElementById("message");

function showMessage() {
  message.style.visibility = "visible";
}
function hideMessage() {
  message.style.opacity = "0";
}
setTimeout(showMessage, 2000);//mostrar el mensaje dsp de 2seg
setTimeout(hideMessage, 7000);//ocultar el mensaje dsp de 7seg


