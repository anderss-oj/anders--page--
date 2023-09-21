window.addEventListener('load', centerViewportOnElement);
const centeredElement = document.getElementById('apartmentPlace');
// const locationElements = document.getElementsByClassName('location');

function centerViewportOnElement() {
    const centeredElement = document.getElementById('apartmentPlace');

    if (centeredElement) {
        const elementRect = centeredElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const scrollPosition = elementRect.top - (windowHeight / 2);
        const scrollWPosition = elementRect.left - (windowWidth / 2);

        window.scrollTo({
            top: scrollPosition,
            left: scrollWPosition,
            behavior: 'smooth'
        });
    }
    console.log('centered');
}

function reCenter() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    }); // resets position to top left

    centerViewportOnElement();
}

function mouseOverNegative (element) {
    element.style.backgroundColor = 'black';
    element.style.color = 'white' 
}

function resetStyle (element) {
    element.style.backgroundColor = '';
    element.style.color = '' 
}

function moveToLocation(idName) {
    const destination = document.getElementById(idName);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });

    if (destination) {
        const elementRect = destination.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const scrollPosition = elementRect.top - (windowHeight / 2);
        const scrollWPosition = elementRect.left - (windowWidth / 2);

        window.scrollTo({
            top: scrollPosition,
            left: scrollWPosition,
            behavior: 'smooth'
        });
    }
    console.log(idName);
}