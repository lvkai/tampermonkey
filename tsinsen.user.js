// ==UserScript==
// @name         清澄作业统计
// @namespace    tsinsen
// @version      0.8
// @description  统计作业完成情况
// @author       lvkai
// @match        https://sy.hhwdd.com/new/user/myassignments.page
// @icon         https://www.google.com/s2/favicons?domain=hhwdd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //全部题
    let all = new Set();
    //未做题
    let undo = new Set();
    //低分题
    let low = new Set();
    //高分题
    let high = new Set();
    //满分题
    let good = new Set();
    //总分
    let p = 0;
    //课数
    let lesson = 0;
    let finish = 0;

    let page = 1;
    let pagecount = 12;
    while(page <= pagecount){
        $.getJSON( "assignment.MyAssignments.dt?alldomain=yes&page=" + page, function(data ) {
            //遍历页
            $.each(data, function(ke, ke_val) {
                if(!isNaN(ke)) {
                    //遍历课
                    lesson++;
                    let lessonpass = true;
                    $.each(ke_val, function(ti, ti_val) {
                        if(!isNaN(ti)) {
                            //遍历题的属性
                            let gpid = "";
                            let score = 0;
                            $.each(ti_val, function(k, v) {
                                if(k == "gpid") gpid = v;
                                if(k == "score"){
                                    if(!isNaN(v)) score = v * 1;
                                    if(score != 100) lessonpass = false;
                                }
                            });
                            //如果不是重复题
                            if(!all.has(gpid)){
                                all.add(gpid);
                                if(score == 100) good.add(gpid);
                                else if(score >= 60) high.add(gpid);
                                else if(score > 0) low.add(gpid);
                                else if(score == 0) undo.add(gpid);
                                p += score;
                            }
                        }
                    });
                    if(lessonpass){
                        finish++;
                    }
                }
            });
        });
        page++;
    }

setTimeout(function(){
    //更新页面;
    let abc1 = $('<div id="abc1" style="color:black;font-size:14px;font-weight:normal"></div>');
    let abc2 = $('<div id="abc2" style="color:black;font-size:14px;font-weight:normal"></div>');
    $("#assignmenttitle").after(abc2);
    $("#assignmenttitle").after(abc1);

    document.getElementById("abc1").innerHTML="&nbsp;&nbsp;共" + lesson + "课，已完成" + finish + "课。";
    document.getElementById("abc2").innerHTML="&nbsp;&nbsp;共" + all.size + "题，未做" + undo.size + "题，已做" + (all.size - undo.size) + "题（低分" + low.size + "题，高分" + high.size + "题，满分" + good.size + "题）。总分" + p.toLocaleString() + "分。";
}, 800)
})();
