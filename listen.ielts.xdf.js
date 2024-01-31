// ==UserScript==
// @name         新东方雅思精听
// @namespace    http://tampermonkey.net/
// @version      2024-01-31
// @description  try to take over the world!
// @author       You
// @match        https://ieltscat.xdf.cn/intensive/intensive/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xdf.cn
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        let abc1 = $('<div>&nbsp;</div><div><textarea id= "tb" style="resize:height;float:center;width:95%;font-size:20px;" rows="12"></textarea></div>');
        $(".boxParent").after(abc1);

        $("#tb").keydown(function(event){
            if(event.keyCode == 32){
                event.stopPropagation();
            }
        });
}, 50)

})();
