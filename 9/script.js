const dnes = new Date(); 

// // Ziskaný deň v roku
// function getDayOfYear(date) {
//   const january1st = new Date(date.getFullYear(), 0, 1); 
//   const differenceInMilliseconds = date - january1st;
//   return Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000)) + 1;
// }

// const denVRoku = getDayOfYear(dnes);
// console.log(`Dnes je ${denVRoku}. deb v roku.`);

const christmasdate = new Date(dnes.getFullYear(), 11, 24);
const negChristmasDay =  Math.floor((dnes - christmasdate)/ (24 * 60 * 60 * 1000))
let christmasDay = Math.abs(negChristmasDay)

console.log(`Do Vianoc ostáva ešte: ${christmasDay} dni.`)