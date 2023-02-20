const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");
const allLinks = document.querySelectorAll("a:link");
const form = document.querySelector("#contact__form");
console.log(form);
// creating and hiding alert
const hideAlert = () => {
  const el = document.querySelector("notification");
  if (el) el.parentElement.removeChild(el);
};

const showAlert = (type = "success", message, time = 7) => {
  hideAlert();
  const markup = `<div class="notification" id="notification">
            <div class="notification__box">
                <img src="static/images/x 3closesmall.svg" alt="close notification icon" class="notification__close">
                <div class="check-icon">
                    <img src="static/images/Group 1000003628success.svg" alt="sucess icon" class="w-full h-full">
                </div>
                <div class="notification__content">
                    <p class="notification__header">You have sucessfully Place your Order</p>
                    <p class="notification__text">You have completly fill the form and your order has been placed
                        sucessfully</p>
                </div>
            </div>
        </div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, time * 1000);
};

///////////////////////////////////////////////////////////
// Make mobile navigation work

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("mainnav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// form ansd alert
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showAlert("success", "you have to do this yourself", 10);
  });
}
