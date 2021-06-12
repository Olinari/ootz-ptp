export function router(page) {
  document.documentElement.scrollTop = 0;
  document.querySelector("main").setAttribute("page", page);
  document.documentElement.scrollTop = 0;
}
