function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function formatTimestamp(timestamp) {
    var date = new Date(timestamp);
    var text = '';
    text += date.getFullYear();
    text += '-';
    if (date.getMonth() < 9) text += '0';
    text += (date.getMonth() + 1);
    text += '-';
    if (date.getDate() < 10) text += '0';
    text += date.getDate();
    text += ' ';
    if (date.getHours() < 10) text += '0';
    text += date.getHours();
    text += ':';
    if (date.getMinutes() < 10) text += '0';
    text += date.getMinutes();
    text += ':';
    if (date.getSeconds() < 10) text += '0';
    text += date.getSeconds();

    return text;
};

function formatTimeInterval(start, end) {
    var INTERVAL_SECOND = 1000;
    var INTERVAL_MINUTE = 60 * INTERVAL_SECOND;
    var INTERVAL_HOUR = INTERVAL_MINUTE * 60;
    var INTERVAL_DAY = INTERVAL_HOUR * 24;
    var interval = end - start;

    var text = '';
    if (interval < 0) {
        text += '-';
        interval *= -1;
    }
    if (interval > INTERVAL_DAY) {
        text += Math.floor(interval / INTERVAL_DAY);
        text += ' 日 ';
        interval %= INTERVAL_DAY;
    }
    if (interval > INTERVAL_HOUR) {
        text += Math.floor(interval / INTERVAL_HOUR);
        text += ' 时 ';
        interval %= INTERVAL_HOUR;
    }
    if (interval > INTERVAL_MINUTE) {
        text += Math.floor(interval / INTERVAL_MINUTE);
        text += ' 分 ';
        interval %= INTERVAL_MINUTE;
    }

    text += Math.floor(interval / INTERVAL_SECOND);
    text += ' 秒';

    return text;
};

function generateDeletionLink1() {
    var type = getType(1);
    var timestamp = getTimeStamp(1);
    var html = '';
    html += '<div>复制此代码以在一个帖子或页面中放入计时器：</div>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(1,1)" id="timer1">[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]</a></strong></blockquote>';
    html += '</div>';
    html += '<hr></hr>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(1,2)" id="timer2">由于条目的分数为-X分，现根据[[[deletions-guide|删帖指导]]]，宣告将删除此页：';
    html += '<br>';
    html += '[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]';
    html += '<br>';
    html += '如果你不是作者又想要重写该条目，请在此帖回复申请。请先取得作者（或管理员，如果此文档搬运自Fandom的话）的同意，并将原文的源代码复制至沙盒里。除非你是工作人员，否则请勿就申请重写以外的范围回复此帖。</a></strong></blockquote>';
    html += '</div>';
    html += '<hr></hr>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(1,3)" id="timer3">由于翻译质量不佳，宣告删除。\n';
    html += '<br>';
    html += '[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]</strong></blockquote>';
    html += '</div>';
    html += '<div>';
    html += '<iframe src="https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + '" style="width: 400px; height: 60px;"></iframe>';
    html += '</div>';
    $('#generated').html(html);
}

function generateDeletionLink2() {
    var type = getType(2);
    var timestamp = getTimeStamp(2);
    var html = '';
    html += '<div>复制此代码以在一个帖子或页面中放入计时器：</div>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(2,1)">[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]</a></strong></blockquote>';
    html += '</div>';
    html += '<hr></hr>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(2,2)">由于条目的分数为-X分，现根据[[[deletions-guide|删帖指导]]]，宣告将删除此页：';
    html += '<br>';
    html += '[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]';
    html += '<br>';
    html += '如果你不是作者又想要重写该条目，请在此帖回复申请。请先取得作者（或管理员，如果此文档搬运自Fandom的话）的同意，并将原文的源代码复制至沙盒里。除非你是工作人员，否则请勿就申请重写以外的范围回复此帖。</a></strong></blockquote>';
    html += '</div>';
    html += '<hr></hr>';
    html += '<div>';
    html += '<blockquote><strong><a href="javascript:;" onclick="copy(2,3)">由于翻译质量不佳，宣告删除。';
    html += '<br>';
    html += '[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]</strong></blockquote>';
    html += '</div>';
    html += '<div>';
    html += '<iframe src="https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + '" style="width: 400px; height: 60px;"></iframe>';
    html += '</div>';
    $('#generated').html(html);
}

function getType(linkType) {
    var type = $('input:radio[name=type' + linkType + ']:checked').val();
    return type;
}

function getTimeStamp(linkType) {
    var month = $('#gen' + linkType + 'Month').val();
    var day = $('#gen' + linkType + 'Day').val();
    var year = $('#gen' + linkType + 'Year').val();
    var hour = $('#gen' + linkType + 'Hour').val();
    var minute = $('#gen' + linkType + 'Minute').val();
    var now = new Date();
    switch (linkType) {
        case 1:
            var timestamp = new Date(year, month, day, hour, minute, 0, 0);
            break;
        case 2:
            var timestamp = new Date(now.getTime() + (day * 24 * 60 * 60 * 1000) + (hour * 60 * 60 * 1000) + (minute * 60 * 1000));
            break;
    }
    return timestamp;
}

function copy(linkType, timeType) {
    var timestamp = getTimeStamp(linkType);
    var type = getType(linkType);
    switch (timeType) {
        case 1:
            setCopy('[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]');
            break;
        case 2:
            setCopy('由于条目的分数为-X分，现根据[[[deletions-guide|删帖指导]]]，宣告将删除此页：\n[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]\n如果你不是作者又想要重写该条目，请在此帖回复申请。请先取得作者（或管理员，如果此文档搬运自Fandom的话）的同意，并将原文的源代码复制至沙盒里。除非你是工作人员，否则请勿就申请重写以外的范围回复此帖。');
            break;
        case 3:
            setCopy('由于翻译质量不佳，宣告删除。\n[[iframe https://arandintday.github.io/thebackhubscn/Deletion%20Time%20Tool/Deletion%20Time%20Tool.html?timestamp=' + timestamp.getTime() + '&type=' + type + ' style="width: 400px; height: 60px;"]]');
            break;
    }
}

//复制函数，复制自某使用 Discuz! 的论坛，里面的内容我只能看懂一半，所以懒得删
function setCopy(text, msg) {
    var content = document.createElement('textarea');
    content.style.fontSize = '12pt';
    content.style.border = '0';
    content.style.padding = '0';
    content.style.margin = '0';
    content.style.position = 'absolute';
    content.style.left = '-9999px';
    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
    content.style.top = yPosition + 'px';
    content.setAttribute('readonly', '');
    content.value = text;
    var ap = document.getElementById('append_parent');
    ap.appendChild(content);
    content.select();
    content.setSelectionRange(0, content.value.length);
    try {
        var success = document.execCommand('copy', false, null);
    } catch (e) {
        var success = false;
    }
    ap.removeChild(content);
    if (success) {
        if (msg) {
            showPrompt(null, null, '<span>' + msg + '</span>', 1500);
        }
    } else if (BROWSER.ie) {
        var r = clipboardData.setData('Text', text);
        if (r) {
            if (msg) {
                showPrompt(null, null, '<span>' + msg + '</span>', 1500);
            }
        } else {
            showDialog('<div class="c"><div style="width: 200px; text-align: center;">复制失败，请选择“允许访问”</div></div>', 'alert');
        }
    } else {
        var msg = '<div class="c"><div style="width: 200px; text-align: center; text-decoration:underline;">点此复制到剪贴板</div>' + AC_FL_RunContent('id', 'clipboardswf', 'name', 'clipboardswf', 'devicefont', 'false', 'width', '200', 'height', '40', 'src', STATICURL + 'image/common/clipboard.swf', 'menu', 'false', 'allowScriptAccess', 'sameDomain', 'swLiveConnect', 'true', 'wmode', 'transparent', 'style', 'margin-top:-20px') + '</div>';
        showDialog(msg, 'info');
        CLIPBOARDSWFDATA = text;
    }
}

var timestamp;
var message1;
var message2;

function tick() {
    var now = new Date();
    var html = '';
    if (timestamp.getTime() > now.getTime()) {
        html += '<div style="color: red;">' + message1 + ':</div>';
        html += '<div style="font-size: 12pt; font-weight: bold;">';
        html += formatTimeInterval(now.getTime(), timestamp.getTime());
        html += '</div>'
    } else {
        html += '<div style="color: green;">' + message2 + ':</div>';
        html += '<div style="font-size: 12pt; font-weight: bold;">';
        html += formatTimeInterval(timestamp.getTime(), now.getTime());
        html += '前</div>'
    }
    $('#allcontent').html(html);
}

function initGenerators() {
    var vars = getUrlVars();
    var now = new Date();
    var i;
    var html = '';
    var type = 0;
    switch (vars["type"]) {
        case '1':
            message1 = '此次封禁将在以下时间后失效';
            message2 = '此次封禁已在以下时间前失效';
            type = 1;
            break;
        case '0':
            message1 = '该页面将在以下时间后可供删除';
            message2 = '该页面已在以下时间前可供删除';
            type = 2;
            break;
        default:
            message1 = '该计时器将在以下时间后到期';
            message2 = '该计时器已在以下时间前到期';
    }
    if (vars["timestamp"]) {
        //alert(vars["timestamp"]);
        timestamp = new Date(parseInt(vars["timestamp"]));
        tick();
        setInterval(tick, 1000);
        $('#allcontent').show();
        return;
    }
    html += '<div>';
    html += '计时器类型：';
    html += '<input type="radio" name="type1" value="0" checked> 删除计时器 &mdash; ';
    html += '<input type="radio" name="type1" value="1"> 封禁计时器 &mdash; ';
    html += '<input type="radio" name="type1" value="2"> 通用/其它';
    html += '</div>';
    html += '<div>';
    html += '删除时间：';
    html += '<select id="gen1Year" name="year">';
    for (i = 2022; i < 2050; i++) {
        html += '<option value="' + i + '"' + (now.getFullYear() == i ? ' selected' : '') + '>' + i + '</option>';
    }
    html += '</select>';
    html += ' 年 ';
    html += '<select id="gen1Month" name="month">';
    for (i = 0; i < 12; i++) {
        html += '<option value="' + i + '"' + (now.getMonth() == i ? ' selected' : '') + '>' + (i + 1) + '</option>';
    }
    html += '</select>';
    html += ' 月 ';
    html += '<select id="gen1Day" name="day">';
    for (i = 1; i < 32; i++) {
        html += '<option value="' + i + '"' + (now.getDate() == i ? ' selected' : '') + '>' + i + '</option>';
    }
    html += '</select>';
    html += ' 日 ';
    html += '<select id="gen1Hour" name="hour">';
    for (i = 0; i < 24; i++) {
        html += '<option value="' + i + '"' + (now.getHours() == i ? ' selected' : '') + '>' + (i < 10 ? '0' : '') + i + '</option>';
    }
    html += '</select>';
    html += ' 时 ';
    html += '<select id="gen1Minute" name="minute">';
    for (i = 0; i < 60; i++) {
        html += '<option value="' + i + '"' + (now.getMinutes() == i ? ' selected' : '') + '>' + (i < 10 ? '0' : '') + i + '</option>';
    }
    html += '</select>';
    html += ' 分 ';
    html += ' <input type="submit" value="生成！" />';
    html += '</div>';

    $("#genForm1Contents").html(html);
    html = '';
    html += '<div>';
    html += '计时器类型：';
    html += '<input type="radio" name="type2" value="0" checked> 删除计时器 &mdash; ';
    html += '<input type="radio" name="type2" value="1"> 封禁计时器 &mdash; ';
    html += '<input type="radio" name="type2" value="2"> 通用/其它';
    html += '</div>';
    html += '<div>';
    html += '在以下时段后删除：';
    html += '<select id="gen2Day" name="day">';
    for (i = 0; i < 31; i++) {
        if (i == 3)
            html += '<option value="' + i + '" selected="selected">' + i + '</option>';
        else
            html += '<option value="' + i + '">' + i + '</option>';
    }
    html += '</select>';
    html += ' 日 ';
    html += '<select id="gen2Hour" name="hour">';
    for (i = 0; i < 24; i++) {
        html += '<option value="' + i + '">' + i + '</option>';
    }
    html += '</select>';
    html += ' 时 ';
    html += '<select id="gen2Minute" name="minute">';
    for (i = 0; i < 60; i++) {
        html += '<option value="' + i + '">' + i + '</option>';
    }
    html += '</select>';
    html += ' 分 ';
    html += '<input type="submit" value="生成！" />';
    $("#genForm2Contents").html(html);
    $('#allcontent').show();
}