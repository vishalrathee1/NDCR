import nav from './nav';
import footer from './footer';

let home = () => {
  let content = document.querySelector("#content");
  content.classList.add("home");

  if (!document.querySelector('nav')){
  let navbar = nav();
  content.appendChild(navbar);}

  let container = document.createElement("div");
  container.classList.add("container");
  let header = document.createElement("header");
  let headline = document.createElement("h1");
  headline.innerText = "New Delhi Cafe and Restro";
  header.appendChild(headline);
  container.appendChild(header);

  let description = document.createElement("p");
  description.innerText = "Modern Style cafe and restro all the way from Delhi";
  header.appendChild(description);

  content.appendChild(container);

  footer();
}

export default home;