import * as icons from "./icons.js";
console.log(icons);
//Append Styles
var href = "../../App/components/TopBar/top-bar.css";
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

const editor = document.querySelector("#editor");

export const topBar = (state, setState) => {
  let container = document.querySelector("#top-bar");
  console.log(location.search);

  container.insertAdjacentHTML(
    "afterbegin",
    `
<div class="topbar">

  <div class="left-side">
  ${icons.menu}

  </div>

  <div class="middle-side flex row align-center">
  <div class="logo">
 ${icons.logo}
</div>
  </div>

  <div class="right-side flex row align-center">
 
  </div>
  </div>
</div>
    `
  );
};
