function solve(count,type,day){

    const prices = {
        Students:{
Friday: 8.45,
Saturday: 9.8,
Sunday: 10.46,
        },
    };
    let sum = 0;

    const cost = prices[type][day];

    sum = count * cost;

    if(type==='Students' && count>=30){
        sum-=sum*0.15;
    }
//console.log(cost);
}
/*let sum = 0;

if(type==='Students'){
    if (day==='Friday') {
        sum = count * 8.45;
    }else if (day === 'Saturday') {
        sum = count * 9.8;
    }else if (day === 'Sunday') {
        sum = count * 10.46;
    }
    if (count>=30) {
        sum-=sum*0.15;
    }
}else if (type==='Business') {
    if (count>=100) {
        count-=10;
    }
    if (day==='Friday') {
        sum = count * 10.90;
    }else if (day === 'Saturday') {
        sum = count * 15.60;
    }else if (day === 'Sunday') {
        sum = count * 16;
    }
}else if (type==='Regular') {

    if (day==='Friday') {
        sum = count * 15;
    }else if (day === 'Saturday') {
        sum = count * 20;
    }else if (day === 'Sunday') {
        sum = count * 22.50;
    }
    if (count>=10 && count<=20) {
        sum-=sum * 0.05;
    }
}

console.log(`Total price: ${sum.toFixed(2)}`);

}*/
solve(30,
    "Students",
    "Sunday");






















