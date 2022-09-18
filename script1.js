// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'white'
//     },
//     makeTest: function() {
//         console.log("test")
//     }
// };

// // Деструктуризация:

// const {border, bg} = options.colors;

// console.log(border);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (family.length === 0) {
//         return 'Семья пуста'
//     };
//     let str = arr.join(' ');
//     console.log(`Семья состоит из: ${str}`);
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) != 'string') {
//         return 'Ошибка!'
//     };
//     let arr = str.split('');
//     let arrReverse = arr.reverse();
//     return arrReverse.join('');
// }

// reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const main = baseCurrencies.concat(additionalCurrencies);
    console.log(main);
}

availableCurr(baseCurrencies, additionalCurrencies)