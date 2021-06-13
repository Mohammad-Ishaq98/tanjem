$(document).ready(function(){
    $('.banner_slick').slick({
        infinity:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
    });


    //team slider
    $('.team_slider').slick({
        infinity:true,
        slidesToShow:4,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        autoplay:true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });


   // venobox pop up vdo
    $('.venobox').venobox({
        framewidth : '400px',                            // default: ''
        frameheight: '300px',                            // default: ''
        border     : '10px',                             // default: '0'
        bgcolor    : '#5dff5e',
        spinner    : 'cube-grid',
        spinColor  : 'greenyellow',
    });

    $('.project_venobox').venobox({
        border     : '20px',                             // default: '0'
        bgcolor    : '#fff',                          // default: '#fff'
        titleattr  : 'data-title', 
        spinner    : 'wave',
        spinColor  : 'yellow',                      // default: 'title'
        });

        //team 2 slick

        $('.team_two_slider_txt').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.team_two_slider_img'
        });
        $('.team_two_slider_img').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.team_two_slider_txt',
            arrows: true,
            prevArrow: '.team_arrow_left',
            nextArrow: '.team_arrow_right',
            dots: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
        
        // sticky top menu js
        $(window).scroll(function(){
            var scrolling = $(this).scrollTop();
            var sticky = $('.sticky_top');

            if(scrolling >= 50){
                sticky.addClass('nav_bg');
            }
            else{
                sticky.removeClass('nav_bg');
            }
        });

        // Add scrollspy to <body>
            $('body').scrollspy({target: ".navbar", offset: 50});

            //animation scroll js
            // var html_body = $('html, body');
            // $('nav a').on('click', function () {
            //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            //         var target = $(this.hash);
            //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            //         if (target.length) {
            //             html_body.animate({
            //                 scrollTop: target.offset().top - 50
            //             }, 1500);
            //             return false;
            //         }
            //     }
            // });

            $("nav a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
              
                  // Prevent default anchor click behavior
                  event.preventDefault();
              
                  // Store hash
                  var hash = this.hash;
              
                  // Using jQuery's animate() method to add smooth page scroll
                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top
                  }, 800, function(){
              
                  // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                  });
              
                } // End if
              
              });

            //   wow js
            new WOW().init();

            // yt player

            jQuery("#bgndVideo").YTPlayer();


            //typed js
            $(".typed").typed({
                strings: ["Developer.", "Designer.", "People."],
                // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
                stringsElement: null,
                // fade animation
                fadeIn: true,
                // typing speed
                typeSpeed: 30,
                // time before typing starts
                startDelay: 1200,
                // backspacing speed
                backSpeed: 20,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: Infinity,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // attribute to type (null == text)
                attr: null,
                // either html or text
                contentType: 'html',
                // call when done callback function
                callback: function() {},
                // starting callback function before each string
                preStringTyped: function() {},
                //callback for every typed string
                onStringTyped: function() {},
                // callback for reset
                resetCallback: function() {}
            });

            //particle js
            particlesJS("particles-js", {
              "particles": {
                "number": {
                  "value": 50,
                  "density": {
                    "enable": true,
                    "value_area": 552
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "image",
                  "stroke": {
                    "width": 0,
                    "color": "#2199e8"
                  },
                  "polygon": {
                    "nb_sides": 1
                  },
                  "image": {
                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ketone-group-2D-skeletal.svg/150px-Ketone-group-2D-skeletal.svg.png",
                    "width": 50,
                    "height": 50
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 40,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 15,
                    "size_min": 20,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": .4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 4,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "bounce",
                  "bounce": false,
                  "attract": {
                    "enable": true,
                    "rotateX": 802,
                    "rotateY": 561
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": .8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            });
              
            // scroll to top 
            var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="./img/top.png">',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();



            //prloader
             $(window).on('load', function(){
               $('#hola').delay(1500).fadeOut(500);
              });


            $(window).load(function(){
              setTimeout(function(){
                  $('#preloader').velocity({
                      opacity : 0.1,
                      translateY: "-80px"
                  }, {
                      duration: 400,
                      complete: function(){
                      $('#hola').velocity({
                      translateY : "-100%"
                  }, {
                      duration: 1000,
                      easing: [0.7,0,0.3,1],
                      complete: function(){
                          $('.home').addClass('animate-border divide');
                      }
                  })  
                      }
                  })
              },1000)
          })

          // paralaxie
          $('#video_part').parallaxie({
            speed:.5,
            offset:40,
          })
          ;
          
          // navbar <a> click collapse
          $('.js-scroll-trigger').click(function(){
            $('.navbar-collapse').collapse('hide');
        });

});