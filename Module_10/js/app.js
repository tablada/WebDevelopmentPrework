//grow button
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

//blue button
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

//fade button
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.visibility = "hidden";

});

//reset button
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.visibility = "visible";

});