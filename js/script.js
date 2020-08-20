"use strict";

//if (0) {
//  console.log('Ok');
//} else {
//    console.log('Error'); 
//}

//const num = +'49';

//if (num < 49 ) {
//    console.log('Error');  
//} else if (num > 100) {
//    console.log('So much'); 
//} else {
//    console.log('Ok!'); 
//}

//тернарный оператор

//(num === 50) ? console.log('Ok!') : console.log('Error');

//switch (num) {
//    case 49:
//        console.log('Error');
//        break;
//    case 100:
//        console.log('Error');
//        break;
//    case 50:
//        console.log('Ok');
//        break;
//    default:
//        console.log('No? no...');
//        break;
//            
//}

//var num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}
//while (num <= 56);


//++ -- это инктрименты
//for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//        //break;
//        continue;
//    }
//    console.log(i);
//}

//const fruit = 'Some fruit';
//console.log(fruit.indexOf('f'));
//
//const logg = "Hello world";
//console.log(logg.slice(6, 11));
//console.log(logg.slice(3));
//console.log(logg.slice(-9, -1));
//
//console.log(logg.substring(5, 8));
//
//console.log(logg.substr(6, 3));
//
//const num = 12.2;
//console.log(Math.round(num));
//
//const test = '12.2px';
//console.log(parseInt(test));
//console.log(parseFloat(test));





//                              КОЛБЭКИ
//function first () {
//    // Do something
//    setTimeout(function() {
//        console.log(1);
//    }, 1500);
//}
//
//function second () {
//    console.log(2);
//}
//
//first();
//second();
//
//function learnJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
//}
//
//function done () {
//    setTimeout(function() {
//    console.log('Я прошел этот урок!');
//    }, 1500);
//}
//
//learnJS('JavaScript', done);









//                             Объекты, деструктуризация объектов


//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    },
//    makeTest: function () {
//        console.log('Test');
//    }
//};
//
//options.makeTest();

//console.log(options.name);
//console.log(options.colors.border);

//delete options.name;

//console.log(options);

//et counter = 0;
//
//or (let key in options) {
//   counter++;
//   if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//           console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       }
//   } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
//   console.log(counter);
//

//console.log(Object.keys(options).length);

//                                               ДЕСТРУКТУРИЗАЦИЯ

//const {border, bg} = options.colors;
//console.log(border);
