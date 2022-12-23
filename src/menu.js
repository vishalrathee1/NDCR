let menu = () => {
  let content = document.getElementById('content');
  content.classList.add('menu');

  let menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Menu';
  container.appendChild(headline);

  let menu = document.createElement('ul');
  let items = ['Momos , White Sauce Pasta , Arrabiata Pasta', 'Fries , Peri Peri Fries', 'Pizza', 'Donuts', 'Coke Sprite', 'Beer', 'Fruit Beer']

  for (let i=0; i< items.length; i++) {
    let item = document.createElement('li');
    item.innerText = items[i];
    menu.appendChild(item);
  }

  container.appendChild(menu);


  let body = document.querySelector('body');
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
};

export default menu;