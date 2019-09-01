import { Component, OnInit } from '@angular/core';
declare var $: any;
//


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    try {
      var menu = $('.js-item-menu');
      var sub_menu_is_showed = -1;
  
      for (var i = 0; i < menu.length; i++) {
        $(menu[i]).on('click', function (e) {
          e.preventDefault();
          $('.js-right-sidebar').removeClass("show-sidebar");        
          if ($.inArray(this, menu) == sub_menu_is_showed) {
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = -1;
          }
          else {
            for (var i = 0; i < menu.length; i++) {
              $(menu[i]).removeClass("show-dropdown");
            }
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = $.inArray(this, menu);
          }
        });
      }
      $(".js-item-menu, .js-dropdown").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
      });
  
    } catch (error) {
      console.log(error);
    }
  
    var wW = $(window).width();
      // Right Sidebar
      var right_sidebar = $('.js-right-sidebar');
      var sidebar_btn = $('.js-sidebar-btn');
  
      sidebar_btn.on('click', function (e) {
        e.preventDefault();
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
        right_sidebar.toggleClass("show-sidebar");
      });
  
      $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        right_sidebar.removeClass("show-sidebar");
  
      });
   
  
  
    try {
      // Hamburger Menu
      $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').slideToggle('500');
      });
      $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
        var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
        $(this).toggleClass('active');
        $(dropdown).slideToggle('500');
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  }
//   ngAfterViewInit(){
   
//     $(".dropdown-button").dropdown();
//     $(document).ready(function(){
//       	$(".dropdown-button").dropdown();
// 		$("#sideNav").click(function(){
//             console.log('teste')
// 			if($(this).hasClass('closed')){
// 				$('.navbar-side').animate({left: '0px'});
// 				$(this).removeClass('closed');
// 				$('#page-wrapper').animate({'margin-left' : '260px'});
				
// 			}
// 			else{
// 			    $(this).addClass('closed');
// 				$('.navbar-side').animate({left: '-260px'});
// 				$('#page-wrapper').animate({'margin-left' : '0px'}); 
// 			}
// 		});
//     });
//     $('#main-menu').metisMenu();
			
//     $(window).bind("load resize", function () {
//         if ($(this).width() < 768) {
//             $('div.sidebar-collapse').addClass('collapse')
//         } else {
//             $('div.sidebar-collapse').removeClass('collapse')
//         }
//     });
// }

}
