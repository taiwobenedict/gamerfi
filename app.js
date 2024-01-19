const themeBtn = document.getElementById('switch');
const modeText = document.querySelector('.mode')


// Theme mode
$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    document.documentElement.setAttribute("data-theme", "light");
    modeText.innerText = 'Dark'
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    modeText.innerText = 'Light'
  }
});
  