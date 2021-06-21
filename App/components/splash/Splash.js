import * as icons from "./icons.js";
import { router } from "../../router.js";
//Append Styles

var exists = false;
var href = "../App/components/splash/Splash.css";
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

export const splash = (state, setState) => {
  console.log(state);
  let container = document.querySelector("main");

  if (container.querySelector(".splash")) {
    container.querySelector(".splash").remove();
  }
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="splash">
    <img src="./Images/img/boat.png" width="250px">
    <img src="./Images/img/logos.png" width="200px" style="position:absolute; top:calc(50% - 60px); left:calc(50% - 100px);">
    <img src="./Images/img/roller.png" width="150px" style="position:absolute; top:0px; left:-1px;">
    <img src="./Images/img/statue.png" width="96px" style="position:absolute; top:36%;">
    <img src="./Images/img/tree.png" width="250px" style="position:absolute; bottom:-5px; left:8%;">
    <div class="splash-btn flex"><span>בואו נתחיל</span>  <span>${icons.arrow}</span></div>
    </span></div>
</div>


    </div>
    
  
    `
  );

  const nextBtn = document.querySelector(".splash .splash-btn");
  nextBtn.onclick = () => {
    router("where", state, setState);
  };
};
