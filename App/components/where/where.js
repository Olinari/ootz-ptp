import * as icons from "./icons.js";
import { router } from "../../../router.js";

//Append Styles
var href = "../App/components/where/where.css";
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

export const where = (state, setState) => {
  console.log(state);
  let container = document.querySelector("main");

  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="where" id="page">
    <div class="where-container">
    <h1>איפה מטיילים?</h1>
    <div id="geocoder"></div>
    <pre style="display:none;" id="result"></pre>
    </div>
    </div>
    `
  );

  setTimeout(() => {
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,district,region,place,locality,neighborhood,poi",
      countries: "il",
    });
    geocoder.addTo("#geocoder");

    // Get the geocoder results container.
    var results = document.getElementById("result");

    // Add geocoder result to container.
    geocoder.on("result", function (e) {
      state.place = getRegion(e.result);
      var field = document.createElement("input");
      field.setAttribute("type", "text");
      document.body.appendChild(field);

      setTimeout(function () {
        field.focus();
        setTimeout(function () {
          field.setAttribute("style", "display:none;");
        }, 50);
        field.remove();
      }, 50);
      router("when", state, setState);
    });

    // Clear results container when search is cleared.
    geocoder.on("clear", function () {});
  });

  function getRegion(place) {
    var name = "ישראל";
    if (place.place_name.includes("מחוז תל אביב")) {
      name = "איזור תל אביב";
      state.dataLocation = "center";
    }
    if (place.place_name.includes("מחוז הצפון")) {
      name = "איזור הצפון";
      state.dataLocation = "north";
    }
    if (place.place_name.includes("מחוז הדרום")) {
      name = "איזור הדרום";
      state.dataLocation = "south";
    }
    if (place.place_name.includes("מחוז ירושלים")) {
      name = "איזור ירושלים";
      state.dataLocation = "jerusalem";
    }
    if (place.place_name.includes("מחוז המרכז")) {
      name = "איזור המרכז";
      state.dataLocation = "center";
    }
    return name;
  }
};
