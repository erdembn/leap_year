let button = document.getElementById("submit");

let year = undefined

function leapYear(){
    year = (document.getElementById('userinput').value);
    let result = document.getElementById("result");
    
    
    if (year === undefined || year === null || year === "" || year === NaN ) {
        
    result.innerHTML ="Please provide a valid number"
}
  
     else if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){

        result.innerHTML = "It's a leap year"
    } 
      else  {
        result.innerHTML = "It's not a leap year"
    }




}

button.addEventListener("click", leapYear)

let input = document.getElementById("userinput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("submit").click();
  }
});