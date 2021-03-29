function displayResult(){
    var x;
    if(window.event) x=event.keyCode;
    else if (event.which) x=event.which;
    var keychar=String.fromCharCode(x);
    alter("你按了"+keychar+"吧？")；
}