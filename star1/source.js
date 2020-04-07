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
    expenses: {},
    optionalExpenses:{},
    chooseExpenses:function(){
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
    },
    detectDayBudget:function(){
        alert("budget\n" + (appData.money/30).toFixed());
   },
   detectLevel:function(){
    if(appData.money/30 < 100){
        console.log("minimal level");
    }else if(appData.money/30 > 100 && appData.money/30 < 2000){
        console.log("averedge level");
    }else if(appData.money/30 > 2000){
        console.log("high level");
    }else{
        console.log("error");
    }
    },
    ceckSavings:function(){
        if(appData.sevings == true){
            let save = +prompt("how many accumulated money"),
              percent = +prompt("how many percent");
    
            appData.monthIncome = save/100/12 + percent;
            alert("income in month\n" + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        for(let i = 0; i < 1;i++){
           let item = prompt("what will bring","");
           if(typeof(item) === 'string' && item != null && item != ''){
           appData.income = item.split(', ');
           appData.income.push(prompt("maybe?"));
           appData.income.sort();
           appData.income.forEach(function(item, i , arr){
               i = i+1;
               console.log(i+' '+ item)
           })
           }else{
               i = i - 1;
           }
        }
    },
    cooseOptExpenses:function(){
        let i;
        for(i = 1;i < 4;i++){
            appData.optionalExpenses[i] = prompt("rasohod na kurag");
        }
    }
};
console.log("us program have this data");
for(var key in appData){
    console.log(key + " ",appData[key]);
};