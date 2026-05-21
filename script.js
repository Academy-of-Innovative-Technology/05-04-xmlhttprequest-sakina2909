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
  firstName: firstNameInput.value,
  favoriteFood: favoriteFoodInput.value,
};

console.log(person);

const personString = JSON.stringify(person);

console.log(personString)



xhttp.open("POST", "http://100.66.169.122:3000/chat", true);
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.send(JSON.stringify(person));

});
    
    
 
