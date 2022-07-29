export default function footer() {
    const footerTag = document.createElement('footer');
    footerTag.classList.add('footer');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const footerContent = document.createElement('p');
    footerContent.textContent = 'Copyright © 2022. Crafted by Timothy.';

    divContainer.appendChild(footerContent)
    footerTag.appendChild(divContainer);

    return footerTag
}