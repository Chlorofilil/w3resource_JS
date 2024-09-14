for (year = 2014; year <=2050; year++){
    let day = new Date(year, 0, 1);
        if(day.getDay() ===0){
            console.log(`At ${year} there is 1st January at Sunday.`)
        }

}