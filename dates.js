const chalk = require('chalk');
console.log(chalk.yellow('Hello Steve!'));

let moment = require('moment');

//////
console.log('It is ' + chalk.blue(moment().format('YYYY MM DD, h:mm:ss a')));

console.log('It is the ' + chalk.magenta(moment().format('DDDo')) + ' day of the year');

let hours = (moment().format('H')*3600);
let minutes = (moment().format('m')*60);
let seconds = (moment().format('s')*1);

let totalDaySeconds = hours + minutes + seconds;

console.log('it is ' + chalk.cyan(totalDaySeconds) + ' seconds in the day');

function dayLightSavings (answer){
  let times = moment().isDST();
  if (times === true){
    times = "is"
  }else{
    times = "is not"
  }
  return times
}
let dayLightSaving = "It " + chalk.green(dayLightSavings()) + "during daylight savings time."
console.log(dayLightSaving);

//////////////////////////////////////////LEAP YEAR
function leapYear (answer){
  let leap = moment().isDST();
  if (leap === false){
    leap = "is"
  }else{
    leap = "is not"
  }
  return leap
}
let leap = "It " + chalk.red(leapYear()) + " a leap year."
console.log(leap);
