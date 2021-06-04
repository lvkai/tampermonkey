// ==UserScript==
// @name         网易云课堂总课时
// @namespace    study.163.com
// @version      0.1
// @description  显示总课时
// @author       lvkai
// @match        https://study.163.com/course/introduction.htm*
// @icon         https://www.google.com/s2/favicons?domain=163.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    setTimeout(function(){
        $(function(){
            var all = 0;
            $("span.kstime").each(function (index, element) {
                var t = $(this).text();
                if(t.length > 4){
                    var tt = t.split(":");
                    all += tt[0] * 60;
                    all += tt[1] * 1;
                }
            });
            //更新页面;
            var ttt = Math.floor(all/3600) + ":" + Math.floor(all/60%60) + ":" + all%60;
            console.log(ttt);
            var abc = $('<span id="abc" style="color:black;font-size:18px;font-weight:normal"></span>');
            $(".u-coursetitle_title").after(abc);
            $("#abc").append(" " + ttt);
        });
    }, 3000);
})();
