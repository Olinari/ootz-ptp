import * as icons from "./icons.js";
import { router } from "../../router.js";
//Append Styles

var exists = false;
var href = "../App/components/filters/Filters.css";
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

//icons and Images

let sectionIndex = 0;

export const filters = (state, setState) => {
  console.log(state);
  let container = document.querySelector("main");

  if (container.querySelector(".splash")) {
    container.querySelector(".splash").remove();
  }
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="filters">

${icons.filters}

    </div>
    
  
    `
  );

  const nextBtn = document.querySelector(".ggg");
  nextBtn.onclick = () => {
    router("trip", state, setState);
  };
};
