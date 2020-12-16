//query selectors

const mainCont = document.querySelector("#main-cont");
const submitBtn = document.querySelector("#submitBtn");
const switchDiv = document.querySelector(".switch");

//global variables

let switchOff = true

// handlers
const loginBtnHandler = event => {
    event.preventDefault();
    const form = document.querySelector("#main-form");
    const rememberPasswordEl = document.querySelector(".remember-password");

    //changing styling of elements during load state
    form.style.opacity = "0.3";
    rememberPasswordEl.style.opacity = "0.3";
    submitBtn.style.backgroundColor = "#f7f8fd"
    submitBtn.style.border = "2px solid #cacee9";
    submitBtn.style.boxShadow = "0px 0px 0px 0px black";
    submitBtn.style.color = "#7653f3";
    submitBtn.style.opacity = "1"

    submitBtn.textContent = "Logging in"

    //creating the animations
    var loadingEl = document.createElement("div");
    loadingEl.setAttribute("id", "loading");
    mainCont.appendChild(loadingEl);
    loadingAnimFunc();

    var dotsEl = document.createElement("span");
    dotsEl.setAttribute("id", "dots");
    submitBtn.appendChild(dotsEl);
    loadingDotsFunc();


    

    setTimeout(function(){
        form.style.display = 'none';
        rememberPasswordEl.style.display = "none";

        const h1El = document.getElementById("main-header")
    
        h1El.textContent = "You are now logged in";

        const paraEl = document.getElementById("main-para")
        paraEl.textContent = "Great Stuff";

        loadingEl.remove();
        dotsEl.remove();


        
    }, 4000)
}


const toggleBtnHandler = () => {
    const circleDiv = document.querySelector(".circle");
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