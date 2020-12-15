//query selectors

var submitBtn = document.querySelector("#submitBtn");
var switchDiv = document.querySelector(".switch");

//global variables

var switchOff = true

// handlers
const loginBtnHandler = event => {
    event.preventDefault();
    console.log('submit button was clicked')
}


const toggleBtnHandler = () => {
    var circleDiv = document.querySelector(".circle");
    if (switchOff) {
        switchDiv.style.backgroundColor = "#7653f3";
        var marginLeft = 5;
        var animation = setInterval(function(){
            marginLeft+= 1;
            circleDiv.style.marginLeft = marginLeft + "%";
            if (marginLeft === 55){
                clearInterval(animation)
            }
        }, 1)
        switchOff = false;
    } else{
        switchDiv.style.backgroundColor = "#cacee9";
        var marginLeft = 50;
        var animation = setInterval(function(){
            marginLeft-= 1;
            circleDiv.style.marginLeft = marginLeft + "%";
            if (marginLeft === 5){
                clearInterval(animation)
            }
        }, 1)
        switchOff = true;
    }
    
}


//click listeners
submitBtn.addEventListener("click", loginBtnHandler);
switchDiv.addEventListener("click", toggleBtnHandler)