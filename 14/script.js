filename = "photo.jpg"
function koncovka(subor){
    let vysledok = subor.split('.').pop();
    return vysledok;
}

console.log(koncovka(filename))