const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const btn = $("#mobile-menu");
const tabs = $$(".square-item");
const panes = $$(".pane");
const listItem = $$(".list__item");

function active(obj) {
  obj.forEach(function (element) {
    element.onclick = function () {
      $(".list__item.active").classList.remove("active");
      this.classList.add("active");
    };
  });
}
active(listItem);

tabs.forEach(function (tab, index) {
  tab.onclick = function (e) {
    e.preventDefault();
    const pane = panes[index];
    $(".square-item.active").classList.remove("active");
    $(".pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

btn.onclick = function showMenu() {
  const menu = $("#navbar .list");
  menu.classList.toggle("show");
  $$('#navbar .list .list__item a[href*="#"]').forEach(function (item) {
    item.style.display = `inline-block`;
    item.style.width = `100%`;
    item.onclick = function () {
      item.style.display = `inline`;
      item.style.width = `auto`;
      this.classList.add("active");
      menu.classList.remove("show");
    };
  });
};
