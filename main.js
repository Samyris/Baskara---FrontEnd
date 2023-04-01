let botaoResolveEl = document.querySelector("#botaoResolve");
botaoResolveEl.addEventListener("click", calculaDiscriminante);

function calculaDiscriminante() {
  let coeficienteA = document.querySelector("#coeficiente-a").value;
  let coeficienteB = document.querySelector("#coeficiente-b").value;
  let coeficienteC = document.querySelector("#coeficiente-c").value;

  if (coeficienteA == 0) {
    window.alert("Essa função não é do 2º grau");
    return;
  } else {
    let discriminante = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;
    document.getElementById("resultado-delta").value = discriminante;

    if (discriminante >= 0) {
      let valorX1 =
        -coeficienteB + Math.sqrt(discriminante) / (2 * coeficienteA);
      document.getElementById("resultado-x1").value = valorX1;
      let valorX2 =
        -coeficienteB - Math.sqrt(discriminante) / (2 * coeficienteA);
      document.getElementById("resultado-x2").value = valorX2;
    }
    if (discriminante < 0) {
      document.getElementById("resultado-x1").value = "";
      document.getElementById("resultado-x2").value = "";
    }
  }
}
