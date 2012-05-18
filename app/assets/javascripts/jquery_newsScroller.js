(function (a) {
  a.fn.newsScroller = function (b) {
    var c = {
      speed: 800,
      pause: 5e3,
      showItems: 3,
      animation: "",
      mousePause: !0,
      isPaused: !1,
      direction: "up",
      height: 0
    },
      d = a.extend(c, b);
    return moveUp = function (b, c, d) {
      if (d.isPaused) return;
      var e = b.children("ul"),
        f = e.children("li:first").clone(!0);
      d.height > 0 && (c = e.children("li:first").height()), e.animate({
        top: "-=" + c + "px"
      }, d.speed, function () {
        a(this).children("li:first").remove(), a(this).css("top", "0px")
      }), d.animation == "fade" && (e.children("li:first").fadeOut(d.speed), d.height === 0 && e.children("li:eq(" + d.showItems + ")").hide().fadeIn(d.speed).show()), f.appendTo(e)
    }, moveDown = function (b, c, d) {
      if (d.isPaused) return;
      var e = b.children("ul"),
        f = e.children("li:last").clone(!0);
      d.height > 0 && (c = e.children("li:first").height()), e.css("top", "-" + c + "px").prepend(f), e.animate({
        top: 0
      }, d.speed, function () {
        a(this).children("li:last").remove()
      }), d.animation == "fade" && (d.height === 0 && e.children("li:eq(" + d.showItems + ")").fadeOut(d.speed), e.children("li:first").hide().fadeIn(d.speed).show())
    }, this.each(function () {
      var b = a(this),
        c = 0;
      b.css({
        overflow: "hidden",
        position: "relative"
      }).children("ul").css({
        position: "absolute",
        marginLeft: 15,
        marginRight: 10,
        padding: 0
      }).children("li").css({
        margin: 0,
        padding: 0,
        paddingBottom: 15
      }), d.height === 0 ? (b.children("ul").children("li").each(function () {
        a(this).height() > c && (c = a(this).height())
      }), b.children("ul").children("li").each(function () {
//        a(this).height(c)
      }), b.height(c * d.showItems)) : b.height(d.height);
      var e = setInterval(function () {
        d.direction == "up" ? moveUp(b, c, d) : moveDown(b, c, d)
      }, d.pause);
      d.mousePause && b.bind("mouseenter", function () {
        d.isPaused = !0
      }).bind("mouseleave", function () {
        d.isPaused = !1
      })
    })
  }
})(jQuery);
