
// It selects all elements with the class "button" and assigns them to the buttons variable.

const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

let string = "";


// It converts the buttons NodeList into an array using Array.from.

// It adds a click event listener to each button in the array.



// For any other button, it appends the clicked button's innerHTML to the string and updates the input value.

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{


        // If the button is "=", it evaluates the string, assigns the result back to string, and updates the input value.

if(e.target.innerHTML == '='){
string = eval(string);
input.value = string;

}

// If the button is "AC", it clears the string and updates the input value.

else if(e.target.innerHTML == "AC"){
    string = ""
    input.value = string;

}

// If the button is "DEL", it removes the last character from the string and updates the input value.

else if(e.target.innerHTML == "DEL"){
    string = string.substring(0, string.length-1);
    input.value = string;
}


// Inside the event listener, it checks the clicked button's innerHTML.

else{
    string += e.target.innerHTML;
    input.value = string;

}
    })
 })

// End this code was efficiently handles button clicks, performs 
// calculations, and updates the displayed result in the iput box.


