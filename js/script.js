$(document).ready(function(){
    var $hText = $('.orders-text p').outerHeight(),
        test = document.createElement('input');
    $('.orders-text > p').height(139);
    $('.screen-landing').height($(window).height());

    $(".main").onepage_scroll({
        sectionContainer: "section",
        loop: false,
        keyboard: true,
        pagination: true,
        responsiveFallback: false,
        afterMove: function (index) {
            $('body').removeClass('last-screen');
            if($('body').hasClass('viewing-page-5')){
                setTimeout(function(){
                    $('body').addClass('last-screen')
                }, 1000);
            }
            if($('body').hasClass('viewing-page-4')){
                $('body').removeClass('last-screen');
            }

            else{
                $('body').removeClass('last-screen')
            }
        },
        beforeMove: function (index) {
          $('body').removeClass('last-screen')
        }

        });
    $('.scroll-img').on('click', function(){
        $(".main").moveDown();
    });
    if($('.page2').hasClass('active')){
        alert('1')
    }
    if ($.fn.checkBox !== undefined ) {
        $('.checkbox-item').checkBox();
    }
    if ($.fn.tagsInput !== undefined ) {
        $('#tags_1').tagsInput({width: 'auto'});
    }
    if ($.fn.dropDown !== undefined ) {
        $('.select').dropDown({useNativeMobile: true});
    }
    if ($.fn.glDatePicker !== undefined ) {
        $( ".mydate" ).each(function( index ) {
            $(this).glDatePicker({
                onClick: function(target, cell, date, data) {
                    target.val(date.getDate() + '/' +
                        date.getMonth() + '/' +
                        date.getFullYear());
                }
            });
        });

    }
    if ($.fn.stepper !== undefined ) {
        $(".quantity-product input").stepper();
    }
    if ($.fn.fancybox !== undefined ) {
        $('.fancybox-thumb').fancybox({
            prevEffect : 'fade',
            nextEffect : 'fade',
            closeBtn  : true,
            arrows    : true,
            nextClick : true,
            helpers : {
                thumbs : {
                    width  : 65,
                    height : 65
                }
            }
        });
    }
    $('.bt-dropdown-option').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.checkBox label').on('click',function(){
        $(this).siblings('div.bt-checkbox').children('a').click();
    });
    $('.popup-overlay, .back, .close-popup').on('click',function(){
        $('.popup-overlay, .size-popup, .popup, .pass-popup, .popup-tel, .payment-methods').fadeOut();
        return false
    });
    $('.btn-yes').on('click', function(){
        $('.popup-overlay, .size-popup, .payment-methods').fadeIn();
        return false
    });
    $('.icon-trash-o').on('click',function(){
        $('.fancybox-thumb').each(function(i,elem) {
            if ($('.fancybox-thumb').next('span')) {
                $(this).remove();
                return false;
            }
        });
    });
    $('.open-popup').on('click',function(){
        $('.popup-overlay, .size-popup, .popup').fadeIn();
        return false
    });
    $('.open-popup-tel').on('click',function(){
        $('.popup-overlay, .size-popup, .popup-tel').fadeIn();
        return false
    });
    $('.open-pass-popup').on('click',function(){
        $('.popup-overlay, .size-popup, .pass-popup').fadeIn();
        return false
    });
    $('input[name=file]').change(function() {
        if($('.fancybox-thumb').length >= 3){
            $(this).parents('div.preview-gallery').prepend('<a href="'+ $(this).val() +'" class="fancybox-thumb" data-fancybox-group="thumb"><img alt="" style="background: green" src=""></a>');
        }
        if($('.fancybox-thumb').length < 3) {
            $(this).parents('div.preview-gallery').prepend('<a href="' + $(this).val() + '" class="fancybox-thumb" data-fancybox-group="thumb"><img alt="" style="background: green" src=""></a>');
        }
    });
    $('.icon-pencil').on('click', function(){
        if($(this).siblings('input').prop('readonly')){
            $('.content-tel input').removeAttr('readonly');
        }
        else{
            $(this).siblings('input').attr('readonly','');
        }
    });
    $('.bt-dropdown ').on('click', function(){
        $(this).addClass('open-select');
        return false
    });
    $('.container').on('click', function(){
        if($('.bt-dropdown').hasClass('open-select')){
            $('.bt-dropdown').removeClass('open-select');
            return true
        }
    });
    $('.btn-accept').children().on('click', function(){
        $(this).parent().siblings('button.btn').toggleClass('disabled');
    });
    $('.title-more').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    $('.open-more-text').on('click', function(){
        if($(this).hasClass('active')){
            $(this).siblings('p').animate({
                height: 139
            });
        }
        else{
            $(this).siblings('p').animate({
                height: $hText+ 'px'
            });
        }
        $(this).toggleClass('active');
    });
    $('.small-text').on('click', function(){
        $(this).siblings('textarea').animate({
            height: '172px'
        });
        $('.preview-product').slideUp();
        $(this).parent().addClass('show');
        $('.chenche-textarea').html( $(this).html());

    });
    $('.btn-update').on('click', function(){
        $(this).siblings('textarea').animate({
            height: '68px'
        });
        $('.preview-product').slideDown();
        $('.small-text').text($(this).siblings('textarea').val());
        $(this).parent().removeClass('show');
        return false
    });
    $("body").on('click', '.icon-plus' , function(event) {
        if(!$(this).parent().hasClass('clone-box')){
            $(this).parent().clone().insertAfter($(this).parent())
                .addClass('clone-box');
            return true
        }
        else{
            $(this).parent().remove();
        }
    });
    $('.icon-pencil').on('click', function(){
        $(this).parents('div.contact-user__in').find('input').removeAttr('readonly');
        $(this).parents('div.contact-user__in').addClass('chenche');
        $('.btn').removeClass('disabled');
    });
    $('.back, .btn').on('click', function(){
        $('.contact-user__in').find('input').attr('readonly', true);
        $('.contact-user__in ').removeClass('chenche');
        $(this).siblings().addClass('disabled');
    });

    $('.accordion-title').on('click', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings().slideUp();
        }
        else{
            $('.accordion-title').removeClass('active');
            $(this).addClass('active');
            $('.accordion-in').slideUp();
            $(this).siblings().slideDown();
        }
    });
    $('thead a').on('click', function(){
       $(this).parent('td').toggleClass('arr-bottom');
        return false
    });
    $('.managing-menu a').on('click', function(){
        $('.managing-menu li').removeClass('active');
        $(this).parent().addClass('active');
        return false
    });
    if($('.content').height() < 800){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');

    }
    if($('.content').height() > $('html').height() -150){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');
    }
    if($(window).height() < 640){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');
    }

    if (!('placeholder' in test)) {
        $('input').each(function () {
            if ($(this).attr('placeholder') != "" && this.value == "") {
                $(this).val($(this).attr('placeholder'))
                    .css('color', 'grey')
                    .on({
                        focus: function () {
                            if (this.value == $(this).attr('placeholder')) {
                                $(this).val("").css('color', '#000');
                            }
                        },
                        blur: function () {
                            if (this.value == "") {
                                $(this).val($(this).attr('placeholder'))
                                    .css('color', 'grey');
                            }
                        }
                    });
            }
        });
    }
    if($('body').hasClass('viewing-page-5')){
        $('body').addClass('sdfdbdfb')
    }



    var hScrl =[],
        elem =$(".main > section");
    elem.each(function(){
        hScrl.push($(this).offset().top);
    });
    console.log($(".main > section").offset().top)
    for(i=0;i<=4;i++){
        if($(window).scrollTop() >= hScrl[i]){
            elem.removeClass("chose");
            $(".main > section:nth-child("+i+")").addClass('chose')
        }
    }




    $('body').append('<div class="time">');

    Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
        return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
    }

    function rotate(element, degrees) {
        element.css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
            '-moz-transform' : 'rotate('+ degrees +'deg)',
            '-ms-transform' : 'rotate('+ degrees +'deg)',
            'transform' : 'rotate('+ degrees +'deg)'});
    }

    function setTime() {
        var date = new Date();
        var sec = date.getSeconds();
        var min = date.getMinutes();
        var hrs = date.getHours() - 1;

        var mapSec = sec.map(0, 59, 0, 360);
        var mapMin = min.map(0,59,0,360);
        var mapHrs = hrs.map(0,11,0,360);

        if (sec == 0) {
            $('.seconds-hand').removeClass('smooth');
        } else {
            $('.seconds-hand').addClass('smooth');
        }

        if (min == 0) {
            $('.minute-hand').removeClass('smooth');
        } else {
            $('.minute-hand').addClass('smooth');
        }

        if (hrs == 0) {
            $('.hour-hand').removeClass('smooth');
        } else {
            $('.hour-hand').addClass('smooth');
        }

        rotate($('.seconds-hand'), mapSec);
        rotate($('.minute-hand'), mapMin);
        rotate($('.hour-hand'), mapHrs);
    }

    setInterval(function() {setTime()}, 1);

});
$( window ).resize(function() {
    if($('.content').height() < 800){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');
    }
    if($('.content').height() > $('html').height() -150){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');
    }
    if($(window).height() < 640){
        $('.man').addClass('slippers');
        $('.man').removeClass('man');
    }
});
$(window).on('resize load',function(){
   if($(window).width() <= 640 ){
       $('body ').addClass('small-screen ')
   }
    else{
       $('body').removeClass('small-screen ')
           .removeClass('small-screen-show')
   }

});







