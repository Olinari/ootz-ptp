import * as icons from "./icons.js";
console.log(icons);
//Append Styles
var href = "../App/components/Home/home.css";
var exists = false;
document.querySelectorAll("link").forEach((link) => {
  if (link.getAttribute("href") === href) {
    exists = true;
  }
});
if (!exists) {
  var link = document.createElement("link");
  link.href = href;

  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

//icons and images

export const home = (state, setState) => {
  let container = document.querySelector("main");

  container.insertAdjacentHTML(
    "afterbegin",
    `
<div class="home">
<div class="trip-caousel">
<div class="title">טיולים מומלצים</div>
</div>
</div>
    `
  );
};
