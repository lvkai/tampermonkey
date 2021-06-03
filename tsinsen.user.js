// ==UserScript==
// @name         清澄统计
// @namespace    tsinsen
// @version      0.1
// @description  统计题目完成情况
// @author       lvkai
// @match        http://sy.hhwdd.com/new/user/myassignments.page
// @icon         https://www.google.com/s2/favicons?domain=hhwdd.com
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
setTimeout(function(){
    document.getElementById("assignmenttitle").innerHTML="我的作业（共" + ($(".prlist-container.well").length - $("span:contains('自由练习')").length) + "次课，" + $( "span:contains('自由练习')" ).length + "次练习，已完成" + $("span:contains('已完成')").length + "课。共" + $(".btn.btn-prob").length/2 + "题，未做" + $(".btn-default.btn-prob").length/2 + "题，不及格" + $(".btn-warning.btn-prob").length/2 + "题，及格" +  $(".btn-info.btn-prob").length/2 + "题，完成" + $(".btn-success.btn-prob").length/2 + "题。）";
},800)
})();
