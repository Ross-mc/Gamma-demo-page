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

        switchOff = false;
    } else{
        switchDiv.style.backgroundColor = "#cacee9";
        switchOff = true;
    }
    
}


//click listeners
submitBtn.addEventListener("click", loginBtnHandler);
switchDiv.addEventListener("click", toggleBtnHandler)