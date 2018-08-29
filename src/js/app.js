setTimeout(function hide() {
  $('#pantallaUno').hide('fast');
  document.getElementById('contenedorPortafolioGeneral').style.display = 'block';
}, 3500);


function aProyectos() {
  location.href = "#contenedorProyectos";
}

function aMi() {
  location.href = "#contenedorAboutMe";
}