// gnb 코드
let $gnb = $("#gnb");
let $gnb_li = $("#gnb > li");
let $sub = $(".sub");

$gnb.on('mouseenter', function (){
    $sub.stop().slideDown();
});
$gnb.on('mouseleave', function (){
    $sub.stop().slideUp();
});

$gnb_li.on('mouseenter', function(){
    $(this).children('a').addClass('on');
});
$gnb_li.on('mouseleave', function(){
    $(this).children('a').removeClass('on');
});

// 슬라이드 코드
setInterval(function () {
    $('.frame').animate({top: "-300px"}, function(){
        $(".frame>li").eq(0).appendTo('.frame');
        $('.frame').css({top: '0px'})
    });
}, 3000);

// 탭메뉴 코드
$('.tab li').on('click',function(){
    $('.tab>li').removeClass('on');
    $('.content').find('div').removeClass('on');

    $(this).addClass('on');
    let contentDiv = $(this).children('a').attr('href');
    $(contentDiv).addClass('on');
});

// 팝업 코드
$('#notice>ul>li').eq(0).on('click',function(){
    $('.popup').css({display: 'block'});
});

$('#close').on('click',function(){
    $('.popup').css({display: 'none'});
});
