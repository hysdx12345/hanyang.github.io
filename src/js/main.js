
$('#fullpage').fullpage(
    {
        'sectionsColor':['#5c5766', '#fafcfb', '#ffd670', '#ffffff','#5c5766',''],
        'scrollingSpeed': 400,//滚动速度
        'resize': true,//字体是否随着窗口缩放而缩放
        'verticalCentered':false,//内容是否垂直居中
        'paddingTop':100,//页面顶部间距
        'paddingBottom':100,
        'navigation':true,
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于', '经历', '技能','作品','联系'],
        'anchors': ["page1","page2","page3","page4","page5","page6"],//页面锚链接
        'afterRender':function () {
            $('#img1').addClass('home_animate')
        },

    }
);




//技能
var $skillbtn=$('.skill_h');
$skillbtn.mouseenter(function () {
    $(this).children('h2').css('font-weight','bold');
})
$skillbtn.mouseleave(function () {
    $(this).children('h2').css('font-weight','normal');
}
)
$skillbtn.click(function () {
    //遍历所有技能，并进行初始化
    $('.skill_m').each(function () {
        if($(this).is(":visible")){
            $(this).slideUp(200);
            console.log($(this));
            $(this).prev().find('img').removeClass("img_scale").prev().css('color','#a0a0a0');
            $(this).prev().find('.bg').css('background-color','#fff0ca');
        }
    })
    //技能页显示切换
    if($(this).parent().siblings(".skill_m").is(":hidden")){
        $(this).parent().siblings(".skill_m").slideDown(400);
        $(this).children('img').addClass("img_scale").prev().css('color','white');
        $(this).prev().css('background-color','#5c5766');
    }else{
        $(this).parent().siblings(".skill_m").slideUp(200);
        $(this).children('img').removeClass("img_scale").prev().css('color','#a0a0a0');;
        $(this).prev().css('background-color','#fff0ca');
    }
})
