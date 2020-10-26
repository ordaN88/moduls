
const moment = require('moment');
// moment().calendar({
//     sameDay: '[Today]',
//     nextDay: '[Tomorrow]',
//     nextWeek: 'dddd',
//     lastDay: '[Yesterday]',
//     lastWeek: '[Last] dddd',
//     sameElse: 'DD/MM/YYYY'
// });

console.log('moment', moment());
 

// const timezone = require('timezone');

// console.log("timezone", timezone);

  const momentTimezone = require("moment-timezone");
 console.log("momentTimezone",moment().tz("America/New_York").format());

// const dataFns = require ("date-fns");
// console.log("date-fns", dataFns);

// var m = moment.tz("2013-11-18 11:55", "America/Toronto");
// m.format();                     // 2013-11-18T11:55:00-05:00
// m.startOf("day").format();      // 2013-11-18T00:00:00-05:00
// m.tz("Europe/Berlin").format(); // 2013-11-18T06:00:00+01:00
// m.startOf("day").format();


// console.log("m",m);



// const momentTimezone = require("moment-timezone");
//  console.log("momentTimezone",moment().tz('America/New_York').format());

// console.log("momentTimezone",momentTimezone);

// var a = moment.tz("2020-11-18 11:55", "Asia/Taipei");
// var b = moment.tz("2013-11-18 11:55", "America/Toronto");
var newYork;
var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");

console.log("NewYork",newYork);

// a.format(); // 2013-11-18T11:55:00+08:00
// b.format(); // 2013-11-18T11:55:00-05:00

// a.utc().format(); // 2013-11-18T03:55Z
// b.utc().format(); // 2013-11-18T16:55Z

// console.log("a",a);
var jun = moment("2010-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

jun.tz('America/Los_Angeles').format('ha z');  // 5am PDT
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST
console.log("jun",jun);
console.log("dec", dec);

let val;
// val = moment().format('MMMM Do YYYY, h:mm:ss a'); // format dates
// val = moment("20111031", "YYYYMMDD").fromNow(); format dates
//val = moment().format('YYYY [escaped] YYYY'); // format dates 
//val = moment().format('[Leto gospodovo ] 2009'); // mozes da si menjas mesto escaped da neapises neso ti so sakas
// val = moment().startOf('day').fromNow();   // pred kolku saati pocnal denot
//val = moment().startOf('month').fromNow(); // pred kolku dena e pocnat mesecot
// val = moment().startOf('year').fromNow(); // pred kolku meseci pocnala godiata;       
// val = moment().endOf('day').fromNow();          
// val = moment().startOf('hour').fromNow();      

console.log(val);