$("a").on("click", function(e) {
  console.log(this.hash);
  if (this.hash !== "") {
    e.preventDefault();
    const target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      800,
      function() {
        window.location.hash = target;
      }
    );
  }
});
// Color and bordet top :]
// const linkItems = document.querySelectorAll("ul li a");

// linkItems.forEach(function(link) {
//   link.addEventListener("click", function() {
//     for (var i = 0; i < linkItems.length; i++) {
//       linkItems[i].classList.remove("active");
//     }
//     this.classList.add("active");
//   });
// });
