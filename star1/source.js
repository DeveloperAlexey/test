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


for (let i = 0; i < 2; i++){
     let a = +prompt("stat rashod mesyac","eat"),
         b = +prompt("skolko?","200");

     if ((typeof(a))==='string' && (typeof(a))!= null && (typeof(b))!= null
          && a != '' && b != '' && a.length < 50){
              console.log("done");
              appData.expenses[a] = b;
};
};
    

alert("budget\n" + appData.money/30)

if(appData.money/30 < 100){
    console.log("minimal level");
}else if(appData.money/30 > 100 && appData.money/30 < 2000){
    console.log("averedge level");
}else if(appData.money/30 > 2000){
    console.log("high level");
}else{
    console.log("error");
}




