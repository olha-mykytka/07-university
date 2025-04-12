// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;

document.querySelector("#ham a").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#navWrapper").classList.add("open");
  });
  
  // close nav
  document.querySelector("#closex a").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#navWrapper").classList.remove("open");
  });