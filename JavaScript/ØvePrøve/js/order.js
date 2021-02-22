const firstName = document.getElementById("firstName");
const surName = document.getElementById("surName");
const phoneNumber = document.getElementById("phoneNumber");
const numberOfPeople = document.getElementById("numberOfPeople");
const courses = document.querySelectorAll(".rett");
const output = document.getElementById("output");

coursePrices = [{
        name: "sjømatSpesial",
        price: 625,
    },
    {
        name: "skalldyrsaften",
        price: 735,
    },
    {
        name: "juicybeef",
        price: 645,
    },
    {
        name: "vegetarian",
        price: 495,
    }
]


const newOrder = () => {
    if (!firstName.value == "" && !surName.value == "" && !phoneNumber.value == "" && !numberOfPeople.value == "") new FoodOrder(firstName.value, surName.value, phoneNumber.value, numberOfPeople.value).sendReceipt();
    else output.innerHTML = "Vennligst fyll inn alle nødvendige felter!";
}