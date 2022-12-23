import home from "./home";
import about from "./about";
import menu from "./menu";
import contact from "./contact_us";
import clear from "./clear";
import './style.css';
// import './reset.css';

home();

let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
};

// About tab
let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
};

// Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
}

// Contact tab
let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
}