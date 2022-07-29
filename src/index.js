import footer from './footer';
import home from './home';
import contact from './contact';
import menu from './menu';
import './style.css';
import brand from './images/cheftaste.png';

function component() {
   const content = document.getElementById('content');

   const mainContent = document.createElement('div');
   mainContent.classList.add('main-content');

   mainContent.appendChild(home())
   

   function navigation() {
      const headerTag = document.createElement('header');
      headerTag.classList.add('header');
     
      const divContainer = document.createElement('div');
      divContainer.classList.add('container');
     
      const logoNavbar = document.createElement('div');
      logoNavbar.classList.add('logo-navbar');
     
      const brandLogo = document.createElement('div');
      brandLogo.classList.add('logo');
     
      const logolink = document.createElement('a');
      logolink.href = '#';
     
      const logoimg = new Image();
      logoimg.src = brand;
     
      const navTag = document.createElement('nav');
      navTag.classList.add('nav-bar');
     
      const navMenu = document.createElement('ul');
      navMenu.classList.add('nav-menu');
     
      const homeTab = document.createElement('li');
      homeTab.classList.add('nav-tab');
      homeTab.classList.add('active');
      homeTab.innerText = 'Home';
      homeTab.addEventListener('click', (e) => {
         mainContent.firstElementChild.remove()
         mainContent.appendChild(home())
             
      })
     
      const menuTab = document.createElement('li');
      menuTab.classList.add('nav-tab');
      menuTab.classList.add('active');
      menuTab.innerText = 'Menu';
      menuTab.addEventListener('click', (e) => {
         mainContent.firstElementChild.remove()
         mainContent.appendChild(menu())
             
      })
     
      const contactTab = document.createElement('li');
      contactTab.classList.add('nav-tab');
      contactTab.classList.add('active');
      contactTab.innerText = 'Contact';
      contactTab.addEventListener('click', (e) => {
         mainContent.firstElementChild.remove()
         mainContent.appendChild(contact())
      })
     
         
      logolink.appendChild(logoimg);
      brandLogo.appendChild(logolink);
      logoNavbar.appendChild(brandLogo);
      logoNavbar.appendChild(navTag);
      divContainer.appendChild(logoNavbar);
      navMenu.appendChild(homeTab);
      navMenu.appendChild(menuTab);
      navMenu.appendChild(contactTab);
      navTag.appendChild(navMenu);
      headerTag.appendChild(divContainer);
     
     
      return headerTag
   }
     
   content.appendChild(navigation()); 
   content.appendChild(mainContent);  
   content.appendChild(footer());
}

document.body.appendChild(component());