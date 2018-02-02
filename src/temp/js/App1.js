// smooth scrool :)

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

// waypoint js a link :)

// class RevealOnScroll {
//   constructor(els, offset) {
//     this.itemsToReveal = els;
//     this.hideInitially();
//     this.offsetPercentage = offset;
//     this.createWaypoints();
//     this.pageSections = $(".page-section");
//     this.headerLinks = $(".nav-link ");
//     this.createPageSectionWaypoints();
//   }
//   hideInitially() {
//     this.itemsToReveal.addClass("reveal-item");
//   }
//   createWaypoints() {
//     var self = this;
//     this.itemsToReveal.each(function() {
//       var currentItem = this;
//       new Waypoint({
//         element: currentItem,
//         handler: function() {
//           $(currentItem).addClass("reveal-item-is--visible");
//         },
//         offset: self.offsetPercentage
//       });
//     });
//   }
//   createPageSectionWaypoints() {
//     var that = this;
//     this.pageSections.each(function() {
//       var currentPageSection = this;
//       new Waypoint({
//         element: currentPageSection,
//         handler: function(direction) {
//           if (direction == "down") {
//             var matchingHeaderLink = currentPageSection.getAttribute(
//               "data-matching-link"
//             );
//             that.headerLinks.removeClass("is-current-link");
//             $(matchingHeaderLink).addClass("is-current-link");
//           }
//         },
//         offset: "18%"
//       });
//       new Waypoint({
//         element: currentPageSection,
//         handler: function(direction) {
//           if (direction == "up") {
//             var matchingHeaderLink = currentPageSection.getAttribute(
//               "data-matching-link"
//             );
//             that.headerLinks.removeClass("is-current-link");
//             $(matchingHeaderLink).addClass("is-current-link");
//           }
//         },
//         offset: "-40%"
//       });
//     });
//   }
// }

// new RevealOnScroll($(".feature-item"), "85%");

// transipled babel :)

("use strict");

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RevealOnScroll = (function() {
  function RevealOnScroll(els, offset) {
    _classCallCheck(this, RevealOnScroll);

    this.itemsToReveal = els;
    this.hideInitially();
    this.offsetPercentage = offset;
    this.createWaypoints();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".nav-link ");
    this.createPageSectionWaypoints();
  }

  _createClass(RevealOnScroll, [
    {
      key: "hideInitially",
      value: function hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
      }
    },
    {
      key: "createWaypoints",
      value: function createWaypoints() {
        var self = this;
        this.itemsToReveal.each(function() {
          var currentItem = this;
          new Waypoint({
            element: currentItem,
            handler: function handler() {
              $(currentItem).addClass("reveal-item-is--visible");
            },
            offset: self.offsetPercentage
          });
        });
      }
    },
    {
      key: "createPageSectionWaypoints",
      value: function createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
          var currentPageSection = this;
          new Waypoint({
            element: currentPageSection,
            handler: function handler(direction) {
              if (direction == "down") {
                var matchingHeaderLink = currentPageSection.getAttribute(
                  "data-matching-link"
                );
                that.headerLinks.removeClass("is-current-link");
                $(matchingHeaderLink).addClass("is-current-link");
              }
            },
            offset: "20%"
          });
          new Waypoint({
            element: currentPageSection,
            handler: function handler(direction) {
              if (direction == "up") {
                var matchingHeaderLink = currentPageSection.getAttribute(
                  "data-matching-link"
                );
                that.headerLinks.removeClass("is-current-link");
                $(matchingHeaderLink).addClass("is-current-link");
              }
            },
            offset: "-40%"
          });
        });
      }
    }
  ]);

  return RevealOnScroll;
})();

new RevealOnScroll($(".feature-item"), "85%");
