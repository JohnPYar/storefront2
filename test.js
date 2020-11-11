var chtStoreId,
    chaty_settings = ($style = chatycountry = ""),
    updatecount = (isshowchaty = 0),
    isowner = "no",
    chtMainDomain = "https://ec.premio.io/chaty",
    chtBaseURL = chtMainDomain,
    pathName = window.location.pathname;
pathName = pathName.substr(1);
var chatyDefaultSettings,
    country_name = "",
    widget_status = !1,
    activeIndexID = 0,
    currentCountryCount = "",
    isChatyInMobile = !1,
    exitIntentStatus = !1,
    pageScrollStatus = !1,
    timeIntervalStatus = !1,
    maxTimeInterval = 0,
    chatyFunctionLoaded = !1,
    isBoatUser = !1;
function launch_chaty() {
    document.querySelector(".chaty-widget").classList.contains("one_widget") || document.querySelector(".chaty-widget").classList.add("chaty-widget-show");
}
!(function () {
    var t = 0;
    function e(t) {
        (o = ""),
            (o += ".chaty-widget-is a{display: block; margin:0; padding:0; }"),
            (o += ".chaty-widget-is svg{margin:0; padding:0;}"),
            (o += ".chaty-main-widget { display: none; }"),
            (o += ".chaty-in-desktop .chaty-main-widget.is-in-desktop { display: block; }"),
            (o += ".chaty-in-mobile .chaty-main-widget.is-in-mobile { display: block; }"),
            (o += ".chaty-widget.hide-widget { display: none !important; }"),
            t("body").append("<style>" + o + "</style>"),
            (isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        var e = "no",
            n = new RegExp(
                "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)",
                "i"
            ),
            c = navigator.userAgent;
        n.test(c) && (e = "yes");
        var o = "",
            r = s("DisableChaty"),
            g = t("#admin-bar-iframe").html();
        "dismiss" != r && (updatecount = 1),
        void 0 !== g && ((isowner = "yes"), a("chatyisowner", "yes", 1e3)),
        "yes" == s("chatyisowner") && (isowner = "yes"),
        "no" == e &&
        ("" == chaty_settings
            ? ((chtStoreId = Ecwid.getOwnerId()),
                t.ajax({
                    type: "POST",
                    url: chtBaseURL + "/settings/get_list/",
                    data: { isMobile: isMobile, pathName: pathName, updatecount: updatecount, store_id: chtStoreId },
                    success: function (e) {
                        if ("null" != e && "" != e) {
                            chatyDefaultSettings = e;
                            var a = t.parseJSON(e);
                            (chaty_settings = a), console.clear(), i(t);
                        }
                    },
                }))
            : (t(".chaty-widget").remove(),
                (isChatyInMobile = !1),
                (exitIntentStatus = !1),
                (pageScrollStatus = !1),
                (timeIntervalStatus = !1),
                (maxTimeInterval = 0),
                (chatyFunctionLoaded = !1),
                (chaty_settings = t.parseJSON(chatyDefaultSettings)),
                i(t)));
    }
    function i(t) {
        !(function (t) {
            var e = {};
            function i(a) {
                if (e[a]) return e[a].exports;
                var s = (e[a] = { i: a, l: !1, exports: {} });
                return t[a].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
            }
            (i.m = t),
                (i.c = e),
                (i.d = function (t, e, a) {
                    i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: a });
                }),
                (i.n = function (t) {
                    var e =
                        t && t.__esModule
                            ? function () {
                                return t.default;
                            }
                            : function () {
                                return t;
                            };
                    return i.d(e, "a", e), e;
                }),
                (i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (i.p = "/"),
                i((i.s = 10));
        })({
            10: function (t, e, i) {
                i(11), (t.exports = i(12));
            },
            11: function (e, i) {
                !(function (e) {
                    var i = chaty_settings;
                    function n(t) {
                        for (var e = t + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                            for (var s = i[a]; " " == s.charAt(0); ) s = s.substring(1);
                            if (0 == s.indexOf(e)) return s.substring(e.length, s.length);
                        }
                        return "";
                    }
                    function c(e) {
                        if (((activeIndexID = e), e < i.chaty_widgets.length)) {
                            if ((1 == i.chaty_widgets[e].isremovectacookie && a("chaty_settings", "", "0"), i.chaty_widgets[e].countries.length > 0))
                                if ("" == country_name) {
                                    t.get("https://www.cloudflare.com/cdn-cgi/trace", function (e) {
                                        var a = e.match("loc=(.*)");
                                        a.length > 1 &&
                                        ((a = a[1])
                                            ? ((a = a.toUpperCase()),
                                                (country_name = a),
                                                -1 != t.inArray(a, i.chaty_widgets[activeIndexID].countries)
                                                    ? h(activeIndexID)
                                                    : (currentCountryCount++,
                                                        setTimeout(function () {
                                                            c(currentCountryCount);
                                                        }, 10)))
                                            : (currentCountryCount++,
                                                setTimeout(function () {
                                                    c(currentCountryCount);
                                                }, 10)));
                                    });
                                } else
                                    -1 != t.inArray(country_name, i.chaty_widgets[activeIndexID].countries)
                                        ? h(activeIndexID)
                                        : (currentCountryCount++,
                                            setTimeout(function () {
                                                c(currentCountryCount);
                                            }, 10));
                            else h(e);
                            i.chaty_widgets[e].maxvisitor &&
                            (t("head").append('<link rel="stylesheet" id="custom-google-fonts-css" href="https://fonts.googleapis.com/css?family=Poppins:400,600,700" type="text/css" media="all">'),
                                t("body").append(i.chaty_widgets[e].maxvisitormessage));
                        }
                    }
                    if (i.chaty_widgets.length > 0) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                            navigator.userAgent
                            ) ||
                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                navigator.userAgent.substr(0, 4)
                            )) &&
                        (isChatyInMobile = !0),
                            isChatyInMobile ? t("body").addClass("chaty-in-mobile") : t("body").addClass("chaty-in-desktop");
                        var o = new RegExp(
                            "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)",
                            "i"
                            ),
                            r = navigator.userAgent;
                        o.test(r) && (isBoatUser = !0);
                        var g = s("chaty_last_update_time");
                        console.log("lastUpdateTime: " + g),
                            null == g || "" == g ? a("chaty_last_update_time", i.update_time, 7) : i.update_time != g && (a("chaty_settings", null, -1), a("chaty_status_string", null, -1), a("chaty_last_update_time", i.update_time, 7)),
                            c((currentCountryCount = 0)),
                            setTimeout(function () {
                                1 == isshowchaty && a("DisableChaty", "dismiss", 1),
                                "no" == isowner && 1 == isshowchaty && 1 == updatecount && ((url = chtBaseURL + "/visitors/update"), t.ajax({ type: "POST", url: url, data: { store_id: chtStoreId }, success: function (t) {} }));
                            }, 100);
                    }
                    function h(t) {
                        widget_status = !1;
                        for (var e = 0; e < i.chaty_widgets[t].social.length; e++) isChatyInMobile ? i.chaty_widgets[t].social[e].is_mobile && (widget_status = !0) : i.chaty_widgets[t].social[e].is_desktop && (widget_status = !0);
                        widget_status &&
                        ((i.object_settings = i.chaty_widgets[t]),
                        (function (t) {
                            if (0 == i.chaty_widgets[t].page_settings.length) return !0;
                            var e = 0,
                                a = 0,
                                s = window.location.pathname;
                            "/" == s.charAt(0) && (s = s.substring(1, s.length)),
                            s.length > 0 && "/" == s.charAt(s.length - 1) && (s = s.slice(0, -1)),
                            "" != window.location.search && (s = (s += "/" + window.location.search).substr(1)),
                                (s = s.toLowerCase());
                            for (var n = 0; n < i.chaty_widgets[t].page_settings.length; n++) {
                                var c = i.chaty_widgets[t].page_settings[n].cht_option,
                                    o = i.chaty_widgets[t].page_settings[n].cht_value.toLowerCase();
                                if ("" != c && "" != o)
                                    if ("show_on" == i.chaty_widgets[t].page_settings[n].shown_on)
                                        switch (c) {
                                            case "page_contains":
                                                ($index = s.indexOf(o)), -1 !== $index && (e = 1);
                                                break;
                                            case "page_has_url":
                                                s === o && (e = 1);
                                                break;
                                            case "page_start_with":
                                                var r = strlen(o),
                                                    g = s.substring(0, r);
                                                g == o && (e = 1);
                                                break;
                                            case "page_end_with":
                                                var r = strlen(o),
                                                    h = strlen(s) - r,
                                                    g = s.substring(h, r);
                                                g == o && (e = 1);
                                        }
                                    else a++;
                            }
                            i.chaty_widgets[t].page_settings.length == a && (e = 1);
                            for (var n = 0; n < i.chaty_widgets[t].page_settings.length; n++) {
                                var c = i.chaty_widgets[t].page_settings[n].cht_option,
                                    o = i.chaty_widgets[t].page_settings[n].cht_value.toLowerCase();
                                if ("" != c && "" != o)
                                    if ("not_show_on" == i.chaty_widgets[t].page_settings[n].shown_on)
                                        switch (c) {
                                            case "page_contains":
                                                ($index = s.indexOf(o)), -1 !== $index && (e = 0);
                                                break;
                                            case "page_has_url":
                                                s === o && (e = 0);
                                                break;
                                            case "page_start_with":
                                                var r = strlen(o),
                                                    g = s.substring(0, r);
                                                g == o && (e = 0);
                                                break;
                                            case "page_end_with":
                                                var r = strlen(o),
                                                    h = strlen(s) - r,
                                                    g = s.substring(h, r);
                                                g == o && (e = 0);
                                        }
                                    else a++;
                            }
                            return e;
                        })(t) &&
                        (function (t) {
                            var e = 0;
                            if (1 == parseInt(chaty_settings.chaty_widgets[t].display_conditions)) {
                                var i = chaty_settings.chaty_widgets[t].display_rules;
                                if (i.length > 0) {
                                    var a = new Date();
                                    a.setHours(a.getHours() + chaty_settings.chaty_widgets[t].gmt);
                                    for (var s = a.getUTCHours(), n = a.getUTCMinutes(), c = a.getUTCDay(), o = 0; o < i.length; o++) {
                                        var r = 0,
                                            g = 0,
                                            h = 0;
                                        -1 == i[o].days
                                            ? (g = 1)
                                            : i[o].days >= 0 && i[o].days <= 6
                                            ? i[o].days == c && (g = 1)
                                            : 7 == i[o].days
                                                ? c >= 0 && c <= 4 && (g = 1)
                                                : 8 == i[o].days
                                                    ? c >= 1 && c <= 5 && (g = 1)
                                                    : 9 == i[o].days && ((5 != c && 6 != c) || (g = 1)),
                                        i[o].start_hours > i[o].end_hours &&
                                        (0 == g && (i[o].days = i[o].days + 1),
                                            0 == i[o].days
                                                ? (g = 1)
                                                : i[o].days >= 1 && i[o].days <= 7
                                                ? (g = 1)
                                                : 8 == i[o].days
                                                    ? c >= 1 && c <= 5 && (g = 1)
                                                    : 9 == i[o].days
                                                        ? c >= 2 && c <= 6 && (g = 1)
                                                        : 10 == i[o].days && ((6 != c && 0 != c) || (g = 1)),
                                        0 <= i[o].end_hours && s >= i[o].end_hours && (h = 1)),
                                        1 == g &&
                                        (s > i[o].start_hours && s < i[o].end_hours
                                            ? (r = 1)
                                            : s == i[o].start_hours && s < i[o].end_hours
                                                ? n >= i[o].start_min && (r = 1)
                                                : s > i[o].start_hours && s == i[o].end_hours
                                                    ? n <= i[o].end_min && (r = 1)
                                                    : s == i[o].start_hours && s == i[o].end_hours
                                                        ? n >= i[o].start_min && n <= i[o].end_min && (r = 1)
                                                        : i[o].start_hours > i[o].end_hours &&
                                                        (s >= i[o].start_hours && n >= i[o].start_min && n <= i[o].end_min && (r = 1), 1 == h && s <= i[o].end_hours && n >= i[o].start_min && n <= i[o].end_min && (r = 1)),
                                        1 == r && n >= i[o].start_min && n <= i[o].end_min && 1),
                                        1 == r && 1 == g && (e = 1),
                                        1 == e && (o = i.length + 1);
                                    }
                                } else e = 1;
                            } else e = 1;
                            return e;
                        })(t) &&
                        ((chaty_settings.widget_status[t].on_page_status = 1), m(t), u()));
                    }
                    function d() {
                        isChatyInMobile ? t("body").addClass("chaty-in-mobile") : t("body").addClass("chaty-in-desktop"),
                        chatyFunctionLoaded ||
                        ((chatyFunctionLoaded = !0),
                            u(),
                            t(document).on("click", ".i-trigger .i-trigger-open", function () {
                                t(this).closest(".chaty-widget").hasClass("one_widget") || t(this).closest(".chaty-widget").removeClass("none-widget-show").addClass("chaty-widget-show");
                                var e = t(this).closest(".chaty-widget").attr("data-index");
                                "click" == chaty_settings.chaty_widgets[e].click_setting && t(this).addClass("no-tooltip"),
                                    b(e),
                                    _("ca" + chaty_settings.chaty_widgets[e].widget_index),
                                "" != chaty_settings.chaty_widgets[e].animation_class && t("#chaty-animation-" + e).removeClass("chaty-animation-" + chaty_settings.chaty_widgets[e].animation_class),
                                    I(e);
                            }),
                            t(document).on("click", ".i-trigger.one-widget, .i-trigger .i-trigger-open", function () {
                                var e = t(this).closest(".chaty-widget").attr("data-index"),
                                    i = chaty_settings.chaty_widgets[e].widget_index;
                                "click" == chaty_settings.chaty_widgets[e].click_setting && t(this).addClass("no-tooltip"),
                                    b(e),
                                    _("ca" + i),
                                "" != chaty_settings.chaty_widgets[e].animation_class && t("#chaty-animation-" + e).removeClass("chaty-animation-" + chaty_settings.chaty_widgets[e].animation_class);
                            }),
                            t(document).on("click", ".i-trigger .i-trigger-close", function () {
                                t(this).closest(".chaty-widget").hasClass("one_widget") || t(this).closest(".chaty-widget").removeClass("chaty-widget-show").addClass("none-widget-show");
                            }),
                            t(document).on("click", ".chaty-widget .update-analytics", function () {
                                var e = t(this).attr("data-channel");
                                if ("" != e && null != e)
                                    if (window.hasOwnProperty("gtag")) gtag("event", "chaty_" + e, { eventCategory: "chaty_" + e, event_action: "chaty_" + e });
                                    else if (window.hasOwnProperty("ga")) {
                                        var i = window.ga.getAll()[0];
                                        i && i.send("event", "click", { eventCategory: "chaty_" + e, eventAction: "chaty_" + e });
                                    }
                            }),
                            t(document).on("click", ".wechat-box-head svg", function () {
                                t("#wechat-qr-code").remove();
                            }),
                            t(document).on("click", ".chaty-widget .wechat-action-btn", function () {
                                if ("" != t(this).attr("data-code")) {
                                    t("#wechat-qr-code").remove();
                                    var e = "<div id='wechat-qr-code' class='wechat-qr-code'>";
                                    (e +=
                                        '<div class="wechat-box-head">WeChat<svg xmlns="http://www.w3.org/2000/svg" class="close_facebook" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612" style="fill: #fff; float: right; margin-top: 4px;" xml:space="preserve"><path xmlns="http://www.w3.org/2000/svg" d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"></path></svg></div>'),
                                        (e += "<div class='wechat-box'><img src='" + t(this).attr("data-code") + "' alt='QR Code' /><a href='javascript:;'>"),
                                        (e += "</a></div></div>"),
                                        t("body").append(e);
                                    var i = t(this).closest(".chaty-widget").attr("data-index");
                                    "horizontal" == chaty_settings.chaty_widgets[i].mode
                                        ? (t(".wechat-qr-code").css("bottom", parseInt(chaty_settings.chaty_widgets[i].bot) + parseInt(chaty_settings.chaty_widgets[i].widget_size) + 25 + "px"),
                                            "right" == chaty_settings.chaty_widgets[i].pos_side
                                                ? t(".wechat-qr-code")
                                                    .css("left", "auto")
                                                    .css("right", chaty_settings.chaty_widgets[i].side + "px")
                                                : t(".wechat-qr-code")
                                                    .css("right", "auto")
                                                    .css("left", chaty_settings.chaty_widgets[i].side + "px"))
                                        : (t(".wechat-qr-code").css("bottom", parseInt(chaty_settings.chaty_widgets[i].bot) + "px"),
                                            "right" == chaty_settings.chaty_widgets[i].pos_side
                                                ? t(".wechat-qr-code")
                                                    .css("left", "auto")
                                                    .css("right", parseInt(chaty_settings.chaty_widgets[i].side) + parseInt(chaty_settings.chaty_widgets[i].widget_size) + 25 + "px")
                                                : t(".wechat-qr-code")
                                                    .css("right", "auto")
                                                    .css("left", parseInt(chaty_settings.chaty_widgets[i].side) + parseInt(chaty_settings.chaty_widgets[i].widget_size) + 25 + "px"));
                                }
                            })),
                            p(),
                        pageScrollStatus &&
                        t(window).scroll(function () {
                            if (pageScrollStatus) {
                                var e = t(document).height() - t(window).height(),
                                    i = t(window).scrollTop();
                                if (0 != i) {
                                    for (var a = (i / e) * 100, s = 0; s < chaty_settings.chaty_widgets.length; s++)
                                        if ("yes" == chaty_settings.chaty_widgets[s].on_page_scroll && 0 == chaty_settings.widget_status[s].is_displayed) {
                                            var n = parseInt(chaty_settings.chaty_widgets[s].page_scroll);
                                            if (a >= n) {
                                                t("#chaty-widget-" + s).removeClass("hide-widget"), C(s);
                                                var c = chaty_settings.chaty_widgets[s].widget_index;
                                                _("cs" + c), (chaty_settings.widget_status[s].is_displayed = 1), (chaty_settings.chaty_widgets[s].on_page_scroll = "no");
                                            }
                                        }
                                    p();
                                }
                            }
                        }),
                        timeIntervalStatus &&
                        (function e() {
                            if (timeIntervalStatus) {
                                for (var i = 0; i < chaty_settings.chaty_widgets.length; i++)
                                    if ("yes" == chaty_settings.chaty_widgets[i].time_trigger && 0 == chaty_settings.widget_status[i].is_displayed) {
                                        var a = 1e3 * parseInt(chaty_settings.chaty_widgets[i].trigger_time);
                                        if (a <= maxTimeInterval) {
                                            t("#chaty-widget-" + i).removeClass("hide-widget"), C(i);
                                            var s = chaty_settings.chaty_widgets[i].widget_index;
                                            _("cs" + s), (chaty_settings.widget_status[i].is_displayed = 1), (chaty_settings.chaty_widgets[i].time_trigger = "no");
                                        }
                                    }
                                p(),
                                    (maxTimeInterval += 100),
                                timeIntervalStatus &&
                                setTimeout(function () {
                                    e();
                                }, 100);
                            }
                        })(),
                        exitIntentStatus &&
                        (function () {
                            (e = document),
                                (i = "mouseout"),
                                (a = function (e) {
                                    null == e.toElement &&
                                    null == e.relatedTarget &&
                                    (function () {
                                        if (exitIntentStatus) {
                                            for (var e = 0; e < chaty_settings.chaty_widgets.length; e++)
                                                if ("yes" == chaty_settings.chaty_widgets[e].exit_intent && 0 == chaty_settings.widget_status[e].is_displayed) {
                                                    t("#chaty-widget-" + e).removeClass("hide-widget"), C(e);
                                                    var i = chaty_settings.chaty_widgets[e].widget_index;
                                                    _("cs" + i),
                                                        (chaty_settings.widget_status[e].is_displayed = 1),
                                                        (chaty_settings.chaty_widgets[e].exit_intent = "no"),
                                                        t("#chaty-widget-" + e).append("<div class='chaty-nav'></div>"),
                                                        t("#chaty-widget-" + e + " .chaty-nav").addClass(chaty_settings.chaty_widgets[e].pos_side),
                                                        launch_chaty(e + 1),
                                                        setTimeout(function () {
                                                            t(".chaty-nav").addClass("active");
                                                        }, 100),
                                                        setTimeout(function () {
                                                            t(".chaty-nav").remove();
                                                        }, 2500);
                                                }
                                            p();
                                        }
                                    })();
                                }),
                                e.addEventListener ? e.addEventListener(i, a, !1) : e.attachEvent && e.attachEvent("on" + i, a);
                            var e, i, a;
                        })();
                    }
                    function l(e) {
                        isChatyInMobile ? t(".chaty-widget-is .chaty-widget-i.is-in-desktop:not(.is-in-mobile)").remove() : t(".chaty-widget-is .chaty-widget-i.is-in-mobile:not(.is-in-desktop)").remove(), p();
                        var i = t("#chaty-channel-box-" + e).find(".chaty-widget-i").length;
                        if (0 == i) t("#chaty-widget-" + e).remove();
                        else if (1 == i) {
                            var a = t("#chaty-channel-box-" + e + " .chaty-widget-i:first").clone();
                            t("#chaty-widget-" + e)
                                .find(".i-trigger")
                                .html(a),
                                t("#chaty-widget-" + e).addClass("one_widget"),
                                t("#chaty-widget-" + e)
                                    .find(".i-trigger .chaty-widget-i-title p")
                                    .text(chaty_settings.chaty_widgets[e].cta),
                                t("#chaty-widget-" + e)
                                    .find(".i-trigger")
                                    .addClass("one-widget");
                        }
                        t("#chaty-widget-" + e + " .i-trigger svg, #chaty-widget-" + e + " .i-trigger img").wrap(function () {
                            return "<div id='chaty-animation-" + e + "' class='animation-svg'></div>";
                        }),
                        "" != chaty_settings.chaty_widgets[e].font_family &&
                        (t("head").append(
                            "<link id='chaty-front-font-" + e + "' href='https://fonts.googleapis.com/css?family=" + encodeURI(chaty_settings.chaty_widgets[e].font_family) + "&display=swap' rel='stylesheet' type='text/css' />"
                        ),
                            t("#chaty-widget-" + e).css("font-family", chaty_settings.chaty_widgets[e].font_family));
                        var s,
                            n = (function (t) {
                                var e = y("cta" + chaty_settings.chaty_widgets[t].widget_index);
                                if (null != e && "" != e) {
                                    e = new Date(e);
                                    var i = Math.abs(new Date() - e),
                                        a = Math.floor(i / 6e4);
                                    return a >= 10;
                                }
                                return !0;
                            })(e);
                        (n ||
                        "click" != chaty_settings.chaty_widgets[e].click_setting ||
                        (t("#chaty-widget-" + e + " .i-trigger .i-trigger-open").addClass("no-tooltip"), t("#chaty-widget-" + e + " .i-trigger.one-widget").addClass("no-tooltip"), b(e)),
                        n &&
                        "on" == chaty_settings.chaty_widgets[e].pending_messages &&
                        ("sheen" != chaty_settings.chaty_widgets[e].animation_class
                            ? t(
                                "#chaty-widget-" +
                                e +
                                " .i-trigger .i-trigger-open svg, #chaty-widget-" +
                                e +
                                " .i-trigger .i-trigger-open img, #chaty-widget-" +
                                e +
                                " .i-trigger.one-widget svg, #chaty-widget-" +
                                e +
                                " .i-trigger.one-widget img"
                            ).after("<span class='cht-pending-message'>" + chaty_settings.chaty_widgets[e].number_of_messages + "</span>")
                            : t("#chaty-widget-" + e + " .i-trigger .i-trigger-open, #chaty-widget-" + e + " .i-trigger.one-widget").append(
                                "<span class='cht-pending-message'>" + chaty_settings.chaty_widgets[e].number_of_messages + "</span>"
                            ),
                            t("#chaty-widget-" + e + " .cht-pending-message").css("color", chaty_settings.chaty_widgets[e].number_color),
                            t("#chaty-widget-" + e + " .cht-pending-message").css("background", chaty_settings.chaty_widgets[e].number_bg_color)),
                        "" != chaty_settings.chaty_widgets[e].animation_class) &&
                        w("ca" + (s = chaty_settings.chaty_widgets[e].widget_index)) &&
                        t("#chaty-animation-" + e).addClass("chaty-animation-" + chaty_settings.chaty_widgets[e].animation_class);
                        t("#chaty-widget-" + e).addClass(chaty_settings.chaty_widgets[e].mode + "-cht-menu"),
                            t("#chaty-widget-" + e).addClass(chaty_settings.chaty_widgets[e].pos_side + "-cht-position"),
                            "right" == chaty_settings.chaty_widgets[e].pos_side
                                ? (t("#chaty-widget-" + e).addClass("chaty-widget-is-left"),
                                    t("#chaty-widget-" + e).css({ left: "auto", right: chaty_settings.chaty_widgets[e].side + "px", bottom: chaty_settings.chaty_widgets[e].bot + "px" }))
                                : (t("#chaty-widget-" + e).addClass("chaty-widget-is-right"),
                                    t("#chaty-widget-" + e).css({ right: "auto", left: chaty_settings.chaty_widgets[e].side + "px", bottom: chaty_settings.chaty_widgets[e].bot + "px" })),
                            w("cs" + (s = chaty_settings.chaty_widgets[e].widget_index))
                                ? ("no" == chaty_settings.chaty_widgets[e].time_trigger &&
                                "no" == chaty_settings.chaty_widgets[e].exit_intent &&
                                "no" == chaty_settings.chaty_widgets[e].on_page_scroll &&
                                (_("cs" + s), t("#chaty-widget-" + e).removeClass("hide-widget"), (chaty_settings.widget_status[e].is_displayed = 1), C(e)),
                                "yes" == chaty_settings.chaty_widgets[e].time_trigger &&
                                parseInt(chaty_settings.chaty_widgets[e].trigger_time) <= 0 &&
                                (_("cs" + s), t("#chaty-widget-" + e).removeClass("hide-widget"), (chaty_settings.widget_status[e].is_displayed = 1), C(e)),
                                "yes" == chaty_settings.chaty_widgets[e].on_page_scroll &&
                                parseInt(chaty_settings.chaty_widgets[e].page_scroll) <= 0 &&
                                (_("cs" + s), t("#chaty-widget-" + e).removeClass("hide-widget"), (chaty_settings.widget_status[e].is_displayed = 1), C(e)))
                                : (t("#chaty-widget-" + e).removeClass("hide-widget"), (chaty_settings.widget_status[e].is_displayed = 1), C(e)),
                            "open" == chaty_settings.chaty_widgets[e].display_state
                                ? (I(e),
                                t("#chaty-widget-" + e).hasClass("one_widget") ||
                                t("#chaty-widget-" + e)
                                    .removeClass("none-widget-show")
                                    .addClass("chaty-widget-show"),
                                    t("#chaty-widget-" + e + " .i-trigger .i-trigger-open").addClass("no-tooltip"),
                                    t("#chaty-widget-" + e + " .i-trigger .i-trigger-open").addClass("true"),
                                "no" == chaty_settings.chaty_widgets[e].has_close_button &&
                                (t("#chaty-widget-" + e).addClass("has-not-close-button"), t("#chaty-widget-" + e).hasClass("one_widget") || t("#chaty-widget-" + e + " .i-trigger").remove()))
                                : "hover" == chaty_settings.chaty_widgets[e].display_state &&
                                t(document).on("mouseenter", ".i-trigger .i-trigger-open", function () {
                                    if (!t(this).hasClass("hover-action") && (t(this).closest(".chaty-widget").hasClass("none-widget-show") || !t(this).closest(".chaty-widget").hasClass("chaty-widget-show"))) {
                                        t(this).closest(".chaty-widget").hasClass("one_widget") || t(this).closest(".chaty-widget").removeClass("none-widget-show").addClass("chaty-widget-show");
                                        var e = t(this).closest(".chaty-widget").attr("data-index");
                                        "click" == chaty_settings.chaty_widgets[e].click_setting && (t(this).addClass("no-tooltip"), b(e)),
                                            I(e),
                                            t(this).addClass("hover-action"),
                                            _("ca" + chaty_settings.chaty_widgets[e].widget_index),
                                        "" != chaty_settings.chaty_widgets[e].animation_class && t("#chaty-animation-" + e).removeClass("chaty-animation-" + chaty_settings.chaty_widgets[e].animation_class);
                                    }
                                }),
                            t(".chaty-widget-i-title").each(function () {
                                "" == t(this).text() && (t(this).closest(".chaty-widget-i").addClass("hide-chaty-arrow"), t(this).remove());
                            });
                    }
                    function y(t) {
                        var e = f("chaty_settings"),
                            i = [];
                        if ((null != e && "" != e && (i = JSON.parse(e)), i.length > 0)) for (var a = 0; a < i.length; a++) if (i[a].k == t) return i[a].v;
                        return null;
                    }
                    function _(t) {
                        var e = f("chaty_settings"),
                            i = [];
                        null != e && "" != e && (i = JSON.parse(e));
                        var a = !1;
                        if (i.length > 0) for (var s = 0; s < i.length; s++) i[s].k == t && ((a = !0), (i[s].v = new Date()));
                        a || i.push({ k: t, v: new Date() }), v("chaty_settings", (e = JSON.stringify(i)), "7");
                    }
                    function w(t) {
                        var e = y(t);
                        if (null != e && "" != e) {
                            e = new Date(e);
                            var i = Math.abs(new Date() - e);
                            return Math.floor(i / 864e5) >= 1;
                        }
                        return !0;
                    }
                    function p() {
                        (pageScrollStatus = !1),
                            (timeIntervalStatus = !1),
                            (exitIntentStatus = !1),
                            t(".chaty-widget").each(function () {
                                var e = t(this).attr("data-index");
                                1 == chaty_settings.widget_status[e].on_page_status &&
                                0 == chaty_settings.widget_status[e].is_displayed &&
                                ("yes" == chaty_settings.chaty_widgets[e].time_trigger && (parseInt(chaty_settings.chaty_widgets[e].trigger_time) > 0 ? (timeIntervalStatus = !0) : chaty_settings.chaty_widgets[e].time_trigger),
                                "yes" == chaty_settings.chaty_widgets[e].on_page_scroll && (parseInt(chaty_settings.chaty_widgets[e].page_scroll) > 0 ? (pageScrollStatus = !0) : chaty_settings.chaty_widgets[e].on_page_scroll),
                                "yes" == chaty_settings.chaty_widgets[e].exit_intent && (exitIntentStatus = !0));
                            });
                    }
                    function u() {
                        t(".chaty-channels").length &&
                        t(".chaty-channels").each(function () {
                            var e = parseInt(t(this).attr("data-index")),
                                i = parseInt(chaty_settings.chaty_widgets[e].widget_size),
                                a = parseInt(t(this).find(".chaty-widget-i.is-in-desktop").length);
                            t("body").hasClass("chaty-in-desktop") || (a = parseInt(t(this).find(".chaty-widget-i.is-in-mobile").length)),
                                t(this)
                                    .find(".chaty-widget-i")
                                    .css({ height: i + "px", width: i + "px" })
                                    .find("img")
                                    .css({ height: i + "px", width: i + "px" })
                                    .find("span:not(.cht-pending-message)")
                                    .css({ height: i + "px", width: i + "px" }),
                                t(
                                    "#chaty-widget-" +
                                    e +
                                    " .chaty-widget-i, #chaty-widget-" +
                                    e +
                                    " .i-trigger .i-trigger-open, #chaty-widget-" +
                                    e +
                                    " .i-trigger .i-trigger-close, #chaty-widget-" +
                                    e +
                                    " .i-trigger .animation-svg, #chaty-widget-" +
                                    e +
                                    " .i-trigger .animation-svg img"
                                ).css({ height: i + "px", width: i + "px" }),
                                t(this).css({ top: "-" + 100 * a + "%" }),
                                "horizontal" == chaty_settings.chaty_widgets[e].mode
                                    ? (t(this).css({ top: "0" }), t(this).width(a * (parseInt(i) + 8)), t(this).height(parseInt(i) + 8))
                                    : (t(this).height(a * (parseInt(i) + 8)), t(this).width(parseInt(i) + 8));
                        });
                    }
                    function m(o) {
                        n("display_cta"),
                            (token = ""),
                            t(document).ready(function () {
                                "true" == chaty_settings.chaty_widgets[o].active &&
                                (function (i, c) {
                                    !(function (e) {
                                        if ("yes" != s("updatechtwidgetvisitor_" + e)) {
                                            var i = chaty_settings.chaty_widgets[e].widget_index;
                                            a("updatechtwidgetvisitor_" + e, "yes", 1),
                                                (url = chtMainDomain + "/settings/update_visitor"),
                                                t.ajax({ type: "POST", url: url, data: { store_id: chtStoreId, widget_id: i, type: "view" }, success: function (t) {} });
                                        }
                                    })(o),
                                        (isshowchaty = 1);
                                    var r = chaty_settings.chaty_widgets[o].device,
                                        g = "";
                                    if ("right" == chaty_settings.chaty_widgets[o].position) g = "left: auto;bottom: 25px; right: 25px;";
                                    else if ("left" == chaty_settings.chaty_widgets[o].position) g = "right: auto; bottom: 25px; left: 25px;";
                                    else if ("custom" == chaty_settings.chaty_widgets[o].position) {
                                        var h = chaty_settings.chaty_widgets[o].pos_side,
                                            y = chaty_settings.chaty_widgets[o].bot,
                                            _ = chaty_settings.chaty_widgets[o].side;
                                        g = "right" === h ? "left: auto; bottom: " + y + "px; right: " + _ + "px" : "left: " + _ + "px; bottom: " + y + "px; right: auto";
                                    }
                                    var w = chaty_settings.chaty_widgets[o].cta,
                                        p = "",
                                        m = chaty_settings.chaty_widgets[o].social;
                                    if (
                                        ("" != chaty_settings.chaty_widgets[o].custom_css && t("head").append("<style>" + chaty_settings.chaty_widgets[o].custom_css + "</style>"),
                                        Object.keys(m).length >= 1 &&
                                        ((p =
                                            '<div data-number="' +
                                            chaty_settings.chaty_widgets[o].widget_index +
                                            '" data-index="' +
                                            o +
                                            '" id="chaty-widget-' +
                                            o +
                                            '" class="chaty-widget hide-widget ' +
                                            c +
                                            " " +
                                            r +
                                            ' "   style="display:block; ' +
                                            g +
                                            '" dir="ltr">'),
                                            (p += '<div data-index="' + o + '" id="chaty-channel-box-' + o + '" class="chaty-widget-is chaty-channels" id="transition_disabled">')),
                                            (p += (function (i) {
                                                var a = "",
                                                    s = 0;
                                                return (
                                                    e.each(chaty_settings.chaty_widgets[o].social, function (e, i) {
                                                        if ((chaty_settings.chaty_widgets[o].isPRO && t("body").addClass("has-pro-version"), !chaty_settings.chaty_widgets[o].isPRO && "3" == ++s)) return !1;
                                                        (extra_class = ""), ("1" != chaty_settings.chaty_widgets[o].analytics && 1 != chaty_settings.chaty_widgets[o].analytics) || (extra_class += " update-analytics ");
                                                        var n = 1 == chaty_settings.chaty_widgets[o].social[e].is_desktop ? "is-in-desktop" : "",
                                                            c = 1 == chaty_settings.chaty_widgets[o].social[e].is_mobile ? "is-in-mobile" : "",
                                                            r = 1 == chaty_settings.chaty_widgets[o].is_mobile ? chaty_settings.chaty_widgets[o].social[e].mobile_target : chaty_settings.chaty_widgets[o].social[e].desktop_target;
                                                        t("body").hasClass("chaty-in-mobile") && (chaty_settings.chaty_widgets[o].social[e].href_url = chaty_settings.chaty_widgets[o].social[e].mobile_url);
                                                        var g = "";
                                                        if (
                                                            ("" != chaty_settings.chaty_widgets[o].social[e].on_click && (g = ' onclick="' + chaty_settings.chaty_widgets[o].social[e].on_click + '"'),
                                                            "viber" == chaty_settings.chaty_widgets[o].social[e].channel_type)
                                                        ) {
                                                            if (t("body").hasClass("chaty-in-mobile")) {
                                                                var h = chaty_settings.chaty_widgets[o].social[e].href_url;
                                                                (h = h.replace("+", "")), navigator.userAgent.match(/(iPod|iPhone|iPad)/) && (h = "+" + h), (chaty_settings.chaty_widgets[o].social[e].href_url = h);
                                                            }
                                                            chaty_settings.chaty_widgets[o].social[e].href_url = "viber://chat?number=" + chaty_settings.chaty_widgets[o].social[e].href_url;
                                                        }
                                                        (extra_class += " " + chaty_settings.chaty_widgets[o].social[e].channel_type + "-action-btn "),
                                                            (extra_class += " " + chaty_settings.chaty_widgets[o].social[e].social_channel + "-" + o + "-channel "),
                                                            (socialString =
                                                                '<div class="chaty-widget-i chaty-main-widget ' +
                                                                n +
                                                                " " +
                                                                c +
                                                                " " +
                                                                extra_class +
                                                                " channel-" +
                                                                chaty_settings.chaty_widgets[o].social[e].social_channel +
                                                                '" data-title="' +
                                                                chaty_settings.chaty_widgets[o].social[e].val +
                                                                '" data-nonce="' +
                                                                chaty_settings.chaty_widgets[o].social[e].channel_nonce +
                                                                '" id="chaty-channel-' +
                                                                chaty_settings.chaty_widgets[o].social[e].social_channel +
                                                                '" data-channel="' +
                                                                chaty_settings.chaty_widgets[o].social[e].social_channel +
                                                                '" data-code="' +
                                                                chaty_settings.chaty_widgets[o].social[e].qr_code_image +
                                                                '">'),
                                                            (bgColor = ""),
                                                        "" != chaty_settings.chaty_widgets[o].social[e].bg_color &&
                                                        ((socialString +=
                                                            "<style>." +
                                                            chaty_settings.chaty_widgets[o].social[e].social_channel +
                                                            "-" +
                                                            o +
                                                            "-channel .color-element {fill: " +
                                                            chaty_settings.chaty_widgets[o].social[e].bg_color +
                                                            "}</style>"),
                                                            (bgColor = "style='background-color: " + chaty_settings.chaty_widgets[o].social[e].bg_color + ";'")),
                                                            (socialString +=
                                                                "<a class='set-url-target' " +
                                                                g +
                                                                " rel='noopener' data-mobile-target='" +
                                                                chaty_settings.chaty_widgets[o].social[e].mobile_target +
                                                                "' data-desktop-target='" +
                                                                chaty_settings.chaty_widgets[o].social[e].desktop_target +
                                                                "' target='" +
                                                                r +
                                                                "' href='" +
                                                                chaty_settings.chaty_widgets[o].social[e].href_url +
                                                                "' >"),
                                                            "" != chaty_settings.chaty_widgets[o].social[e].img_url
                                                                ? (socialString +=
                                                                "<span " +
                                                                bgColor +
                                                                " class='chaty-social-img'><img src='" +
                                                                chaty_settings.chaty_widgets[o].social[e].img_url +
                                                                "' alt='" +
                                                                chaty_settings.chaty_widgets[o].social[e].title +
                                                                "' /></span>")
                                                                : (socialString += chaty_settings.chaty_widgets[o].social[e].default_icon),
                                                            (socialString += "</a>"),
                                                            (socialString += "<div class='chaty-widget-i-title'><p>" + chaty_settings.chaty_widgets[o].social[e].title + "</p></div>"),
                                                            (socialString += "</div>"),
                                                            (a += socialString);
                                                    }),
                                                        a
                                                );
                                            })()),
                                            (m = chaty_settings.chaty_widgets[o].social),
                                        Object.keys(m).length >= 1)
                                    ) {
                                        (p += "</div>"), (p += '<div data-index="' + o + '" id="chaty-trigger-' + o + '" class="i-trigger">');
                                        var b = n("display_cta"),
                                            v = (current_url = window.location.origin);
                                        if (((v = (v = v.replace("https://", "")).replace("http://", "")), "" != w && "none" != b)) var f = "true";
                                        else f = "no-tooltip";
                                        (p += '<div data-index="' + o + '" id="chaty-trigger-button-' + o + '" class="chaty-widget-i chaty-close-settings i-trigger-open ' + f + ' ">'),
                                            (p += (function (t) {
                                                switch (t.object_settings.widget_type) {
                                                    case "chat-image":
                                                        if (t.object_settings.widget_img.length > 1)
                                                            return '<div class="widget-img" style="background-color:' + t.object_settings.color + '"><img src="' + t.object_settings.widget_img + '"/></div>';
                                                    case "chat-smile":
                                                        return (
                                                            '<svg version="1.1" id="smile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496.8 507.1 54 54" style="enable-background:new -496.8 507.1 54 54;" xml:space="preserve"><style type="text/css">.st1{fill:#FFFFFF;}  .st2{fill:none;stroke:#808080;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}</style><g><circle cx="-469.8" cy="534.1" r="27" fill="' +
                                                            t.object_settings.color +
                                                            '"/></g><path class="st1" d="M-459.5,523.5H-482c-2.1,0-3.7,1.7-3.7,3.7v13.1c0,2.1,1.7,3.7,3.7,3.7h19.3l5.4,5.4c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.2,0,0.4,0c0.4-0.2,0.6-0.6,0.6-0.9v-21.5C-455.8,525.2-457.5,523.5-459.5,523.5z"/><path class="st2" d="M-476.5,537.3c2.5,1.1,8.5,2.1,13-2.7"/><path class="st2" d="M-460.8,534.5c-0.1-1.2-0.8-3.4-3.3-2.8"/></svg>'
                                                        );
                                                    case "chat-bubble":
                                                        return (
                                                            '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496.9 507.1 54 54" style="enable-background:new -496.9 507.1 54 54;" xml:space="preserve"><style type="text/css">.st1{fill:#FFFFFF;}</style><g><circle  cx="-469.9" cy="534.1" r="27" fill="' +
                                                            t.object_settings.color +
                                                            '"/></g><path class="st1" d="M-472.6,522.1h5.3c3,0,6,1.2,8.1,3.4c2.1,2.1,3.4,5.1,3.4,8.1c0,6-4.6,11-10.6,11.5v4.4c0,0.4-0.2,0.7-0.5,0.9   c-0.2,0-0.2,0-0.4,0c-0.2,0-0.5-0.2-0.7-0.4l-4.6-5c-3,0-6-1.2-8.1-3.4s-3.4-5.1-3.4-8.1C-484.1,527.2-478.9,522.1-472.6,522.1z   M-462.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-464.6,534.6-463.9,535.3-462.9,535.3z   M-469.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-471.7,534.6-471,535.3-469.9,535.3z   M-477,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-478.8,534.6-478.1,535.3-477,535.3z"/></svg>'
                                                        );
                                                    case "chat-db":
                                                        return (
                                                            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496 507.1 54 54" style="enable-background:new -496 507.1 54 54;" xml:space="preserve"><style type="text/css">.st1{fill:#FFFFFF;}</style><g><circle  cx="-469" cy="534.1" r="27" fill="' +
                                                            t.object_settings.color +
                                                            '"/></g><path class="st1" d="M-464.6,527.7h-15.6c-1.9,0-3.5,1.6-3.5,3.5v10.4c0,1.9,1.6,3.5,3.5,3.5h12.6l5,5c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18.2C-461.1,529.3-462.7,527.7-464.6,527.7z"/><path class="st1" d="M-459.4,522.5H-475c-1.9,0-3.5,1.6-3.5,3.5h13.9c2.9,0,5.2,2.3,5.2,5.2v11.6l1.9,1.9c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18C-455.9,524.1-457.5,522.5-459.4,522.5z"/></svg>'
                                                        );
                                                    default:
                                                        return (
                                                            '<svg version="1.1" id="ch" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496 507.7 54 54" style="enable-background:new -496 507.7 54 54;" xml:space="preserve"><style type="text/css">.st1 {fill: #FFFFFF;}.st0{fill: #808080;}</style><g><circle cx="-469" cy="534.7" r="27" fill="' +
                                                            t.object_settings.color +
                                                            '"/></g><path class="st1" d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"/><path class="st0" d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"/><path class="st0" d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"/></svg>'
                                                        );
                                                }
                                            })(i)),
                                            (b = n("display_cta")),
                                        "" != w && "none" != b && ((p += ' <div class="chaty-widget-i-title true"> '), (p += w), (p += "</div>")),
                                            (p += "</div>"),
                                            (p +=
                                                '<div class="chaty-widget-i chaty-close-settings i-trigger-close" data-title="' +
                                                chaty_settings.chaty_widgets[o].close_text +
                                                '" style="background-color:' +
                                                chaty_settings.chaty_widgets[o].color +
                                                '">'),
                                            "" == chaty_settings.chaty_widgets[o].close_img
                                                ? ((p += '<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">'),
                                                    (p += '<ellipse cx="26" cy="26" rx="26" ry="26" fill="' + chaty_settings.chaty_widgets[o].color + '"/>'),
                                                    (p += '<rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="white"/>'),
                                                    (p += '<rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="white"/>'),
                                                    (p += "</svg>"))
                                                : (p += "<span class='chaty-social-img'><img alt='" + chaty_settings.chaty_widgets[o].close_text + "' src='" + chaty_settings.chaty_widgets[o].close_img + "' /></span>"),
                                            (p += '<div class="chaty-widget-i-title">'),
                                            (p += chaty_settings.chaty_widgets[o].close_text),
                                            (p += "</div>"),
                                            (p += "</div>"),
                                            (p += " </div>"),
                                        0 === c.length && !chaty_settings.chaty_widgets[o].isPRO && (p += ""),
                                            (p += "</div>");
                                    }
                                    e("body").append(p), l(o), d(), u();
                                })(i, token);
                            }),
                            currentCountryCount++,
                            setTimeout(function () {
                                c(currentCountryCount), u();
                            }, 10);
                    }
                    function b(e) {
                        t("#chaty-widget-" + e + " .cht-pending-message").remove();
                        var i = "cta" + chaty_settings.chaty_widgets[e].widget_index,
                            a = f("chaty_settings"),
                            s = [];
                        null != a && "" != a && (s = JSON.parse(a));
                        var n = !1;
                        if (s.length > 0) for (var c = 0; c < s.length; c++) s[c].k == i && ((n = !0), (s[c].v = new Date()));
                        n || s.push({ k: i, v: new Date() }), v("chaty_settings", (a = JSON.stringify(s)), "7");
                    }
                    function v(t, e, i) {
                        var a = "";
                        if (i) {
                            var s = new Date();
                            s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3), (a = "; expires=" + s.toUTCString());
                        }
                        document.cookie = t + "=" + (e || "") + a + "; path=/";
                    }
                    function f(t) {
                        for (var e = t + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                            for (var s = i[a]; " " == s.charAt(0); ) s = s.substring(1, s.length);
                            if (0 == s.indexOf(e)) return s.substring(e.length, s.length);
                        }
                        return null;
                    }
                    function x(t) {
                        var e = f("chaty_status_string"),
                            i = [];
                        null != e && "" != e && (i = JSON.parse(e));
                        var a = !1;
                        if (i.length > 0) for (var s = 0; s < i.length; s++) i[s].k == t && ((a = !0), (i[s].v = new Date()));
                        a || i.push({ k: t, v: new Date() }), v("chaty_status_string", (e = JSON.stringify(i)), "7");
                    }
                    function k(t) {
                        var e = (function (t) {
                            var e = f("chaty_status_string"),
                                i = [];
                            if ((null != e && "" != e && (i = JSON.parse(e)), i.length > 0)) for (var a = 0; a < i.length; a++) if (i[a].k == t) return i[a].v;
                            return null;
                        })(t);
                        if (null != e && "" != e) {
                            e = new Date(e);
                            var i = Math.abs(new Date() - e);
                            return Math.floor(i / 864e5) >= 2;
                        }
                        return !0;
                    }
                    function C(e) {
                        if (!isBoatUser) {
                            var i = chaty_settings.chaty_widgets[e].widget_index,
                                a = chaty_settings.chaty_widgets[e].widget_nonce;
                            if (k("cwds" + i)) {
                                x("cwds" + i);
                                var s = "";
                                if (t("#chaty-widget-" + i).hasClass("single_widget")) {
                                    if (t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").length)
                                        k((n = "cwds" + i + "_" + t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").attr("data-channel"))) &&
                                        ((s = t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").attr("data-channel")), x(n));
                                } else
                                    t("#chaty-widget-" + e + " .chaty-channels")
                                        .find(".chaty-main-widget")
                                        .each(function () {
                                            var e = "cwds" + i + "_" + t(this).attr("data-channel");
                                            k(e) && ((s += t(this).attr("data-channel") + ","), x(e));
                                        });
                                t.ajax({
                                    url: chaty_settings.ajax_url,
                                    data: "index=" + i + "&nonce=" + a + "&is_widget=1&channel=&type=view&action=update_chaty_channel_status&channels=" + s,
                                    type: "post",
                                    async: !0,
                                    defer: !0,
                                    success: function () {},
                                });
                            } else {
                                var n;
                                s = "";
                                if (t("#chaty-widget-" + e).hasClass("single_widget")) {
                                    if (t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").length)
                                        k((n = "cwds" + i + "_" + t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").attr("data-channel"))) &&
                                        ((s = t("#chaty-widget-" + e + " .i-trigger.one-widget > .chaty-main-widget").attr("data-channel")), x(n));
                                } else
                                    t("#chaty-widget-" + e + " .chaty-channels")
                                        .find(".chaty-main-widget")
                                        .each(function () {
                                            k((n = "cwds" + i + "_" + t(this).attr("data-channel"))) && ((s += t(this).attr("data-channel") + ","), x("cwds" + i + "_" + t(this).attr("data-channel")));
                                        });
                                "" != s &&
                                t.ajax({
                                    url: chaty_settings.ajax_url,
                                    data: "index=" + i + "&nonce=" + a + "&is_widget=1&channel=&type=view&action=update_chaty_channel_view&channels=" + s + "&for=channels",
                                    type: "post",
                                    async: !0,
                                    defer: !0,
                                    success: function () {},
                                });
                            }
                        }
                    }
                    function S(e) {
                        t.ajax({ type: "POST", url: chtBaseURL + "/visitors/max_visitors", data: { store_id: chtStoreId, event: e }, success: function (t) {} });
                    }
                    function I(e) {
                        if ("yes" != s("updatechtwidgetclick_" + e)) {
                            var i = chaty_settings.chaty_widgets[e].widget_index;
                            a("updatechtwidgetclick_" + e, "yes", 1),
                                (url = chtMainDomain + "/settings/update_click"),
                                t.ajax({ type: "POST", url: url, data: { store_id: chtStoreId, widget_id: i, type: "click" }, success: function (t) {} });
                        }
                    }
                    t(window).resize(function () {
                        u();
                    }),
                        t("body").on("click", ".chtownerpopupclose", function () {
                            t(this).hasClass("riskabovefourdays") && !e(this).hasClass("chteventsopen")
                                ? (t(this).addClass("chteventsopen"), t("body .chtownerpopup .chtcontent, body .chtownerpopup .chtfooter").hide(), t("body .chtownerpopup .chtcontent.reskmoreevents").show())
                                : e(this).hasClass("chteventsopen")
                                ? (S("dont_remind_me"), t("body #chatyownerpopup").hide())
                                : (t("body #chatyownerpopup").hide(), S("click_on_x"));
                        }),
                        t("body").on("click", ".chatyownerremind .chtremind", function () {
                            S("clicked_on_remind_me"), t("body #chatyownerpopup").hide();
                        }),
                        t("body").on("click", ".chatyownerremind .chtdontremind", function () {
                            S("dont_remind_me"), t("body #chatyownerpopup").hide();
                        }),
                        t("body").on("click", ".chtupgradenow", function () {
                            S("click_on_upgrade"), t("body #chatyownerpopup").hide();
                        }),
                        setTimeout(function () {
                            t("body #chatyownerpopup .chtownerchannels").html(t("body .chaty-widget"));
                        }, 500);
                })(t);
            },
            12: function (t, e) {},
        });
    }
    function a(t, e, i) {
        if ((console.log(t), i)) {
            var a = new Date();
            a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
            var s = "; expires=" + a.toGMTString();
        } else s = "";
        document.cookie = escape(t) + "=" + escape(e) + s + "; path=/";
    }
    function s(t) {
        for (var e = escape(t) + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
            for (var s = i[a]; " " == s.charAt(0); ) s = s.substring(1, s.length);
            if (0 == s.indexOf(e)) return unescape(s.substring(e.length, s.length));
        }
        return null;
    }
    function n() {
        var t, i, a;
        "undefined" == typeof jQuery || parseFloat(jQuery.fn.jquery) < 1.7
            ? ((t = "//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"),
                (i = function () {
                    (CHATYAPPS = jQuery.noConflict(!0)),
                        CHATYAPPS(document).ready(function () {
                            e(CHATYAPPS);
                        });
                }),
                ((a = document.createElement("script")).type = "text/javascript"),
                a.readyState
                    ? (a.onreadystatechange = function () {
                        ("loaded" != a.readyState && "complete" != a.readyState) || ((a.onreadystatechange = null), i());
                    })
                    : (a.onload = function () {
                        i();
                    }),
                (a.src = t),
                document.getElementsByTagName("head")[0].appendChild(a))
            : e(jQuery);
    }
    function c() {
        return (
            "function" == typeof Ecwid.getOwnerId &&
            (Ecwid.OnPageLoad.add(function () {
                t && (1 == t && n(), (t = 1)), (t = 1);
            }),
                !0)
        );
    }
    if (c()) n();
    else
        var o = setInterval(function () {
            c() && (n(), clearInterval(o));
        }, 100);
})();
