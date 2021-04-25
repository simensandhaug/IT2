const age = document.querySelector("#age");
const dayselect = document.querySelector("#dayselect");
const output = document.querySelector("#output");

for (let i = 1; i < 8; i++) dayselect.innerHTML += `<option value="${i}">${i}</option>`;


const handleOrder = () => {
    let message;
    if (age.value > 12) {
        const price = (dayselect.selectedIndex + 1) * 200;
        if (price > 1000) message = `Du har bestilt heiskort til VOKSEN for 1000kr med avslag ${price-1000}kr`;
        else  message = `Du har bestilt heiskort til VOKSEN for ${price}kr`;
    }
    if(age.value <= 12) {
        const price = (dayselect.selectedIndex + 1) * 100;
        if(price > 500) message = `Du har bestilt heiskort til BARN for 500kr med avslag ${price-500}`;
        else message = `Du har bestilt heiskort til BARN for ${price}kr`;
    }
    output.innerHTML = message;
}


age.addEventListener("change", handleOrder);
dayselect.addEventListener("change", handleOrder);