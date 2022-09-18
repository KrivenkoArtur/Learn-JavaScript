
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'white'
    },
    makeTest: function() {
        console.log("test")
    }
};

options.makeTest();

// name - КЛЮЧ \\ 'test' - ЗНАЧЕНИЕ

console.log(options.name)

delete options.name; // С помошью этой записи можно удалить структуру из объекта

// console.log(options)

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Своство ${i} имеет значение ${options[key][i]}`)
            counter++
        }
    } else {
        console.log(`Своство ${key} имеет значение ${options[key]}`)
        counter++
    }
}
console.log(counter)

console.log(Object.keys(options).length)
// Object.keys() создает массив, который состоит из ключей объекта