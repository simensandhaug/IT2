class Area {
    constructor(object) {
        this.name = object.name;
        this.years = object.years;
        this.dataTable = //Data som blir vist når man velger området
            `<div>
        <table>
        <tr><th>Område</th><th>1950</th><th>1960</th><th>1975</th><th>1990</th><th>2000</th><th>2015</th></tr>
        <tr><td>${this.name}</td><td>${this.years[0] * 1000}</td><td>${this.years[1] * 1000}</td><td>${this.years[2] * 1000}</td><td>${this.years[3] * 1000}</td><td>${this.years[4] * 1000}</td><td>${this.years[5] * 1000}</td></tr>
        </table>
        </div>`
    }
    showData = () => { //En funksjon for å vise dataen
        info.innerHTML = this.dataTable;
        let dataToShow = [{
                description: "1950",
                value: this.years[0] * 1000
            },
            {
                description: "1960",
                value: this.years[1] * 1000
            },
            {
                description: "1975",
                value: this.years[2] * 1000
            },
            {
                description: "1990",
                value: this.years[3] * 1000
            },
            {
                description: "2000",
                value: this.years[4] * 1000
            },
            {
                description: "2015",
                value: this.years[5] * 1000
            },
        ];
        drawDiagram(dataToShow);
    }
    showGrowth = () => { //En funksjon som regner ut og skriver økning mellom to valgte år samt økning i prosent
        let from = this.years[yearFromInput.selectedIndex];
        let to = this.years[yearFromInput.selectedIndex + yearToInput.selectedIndex + 1];
        let integerValue = to - from;
        let percentageValue = integerValue / from * 100;
        outputEl.innerHTML = `Fra året ${yearFromInput.item(yearFromInput.selectedIndex).innerHTML} til året ${yearToInput.item(yearToInput.selectedIndex).innerHTML} var det en økning på ${integerValue * 1000} besøkende, noe som er en økning på ${Math.round(percentageValue)}%`;
    }
}