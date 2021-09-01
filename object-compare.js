
// advanced Compare objects , referntial integrity

const first = { a: 1, b: 2 };
const second = { a: 'g', b: 2 };
// if (first === second) {
//     // console.log('Equal');
// }
// else
//     //console.log('Not Equal');

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
        return true;
    }
}
console.log(compareObjects(first, second));


