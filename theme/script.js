
// For go to top scroll


// $(document).ready(function(){ 
//   $(window).scroll(function(){ 
//       if ($(this).scrollTop() > 100) { 
//           $('#scroll').fadeIn(); 
//       } else { 
//           $('#scroll').fadeOut();
//       } 
//   }); 
//   $('#scroll').click(function(){ 
//       $("html, body").animate({ scrollTop: 0 }, 600); 
//       return false; 
//   }); 
// });


// For Navbar Menu

function f() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
        setTimeout(function () {
            document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
        }, 500)
    } else {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
    }
}


// ///////////////////////////////////////////////////////////////////
// Scripts for header starts from here 
$("#namer input").on("change keyup paste", function () {
    var inputValue = $(this).val();


    if (inputValue) {
        $(".namer-controls").addClass("active");
        $("#namer").addClass("active");
    } else {
        $(".namer-controls").removeClass("active");
        $("#namer").removeClass("active");
    }
});

$(document).on("click", ".namer-controls.active span", function () {
    if ($(this).hasClass("active")) {
        $(".namer-controls span").removeClass("active");
        $("#namer-input input").addClass("shake");
        setTimeout(function () {
            $("#namer-input input").removeClass("shake");
        }, 400);
        $("#namer-input").removeClass();
    } else {
        $(".namer-controls span").removeClass("active");
        $(this).addClass("active");
        var styleClass = $(this).text();

        $("#namer-input input").addClass("shake");
        setTimeout(function () {
            $("#namer-input input").removeClass("shake");
        }, 400);

        $("#namer-input").removeClass();
        $("#namer-input").addClass(styleClass);
    }
});

$(document).ready(function () {
    $("#namer-input input").focus();
});



// ///////////////////////////////////////////////////////////////////
// Work together script


var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  
  var el = this;
  var elh = $(this).outerHeight(); 
  
  setTimeout(function(){
    el.style.cssText = 'height:auto;';
    // for box-sizing other than "content-box" use:
   //el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px;' + 'min-height:' + elh + 'px;';
  },0);
}



function simpleSelect() {
  "use strict";
  var selectHolder,
      selectClass;
  //Setup
  $('select').each(function() {
        if( ! $(this).attr('multiple') ){
    selectClass = $(this).attr('class');
    selectHolder = '<dl class="simpleSelect '+selectClass+'">';
    selectHolder += '<dt>'+$('option', this).first().text()+'</dt><dd><ul>';
    $('option', this).each(function() {
      selectHolder += '<li data="'+$(this).val()+'">'+$(this).text()+'</li>';
    });
    selectHolder += '</ul></dd></dl>';
    $(this).after(selectHolder);
    $('.'+selectClass).wrapAll('<div class="selectContainer"></div>');
    }else{
        $(this).show();
    }
  });
  $('.simpleSelect dd ul li').on("click",function(){
    $(this).parents().eq(3).find('select').val($(this).attr('data'));
  });

  $('.simpleSelect dt').on("click",function() {
    if($(this).next('dd').hasClass("open")){
      $(this).removeClass("open").next('dd').removeClass("open");
    }
    else {
      $(this).addClass("open").next('dd').addClass("open");
    }
  });

  $('.simpleSelect dd ul li').on("click",function() {
    $(this).parents().eq(1).removeClass("open");
    $(this).parents().eq(2).find('dt').removeClass("open");
    $(this).parents().eq(4).find('dt').text($(this).text());
  });
}
 $( document ).ready( simpleSelect ); 




// ///////////////////////////////////////////////////////////////////
// Feedback starts from here

$(function(){
    var down = false;
    var dot = $('.slider__dot');
    var emoji = $('.slider__img')
    var position = $('#slider').width()/2;
    var popup = $('.popup');
    dot.css('left', position);
    emoji.css('left', position);
    
    $('#slider').mousedown(function(e){
      if(e.which==1){
        down = true;
      popup.addClass('active');
      }  
    });
    
    $(window).mouseup(function(){
      if(down==true){
        down = false;
      popup.removeClass('active');      
      }  
    });
    
    $(window).mousemove(function(e){
     var perc = 0;
     var moveX,moveXInner;
      if(down==true){
       
      moveX = e.pageX - $('#slider').offset().left;
      moveXInner = e.pageX - $('#slider').offset().left - position;
  
      if(moveX<0){  moveX=0; moveXInner=187;}
      if(moveX>340){
        moveX=340;
        moveXInner=187;
      }
        
        if(moveX>position){
        $('.slider__icon--big').css('fill', '#41e974');    
        $('.icon__path').attr('d', 'M344.25,229.5c20.4,0,38.25-17.85,38.25-38.25S364.65,153,344.25,153S306,170.85,306,191.25S323.85,229.5,344.25,229.5z     M165.75,229.5c20.4,0,38.25-17.85,38.25-38.25S186.15,153,165.75,153s-38.25,17.85-38.25,38.25S145.35,229.5,165.75,229.5z     M255,408c66.3,0,122.4-43.35,145.35-102h-290.7C132.6,364.65,188.7,408,255,408z M255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204    S367.2,459,255,459z');        $('.slider__inner').removeClass('left').addClass('right');
          perc = (moveXInner*position/2)/100;
          
        }
        if(moveX<position){
          $('.icon__path').attr('d', 'M344.3,229.5c20.4,0,38.3-17.9,38.3-38.3S364.6,153,344.3,153S306,170.9,306,191.3S323.9,229.5,344.3,229.5z		 M165.8,229.5c20.4,0,38.3-17.9,38.3-38.3S186.1,153,165.8,153s-38.3,17.9-38.3,38.3S145.4,229.5,165.8,229.5z M258.2,276			c-66.3-0.2-122.5,43-145.7,101.6l290.7,0.9C380.4,319.7,324.5,276.2,258.2,276z M255,0C114.8,0,0,114.8,0,255s114.8,255,255,255			s255-114.8,255-255S395.3,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z');
          $('.slider__icon--big').css('fill', '#D7290C');
          $('.slider__inner').removeClass('right').addClass('left');
         
    
          perc = Math.abs((moveXInner*position/2)/100);
              console.log(perc);
        }
      $('.slider__inner').css('width', perc);
      dot.css('left', moveX );
        emoji.css('left', moveX);
      }    
    });
  });


/* *************************************************************************** */
/* Styles for the vertical slider  */
