import * as icons from "./icons.js";
import { router } from "../../../router.js";
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

  container.insertAdjacentHTML(
    "afterbegin",
    `

<div class="filters" id="page">
<div class="filter-container">
<div class="filters-bar flex justify-between">
<div id="close-filters">x</div>
<div>מסננים</div>
<div id="clear-filters">ניקוי</div>
</div>
</div>
<div id="add-participants"></div>
<div id="sliders"></div>
<div id="tags"></div>
<div class="trip-btn watch">צפה בתוצאות </div>
    `
  );

  setTimeout(() => {
    const participants = new Vue({
      el: `#add-participants`,
      data: {
        adults: 2,
        children: 0,
        babies: 0,
      },
      template: `
      <div class="counter-container">
      <div class="counter-raw"><div>מבוגרים</div><div class="counter"><div v-on:click="adults += 1">${icons.add}</div><span class="res">{{ adults }}</span><div v-on:click="adults>=1?adults -=1:adults=adults">${icons.subs}</div></div></div>
      <div class="counter-raw"><div>ילדים</div><div class="counter"><div v-on:click="children += 1">${icons.add}</div><span class="res">{{ children }}</span><div v-on:click="children>=1?children -=1:children=children">${icons.subs}</div></div></div>
      <div class="counter-raw"><div>תינוקות</div><div class="counter"><div v-on:click="babies += 1">${icons.add}</div><span class="res">{{ babies }}</span><div v-on:click="babies>=1?babies -=1:babies=babies">${icons.subs}</div></div></div>
      </div>`,
    });

    const timeAndMoney = new Vue({
      el: `#sliders`,
      data: {
        cost: {
          min: 0,
          value: 25,
          max: 50,
        },
        time: { min: 0, max: 12, value: 3 },
        difficulty: { min: 0, max: 12, value: 3 },
      },
      template: `
        <div class="sliders-container">
        <span class="range-label">תקציב</span>
        <div class="slide flex justify-center"><span class="nowrap">$</span><input  type="range" :min="cost.min" :max="cost.max" :value="cost.value" class="slider" id="cost-range"><span class="nowrap">$$$</span></div>
        <span class="range-label">אורך הטיול</span>
        <div class="slide flex justify-center"><span class="nowrap">טיול קליל</span><input  type="range" :min="difficulty.min" :max="difficulty.max" :value="difficulty.value" class="slider" id="difficulty-range"><span class="nowrap">מטיבי לכת</span></div>
        <span class="range-label">דרגת קושי</span>
        <div class="slide flex justify-center"><span class="nowrap">עד שעתיים</span><input  type="range" :min="time.min" :max="time.max" :value="time.value" class="slider" id="time-range"><span class="nowrap">יום שלם</span></div>
  
        </div>`,
    });

    const tags = new Vue({
      el: `#tags`,
      data: {
        tags: ["נגיש לנכים", "כשרות", "צמחוני", "טבעוני"],
      },

      template: `

      <ul id="tags">
      <li v-for="tag in tags" :key="tag" class="cat-tag">
        {{ tag }}
      </li>
    </ul>`,
    });

    const nextBtn = document.querySelector("#close-filters");
    nextBtn.onclick = () => {
      router("trip", state, setState);
    };
    const costRange = document.querySelector("#cost-range");
    costRange.onchange = (e) => {
      timeAndMoney.cost.value = e.target.value;
    };
    const timeRange = document.querySelector("#time-range");
    timeRange.onchange = (e) => {
      timeAndMoney.time.value = e.target.value;
    };
    const clear = document.querySelector("#clear-filters");
    clear.onclick = () => {
      participants.adults = 2;
      participants.children = 0;
      participants.babies = 0;
      timeAndMoney.cost.value = 0;
      timeAndMoney.time.value = 0;
    };
  });
};
