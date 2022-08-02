import poundoYam from './images/poundedyam.jpg'
import vegSallad from './images/vegsallad.jpg'
import veggies from './images/veggies.jpg'
import amala from './images/amala.jpg'
import friedRice from './images/friedrice.jpg'
import fufu from './images/fufu.jpg'

export default function menu() {
    const menuTag = document.createElement('div');
    menuTag.classList.add('menu');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');


    const menu1Case = document.createElement('div');
    menu1Case.classList.add('menu-case');

    const menu1 = document.createElement('h2');
    menu1.textContent = `Pounded Yam`;

    const menu1Description = document.createElement('p');
    menu1Description.textContent = 'Yam, Egusi, Fish';

    const menu1Img = new Image();
    menu1Img.src = poundoYam;
    menu1Img.alt = 'pounded yam';

    const menu2Case = document.createElement('div');
    menu2Case.classList.add('menu-case');

    const menu2 = document.createElement('h2');
    menu2.textContent = `Vegetable Salad`;

    const menu2Description = document.createElement('p');
    menu2Description.textContent = 'Vegetable, Pepper, Fish';

    const menu2Img = new Image();
    menu2Img.src = vegSallad;
    menu2Img.alt = 'VegSallad';

    const menu3Case = document.createElement('div');
    menu3Case.classList.add('menu-case');

    const menu3 = document.createElement('h2');
    menu3.textContent = `Veggies`;

    const menu3Description = document.createElement('p');
    menu3Description.textContent = 'Vegetable, Flour';

    const menu3Img = new Image();
    menu3Img.src = veggies;
    menu3Img.alt = 'veggies';

    const menu4Case = document.createElement('div');
    menu4Case.classList.add('menu-case');

    const menu4 = document.createElement('h2');
    menu4.textContent = `Amala`;

    const menu4Description = document.createElement('p');
    menu4Description.textContent = 'Casava, Egusi, Fish';

    const menu4Img = new Image();
    menu4Img.src = amala;
    menu4Img.alt = 'Amala';

    const menu5Case = document.createElement('div');
    menu5Case.classList.add('menu-case');

    const menu5 = document.createElement('h2');
    menu5.textContent = `Fried Rice`;

    const menu5Description = document.createElement('p');
    menu5Description.textContent = 'Rice, Chicken';

    const menu5Img = new Image();
    menu5Img.src = friedRice;
    menu5Img.alt = 'Fried Rice';

    const menu6Case = document.createElement('div');
    menu6Case.classList.add('menu-case');

    const menu6 = document.createElement('h2');
    menu6.textContent = `Fufu`;

    const menu6Description = document.createElement('p');
    menu6Description.textContent = 'Casava, Egusi, Fish';

    const menu6Img = new Image();
    menu6Img.src = fufu;
    menu6Img.alt = 'fufu';

    menu1Case.appendChild(menu1Img);
    menu1Case.appendChild(menu1);
    menu1Case.appendChild(menu1Description);

    menu2Case.appendChild(menu2Img);
    menu2Case.appendChild(menu2);
    menu2Case.appendChild(menu2Description);

    menu3Case.appendChild(menu3Img);
    menu3Case.appendChild(menu3);
    menu3Case.appendChild(menu3Description);

    menu4Case.appendChild(menu4Img);
    menu4Case.appendChild(menu4);
    menu4Case.appendChild(menu4Description);

    menu5Case.appendChild(menu5Img);
    menu5Case.appendChild(menu5);
    menu5Case.appendChild(menu5Description);

    menu6Case.appendChild(menu6Img);
    menu6Case.appendChild(menu6);
    menu6Case.appendChild(menu6Description);

    menuContent.appendChild(menu1Case);
    menuContent.appendChild(menu2Case);
    menuContent.appendChild(menu3Case);
    menuContent.appendChild(menu4Case);
    menuContent.appendChild(menu5Case);
    menuContent.appendChild(menu6Case);
    divContainer.appendChild(menuContent);
    menuTag.appendChild(divContainer);

    return menuTag
    
}
