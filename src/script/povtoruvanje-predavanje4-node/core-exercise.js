const path = require("path")

console.log(path.basename('C:/Users/Ordan/Desktop/proba_moja_ordan/src/script/povtoruvanje-predavanje4-node/core-exercies.js'))


const directory = 'C:/Users/Ordan/Desktop/proba_moja_ordan/src/script/povtoruvanje-predavanje4-node'
const fileName = 'ori.js'

const fileObj= {
    dir: directory,
    base: fileName
}

console.log(path.format(fileObj))


const { inspect } = require('util');

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));