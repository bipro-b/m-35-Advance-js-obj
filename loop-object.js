

// Loop thrgough an object using in, for, of object entries 

const bottles = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}

/*
 for(const bottle of bottles){} // it is for array
 for(const bottles in bottles){} // object

*/

for (const bottle in bottles) {
    //console.log(bottle, bottles[bottle]);
}

const keys = Object.keys(bottles);
//console.log(keys);   [ ]

for (const prop of keys) {
    //console.log(prop, bottles[prop])
}

const entries = Object.entries(bottles);
// console.log(entries);
// const[key,values] =['color','yellow'];

for (const [key, value] of Object.entries(bottles)) {
    console.log(key, value);
}

