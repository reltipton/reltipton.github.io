function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}

jQuery(function () {
  jQuery("path[id^=obesity-usjs]").each(function (i, e) {
    usaddEvent( jQuery(e).attr("id"));
  });
});
jQuery(function () {
  jQuery('#lakes').find('path').attr({'fill':obesityusjsconfig.general.lakesFill}).css({'stroke':obesityusjsconfig.general.lakesOutline});
});

function usaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#obesity-usjsvn" + arr.slice(4).join(""));
  jQuery("#" + ["visnames"]).attr({"fill":obesityusjsconfig.general.visibleNames});
  _obj.attr({"fill":obesityusjsconfig[id].upColor, "stroke":obesityusjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (obesityusjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#obesity-usjstip").show().html(obesityusjsconfig[id].hover);
      _obj.css({"fill":obesityusjsconfig[id].overColor});
    }, function () {
      jQuery("#obesity-usjstip").hide();
      jQuery("#" + id).css({"fill":obesityusjsconfig[id].upColor});
    });
    if (obesityusjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":obesityusjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":obesityusjsconfig[id].overColor});
      if (obesityusjsconfig[id].target === "new_window") {
        window.open(obesityusjsconfig[id].url);	
      } else if (obesityusjsconfig[id].target === "same_window") {
        window.parent.location.href = obesityusjsconfig[id].url;
      } else if (obesityusjsconfig[id].target === "modal") {
        jQuery(obesityusjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#obesity-usjstip").outerWidth(), tiph =jQuery("#obesity-usjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#obesity-usjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#obesity-usjstip").outerWidth(), tiph =jQuery("#obesity-usjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":obesityusjsconfig[id].downColor});
        jQuery("#obesity-usjstip").show().html(obesityusjsconfig[id].hover);
        jQuery("#obesity-usjstip").css({left: x, top: auto});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":obesityusjsconfig[id].upColor});
        if (obesityusjsconfig[id].target === "new_window") {
          window.open(obesityusjsconfig[id].url);
        } else if (obesityusjsconfig[id].target === "same_window") {
          window.parent.location.href = obesityusjsconfig[id].url;
        } else if (obesityusjsconfig[id].target === "modal") {
          jQuery(obesityusjsconfig[id].url).modal("show");
        }
      });
    }
	}
}