$(document).ready(function () {


  $("#owl-example").owlCarousel({
    // Most important owl features
    items: 4,
    pagination: true,
    paginationSpeed: 1000,
    navigation: true,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 800,
  });

  $("#navigation").sticky({
    topSpacing: 75,
  });
  //Initiat WOW JS
  new WOW().init();

  //navbar
  $("#top-nav li").click(function(){
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  });

  //smooth scroll
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });



  // function isInView(element) {
  //   var y = element.position().top;
  //   console.log(y);
  //   var windowY = $(window).scrollTop();
  //   console.log(windowY);
  //   return y > windowY && y < windowY + $(window).height();
  // }

  // var navItem = $("#top-nav li");
  // navItem.each(function(){
  //   console.log($(this).position().top);
  //   var item=$(this);
  //   $(document).scroll(function () {
  //     if (isInView(item)) {
  //       console.log(item);
  //       $(item).parent().find(".active").removeClass("active");
  //       $(item).addClass("active");
  //       impressionRecorded = true;
  //       // record impression
  //     }
  //   });
  // });

  // var nav = $("#top-nav");
  // var navHref=[];
  // nav.find("li a").each(function(){
  //   navHref.push($(this).attr("href"));
  // });
  // console.log(navHref);
  // var sects = $("section");
  // sects.each(function () {
  //   var sect = $(this);
  //   console.log(sect);
  //   $(document).scroll(function () {
  //     console.log(sect);
  //     console.log(sect.visible());
  //     if (sect.visible()) {
  //       var sectionID = sect.attr("id");
  //       console.log(sectionID);
  //       if (typeof sectionID !== typeof undefined && sectionID !== false && $.inArray("#"+sectionID,navHref) !=-1) {
  //         console.log(sectionID);
  //         nav.find("li").removeClass("active");
  //         nav.find("a[href=#" + sectionID + "]").parent().addClass("active");
  //       }
  //     }
  //   });
  // });
});
