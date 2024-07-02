const allLinkHover = {
    navbarLinks: [...document.querySelectorAll(`.navbar__link`)]
}
const getLengthText = (text, fontsize) => text.length * fontsize * 0.2645833333333; 

allLinkHover.navbarLinks.forEach(i => {
    if (allLinkHover.navbarLinks[0].innerHTML == i.innerHTML) {   
        i.style.setProperty(`--before-width`, `${getLengthText(i.innerHTML, 18) * 3}px`)
    }
    else{
        i.style.setProperty(`--before-width`, `${getLengthText(i.innerHTML, 18) * 2.4}px`)
    }
});

document.querySelectorAll('#date-today').forEach(i => i.valueAsDate = new Date())

document.querySelectorAll(`.rent__content-dropdown-item`).forEach(i => {
    i.addEventListener('click', j => {
        const dropdownButton = document.querySelector(`.rent__content-dropdown-button`)
        dropdownButton.innerHTML = i.innerHTML
    });
});