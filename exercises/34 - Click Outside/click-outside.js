// select all buttons
const cardButtons = document.querySelectorAll('.card button');

// handler callback function on card button click
function handleClick(event) {
    // find currently clicked item
    const button = event.currentTarget;
    // find closest element with class of card
    const card = button.closest('.card');
    
}


// loop over buttons, listen for a click on each of them
cardButtons.forEach((button)=> {
    button.addEventListener('click', handleClick);
});