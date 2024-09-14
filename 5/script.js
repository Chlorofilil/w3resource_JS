function animate_string() 
{
    let element = document.getElementById("text");
    let textNode = element.childNodes[0]; 
    let text = textNode.data;
    let stopnumber = 0;
    
let intervalrun = setInterval(function () {
    
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
    stopnumber++;
    if(stopnumber === text.length){
        clearInterval(intervalrun)
    }
}, 300);
}

