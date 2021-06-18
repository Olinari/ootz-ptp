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
    <h1>מתי מטיילים?</h1>
    <div class="when-container">

    <div class="btn-big">לטיול שלי</div>
    <input id="flatpickr">
    </div>
   
    </div>

    `
  );

  setTimeout(() => {
    let pickr = flatpickr("#flatpickr", {
      // Function(s) to trigger on every date selection.
      onChange: (e) => {
        const d = new Date(e[0]);
        state.when = moment(d).format("MMMM DD");
        console.log(state.when);
        console.log(e);
      },
      clickOpens: false,
      // Function(s) to trigger on every time the calendar is closed.
      onClose: () => {
        pickr.open();
      },

      // Function(s) to trigger on every time the calendar is opened.
      onOpen: null,

      // Function to trigger when the calendar is ready.
      onReady: null,
    });

    pickr.open();

    const nextBtn = document.querySelector(".btn-big");
    nextBtn.onclick = () => {
      router("trip");
    };
  });
};
