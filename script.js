let comp = ["rock", "paper", "scissors"];
let count=0;
let countcomp=0;
let round=1;
alert("Welcome");
let person = prompt("Please enter your name:");
document.getElementById("info").innerHTML = person;
document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;
document.getElementById("round").innerHTML = "Round: " + round;
document.getElementById("disp").innerHTML = "Rock, Paper or Scissors?";


function resetGame(){
    	count=0;
    	countcomp=0;
      round=1;
    	document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;
      document.getElementById("round").innerHTML = "Round: " + round;
      document.getElementById(0).style.pointerEvents = 'auto';
      document.getElementById(1).style.pointerEvents = 'auto';
      document.getElementById(2).style.pointerEvents = 'auto';
      document.getElementById("disp").innerHTML = "Rock, Paper or Scissors?";
		    }


function game(x){
  	if(x==0){
    		document.getElementById(x).className = "progress";
		}
  	else if(x==1)
		{
		document.getElementById(x).className = "progress";
		}
  	else    {
		document.getElementById(x).className = "progress";
		}
    	y = Math.floor(Math.random() * 3);
  	if(y==0){
		setTimeout(function() {document.getElementById(y+10).className = "progressComp";},50);
		}
  	else if(y==1){
		setTimeout(function(){document.getElementById(y+10).className = "progressComp";},50);
		}
  	else	{setTimeout(function(){document.getElementById(y+10).className = "progressComp";},50);
		}
    	setTimeout(function(){if((x==0 && y==2)||(x==1 && y==0)||(x==2 && y==1))
				{count++;
         			document.getElementById("disp").innerHTML = "Damn! You won.";
        			round++;}
    			else if(x==y) 
      				{ document.getElementById("disp").innerHTML = "Ahh, it's a tie.";
      				round++;}
    			else    {
				countcomp++;
       				document.getElementById("disp").innerHTML = "Hehe, You Lost!";
        			round++;}
			     },1500);
		setTimeout(function(){document.getElementById(x).className = "imgL";},2000);
		setTimeout(function(){document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;
    if(round!=6){
    document.getElementById("round").innerHTML = "Round: " + round;}},1750);
  
		setTimeout(function(){document.getElementById("disp").innerHTML = "Rock, Paper or Scissors?";},2599);
		setTimeout(function() {document.getElementById(y+10).className = "imgR";
		document.getElementById(y+10).className = "imgR";
		document.getElementById(y+10).className = "imgR";},2000);
    
if(round==5)
      {  
if(count==countcomp){
		setTimeout(function() {document.getElementById("disp").innerHTML = "TIE! Seems like we're equals";},2600);
		}
  	else if(count>countcomp){
		setTimeout(function(){document.getElementById("disp").innerHTML = "Congratulations! You're better than a poorly designed bot.";},2600);
		}
  	else	{setTimeout(function(){document.getElementById("disp").innerHTML = "You just lost to a computer, Nice.";},2600);
		}
    setTimeout(function(){document.getElementById("disp").innerHTML = "To play again, please press RESET";},5000);
    document.getElementById(0).style.pointerEvents = 'none';
    document.getElementById(1).style.pointerEvents = 'none';
    document.getElementById(2).style.pointerEvents = 'none';
    
     }

		}



function showImage(imageId){
    	document.getElementById(imageId).style.display = 'inline';                             
			    }


function hideImage(imageId){ 
	document.getElementById(imageId).style.display = 'none';	
			    }
