export function router(page) {
  document.querySelector("main").setAttribute("page", page);
  document.documentElement.scrollTop = 0;
}
