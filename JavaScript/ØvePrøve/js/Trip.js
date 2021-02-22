class Trip {
    constructor(name, distance, altitude, numberOfDays) {
        this.name = name;
        this.distance = distance;
        this.altitude = altitude;
        this.numberOfDays = numberOfDays;
        this.h = (this.distance * this.altitude) / (this.numberOfDays * 1000);
    }
    show = () => tripsDiv.innerHTML += `<div id="${trips.indexOf(this)}" class="trip" onclick="showInfo(this)">${this.name}</div>`;
    showInfo = () => output.innerHTML = `<p>Antall kilometer: ${this.distance} km</p><p>Antall høydemeter: ${this.altitude}</p><p>Antall dager: ${this.numberOfDays}</p>`;
}