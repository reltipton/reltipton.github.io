function isTouchEnabled() {
    return (("ontouchstart" in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
  }

  jQuery(function () {
    jQuery("path[id^=fastfood-usjs]").each(function (i, e) {
        fastfoodusaddEvent( jQuery(e).attr("id"));
    });
  });
  jQuery(function () {
    jQuery('#lakes').find('path').attr({'fill':fastfoodusjsconfig.general.lakesFill}).css({'stroke':fastfoodusjsconfig.general.lakesOutline});
  });

  function fastfoodusaddEvent(id,relationId) {
    var _obj = jQuery("#" + id);
    var arr = id.split("");
    var _Textobj = jQuery("#" + id + "," + "#fastfood-usjsvn" + arr.slice(4).join(""));
    jQuery("#" + ["visnames"]).attr({"fill":fastfoodusjsconfig.general.visibleNames});
    _obj.attr({"fill":fastfoodusjsconfig[id].upColor, "stroke":fastfoodusjsconfig.general.borderColor});
    _Textobj.attr({"cursor": "default"});
    if (fastfoodusjsconfig[id].active === true) {
      _Textobj.attr({"cursor": "pointer"});
      _Textobj.hover(function () {
        jQuery("#fastfood-usjstip").show().html(fastfoodusjsconfig[id].hover);
        _obj.css({"fill":fastfoodusjsconfig[id].overColor});
      }, function () {
        jQuery("#fastfood-usjstip").hide();
        jQuery("#" + id).css({"fill":fastfoodusjsconfig[id].upColor});
      });
      if (fastfoodusjsconfig[id].target !== "none") {
        _Textobj.mousedown(function () {
          jQuery("#" + id).css({"fill":fastfoodusjsconfig[id].downColor});
        });
      }
      _Textobj.mouseup(function () {
        jQuery("#" + id).css({"fill":fastfoodusjsconfig[id].overColor});
        if (fastfoodusjsconfig[id].target === "new_window") {
          window.open(fastfoodusjsconfig[id].url);	
        } else if (fastfoodusjsconfig[id].target === "same_window") {
          window.parent.location.href = fastfoodusjsconfig[id].url;
        } else if (fastfoodusjsconfig[id].target === "modal") {
          jQuery(fastfoodusjsconfig[id].url).modal("show");
        }
      });
      _Textobj.mousemove(function (e) {
        var x = e.pageX + 10, y = e.pageY + 15;
        var tipw =jQuery("#fastfood-usjstip").outerWidth(), tiph =jQuery("#fastfood-usjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
        y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
        jQuery("#fastfood-usjstip").css({left: x, top: auto});
      });
      if (isTouchEnabled()) {
        _Textobj.on("touchstart", function (e) {
          var touch = e.originalEvent.touches[0];
          var x = touch.pageX + 10, y = touch.pageY + 15;
          var tipw =jQuery("#fastfood-usjstip").outerWidth(), tiph =jQuery("#fastfood-usjstip").outerHeight(),
          x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
          y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
          jQuery("#" + id).css({"fill":fastfoodusjsconfig[id].downColor});
          jQuery("#fastfood-usjstip").show().html(fastfoodusjsconfig[id].hover);
          jQuery("#fastfood-usjstip").css({left: x, top: auto});
        });
        _Textobj.on("touchend", function () {
          jQuery("#" + id).css({"fill":fastfoodusjsconfig[id].upColor});
          if (fastfoodusjsconfig[id].target === "new_window") {
            window.open(fastfoodusjsconfig[id].url);
          } else if (fastfoodusjsconfig[id].target === "same_window") {
            window.parent.location.href = fastfoodusjsconfig[id].url;
          } else if (fastfoodusjsconfig[id].target === "modal") {
            jQuery(fastfoodusjsconfig[id].url).modal("show");
          }
        });
      }
      }
  }