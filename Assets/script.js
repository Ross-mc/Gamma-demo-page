//query selectors

const submitBtn = document.querySelector("#submitBtn");
const switchDiv = document.querySelector(".switch");

//global variables

let switchOff = true

// handlers
const loginBtnHandler = event => {
    event.preventDefault();
    const form = document.querySelector("#main-form");
    const rememberPasswordEl = document.querySelector(".remember-password")

    setTimeout(function(){
        form.style.display = 'none';
        rememberPasswordEl.style.display = "none";

        const closeDiv = document.createElement("div");
        closeDiv.className = "close-div";

        const h1El = document.createElement("h1");
        h1El.className = "purple-text header";
        h1El.textContent = "You are now logged in";
        closeDiv.appendChild(h1El);

        const paraEl = document.createElement("p")
        paraEl.className = "desc";
        paraEl.textContent = "Great Stuff";
        closeDiv.appendChild(paraEl)

        const sidebar = document.querySelector(".sidebar");
        sidebar.appendChild(closeDiv, paraEl);

        
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