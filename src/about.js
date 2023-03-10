let about = () => {
  let body = document.querySelector('body');
  let content = document.getElementById('content');
  content.classList.add('about');

  let about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerText = 'The Story of New Delhi Cafe and Restro in Bengaluru';
  tagline.innerText = 'since Bengaluru is the silicon valley of India and a lot of people come from around India (especially North India) to work there and the 1 major thing they miss is their native food. So at NDCR we offer the home like experience with our menu.';

  container.appendChild(headline);
  container.appendChild(tagline);
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
}

export default about;