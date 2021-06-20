import * as icons from "./icons.js";
import { router } from "../../router.js";
import { data } from "./tripData.js";
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
  console.log(state);
  let container = document.querySelector("main");

  if (container.querySelector(".trip-page")) {
    container.querySelector(".trip-page").remove();
  }
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="trip-page">
    <div class="trip-details flex">
    <div>
    <div class="trip-title">
    ${state.place}
    </div>
    <div class="time">
    ${state.when}
    </div>
    </div>
    ${icons.mapListToggle}
</div>

<div class="trip-list">
${Object.keys(data["center"])
  .map((section) => {
    let items = data["center"][section];

    return ` <div class="trip-list-item flex align-center">
    <div class="trip-list-icon">${icons.car}</div>
    <div class="trip-list-item-title">נסיעה</div>
    <div class="trip-list-item-details" style="margin-right:12px">3 שעות</div>
    </div> 
    <div class="item-suggestions flex">
    ${items
      .map(
        (item) => `
    <div class="trip-list-item">
    <div class="item-details">
       <div class="flex align-center">
          <div class="trip-list-icon">${icons.hiking}</div>
          <div class="flex column">
             <div class="trip-list-item-title">${item.name}</div>
             <div class="trip-list-item-details">3 שעות</div>
          
          </div>
       </div>
       <div class="btn-small">הזמנה</div>
    </div>
    <div class="trip-list-img" style="background-image:url(../App/components/Trip/img/${
      item.image
    }); background-position:center; background-size:cover">
   
    </div>

<div class="item-description">
<div class="rating" rating="${item.rating}"></div>
<div style="margin-top:8px">
${item.description ? item.description : ""}
</div>
</div>
    </div>
    
  
    `
      )
      .join("")}
      </div>
 `;
  })
  .join("")}



    
    </div>
    `
  );

  setTimeout(() => {
    $(".rating").rating({
      value: 4.5,
      stars: 5,
      color: "#FFCE00",
      half: true,
      readonly: true,
    });
  });
};
