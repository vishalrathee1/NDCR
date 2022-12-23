let footer = () =>{
  let footer = document.createElement("footer");
  let footertxt = document.createElement("p");
  footertxt.innerText = "Copyright © NDCR . All rights reserved.";
  footer.appendChild(footertxt);
  let body = document.querySelector("body");
  body.appendChild(footer);
};

export default footer;