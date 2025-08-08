document.querySelector("#btn").addEventListener("click", salva);

function salva() {
  let titolo = document.querySelector(".titolo").value;
  let paragrafo = document.querySelector("#par").value;

  console.log(titolo);
  console.log(paragrafo);

  if (titolo === "" || paragrafo === "") {
    alert("Attenzione: non hai compilato correttamente titolo e paragrafo");
    return;
  }

  // Crea l'articolo
  let article = document.createElement("article");

  let h2 = document.createElement("h2");
  h2.textContent = titolo;

  let p = document.createElement("p");
  p.textContent = paragrafo;

  let data = document.createElement("small");
  let oggi = new Date();
  let opzioni = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  data.textContent = `🗓️ Creato il ${oggi.toLocaleDateString("it-IT", opzioni)}`;

  article.appendChild(h2);
  article.appendChild(p);
  article.appendChild(data);

  // Inserisci l'articolo nella colonna destra
  document.getElementById("articoli").appendChild(article);

  // Scorri automaticamente all'ultimo articolo
  document.getElementById("articoli").scrollTop = document.getElementById("articoli").scrollHeight;

  // Pulisci i campi
  document.querySelector(".titolo").value = "";
  document.getElementById("par").value = "";
}