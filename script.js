let comp = ["rock", "paper", "scissors"];
let count=0;
let countcomp=0;
alert("Welcome");
let person = prompt("Please enter your name:");
document.getElementById("info").innerHTML = person;
document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;
document.getElementById("disp").innerHTML = "Rock, Paper or Scissors?";
function resetGame(){
    	count=0;
    	countcomp=0;
    	document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;
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
	setTimeout(function(){document.getElementById("disp").innerHTML = "So you human choose " + comp[x] + " huh...";},250);
	setTimeout(function(){document.getElementById("disp").innerHTML = "I choose " + comp[y] + ".";},2250);
  	if(y==0){
		setTimeout(function() {document.getElementById(y+10).className = "progressComp";},2000);
		}
  	else if(y==1){
		setTimeout(function(){document.getElementById(y+10).className = "progressComp";},2000);
		}
  	else	{setTimeout(function(){document.getElementById(y+10).className = "progressComp";},2000);
		}
    	setTimeout(function(){if((x==0 && y==2)||(x==1 && y==0)||(x==2 && y==1))
				{count++;
         			document.getElementById("disp").innerHTML = "Damn! You won.";
        			}
    			else if(x==y) 
      				{ document.getElementById("disp").innerHTML = "Ahh, it's a tie.";
      				}
    			else    {
				countcomp++;
       				document.getElementById("disp").innerHTML = "Hehe, You Lost!";
        			}
			     },4000);
		setTimeout(function(){document.getElementById(x).className = "imgL";},5500);
		setTimeout(function(){document.getElementById("score").innerHTML = "Score: " + count + " - " + countcomp;},5000);    
		setTimeout(function(){document.getElementById("disp").innerHTML = "Rock, Paper or Scissors?";},5500);
		setTimeout(function() {document.getElementById(y+10).className = "imgR";
		document.getElementById(y+10).className = "imgR";
		document.getElementById(y+10).className = "imgR";},5500);
		}
function showImage(imageId){
    	document.getElementById(imageId).style.display = 'inline';                             
			    }
function hideImage(imageId){ 
	document.getElementById(imageId).style.display = 'none';	
			    }