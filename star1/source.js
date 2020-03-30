'use strict';

let money, time;

function start(){
     money = prompt("You budget?","1000");
     time = prompt("data","2000-11-23");
     while(isNaN(money) || money == "" || money == null){
         money = prompt("You budget?","1000");

     }
}

start();


let appData = {
    money: money,
    timeData: time,
    income: [],
    sevings: true,
    expenses: {}


};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("stat rashod mesyac","eat"),
            b = prompt("skolko?","200");
   
        if ((typeof(a))==='string' && (typeof(a))!= null && (typeof(b))!= null
           && a != '' && b != '' && a.length < 50){
                 console.log("done");
                 appData.expenses[a] = b;
        }else{
            i = i - 1;
        }
    }
}

chooseExpenses();

alert("budget\n" + (appData.money/30).toFixed());

if(appData.money/30 < 100){
    console.log("minimal level");
}else if(appData.money/30 > 100 && appData.money/30 < 2000){
    console.log("averedge level");
}else if(appData.money/30 > 2000){
    console.log("high level");
}else{
    console.log("error");
}

function checkSavings(){
    if(appData.sevings == true){
        let save = +prompt("how many accumulated money"),
            percent = +prompt("how many percent");

        appData.monthIncome = save/100/12 + percent;
        alert("income in month\n" + appData.monthIncome);
    }
}
checkSavings();