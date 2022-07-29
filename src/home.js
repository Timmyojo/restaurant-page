export default function home() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const heroText = document.createElement('p');
    heroText.textContent = '#1 stop for your favourite delicious cuisines.';

    const ctaWord = document.createElement('p');
    ctaWord.classList.add('cta-btn');
    ctaWord.textContent = 'Visit Us today';

    const openingHours = document.createElement('div');
    openingHours.classList.add('opening-hour');

    const openingHoursTitle = document.createElement('h3');
    openingHoursTitle.textContent = 'Hours';

    const openingHoursList = document.createElement('ul');
    openingHoursList.classList.add('opening-hours-list');

    const weekdays = document.createElement('li');
    weekdays.textContent = 'Mon - Fri: 8am - 9pm';

    const weekend = document.createElement('li');
    weekend.textContent = 'Sunday: 11am - 5pm';

    openingHoursList.appendChild(weekdays);
    openingHoursList.appendChild(weekend);

    openingHours.appendChild(openingHoursTitle);
    openingHours.appendChild(openingHoursList);
    divContainer.appendChild(heroText);
    divContainer.appendChild(ctaWord);
    divContainer.appendChild(openingHours);
    hero.appendChild(divContainer);

    return hero
    
}