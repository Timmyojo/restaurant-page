export default function contact() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    const contactaddress = document.createElement('div');
    contactaddress.classList.add('contact-address');

    const contactaddressTitle = document.createElement('h2');
    contactaddressTitle.textContent = 'Contact Us';

    contactaddress.appendChild(contactaddressTitle);
    contactaddress.appendChild(createParagraph('Phone: 08100262512'));
    contactaddress.appendChild(createParagraph('Address: Federal Housing Low-cost, Gombe, Gombe State.'));

    

    contactContent.appendChild(contactaddress);
    contactContent.appendChild(contactForm())
    divContainer.appendChild(contactContent);
    contactPage.appendChild(divContainer);

    return contactPage
}

// paragraph creator funtion
function createParagraph(text) {
    const name = document.createElement('p');
    name.textContent = `${text}`;

    return name

}

// contact form function
function contactForm() {
    const form = document.createElement('form');

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;

    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.placeholder = 'Enter message here...';
    messageInput.cols = 40;
    messageInput.rows = 10;
    messageInput.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';

    formContainer.appendChild(nameInput);
    formContainer.appendChild(emailInput);
    formContainer.appendChild(messageInput);
    formContainer.appendChild(submitBtn);
    form.appendChild(formContainer);

    return form
}