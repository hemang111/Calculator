let integer = document.getElementById('integer');
let buttons = document.querySelectorAll('button');
let body = document.body;
let string = ' ';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let audiio = document.getElementById("play");
                console.log(audiio);
                audiio.currentTime = 0
                audiio.play();
               ;
        if (b.target.innerText == '=') {
            
             if(string == " "){
                string = '0';
                integer.value = string;
            }
            else if(string == "0"){
                string = '0';
                integer.value = string; 
            }
            else{
                try {
                    string = String(eval(string));
                    if(string === undefined || string === null){
                        string = '0';

                    }
                    integer.value = string;
                } catch (error) {
                    // Handle error gracefully
                    string = '0';
                    console.error('Invalid expression:', error.message);
                    // Optionally, display an error message to the user
                    integer.value = '0';
                }}
        } else if (b.target.innerText == "AC") {
            string = '0';
            integer.value = string;
        } else if (b.target.id == "back") {
            if(string.length == 1){
                string = '0';
                integer.value = string;
            }
            else{
                
            string = string.substring(0, string.length - 1);
            integer.value = string;
            }
        } else if (b.target.id == "plusMinus") {
           
            try{
            string = String(-eval(string));
            console.log(string);
            if(string == "NaN"){
                string = '0';
                integer.value = string;
            }
    
            integer.value = string;
        }

            catch(error){
                string = "0";
                integer.value = string;
            }
        } else if(b.target.innerText == "x²"){
            string = String(eval(string) * eval(string));
            integer.value = string;
        } 
        else {
            if (string === '0') {
                string = b.target.innerText;
            } else {
                string += b.target.innerText;
            }
          
            integer.value = string;
        }
    });
});

// Keep track of whether the event has already been handled
let eventHandled = false;
body.addEventListener("keydown" , function(e){
    console.log(e.code);
    if (e.key === 'Backspace'){
      
      let btn =  document.getElementById("back");
      let audiio = document.getElementById("play");
                console.log(audiio);
                audiio.play();
      btn.classList.add("sup");
      btn.click();
      console.log(btn);
     }
     if(e.key === "Delete"){
        let audiio = document.getElementById("play");
                console.log(audiio);
                audiio.play();
        let btn =  document.getElementById("AC");
        btn.classList.add("sup");
        btn.click();

     }
      if(e.code === "Space"){
        let audiio = document.getElementById("play");
        console.log(audiio);
        audiio.play();
        console.log(e.key);
        document.getElementsByClassName("clac")[0].click();
        document.getElementsByClassName("clac")[0].classList.add("sup")
        console.log(document.getElementsByClassName("clac")[0]);
    }
})
body.addEventListener("keypress", function (e) {
    console.log(e.key);
    // Check if the event has already been handled
    if (!eventHandled) {
        if (e.key === 'Enter') {
            e.preventDefault();
            let audiio = document.getElementById("play");
                console.log(audiio);
                audiio.play();
            console.log(e.key);
            document.getElementsByClassName("clac")[0].click();
            document.getElementsByClassName("clac")[0].classList.add("sup")
            console.log(document.getElementsByClassName("clac")[0]);
        }
         else {
            let buttoni = document.getElementById(e.key);
            console.log(buttoni);

            if (buttoni) {
                let audiio = document.getElementById("play");
                console.log(audiio);
                audiio.play();
                buttoni.click();
                buttoni.classList.add("sup")
            }
            console.log(e.key);
        }

        // Set eventHandled to true to indicate that the event has been handled
        eventHandled = true;
    }
});

// Reset eventHandled when the key is released
body.addEventListener("keyup", function () {
    eventHandled = false;
    
        buttons.forEach(element => {
            element.classList.remove("sup");
        });
    
    
});
