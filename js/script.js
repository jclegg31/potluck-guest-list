// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");


//add an EventListener for addGuestButton and listen
//for a click event

addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;
    
    //test if the guest variable is empty
    if (guest !== "") {
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
} );

const clearInput = function () {
    guestInput.value = "";
};

//add guests to the list
const addToList = function(guest){
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

//Limit the number of invites to 8
const updateGuestCount = function(){
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8){
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

//Select Elements & Loop Through the Array
const assignItems = function(){
    const potluckItems = 
        ["Melon Skewers", 
         "Bruschetta",
         "Nori Rolls",
         "Caprese Skewers",
         "Stuffed Peppadews",
         "Tomato Tart",
         "Zoodles with Tomato and Corn",
         "Big Sandwich",
         "Couscous Salad",
         "Chilled Cucumber Noodles",
         "Lemon Cream Icebox Cake",
         "No Bake Strawberry Icebox Cake"];

    const allGuests = document.querySelectorAll(".guest-list li");

    //loop to loop over the allGuests array which is a list of the 8 guests created
    for (let guest of allGuests){
        //Generate a number between 0 and the length 
        //of potluckItems to select a random element from the array
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        //index to pick out a dish for each guest (it's random from above)
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        //creating a new list item to show what each guest is bringing
        const listItem = document.createElement("li");
        //using .innerText to access name inside the li element or else you'd just get the actual li element instead
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        //will prevent assigning duplicate items by removing them as they are assigned
        potluckItems.splice(randomPotluckIndex, 1);
    }
};

//Add Event Listener & Update PotluckItems Array
assignButton.addEventListener("click", function(){
    assignItems();
    assignButton.disabled = true;
});