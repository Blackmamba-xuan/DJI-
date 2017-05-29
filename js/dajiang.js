/**
 * Created by kobe on 2017/5/21.
 */
var video_play_btn=document.getElementById("video-play-btn");
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) {
        return c/2*t*t + b
    }
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
    var tc = (t/=d)*t*t;
    return b+c*(tc);
};

Math.inOutQuintic = function(t, b, c, d) {
    var ts = (t/=d)*t,
        tc = ts*t;
    return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};


var requestAnimFrame = (function(){
    return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

function scrollTo(to, callback, duration) {
    function move(amount) {
        document.documentElement.scrollTop = amount;
        document.body.parentNode.scrollTop = amount;
        document.body.scrollTop = amount;
    }
    function position() {
        return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
    }
    var start = position(),
        change = to - start,
        currentTime = 0,
        increment = 20;
    duration = (typeof(duration) === 'undefined') ? 500 : duration;
    var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        move(val);
        if (currentTime < duration) {
            requestAnimFrame(animateScroll);
        } else {
            if (callback && typeof(callback) === 'function') {
                callback();
            }
        }
    };
    animateScroll();
}
/*产品展示选项栏*/
function changeShow(item){
    /*显示按钮*/
    video_play_btn.style.display="block";
    /*改变字体颜色*/
    var options = document.getElementsByClassName("content-selected");
    for(i = 0; i < options.length; i++)
        options[i].className = "product-content";
    item.className = "content-selected";

    /*改变背景图片和内容*/
    var bgImg = document.getElementsByClassName("product-show-bg");
    var videoImg = document.getElementsByClassName("video-pic");
    var desTitle = document.getElementsByClassName("video-common-title");
    var desContent = document.getElementsByClassName("video-common-content");

    if(item.innerHTML == "移动延时摄影"){
        bgImg[0].style.backgroundImage = "url(http://www1.djicdn.com/assets/images/products/osmo-mobile/v2/s2-tab2-bg-1fb82920bca8adfb2685d8e662f952a1.jpg)";
        videoImg[0].src = "dajiang/dajiang720_2.mp4";
        desTitle[0].innerHTML = "移动延时摄影";
        desContent[0].innerHTML = "延时摄影让你浓缩时光，拍摄日常难以察觉的精彩影像。灵眸Osmo手机云台不仅支持常规延时摄影，还有全新的三轴移动延时功能\
				为你带来更具动感的视觉效果。设置拍摄起始点后，灵眸Osmo手机云台即可精准控制手机镜头轨迹，进行等时间隔旋转，让你捕捉车水马龙或日出日落的\
				惊艳景色。"
    }
    else if(item.innerHTML == "智能跟随"){
        bgImg[0].style.backgroundImage = "url(http://www5.djicdn.com/assets/images/products/osmo-mobile/v2/s2-tab1-bg-acb78213986348546e5fbe79253b80bc.jpg)";
        videoImg[0].src = "dajiang/dajiang_720.mp4";
        desTitle[0].innerHTML = "智能跟随";
        desContent[0].innerHTML = "灵眸Osmo手机云台不仅让你轻松拍摄，还能使你成为拍摄的主角。Osmo手机云台的智能跟随功能让手机镜头随你而动。只要在\
				DJI GO app中选择自己，云台就能自动转动，控制手机进行跟随拍摄，将你时刻置于画面中央，记录自己的生活，从未如此简单。"
    }
    else if(item.innerHTML == "慢动作视频"){
        bgImg[0].style.backgroundImage = "url(http://www2.djicdn.com/assets/images/products/osmo-mobile/v2/s2-tab3-bg-2ab4861f07ec09b57dd0dcf67f882e1a.jpg)";
        videoImg[0].src = "dajiang/dajiang720_3.mp4";
        desTitle[0].innerHTML = "慢动作视频";
        desContent[0].innerHTML = "DJI GO内置慢动作拍摄功能1。不管是运动场上扣人心弦的一次进球，还是舞台上动人的身影，都能用慢动作记录，清晰展现每一个瞬间。";
    }
}
/*选择相机颜色*/
/*turn black*/
function turnBlack(){
    var oCamera = document.getElementById('camera-show-pic');
    var blackBtn = document.getElementsByClassName("osmo-black");
    var whiteBtn = document.getElementsByClassName("osmo-white");
    var camCol1 = document.getElementsByClassName('camera-color1');
    var camCol2 = document.getElementsByClassName("camera-color2");

    blackBtn[0].style.width = "26px";
    blackBtn[0].style.height = "26px";
    blackBtn[0].style.margin = "0px"
    blackBtn[0].style.backgroundImage = "url(http://www-optimized.djicdn.com/assets/images/products/osmo-mobile/v2/s0-btn-black-active-86da43f2e15593a5328ec0a42e1e3f3a.png)";

    whiteBtn[0].style.width = "20px";
    whiteBtn[0].style.height = "20px";
    whiteBtn[0].style.margin = "3px 0px"
    whiteBtn[0].style.backgroundImage = "url(http://www-optimized.djicdn.com/assets/images/products/osmo-mobile/v2/s0-btn-silver-9ea5f0d67f8105b9b3d6746f9527df4b.png)";

    oCamera.style.backgroundImage = "url(http://www1.djicdn.com/assets/images/products/osmo-mobile/v2/s0-bg-black2-f4e828521f446cef7a91743614f7e7c3.png)";

    camCol1[0].style.opacity = "1";
    camCol2[0].style.opacity = "0";
}

/*turn white*/
function turnWhite(){
    var oCamera = document.getElementById('camera-show-pic');
    var blackBtn = document.getElementsByClassName("osmo-black");
    var whiteBtn = document.getElementsByClassName("osmo-white");
    var camCol1 = document.getElementsByClassName('camera-color1');
    var camCol2 = document.getElementsByClassName("camera-color2");

    whiteBtn[0].style.width = "26px";
    whiteBtn[0].style.height = "26px";
    whiteBtn[0].style.margin = "0px";
    whiteBtn[0].style.backgroundImage = "url(http://www-optimized.djicdn.com/assets/images/products/osmo-mobile/v2/s0-btn-silver-active-849175561ad95f595c8850e4b66e2cfb.png)";

    blackBtn[0].style.width = "20px";
    blackBtn[0].style.height = "20px";
    blackBtn[0].style.margin = "3px 0px"
    blackBtn[0].style.backgroundImage = "url(http://www-optimized.djicdn.com/assets/images/products/osmo-mobile/v2/s0-btn-black-39e558aaaa8b40ad9e27f8e91e787a3f.png)";

    oCamera.style.backgroundImage = "url(http://www1.djicdn.com/assets/images/products/osmo-mobile/v2/s0-bg-silver2-2292ec299619e428ea0e55c5a973c514.png)";

    camCol1[0].style.opacity = "0";
    camCol2[0].style.opacity = "1";
}
window.onload=function(){
    var bannerFlag=0;
    /*  oso-mobile-s8 标签页实现*/
    var font_gotham=document.getElementsByClassName("font-gotham");
    for(var i=0;i<font_gotham.length;i++){
        font_gotham[i].onclick=function(){
            var oso_li=document.getElementsByClassName("oso-mobile-s8-ul-li-active");
            oso_li[0].setAttribute("class","");
            this.parentNode.setAttribute("class","oso-mobile-s8-ul-li-active");
            var feature_box_show=document.getElementsByClassName("feature-box-show")[0];
            feature_box_show.setAttribute("class","feature-box");
            var targetbox=document.getElementById(this.getAttribute("data-target"));
            targetbox.setAttribute("class","feature-box-show");
        }
    }
    /* 轮播器实现*/
    var next=document.getElementById("next");
    var prev=document.getElementById("prev");
    var banner_li=document.getElementsByClassName("roundabout-holder-li");
    next.onclick=function(){
        bannerFlag++;
        if(bannerFlag==1){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
        }else if(bannerFlag==2){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
        }else if(bannerFlag==3){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            bannerFlag=0;
        }
    }
    prev.onclick=function(){
        bannerFlag--;
        console.log("bannerFlag: "+bannerFlag);
        if(bannerFlag==-1){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
            bannerFlag=1;
        }else if(bannerFlag==1){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            bannerFlag==0;
        }else if(bannerFlag==0){
            banner_li[0].setAttribute("class","roundabout-holder-li roundabout-moveable-item-right");
            banner_li[1].setAttribute("class","roundabout-holder-li roundabout-moveable-item-center");
            banner_li[2].setAttribute("class","roundabout-holder-li roundabout-moveable-item-left");
            bannerFlag=2;
        }
    }
    var tabs = document.querySelectorAll('.oso-mobile-s3-ul-a');
    var featureBoxes = document.querySelectorAll('.oso-mobile-s3-feature-box');
    var triangles = document.querySelectorAll('.triangle');
    var triangleInners = document.querySelectorAll('.triangle-inner');
    tabs[0].onclick = function () {
        if (!this.classList.contains('active'))
            this.classList.add('active')
        if (tabs[1].classList.contains('active'))
            tabs[1].classList.remove('active')
        featureBoxes[0].style.display = 'block'
        featureBoxes[1].style.display = 'none'
        triangles[0].style.display = 'block'
        triangleInners[0].style.display = 'block'
        triangles[1].style.display = 'none'
        triangleInners[1].style.display = 'none'
    }
    tabs[1].onclick = function () {
        if (!this.classList.contains('active'))
            this.classList.add('active')
        if (tabs[0].classList.contains('active'))
            tabs[0].classList.remove('active')
        featureBoxes[1].style.display = 'block'
        featureBoxes[0].style.display = 'none'
        triangles[1].style.display = 'block'
        triangleInners[1].style.display = 'block'
        triangles[0].style.display = 'none'
        triangleInners[0].style.display = 'none'
    }
    /*
     *顶部菜单栏滚动一定距离后固定
     *回到顶部固定后可见
     */
    window.onscroll=function(){
        var oSubNav = document.getElementById('container-sub-nav');
        var toTop = document.getElementById('toTop');
        var moveSlow = document.getElementsByClassName("float-up-slow");
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 860){
            oSubNav.style.position = "fixed";
            oSubNav.style.top = "0px";
            toTop.style.visibility = "visible";
        }
        else{
            oSubNav.style.position = "relative";
            toTop.style.visibility = "hidden";
        }

    }


//        下面是播放视频的按钮
    var video=document.getElementsByClassName("video-pic")[0];
    video_play_btn.onclick=function () {
        video.play();
        this.style.display="none";
    }
    video.onclick=function(){
        this.pause();
        video_play_btn.style.display="block";
    }
    var to_top=document.getElementById("toTop");
    to_top.onclick=function(){
        scrollTo(0,function () {
            console.log("success");
        },500);
    };

    var menu_item_1 = document.getElementById('menu_DRONES');
    var menu_item_2 = document.getElementById('menu_IMAGING');
    var menu_item_3 = document.getElementById('menu_ENTERPRISE');
    var menu_item_4 = document.getElementById('menu_COMMUNITY');
    var menu_item_5 = document.getElementById('menu_SUPPORT');
    var drones = document.getElementById('DRONES');
    var imaging = document.getElementById('IMAGING');
    var enterprise = document.getElementById('ENTERPRISE');
    var community = document.getElementById('COMMUNITY');
    var support = document.getElementById('SUPPORT');
    menu_item_1.onmousemove = function(){
        imaging.style.color = '#dbd7dc';
        enterprise.style.color = '#dbd7dc';
        community.style.color = '#dbd7dc';
        support.style.color = '#dbd7dc';
    }
    menu_item_1.onmouseleave = function(){
        imaging.style.color = '#505050';
        enterprise.style.color = '#505050';
        community.style.color = '#505050';
        support.style.color = '#505050';
    }
    menu_item_2.onmousemove = function(){
        drones.style.color = '#dbd7dc';
        enterprise.style.color = '#dbd7dc';
        community.style.color = '#dbd7dc';
        support.style.color = '#dbd7dc';
    }
    menu_item_2.onmouseleave = function(){
        drones.style.color = '#505050';
        enterprise.style.color = '#505050';
        community.style.color = '#505050';
        support.style.color = '#505050';
    }
    menu_item_3.onmousemove = function(){
        imaging.style.color = '#dbd7dc';
        drones.style.color = '#dbd7dc';
        community.style.color = '#dbd7dc';
        support.style.color = '#dbd7dc';
    }

    menu_item_3.onmouseleave = function(){
        imaging.style.color = '#505050';
        drones.style.color = '#505050';
        community.style.color = '#505050';
        support.style.color = '#505050';
    }

    menu_item_4.onmousemove = function(){
        imaging.style.color = '#dbd7dc';
        enterprise.style.color = '#dbd7dc';
        drones.style.color = '#dbd7dc';
        support.style.color = '#dbd7dc';
    }

    menu_item_4.onmouseleave = function(){
        imaging.style.color = '#505050';
        enterprise.style.color = '#505050';
        drones.style.color = '#505050';
        support.style.color = '#505050';
    }

    menu_item_5.onmousemove = function(){
        imaging.style.color = '#dbd7dc';
        enterprise.style.color = '#dbd7dc';
        community.style.color = '#dbd7dc';
        drones.style.color = '#dbd7dc';
    }

    menu_item_5.onmouseleave = function(){
        imaging.style.color = '#505050';
        enterprise.style.color = '#505050';
        community.style.color = '#505050';
        drones.style.color = '#505050';
    }
    var mavic = document.getElementById('mavic_text');
    var Dji_Goggles = document.getElementById('Dji_Goggles_text');
    var Phantom_4_Pro = document.getElementById('Phantom_4_Pro_text');
    var phantom_4_advanced = document.getElementById('phantom_4_advanced_text');
    var phantom_4 = document.getElementById('phantom_4_text');
    var phantom_3_Series = document.getElementById('phantom_3_Series_text');
    var Consumer_Drones_Comparison = document.getElementById('Consumer_Drones_Comparison_text');
    var Inspire_2 = document.getElementById('Inspire_2_text');
    var Inspire_1 = document.getElementById('Inspire_1_text');
    var Crystalsky = document.getElementById('Crystalsky_text');
    var Cendence = document.getElementById('Cendence_text');
    var Inspire_Comparison = document.getElementById('Inspire_Comparison_text');

    // 第二个二级菜单
    var X5S = document.getElementById('X5S_text');
    var X4S = document.getElementById('X4S_text');
    var X5R = document.getElementById('X5R_text');
    var X5 = document.getElementById('X5_text');
    var Zenmuse_Camera_Comparison = document.getElementById('Zenmuse_Camera_Comparison_text');
    var Ronin_2 = document.getElementById('Ronin_2_text');
    var Ronin_MX = document.getElementById('Ronin_MX_text');
    var Ronin_M = document.getElementById('Ronin_M_text');
    var Ronin = document.getElementById('Ronin_text');
    var DJI_Focus = document.getElementById('DJI_Focus_text');
    var RONIN_COMPARISON = document.getElementById('RONIN_COMPARISON_text');
    var Osmo_Mobile = document.getElementById('Osmo_Mobile_text');
    var Osmo_plus = document.getElementById('Osmo_+_text');
    var Osmo_Pro = document.getElementById('Osmo_Pro_text');
    var Osmo = document.getElementById('Osmo_text');
    var OSMO_ACCESSORIES = document.getElementById('OSMO_ACCESSORIES_text');
    var Osmo_Comparison = document.getElementById('Osmo_Comparison_text');

    //第三个二级菜单
    var MATRICE_200_SERIES = document.getElementById('MATRICE_200_SERIES_text');
    var MATRICE_600_PRO = document.getElementById('MATRICE_600_PRO_text');
    var MATRICE_100 = document.getElementById('MATRICE_100_text');
    var S1000_plus = document.getElementById('S1000_plus_text');
    var AGRAS_MG_1 = document.getElementById('AGRAS_MG_1_text');
    var AGRAS_MG_1S = document.getElementById('AGRAS_MG_1S_text');
    var ZENMUSE_XT = document.getElementById('ZENMUSE_XT_text');
    var ZENMUSE_Z30 = document.getElementById('ZENMUSE_Z30_text');
    var GS_PRO = document.getElementById('GS_PRO_text');
    var DJI_TRACKTENNA = document.getElementById('DJI_TRACKTENNA_text');

    // 第五个二级菜单
    var MAVIC = document.getElementById('MAVIC_text');
    var PHANTOM = document.getElementById('PHANTOM_text');
    var INSPIRE = document.getElementById('INSPIRE_text');
    var OSMO = document.getElementById('OSMO_text');
    var RONIN = document.getElementById('RONIN_text');
    var INDUSTRIAL = document.getElementById('INDUSTRIAL_text');

    var box1 = document.getElementById('box_3_1');
    var box2 = document.getElementById('box_4_2');
    var box3 = document.getElementById('box_3_3');
    var box5 = document.getElementById('box_4_5');

    var image1 = document.getElementById('mavic_img');
    var image2 = document.getElementById('x5s_img');
    var image3 = document.getElementById('MATRICE_200_SERIES_img');
    var image5 = document.getElementById('mavic_2_img');
    mavic.onmousemove = function(){
        image1.setAttribute("src","img/mavic2.png");
        box1.style.display = 'block';
    }
    mavic.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Dji_Goggles.onmousemove = function() {
        image1.setAttribute('src', 'img/Dji Goggles.png');
        box1.style.display = 'block';

    }
    Dji_Goggles.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Phantom_4_Pro.onmousemove = function() {
        image1.setAttribute('src', 'img/Phantom 4 Pro.png');
        box1.style.display = 'block';

    }
    Phantom_4_Pro.onmouseleave = function() {
        box1.style.display = 'none';
    }

    phantom_4_advanced.onmousemove = function() {
        image1.setAttribute('src', 'img/phantom 4 advanced.png');
        box1.style.display = 'block';

    }
    phantom_4_advanced.onmouseleave = function() {
        box1.style.display = 'none';
    }

    phantom_4.onmousemove = function() {
        image1.setAttribute('src', 'img/Dji Goggles.png');
        box1.style.display = 'block';

    }
    phantom_4.onmouseleave = function() {
        box1.style.display = 'none';
    }

    phantom_3_Series.onmousemove = function() {
        image1.setAttribute('src', 'img/phantom 3 Series.png');
        box1.style.display = 'block';

    }
    phantom_3_Series.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Consumer_Drones_Comparison.onmousemove = function() {
        image1.setAttribute('src', 'img/Consumer Drones Comparison.png');
        box1.style.display = 'block';

    }
    Consumer_Drones_Comparison.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Inspire_2.onmousemove = function() {
        image1.setAttribute('src', 'img/Inspire 2.png');
        box1.style.display = 'block';

    }
    Inspire_2.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Inspire_1.onmousemove = function() {
        image1.setAttribute('src', 'img/Inspire 1.png');
        box1.style.display = 'block';

    }
    Inspire_1.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Crystalsky.onmousemove = function() {
        image1.setAttribute('src', 'img/Crystalsky.png');
        box1.style.display = 'block';

    }
    Crystalsky.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Cendence.onmousemove = function() {
        image1.setAttribute('src', 'img/Cendence.png');
        box1.style.display = 'block';

    }
    Cendence.onmouseleave = function() {
        box1.style.display = 'none';
    }

    Inspire_Comparison.onmousemove = function() {
        image1.setAttribute('src', 'img/Inspire Comparison.png');
        box1.style.display = 'block';

    }
    Inspire_Comparison.onmouseleave = function() {
        box1.style.display = 'none';
    }
    // 第二个二级菜单
    X5S.onmousemove = function() {
        image2.setAttribute('src', 'img/X5S.png');
        box2.style.display = 'block';

    }
    X5S.onmouseleave = function() {
        box2.style.display = 'none';
    }

    X4S.onmousemove = function() {
        image2.setAttribute('src', 'img/X4S.png');
        box2.style.display = 'block';

    }
    X4S.onmouseleave = function() {
        box2.style.display = 'none';
    }

    X5R.onmousemove = function() {
        image2.setAttribute('src', 'img/X5R.png');
        box2.style.display = 'block';

    }
    X5R.onmouseleave = function() {

        box2.style.display = 'none';
    }

    X5.onmousemove = function() {
        image2.setAttribute('src', 'img/X5.png');
        box2.style.display = 'block';

    }
    X5.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Zenmuse_Camera_Comparison.onmousemove = function() {
        image2.setAttribute('src', 'img/Zenmuse Camera Comparison.png');
        box2.style.display = 'block';

    }
    Zenmuse_Camera_Comparison.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Ronin_2.onmousemove = function() {
        image2.setAttribute('src', 'img/Ronin 2.png');
        box2.style.display = 'block';

    }
    Ronin_2.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Ronin_MX.onmousemove = function() {
        image2.setAttribute('src', 'img/Ronin-MX.png');
        box2.style.display = 'block';

    }
    Ronin_MX.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Ronin_M.onmousemove = function() {
        image2.setAttribute('src', 'img/Ronin-M.png');
        box2.style.display = 'block';

    }
    Ronin_M.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Ronin.onmousemove = function() {
        image2.setAttribute('src', 'img/Ronin.png');
        box2.style.display = 'block';

    }
    Ronin.onmouseleave = function() {

        box2.style.display = 'none';
    }

    DJI_Focus.onmousemove = function() {
        image2.setAttribute('src', 'img/DJI Focus.png');
        box2.style.display = 'block';

    }
    DJI_Focus.onmouseleave = function() {

        box2.style.display = 'none';
    }

    RONIN_COMPARISON.onmousemove = function() {
        image2.setAttribute('src', 'img/RONIN COMPARISON.png');
        box2.style.display = 'block';

    }
    RONIN_COMPARISON.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Osmo_Mobile.onmousemove = function() {
        image2.setAttribute('src', 'img/Osmo Mobile.png');
        box2.style.display = 'block';

    }
    Osmo_Mobile.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Osmo_plus.onmousemove = function() {
        image2.setAttribute('src', 'img/Osmo plus.png');
        box2.style.display = 'block';

    }
    Osmo_plus.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Osmo_Pro.onmousemove = function() {
        image2.setAttribute('src', 'img/Osmo Pro Raw.png');
        box2.style.display = 'block';

    }
    Osmo_Pro.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Osmo.onmousemove = function() {
        image2.setAttribute('src', 'img/Osmo.png');
        box2.style.display = 'block';

    }
    Osmo.onmouseleave = function() {

        box2.style.display = 'none';
    }

    OSMO_ACCESSORIES.onmousemove = function() {
        image2.setAttribute('src', 'img/OSMO ACCESSORIES.png');
        box2.style.display = 'block';

    }
    OSMO_ACCESSORIES.onmouseleave = function() {

        box2.style.display = 'none';
    }

    Osmo_Comparison.onmousemove = function() {
        image2.setAttribute('src', 'img/Osmo Comparison.png');
        box2.style.display = 'block';

    }
    Osmo_Comparison.onmouseleave = function() {

        box2.style.display = 'none';
    }

    // 第三个二级菜单
    MATRICE_200_SERIES.onmousemove = function() {
        image3.setAttribute('src', 'img/MATRICE 200 SERIES.png');
        box3.style.display = 'block';

    }
    MATRICE_200_SERIES.onmouseleave = function() {
        box3.style.display = 'none';
    }

    MATRICE_600_PRO.onmousemove = function() {
        image3.setAttribute('src', 'img/MATRICE 600 PRO.png');
        box3.style.display = 'block';

    }
    MATRICE_600_PRO.onmouseleave = function() {
        box3.style.display = 'none';
    }

    MATRICE_100.onmousemove = function() {
        image3.setAttribute('src', 'img/MATRICE 100.png');
        box3.style.display = 'block';

    }
    MATRICE_100.onmouseleave = function() {
        box3.style.display = 'none';
    }

    S1000_plus.onmousemove = function() {
        image3.setAttribute('src', 'img/S1000_plus.png');
        box3.style.display = 'block';

    }
    S1000_plus.onmouseleave = function() {
        box3.style.display = 'none';
    }

    AGRAS_MG_1.onmousemove = function() {
        image3.setAttribute('src', 'img/AGRAS MG-1.png');
        box3.style.display = 'block';

    }
    AGRAS_MG_1.onmouseleave = function() {
        box3.style.display = 'none';
    }

    AGRAS_MG_1S.onmousemove = function() {
        image3.setAttribute('src', 'img/AGRAS MG-1S.png');
        box3.style.display = 'block';

    }
    AGRAS_MG_1S.onmouseleave = function() {
        box3.style.display = 'none';
    }

    ZENMUSE_XT.onmousemove = function() {
        image3.setAttribute('src', 'img/ZENMUSE XT.png');
        box3.style.display = 'block';

    }
    ZENMUSE_XT.onmouseleave = function() {
        box3.style.display = 'none';
    }

    ZENMUSE_Z30.onmousemove = function() {
        image3.setAttribute('src', 'img/ZENMUSE Z30.png');
        box3.style.display = 'block';

    }
    ZENMUSE_Z30.onmouseleave = function() {
        box3.style.display = 'none';
    }

    GS_PRO.onmousemove = function() {
        image3.setAttribute('src', 'img/GS PRO.png');
        box3.style.display = 'block';

    }
    GS_PRO.onmouseleave = function() {
        box3.style.display = 'none';
    }

    DJI_TRACKTENNA.onmousemove = function() {
        image3.setAttribute('src', 'img/DJI TRACKTENNA.png');
        box3.style.display = 'block';

    }
    DJI_TRACKTENNA.onmouseleave = function() {
        box3.style.display = 'none';
    }

    // 第五个二级菜单
    MAVIC.onmousemove = function() {
        image5.setAttribute('src', 'img/mavic2.png');
        box5.style.display = 'block';

    }
    MAVIC.onmouseleave = function() {
        box5.style.display = 'none';
    }

    PHANTOM.onmousemove = function() {
        image5.setAttribute('src', 'img/Phantom 4 Pro.png');
        box5.style.display = 'block';

    }
    PHANTOM.onmouseleave = function() {
        box5.style.display = 'none';
    }

    INSPIRE.onmousemove = function() {
        image5.setAttribute('src', 'img/Inspire 2.png');
        box5.style.display = 'block';

    }
    INSPIRE.onmouseleave = function() {
        box5.style.display = 'none';
    }

    OSMO.onmousemove = function() {
        image5.setAttribute('src', 'img/Osmo Pro Raw.png');
        box5.style.display = 'block';

    }
    OSMO.onmouseleave = function() {
        box5.style.display = 'none';
    }

    RONIN.onmousemove = function() {
        image5.setAttribute('src', 'img/Ronin-MX.png');
        box5.style.display = 'block';

    }
    RONIN.onmouseleave = function() {
        box5.style.display = 'none';
    }

    INDUSTRIAL.onmousemove = function() {
        image5.setAttribute('src', 'img/S1000_plus.png');
        box5.style.display = 'block';

    }
    INDUSTRIAL.onmouseleave = function() {
        box5.style.display = 'none';
    }

}