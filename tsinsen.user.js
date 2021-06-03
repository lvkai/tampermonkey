// ==UserScript==
// @name         清澄统计
// @namespace    tsinsen
// @version      0.1
// @description  统计题目完成情况
// @author       lvkai
// @match        http://sy.hhwdd.com/new/user/myassignments.page
// @icon         https://www.google.com/s2/favicons?domain=hhwdd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

setTimeout(function(){
    //全部题
    var all = new Array();
    $(".btn.btn-prob").each(function (index, element) {
        all.push($(this).attr("gpid"));//往数组中存入值
    });
    $.unique(all.sort());
    var a = all.length;

    //未做题
    var undo = new Array();
    $(".btn-default.btn-prob").each(function (index, element) {
        undo.push($(this).attr("gpid"));//往数组中存入值
    });
    $.unique(undo.sort());
    var b = undo.length;

    //低分题
    var low = new Array();
    $(".btn-warning.btn-prob").each(function (index, element) {
        low.push($(this).attr("gpid"));//往数组中存入值
    });
    $.unique(low.sort());
    var c = low.length;

    //高分题
    var high = new Array();
    $(".btn-info.btn-prob").each(function (index, element) {
        high.push($(this).attr("gpid"));//往数组中存入值
    });
    $.unique(high.sort());
    var d = high.length;

    //满分题
    var good = new Array();
    $(".btn-success.btn-prob").each(function (index, element) {
        good.push($(this).attr("gpid"));//往数组中存入值
    });
    $.unique(good.sort());
    var e = good.length;

    //更新页面
    document.getElementById("assignmenttitle").innerHTML="我的作业（共" + ($(".prlist-container.well").length - $("span:contains('自由练习')").length) + "次课，" + $( "span:contains('自由练习')" ).length + "次练习，已完成" + $("span:contains('已完成')").length + "课。共" + a + "题，未做" + b + "题，低分" + c + "题，高分" + d + "题，满分" + e + "题。）";
}, 800)
})();
