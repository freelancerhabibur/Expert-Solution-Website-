(function ($) {
    "use strict";

    var xpert_solution = {
        
        /* ============================================================ */
        /* Sidebar/Mobile Menu
        /* ============================================================ */
        sidebarMenu: function(){
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);
            }
            cloneMobileMenu("header .navigation-bar .main-menu ul", ".sidebar-menu .main-menu");

            // Humbergur Menu Click and sidebar expanded
            $('header .sidebar-toggle').on("click", function() {
                event.preventDefault();
                $('.sidebar-menu').toggleClass('expand-menu');
                $('body').toggleClass('expand-menu');
            });

            // Mobile Menu
            function mobileNav($selector, $parentSelector) {
                var $mobileNav = $($selector);
                $mobileNav.on("click", function() {
                    $($selector).toggleClass('expand-menu');
                });

                var $closeButton = $($parentSelector).find(".close-menu");
                $closeButton.each(function(){
                    var $self = $(this);
                    $self.on("click", function() {
                        $self.parent($parentSelector).toggleClass('expand-menu');
                        $('body').removeClass("expand-menu");
                    });
                });

                $(document).on('click', function(e) {
                    var $selectorType = $($parentSelector).add($mobileNav);
                    if ($selectorType.is(e.target) !== true && $selectorType.has(e.target).length === 0) {
                        $($parentSelector).removeClass("expand-menu");
                        $($selector).removeClass("expand-menu");
                        $('body').removeClass("expand-menu");
                    }          
                });
            }
            mobileNav('.sidebar-toggle', '.sidebar-menu');
	

            $('.sidebar-menu .main-menu li a, .sidebar-menu .close-menu').on('click', function(){
                $('.sidebar-menu').removeClass('expand-menu');
            });
        },


        /* ============================================================ */
        /* Banner Slider
        /* ============================================================ */
        bannerSlider: function() {
            var bannerSlider = $('.hero.carousel');
            bannerSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
            });
        },        

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        initializ: function() {
			xpert_solution.sidebarMenu();
			xpert_solution.bannerSlider();
			xpert_solution.background_image();
		}

    };
    $(function() {
		xpert_solution.initializ();
	});


})(jQuery);