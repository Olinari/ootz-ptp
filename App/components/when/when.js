import * as icons from "./icons.js";
import { router } from "../../router.js";

//Append Styles
var href = "../App/components/when/when.css";
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

export const when = (state, setState) => {
  let container = document.querySelector("main");

  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="when">
    
    <div class="when-container">
    <h1>מתי מטיילים?</h1>
    <div class="btn-big">לטיול שלי</div>
    <div id="myCalendarWrapper"></div>
    </div>
   
    </div>

    `
  );

  setTimeout(() => {
    const myCalender = new CalendarPicker("#myCalendarWrapper", {
      // options here
    });

    myCalender.onValueChange((currentValue) => {
      let when = moment(currentValue).locale("il").format("MMMM DD");
      console.log(when);
      state.when = when;
    });
    const nextBtn = document.querySelector(".btn-big");
    nextBtn.onclick = () => {
      router("trip", state, setState);
    };
  });
};
