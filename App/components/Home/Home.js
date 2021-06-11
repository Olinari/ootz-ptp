import * as icons from "./icons.js";
console.log(icons);
//Append Styles
var href = "../App/components/TopBar/top-bar.css";
const exists = false;
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

export const topBar = (state, setState) => {
  let container = document.querySelector("#top-bar");

  container.insertAdjacentHTML(
    "afterbegin",
    `
<div class="Home">
<div class="trip-caousel">
<div class="title"><
</div>
</div>
    `
  );
};
