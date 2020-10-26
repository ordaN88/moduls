const numbers = require('./numbers')

  console.log("numbers", numbers) //vidi kako izgled vaka deka ti go dava cel objekt a sea vidi

console.log(numbers.numbers)
const moment= require('moment');
//  console.log("moment", moment());

const nesto = moment().calendar({
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
});

console.log("moment", nesto);

// var moment = require('moment'); // require
// moment().format()
// console.log(moment);


