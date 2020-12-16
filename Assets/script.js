//query selectors

const mainCont = document.querySelector("#main-cont");
const submitBtn = document.querySelector("#submitBtn");
const switchDiv = document.querySelector(".switch");

//global variables

let switchOff = true;
let loading = false;

// handlers
const loginBtnHandler = event => {
    event.preventDefault();

    if (loading){
        return
    }

    loading = true;

    const form = document.querySelector("#main-form");
    const rememberPasswordEl = document.querySelector(".remember-password");
    const labels = document.querySelectorAll(".input-label");
    const inputs = document.querySelectorAll(".user-input");
    const links = document.querySelector("a");

    //changing styling of elements during load state

    const elementsToFade = [];
    elementsToFade.push(...labels, ...inputs, links, rememberPasswordEl);

    elementsToFade.forEach(elem => elem.style.opacity = "0.2")


    submitBtn.style.backgroundColor = "#f7f8fd"
    submitBtn.style.border = "2px solid #cacee9";
    submitBtn.style.boxShadow = "0px 0px 0px 0px black";
    submitBtn.style.color = "#7653f3";


    //creating the animations
    var loadingEl = document.createElement("div");
    loadingEl.setAttribute("id", "loading");
    loadingEl.style.color = "#7653f3";
    mainCont.appendChild(loadingEl);
    loadingAnimFunc();

    submitBtn.textContent = "";
    var textEl = document.createElement("div");
    textEl.setAttribute("id", "btnText");
    textEl.innerHTML = "Logging in"

    var dotsEl = document.createElement("div");
    dotsEl.setAttribute("id", "dots");

    submitBtn.appendChild(textEl);
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


        
    }, 5000)
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