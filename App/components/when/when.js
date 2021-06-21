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
  let categories = [
    "hiking",
    "historical",
    "kids",
    "markets",
    "meuseum",
    "picnic",
    "restaurant",
    "shopping",
    "spa",
    "wine",
  ];

  let heb = {
    hiking: "הייקינג",
    historical: "היסטורי",
    kids: "ילדים",
    markets: "שווקים",
    meuseum: "מוזיאון",
    picnic: "פיקניק",
    restaurant: "מסעדה",
    shopping: "שופינג",
    spa: "ספא",
    wine: "יקב",
  };

  let container = document.querySelector("main");

  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="when">
    
    <div class="when-container">
    <div class="when-head">
    <h1>מתי מטיילים?</h1>
    </div>
    <div class="btn-big disabled">
    לטיול שלי
    <img class="loader" src="./Images/loader.gif"/>
    </div>
    <div id="myCalendarWrapper"></div>
    <div class="when-head sec">
    <h1>מה בתכנית?</h1>
    </div>
    <div class="categories flex">
    ${categories
      .map(
        (cat) => `<div class="category" id="${cat}">
    <img src="./Images/categories/${cat}.png"/>
<span>${heb[cat]}</span>
    </div>`
      )
      .join("")}
    </div>
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

      state.when = when;
    });

    document.querySelectorAll(".when .category").forEach((cat) => {
      cat.onclick = (e) => {
        document.querySelector(".btn-big").classList.remove("disabled");

        if (state.categories.indexOf(cat.id) > -1) {
          cat.classList.remove("select");
          const index = state.categories.indexOf(cat.id);
          state.categories.splice(index, 1);
        } else {
          cat.classList.add("select");

          state.categories.push(cat.id);
        }
      };
    });

    const nextBtn = document.querySelector(".btn-big");
    nextBtn.onclick = (e) => {
      nextBtn.classList.add("load");
      setTimeout(() => {
        router("trip", state, setState);
      }, 1200);
    };
  });
};
