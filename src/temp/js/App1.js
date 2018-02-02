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
// $(".notify").waypoint(function(direction) {
//   alert("Top of notify element hit top of viewport.");
// });
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

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.hideInitially();
    this.offsetPercentage = offset;
    this.createWaypoints();
  }
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoints() {
    var self = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item-is--visible");
        },
        offset: self.offsetPercentage
      });
    });
  }
}

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".screenshot__view-box"), "65%");
