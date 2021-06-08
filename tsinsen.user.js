// ==UserScript==
// @name         清澄作业统计
// @namespace    tsinsen
// @version      0.5
// @description  统计作业完成情况
// @author       lvkai
// @match        http://sy.hhwdd.com/new/user/myassignments.page
// @icon         https://www.google.com/s2/favicons?domain=hhwdd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

setTimeout(function(){
    let part = 0;
    //全部题
    let all = new Set();
    $(".btn.btn-prob").each(function (index, element) {
        all.add($(this).attr("gpid"));
    });

    //未做题
    let undo = new Set();
    $(".btn-default.btn-prob").each(function (index, element) {
        undo.add($(this).attr("gpid"));
    });

    //低分题
    let low = new Set();
    $(".btn-warning.btn-prob").each(function (index, element) {
        let gpid = $(this).attr("gpid");
        if(!low.has(gpid)){
            let p1 = $(this).text().split("\(");
            let p2 = p1[p1.length - 1].split("\)");
            part += p2[0] * 1;
        }
        low.add(gpid);
    });

    //高分题
    let high = new Set();
    $(".btn-info.btn-prob").each(function (index, element) {
        let gpid = $(this).attr("gpid");
        if(!high.has(gpid)){
            let p1 = $(this).text().split("\(");
            let p2 = p1[p1.length - 1].split("\)");
            part += p2[0] * 1;
        }
        high.add(gpid);
    });

    //满分题
    let good = new Set();
    $(".btn-success.btn-prob").each(function (index, element) {
        good.add($(this).attr("gpid"));
    });

    let p = good.size * 100 + part;

    //更新页面;
    let abc1 = $('<div id="abc1" style="color:black;font-size:14px;font-weight:normal"></div>');
    let abc2 = $('<div id="abc2" style="color:black;font-size:14px;font-weight:normal"></div>');
    $("#assignmenttitle").after(abc2);
    $("#assignmenttitle").after(abc1);

    document.getElementById("abc1").innerHTML="&nbsp;&nbsp;共" + ($(".prlist-container.well").length - $("span:contains('自由练习')").length) + "次课，" + $( "span:contains('自由练习')" ).length + "次练习，已完成" + $("span:contains('已完成')").length + "课。";
    document.getElementById("abc2").innerHTML="&nbsp;&nbsp;共" + all.size + "题，未做" + undo.size + "题，低分" + low.size + "题，高分" + high.size + "题，满分" + good.size + "题。总分" + p.toLocaleString() + "分。";
}, 800)
})();
