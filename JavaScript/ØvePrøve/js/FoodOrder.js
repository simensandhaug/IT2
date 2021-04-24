class FoodOrder {
    constructor(firstName, surName, phoneNumber, numberOfPeople) {
        this.firstName = firstName;
        this.surName = surName;
        this.tlf = phoneNumber;
        this.numberOfPeople = numberOfPeople;
    }
    totalSum = () => {
        let sum = 0;
        courses.forEach(course => {
            if (course.checked) coursePrices.forEach(object => {
                if (object.name == course.id) sum += object.price * this.numberOfPeople;
            });
        });
        return sum;
    }
    sendReceipt = () => output.innerHTML = `Takk for bestillingen ${this.firstName} ${this.surName}. Din bestilling er registrert og totalsummen er ${this.totalSum()} kroner.`
}