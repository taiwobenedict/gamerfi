const themeBtn = document.getElementById('switch');
const closeEye = document.querySelector(".switcher-container");
const openEye = document.querySelector('.open-eye');


// Theme mode
$("#switch").on("click", () => {
    if ($("#switch").prop("checked")) {
      document.documentElement.setAttribute("data-theme", "light");
      closeEye.style.display = "none"
      openEye.style.marginRight = "auto"
      openEye.style.display = "block"
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      closeEye.style.display = "block"
      openEye.style.marginRight = "auto"
      openEye.style.display = "none"
    }
  });

  