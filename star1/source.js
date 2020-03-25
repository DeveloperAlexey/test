'use strict';

let money = prompt("You budget?","1000"),
    time = prompt("data","2000-11-23");

let appData = {
    money: money,
    timeData: time,
    income: [],
    sevings: false,
    expenses: {}


};
let a1 = prompt("stat rashod mesyac","eat"),
    a2 = prompt("skolko?","200"),
    a3 = prompt("stat rashod mesyac","eat"),
    a4 = prompt("skolko?","200");

    appData.expenses.a1 = a2;
    appData.expenses.a2 = a3;

alert("budget\n" + appData.money/30)

console.log(appData.money);
