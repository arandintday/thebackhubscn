var Int = {
    "cn": {
        name: "中文",
        head: "其他语言",
        url: "http://backrooms-wiki-cn.wikidot.com/",
        id: "4716348",
        category: ""
    },
    "en": {
        name: "English",
        head: "Languages",
        url: "http://backrooms-wiki.wikidot.com/",
        id: "4431268",
        category: ""
    },
    "es": {
        name: "Español",
        head: "En otros idiomas",
        url: "http://es-backrooms-wiki.wikidot.com/",
        id: "4745515",
        category: ""
    },
    "fr": {
        name: "Français",
        head: "Dans d’autres langues",
        url: "http://fr-backrooms-wiki.wikidot.com/",
        id: "4710749",
        category: ""
    },
    "ptbr": {
        name: "Português",
        head: "Em outros idiomas",
        url: "http://pt-br-backrooms-wiki.wikidot.com/",
        id: "4714912",
        category: ""
    },
    "ru": {
        name: "Русский",
        head: "На других языках",
        url: "http://ru-backrooms-wiki.wikidot.com/",
        id: "4548260",
        category: ""
    },
    "vn": {
        name: "Tiếng Việt",
        head: "Ngôn ngữ",
        url: "http://backrooms-vn.wikidot.com/",
        id: "4748367",
        category: ""
    }
};

function bhlDark() {
    var bhlDarkStyle = document.createElement("style");
    bhlDarkStyle.setAttribute("type", "text/css");
    bhlDarkStyle.innerHTML = "@import url(https://cdn.jsdelivr.net/gh/scp-cn-tech/interwiki@cn/style-bhl-dark.css);";
    document.getElementsByTagName("head")[0].insertBefore(bhlDarkStyle, document.getElementById("custom-style"));
}

function bhlDarkCheck() {
    try {
        if (window.parent.window.BHLDarkFrame) {
            bhlDark();
        }
    } catch (e) {}
}

bhlDarkCheck();
