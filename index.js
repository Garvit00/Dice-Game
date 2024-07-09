function executeAfterRefresh() {
    
    var randomno1= Math.floor(Math.random()*6 +1);
    var randomdiceimage1 = "images/dice" + randomno1 + ".png";

    var randomno2= Math.floor(Math.random()*6 +1);
    var randomdiceimage2 = "images/dice" + randomno2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage1);
    document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);

    if(randomno1>randomno2)
        document.querySelector("h1").innerHTML="Player 1 wins 🚩";   
    else if(randomno1<randomno2)
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    else
        document.querySelector("h1").innerHTML="Draw!!";
}
  
// Check if the session storage flag exists
if (sessionStorage.getItem('isRefreshed')){
    executeAfterRefresh();
}
else{
    // Set the flag for the next load
    sessionStorage.setItem('isRefreshed', 'true');
}
  