

// Use bind to borrow methos from another object

const kibria = {
    id: 101,
    money: 5000,
    name: 'Js kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'

}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'

}

kibria.treatDey(1000);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);

const normalTreatdey = kibria.treatDey.bind(normalGolam);
normalTreatdey(2000);