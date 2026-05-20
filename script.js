    const firstNameInput = document.querySelector("#firstName");
    const favoriteFoodInput = document.querySelector("#favoriteFood");
    const submitButton = document.querySelector("#submitBtn");

    
    
    submitButton.addEventListener("click", function () {
      console.log("First Name:", firstNameInput.value);
      console.log("Favorite Food:", favoriteFoodInput.value);

    let xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(xhttp.responseText));
        }
    }

    const person = {
  firstName: "Sakina",
  favoriteFood: "Jerk chicken & rice and peas"
};

console.log(person);

const personString = JSON.stringify(person);

console.log(personString);
const person = {
  firstName: "John",
  favoriteFood: "Pizza"
};

console.log(person);
console.log(personString);

xhttp.open("GET", "http://100.66.169.151. ", true);
xhttp.setRequestHeader("Content-Type", "application/json");

});
    
    
 
