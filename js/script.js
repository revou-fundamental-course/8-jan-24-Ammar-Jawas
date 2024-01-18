function calculateButton() {
  const perkalian = document.getElementById("perkalian").value;

  let l = perkalian * perkalian;
  let k = 4 * perkalian;
  document.getElementById("hasil").innerHTML = l;
  document.getElementById("hasilK").innerHTML = k;
}

function resetButton() {
  document.getElementById("perkalian").value = "";
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("hasilK").innerHTML = "";
}
