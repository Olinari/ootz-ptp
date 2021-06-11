import * as icons from "./icons.js";
console.log(icons);
//Append Styles
var href = "../App/components/Home/home.css";
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

export const home = (state, setState) => {
  let container = document.querySelector("main");

  container.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="home">
    <div class="filters flex align-center">
    <div class="container flex align-center">
       <span id="location" class="filter flex">${icons.location}ירושלים והסביבה</span>
       <span id="traveler-type" class="filter">${icons.travelerType}עם ילדים </span>
       <span id="other" class="filter">${icons.water}כניסה למים</span>
       </div>
       <div class="btn-small absolute">שינוי</div>
    </div>
    <div class="trips-content">
       <div class="category-title">המומלצים שלנו</div>
       <div class="category-caousel">
          <div class="carousel flex">
             <div class="card trip">
                <div class="featured-image">
                   <img src="./Images/tours/jerusalem/jlm1.png">
                   <div class="avatar">
                   <img src="./Images/avatars/oots.png">
                   </div>
                </div>
                <div class="trip-details">
                <div class="trip-title">
                   חוויה ירושלמית
                </div>
                <div class="tags">
                <span class="tag">#היסטורי</span>
                <span class="tag">#עירוני</span>
                <span class="tag">#שופינג</span>
                </div>
                </div>
             </div>
             <div class="card trip">
             <div class="featured-image">
                <img src="./Images/tours/jerusalem/jlm3.png">
                <div class="avatar">
                <img src="./Images/avatars/oots.png">
                </div>
             </div>
             <div class="trip-details">
             <div class="trip-title">
                חוויה ירושלמית
             </div>
             <div class="tags">
             <span class="tag">#היסטורי</span>
             <span class="tag">#עירוני</span>
             <span class="tag">#שופינג</span>
             </div>
             </div>
          </div>
          <div class="card trip">
                <div class="featured-image">
                   <img src="./Images/tours/jerusalem/jlm2.png">
                   <div class="avatar">
                   <img src="./Images/avatars/oots.png">
                   </div>
                </div>
                <div class="trip-details">
                <div class="trip-title">
                   חוויה ירושלמית
                </div>
                <div class="tags">
                <span class="tag">#היסטורי</span>
                <span class="tag">#עירוני</span>
                <span class="tag">#שופינג</span>
                </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="category-title">מובילי דרך</div>
    <div class="category-caousel">
       <div class="carousel flex">
          <div class="card trip">
             <div class="featured-image">
                <img src="./Images/tours/jerusalem/jlm1.png">
             </div>
             <div class="trip details">
                lorem
             </div>
          </div>
          <div class="card trip">
             <div class="featured-image">
                <img src="./Images/tours/jerusalem/jlm1.png">
             </div>
             <div class="trip-details">
                lorem
             </div>
          </div>
       </div>
    </div>
 </div>
 <div class="category-title">טיולים מומלצים</div>
 <div class="category-caousel">
    <div class="carousel flex">
       <div class="card trip">
          <div class="featured-image">
             <img src="./Images/tours/jerusalem/jlm1.png">
          </div>
          <div class="trip details">
             lorem
          </div>
       </div>
       <div class="card trip">
          <div class="featured-image">
             <img src="./Images/tours/jerusalem/jlm1.png">
          </div>
          <div class="trip details">
             lorem
          </div>
       </div>
    </div>
 </div>
</div>
 </div>
    `
  );
};
