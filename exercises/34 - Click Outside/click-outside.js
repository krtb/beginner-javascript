// select all buttons
const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');

// handler callback function on card button click
function handleClick(event) {
    // find currently clicked item
    const button = event.currentTarget;
    // find closest element with class of card
    // climbs up the nested DOM tree of elements, opposite of querySelector();
    const card = button.closest('.card');
    // grab image source
    const imgSrc = document.querySelector('img').src;
    // grab DATA-SET 
    const description = card.dataset.description;
        
}


// loop over buttons, listen for a click on each of them
cardButtons.forEach((button)=> {
    button.addEventListener('click', handleClick);
});