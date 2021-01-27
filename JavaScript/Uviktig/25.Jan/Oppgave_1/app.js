const from = document.getElementById("from");
const to = document.getElementById("to");
const diffOutput = document.getElementById("diffOutput");
const drunkRadio = document.getElementById("drunk");
const speedRadio = document.getElementById("speed");
const barChart = document.getElementById("barChart");
const years = [{
        name: 2002,
        drunk: 9631,
        speed: 9863,
    },
    {
        name: 2003,
        drunk: 8593,
        speed: 12217,
    },
    {
        name: 2004,
        drunk: 8363,
        speed: 14920,
    },
    {
        name: 2005,
        drunk: 8128,
        speed: 14929,
    },
    {
        name: 2006,
        drunk: 8514,
        speed: 15425,
    },
    {
        name: 2007,
        drunk: 8534,
        speed: 18010,
    }
];
const getMax = arr => {
    let max = arr[0];
    arr.forEach(i => {if (i > max) max = i});
    return max;
}
const showChart = id => {
    barChart.innerHTML = ``;
    const chartArr = new Array;
    years.forEach(year => {
        if (id == "drunk") chartArr.push(year.drunk) 
        else chartArr.push(year.speed)
    });
    const max = getMax(chartArr);
    chartArr.forEach(i => {barChart.innerHTML += `<div style="height:${i / max * 100}%"><p>${i}</p></div>`});
}
years.forEach(year => {from.innerHTML += `<option>${year.name}</option>`});
years.forEach(year => {to.innerHTML += `<option>${year.name}</option>`});
document.querySelectorAll("select").forEach(select => {select.addEventListener("change", () => {diffOutput.innerHTML = years[from.selectedIndex].drunk - years[to.selectedIndex].drunk > 0 ? `Positive Development` : `Negative Development`})});
document.querySelectorAll("input[type='radio']").forEach(btn => {btn.addEventListener("click", () => {if (btn.checked) showChart(btn.id)})});