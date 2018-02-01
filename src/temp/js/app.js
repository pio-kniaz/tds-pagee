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
