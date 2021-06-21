import * as icons from "./icons.js";

import { data } from "./tripData.js";
import { debounce, getSize } from "../../functions.js";
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
  let sectionIndex = 0;
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
${Object.keys(data[state.dataLocation])

  .map((section) => {
    console.log(section);
    let items = data[state.dataLocation][section];

    return ` <div class="trip-list-item flex align-center" section="${++sectionIndex}">
    <div class="trip-list-icon">${icons.car}</div>
    <div class="trip-list-item-title">נסיעה</div>
    <div class="trip-list-item-details" style="margin-right:12px">3 שעות</div>
    </div> 
    <div class="item-suggestions flex" id=${sectionIndex}>
    ${items
      .map(
        (item) => `
    <div class="trip-list-item" id=${item.id}>
    <div class="item-details">
       <div class="flex align-center">
          <div class="trip-list-icon">${icons.hiking}</div>
          <div class="flex column">
             <div class="trip-list-item-title" style="margin-bottom:8px;">${
               item.name
             }</div>
             <div class="trip-list-item-details">
             
             <span class="info-span">${item.time[1] + " "}שעות</span>
             
            ${
              item.price
                ? `<span class="info-span">${
                    item.price === "free"
                      ? "חינם"
                      : item.price[0] + "-" + item.price[1] + " ₪"
                  }
            </span>`
                : ""
            }
             
             </div>
          
          </div>
       </div>
       <div class="btn-small order">הזמנה</div>
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
      value: [4, 4.5, 5][Math.floor(Math.random() * 3)],
      stars: 5,
      color: "#FFCE00",
      half: true,
      readonly: true,
    });
  });

  //get location onScroll

  document.querySelectorAll(".item-suggestions").forEach((list) => {
    let time = updateTime(list.id, 0);
    if (time) {
      let hours = time[0] + ` שעות ` + ` ו `;
      let mins = time[1] + ` דקות `;

      document.querySelector(
        `[section="${list.id}"] .trip-list-item-details`
      ).innerText = time[0] ? hours + mins : mins;
    }
    var index = 0;
    list.onscroll = (e) => {
      if (!state.yield) {
        let newindex = Math.floor(
          (e.target.scrollLeft * -1) /
            getSize(e.target.querySelector(".trip-list-item")).width
        );
        if (newindex != index) {
          index = newindex;
          let time = updateTime(list.id, index);
          if (time) {
            let hours = time[0] + ` שעות ` + ` ו `;
            let mins = time[1] + ` דקות `;

            document.querySelector(
              `[section="${list.id}"] .trip-list-item-details`
            ).innerText = time[0] ? hours + mins : mins;
          }
        }
      }
    };
  });
  //order an attraction
  document.querySelectorAll(".order").forEach(
    (order) =>
      (order.onclick = (e) => {
        state.yield = 1;
        let list = e.target.closest(".item-suggestions");
        list.classList.add("ordered");
        let id = e.target.closest(".trip-list-item").id;
        list.querySelectorAll(".trip-list-item").forEach((item) => {
          if (item.id != id) {
            item.remove();
          }
          e.target.innerText = "צפה בהזמנה";
        });
        setTimeout(() => {
          state.yield = 0;
        }, 2000);
      })
  );

  function updateTime(sectionindex, locationIndex) {
    console.log(data[state.dataLocation]);
    console.log(sectionindex, locationIndex);

    if (data[state.dataLocation][sectionindex]) {
      let newLocation =
        data[state.dataLocation][sectionindex][locationIndex].location;

      let prevLocation = state.myLocation;

      if (data[state.dataLocation][sectionindex - 1]) {
        prevLocation =
          data[state.dataLocation][sectionindex - 1][locationIndex].location;
      }

      const lat1 = newLocation[0];
      const lon1 = newLocation[1];
      const lat2 = prevLocation[0];
      const lon2 = prevLocation[1];

      const R = 6371e3; // metres
      const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
      const φ2 = (lat2 * Math.PI) / 180;
      const Δφ = ((lat2 - lat1) * Math.PI) / 180;
      const Δλ = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const d = R * c; // in metres
      let time = Math.floor((d / 1000) * 2);
      time = timeConvert(time);
      return time;
    }
  }
};
function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return [rhours, rminutes];
}
