'use strict';

let money = prompt("You budget?","1000"),
    time = prompt("data","2000-11-23");

let appData = {
    money: money,
    timeData: time
};
let expenses = {
    oneQstens: prompt("stat rashod mesyac","eat"),
    twoQstens: prompt("skolko?","200")
};
let income = [];

let sevings = false;
alert("budget\n" + appData.money/30)

console.log(appData.money);

