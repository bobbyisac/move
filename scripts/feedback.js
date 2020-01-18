function showGradeOne()
{
    document.getElementById("rating comment").innerHTML = "Very Poor";
    document.getElementById("reason comment").innerHTML= "What went wrong?";
    document.getElementById("reason").style.display = "block";
} 

function showGradeTwo()
{
    document.getElementById("rating comment").innerHTML = "Poor";
    document.getElementById("reason comment").innerHTML= "What went wrong?";
    document.getElementById("reason").style.display = "block";
} 

function showGradeThree()
{
    document.getElementById("rating comment").innerHTML = "Could be improved";
    document.getElementById("reason comment").innerHTML= "What went wrong?";
    document.getElementById("reason").style.display = "block";
} 

function showGradeFour()
{
    document.getElementById("rating comment").innerHTML = "Met expectations";
    document.getElementById("reason comment").innerHTML= "How could we improve?";
    document.getElementById("reason").style.display = "block";
} 

function showGradeFive()
{
    document.getElementById("rating comment").innerHTML = "Awesome!";
    document.getElementById("remark").style.display = "block";
    document.getElementById("sub").disabled=false;
} 

function change()
{   
    var inputID=document.getElementById("Pm");
    var labelID=document.getElementById("mgr")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function change1()
{
    var inputID=document.getElementById("Cr");
    var labelID=document.getElementById("crew")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function change2()
{
    var inputID=document.getElementById("Quality");
    var labelID=document.getElementById("qty")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function change3()
{
    var inputID=document.getElementById("Speed");
    var labelID=document.getElementById("spd")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function change4()
{
    var inputID=document.getElementById("Pr");
    var labelID=document.getElementById("pc")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function change5()
{
    var inputID=document.getElementById("Ot");
    var labelID=document.getElementById("or")
    if(inputID.checked==false){
        labelID.style.color="white";
        labelID.style.backgroundColor="black";
    }
    else{
        labelID.style.color="black";
        labelID.style.backgroundColor="white";
    }
    document.getElementById("sub").disabled=false;
}

function showReason()
{

}