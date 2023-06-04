
// display content od each key is pressed

function displayContent(content){
    calcScreen.value += content
}

function answer(){
    calcScreen.value = eval(calcScreen.value)
}

function deleteLast(){
    calcScreen.value = calcScreen.value.slice(0,-1)
}

function allclear(){
    calcScreen.value=""
}