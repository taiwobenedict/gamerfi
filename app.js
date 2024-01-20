const themeBtn = document.getElementById('switch');
const modeText = document.querySelector('.mode')


// Smooth scrolling
$("a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top  -100}, 500);
});

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
  

