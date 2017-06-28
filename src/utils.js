export default  {
    rem: function() {
        var ua = navigator.userAgent.toLowerCase(),
            isiOS = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1;
        var Dpr = 1,
            uAgent = window.navigator.userAgent;
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth,
            wDpr, wFsize;
        var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
        if (window.devicePixelRatio) {
            wDpr = window.devicePixelRatio;
        } else {
            wDpr = isiOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
        }
        if (isiOS) {
            wWidth = screen.width;
            wHeight = screen.height;
        }

        if (wWidth > wHeight) {
            wWidth = wHeight;
        }
        wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
        wFsize = wFsize > 32 ? wFsize : 32;
        document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
    }
}