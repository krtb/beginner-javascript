// select all buttons
const cardButtons = document.querySelectorAll('.card button');

// handler callback function on card button click
function handleClick() {
    console.log('clicked it');
}


// loop over buttons, listen for a click on each of them
cardButtons.forEach((butt)=> {
    button.addEventListener('click', handleClick)
})