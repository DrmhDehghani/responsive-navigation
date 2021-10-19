function navfunc (){
    var x = document.getElementById("my-nav")
    if (x.className === "nav" ){
        x.className += " responsiv"
    }
    else{
        x.className = "nav"
    }
    }