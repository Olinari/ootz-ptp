import { trip } from "./components/Trip/Trip.js";

export function router(page, state, setState) {
  document.querySelector("body").setAttribute("page", page);
  document.querySelector("main").setAttribute("page", page);
  if (page === "trip") {
    trip(state, setState);
  }
}
