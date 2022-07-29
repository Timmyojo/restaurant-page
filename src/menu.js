export default function menu() {
    const menuTag = document.createElement('div');
    menuTag.classList.add('menu');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    divContainer.appendChild(menuContent);
    menuTag.appendChild(divContainer);

  
    menuContent.appendChild(createMenu('PoundedYam', 'Yam, Egusi, Fish'));
    menuContent.appendChild(createMenu('Fufu', 'Casava, Egusi, Fish'));
    menuContent.appendChild(createMenu('VegSallad', 'Vegetables, pepper, Fish'));
    menuContent.appendChild(createMenu('Amala', 'Casava, Egusi, Fish'));
    menuContent.appendChild(createMenu('FriedRice', 'Rice, Chicken'));
    menuContent.appendChild(createMenu('Veggies', 'Vegetable, Flour'));

    return menuTag
    
}

function createMenu(name, description) {
    const menuCase = document.createElement('div');
    menuCase.classList.add('menu-case');

    const menuName = document.createElement('h2');
    menuName.textContent = `${name}`;

    const menuDescription = document.createElement('p');
    menuDescription.textContent = `${description}`;


    const menuImg = document.createElement('img');
    menuImg.src = `../src/images/${name.toLowerCase()}.jpg`;
    menuImg.alt = `${name}`;

    menuCase.appendChild(menuImg);
    menuCase.appendChild(menuName);
    menuCase.appendChild(menuDescription);

    return menuCase
    
}

