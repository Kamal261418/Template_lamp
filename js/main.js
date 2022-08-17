var body = document.getElementById("demo");//body
var img = document.getElementById("image");//img
var turnOnOffElement = document.getElementById("turnOnOff");//turn on



function turnOn()
{
    body.style.backgroundColor="red";
    img.src="images/pic_bulbon.gif";
    turnOnOffElement.innerHTML="Turn off";
   
    
    
}

function turnOff()
{
    body.style.backgroundColor="yellow";
    img.src="images/pic_bulboff.gif";
    turnOnOffElement.innerHTML="Turn on";
}

function turnOnOff()
{
    if(turnOnOffElement.innerHTML=="Turn off")
    {
        turnOff();
       
    }
    else
    {
        turnOn();
       
    }
    
}


