let nav = () => {
  nav = document.createElement("nav");
  let hometab = document.createElement("button");
  hometab.innerText = "Home";
  hometab.id = "home";
  let abouttab = document.createElement("button");
  abouttab.innerText = "About";
  abouttab.id = "about";
  let menutab = document.createElement("button");
  menutab.innerText = "Menu";
  menutab.id = "menu";
  let contactab = document.createElement("button");
  contactab.innerText = "Contact Us";
  contactab.id = "contact";

  nav.appendChild(hometab);
  nav.appendChild(abouttab);
  nav.appendChild(menutab);
  nav.appendChild(contactab);

  return nav;

}

export default nav;