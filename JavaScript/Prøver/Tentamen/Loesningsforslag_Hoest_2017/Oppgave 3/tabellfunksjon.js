// Denne funksjonen lager en tabell fra en array med objekter.
// Det første argumentet er et HTML-element der tabellen skal plasseres.
// Det andre argumentet er en array med overskrifter.
// Det tredje argumentet er en array med objekter.
function lagTabell(tilEl, overskrifter, objArr) {

  // Først lager vi et table-element og et tbody-element.
  var tabellEl = document.createElement("table");
  var tbodyEl = document.createElement("tbody");

  // Lager en løkke som teller fra -1 til lengden til arrayen
  // med objektene. Vi starter på -1 fordi vi ønsker å lage en
  // rad med overskrifter først. Deretter ønsker vi å legge til
  // alle ojektene (som starter på indeks 0, verdien vi får etter -1).
  for (var i = -1; i < objArr.length; i++) {
    // Lager et tr-element
    var trEl = document.createElement("tr");

    // Hvis i er -1 skal vi legge til overskriftsraden
    if (i == -1) {
      // Går gjennom overskriftsarrayen
      for (var j = 0; j < overskrifter.length; j++) {
        // Lager et th-element
        var thEl = document.createElement("th");
        // Legger til en overskrift som tekst i th-elementet
        thEl.innerHTML = overskrifter[j];
        // Legger til th-elementet i tr-elementet
        trEl.appendChild(thEl);
      }
    // Hvis i ikke er -1, altså (0, 1, 2, 3, ... osv.)
    // skal vi legge til verdiene i objektene
    } else {
      // Går gjennom egenskapen i objekt nummer i
      for (var egenskap in objArr[i]) {
        // Lager et td-element
        var tdEl = document.createElement("td");
        // Legger til verdien i gjeldende egenskap i td-elementet
        tdEl.innerHTML = objArr[i][egenskap];
        // Legger til td-elementet i tr-elementet
        trEl.appendChild(tdEl);
      }
    }

    // Legger til tr-elementet i tbody-elementet
    tbodyEl.appendChild(trEl);
  }

  // Legger til tboy-elementet i tabell-elementet
  tabellEl.appendChild(tbodyEl);
  // Legger til tabell-elementet i elementet
  // vi angir når vi bruker funksjonen
  tilEl.appendChild(tabellEl);
}
