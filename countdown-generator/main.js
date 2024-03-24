$(function () {
    let urlParams = new window.URLSearchParams(window.location.search);

    function initialize() {
        let now = new Date();
        let dateNum = checkDateNum();

        function checkDateNum() {
            let month = $("#when-month").val();
            let year = $("#when-year").val();
            let dateNum =
                month == 4 || month == 6 || month == 9 || month == 11
                    ? 30
                    : month == 2
                    ? (year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0
                        ? 29
                        : 28
                    : 31;
            return dateNum;
        }

        for (i = now.getFullYear() - 2; i <= Math.floor(now.getFullYear() / 10) * 10 + 20; i++) {
            $("#when-year").append(
                '<option value="' + i + '"' + (i == now.getFullYear() ? " selected" : "") + ">" + i + "</option>"
            );
        }
        for (i = 0; i <= 20; i++) {
            $("#after-year").append('<option value="' + i + '"' + (i == 0 ? " selected" : "") + ">" + i + "</option>");
        }

        for (i = 0; i < 12; i++) {
            $("#when-month").append(
                '<option value="' +
                    (i + 1) +
                    '"' +
                    (i == now.getMonth() ? " selected" : "") +
                    ">" +
                    (i + 1) +
                    "</option>"
            );
            $("#after-month").append('<option value="' + i + '"' + (i == 0 ? " selected" : "") + ">" + i + "</option>");
        }

        for (i = 1; i <= dateNum; i++) {
            $("#when-date").append(
                '<option value="' + i + '"' + (i == now.getDate() ? " selected" : "") + ">" + i + "</option>"
            );
        }
        for (i = 0; i <= 30; i++) {
            $("#after-date").append('<option value="' + i + '"' + (i == 3 ? " selected" : "") + ">" + i + "</option>");
        }

        $("#whentime-field select").on("change", function () {
            dateNum = checkDateNum();
            if ($("#when-date").children().length < dateNum) {
                for (i = $("#when-date").children().length + 1; i <= dateNum; i++) {
                    $("#when-date").append('<option value="' + i + '"' + ">" + i + "</option>");
                }
            } else if ($("#when-date").children().length > dateNum) {
                for (i = $("#when-date").children().length; i > dateNum; i--) {
                    $("#when-date")
                        .children('option[value="' + i + '"]')
                        .remove();
                    $("#when-date")
                        .children('option[value="' + dateNum + '"]')
                        .attr({ selected: true });
                }
            }
        });

        for (i = 0; i < 24; i++) {
            $("#when-hour").append(
                '<option value="' +
                    (i < 10 ? "0" + i : i) +
                    '"' +
                    (i == now.getHours() ? " selected" : "") +
                    ">" +
                    (i < 10 ? "0" + i : i) +
                    "</option>"
            );
            $("#after-hour").append('<option value="' + i + '"' + (i == 0 ? " selected" : "") + ">" + i + "</option>");
        }

        for (i = 0; i < 60; i++) {
            $("#when-minute").append(
                '<option value="' +
                    (i < 10 ? "0" + i : i) +
                    '"' +
                    (i == now.getMinutes() ? " selected" : "") +
                    ">" +
                    (i < 10 ? "0" + i : i) +
                    "</option>"
            );
            $("#after-minute").append(
                '<option value="' + i + '"' + (i == 0 ? " selected" : "") + ">" + i + "</option>"
            );
        }

        if (window.location.search != "") {
            $("#main-wrapper").remove();
            $("#countdown-wrapper").attr({ hidden: false });
            $("body").css("margin", "0");
            setInterval(outputTimer, 1000);
        }

        function outputTimer() {
            if (urlParams.has("time") == false) {
                $("#countdown-wrapper .warning").text("缺少参数：time，请检查链接参数。");
                return;
            }
            let now = new Date().getTime();
            let time = new Date(urlParams.get("time")).getTime();
            let type = urlParams.get("type");
            let custom1 = decodeURIComponent(urlParams.get("custom1"));
            let custom2 = decodeURIComponent(urlParams.get("custom2"));
            let remainTime = time > now ? time - now : now - time;
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
            let remainSecond, remainMinute, remainHour, remainDay;
            remainDay = Math.floor(remainTime / day);
            remainHour = Math.floor((remainTime % day) / hour);
            remainMinute = Math.floor(((remainTime % day) % hour) / minute);
            remainSecond = Math.floor((((remainTime % day) % hour) % minute) / second);

            if (time > now) {
                $("#countdown-wrapper .text")
                    .text(
                        custom1 != "null"
                            ? custom1
                            : type == 0
                            ? "该页面将在以下时间后被删除："
                            : type == 1
                            ? "该用户将在以下时间后解除封禁："
                            : "该计时器将在以下时间后到期："
                    )
                    .css("color", "red");
                $("#countdown-wrapper .timer").text(
                    (remainDay == 0 ? "" : remainDay + " 日 ") +
                        (remainHour && remainDay == 0 ? "" : remainHour + " 时 ") +
                        (remainMinute == 0 && remainHour == 0 && remainDay == 0
                            ? ""
                            : (remainMinute < 10 ? "0" + remainMinute : remainMinute) + " 分 ") +
                        (remainSecond == 0 && remainMinute == 0 && remainHour == 0 && remainDay == 0
                            ? ""
                            : (remainSecond < 10 ? "0" + remainSecond : remainSecond) + " 秒")
                );
            } else {
                $("#countdown-wrapper .text")
                    .text(
                        custom2 != "null"
                            ? custom2
                            : type == 0
                            ? "该页面已在以下时间前可被删除："
                            : type == 1
                            ? "该用户已在以下时间前可被解除封禁："
                            : "该计时器已在以下时间前到期："
                    )
                    .css("color", "green");
                $("#countdown-wrapper .timer").text(
                    (remainDay == 0 ? "" : remainDay + " 日 ") +
                        (remainHour == 0 && remainDay == 0 ? "" : remainHour + " 时 ") +
                        (remainMinute == 0 && remainHour == 0 && remainDay == 0
                            ? ""
                            : (remainMinute < 10 ? "0" + remainMinute : remainMinute) + " 分 ") +
                        (remainSecond == 0 && remainMinute == 0 && remainHour == 0 && remainDay == 0
                            ? ""
                            : (remainSecond < 10 ? "0" + remainSecond : remainSecond) + " 秒前")
                );
            }
        }
    }

    function timerChangeListener() {
        $('#whentime-field input[type="radio"]').on("change", function () {
            if ($("#when-delete").is(":checked")) {
                $("#whentime-field .timer-time span").text("页面删除时间：");
            }
            if ($("#when-ban").is(":checked")) {
                $("#whentime-field .timer-time span").text("封禁到期时间：");
            }
            if ($("#when-custom").is(":checked")) {
                $("#whentime-field .timer-time span").text("计时器结束时间：");
                $("#whentime-field .timer-custom").attr({ hidden: false });
            } else {
                $("#whentime-field .timer-custom").attr({ hidden: true });
            }
        });

        $('#aftertime-field input[type="radio"]').on("change", function () {
            if ($("#after-delete").is(":checked")) {
                $("#aftertime-field .timer-time span").text("在以下时间段后删除页面：");
            }
            if ($("#after-ban").is(":checked")) {
                $("#aftertime-field .timer-time span").text("在以下时间段后解除封禁：");
            }
            if ($("#after-custom").is(":checked")) {
                $("#aftertime-field .timer-time span").text("在以下时间段后结束计时：");
                $("#aftertime-field .timer-custom").attr({ hidden: false });
            } else {
                $("#aftertime-field .timer-custom").attr({ hidden: true });
            }
        });
    }

    function buttonListener() {
        $("#whentime-field button").on("click", function () {
            let type = $("#when-delete").is(":checked") ? 0 : $("#when-ban").is(":checked") ? 1 : 2;
            let custom1 = $("#when-custom-before").val() ? encodeURIComponent($("#when-custom-before").val()) : "";
            let custom2 = $("#when-custom-after").val() ? encodeURIComponent($("#when-custom-after").val()) : "";
            let time = new Date(
                $("#when-year").val(),
                $("#when-month").val() - 1,
                $("#when-date").val(),
                $("#when-hour").val(),
                $("#when-minute").val()
            ).toISOString();
            outputHandler(time, type, custom1, custom2);
        });

        $("#aftertime-field button").on("click", function () {
            let type = $("#after-delete").is(":checked") ? 0 : $("#after-ban").is(":checked") ? 1 : 2;
            let custom1 = $("#after-custom-before").val() ? encodeURIComponent($("#after-custom-before").val()) : "";
            let custom2 = $("#after-custom-after").val() ? encodeURIComponent($("#after-custom-after").val()) : "";
            let now = new Date();
            let time = new Date(
                now.getFullYear() + parseInt($("#after-year").val()),
                now.getMonth() + parseInt($("#after-month").val()),
                now.getDate() + parseInt($("#after-date").val()),
                now.getHours() + parseInt($("#after-hour").val()),
                now.getMinutes() + parseInt($("#after-minute").val())
            ).toISOString();
            outputHandler(time, type, custom1, custom2);
        });

        function outputHandler(time, type, custom1, custom2) {
            let finalLink =
                window.location.href +
                "?time=" +
                time +
                "&type=" +
                type +
                (custom1 ? "&custom1=" + custom1 : "") +
                (custom2 ? "&custom2=" + custom2 : "");
            $(".generated blockquote").text("[[iframe " + finalLink + ' style="width: 400px; height: 60px;"]]');

            $(".generated").attr({ hidden: false });
            $(".generated iframe").attr({
                src: finalLink,
            });
        }
    }

    initialize();
    timerChangeListener();
    buttonListener();
});
