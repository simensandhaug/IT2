const tripsDiv = document.getElementById("trips");
const output = document.getElementById("output");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const trips = [];

trips.push(new Trip("Jotunheimen Rundt", 75, 4800, 4));
trips.push(new Trip("Havbris på Hvaler", 48, 300, 2));
trips.push(new Trip("Rondanes perler", 64, 2300, 3));

trips.forEach(trip => trip.show());

const showInfo = el => trips[el.id].showInfo();
const showGeneralInfo = () => {
    output.innerHTML = `<table><tbody id="tableInfo"></tbody></table>`;
    document.getElementById("tableInfo").innerHTML = `<th>Tur</th><th>Lengde (i km)</th><th>Antall høydemeter (i meter)</th><th>Antall dager</th><th>H</th>`;
    trips.forEach(trip => {
        document.getElementById("tableInfo").innerHTML += `<td>${trip.name}</td><td>${trip.distance}</td><td>${trip.altitude}</td><td>${trip.numberOfDays}</td><td>${trip.h.toFixed(1)}</td>`;
    });
    output.innerHTML += `* H er et mål for hvor hard en gjennomsnittlig dagsetappe er på hver tur *`;
}

for (let i = 0; i < trips.length; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width / trips.length * i + 30, canvas.height - (trips[i].distance * 5), 60, trips[i].distance * 5 - 30);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(trips[i].distance + "km", canvas.width / trips.length * i + 38, canvas.height - (trips[i].distance * 5) + 20);
    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText(trips[i].name, canvas.width / trips.length * i, canvas.height - 5);
}