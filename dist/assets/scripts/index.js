const allTitle = document.querySelectorAll("h4.c-contents__title");
let spanTitle;

window.addEventListener("load", () => {
  allTitle.forEach((title) => {
    spanTitle = title.innerHTML.split("").reduce((acc, v) => {
      if (v === " ") {
        return acc + v;
      } else {
        return acc + `<span>${v}</span>`;
      }
    }, "");
    title.innerHTML = spanTitle;
  });
});
