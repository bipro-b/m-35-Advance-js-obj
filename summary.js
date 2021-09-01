

// Module summary

const pen = {
    brand: 'econo',
    price: 5,
    writePoem: function (food) {
        console.log(food);
    }
};

// property 

const keys = Object.keys(pen);  // property
const values = Object.values(pen); // value

for (const key in pen) {
    console.log(pen[key]);
}





