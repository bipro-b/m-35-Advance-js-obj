

// Difference between bind call and apply

const kibria = {
    id: 101,
    money: 5000,
    name: 'Js kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
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
//call
// kibria.treatDey.call(heroBalam, 500, 100, 50);
// kibria.treatDey.call(heroBalam, 300, 50, 10);

//apply

kibria.treatDey.apply(heroBalam, [500, 300, 50]);
kibria.treatDey.apply(heroBalam, [1000, 500, 100]);

kibria.treatDey.apply(normalGolam, [2000, 200, 100]);


// bind call and apply is used for other object from a function .... when apply is used then array use fro paraemtar passing 