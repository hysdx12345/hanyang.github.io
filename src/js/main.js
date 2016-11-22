$(function () {
    $('#fullpage').fullpage(
        {
            'sectionsColor': ['#5c5766', '#fafcfb', '#ffd670', '#ffffff', '#5c5766', ''],
            'scrollingSpeed': 400,//滚动速度
            'resize': true,//字体是否随着窗口缩放而缩放
            'verticalCentered': false,//内容是否垂直居中
            'paddingTop': 100,//页面顶部间距
            'paddingBottom': 100,
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['首页', '关于', '技能', '经历', '作品'],
            'anchors': ["page1", "page2", "page3", "page4", "page5"],//页面锚链接
            'loopHorizontal': true,
            'scrollOverflow':true,
            'afterRender': function () {
                $('.section').css('display', 'block');
            },
            'afterLoad': function (anchorLink, index) {
                if (index == 1) {
                    $('#img1').addClass('home_animate');
                    $('.m_head h2').animate({'opacity': '1'}, 1000, function () {
                        $(this).next().fadeIn(700, function () {
                            $(this).next().fadeIn(700, function () {
                                $('.connect').fadeIn(700, function () {
                                    $('.m_foot').fadeIn(700);
                                });
                            });
                        });
                    });
                }
                if (index == 2) {
                    $(".m_about").animate({width: "800px", margin: "60px 0"}, 700, 'easeOutElastic', function () {
                        $(".m_about p").eq(0).animate({bottom: "0"}, 700, function () {
                            $(".m_about p").eq(1).animate({bottom: "0"}, 700, function () {
                                $(".m_about p").eq(2).animate({bottom: "0"}, 700, function () {
                                    $(".m_about p").eq(3).animate({bottom: "0"}, 700);
                                });
                            });
                        });
                    });

                }

                if (index > 1) {
                    $("header h2").eq(index-2).after("<div class='title_en'><h4>DO YOU WANT TO KNOW ME?</h4></div>");
                    if (index == 3) {
                        $(".title_en").css('border-color', 'white').animate({width: "240px",}, 800, function () {
                            $('.title_en h4').slideDown(400);
                        });
                    } else {
                        $(".title_en").css('border-color', '#a0a0a0').animate({width: "240px"}, 800, function () {
                            $('.title_en h4').slideDown(400);
                        });
                    }
                }
            },
            'onLeave': function (index) {
                if (index > 1) {
                    $(".title_en").remove();
                    if (index = 3) {
                        $('.skill_m').each(function () {
                            if ($(this).is(":visible")) {
                                $(this).slideUp(200);
                                $(this).prev().find('img').removeClass("img_scale").prev().css('color', '#a0a0a0');
                                $(this).prev().find('.bg').css('background-color', '#fff0ca');
                            }
                        })
                    }
                }
            }
        }
    );


//技能
    var $skillbtn = $('.skill_h');
    $skillbtn.mouseenter(function () {
        $(this).children('h2').css('font-weight', 'bold');
    })
    $skillbtn.mouseleave(function () {
            $(this).children('h2').css('font-weight', 'normal');
        }
    )
    $skillbtn.click(function () {
        //遍历所有技能，并进行初始化
        $('.skill_m').each(function () {
            if ($(this).is(":visible")) {
                $(this).slideUp(200);
                $(this).prev().find('img').removeClass("img_scale").prev().css('color', '#a0a0a0');
                $(this).prev().find('.bg').css('background-color', '#fff0ca');
            }
        })
        //技能页显示切换
        if ($(this).parent().siblings(".skill_m").is(":hidden")) {
            $(this).parent().siblings(".skill_m").slideDown(400);
            $(this).children('img').addClass("img_scale").prev().css('color', 'white');
            $(this).prev().css('background-color', '#5c5766');
        } else {
            $(this).parent().siblings(".skill_m").slideUp(200);
            $(this).children('img').removeClass("img_scale").prev().css('color', '#a0a0a0');
            ;
            $(this).prev().css('background-color', '#fff0ca');
        }
    })
})

