function text_function(){
    const pattern = "[a-z]+[0-9]*@gmail.com"
    var user_input = document.getElementById("email").value;
    if(!user_input.match(pattern)){
        // document.getElementById("error-icon").src = "./images/icon-error.svg"
        document.getElementById("error-message").innerHTML = "Please provide a valid email"
        document.getElementById("email").style.borderColor = "hsl(0, 93%, 68%)"
    }
    
}