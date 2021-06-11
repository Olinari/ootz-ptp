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
<div class="filters flex">
<span id="location" class="filter">ירושלים והסביבה</span>
<span id="traveler-type" class="filter">עם ילדים </span>
<span id="other" class="filter">כניסה למים</span>
</div>

<div class="trips-content">
<div class="category-caousel">
<div class="category-title">טיולים מומלצים</div>
<div class="carousel flex">



</div>
</div>
</div>
</div>
    `
  );
};
