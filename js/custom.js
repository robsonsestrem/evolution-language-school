/* 
 * Author: Robson Sestrem
 * 
 */
var customScripts = {    
    
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
        });
    },         

    animationSecCourses: function() {        		
		if ($('.isotope-container').length > 0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};
    },

    modalElements: function() {
        if ($(".modal").length > 0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}
    },
			
    init: function () {
        // Realiza o efeito da caixa de menu sobre as seções
        //----------------------------------------------------------
        customScripts.onePageNav();        
        
        // Isotope filters para animação dos botões da seção cursos
		//----------------------------------------------------------
        customScripts.animationSecCourses();

        // Tratamento para modais da página
        //----------------------------------------------------------
        customScripts.modalElements();        
    }
}
$('document').ready(function () {
    customScripts.init(); 	
});