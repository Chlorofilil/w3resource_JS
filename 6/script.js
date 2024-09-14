function priestupnýrok(year){
    return (year % 100 ===0) ? (year % 400 ===0) : (year % 4 ===0);
}

console.log(priestupnýrok(2016));
console.log(priestupnýrok(2000));
console.log(priestupnýrok(1700));
console.log(priestupnýrok(1800));
console.log(priestupnýrok(100));
console.log(priestupnýrok(2400));
console.log(priestupnýrok(1836));
