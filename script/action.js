$('#section1 figure').click(function () {
    alert('HI^ㅡ^')
})

function bar() {
    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH - winH);
    $('.bar').width(scrT * ratio)
}
function bar2() {
    let scrT = $(window).scrollTop();
    let prog2 = $('.page_progress2').height();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = prog2 / (docH - winH);
    $('.bar2').height(scrT * ratio);
}

$(window).scroll(function () {
    bar()
    bar2()
})

$(window).resize(function () {
    bar()
    bar2()
})

$('.hamburger').click(function () {
    $('.gnb_box').fadeIn(500)
})
$('.gnb_box').dblclick(function () {
    $('.gnb_box').fadeOut(500)
})

$/* ('.gnb_box .gnb li').click(function () {
    let liIndex = $(this).index() //0,1,2,3
    let sectionTop = $('.fullpage > div').eq(liIndex).offset().top;

    $('html, body').animate({ scrollTop: sectionTop })

    return false
}) */
$('.gnb_box h2').click(function () {
    $('html, body').animate({ scrollTop: 0 })
})
$('.gnb_box .gnb li').eq(0).click(function () {
    $('html, body').animate({ scrollTop: $('#section3').offset().top + 100 })
})

$('.gnb_box .gnb li').eq(1).click(function () {
    $('html, body').animate({ scrollTop: $('#section9').offset().top + 100 })
})

$('.gnb_box .gnb li').eq(2).click(function () {
    $('html, body').animate({ scrollTop: $('#section10').offset().top + 200 })
})

$('.gnb_box .gnb li').eq(3).click(function () {
    $('html, body').animate({ scrollTop: $('#section11').offset().top + 200 })
})

$('.gnb_box .gnb li').eq(4).click(function () {
    $('html, body').animate({ scrollTop: $('#section12').offset().top + 200 })
})

$('#section11 .detail li').click(function () {
    let imgSrc = $(this).find('img').attr('src')
    $('.gallery_modal .m1').attr('src', imgSrc)
    $('.gallery_modal').show().css({ display: 'flex', overflow: 'auto' })

    $('body').css({ overflow: 'hidden' })
    return false
})

$('.gallery_modal').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }


    $('body').css({ overflow: '' })

})

$('.f_modal').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }


    $('body').css({ overflow: '' })

})

$('#section12 figure').click(function () {
    $('.f_modal').fadeIn(500)
})

$(document).keydown(function (e) {
    if (e.key == 'Escape') {
        $('.gnb_box').fadeOut(500)
        $('.gallery_modal').fadeOut(500)
        $('.f_modal').fadeOut(500)

        $('body').css({ overflow: '' })
    }

})