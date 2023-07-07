var y = Math.floor(Math.random() * 10 + 1);
console.log(y);

playername = localStorage.getItem("playerName");
var guess = 1;

function Submit(){
    var x = document.getElementById("guessField").value;

        if (x == y){
            alert("Congratulations!!! " + playername + " You Guessed it Right in " + guess + " Guess !!!" )
            guess = 1;
        }
        else if (x > y)
        {
            guess++;
            alert( "OOPS!Sorry Try a Smaller Number");
         }
        else 
        {
            guess++;
            alert( "OOPS!Sorry Try a Greater Number");
        }
    
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
    console.log(y);   
}

function Back(){
    window.location = "index.html";
}

