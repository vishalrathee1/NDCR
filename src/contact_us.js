let contact = () => {
  let content = document.getElementById('content');
  content.classList.add('contact');

  let contactBtn = document.getElementById('contact');
  contactBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerText = 'Get in Touch';
  let tagline = document.createElement('p');
  tagline.innerText = 'Our team of elite chefs would love to hear from you. Give us a call or send us an email.'

  let phone = document.createElement('p');
  phone.innerText = 'Phone: +91 9354444444';
  let email = document.createElement('p');
  email.innerText = 'Email: ndcr@gmail.com';

  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(phone);
  container.appendChild(email);

  let body = document.querySelector('body');
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
}

export default contact;