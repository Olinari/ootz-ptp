import * as icons from "./icons.js";
import { router } from "../../router.js";
console.log(icons);
//Append Styles
var href = "../App/components/Trip/trip.css";
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

export const trip = (state, setState) => {
  let container = document.querySelector("main");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="trip-page">
    lox
   </div>
    `
  );

  setTimeout(() => {
    container.querySelectorAll(".card").forEach(
      (card) =>
        (card.onclick = () => {
          console.log("go");
          router("trip");
        })
    );
  });
};
