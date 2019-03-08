var score;
var goal;
var wins=0;
var losses=0;
var crystals=[0,0,0,0];
var buttons=["c1","c2","c3","c4"];

function populate(){
    for(var i=0;i<crystals.length;i++){
        crystals[i]=Math.floor(Math.random()*12+1);
        document.getElementById(buttons[i]).textContent="?";
    }
    goal=Math.floor(Math.random()*102+19);
    score=0;
    $("#target").text(goal);
    $("#score").text(score);
}
function clicked(index){
    score+=crystals[index];
    $("#score").text(score);
    document.getElementById(buttons[index]).textContent=crystals[index];
    if(score===goal){
        alert("you win!");
        wins++;
        $("#wins").text(wins);
        populate();
    }
    else if(score>goal){
        alert("you lose!");
        losses++;
        $("#losses").text(losses);
        populate();
    }
};
window.onload = function(){
    populate();
}