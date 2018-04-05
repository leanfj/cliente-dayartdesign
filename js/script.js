function inIframe() {
    var e = window.location != window.parent.location;
    return e
}

function isMobileMenu() {
    return $("#menu-mobile").is(":visible")
}

function isDevice(e) {
    return $("html").hasClass(e)
}

function isCMS() {
    return $("body").hasClass("wnd-cms")
}

function deviceDetect(e) {
    var t = $("body"),
        n = $("html");
    if ("detect" == e && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (isMobileMenu() ? (isDevice("mobile") || $(n).addClass("mobile"), $(n).removeClass("tablet")) : (isDevice("tablet") || $(n).addClass("tablet"), $(n).removeClass("mobile")), $(t).hasClass("touched") || $(t).addClass("touched"), $(t).removeClass("desktop"), $(n).removeClass("pc")) : ($(n).hasClass("pc") || $(t).hasClass("desktop") || ($(n).addClass("pc"), $(t).addClass("desktop")), $(n).removeClass("tablet").removeClass("mobile"), $(t).removeClass("touched")), /WebnodeFrontendTest/i.test(navigator.userAgent) && ($(t).hasClass("wnd-frontend-test") || $(t).addClass("wnd-frontend-test")), /MSIE|Trident|Edge/i.test(navigator.userAgent) && ($(t).hasClass("isIE") || $(t).addClass("isIE"))), "mobile-devices" == e) {
        var i = !1;
        return function (e) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (i = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), i
    }
    if ("wnd-frontend-test" == e) return $(t).hasClass("wnd-frontend-test");
    if ("touched" == e) return $(t).hasClass("touched");
    if ("android" == e) {
        var i = !1;
        return /Android/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("ios" == e) {
        var i = !1;
        return /iPhone|iPad|iPod/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("iphone" == e) {
        var i = !1;
        return /iPhone|iPod/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("black-berry" == e) {
        var i = !1;
        return /BlackBerry/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("opera-mini" == e) {
        var i = !1;
        return /Opera Mini/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("ie-mobile" == e) {
        var i = !1;
        return /IEMobile/i.test(navigator.userAgent) && (i = !0), i
    }
    if ("safari" == e) {
        var i = !1;
        return /Safari/i.test(navigator.userAgent) && (i = !0), i
    }
}

function smoothScrolling() {
    $("a[href*=\\#]:not([href=\\#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) {
                var t = e.offset().top;
                return isCMS() && (t -= $("#wnd_toolbar").outerHeight(!0)), $("html,body").animate({
                    scrollTop: t
                }, 1e3), !1
            }
        }
    })
}

function waitForWebfonts(e, t) {
    for (var n = 0, i = 0, o = e.length; i < o; ++i) ! function (i) {
        function o() {
            if (r && r.offsetWidth != s && (++n, r.parentNode.removeChild(r), r = null), n >= e.length && (a && clearInterval(a), n == e.length)) return t(), !0
        }
        var r = document.createElement("span");
        r.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontFamily = "sans-serif", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", document.body.appendChild(r);
        var s = r.offsetWidth;
        r.style.fontFamily = i;
        var a;
        o() || (a = setInterval(o, 50))
    }(e[i])
}

function cmsReset(e) {
    if (isCMS()) {
        var t = e[0] ? e[0] : e;
        if (t) {
            var n = document.createEvent("Event");
            n.initEvent("wnd-redraw-done", !1, !0), t.dispatchEvent(n)
        }
    } else {
        var n = document.createEvent("Event");
        n.initEvent("wnd-redraw-done", !1, !0), document.body.dispatchEvent(n)
    }
}

function watchForPrint() {
    var e = function () { },
        t = function () { };
    if (window.matchMedia) {
        var n = window.matchMedia("print");
        n.addListener(function (n) {
            n.matches ? e() : t()
        })
    }
    window.onbeforeprint = e, window.onafterprint = t
}

function bindForms() {
    $(".form-file-button").on("click", function () {
        $(this).parent().prev().find("input").trigger("click")
    })
}

function debounce(e, t, n) {
    var i;
    return function () {
        var o = this,
            r = arguments;
        clearTimeout(i), i = setTimeout(function () {
            i = null, n || e.apply(o, r)
        }, t), n && !i && e.apply(o, r)
    }
}

function shortContent() {
    var e = !1;
    inIframe() && deviceDetect("iphone") && (e = !0);
    var t = !1;
    if ("sidebar" == $("body").data("layout-type") && "fixed" == $("#header").css("position") && (t = !0), 0 == e) {
        var n = $(window).height(),
            i = 0,
            o = $("body"),
            r = $("#main .section:not(#layout-section):not(.wnd-disabled):last-child");
        0 == t && ($("#header .section:not(#layout-section)").each(function () {
            i += $(this).height()
        }), $("#footer .section:not(#layout-section)").each(function () {
            i += $(this).height()
        })), $("#wnd_toolbar")[0] && (n -= $("#wnd_toolbar").height()), $("#fe_footer")[0] && (i += $("#fe_footer").height()), $("#wnd_cookie_bar")[0] && (i += $("#wnd_cookie_bar").height()), $("#wnd_user_bar")[0] && (i += $("#wnd_user_bar").height()), $("#main .section:not(#layout-section):not(.wnd-disabled)").each(function () {
            if ($(this).find(".content")[0]) {
                var e = $(this).find(".content").outerHeight(!0);
                i += e
            } else i += $(this).outerHeight(!0)
        }), i <= n ? $(o).hasClass("short-content") || ($(o).addClass("short-content"), r[0] && cmsReset(r)) : $(o).hasClass("short-content") && ($(o).removeClass("short-content"), cmsReset(o))
    }
}

function msieversion() {
    var e = window.navigator.userAgent,
        t = e.indexOf("MSIE ");
    if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    var n = e.indexOf("Trident/");
    if (n > 0) {
        var i = e.indexOf("rv:");
        return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
    }
    var o = e.indexOf("Edge/");
    return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
}

function issafari() {
    return navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 ? 1 : 0
}

function isfirefox() {
    return navigator.userAgent.indexOf("Firefox") > -1
}

function backgroundResize() {
    var e = $(window).height(),
        t = $(window).width();
    $(".bgatt-parallax").each(function (n) {
        var i = !1;
        $(this).hasClass("wnd-background-pattern") && (i = !0);
        var o = $(this);
        if (is_cms || !support3D || force2D) {
            var r = o.width(),
                s = o.height();
            if ("sidebar" == $("body").attr("data-layout-type")) {
                var a = parseInt($("header").css("marginLeft")),
                    l = !1;
                $("header .section-bg").css("opacity") < 1 && (l = !0), (1 == l || a > 0) && (r = t)
            }
            var c, u = $(o).attr("style"),
                d = u.indexOf("http");
            c = u.indexOf("')") > -1 ? u.indexOf("')") : u.indexOf('")') > -1 ? u.indexOf('")') : u.indexOf(")");
            var p, f, h = u.substr(d, c - d);
            $("<img/>").attr("src", h).on("load", function () {
                var t = p = this.width,
                    n = f = this.height,
                    a = t / n,
                    l = 200,
                    c = 0;
                c = e - s, n = s + c + l, t = n * a, r > t && (t = r, n = t / a), i || o.css("background-size", t + "px " + n + "px"), o.attr("resized-imgW", t), o.attr("resized-imgH", n), o.css("background-attachment", "fixed")
            })
        } else {
            $(this).hasClass("parallax") || $(this).addClass("parallax");
            var o = $(this),
                m = $(this).parent().parent(),
                s = m.height(),
                v = 200,
                g = e - s,
                y = s + g + v;
            o.css("height", y + "px")
        }
    });
    var n = 0;
    n = msieversion() ? 300 : 100, setTimeout(function () {
        parallaxPosition()
    }, n)
}

function parallaxPosition(e) {
    var t = $(window).height(),
        n = $(window).scrollTop(),
        i = n + t,
        o = (n + i) / 2;
    $(".bgatt-parallax").each(function (e) {
        var r, s, a = $(this),
            l = $(this).parent().parent(),
            c = !!$(l).is("#main .section-wrapper-content section:first-child"),
            u = !!$(l).is("#main .section-wrapper-content section:last-child"),
            d = $(this).hasClass("bgpos-top-center"),
            p = $(this).hasClass("bgpos-bottom-center");
        is_cms || !support3D || force2D ? (s = a.offset().top, r = a.height()) : (s = l.offset().top, r = l.outerHeight());
        var f, h, m, v, g, y, w = s + r;
        if (i > s && n < w)
            if (is_cms || !support3D || force2D) {
                h = a.attr("resized-imgw"), f = a.attr("resized-imgh");
                var b = 0;
                if ($(this).css("top").indexOf("px") > 0 && parseInt($(this).css("top"), 10) > 0 && (b = parseInt($(this).css("top"), 10)), m = 0, v = -f + t, c && d) {
                    g = r < t ? f - r : f - t, s -= g, w += g;
                    var x = m + (v - m) * (t / 2 - s) / (w - s);
                    y = m + (v - m) * (o - s) / (w - s) - x
                } else if (u && p) {
                    g = r < t ? f - r : f - t, s -= g, w += g;
                    var C = m + (v - m) * (g + t / 2) / (w - s);
                    y = m + (v - m) * (o - s) / (w - s) + C
                } else g = r < t ? f - r : f - t, s -= g, w += g, y = m + (v - m) * (o - s) / (w - s);
                y += b;
                var E;
                if ("sidebar" == $("body").attr("data-layout-type") && "fixed" == $("header").css("position")) {
                    var T = $("header").width(),
                        I = parseInt($("header").css("marginLeft")),
                        k = !1;
                    $("header .section-bg").css("opacity") < 1 && (k = !0), 1 == k || I > 0 ? E = "50%" : (E = T + parseInt($(this).width() - h) / 2, E += "px")
                } else E = "50%";
                $(this).css("background-position", E + " " + y + "px")
            } else {
                if (f = a.height(), m = 0, v = -f + t, c && d) {
                    var S = 0;
                    g = r < t ? f - r : f - t, s -= g, w += g;
                    var x = m + (v - m) * (t / 2 - s) / (w - s);
                    y = m + (v - m) * (o - s) / (w - s) - x + S
                } else if (u && p) {
                    g = r < t ? f - r : f - t, s -= g, w += g;
                    var C = m + (v - m) * (g + t / 2) / (w - s);
                    y = m + (v - m) * (o - s) / (w - s) + C
                } else g = r < t ? f - r : f - t, s -= g, w += g, y = m + (v - m) * (o - s) / (w - s);
                var D = "translate3d(0px," + y + "px, 0px)";
                if ("sidebar" == $("body").attr("data-layout-type") && "fixed" == $("header").css("position")) {
                    var T = $("header").width(),
                        I = parseInt($("header").css("marginLeft")),
                        k = !1;
                    $("header .section-bg").css("opacity") < 1 && (k = !0), 0 == k && 0 == I && a.css("margin-left", T + I + "px")
                } else a.css("margin-left", "0px");
                a.css("-webkit-transform", D), a.css("-ms-transform", D), a.css("transform", D)
            }
    })
}

function borderControll() {
    function getSectionBackground(e) {
        var t, n = "",
            i = "",
            o = $(e).find(".section-bg-layer"),
            r = $(e).find(".section-bg");
        return void 0 !== o && o.length || (o = e), $(o).attr("class").indexOf("wnd-background-solid") > -1 ? (t = "solid", n = $(o).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $(e).css("backgroundColor"))) : $(o).attr("class").indexOf("wnd-background-image") > -1 ? t = "image" : $(o).attr("class").indexOf("wnd-background-video") > -1 ? t = "video" : $(o).attr("class").indexOf("wnd-background-pattern") > -1 ? t = "pattern" : "section-bg-layer" == $(o).attr("class") ? (t = "solid", n = $(o).css("backgroundColor"), i = $(r).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $(e).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || "rgba(0, 0, 0, 0)" == i && "transparent" == i && void 0 == i || (n = i))) : $(o).attr("class").indexOf("section-bg-layer") == -1 && (t = "solid", n = $(o).css("backgroundColor")), "solid" == t && (void 0 !== n && "rgba(0, 0, 0, 0)" != n && "transparent" != n || (n = $("body").css("backgroundColor"), void 0 !== n && "rgba(0, 0, 0, 0)" != n && "transparent" != n || (n = $(".wnd-page").css("backgroundColor")))), {
            backgroundType: t,
            backgroundColor: n
        }
    }

    function handleBorder(borderElm, borderPos, curSec, action) {
        var currentSection = $(".section").eq(curSec);
        "section" != borderElm ? eval('$(currentSection).find(".' + borderElm + '").' + action + 'Class("border-' + borderPos + '")') : eval("$(currentSection)." + action + 'Class("border-' + borderPos + '")')
    }
    var sectionCount = $(".section").length,
        currentSection = 0,
        realSectionID = 0,
        sectionsArray = [],
        layoutSection = $("#layout-section"),
        bordersAttr, borderParamsExist, currentSectionData, borderPos, borderAction, sectionSelector;
    sectionCount > 1 && $(".section").each(function () {
        $(this).hasClass("wnd-disabled") ? realSectionID++ : (bordersAttr = $(this).attr("wn-border"), borderParamsExist = "undefined" != typeof bordersAttr && bordersAttr !== !1, currentSectionData = getSectionBackground($(this), currentSection), sectionsArray.push({
            idSection: currentSection,
            realSectionId: realSectionID,
            bgColor: currentSectionData.backgroundColor,
            bgType: currentSectionData.backgroundType,
            sectionVisible: "block" == $(this).css("display"),
            borderTop: !!borderParamsExist && bordersAttr.indexOf("top") > -1,
            borderBottom: !!borderParamsExist && bordersAttr.indexOf("bottom") > -1,
            borderElm: borderParamsExist ? $(this).attr("wn-border-element") : ""
        }), realSectionID++ , currentSection++)
    }), $.each(sectionsArray, function (e, t) {
        if (t.borderTop || t.borderBottom) {
            if (sectionSelector = e, t.borderTop && e > 0) {
                for (sectionSelector = e - 1; 0 == sectionsArray[sectionSelector];) sectionSelector--;
                if (sectionsArray[sectionSelector].borderBottom) return
            }
            if (t.borderBottom && e < sectionCount - 1)
                for (sectionSelector = e + 1; 0 == sectionsArray[sectionSelector];) sectionSelector++;
            borderPos = t.borderTop ? "top" : "bottom", borderAction = "solid" == t.bgType && "solid" == sectionsArray[sectionSelector].bgType && t.bgColor == sectionsArray[sectionSelector].bgColor ? "add" : "remove", handleBorder(t.borderElm, borderPos, t.realSectionId, borderAction)
        }
    }), "none" == $(layoutSection).attr("wn-border") && ($(layoutSection).removeClass("border-top").removeClass("border-bottom"), $(layoutSection).addClass("border-none"))
}

function sectionControl() {
    function e(e) {
        var t = $(e).attr("class").split(/\s+/);
        for (var n in t) {
            var i = t[n];
            if (i.indexOf("s-") > -1) return i
        }
    }

    function t(e) {
        return $(e).find(".wnd-background-solid").css("background-color")
    }

    function n() {
        $(a).addClass("wn-space-bottom"), $(l).addClass("wn-space-top"), cmsReset(a)
    }

    function i() {
        $(a).removeClass("wn-space-bottom"), $(l).removeClass("wn-space-top"), cmsReset(a)
    }
    var o = ($("#main"), $(".blog-header")),
        r = [],
        s = $(".section"),
        a = "",
        l = "";
    s.each(function (e) {
        $(this).is("[data-space]") && r.push(e)
    }), $(r).each(function (o) {
        var c = r[o],
            u = c + 1;
        if (a = s[c], l = s[u], $(l).hasClass("wnd-disabled")) i();
        else {
            var d = e(a),
                p = e(l);
            if (d != p || $(l).hasClass("footer")) i();
            else if (d.indexOf("s-media") > -1) {
                var f = t(a),
                    h = t(l);
                f == h && "undefined" != typeof f ? n() : i()
            } else n()
        }
    }), o[0] && (isCMS() || 1 == o.find(".content .text-content:empty").length && o.addClass("wn-empty"), 1 == o.find(".content > div:empty").length && o.addClass("wn-empty"))
} ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n
        }) : Te.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(Ae) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function u() {
        te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
    }

    function d() {
        this.expando = he.expando + d.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
    }

    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Re, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = p(n)
                } catch (o) { }
                Oe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return he.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== c && +l) && je.exec(he.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do r = r || ".5", u /= r, he.style(e, t, u + c); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function m(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = We[i];
        return o ? o : (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), We[i] = o, o)
    }

    function v(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = Fe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Be(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", Fe.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function g(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function w(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if (r = e[f], r || 0 === r)
                if ("object" === he.type(r)) he.merge(p, r.nodeType ? [r] : r);
                else if (Ve.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (Ue.exec(r) || ["", ""])[1].toLowerCase(), l = Ye[a] || Ye._default, s.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                    he.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
                } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (i && he.inArray(r, i) > -1) o && o.push(r);
            else if (c = he.contains(r.ownerDocument, r), s = g(d.appendChild(r), "script"), c && y(s), n)
                for (u = 0; r = s[u++];) Ze.test(r.type || "") && n.push(r);
        return d
    }

    function b() {
        return !0
    }

    function x() {
        return !1
    }

    function C() {
        try {
            return te.activeElement
        } catch (e) { }
    }

    function E(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) E(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = x;
        else if (!o) return e;
        return 1 === r && (s = o, o = function (e) {
            return he().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, o, i, n)
        })
    }

    function T(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function I(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function $(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (r = Fe.access(e), s = Fe.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
            }
            Oe.hasData(e) && (a = Oe.access(e), l = he.extend({}, a), Oe.set(t, l))
        }
    }

    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function D(e, t, i, o) {
        t = oe.apply([], t);
        var r, s, a, l, c, u, d = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            m = he.isFunction(h);
        if (m || p > 1 && "string" == typeof h && !pe.checkClone && nt.test(h)) return e.each(function (n) {
            var r = e.eq(n);
            m && (t[0] = h.call(this, n, r.html())), D(r, t, i, o)
        });
        if (p && (r = w(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = he.map(g(r, "script"), I), l = a.length; d < p; d++) c = r, d !== f && (c = he.clone(c, !0, !0), l && he.merge(a, g(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, he.map(a, $), d = 0; d < l; d++) c = a[d], Ze.test(c.type || "") && !Fe.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(ot, ""), u))
        }
        return e
    }

    function A(e, t, n) {
        for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(g(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(g(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function P(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && st.test(s) && rt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function _(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if (e = dt[n] + t, e in pt) return e
    }

    function M(e, t, n) {
        var i = je.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function F(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += he.css(e, n + qe[r], !0, o)), i ? ("content" === n && (s -= he.css(e, "padding" + qe[r], !0, o)), "margin" !== n && (s -= he.css(e, "border" + qe[r] + "Width", !0, o))) : (s += he.css(e, "padding" + qe[r], !0, o), "padding" !== n && (s += he.css(e, "border" + qe[r] + "Width", !0, o)));
        return s
    }

    function O(e, t, n) {
        var i, o = !0,
            r = at(e),
            s = "border-box" === he.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = P(e, t, r), (i < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
            o = s && (pe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + F(e, t, n || (s ? "border" : "content"), o, r) + "px"
    }

    function N(e, t, n, i, o) {
        return new N.prototype.init(e, t, n, i, o)
    }

    function R() {
        ht && (e.requestAnimationFrame(R), he.fx.tick())
    }

    function z() {
        return e.setTimeout(function () {
            ft = void 0
        }), ft = he.now()
    }

    function j(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = qe[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function q(e, t, n) {
        for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function B(e, t, n) {
        var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            m = e.nodeType && Be(e),
            g = Fe.get(e, "fxshow");
        n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++ , p.always(function () {
            p.always(function () {
                s.unqueued-- , he.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (o = t[i], mt.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || he.style(e, i)
            }
        if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(f)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = Fe.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (v([e], !0), c = e.style.display || c, u = he.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (p.done(function () {
                h.display = c
            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Fe.access(e, "fxshow", {
                display: c
            }), r && (g.hidden = !m), m && v([e], !0), p.done(function () {
                m || v([e]), Fe.remove(e, "fxshow");
                for (i in f) he.style(e, i, f[i])
            })), l = q(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function H(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = he.camelCase(n), o = t[i], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = he.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function W(e, t, n) {
        var i, o, r = 0,
            s = W.prefilters.length,
            a = he.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = ft || z(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || z(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); r < s; r++)
            if (i = W.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(u, q, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function X(e) {
        var t = e.match(Ae) || [];
        return t.join(" ")
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e, t, n, i) {
        var o;
        if (he.isArray(t)) he.each(t, function (t, o) {
            n || $t.test(e) ? i(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, i)
    }

    function Y(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(Ae) || [];
            if (he.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function V(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, he.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === Rt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function G(e, t) {
        var n, i, o = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function K(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Q(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (s = c[l + " " + r] || c["* " + r], !s)
                        for (o in c)
                            if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else try {
                            t = s(t)
                        } catch (d) {
                            return {
                                state: "parsererror",
                                error: s ? d : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function J(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        oe = ee.concat,
        re = ee.push,
        se = ee.indexOf,
        ae = {},
        le = ae.toString,
        ce = ae.hasOwnProperty,
        ue = ce.toString,
        de = ue.call(Object),
        pe = {},
        fe = "3.1.1",
        he = function (e, t) {
            return new he.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ge = /-([a-z])/g,
        ye = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        length: 0,
        toArray: function () {
            return ie.call(this)
        },
        get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return he.each(this, e)
        },
        map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (he.isPlainObject(i) || (o = he.isArray(i))) ? (o ? (o = !1, r = n && he.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || ue.call(n) !== de))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            n(e)
        },
        camelCase: function (e) {
            return e.replace(ve, "ms-").replace(ge, ye)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function (e, t, n) {
            var o, r, s = 0,
                a = [];
            if (i(e))
                for (o = e.length; s < o; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, o.guid = e.guid = e.guid || he.guid++ , o
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var we = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, u, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== L && _(t), t = t || L, F)) {
                if (11 !== h && (l = ge.exec(e)))
                    if (o = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (p && (s = p.getElementById(o)) && z(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && C.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                    }
                if (C.qsa && !U[e + " "] && (!O || !O.test(e))) {
                    if (1 !== h) p = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, Ce) : t.setAttribute("id", a = j), c = $(e), r = c.length; r--;) c[r] = "#" + a + " " + f(c[r]);
                        u = c.join(","), p = ye.test(e) && d(t.parentNode) || t
                    }
                    if (u) try {
                        return Q.apply(n, p.querySelectorAll(u)), n
                    } catch (m) { } finally {
                            a === j && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[j] = !0, e
        }

        function o(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            }
        }

        function c(e) {
            return function (t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() { }

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = H++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, u, d, p = [B, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (d = t[j] || (t[j] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === B && c[1] === a) return p[2] = c[2];
                                if (u[r] = p, p[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function y(e, t, n, o, r, s) {
            return o && !o[j] && (o = y(o)), r && !r[j] && (r = y(r, s)), i(function (i, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    m = i || v(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : g(m, p, e, a, l),
                    w = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, w, a, l), o)
                    for (c = g(w, f), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else w = g(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : Q.apply(s, w)
            })
        }

        function w(e) {
            for (var t, n, i, o = e.length, r = E.relative[e[0].type], s = r || E.relative[" "], a = r ? 1 : 0, l = h(function (e) {
                return e === t
            }, s, !0), c = h(function (e) {
                return ee(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
                var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }]; a < o; a++)
                if (n = E.relative[e[a].type]) u = [h(m(u), n)];
                else {
                    if (n = E.filter[e[a].type].apply(null, e[a].matches), n[j]) {
                        for (i = ++a; i < o && !E.relative[e[i].type]; i++);
                        return y(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && w(e.slice(a, i)), i < o && w(e = e.slice(i)), i < o && f(e))
                    }
                    u.push(n)
                }
            return m(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function (i, s, a, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = D,
                        w = i || r && E.find.TAG("*", c),
                        b = B += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (D = s === L || s || c); h !== x && null != (u = w[h]); h++) {
                        if (r && u) {
                            for (d = 0, s || u.ownerDocument === L || (_(u), a = !F); p = e[d++];)
                                if (p(u, s || L, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (B = b)
                        }
                        o && ((u = !p && u) && f-- , i && m.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (B = b, D = y), m
                };
            return o ? i(s) : s
        }
        var x, C, E, T, I, $, k, S, D, A, P, _, L, M, F, O, N, R, z, j = "sizzle" + 1 * new Date,
            q = e.document,
            B = 0,
            H = 0,
            W = n(),
            X = n(),
            U = n(),
            Z = function (e, t) {
                return e === t && (P = !0), 0
            },
            Y = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            K = V.push,
            Q = V.push,
            J = V.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ee = function () {
                _()
            },
            Te = h(function (e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                    dir: "parentNode",
                    next: "legend"
                });
        try {
            Q.apply(V = J.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType
        } catch (Ie) {
            Q = {
                apply: V.length ? function (e, t) {
                    K.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, I = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, _ = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, M = L.documentElement, F = !I(L), q !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), C.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function (e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(L.getElementsByClassName), C.getById = o(function (e) {
                return M.appendChild(e).id = j, !L.getElementsByName || !L.getElementsByName(j).length
            }), C.getById ? (E.filter.ID = function (e) {
                var t = e.replace(we, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, E.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (E.filter.ID = function (e) {
                var t = e.replace(we, be);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, E.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                            if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
                    }
                    return []
                }
            }), E.find.TAG = C.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, E.find.CLASS = C.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && F) return t.getElementsByClassName(e)
            }, N = [], O = [], (C.qsa = ve.test(L.querySelectorAll)) && (o(function (e) {
                M.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + j + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || O.push(".#.+[+~]")
            }), o(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (C.matchesSelector = ve.test(R = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (e) {
                C.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), N.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), t = ve.test(M.compareDocumentPosition), z = t || ve.test(M.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Z = t ? function (e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === q && z(q, e) ? -1 : t === L || t.ownerDocument === q && z(q, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return P = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, L) : L
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== L && _(e), n = n.replace(ue, "='$1']"), C.matchesSelector && F && !U[n + " "] && (!N || !N.test(n)) && (!O || !O.test(n))) try {
                var i = R.call(e, n);
                if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) { }
            return t(n, L, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && _(e), z(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== L && _(e);
            var n = E.attrHandle[t.toLowerCase()],
                i = n && Y.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== i ? i : C.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(xe, Ce)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (P = !C.detectDuplicates, A = !C.sortStable && e.slice(0), e.sort(Z), P) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, T = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, E = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (v) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (p = v, d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === B && c[1], w = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++w && p === t) {
                                        u[e] = [B, f, w];
                                        break
                                    }
                            } else if (y && (p = t, d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === B && c[1], w = f), w === !1)
                                for (;
                                    (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++w || (y && (d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [B, w]), p !== t)););
                            return w -= o, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[j] ? r(n) : r.length > 1 ? (o = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = k(e.replace(ae, "$1"));
                    return o[j] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(we, be),
                        function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === M
                },
                focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !E.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, E.pseudos.nth = E.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) E.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) E.pseudos[x] = l(x);
        return p.prototype = E.filters = E.pseudos, E.setFilters = new p, $ = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, u = X[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = E.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in E.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : X(e, l).slice(0)
        }, k = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = $(e)), n = t.length; n--;) r = w(t[n]), r[j] ? i.push(r) : o.push(r);
                r = U(e, b(o, i)), r.selector = e
            }
            return r
        }, S = t.select = function (e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                u = !i && $(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && F && E.relative[r[1].type]) {
                    if (t = (E.find.ID(s.matches[0].replace(we, be), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !E.relative[a = s.type]);)
                    if ((l = E.find[a]) && (i = l(s.matches[0].replace(we, be), ye.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e) return Q.apply(n, i), n;
                        break
                    }
            }
            return (c || k(e, u))(i, t, !F, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, C.sortStable = j.split("").sort(Z).join("") === j, C.detectDuplicates = !!P, _(), C.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = we, he.expr = we.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = we.uniqueSort, he.text = we.getText, he.isXMLDoc = we.isXML, he.contains = we.contains, he.escapeSelector = we.escape;
    var be = function (e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && he(e).is(n)) break;
                i.push(e)
            }
        return i
    },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = he.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Te = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (he.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && Ce.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ie, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        ke = he.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || Ie, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ee.test(i[1]) && he.isPlainObject(t))
                        for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = te.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        };
    ke.prototype = he.fn, Ie = he(te);
    var Se = /^(?:parents|prev(?:Until|All))/,
        De = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function (e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && he(e);
            if (!Ce.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return be(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return be(e, "nextSibling")
        },
        prevAll: function (e) {
            return be(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return xe(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || he.merge([], e.childNodes)
        }
    }, function (e, t) {
        he.fn[e] = function (n, i) {
            var o = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (De[e] || he.uniqueSort(o), Se.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, i, o, r = [],
            a = [],
            l = -1,
            c = function () {
                for (o = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            },
            u = {
                add: function () {
                    return r && (n && !t && (l = r.length - 1, a.push(n)), function i(t) {
                        he.each(t, function (t, n) {
                            he.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== he.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return he.each(arguments, function (e, t) {
                        for (var n;
                            (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? he.inArray(e, r) > -1 : r.length > 0
                },
                empty: function () {
                    return r && (r = []), this
                },
                disable: function () {
                    return o = a = [], r = n = "", this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return o = a = [], n || t || (r = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, he.extend({
        Deferred: function (t) {
            var n = [
                ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
            ],
                i = "pending",
                o = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return o.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, i) {
                                var o = he.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, o) {
                        function r(t, n, i, o) {
                            return function () {
                                var c = this,
                                    u = arguments,
                                    d = function () {
                                        var e, d;
                                        if (!(t < s)) {
                                            if (e = i.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(s, n, a, o), r(s, n, l, o)) : (s++ , d.call(e, r(s, n, a, o), r(s, n, l, o), r(s, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [e]), (o || n.resolveWith)(c, u))
                                        }
                                    },
                                    p = o ? d : function () {
                                        try {
                                            d()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                                        }
                                    };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(r(0, e, he.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : a)), n[2][3].add(r(0, e, he.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? he.extend(e, o) : o
                    }
                },
                r = {};
            return he.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = ie.call(arguments),
                r = he.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (c(e, r.done(s(n)).resolve, r.reject), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) c(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var _e = he.Deferred();
    he.fn.ready = function (e) {
        return _e.then(e)["catch"](function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || _e.resolveWith(te, [he]))
        }
    }), he.ready.then = _e.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
    var Le = function (e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === he.type(n)) {
            o = !0;
            for (a in n) Le(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, he.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(he(e), n)
        })), t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    },
        Me = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[he.camelCase(t)] = n;
            else
                for (i in t) o[he.camelCase(i)] = t[i];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                } (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Fe = new d,
        Oe = new d,
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Re = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return Oe.hasData(e) || Fe.hasData(e)
        },
        data: function (e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function (e, t) {
            Oe.remove(e, t)
        },
        _data: function (e, t, n) {
            return Fe.access(e, t, n)
        },
        _removeData: function (e, t) {
            Fe.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Oe.get(r), 1 === r.nodeType && !Fe.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), f(r, i, o[i])));
                    Fe.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                Oe.set(this, e)
            }) : Le(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (n = Oe.get(r, e), void 0 !== n) return n;
                    if (n = f(r, e), void 0 !== n) return n
                } else this.each(function () {
                    Oe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Oe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Fe.get(e, t), n && (!i || he.isArray(n) ? i = Fe.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = he._queueHooks(e, t),
                s = function () {
                    he.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = he.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Fe.get(r[s], e + "queueHooks"), n && n.empty && (i++ , n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        Be = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        He = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        We = {};
    he.fn.extend({
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Be(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i,
        Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ze = /^$|\/(?:java|ecma)script/i,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Ve = /<|&#?\w+;/;
    ! function () {
        var e = te.createDocumentFragment(),
            t = e.appendChild(te.createElement("div")),
            n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ge = te.documentElement,
        Ke = /^key/,
        Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, m, v = Fe.get(e);
            if (v)
                for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Ge, o), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                    return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Ae) || [""], c = t.length; c--;) a = Je.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, u = he.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && he.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), he.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, m, v = Fe.hasData(e) && Fe.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(Ae) || [""], c = t.length; c--;)
                    if (a = Je.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(),
                        f) {
                        for (d = he.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount-- , d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || he.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) he.event.remove(e, f + t[c], n, i, !0);
                he.isEmptyObject(l) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, o, r, s, a = he.event.fix(e),
                l = new Array(arguments.length),
                c = (Fe.get(this, "events") || {})[a.type] || [],
                u = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (s = he.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                        for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void (this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {
            return E(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return E(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (s = g(a), r = g(e), i = 0, o = r.length; i < o; i++) S(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || g(e), s = s || g(a), i = 0, o = r.length; i < o; i++) k(r[i], s[i]);
                else k(e, a);
            return s = g(a, "script"), s.length > 0 && y(s, !l && g(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Me(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function (e) {
            return A(this, e, !0)
        },
        remove: function (e) {
            return A(this, e)
        },
        text: function (e) {
            return Le(this, function (e) {
                return void 0 === e ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return D(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return D(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return D(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return D(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        },
        html: function (e) {
            return Le(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ye[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return D(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(g(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, i = [], o = he(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), he(o[s])[t](n), re.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/,
        st = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
        at = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ge.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ge.removeChild(s), a = null
            }
        }
        var n, i, o, r, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), i
            },
            pixelMarginRight: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), r
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = he.camelCase(t),
                    l = e.style;
                return t = he.cssProps[a] || (he.cssProps[a] = L(a) || a), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = je.exec(n)) && o[1] && (n = h(e, t, o), r = "number"), void (null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = he.camelCase(t);
            return t = he.cssProps[a] || (he.cssProps[a] = L(a) || a), s = he.cssHooks[t] || he.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = P(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? O(e, t, i) : He(e, ct, function () {
                    return O(e, t, i)
                })
            },
            set: function (e, n, i) {
                var o, r = i && at(e),
                    s = i && F(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
                return s && (o = je.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), M(e, n, s)
            }
        }
    }), he.cssHooks.marginLeft = _(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + qe[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, rt.test(e) || (he.cssHooks[e + t].set = M)
    }), he.fn.extend({
        css: function (e, t) {
            return Le(this, function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (he.isArray(t)) {
                    for (i = at(e), o = t.length; s < o; s++) r[t[s]] = he.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = N, N.prototype = {
        constructor: N,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = N.prototype.init, he.fx.step = {};
    var ft, ht, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    he.Animation = he.extend(W, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, je.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function (e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
        }, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Be).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = he.isEmptyObject(e),
                r = he.speed(t, n, i),
                s = function () {
                    var t = W(this, he.extend({}, e), r);
                    (o || Fe.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = he.timers,
                    s = Fe.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && vt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || he.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = Fe.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = he.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, o)
        }
    }), he.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        he.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = 0,
            n = he.timers;
        for (ft = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), ft = void 0
    }, he.fx.timer = function (e) {
        he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function () {
        ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function () {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    },
        function () {
            var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var gt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                o = t && t.match(Ae);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), gt = {
        set: function (e, t, n) {
            return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = yt[s], yt[s] = o, o = null != n(e, t, i) ? s : null, yt[s] = r), o
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pe.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, U(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = X(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = X(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function () {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = he(this), r = e.match(Ae) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = U(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Fe.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + X(U(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = he.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : X(he.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = he.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || te],
                f = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !he.isWindow(i)) {
                    for (l = d.delegateType || f, Ct.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (Fe.get(s, "events") || {})[t.type] && Fe.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Me(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Me(i) || c && he.isFunction(i[f]) && !he.isWindow(i) && (a = i[c], a && (i[c] = null), he.event.triggered = f, i[f](), he.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = Fe.access(i, t);
                o || i.addEventListener(e, n, !0), Fe.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = Fe.access(i, t) - 1;
                o ? Fe.access(i, t, o) : (i.removeEventListener(e, n, !0), Fe.remove(i, t))
            }
        }
    });
    var Et = e.location,
        Tt = he.now(),
        It = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var $t = /\[\]$/,
        kt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !Xe.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
            }).get()
        }
    });
    var At = /%20/g,
        Pt = /#.*$/,
        _t = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Nt = {},
        Rt = {},
        zt = "*/".concat("*"),
        jt = te.createElement("a");
    jt.href = Et.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: Mt.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? G(G(e, he.ajaxSettings), t) : G(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Nt),
        ajaxTransport: Y(Rt),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, p, f, b, x, C = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = K(h, E, i)), b = Q(h, b, E, c), c ? (h.ifModified && (x = E.getResponseHeader("Last-Modified"), x && (he.lastModified[r] = x), x = E.getResponseHeader("etag"), x && (he.etag[r] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, f = b.error, c = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", c ? g.resolveWith(m, [p, C, E]) : g.rejectWith(m, [E, C, f]), E.statusCode(w), w = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [E, h, c ? p : f]), y.fireWith(m, [E, C]), d && (v.trigger("ajaxComplete", [E, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, p, f, h = he.ajaxSetup({}, n),
                m = h.context || h,
                v = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                g = he.Deferred(),
                y = he.Callbacks("once memory"),
                w = h.statusCode || {},
                b = {},
                x = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Lt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) E.always(e[E.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (g.promise(E), h.url = ((t || h.url || Et.href) + "").replace(Ot, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                } catch (T) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), V(Nt, h, n, E), u) return E;
            d = he.event && h.global, d && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), r = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (f = h.url.slice(r.length), h.data && (r += (It.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(_t, "$1"), f = (It.test(r) ? "&" : "?") + "_=" + Tt++ + f), h.url = r + f), h.ifModified && (he.lastModified[r] && E.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && E.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(m, E, h) === !1 || u)) return E.abort();
            if (C = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), o = V(Rt, h, n, E)) {
                if (E.readyState = 1, d && v.trigger("ajaxSend", [E, h]), u) return E;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, o.send(b, i)
                } catch (T) {
                    if (u) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return E
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, i, o) {
            return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    };
    var qt = {
        0: 200,
        1223: 204
    },
        Bt = he.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function (t) {
        var n, i;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Wt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ht.pop() || he.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + o) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || he.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ht.push(o)), s && he.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Ee.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = w([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
    }, he.fn.load = function (e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c, u = he.css(e, "position"),
                d = he(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = J(o), t = o.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                    top: 0,
                    left: 0
                } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                        top: t.top - i.top - he.css(n, "marginTop", !0),
                        left: t.left - i.left - he.css(n, "marginLeft", !0)
                    }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ge
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (i) {
            return Le(this, function (e, i, o) {
                var r = J(e);
                return void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = _(pe.pixelPosition, function (e, n) {
            if (n) return n = P(e, t), st.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            he.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || r === !0 ? "margin" : "border");
                return Le(this, function (t, n, o) {
                    var r;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, a) : he.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var Xt = e.jQuery,
        Ut = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Xt), he
    }, t || (e.jQuery = e.$ = he), he
}), ! function (e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, r, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = i(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) s = e[r], a = s.split("."), 1 === a.length ? C[a[0]] = o : (!C[a[0]] || C[a[0]] instanceof Boolean || (C[a[0]] = new Boolean(C[a[0]])), C[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function r(e) {
        var t = E.className,
            n = C._config.classPrefix || "";
        if (T && (t = t.baseVal), C._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        C._config.enableClasses && (t += " " + n + e.join(" " + n), T ? E.className.baseVal = t : E.className = t)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function c(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function u(e, t, n) {
        var o;
        for (var r in e)
            if (e[r] in t) return n === !1 ? e[r] : (o = t[e[r]], i(o, "function") ? c(o, n || t) : o);
        return !1
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p(t, n, i) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var r = e.console;
            if (null !== o) i && (o = o.getPropertyValue(i));
            else if (r) {
                var s = r.error ? "error" : "log";
                r[s].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[i];
        return o
    }

    function f() {
        var e = t.body;
        return e || (e = l(T ? "svg" : "body"), e.fake = !0), e
    }

    function h(e, n, i, o) {
        var r, s, a, c, u = "modernizr",
            d = l("div"),
            p = f();
        if (parseInt(i, 10))
            for (; i--;) a = l("div"), a.id = o ? o[i] : u + (i + 1), d.appendChild(a);
        return r = l("style"), r.type = "text/css", r.id = "s" + u, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = c, E.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function m(t, i) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(d(t[o]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var r = []; o--;) r.push("(" + d(t[o]) + ":" + i + ")");
            return r = r.join(" or "), h("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == p(e, null, "position")
            })
        }
        return n
    }

    function v(e, t, o, r) {
        function c() {
            d && (delete A.style, delete A.modElem)
        }
        if (r = !i(r, "undefined") && r, !i(o, "undefined")) {
            var u = m(e, o);
            if (!i(u, "undefined")) return u
        }
        for (var d, p, f, h, v, g = ["modernizr", "tspan", "samp"]; !A.style && g.length;) d = !0, A.modElem = l(g.shift()), A.style = A.modElem.style;
        for (f = e.length, p = 0; f > p; p++)
            if (h = e[p], v = A.style[h], a(h, "-") && (h = s(h)), A.style[h] !== n) {
                if (r || i(o, "undefined")) return c(), "pfx" != t || h;
                try {
                    A.style[h] = o
                } catch (y) { }
                if (A.style[h] != v) return c(), "pfx" != t || h
            }
        return c(), !1
    }

    function g(e, t, n, o, r) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + $.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? v(a, t, o, r) : (a = (e + " " + S.join(s + " ") + s).split(" "), u(a, t, n))
    }

    function y(e, t, i) {
        return g(e, n, n, t, i)
    }
    var w = [],
        b = [],
        x = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        C = function () { };
    C.prototype = x, C = new C;
    var E = t.documentElement,
        T = "svg" === E.nodeName.toLowerCase(),
        I = "Moz O ms Webkit",
        $ = x._config.usePrefixes ? I.split(" ") : [];
    x._cssomPrefixes = $;
    var k = function (t) {
        var i, o = prefixes.length,
            r = e.CSSRule;
        if ("undefined" == typeof r) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), i = t.replace(/-/g, "_").toUpperCase() + "_RULE", i in r) return "@" + t;
        for (var s = 0; o > s; s++) {
            var a = prefixes[s],
                l = a.toUpperCase() + "_" + i;
            if (l in r) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = k;
    var S = x._config.usePrefixes ? I.toLowerCase().split(" ") : [];
    x._domPrefixes = S;
    var D = {
        elem: l("modernizr")
    };
    C._q.push(function () {
        delete D.elem
    });
    var A = {
        style: D.elem.style
    };
    C._q.unshift(function () {
        delete A.style
    }), x.testAllProps = g, x.testAllProps = y, C.addTest("flexbox", y("flexBasis", "1px", !0)), C.addTest("cssmask", y("maskRepeat", "repeat-x", !0));
    var P = x.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? k(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    C.addTest("objectfit", !!P("objectFit"), {
        aliases: ["object-fit"]
    }), o(), r(w), delete x.addTest, delete x.addAsyncTest;
    for (var _ = 0; _ < C._q.length; _++) C._q[_]();
    e.Modernizr = C
}(window, document), $(document).ready(function () {
    if ($("html").removeClass("no-js").addClass("js"), navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(e)
    }
    deviceDetect("detect"), inIframe() && deviceDetect("iphone") && $("body").addClass("ios-iframe"), smoothScrolling(), watchForPrint(), bindForms(), $(window).on("resize", function () {
        deviceDetect("detect")
    })
}), $(document).ready(function () {
    var e = !1,
        t = !1;
    setTimeout(function () {
        shortContent(), e = !0
    }, 500), isCMS() && $(document).on("wnd-content-change", ".wnd-page", function () {
        e ? e = !1 : setTimeout(function () {
            shortContent()
        }, 300)
    }), $(window).on("resize orientationchange", function () {
        t ? t = !1 : setTimeout(function () {
            shortContent(), t = !0
        }, 500)
    })
}),
    function (e) {
        e.fn.parentResponsive = function (t) {
            function n(t, n) {
                e(t).each(function (t) {
                    var o = e(this),
                        s = o.outerWidth(),
                        a = "",
                        l = "",
                        c = o.attr("class");
                    if (c = c.split(" "), e.each(c, function (e) {
                        c[e] != n.column && (l += c[e] + " ")
                    }), e.each(n.classes, function (e) {
                        if (s > n.widths[e] && s <= n.widths[e + 1])
                            for (i = 0; i <= e; i++) a += n.classes[i] + " "
                    }), l != a && (o.removeClass(r).addClass(a), isCMS())) {
                        var u = o[0] ? o[0] : o;
                        if (u) {
                            var d = document.createEvent("Event");
                            d.initEvent("wnd-redraw-done", !0, !0), u.dispatchEvent(d)
                        }
                    }
                })
            }
            var o = e.extend({}, e.fn.parentResponsive.defaults, t),
                r = o.classes.join(" "),
                s = e(this);
            "none" == s.css("float") ? s.removeClass(r) : n(s, o)
        }, e.fn.parentResponsive.defaults = {
            widths: [0, 319, 364, 479, 599, 767, 899, 1023, 9999],
            classes: ["pr-0", "pr-320", "pr-365", "pr-480", "pr-600", "pr-768", "pr-1024", "pr-infinity"],
            column: "column-content"
        }, e(document).ready(function () {
            var t = function () {
                e(".pr:not(.static)").parentResponsive()
            };
            isCMS() && e(document).on("wnd-redraw", ".content", function () {
                var t = e(this).find(".pr");
                t[0] && setTimeout(function () {
                    t.parentResponsive()
                }, 200)
            }), e(".pr")[0] && (t(), e(window).on("resize orientationchange", function () {
                t()
            })), e(".column-content").resize(function () {
                setTimeout(function () {
                    t()
                }, 200)
            })
        })
    }(jQuery),
    function (e) {
        e.fn.feed = function (t) {
            var n = e.extend({}, e.fn.feed.defaults, t),
                i = e(this);
            i.each(function () {
                function t() {
                    var i = k.slice();
                    if ("true" == n.bottom_line) {
                        var o = 0,
                            r = 0,
                            c = 0,
                            u = 0,
                            d = 0;
                        i.sort(function (e, t) {
                            return t - e
                        }), o = e(k).index(i[0]), r = i[0], i.sort(function (e, t) {
                            return e - t
                        }), c = e(k).index(i[0]), u = i[0], d = r - u;
                        var p = 0,
                            f = a / T;
                        p = f * T == a ? f * T - 1 : parseInt(f) * T - 1;
                        var h = e.inArray(o, S, p);
                        if (d >= 1.1 * g[h]) {
                            var m = u + g[h],
                                v = r - g[h];
                            y[h] = u, w[h] = l[h] * c, e(s[h]).css({
                                top: y[h] + "px",
                                left: w[h] + "px"
                            }), k[o] = v, k[c] = m, t()
                        }
                    }
                }
                var o = e(this).find(n.wrapper),
                    r = o.width(),
                    s = e(this).find(n.item),
                    a = 0,
                    l = [],
                    c = [],
                    u = [],
                    d = [],
                    p = [],
                    f = [],
                    h = [],
                    m = [];
                s.each(function (t) {
                    var i = "full";
                    if (l[t] = parseFloat(e(this).outerWidth(!0)), c[t] = parseFloat(e(this).css("paddingTop")), u[t] = parseFloat(e(this).css("paddingRight")), d[t] = parseFloat(e(this).css("paddingBottom")), p[t] = parseFloat(e(this).css("paddingLeft")), e(this).hasClass("wnd-video-thumbnail")) {
                        var o = e(this).find(n.video_thumb);
                        f[t] = parseFloat(e(o).outerWidth(!0)), h[t] = parseInt(e(o).outerHeight(!0))
                    } else {
                        if ("gallery" == n.type) var r = e(this).find("a");
                        else var r = e(this).find("img");
                        r[0] ? (f[t] = parseInt(e(r).attr("width")), h[t] = parseInt(e(r).attr("height"))) : (f[t] = 0, h[t] = 0, i = "no-media")
                    }
                    if ("outside" == n.title) {
                        if ("no-media" == i) var s = e(this).find(n.item_wrapper);
                        else var s = e(this).find(n.title_class);
                        "none" != s.css("display") ? m[t] = parseFloat(s.outerHeight(!0)) : m[t] = 0
                    } else m[t] = 0;
                    a++
                });
                for (var v = [], g = [], y = [], w = [], b = 0, x = [], C = [], E = [], T = Math.round(r / l[0]), I = 1, $ = 0, k = [], S = [], D = 0; D < T; D++) k.push(0);
                T > 1 ? (s.each(function (t) {
                    if (S[t] = $, v[t] = l[t], b = parseFloat(h[t] / f[t] * (l[t] - p[t] - u[t])), isNaN(b) && (b = 0), x[t] = b, g[t] = b + c[t] + d[t] + m[t], "gallery" == n.type) {
                        x[t] = Math.round(x[t]);
                        var i = e(this).find(".gallery-image");
                        "undefined" != typeof i.attr("data-resize-value") ? (E[t] = parseInt(i.attr("data-resize-value")), C = 0 !== E[t], x[t] += E[t], g[t] += E[t]) : (0 === t ? (C[t] = !1, E[t] = 0) : Math.abs(x[t] - x[t - 1]) < n.resize_threshold ? (C[t] = !0, E[t] = Math.floor(Math.random() * (n.resize_max - n.resize_min) + n.resize_min)) : (C[t] = !1, E[t] = 0), i.attr("data-resize-value", E[t]), x[t] += E[t], g[t] += E[t])
                    }
                    if (1 == I ? (y[t] = 0, 0 == t ? w[t] = 0 : w[t] = w[t - 1] + v[t - 1]) : (t / T == I - 1 ? w[t] = 0 : w[t] = w[t - 1] + v[t - 1], y[t] = k[$]), (t + 1) / T == I && I++ , k[$] += g[t], $++ , $ + 1 > T && ($ = 0), "gallery" == n.type && E[t] > 0) {
                        var i = e(this).find(".gallery-image");
                        i.length > 0 && (i.addClass("stretched"), i.css("height", x[t]))
                    }
                    e(this).css({
                        top: y[t] + "px",
                        left: w[t] + "px"
                    })
                }), t(), k.sort(function (e, t) {
                    return t - e
                }), o.css({
                    height: k[0] + "px"
                }), i.addClass("feed-ready"), cmsReset(i)) : (i.removeClass("feed-ready"), o.removeAttr("style"), s.removeAttr("style"), cmsReset(i))
            })
        }, e.fn.feed.defaults = {
            type: "gallery",
            title: "outside",
            title_class: ".gallery-title",
            wrapper: ".gallery-wrapper",
            item: ".gallery-item",
            item_wrapper: "",
            video_thumb: ".thumbnail",
            bottom_line: "true",
            resize_threshold: 3,
            resize_min: 20,
            resize_max: 60
        }
    }(jQuery), ! function (e, t, n, i) {
        "use strict";

        function o(e, t, n) {
            return setTimeout(c(e, n), t)
        }

        function r(e, t, n) {
            return !!Array.isArray(e) && (s(e, n[t], n), !0)
        }

        function s(e, t, n) {
            var o;
            if (e)
                if (e.forEach) e.forEach(t, n);
                else if (e.length !== i)
                    for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++;
                else
                    for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
        }

        function a(t, n, i) {
            var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
            return function () {
                var n = new Error("get-stack-trace"),
                    i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = e.console && (e.console.warn || e.console.log);
                return r && r.call(e.console, o, i), t.apply(this, arguments)
            }
        }

        function l(e, t, n) {
            var i, o = t.prototype;
            i = e.prototype = Object.create(o), i.constructor = e, i._super = o, n && de(i, n)
        }

        function c(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function u(e, t) {
            return typeof e == he ? e.apply(t ? t[0] || i : i, t) : e
        }

        function d(e, t) {
            return e === i ? t : e
        }

        function p(e, t, n) {
            s(v(t), function (t) {
                e.addEventListener(t, n, !1)
            })
        }

        function f(e, t, n) {
            s(v(t), function (t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function h(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function m(e, t) {
            return e.indexOf(t) > -1
        }

        function v(e) {
            return e.trim().split(/\s+/g)
        }

        function g(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var i = 0; i < e.length;) {
                if (n && e[i][n] == t || !n && e[i] === t) return i;
                i++
            }
            return -1
        }

        function y(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function w(e, t, n) {
            for (var i = [], o = [], r = 0; r < e.length;) {
                var s = t ? e[r][t] : e[r];
                g(o, s) < 0 && i.push(e[r]), o[r] = s, r++
            }
            return n && (i = t ? i.sort(function (e, n) {
                return e[t] > n[t]
            }) : i.sort()), i
        }

        function b(e, t) {
            for (var n, o, r = t[0].toUpperCase() + t.slice(1), s = 0; s < pe.length;) {
                if (n = pe[s], o = n ? n + r : t, o in e) return o;
                s++
            }
            return i
        }

        function x() {
            return be++
        }

        function C(t) {
            var n = t.ownerDocument || t;
            return n.defaultView || n.parentWindow || e
        }

        function E(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
                u(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function T(e) {
            var t, n = e.options.inputClass;
            return new (t = n ? n : Ee ? R : Te ? q : Ce ? H : N)(e, I)
        }

        function I(e, t, n) {
            var i = n.pointers.length,
                o = n.changedPointers.length,
                r = t & Ae && i - o === 0,
                s = t & (_e | Le) && i - o === 0;
            n.isFirst = !!r, n.isFinal = !!s, r && (e.session = {}), n.eventType = t, $(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function $(e, t) {
            var n = e.session,
                i = t.pointers,
                o = i.length;
            n.firstInput || (n.firstInput = D(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = D(t) : 1 === o && (n.firstMultiple = !1);
            var r = n.firstInput,
                s = n.firstMultiple,
                a = s ? s.center : r.center,
                l = t.center = A(i);
            t.timeStamp = ge(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = M(a, l), t.distance = L(a, l), k(n, t), t.offsetDirection = _(t.deltaX, t.deltaY);
            var c = P(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = ve(c.x) > ve(c.y) ? c.x : c.y, t.scale = s ? O(s.pointers, i) : 1, t.rotation = s ? F(s.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, S(n, t);
            var u = e.element;
            h(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
        }

        function k(e, t) {
            var n = t.center,
                i = e.offsetDelta || {},
                o = e.prevDelta || {},
                r = e.prevInput || {};
            t.eventType !== Ae && r.eventType !== _e || (o = e.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, i = e.offsetDelta = {
                x: n.x,
                y: n.y
            }), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
        }

        function S(e, t) {
            var n, o, r, s, a = e.lastInterval || t,
                l = t.timeStamp - a.timeStamp;
            if (t.eventType != Le && (l > De || a.velocity === i)) {
                var c = t.deltaX - a.deltaX,
                    u = t.deltaY - a.deltaY,
                    d = P(l, c, u);
                o = d.x, r = d.y, n = ve(d.x) > ve(d.y) ? d.x : d.y, s = _(c, u), e.lastInterval = t
            } else n = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
            t.velocity = n, t.velocityX = o, t.velocityY = r, t.direction = s
        }

        function D(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: me(e.pointers[n].clientX),
                clientY: me(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: ge(),
                pointers: t,
                center: A(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function A(e) {
            var t = e.length;
            if (1 === t) return {
                x: me(e[0].clientX),
                y: me(e[0].clientY)
            };
            for (var n = 0, i = 0, o = 0; t > o;) n += e[o].clientX, i += e[o].clientY, o++;
            return {
                x: me(n / t),
                y: me(i / t)
            }
        }

        function P(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }

        function _(e, t) {
            return e === t ? Me : ve(e) >= ve(t) ? 0 > e ? Fe : Oe : 0 > t ? Ne : Re
        }

        function L(e, t, n) {
            n || (n = Be);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return Math.sqrt(i * i + o * o)
        }

        function M(e, t, n) {
            n || (n = Be);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(o, i) / Math.PI
        }

        function F(e, t) {
            return M(t[1], t[0], He) + M(e[1], e[0], He)
        }

        function O(e, t) {
            return L(t[0], t[1], He) / L(e[0], e[1], He)
        }

        function N() {
            this.evEl = Xe, this.evWin = Ue, this.pressed = !1, E.apply(this, arguments)
        }

        function R() {
            this.evEl = Ve, this.evWin = Ge, E.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function z() {
            this.evTarget = Qe, this.evWin = Je, this.started = !1, E.apply(this, arguments)
        }

        function j(e, t) {
            var n = y(e.touches),
                i = y(e.changedTouches);
            return t & (_e | Le) && (n = w(n.concat(i), "identifier", !0)), [n, i]
        }

        function q() {
            this.evTarget = tt, this.targetIds = {}, E.apply(this, arguments)
        }

        function B(e, t) {
            var n = y(e.touches),
                i = this.targetIds;
            if (t & (Ae | Pe) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var o, r, s = y(e.changedTouches),
                a = [],
                l = this.target;
            if (r = n.filter(function (e) {
                return h(e.target, l)
            }), t === Ae)
                for (o = 0; o < r.length;) i[r[o].identifier] = !0, o++;
            for (o = 0; o < s.length;) i[s[o].identifier] && a.push(s[o]), t & (_e | Le) && delete i[s[o].identifier], o++;
            return a.length ? [w(r.concat(a), "identifier", !0), a] : void 0
        }

        function H() {
            E.apply(this, arguments);
            var e = c(this.handler, this);
            this.touch = new q(this.manager, e), this.mouse = new N(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function W(e, t) {
            e & Ae ? (this.primaryTouch = t.changedPointers[0].identifier, X.call(this, t)) : e & (_e | Le) && X.call(this, t)
        }

        function X(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var n = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(n);
                var i = this.lastTouches,
                    o = function () {
                        var e = i.indexOf(n);
                        e > -1 && i.splice(e, 1)
                    };
                setTimeout(o, nt)
            }
        }

        function U(e) {
            for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                var o = this.lastTouches[i],
                    r = Math.abs(t - o.x),
                    s = Math.abs(n - o.y);
                if (it >= r && it >= s) return !0
            }
            return !1
        }

        function Z(e, t) {
            this.manager = e, this.set(t)
        }

        function Y(e) {
            if (m(e, ct)) return ct;
            var t = m(e, ut),
                n = m(e, dt);
            return t && n ? ct : t || n ? t ? ut : dt : m(e, lt) ? lt : at
        }

        function V() {
            if (!rt) return !1;
            var t = {},
                n = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                t[i] = !n || e.CSS.supports("touch-action", i)
            }), t
        }

        function G(e) {
            this.options = de({}, this.defaults, e || {}), this.id = x(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = ft, this.simultaneous = {}, this.requireFail = []
        }

        function K(e) {
            return e & yt ? "cancel" : e & vt ? "end" : e & mt ? "move" : e & ht ? "start" : ""
        }

        function Q(e) {
            return e == Re ? "down" : e == Ne ? "up" : e == Fe ? "left" : e == Oe ? "right" : ""
        }

        function J(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function ee() {
            G.apply(this, arguments)
        }

        function te() {
            ee.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ne() {
            ee.apply(this, arguments)
        }

        function ie() {
            G.apply(this, arguments), this._timer = null, this._input = null
        }

        function oe() {
            ee.apply(this, arguments)
        }

        function re() {
            ee.apply(this, arguments)
        }

        function se() {
            G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ae(e, t) {
            return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new le(e, t)
        }

        function le(e, t) {
            this.options = de({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = T(this), this.touchAction = new Z(this, this.options.touchAction), ce(this, !0), s(this.options.recognizers, function (e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function ce(e, t) {
            var n = e.element;
            if (n.style) {
                var i;
                s(e.options.cssProps, function (o, r) {
                    i = b(n.style, r), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = e.oldCssProps[i] || ""
                }), t || (e.oldCssProps = {})
            }
        }

        function ue(e, n) {
            var i = t.createEvent("Event");
            i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var de, pe = ["", "webkit", "Moz", "MS", "ms", "o"],
            fe = t.createElement("div"),
            he = "function",
            me = Math.round,
            ve = Math.abs,
            ge = Date.now;
        de = "function" != typeof Object.assign ? function (e) {
            if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (o !== i && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
            }
            return t
        } : Object.assign;
        var ye = a(function (e, t, n) {
            for (var o = Object.keys(t), r = 0; r < o.length;)(!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]), r++;
            return e
        }, "extend", "Use `assign`."),
            we = a(function (e, t) {
                return ye(e, t, !0)
            }, "merge", "Use `assign`."),
            be = 1,
            xe = /mobile|tablet|ip(ad|hone|od)|android/i,
            Ce = "ontouchstart" in e,
            Ee = b(e, "PointerEvent") !== i,
            Te = Ce && xe.test(navigator.userAgent),
            Ie = "touch",
            $e = "pen",
            ke = "mouse",
            Se = "kinect",
            De = 25,
            Ae = 1,
            Pe = 2,
            _e = 4,
            Le = 8,
            Me = 1,
            Fe = 2,
            Oe = 4,
            Ne = 8,
            Re = 16,
            ze = Fe | Oe,
            je = Ne | Re,
            qe = ze | je,
            Be = ["x", "y"],
            He = ["clientX", "clientY"];
        E.prototype = {
            handler: function () { },
            init: function () {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(C(this.element), this.evWin, this.domHandler)
            },
            destroy: function () {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
            }
        };
        var We = {
            mousedown: Ae,
            mousemove: Pe,
            mouseup: _e
        },
            Xe = "mousedown",
            Ue = "mousemove mouseup";
        l(N, E, {
            handler: function (e) {
                var t = We[e.type];
                t & Ae && 0 === e.button && (this.pressed = !0), t & Pe && 1 !== e.which && (t = _e), this.pressed && (t & _e && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: ke,
                    srcEvent: e
                }))
            }
        });
        var Ze = {
            pointerdown: Ae,
            pointermove: Pe,
            pointerup: _e,
            pointercancel: Le,
            pointerout: Le
        },
            Ye = {
                2: Ie,
                3: $e,
                4: ke,
                5: Se
            },
            Ve = "pointerdown",
            Ge = "pointermove pointerup pointercancel";
        e.MSPointerEvent && !e.PointerEvent && (Ve = "MSPointerDown", Ge = "MSPointerMove MSPointerUp MSPointerCancel"), l(R, E, {
            handler: function (e) {
                var t = this.store,
                    n = !1,
                    i = e.type.toLowerCase().replace("ms", ""),
                    o = Ze[i],
                    r = Ye[e.pointerType] || e.pointerType,
                    s = r == Ie,
                    a = g(t, e.pointerId, "pointerId");
                o & Ae && (0 === e.button || s) ? 0 > a && (t.push(e), a = t.length - 1) : o & (_e | Le) && (n = !0), 0 > a || (t[a] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: r,
                    srcEvent: e
                }), n && t.splice(a, 1))
            }
        });
        var Ke = {
            touchstart: Ae,
            touchmove: Pe,
            touchend: _e,
            touchcancel: Le
        },
            Qe = "touchstart",
            Je = "touchstart touchmove touchend touchcancel";
        l(z, E, {
            handler: function (e) {
                var t = Ke[e.type];
                if (t === Ae && (this.started = !0), this.started) {
                    var n = j.call(this, e, t);
                    t & (_e | Le) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: Ie,
                        srcEvent: e
                    })
                }
            }
        });
        var et = {
            touchstart: Ae,
            touchmove: Pe,
            touchend: _e,
            touchcancel: Le
        },
            tt = "touchstart touchmove touchend touchcancel";
        l(q, E, {
            handler: function (e) {
                var t = et[e.type],
                    n = B.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: Ie,
                    srcEvent: e
                })
            }
        });
        var nt = 2500,
            it = 25;
        l(H, E, {
            handler: function (e, t, n) {
                var i = n.pointerType == Ie,
                    o = n.pointerType == ke;
                if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i) W.call(this, t, n);
                    else if (o && U.call(this, n)) return;
                    this.callback(e, t, n)
                }
            },
            destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var ot = b(fe.style, "touchAction"),
            rt = ot !== i,
            st = "compute",
            at = "auto",
            lt = "manipulation",
            ct = "none",
            ut = "pan-x",
            dt = "pan-y",
            pt = V();
        Z.prototype = {
            set: function (e) {
                e == st && (e = this.compute()), rt && this.manager.element.style && pt[e] && (this.manager.element.style[ot] = e), this.actions = e.toLowerCase().trim()
            },
            update: function () {
                this.set(this.manager.options.touchAction)
            },
            compute: function () {
                var e = [];
                return s(this.manager.recognizers, function (t) {
                    u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), Y(e.join(" "))
            },
            preventDefaults: function (e) {
                var t = e.srcEvent,
                    n = e.offsetDirection;
                if (this.manager.session.prevented) return void t.preventDefault();
                var i = this.actions,
                    o = m(i, ct) && !pt[ct],
                    r = m(i, dt) && !pt[dt],
                    s = m(i, ut) && !pt[ut];
                if (o) {
                    var a = 1 === e.pointers.length,
                        l = e.distance < 2,
                        c = e.deltaTime < 250;
                    if (a && l && c) return
                }
                return s && r ? void 0 : o || r && n & ze || s && n & je ? this.preventSrc(t) : void 0
            },
            preventSrc: function (e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var ft = 1,
            ht = 2,
            mt = 4,
            vt = 8,
            gt = vt,
            yt = 16,
            wt = 32;
        G.prototype = {
            defaults: {},
            set: function (e) {
                return de(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function (e) {
                if (r(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = J(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function (e) {
                return r(e, "dropRecognizeWith", this) ? this : (e = J(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function (e) {
                if (r(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = J(e, this), -1 === g(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function (e) {
                if (r(e, "dropRequireFailure", this)) return this;
                e = J(e, this);
                var t = g(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function () {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function (e) {
                return !!this.simultaneous[e.id]
            },
            emit: function (e) {
                function t(t) {
                    n.manager.emit(t, e)
                }
                var n = this,
                    i = this.state;
                vt > i && t(n.options.event + K(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= vt && t(n.options.event + K(i))
            },
            tryEmit: function (e) {
                return this.canEmit() ? this.emit(e) : void (this.state = wt)
            },
            canEmit: function () {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (wt | ft))) return !1;
                    e++
                }
                return !0
            },
            recognize: function (e) {
                var t = de({}, e);
                return u(this.options.enable, [this, t]) ? (this.state & (gt | yt | wt) && (this.state = ft), this.state = this.process(t), void (this.state & (ht | mt | vt | yt) && this.tryEmit(t))) : (this.reset(), void (this.state = wt))
            },
            process: function (e) { },
            getTouchAction: function () { },
            reset: function () { }
        }, l(ee, G, {
            defaults: {
                pointers: 1
            },
            attrTest: function (e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function (e) {
                var t = this.state,
                    n = e.eventType,
                    i = t & (ht | mt),
                    o = this.attrTest(e);
                return i && (n & Le || !o) ? t | yt : i || o ? n & _e ? t | vt : t & ht ? t | mt : ht : wt
            }
        }), l(te, ee, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: qe
            },
            getTouchAction: function () {
                var e = this.options.direction,
                    t = [];
                return e & ze && t.push(dt), e & je && t.push(ut), t
            },
            directionTest: function (e) {
                var t = this.options,
                    n = !0,
                    i = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    s = e.deltaY;
                return o & t.direction || (t.direction & ze ? (o = 0 === r ? Me : 0 > r ? Fe : Oe, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === s ? Me : 0 > s ? Ne : Re, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
            },
            attrTest: function (e) {
                return ee.prototype.attrTest.call(this, e) && (this.state & ht || !(this.state & ht) && this.directionTest(e))
            },
            emit: function (e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = Q(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), l(ne, ee, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [ct]
            },
            attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & ht)
            },
            emit: function (e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), l(ie, G, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function () {
                return [at]
            },
            process: function (e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (this._input = e, !i || !n || e.eventType & (_e | Le) && !r) this.reset();
                else if (e.eventType & Ae) this.reset(), this._timer = o(function () {
                    this.state = gt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & _e) return gt;
                return wt
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function (e) {
                this.state === gt && (e && e.eventType & _e ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ge(), this.manager.emit(this.options.event, this._input)))
            }
        }), l(oe, ee, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [ct]
            },
            attrTest: function (e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & ht)
            }
        }), l(re, ee, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: ze | je,
                pointers: 1
            },
            getTouchAction: function () {
                return te.prototype.getTouchAction.call(this)
            },
            attrTest: function (e) {
                var t, n = this.options.direction;
                return n & (ze | je) ? t = e.overallVelocity : n & ze ? t = e.overallVelocityX : n & je && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && ve(t) > this.options.velocity && e.eventType & _e
            },
            emit: function (e) {
                var t = Q(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), l(se, G, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function () {
                return [lt]
            },
            process: function (e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if (this.reset(), e.eventType & Ae && 0 === this.count) return this.failTimeout();
                if (i && r && n) {
                    if (e.eventType != _e) return this.failTimeout();
                    var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        a = !this.pCenter || L(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e;
                    var l = this.count % t.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function () {
                        this.state = gt, this.tryEmit()
                    }, t.interval, this), ht) : gt
                }
                return wt
            },
            failTimeout: function () {
                return this._timer = o(function () {
                    this.state = wt
                }, this.options.interval, this), wt
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function () {
                this.state == gt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ae.VERSION = "2.0.8", ae.defaults = {
            domEvents: !1,
            touchAction: st,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [oe, {
                    enable: !1
                }],
                [ne, {
                    enable: !1
                },
                    ["rotate"]
                ],
                [re, {
                    direction: ze
                }],
                [te, {
                    direction: ze
                },
                    ["swipe"]
                ],
                [se],
                [se, {
                    event: "doubletap",
                    taps: 2
                },
                    ["tap"]
                ],
                [ie]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var bt = 1,
            xt = 2;
        le.prototype = {
            set: function (e) {
                return de(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function (e) {
                this.session.stopped = e ? xt : bt
            },
            recognize: function (e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n, i = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && o.state & gt) && (o = t.curRecognizer = null);
                    for (var r = 0; r < i.length;) n = i[r], t.stopped === xt || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (ht | mt | vt) && (o = t.curRecognizer = n), r++
                }
            },
            get: function (e) {
                if (e instanceof G) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++)
                    if (t[n].options.event == e) return t[n];
                return null
            },
            add: function (e) {
                if (r(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function (e) {
                if (r(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        n = g(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function (e, t) {
                if (e !== i && t !== i) {
                    var n = this.handlers;
                    return s(v(e), function (e) {
                        n[e] = n[e] || [], n[e].push(t)
                    }), this
                }
            },
            off: function (e, t) {
                if (e !== i) {
                    var n = this.handlers;
                    return s(v(e), function (e) {
                        t ? n[e] && n[e].splice(g(n[e], t), 1) : delete n[e]
                    }), this
                }
            },
            emit: function (e, t) {
                this.options.domEvents && ue(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function () {
                        t.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](t), i++
                }
            },
            destroy: function () {
                this.element && ce(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, de(ae, {
            INPUT_START: Ae,
            INPUT_MOVE: Pe,
            INPUT_END: _e,
            INPUT_CANCEL: Le,
            STATE_POSSIBLE: ft,
            STATE_BEGAN: ht,
            STATE_CHANGED: mt,
            STATE_ENDED: vt,
            STATE_RECOGNIZED: gt,
            STATE_CANCELLED: yt,
            STATE_FAILED: wt,
            DIRECTION_NONE: Me,
            DIRECTION_LEFT: Fe,
            DIRECTION_RIGHT: Oe,
            DIRECTION_UP: Ne,
            DIRECTION_DOWN: Re,
            DIRECTION_HORIZONTAL: ze,
            DIRECTION_VERTICAL: je,
            DIRECTION_ALL: qe,
            Manager: le,
            Input: E,
            TouchAction: Z,
            TouchInput: q,
            MouseInput: N,
            PointerEventInput: R,
            TouchMouseInput: H,
            SingleTouchInput: z,
            Recognizer: G,
            AttrRecognizer: ee,
            Tap: se,
            Pan: te,
            Swipe: re,
            Pinch: ne,
            Rotate: oe,
            Press: ie,
            on: p,
            off: f,
            each: s,
            merge: we,
            extend: ye,
            assign: de,
            inherit: l,
            bindFn: c,
            prefixed: b
        });
        var Ct = "undefined" != typeof e ? e : "undefined" != typeof self ? self : {};
        Ct.Hammer = ae, "function" == typeof define && define.amd ? define(function () {
            return ae
        }) : "undefined" != typeof module && module.exports ? module.exports = ae : e[n] = ae
    }(window, document, "Hammer"),
    function (e) {
        e.fn.slideShow = function (t) {
            if (e(this).length <= 0) return !1;
            var n = e.extend({}, e.fn.slideShow.defaults, t),
                i = function (e, t) {
                    this.options = t, this.galleryElm = e, this.galleryID = "undefined" !== e.attr("id") ? e.attr("id") : this.generateBlockID(), this.blockClass = t.blockClass, this.contentBlockElm = this.galleryElm.find(t.contentBlockElm), this.photoListElm = this.contentBlockElm.find(t.photoListElm), this.photoItems = this.photoListElm.find(t.photoItemElm), this.photoPrevElm = this.contentBlockElm.find(t.photoPrevElm), this.photoNextElm = this.contentBlockElm.find(t.photoNextElm), this.navBlockWrapperElm = this.galleryElm.find(t.navBlockWrapperElm), this.navBlockContentElm = this.navBlockWrapperElm.find(t.navBlockContentElm), this.bulletListElm = null, this.navBullets = null, this.navBlockPrevElm = this.navBlockWrapperElm.find(t.navBlockPrevElm), this.navBlockNextElm = this.navBlockWrapperElm.find(t.navBlockNextElm), this.androidStockBrowser = this.detectAndroidStockBrowser(), this.images = this.loadSlideShowImages(), this.imagesTotal = this.images.length, this.currentImageIndex = 0, this.reelPosition = this.imagesTotal, this.startOriginal = this.imagesTotal, this.startClones = 2 * this.imagesTotal, this.photoListElmWidth = null, this.reelWidth = null, this.reelContainerWidth = null, this.reelItemSize = null, this.reelItemMargin = null, this.reelEnd = !1, this.reelDirection = this.returnReelDirection(), this.autoplay = !1, this.autoplayFlag = !1, this.animationFlag = !1, this.navAnimationFlag = !1, this.initFlag = !1, this.eventsBound = !1, this.initAction = "default"
                };
            i.prototype.generateBlockID = function () {
                var e, t, n;
                for (e = "", n = 0; n < 10; n++) t = Math.floor(16 * Math.random()).toString(16).toUpperCase(), e += t;
                return e
            }, i.prototype.detectAndroidStockBrowser = function () {
                var e = navigator.userAgent;
                return e.indexOf("Mozilla/5.0") > -1 && e.indexOf("Android ") > -1 && e.indexOf("AppleWebKit") > -1 && e.indexOf("Version") > -1
            }, i.prototype.tooFastClick = function () {
                return this.animationFlag
            }, i.prototype.tooFastClickNav = function () {
                return this.navAnimationFlag
            }, i.prototype.loadSlideShowImages = function () {
                var t = this,
                    n = [];
                return this.photoItems.each(function () {
                    var i = e(this).find(t.options.photoItemLinkElm),
                        o = e(i).attr("href");
                    n.push({
                        imageId: o.substring(o.lastIndexOf("/") + 1, o.lastIndexOf(".")),
                        imageSrc: o,
                        imageTitle: e(i).attr("data-litebox-text"),
                        imageRatio: e(this).attr("class").replace(t.options.slideshowPhotoClass, "").replace("active", "").trim(),
                        imageThumbnail: o.substring(0, o.lastIndexOf("/")) + "/200/" + o.substring(o.lastIndexOf("/") + 1)
                    })
                }), n
            }, i.prototype.returnReelDirection = function () {
                var e = window.getComputedStyle(this.navBlockWrapperElm.get(0), ":after").getPropertyValue("content");
                return e.indexOf("horizontal") >= 0 ? "horizontal" : e.indexOf("vertical") >= 0 ? "vertical" : e.indexOf("bullets") >= 0 ? "bullets" : void 0
            }, i.prototype.getReelDirection = function () {
                var e = window.getComputedStyle(this.navBlockWrapperElm.get(0), ":after").getPropertyValue("content");
                e.indexOf("horizontal") >= 0 ? this.reelDirection = "horizontal" : e.indexOf("vertical") >= 0 ? this.reelDirection = "vertical" : e.indexOf("bullets") >= 0 && (this.reelDirection = "bullets")
            }, i.prototype.galleryNotEmpty = function () {
                this.galleryElm.addClass("slideshow"), "default" === this.initAction && this.photoListElm.find("li.active").length <= 0 ? this.photoListElm.find("li").eq(this.currentImageIndex).addClass("active") : "add" !== this.initAction && "delete" !== this.initAction || (this.photoListElm.find("li.active").removeClass("active"), this.photoListElm.find("li").eq(this.currentImageIndex).addClass("active"))
            }, i.prototype.galleryEmpty = function () {
                this.galleryElm.find(".clone").remove(), this.clearReel(), this.galleryElm.removeClass("slideshow")
            }, i.prototype.clearReel = function () {
                this.navBlockContentElm.removeClass("reel"), null !== this.bulletListElm && (this.bulletListElm.css("margin", ""), this.bulletListElm.css("width", ""), this.bulletListElm.css("height", ""))
            }, i.prototype.hideReelControls = function () {
                this.navBlockWrapperElm.removeClass("show-arrows")
            }, i.prototype.showReelControls = function () {
                this.navBlockWrapperElm.addClass("show-arrows")
            }, i.prototype.runAutoplay = function () {
                if (this.options.autoplay && !this.options.isCMS) {
                    var e = this;
                    e.autoplay = setInterval(function () {
                        e.nextImage(e.options.isEshopGallery ? "fade" : "slidefromright", !1)
                    }, e.options.timeout)
                }
            }, i.prototype.stopAutoplay = function () {
                this.options.autoplay && this.autoplay !== !1 && (clearInterval(this.autoplay), this.autoplay = !1, this.autoplayFlag = !1)
            }, i.prototype.nextImage = function (e, t) {
                this.currentImageIndex = this.currentImageIndex === this.imagesTotal - 1 ? 0 : this.currentImageIndex + 1, o.options.autoShiftReel && "bullets" !== o.reelDirection && !t && o.autoShiftReel(), this.changePhoto(this.currentImageIndex, e)
            }, i.prototype.prevImage = function (e, t) {
                this.currentImageIndex = 0 === this.currentImageIndex ? this.imagesTotal - 1 : this.currentImageIndex - 1, this.changePhoto(this.currentImageIndex, e)
            }, i.prototype.shiftReelForward = function () {
                this.navAnimationFlag = !0;
                var e = this.bulletListElm,
                    t = this.reelPosition,
                    n = this.reelItemSize + this.reelItemMargin,
                    i = null,
                    o = 0,
                    r = e.find("li.clicked");
                r.length ? (i = r.index(), o = Math.abs(i - t), r.hasClass("clone") && i > this.imagesTotal ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", (t - this.imagesTotal) * n * -1 + "px"), t = t - this.imagesTotal + o + 1, this.reelPosition = t) : (t = i + 1, this.reelPosition = t), r.removeClass("clicked")) : t === this.startClones ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", this.startOriginal * n * -1 + "px"), t = this.reelPosition = this.startOriginal + 1) : t = this.reelPosition += 1;
                "horizontal" === this.reelDirection ? e.animate({
                    marginLeft: t * n * -1
                }, 150, function () { }) : e.animate({
                    marginTop: t * n * -1
                }, 150, function () { })
            }, i.prototype.shiftReelBackward = function () {
                this.navAnimationFlag = !0;
                var e = this.bulletListElm,
                    t = this.reelPosition,
                    n = this.reelItemSize + this.reelItemMargin,
                    i = this.reelItemMargin,
                    o = null,
                    r = e.find("li.clicked");
                r.length ? (o = r.index(), t = o - 1, this.reelPosition = t, r.removeClass("clicked")) : 0 === this.reelPosition ? (e.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", this.startOriginal * n * -1 + i + "px"), t = this.reelPosition = this.startOriginal - 1) : t = this.reelPosition -= 1;
                "horizontal" === this.reelDirection ? e.animate({
                    marginLeft: t * n * -1
                }, 150, function () { }) : e.animate({
                    marginTop: t * n * -1
                }, 150, function () { })
            }, i.prototype.autoShiftReel = function () {
                for (var e = this.reelItemSize, t = this.reelItemMargin, n = this.reelContainerWidth, i = 1, o = e * this.imagesTotal + t * (this.imagesTotal - 1);
                    (i + 1) * (e + t) < n;) i++;
                this.currentImageIndex === i && this.autoplayFlag === !1 && (this.autoplayFlag = !0), this.autoplayFlag && o > n && this.shiftReelForward()
            }, i.prototype.changePhoto = function (t, n) {
                var i = this;
                if (this.animationFlag = !0, parseInt(t) !== parseInt(e(i.photoListElm).find("li.active").index())) {
                    if (i.currentImageIndex = parseInt(t), void 0 === n || "slidefromright" !== n && "slidefromleft" !== n && "fade" !== n) e(i.photoListElm).addClass("switching"), e(i.bulletListElm).find("li").removeClass("active"), e(i.bulletListElm).find('li[data-image-id="' + t + '"]').addClass("active"), e(i.photoListElm).find("li").css("visibility", "hidden").css("position", "absolute"), e(i.photoListElm).find("li.active").removeClass("active"), e(i.photoListElm).find("li").eq(parseInt(t)).addClass("active"), e(i.photoListElm).find("li").eq(parseInt(t)).css("visibility", "visible"), e(i.photoListElm).find("li").eq(parseInt(t)).css("position", "static"), e(i.photoListElm).removeClass("switching"), i.animationFlag = !1, i.navAnimationFlag = !1;
                    else {
                        var o = e(i.photoListElm).height();
                        e(i.photoListElm).css("height", o);
                        var r = e(i.photoListElm).find("li.active"),
                            s = e(i.photoListElm).find("li").eq(parseInt(t)),
                            a = (e(r).height(), e(s).height());
                        o !== a && e(i.photoListElm).animate({
                            height: a
                        }, {
                                duration: 300,
                                step: function () {
                                    cmsReset(i.galleryElm)
                                }
                            }, function () { }), "slidefromright" === n ? (e(r).css("position", "absolute").css("left", "0").css("top", "0"), e(r).animate({
                                left: "-120%"
                            }, 300, function () {
                                e(r).removeClass("active"), e(r).css("position", "").css("left", "").css("top", "")
                            }), e(s).css("left", "120%").css("opacity", 1).css("visibility", "visible"), e(s).animate({
                                left: "0%"
                            }, 300, function () {
                                e(s).addClass("active").css("opacity", "").css("left", "").css("position", ""), i.animationFlag = !1, i.navAnimationFlag = !1, e(i.photoListElm).css("height", ""), cmsReset(i.galleryElm)
                            })) : "slidefromleft" === n ? (e(r).css("position", "absolute").css("left", "0").css("top", "0"), e(r).animate({
                                left: "120%"
                            }, 300, function () {
                                e(r).removeClass("active"), e(r).css("position", "").css("left", "").css("top", "")
                            }), e(s).css("left", "-120%").css("opacity", 1).css("visibility", "visible"), e(s).animate({
                                left: "0%"
                            }, 300, function () {
                                e(s).addClass("active").css("opacity", "").css("left", "").css("position", ""), i.animationFlag = !1, i.navAnimationFlag = !1, e(i.photoListElm).css("height", ""), cmsReset(i.galleryElm)
                            })) : "fade" === n && (e(r).css("position", "absolute").css("left", 0).css("top", 0).css("opacity", 1), e(r).animate({
                                opacity: 0
                            }, 300, function () { }), e(s).css("position", "absolute").css("left", 0).css("top", 0).css("opacity", 0).css("visibility", "visible"), e(s).animate({
                                opacity: 1
                            }, 300, function () {
                                e(r).removeClass("active").css("position", "").css("left", "").css("top", "").css("opacity", "").css("visibility", "").attr("style", ""), e(s).addClass("active").css("opacity", "").css("left", "").css("top", "").css("position", "").css("visibility", "").attr("style", ""), i.animationFlag = !1, i.navAnimationFlag = !1, e(i.photoListElm).css("height", ""), cmsReset(i.galleryElm)
                            })), e(i.bulletListElm).find("li").removeClass("active"), e(i.bulletListElm).find('li[data-image-id="' + t + '"]').addClass("active")
                    }
                    cmsReset(i.galleryElm)
                }
            }, i.prototype.createClones = function () {
                for (var t = "", n = null, i = 0; i < this.images.length; i++) n = this.images[i], t += '<li class="clone ' + n.imageRatio + (i === this.currentImageIndex ? " active" : "") + '" data-image-id="' + i + '"><img src="' + n.imageThumbnail + '" alt=""></li>';
                e(this.bulletListElm).prepend(t), e(this.bulletListElm).append(t)
            }, i.prototype.prepareReel = function () {
                if ("bullets" !== this.reelDirection) {
                    var e = this.reelItemSize,
                        t = this.reelItemMargin,
                        n = e * this.imagesTotal + t * (this.imagesTotal - 1),
                        i = this.reelContainerWidth,
                        o = 0;
                    n <= i ? (this.hideReelControls(), this.clearReel(), this.navBlockContentElm.addClass("centered")) : (this.showReelControls(), this.navBlockContentElm.addClass("reel"), this.navBlockContentElm.removeClass("centered"), n = e * (3 * this.imagesTotal) + t * (3 * this.imagesTotal - 1), o = this.reelPosition * (e + t) * -1, this.bulletListElm.css("horizontal" === this.reelDirection ? "width" : "height", n + "px"), this.bulletListElm.css("horizontal" === this.reelDirection ? "marginTop" : "marginLeft", ""), this.bulletListElm.css("horizontal" === this.reelDirection ? "marginLeft" : "marginTop", o + "px"), "vertical" === this.reelDirection ? this.bulletListElm.css("width", "") : this.bulletListElm.css("height", "")), this.getDimensions()
                } else this.reelPosition = this.currentImageIndex + this.imagesTotal, this.clearReel()
            }, i.prototype.buildNavReel = function () {
                e(this.navBlockWrapperElm).find("ul").length > 0 && e(this.navBlockWrapperElm).find("ul").remove();
                for (var t = this.images.length, i = e("<ul></ul>"), o = null, r = this.currentImageIndex, s = 0; s < t; s++) o = this.images[s], e(i).append('<li class="' + o.imageRatio + " original" + (s === r ? " active" : "") + '" data-image-id="' + s + '"><img src="' + o.imageThumbnail + '" alt=""></li>');
                e(this.navBlockContentElm).append(i), this.bulletListElm = this.navBlockContentElm.find(n.bulletListElm), this.navBullets = this.bulletListElm.find(n.bulletItemElm), this.createClones()
            }, i.prototype.getDimensions = function () {
                this.getReelDirection(), this.reelItemSize = parseInt("horizontal" === this.reelDirection ? this.navBullets.width() : this.navBullets.height()), this.reelItemMargin = parseInt("horizontal" === this.reelDirection ? e(this.navBullets).eq(1).css("marginLeft") : e(this.navBullets).eq(1).css("marginTop")), this.reelWidth = this.reelItemSize * this.imagesTotal + this.reelItemMargin * (this.imagesTotal - 1), this.reelContainerWidth = "horizontal" === this.reelDirection ? this.navBlockContentElm.outerWidth(!0) : this.navBlockContentElm.outerHeight(!0), this.photoListElmWidth = this.photoListElm.width()
            }, i.prototype.bindControls = function () {
                var t = this;
                if (this.galleryElm.off("mouseenter").on("mouseenter", function () {
                    t.galleryElm.addClass("hover")
                }), this.galleryElm.off("mouseleave").on("mouseleave", function () {
                    t.galleryElm.removeClass("hover")
                }), this.navBlockNextElm.off(this.options.touchEvents).on(this.options.touchEvents, function (e) {
                    e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.tooFastClickNav() || (t.stopAutoplay(), t.nextImage("fade", !0), t.shiftReelForward())
                }), this.navBlockPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, function (e) {
                    e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.tooFastClickNav() || (t.stopAutoplay(), t.prevImage("fade", !0), t.shiftReelBackward())
                }), this.photoNextElm.off(this.options.touchEvents).on(this.options.touchEvents, function () {
                    t.tooFastClick() || (t.stopAutoplay(), t.nextImage("slidefromright", !1))
                }), this.photoPrevElm.off(this.options.touchEvents).on(this.options.touchEvents, function () {
                    t.tooFastClick() || (t.stopAutoplay(), t.prevImage("slidefromleft", !1))
                }), this.photoItems.on("click", function () {
                    t.stopAutoplay()
                }), e(t.bulletListElm).find("li").each(function () {
                    e(this).on("click", function () {
                        if (t.bulletListElm.find("li").removeClass("clicked"), e(this).addClass("clicked"), t.stopAutoplay(), "block" === e(this).find("img").css("display")) {
                            var n = parseInt(e(this).attr("data-image-id"));
                            t.changePhoto(n, "fade")
                        } else {
                            var n = parseInt(e(this).attr("data-image-id")),
                                i = parseInt(e(t.navBlockWrapperElm).find("li.active").attr("data-image-id")),
                                o = "";
                            o = t.options.isEshopGallery ? "fade" : 0 === n && i === t.imagesTotal - 1 ? "slidefromright" : 0 === i && n === t.imagesTotal - 1 ? "slidefromleft" : n > i ? "slidefromright" : "slidefromleft", t.changePhoto(n, o)
                        }
                    })
                }), this.options.isCMS) return !1;
                var n = new Hammer(t.galleryElm.get(0).querySelector(t.options.photoListElm), {
                    touchAction: "pan-y"
                }),
                    i = null,
                    o = null,
                    r = null,
                    s = null,
                    a = null,
                    l = null,
                    c = null,
                    u = null,
                    d = null,
                    p = null,
                    f = null,
                    h = null,
                    m = null,
                    v = null,
                    g = null,
                    y = null,
                    w = null,
                    b = null,
                    x = null,
                    C = !1,
                    E = 0,
                    T = 300,
                    I = 300;
                if (n.add(new Hammer.Pan({
                    threshold: 0,
                    pointers: 0,
                    direction: Hammer.DIRECTION_ALL
                })), n.on("panstart panleft panright pancancel panend ", function (n) {
                    if ("bullets" === t.reelDirection)
                        if ("panstart" === n.type) {
                            if (t.animationFlag || C) return void (C = !0);
                            t.stopAutoplay(), t.galleryElm.addClass("dragged"), E = 0, i = t.currentImageIndex, o = 0 === t.currentImageIndex ? t.imagesTotal - 1 : t.currentImageIndex - 1, r = t.currentImageIndex === t.imagesTotal - 1 ? 0 : t.currentImageIndex + 1, s = e(t.photoListElm).find("li.active"), a = e(t.photoListElm).find("li").eq(parseInt(o)), l = e(t.photoListElm).find("li").eq(parseInt(r)), c = parseInt(e(t.photoListElm).width()), u = parseInt(s.outerHeight()), d = u, p = e(t.photoListElm).find("li").eq(parseInt(o)).height(), f = e(t.photoListElm).find("li").eq(parseInt(r)).height(), h = c * -1, m = c, v = null, g = null, y = null, w = null, b = null, x = null, e(t.photoListElm).addClass("disable-pointer-events"), e(t.photoListElm).css("height", u), e(s).css("position", "absolute").css("left", "0").css("top", "0"), e(a).css("position", "absolute").css("left", h).css("top", "0").css("opacity", 1).css("visibility", "visible").css("z-index", 1), e(l).css("position", "absolute").css("left", m).css("top", "0").css("opacity", 1).css("visibility", "visible").css("z-index", 1)
                        } else if ("panend" === n.type || "pancancel" === n.type) {
                            if (C) return void (C = !1);
                            if (t.galleryElm.removeClass("dragged"), t.photoListElm.removeClass("disable-pointer-events"), "pancancel" === n.type) return;
                            if ((8 == n.direction || 16 == n.direction || 24 == n.direction) && 0 === E) return;
                            t.animationFlag = !0, I = T * (Math.abs(n.deltaX) / c), Math.abs(n.deltaX) > t.photoListElmWidth / 4 ? (b = !0, parseInt(n.deltaX) < 0 ? (v = c * -1, g = 0, y = c * -2, w = f, x = "forth") : (v = c, g = 2 * c, y = 0, w = p, x = "back")) : (v = 0, g = c, y = c * -1, w = u, b = !1, x = null), e(s).animate({
                                left: v
                            }, I, function () {
                                b && (e(s).removeClass("active"), t.currentImageIndex = "back" === x ? o : r, "back" === x ? e(a).addClass("active") : "forth" === x && e(l).addClass("active")), e(s).css("position", "").css("left", "").css("top", "").css("z-index", "").css("visibility", "")
                            }), e(a).animate({
                                left: y
                            }, I, function () {
                                e(a).css("opacity", "").css("left", "").css("position", "").css("z-index", "").css("visibility", ""), cmsReset(t.galleryElm)
                            }), e(l).animate({
                                left: g
                            }, I, function () {
                                e(l).css("opacity", "").css("left", "").css("position", "").css("z-index", "").css("visibility", ""), cmsReset(t.galleryElm)
                            }), e(t.photoListElm).animate({
                                height: w
                            }, I, function () {
                                t.animationFlag = !1, t.navAnimationFlag = !1, e(t.photoListElm).css("height", ""), cmsReset(t.galleryElm)
                            }), b && (e(t.bulletListElm).find("li").removeClass("active"), e(t.bulletListElm).find('li[data-image-id="' + ("back" === x ? o : r) + '"]').addClass("active"))
                        } else if ("panstart" !== n.type) {
                            if (t.animationFlag || C) return void (C = !0);
                            d = u + Math.abs(n.deltaX) / c * ((parseInt(n.deltaX) < 0 ? f : p) - u), e(t.photoListElm).css("height", d), E = n.deltaX, e(s).css("left", n.deltaX + "px"), e(a).css("left", h + n.deltaX + "px"), e(l).css("left", m + n.deltaX + "px")
                        }
                }), e("body").hasClass("touched")) {
                    var $ = new Hammer.Manager(t.bulletListElm.get(0));
                    $.add(new Hammer.Pan({
                        threshold: 20,
                        pointers: 0
                    })), $.on("pan", function (e) {
                        if ("bullets" !== t.returnReelDirection() && t.navBlockContentElm.hasClass("reel")) {
                            var n = "horizontal" === t.reelDirection ? e.deltaX : e.deltaY;
                            e.isFinal && (n > 0 ? (t.stopAutoplay(), t.prevImage("fade", !0), t.shiftReelBackward()) : n < 0 && (t.stopAutoplay(), t.nextImage("fade", !0), t.shiftReelForward()))
                        }
                    })
                }
            }, i.prototype.unbindEvents = function () {
                var t = this;
                e(document).off("wnd-redraw." + t.galleryID, ".content"), e(document).off("wnd-redraw-done." + t.galleryID, ".column-content"), e(document).off("wnd-dynamic-content-change." + t.galleryID, String("#" + t.galleryID)), e(document).off("wnd-redraw." + t.galleryID), e(window).off("resize." + t.galleryID)
            }, i.prototype.bindEvents = function () {
                var t = this;
                if (!t.eventsBound) {
                    e("body").hasClass("isIE") && (document.ondragstart = function () {
                        return !1
                    });
                    var n = debounce(function (n) {
                        var i = n.target;
                        e(i).hasClass(t.options.slideshowPhotoClass) && (i = t.options.isEshopGallery ? e(i).closest(".product-gallery") : e(i).closest(".gallery.block")), e(i).hasClass(t.blockClass) ? (e(t.galleryElm).find(".clone").remove(), t.reload(t.galleryID), t.eventsBound = !0) : e(i).hasClass(t.blockClass) || (e(t.galleryElm).find(".clone").remove(), t.unbindEvents(), t = {}, delete t)
                    }, 500);
                    e(document).off("wnd-redraw." + t.galleryID, String("#" + t.galleryID)), e(document).on("wnd-redraw." + t.galleryID, String("#" + t.galleryID), n), e(window).on("resize." + t.galleryID, function () {
                        t.resizeAction()
                    })
                }
            }, i.prototype.reload = function (t) {
                this.stopAutoplay(), this.galleryElm = e(document).find("#" + t), this.contentBlockElm = this.galleryElm.find(n.contentBlockElm), this.photoListElm = this.contentBlockElm.find(n.photoListElm), this.photoItems = this.photoListElm.find(n.photoItemElm), this.photoPrevElm = this.contentBlockElm.find(n.photoPrevElm), this.photoNextElm = this.contentBlockElm.find(n.photoNextElm), this.navBlockWrapperElm = this.galleryElm.find(n.navBlockWrapperElm), this.navBlockContentElm = this.navBlockWrapperElm.find(n.navBlockContentElm), this.bulletListElm = null, this.navBullets = null, this.navBlockPrevElm = this.navBlockWrapperElm.find(n.navBlockPrevElm), this.navBlockNextElm = this.navBlockWrapperElm.find(n.navBlockNextElm), this.images = this.loadSlideShowImages(), this.imagesTotal > this.images.length ? this.initAction = "delete" : this.imagesTotal < this.images.length && (this.initAction = "add"), this.imagesTotal = this.images.length, this.reelPosition = 0, this.startOriginal = this.imagesTotal, this.startClones = 2 * this.imagesTotal, this.reelEnd = !1, this.reelDirection = this.returnReelDirection(), this.autoplay = !1, this.animationFlag = !1, this.navAnimationFlag = !1, this.initFlag = !1, this.currentImageIndex = "default" === this.initAction ? this.currentImageIndex : 0;
                var i = this;
                i.init()
            }, i.prototype.resizeAction = function () {
                var e = this;
                e.imagesTotal > 1 && (e.getReelDirection(), e.getDimensions(), e.images.length > 1 && e.prepareReel())
            }, i.prototype.init = function () {
                if (this.initFlag) return !1;
                this.initFlag = !0;
                var t = this;
                if (setTimeout(function () {
                    t.initFlag = !1
                }, 1e3), this.images.length <= 1 ? this.galleryEmpty() : (this.galleryNotEmpty(), this.buildNavReel(), this.getDimensions(), this.prepareReel(), this.bindControls(), this.runAutoplay()), this.bindEvents(), this.initAction = "default", this.options.isEshopGallery) {
                    var n = e(document).find(this.options.eshopDetailElm);
                    n[0] && cmsReset(n[0])
                } else cmsReset(this.galleryElm)
            };
            var o = new i(e(this), n);
            o.init()
        }, e.fn.slideShow.defaults = {
            touchEvents: "click",
            autoplay: !1,
            timeout: "5000",
            cover: !1,
            isCMS: !1,
            autoShiftReel: !0,
            isEshopGallery: !1,
            blockClass: "product-gallery",
            eshopDetailElm: ".eshop-detail",
            contentBlockElm: ".product-gallery-content",
            photoListElm: ".product-gallery-list",
            photoItemElm: ".product-gallery-photo",
            photoPrevElm: ".arrow-prev",
            photoNextElm: ".arrow-next",
            photoItemLinkElm: ".product-gallery-link",
            photoItemImageDivElm: ".product-gallery-image",
            photoItemImageElm: "img",
            navBlockWrapperElm: ".product-gallery-nav",
            navBlockContentElm: ".product-gallery-nav-content",
            bulletListElm: "ul",
            bulletItemElm: "li",
            navBlockPrevElm: ".product-gallery-nav-arrow-prev",
            navBlockNextElm: ".product-gallery-nav-arrow-next",
            slideshowPhotoClass: "product-gallery-photo"
        }
    }(jQuery);
var is_cms = isCMS(),
    support3D = !msieversion() && !issafari() && !isfirefox(),
    force2D = "2D" == $("body").attr("data-parallax");
support3D = !1, $(document).ready(function () {
    deviceDetect("touched") || deviceDetect("wnd-frontend-test") || deviceDetect("mobile-devices") ? $(".bgatt-parallax").removeClass("bgatt-parallax").addClass("bgatt-scroll") : ($(window).on("resize orientationchange", function () {
        backgroundResize()
    }), $(window).scroll(function () {
        window.requestAnimationFrame(parallaxPosition)
    }), isCMS() ? setTimeout(function () {
        backgroundResize()
    }, 50) : backgroundResize()), isCMS() && $(document).on("wnd-redraw", "body", function () {
        setTimeout(function () {
            $(".bgatt-scroll").removeClass("parallax"), $(".bgatt-fixed").removeClass("parallax"), deviceDetect("touched") || ($(window).on("resize orientationchange", function () {
                backgroundResize()
            }), backgroundResize())
        }, 200)
    })
}), $(document).ready(function () {
    borderControll(), isCMS() && $(document).on("wnd-redraw", "body", function () {
        "sidebar" == $("body").attr("data-layout-type") ? setTimeout(function () {
            borderControll()
        }, 50) : borderControll()
    })
}), ! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    var e = function (e, t, n, i) {
        var o = {
            features: null,
            bind: function (e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            },
            isArray: function (e) {
                return e instanceof Array
            },
            createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            },
            getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function (e, t, n) {
                o.bind(e, t, n, !0)
            },
            removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function (e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function (e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t) return i;
                return -1
            },
            extend: function (e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function () {
                if (o.features) return o.features;
                var e = o.createEl(),
                    t = e.style,
                    n = "",
                    i = {};
                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var r = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && s < 8 && (i.isOldIOSPhone = !0))
                    }
                    var a = r.match(/Android\s([0-9\.]*)/),
                        l = a ? a[1] : 0;
                    l = parseFloat(l), l >= 1 && (l < 4.4 && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var c, u, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                    n = p[f];
                    for (var h = 0; h < 3; h++) c = d[h], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in t && (i[c] = u);
                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var m = 0;
                    i.raf = function (e) {
                        var t = (new Date).getTime(),
                            n = Math.max(0, 16 - (t - m)),
                            i = window.setTimeout(function () {
                                e(t + n)
                            }, n);
                        return m = t + n, i
                    }, i.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", s = function () {
                n.handleEvent.call(n)
            }, a = 0; a < t.length; a++)
                if (o = t[a])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o]) return !1
                        } else n["oldIE" + o] = s;
                        e[r]("on" + o, n["oldIE" + o])
                    } else e[r]("on" + o, n)
        });
        var r = this,
            s = 25,
            a = 3,
            l = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function (e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function (e, t) {
                    return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        o.extend(l, i);
        var c, u, d, p, f, h, m, v, g, y, w, b, x, C, E, T, I, $, k, S, D, A, P, _, L, M, F, O, N, R, z, j, q, B, H, W, X, U, Z, Y, V, G, K, Q, J, ee, te, ne, ie, oe, re, se, ae, le, ce, ue, de, pe = function () {
            return {
                x: 0,
                y: 0
            }
        },
            fe = pe(),
            he = pe(),
            me = pe(),
            ve = {},
            ge = 0,
            ye = {},
            we = pe(),
            be = 0,
            xe = !0,
            Ce = [],
            Ee = {},
            Te = !1,
            Ie = function (e, t) {
                o.extend(r, t.publicMethods), Ce.push(e)
            },
            $e = function (e) {
                var t = en();
                return e > t - 1 ? e - t : e < 0 ? t + e : e
            },
            ke = {},
            Se = function (e, t) {
                return ke[e] || (ke[e] = []), ke[e].push(t)
            },
            De = function (e) {
                var t = ke[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                }
            },
            Ae = function () {
                return (new Date).getTime()
            },
            Pe = function (e) {
                ce = e, r.bg.style.opacity = e * l.bgOpacity
            },
            _e = function (e, t, n, i, o) {
                (!Te || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = b + t + "px, " + n + "px" + x + " scale(" + i + ")"
            },
            Le = function (e) {
                oe && (e && (y > r.currItem.fitRatio ? Te || (fn(r.currItem, !1, !0), Te = !0) : Te && (fn(r.currItem), Te = !1)), _e(oe, me.x, me.y, y))
            },
            Me = function (e) {
                e.container && _e(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            },
            Fe = function (e, t) {
                t[A] = b + e + "px, 0px" + x
            },
            Oe = function (e, t) {
                if (!l.loop && t) {
                    var n = p + (we.x * ge - e) / we.x,
                        i = Math.round(e - wt.x);
                    (n < 0 && i > 0 || n >= en() - 1 && i < 0) && (e = wt.x + i * l.mainScrollEndFriction)
                }
                wt.x = e, Fe(e, f)
            },
            Ne = function (e, t) {
                var n = bt[e] - ye[e];
                return he[e] + fe[e] + n - n * (t / w)
            },
            Re = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            },
            ze = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            },
            je = null,
            qe = function () {
                je && (o.unbind(document, "mousemove", qe), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, De("mouseUsed")), je = setTimeout(function () {
                    je = null
                }, 100)
            },
            Be = function () {
                o.bind(document, "keydown", r), z.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", qe), o.bind(window, "resize scroll orientationchange", r), De("bindEvents")
            },
            He = function () {
                o.unbind(window, "resize scroll orientationchange", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", qe), z.transform && o.unbind(r.scrollWrap, "click", r), Z && o.unbind(window, m, r), clearTimeout(j), De("unbindEvents")
            },
            We = function (e, t) {
                var n = cn(r.currItem, ve, e);
                return t && (ie = n), n
            },
            Xe = function (e) {
                return e || (e = r.currItem), e.initialZoomLevel
            },
            Ue = function (e) {
                return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
            },
            Ze = function (e, t, n, i) {
                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Ne(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            },
            Ye = function () {
                if (A) {
                    var t = z.perspective && !_;
                    return b = "translate" + (t ? "3d(" : "("), void (x = z.perspective ? ", 0px)" : ")")
                }
                A = "left", o.addClass(e, "pswp--ie"), Fe = function (e, t) {
                    t.left = e + "px"
                }, Me = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                    n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                }, Le = function () {
                    if (oe) {
                        var e = oe,
                            t = r.currItem,
                            n = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = n * t.w,
                            o = n * t.h;
                        e.width = i + "px", e.height = o + "px", e.left = me.x + "px", e.top = me.y + "px"
                    }
                }
            },
            Ve = function (e) {
                var t = "";
                l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
                    t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
            },
            Ge = function (e) {
                e && (G || V || re || X) && (e.preventDefault(), e.stopPropagation())
            },
            Ke = function () {
                r.setScrollOffset(0, o.getScrollY())
            },
            Qe = {},
            Je = 0,
            et = function (e) {
                Qe[e] && (Qe[e].raf && M(Qe[e].raf), Je-- , delete Qe[e])
            },
            tt = function (e) {
                Qe[e] && et(e), Qe[e] || (Je++ , Qe[e] = {})
            },
            nt = function () {
                for (var e in Qe) Qe.hasOwnProperty(e) && et(e)
            },
            it = function (e, t, n, i, o, r, s) {
                var a, l = Ae();
                tt(e);
                var c = function () {
                    if (Qe[e]) {
                        if (a = Ae() - l, a >= i) return et(e), r(n), void (s && s());
                        r((n - t) * o(a / i) + t), Qe[e].raf = L(c)
                    }
                };
                c()
            },
            ot = {
                shout: De,
                listen: Se,
                viewportSize: ve,
                options: l,
                isMainScrollAnimating: function () {
                    return re
                },
                getZoomLevel: function () {
                    return y
                },
                getCurrentIndex: function () {
                    return p
                },
                isDragging: function () {
                    return Z
                },
                isZooming: function () {
                    return ee
                },
                setScrollOffset: function (e, t) {
                    ye.x = e, R = ye.y = t, De("updateScrollOffset", ye)
                },
                applyZoomPan: function (e, t, n, i) {
                    me.x = t, me.y = n, y = e, Le(i)
                },
                init: function () {
                    if (!c && !u) {
                        var n;
                        r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), F = e.className, c = !0, z = o.detectFeatures(), L = z.raf, M = z.caf, A = z.transform, N = z.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = T = [{
                            el: r.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[2],
                            wrap: 0,
                            index: -1
                        }], T[0].el.style.display = T[2].el.style.display = "none", Ye(), g = {
                            resize: r.updateSize,
                            orientationchange: function () {
                                clearTimeout(j), j = setTimeout(function () {
                                    ve.x !== r.scrollWrap.clientWidth && r.updateSize()
                                }, 500)
                            },
                            scroll: Ke,
                            keydown: Ve,
                            click: Ge
                        };
                        var i = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;
                        for (z.animationName && z.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < Ce.length; n++) r["init" + Ce[n]]();
                        if (t) {
                            var s = r.ui = new t(r, o);
                            s.init()
                        }
                        De("firstUpdate"), p = p || l.index || 0, (isNaN(p) || p < 0 || p >= en()) && (p = 0), r.currItem = Jt(p), (z.isOldIOSPhone || z.isOldAndroid) && (xe = !1), e.setAttribute("aria-hidden", "false"), l.modal && (xe ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === R && (De("initialLayout"), R = O = o.getScrollY());
                        var d = "pswp--open ";
                        for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += _ ? "pswp--touch" : "pswp--notouch", d += z.animationName ? " pswp--css_animation" : "", d += z.svg ? " pswp--svg" : "", o.addClass(e, d), r.updateSize(), h = -1, be = null, n = 0; n < a; n++) Fe((n + h) * we.x, T[n].el.style);
                        N || o.bind(r.scrollWrap, v, r), Se("initialZoomInEnd", function () {
                            r.setContent(T[0], p - 1), r.setContent(T[2], p + 1), T[0].el.style.display = T[2].el.style.display = "block", l.focus && e.focus(), Be()
                        }), r.setContent(T[1], p), r.updateCurrItem(), De("afterInit"), xe || (C = setInterval(function () {
                            Je || Z || ee || y !== r.currItem.initialZoomLevel || r.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                },
                close: function () {
                    c && (c = !1, u = !0, De("close"), He(), nn(r.currItem, null, !0, r.destroy))
                },
                destroy: function () {
                    De("destroy"), Vt && clearTimeout(Vt), e.setAttribute("aria-hidden", "true"), e.className = F, C && clearInterval(C), o.unbind(r.scrollWrap, v, r), o.unbind(window, "scroll", r), It(), nt(), ke = null
                },
                panTo: function (e, t, n) {
                    n || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), me.x = e, me.y = t, Le()
                },
                handleEvent: function (e) {
                    e = e || window.event, g[e.type] && g[e.type](e)
                },
                goTo: function (e) {
                    e = $e(e);
                    var t = e - p;
                    be = t, p = e, r.currItem = Jt(p), ge -= t, Oe(we.x * ge), nt(), re = !1, r.updateCurrItem()
                },
                next: function () {
                    r.goTo(p + 1)
                },
                prev: function () {
                    r.goTo(p - 1)
                },
                updateCurrZoomItem: function (e) {
                    if (e && De("beforeChange", 0), T[1].el.children.length) {
                        var t = T[1].el.children[0];
                        oe = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else oe = null;
                    ie = r.currItem.bounds, w = y = r.currItem.initialZoomLevel, me.x = ie.center.x, me.y = ie.center.y, e && De("afterChange")
                },
                invalidateCurrItems: function () {
                    E = !0;
                    for (var e = 0; e < a; e++) T[e].item && (T[e].item.needsUpdate = !0)
                },
                updateCurrItem: function (e) {
                    if (0 !== be) {
                        var t, n = Math.abs(be);
                        if (!(e && n < 2)) {
                            r.currItem = Jt(p), Te = !1, De("beforeChange", be), n >= a && (h += be + (be > 0 ? -a : a), n = a);
                            for (var i = 0; i < n; i++) be > 0 ? (t = T.shift(), T[a - 1] = t, h++ , Fe((h + 2) * we.x, t.el.style), r.setContent(t, p - n + i + 1 + 1)) : (t = T.pop(), T.unshift(t), h-- , Fe(h * we.x, t.el.style), r.setContent(t, p + n - i - 1 - 1));
                            if (oe && 1 === Math.abs(be)) {
                                var o = Jt(I);
                                o.initialZoomLevel !== y && (cn(o, ve), fn(o), Me(o))
                            }
                            be = 0, r.updateCurrZoomItem(), I = p, De("afterChange")
                        }
                    }
                },
                updateSize: function (t) {
                    if (!xe && l.modal) {
                        var n = o.getScrollY();
                        if (R !== n && (e.style.top = n + "px", R = n), !t && Ee.x === window.innerWidth && Ee.y === window.innerHeight) return;
                        Ee.x = window.innerWidth, Ee.y = window.innerHeight, e.style.height = Ee.y + "px"
                    }
                    if (ve.x = r.scrollWrap.clientWidth, ve.y = r.scrollWrap.clientHeight, Ke(), we.x = ve.x + Math.round(ve.x * l.spacing), we.y = ve.y, Oe(we.x * ge), De("beforeResize"), void 0 !== h) {
                        for (var i, s, c, u = 0; u < a; u++) i = T[u], Fe((u + h) * we.x, i.el.style), c = p + u - 1, l.loop && en() > 2 && (c = $e(c)), s = Jt(c), s && (E || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, c), 1 === u && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : i.index === -1 && c >= 0 && r.setContent(i, c), s && s.container && (cn(s, ve), fn(s), Me(s));
                        E = !1
                    }
                    w = y = r.currItem.initialZoomLevel, ie = r.currItem.bounds, ie && (me.x = ie.center.x, me.y = ie.center.y, Le(!0)), De("resize")
                },
                zoomTo: function (e, t, n, i, r) {
                    t && (w = y, bt.x = Math.abs(t.x) - me.x, bt.y = Math.abs(t.y) - me.y, Re(he, me));
                    var s = We(e, !1),
                        a = {};
                    Ze("x", s, a, e), Ze("y", s, a, e);
                    var l = y,
                        c = {
                            x: me.x,
                            y: me.y
                        };
                    ze(a);
                    var u = function (t) {
                        1 === t ? (y = e, me.x = a.x, me.y = a.y) : (y = (e - l) * t + l, me.x = (a.x - c.x) * t + c.x, me.y = (a.y - c.y) * t + c.y), r && r(t), Le(1 === t)
                    };
                    n ? it("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
                }
            },
            rt = 30,
            st = 10,
            at = {},
            lt = {},
            ct = {},
            ut = {},
            dt = {},
            pt = [],
            ft = {},
            ht = [],
            mt = {},
            vt = 0,
            gt = pe(),
            yt = 0,
            wt = pe(),
            bt = pe(),
            xt = pe(),
            Ct = function (e, t) {
                return e.x === t.x && e.y === t.y
            },
            Et = function (e, t) {
                return Math.abs(e.x - t.x) < s && Math.abs(e.y - t.y) < s
            },
            Tt = function (e, t) {
                return mt.x = Math.abs(e.x - t.x), mt.y = Math.abs(e.y - t.y), Math.sqrt(mt.x * mt.x + mt.y * mt.y)
            },
            It = function () {
                K && (M(K), K = null)
            },
            $t = function () {
                Z && (K = L($t), Bt())
            },
            kt = function () {
                return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
            },
            St = function (e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : St(e.parentNode, t))
            },
            Dt = {},
            At = function (e, t) {
                return Dt.prevent = !St(e.target, l.isClickableElement), De("preventDragEvent", e, t, Dt), Dt.prevent
            },
            Pt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            },
            _t = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            },
            Lt = function (e, t, n) {
                if (e - B > 50) {
                    var i = ht.length > 2 ? ht.shift() : {};
                    i.x = t, i.y = n, ht.push(i), B = e
                }
            },
            Mt = function () {
                var e = me.y - r.currItem.initialPosition.y;
                return 1 - Math.abs(e / (ve.y / 2))
            },
            Ft = {},
            Ot = {},
            Nt = [],
            Rt = function (e) {
                for (; Nt.length > 0;) Nt.pop();
                return P ? (de = 0, pt.forEach(function (e) {
                    0 === de ? Nt[0] = e : 1 === de && (Nt[1] = e), de++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Nt[0] = Pt(e.touches[0], Ft), e.touches.length > 1 && (Nt[1] = Pt(e.touches[1], Ot))) : (Ft.x = e.pageX, Ft.y = e.pageY, Ft.id = "", Nt[0] = Ft), Nt
            },
            zt = function (e, t) {
                var n, i, o, s, a = 0,
                    c = me[e] + t[e],
                    u = t[e] > 0,
                    d = wt.x + t.x,
                    p = wt.x - ft.x;
                return n = c > ie.min[e] || c < ie.max[e] ? l.panEndFriction : 1, c = me[e] + t[e] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (oe ? "h" !== se || "x" !== e || V || (u ? (c > ie.min[e] && (n = l.panEndFriction, a = ie.min[e] - c, i = ie.min[e] - he[e]), (i <= 0 || p < 0) && en() > 1 ? (s = d, p < 0 && d > ft.x && (s = ft.x)) : ie.min.x !== ie.max.x && (o = c)) : (c < ie.max[e] && (n = l.panEndFriction, a = c - ie.max[e], i = he[e] - ie.max[e]), (i <= 0 || p > 0) && en() > 1 ? (s = d, p > 0 && d < ft.x && (s = ft.x)) : ie.min.x !== ie.max.x && (o = c))) : s = d, "x" !== e) ? void (re || Q || y > r.currItem.fitRatio && (me[e] += t[e] * n)) : (void 0 !== s && (Oe(s, !0), Q = s !== ft.x), ie.min.x !== ie.max.x && (void 0 !== o ? me.x = o : Q || (me.x += t.x * n)), void 0 !== s)
            },
            jt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (Qt) return void e.preventDefault();
                    if (!U || "mousedown" !== e.type) {
                        if (At(e, !0) && e.preventDefault(), De("pointerDown"), P) {
                            var t = o.arraySearch(pt, e.pointerId, "id");
                            t < 0 && (t = pt.length), pt[t] = {
                                x: e.pageX,
                                y: e.pageY,
                                id: e.pointerId
                            }
                        }
                        var n = Rt(e),
                            i = n.length;
                        J = null, nt(), Z && 1 !== i || (Z = ae = !0, o.bind(window, m, r), W = ue = le = X = Q = G = Y = V = !1, se = null, De("firstTouchStart", n), Re(he, me), fe.x = fe.y = 0, Re(ut, n[0]), Re(dt, ut), ft.x = we.x * ge, ht = [{
                            x: ut.x,
                            y: ut.y
                        }], B = q = Ae(), We(y, !0), It(), $t()), !ee && i > 1 && !re && !Q && (w = y, V = !1, ee = Y = !0, fe.y = fe.x = 0, Re(he, me), Re(at, n[0]), Re(lt, n[1]), _t(at, lt, xt), bt.x = Math.abs(xt.x) - me.x, bt.y = Math.abs(xt.y) - me.y, te = ne = Tt(at, lt))
                    }
                }
            },
            qt = function (e) {
                if (e.preventDefault(), P) {
                    var t = o.arraySearch(pt, e.pointerId, "id");
                    if (t > -1) {
                        var n = pt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (Z) {
                    var i = Rt(e);
                    if (se || G || ee) J = i;
                    else if (wt.x !== we.x * ge) se = "h";
                    else {
                        var r = Math.abs(i[0].x - ut.x) - Math.abs(i[0].y - ut.y);
                        Math.abs(r) >= st && (se = r > 0 ? "h" : "v", J = i)
                    }
                }
            },
            Bt = function () {
                if (J) {
                    var e = J.length;
                    if (0 !== e)
                        if (Re(at, J[0]), ct.x = at.x - ut.x, ct.y = at.y - ut.y, ee && e > 1) {
                            if (ut.x = at.x, ut.y = at.y, !ct.x && !ct.y && Ct(J[1], lt)) return;
                            Re(lt, J[1]), V || (V = !0, De("zoomGestureStarted"));
                            var t = Tt(at, lt),
                                n = Zt(t);
                            n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ue = !0);
                            var i = 1,
                                o = Xe(),
                                s = Ue();
                            if (n < o)
                                if (l.pinchToClose && !ue && w <= r.currItem.initialZoomLevel) {
                                    var a = o - n,
                                        c = 1 - a / (o / 1.2);
                                    Pe(c), De("onPinchClose", c), le = !0
                                } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                            else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                            i < 0 && (i = 0), te = t, _t(at, lt, gt), fe.x += gt.x - xt.x, fe.y += gt.y - xt.y, Re(xt, gt), me.x = Ne("x", n), me.y = Ne("y", n), W = n > y, y = n, Le()
                        } else {
                            if (!se) return;
                            if (ae && (ae = !1, Math.abs(ct.x) >= st && (ct.x -= J[0].x - dt.x), Math.abs(ct.y) >= st && (ct.y -= J[0].y - dt.y)), ut.x = at.x, ut.y = at.y, 0 === ct.x && 0 === ct.y) return;
                            if ("v" === se && l.closeOnVerticalDrag && !kt()) {
                                fe.y += ct.y, me.y += ct.y;
                                var u = Mt();
                                return X = !0, De("onVerticalDrag", u), Pe(u), void Le()
                            }
                            Lt(Ae(), at.x, at.y), G = !0, ie = r.currItem.bounds;
                            var d = zt("x", ct);
                            d || (zt("y", ct), ze(me), Le())
                        }
                }
            },
            Ht = function (e) {
                if (z.isOldAndroid) {
                    if (U && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
                        U = 0
                    }, 600))
                }
                De("pointerUp"), At(e, !1) && e.preventDefault();
                var t;
                if (P) {
                    var n = o.arraySearch(pt, e.pointerId, "id");
                    if (n > -1)
                        if (t = pt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                        else {
                            var i = {
                                4: "mouse",
                                2: "touch",
                                3: "pen"
                            };
                            t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                        }
                }
                var s, a = Rt(e),
                    c = a.length;
                if ("mouseup" === e.type && (c = 0), 2 === c) return J = null, !0;
                1 === c && Re(dt, a[0]), 0 !== c || se || re || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), De("touchRelease", e, t));
                var u = -1;
                if (0 === c && (Z = !1, o.unbind(window, m, r), It(), ee ? u = 0 : yt !== -1 && (u = Ae() - yt)), yt = 1 === c ? Ae() : -1, s = u !== -1 && u < 150 ? "zoom" : "swipe", ee && c < 2 && (ee = !1, 1 === c && (s = "zoomPointerUp"), De("zoomGestureEnded")), J = null, G || V || re || X)
                    if (nt(), H || (H = Wt()), H.calculateSwipeSpeed("x"), X) {
                        var d = Mt();
                        if (d < l.verticalDragRange) r.close();
                        else {
                            var p = me.y,
                                f = ce;
                            it("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                                me.y = (r.currItem.initialPosition.y - p) * e + p, Pe((1 - f) * e + f), Le()
                            }), De("onVerticalDrag", 1)
                        }
                    } else {
                        if ((Q || re) && 0 === c) {
                            var h = Ut(s, H);
                            if (h) return;
                            s = "zoomPointerUp"
                        }
                        if (!re) return "swipe" !== s ? void Yt() : void (!Q && y > r.currItem.fitRatio && Xt(H))
                    }
            },
            Wt = function () {
                var e, t, n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (i) {
                        ht.length > 1 ? (e = Ae() - B + 50, t = ht[ht.length - 2][i]) : (e = Ae() - q, t = dt[i]), n.lastFlickOffset[i] = ut[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        n.backAnimStarted[e] || (me[e] > ie.min[e] ? n.backAnimDestination[e] = ie.min[e] : me[e] < ie.max[e] && (n.backAnimDestination[e] = ie.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, it("bounceZoomPan" + e, me[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                            me[e] = t, Le()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, me[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        if (Qe.zoomPan && (Qe.zoomPan.raf = L(n.panAnimLoop), n.now = Ae(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Le(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return me.x = Math.round(me.x), me.y = Math.round(me.y), Le(), void et("zoomPan")
                    }
                };
                return n
            },
            Xt = function (e) {
                return e.calculateSwipeSpeed("y"), ie = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (tt("zoomPan"), e.lastNow = Ae(), void e.panAnimLoop())
            },
            Ut = function (e, t) {
                var n;
                re || (vt = p);
                var i;
                if ("swipe" === e) {
                    var s = ut.x - dt.x,
                        a = t.lastFlickDist.x < 10;
                    s > rt && (a || t.lastFlickOffset.x > 20) ? i = -1 : s < -rt && (a || t.lastFlickOffset.x < -20) && (i = 1)
                }
                var c;
                i && (p += i, p < 0 ? (p = l.loop ? en() - 1 : 0, c = !0) : p >= en() && (p = l.loop ? 0 : en() - 1, c = !0), c && !l.loop || (be += i, ge -= i, n = !0));
                var u, d = we.x * ge,
                    f = Math.abs(d - wt.x);
                return n || d > wt.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, vt === p && (n = !1), re = !0, De("mainScrollAnimStart"), it("mainScroll", wt.x, d, u, o.easing.cubic.out, Oe, function () {
                    nt(), re = !1, vt = -1, (n || vt !== p) && r.updateCurrItem(), De("mainScrollAnimComplete")
                }), n && r.updateCurrItem(!0), n
            },
            Zt = function (e) {
                return 1 / ne * e * w
            },
            Yt = function () {
                var e = y,
                    t = Xe(),
                    n = Ue();
                y < t ? e = t : y > n && (e = n);
                var i, s = 1,
                    a = ce;
                return le && !W && !ue && y < t ? (r.close(), !0) : (le && (i = function (e) {
                    Pe((s - a) * e + a)
                }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        Ie("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, o) {
                        $ = e + t, k = e + n, S = e + i, D = o ? e + o : ""
                    };
                    P = z.pointerEvent, P && z.touch && (z.touch = !1), P ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : z.touch ? (e("touch", "start", "move", "end", "cancel"), _ = !0) : e("mouse", "down", "move", "up"), m = k + " " + S + " " + D, v = $, P && !_ && (_ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = _, g[$] = jt, g[k] = qt, g[S] = Ht, D && (g[D] = g[S]), z.touch && (v += " mousedown", m += " mousemove mouseup", g.mousedown = g[$], g.mousemove = g[k], g.mouseup = g[S]), _ || (l.allowPanToNext = !1)
                }
            }
        });
        var Vt, Gt, Kt, Qt, Jt, en, tn, nn = function (t, n, i, s) {
            Vt && clearTimeout(Vt), Qt = !0, Kt = !0;
            var a;
            t.initialLayout ? (a = t.initialLayout, t.initialLayout = null) : a = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
            var c = i ? l.hideAnimationDuration : l.showAnimationDuration,
                u = function () {
                    et("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Pe(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), De("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Qt = !1
                };
            if (!c || !a || void 0 === a.x) return De("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Re(me, t.initialPosition), Le(), e.style.opacity = i ? 0 : 1, Pe(1), void (c ? setTimeout(function () {
                u()
            }, c) : u());
            var f = function () {
                var n = d,
                    s = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = a.w / t.w, me.x = a.x, me.y = a.y - O, r[s ? "template" : "bg"].style.opacity = .001, Le()), tt("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Vt = setTimeout(function () {
                    if (De("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = a.w / t.w,
                            l = {
                                x: me.x,
                                y: me.y
                            },
                            d = y,
                            p = ce,
                            f = function (t) {
                                1 === t ? (y = r, me.x = a.x, me.y = a.y - R) : (y = (r - d) * t + d, me.x = (a.x - l.x) * t + l.x, me.y = (a.y - R - l.y) * t + l.y), Le(), s ? e.style.opacity = 1 - t : Pe(p - t * p)
                            };
                        n ? it("initialZoom", 0, 1, c, o.easing.cubic.out, f, u) : (f(1), Vt = setTimeout(u, c + 20))
                    } else y = t.initialZoomLevel, Re(me, t.initialPosition), Le(), Pe(1), s ? e.style.opacity = 1 : Pe(1), Vt = setTimeout(u, c + 20)
                }, i ? 25 : 90)
            };
            f()
        },
            on = {},
            rn = [],
            sn = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function () {
                    return Gt.length
                }
            },
            an = function () {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                }
            },
            ln = function (e, t, n) {
                var i = e.bounds;
                i.center.x = Math.round((on.x - t) / 2), i.center.y = Math.round((on.y - n) / 2) + e.vGap.top, i.max.x = t > on.x ? Math.round(on.x - t) : i.center.x, i.max.y = n > on.y ? Math.round(on.y - n) + e.vGap.top : i.center.y, i.min.x = t > on.x ? 0 : i.center.x, i.min.y = n > on.y ? e.vGap.top : i.center.y
            },
            cn = function (e, t, n) {
                if (e.src && !e.loadError) {
                    var i = !n;
                    if (i && (e.vGap || (e.vGap = {
                        top: 0,
                        bottom: 0
                    }), De("parseVerticalMargin", e)), on.x = t.x, on.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                        var o = on.x / e.w,
                            r = on.y / e.h;
                        e.fitRatio = o < r ? o : r;
                        var s = l.scaleMode;
                        "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
                    }
                    if (!n) return;
                    return ln(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
            },
            un = function (e, t, n, i, o, s) {
                t.loadError || i && (t.imageAppended = !0, fn(t, i, t === r.currItem && Te), n.appendChild(i), s && setTimeout(function () {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                }, 500))
            },
            dn = function (e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = o.createEl("pswp__img", "img"),
                    n = function () {
                        e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                    };
                return t.onload = n, t.onerror = function () {
                    e.loadError = !0, n()
                }, t.src = e.src, t
            },
            pn = function (e, t) {
                if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0
            },
            fn = function (e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio),
                        o = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                }
            },
            hn = function () {
                if (rn.length) {
                    for (var e, t = 0; t < rn.length; t++) e = rn[t], e.holder.index === e.index && un(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                    rn = []
                }
            };
        Ie("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = $e(e);
                    var t = Jt(e);
                    t && (!t.loaded && !t.loading || E) && (De("gettingData", e, t), t.src && dn(t))
                },
                initController: function () {
                    o.extend(l, sn, !0), r.items = Gt = n, Jt = r.getItemAt, en = l.getNumItemsFn, tn = l.loop, en() < 3 && (l.loop = !1), Se("beforeChange", function (e) {
                        var t, n = l.preload,
                            i = null === e || e >= 0,
                            o = Math.min(n[0], en()),
                            s = Math.min(n[1], en());
                        for (t = 1; t <= (i ? s : o); t++) r.lazyLoadItem(p + t);
                        for (t = 1; t <= (i ? o : s); t++) r.lazyLoadItem(p - t)
                    }), Se("initialLayout", function () {
                        r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
                    }), Se("mainScrollAnimComplete", hn), Se("initialZoomInEnd", hn), Se("destroy", function () {
                        for (var e, t = 0; t < Gt.length; t++) e = Gt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        rn = null
                    })
                },
                getItemAt: function (e) {
                    return e >= 0 && void 0 !== Gt[e] && Gt[e]
                },
                allowProgressiveImg: function () {
                    return l.forceProgressiveLoading || !_ || l.mouseUsed || screen.width > 1200
                },
                setContent: function (e, t) {
                    l.loop && (t = $e(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, s = r.getItemAt(t);
                    if (!s) return void (e.el.innerHTML = "");
                    De("gettingData", t, s), e.index = t, e.item = s;
                    var a = s.container = o.createEl("pswp__zoom-wrap");
                    if (!s.src && s.html && (s.html.tagName ? a.appendChild(s.html) : a.innerHTML = s.html), pn(s), cn(s, ve), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = s.src, fn(s, i), un(t, s, a, i, !0));
                    else {
                        if (s.loadComplete = function (n) {
                            if (c) {
                                if (e && e.index === t) {
                                    if (pn(n, !0)) return n.loadComplete = n.img = null, cn(n, ve), Me(n), void (e.index === p && r.updateCurrZoomItem());
                                    n.imageAppended ? !Qt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : z.transform && (re || Qt) ? rn.push({
                                        item: n,
                                        baseDiv: a,
                                        img: n.img,
                                        index: t,
                                        holder: e,
                                        clearPlaceholder: !0
                                    }) : un(t, n, a, n.img, re || Qt, !0)
                                }
                                n.loadComplete = null, n.img = null, De("imageLoadComplete", t, n)
                            }
                        }, o.features.transform) {
                            var u = "pswp__img pswp__img--placeholder";
                            u += s.msrc ? "" : " pswp__img--placeholder--blank";
                            var d = o.createEl(u, s.msrc ? "img" : "");
                            s.msrc && (d.src = s.msrc), fn(s, d), a.appendChild(d), s.placeholder = d
                        }
                        s.loading || dn(s), r.allowProgressiveImg() && (!Kt && z.transform ? rn.push({
                            item: s,
                            baseDiv: a,
                            img: s.img,
                            index: t,
                            holder: e
                        }) : un(t, s, a, s.img, !0, !0))
                    }
                    Kt || t !== p ? Me(s) : (oe = a.style, nn(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(a)
                },
                cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var mn, vn = {},
            gn = function (e, t, n) {
                var i = document.createEvent("CustomEvent"),
                    o = {
                        origEvent: e,
                        target: e.target,
                        releasePoint: t,
                        pointerType: n || "touch"
                    };
                i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
            };
        Ie("Tap", {
            publicMethods: {
                initTap: function () {
                    Se("firstTouchStart", r.onTapStart), Se("touchRelease", r.onTapRelease), Se("destroy", function () {
                        vn = {}, mn = null
                    })
                },
                onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(mn), mn = null)
                },
                onTapRelease: function (e, t) {
                    if (t && !G && !Y && !Je) {
                        var n = t;
                        if (mn && (clearTimeout(mn), mn = null, Et(n, vn))) return void De("doubleTap", n);
                        if ("mouse" === t.type) return void gn(e, t, "mouse");
                        var i = e.target.tagName.toUpperCase();
                        if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void gn(e, t);
                        Re(vn, n), mn = setTimeout(function () {
                            gn(e, t), mn = null
                        }, 300)
                    }
                }
            }
        });
        var yn;
        Ie("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    N || (_ ? Se("mouseUsed", function () {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function (t) {
                    yn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Se("bindEvents", function () {
                        o.bind(e, n, r.handleMouseWheel)
                    }), Se("unbindEvents", function () {
                        yn && o.unbind(e, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, s = function () {
                        r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), y < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), a()
                    },
                        a = function () {
                            i && (o.removeClass(e, "pswp--dragging"), i = !1)
                        };
                    Se("resize", s), Se("afterChange", s), Se("pointerDown", function () {
                        r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), Se("pointerUp", a), t || s()
                },
                handleMouseWheel: function (e) {
                    if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Je || Z ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (d = !0, r.close())), !0;
                    if (e.stopPropagation(), yn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (yn.x = 18 * e.deltaX, yn.y = 18 * e.deltaY) : (yn.x = e.deltaX, yn.y = e.deltaY);
                    else if ("wheelDelta" in e) e.wheelDeltaX && (yn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? yn.y = -.16 * e.wheelDeltaY : yn.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e)) return;
                        yn.y = e.detail
                    }
                    We(y, !0);
                    var t = me.x - yn.x,
                        n = me.y - yn.y;
                    (l.modal || t <= ie.min.x && t >= ie.max.x && n <= ie.min.y && n >= ie.max.y) && e.preventDefault(), r.panTo(t, n)
                },
                toggleDesktopZoom: function (t) {
                    t = t || {
                        x: ve.x / 2 + ye.x,
                        y: ve.y / 2 + ye.y
                    };
                    var n = l.getDoubleTapZoom(!0, r.currItem),
                        i = y === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var wn, bn, xn, Cn, En, Tn, In, $n, kn, Sn, Dn, An, Pn = {
            history: !0,
            galleryUID: 1
        },
            _n = function () {
                return Dn.hash.substring(1)
            },
            Ln = function () {
                wn && clearTimeout(wn), xn && clearTimeout(xn)
            },
            Mn = function () {
                var e = _n(),
                    t = {};
                if (e.length < 5) return t;
                var n, i = e.split("&");
                for (n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (t[o[0]] = o[1])
                    }
                if (l.galleryPIDs) {
                    var r = t.pid;
                    for (t.pid = 0, n = 0; n < Gt.length; n++)
                        if (Gt[n].pid === r) {
                            t.pid = n;
                            break
                        }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t
            },
            Fn = function () {
                if (xn && clearTimeout(xn), Je || Z) return void (xn = setTimeout(Fn, 500));
                Cn ? clearTimeout(bn) : Cn = !0;
                var e = p + 1,
                    t = Jt(p);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = In + "&gid=" + l.galleryUID + "&pid=" + e;
                $n || Dn.hash.indexOf(n) === -1 && (Sn = !0);
                var i = Dn.href.split("#")[0] + "#" + n;
                An ? "#" + n !== window.location.hash && history[$n ? "replaceState" : "pushState"]("", document.title, i) : $n ? Dn.replace(i) : Dn.hash = n, $n = !0, bn = setTimeout(function () {
                    Cn = !1
                }, 60)
            };
        Ie("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(l, Pn, !0), l.history) {
                        Dn = window.location, Sn = !1, kn = !1, $n = !1, In = _n(), An = "pushState" in history, In.indexOf("gid=") > -1 && (In = In.split("&gid=")[0], In = In.split("?gid=")[0]), Se("afterChange", r.updateURL), Se("unbindEvents", function () {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var e = function () {
                            Tn = !0, kn || (Sn ? history.back() : In ? Dn.hash = In : An ? history.pushState("", document.title, Dn.pathname + Dn.search) : Dn.hash = ""), Ln()
                        };
                        Se("unbindEvents", function () {
                            d && e()
                        }), Se("destroy", function () {
                            Tn || e()
                        }), Se("firstUpdate", function () {
                            p = Mn().pid
                        });
                        var t = In.indexOf("pid=");
                        t > -1 && (In = In.substring(0, t), "&" === In.slice(-1) && (In = In.slice(0, -1))), setTimeout(function () {
                            c && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function () {
                    return _n() === In ? (kn = !0, void r.close()) : void (Cn || (En = !0, r.goTo(Mn().pid), En = !1))
                },
                updateURL: function () {
                    Ln(), En || ($n ? wn = setTimeout(Fn, 800) : Fn())
                }
            }
        }), o.extend(r, ot)
    };
    return e
}), $(document).ready(function () {
    if ($(document).keydown(function (e) {
        if ((32 == e.which || 38 == e.which || 40 == e.which) && $(".pswp").hasClass("pswp--open")) return !1
    }), !isCMS()) {
        var e = function (e, t, n) {
            var i = e.lastIndexOf(t);
            return e = e.substring(0, i) + n + e.substring(i + 1)
        },
            t = '<!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        $("body").append(t);
        var n = $(".pswp")[0];
        $(".gallery").each(function () {
            var t = $(this),
                i = function () {
                    var n = [];
                    return t.find("a").each(function () {
                        var t = $(this).attr("href"),
                            i = $(this).attr("width"),
                            o = $(this).attr("height"),
                            r = $(this).find(".gallery-title span").text(),
                            s = {
                                desktopImg: {
                                    src: t,
                                    w: i,
                                    h: o,
                                    title: r
                                },
                                tabletImg: {
                                    src: e(t, "/", "/700/"),
                                    w: 700,
                                    h: 700 / i * o,
                                    title: r
                                },
                                phabletImg: {
                                    src: e(t, "/", "/450/"),
                                    w: 450,
                                    h: 450 / i * o,
                                    title: r
                                },
                                mobileImg: {
                                    src: e(t, "/", "/200/"),
                                    w: 200,
                                    h: 200 / i * o,
                                    title: r
                                }
                            };
                        n.push(s)
                    }), n
                },
                o = i();
            t.on("click", ".gallery-photo a", function (e) {
                e.preventDefault();
                var t = $(this).parent(),
                    i = $(this).closest(".gallery").find(".gallery-photo").index(t),
                    r = "mobile",
                    s = parseFloat(window.getComputedStyle($(".pswp__bg").get(0), ":after").getPropertyValue("content").replace('"', "").replace("'", "")),
                    a = {
                        index: i,
                        bgOpacity: s <= 1 && s >= 0 ? s : .7,
                        showHideOpacity: !0,
                        forceProgressiveLoading: !0
                    },
                    l = new PhotoSwipe(n, PhotoSwipeUI_Default, o, a);
                l.listen("gettingData", function (e, t) {
                    var n = l.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src, t.w = t.desktopImg.w, t.h = t.desktopImg.h, t.title = t.desktopImg.title, r = "desktop") : n > 700 ? (t.src = t.tabletImg.src, t.w = t.tabletImg.w, t.h = t.tabletImg.h, t.title = t.tabletImg.title, r = "tablet") : n > 400 ? (t.src = t.phabletImg.src, t.w = t.phabletImg.w, t.h = t.phabletImg.h, t.title = t.phabletImg.title, r = "phablet") : n > 200 && (t.src = t.mobileImg.src, t.w = t.mobileImg.w, t.h = t.mobileImg.h, t.title = t.mobileImg.title, r = "mobile")
                }), l.listen("beforeResize", function () {
                    var e, t;
                    e = l.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), e > 900 ? t = "desktop" : e > 700 ? t = "tablet" : e > 400 ? t = "phablet" : e > 200 && (t = "mobile"), r !== t && (l.invalidateCurrItems(), r = t)
                }), l.init()
            })
        }), $(".product-gallery").each(function () {
            var t = $(this),
                i = function () {
                    var n = [];
                    return t.find(".product-gallery-link").each(function () {
                        var t = $(this).attr("href"),
                            i = $(this).attr("width"),
                            o = $(this).attr("height"),
                            r = $(this).find(".product-gallery-title span").text(),
                            s = {
                                desktopImg: {
                                    src: t,
                                    w: i,
                                    h: o,
                                    title: r
                                },
                                tabletImg: {
                                    src: e(t, "/", "/700/"),
                                    w: 700,
                                    h: 700 / i * o,
                                    title: r
                                },
                                phabletImg: {
                                    src: e(t, "/", "/450/"),
                                    w: 450,
                                    h: 450 / i * o,
                                    title: r
                                },
                                mobileImg: {
                                    src: e(t, "/", "/200/"),
                                    w: 200,
                                    h: 200 / i * o,
                                    title: r
                                }
                            };
                        n.push(s)
                    }), n
                },
                o = i();
            t.on("click", ".product-gallery-photo a", function (e) {
                e.preventDefault();
                var t = $(this).parent(),
                    i = $(this).closest(".product-gallery").find(".product-gallery-photo").index(t),
                    r = parseFloat(window.getComputedStyle($(".pswp__bg").get(0), ":after").getPropertyValue("content").replace('"', "").replace("'", "")),
                    s = {
                        index: i,
                        bgOpacity: r <= 1 && r >= 0 ? r : .7,
                        showHideOpacity: !0,
                        forceProgressiveLoading: !0
                    },
                    a = new PhotoSwipe(n, PhotoSwipeUI_Default, o, s);
                a.listen("gettingData", function (e, t) {
                    var n = a.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src, t.w = t.desktopImg.w, t.h = t.desktopImg.h, t.title = t.desktopImg.title) : n > 700 ? (t.src = t.tabletImg.src, t.w = t.tabletImg.w, t.h = t.tabletImg.h, t.title = t.tabletImg.title) : n > 400 ? (t.src = t.phabletImg.src, t.w = t.phabletImg.w, t.h = t.phabletImg.h, t.title = t.phabletImg.title) : n > 200 && (t.src = t.mobileImg.src, t.w = t.mobileImg.w, t.h = t.mobileImg.h, t.title = t.mobileImg.title)
                }), a.init()
            })
        }), $(".image-lightbox").each(function () {
            var t = $(this),
                i = function () {
                    var n = [];
                    return t.find("a").each(function () {
                        var t = $(this).attr("href"),
                            i = $(this).attr("width"),
                            o = $(this).attr("height"),
                            r = $(this).attr("title"),
                            s = {
                                desktopImg: {
                                    src: t,
                                    w: i,
                                    h: o,
                                    title: r
                                },
                                tabletImg: {
                                    src: e(t, "/", "/700/"),
                                    w: 700,
                                    h: 700 / i * o,
                                    title: r
                                },
                                phabletImg: {
                                    src: e(t, "/", "/450/"),
                                    w: 450,
                                    h: 450 / i * o,
                                    title: r
                                },
                                mobileImg: {
                                    src: e(t, "/", "/200/"),
                                    w: 200,
                                    h: 200 / i * o,
                                    title: r
                                }
                            };
                        n.push(s)
                    }), n
                },
                o = i();
            t.on("click", "a.litebox", function (e) {
                e.preventDefault();
                var t = $(this).parent().index(),
                    i = "mobile",
                    r = {
                        index: t,
                        bgOpacity: .7,
                        showHideOpacity: !0,
                        forceProgressiveLoading: !0
                    },
                    s = new PhotoSwipe(n, PhotoSwipeUI_Default, o, r);
                s.listen("gettingData", function (e, t) {
                    var n = s.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
                    n > 900 ? (t.src = t.desktopImg.src, t.w = t.desktopImg.w, t.h = t.desktopImg.h, t.title = t.desktopImg.title, i = "desktop") : n > 700 ? (t.src = t.tabletImg.src, t.w = t.tabletImg.w, t.h = t.tabletImg.h, t.title = t.tabletImg.title, i = "tablet") : n > 400 ? (t.src = t.phabletImg.src, t.w = t.phabletImg.w, t.h = t.phabletImg.h, t.title = t.phabletImg.title, i = "phablet") : n > 200 && (t.src = t.mobileImg.src, t.w = t.mobileImg.w, t.h = t.mobileImg.h, t.title = t.mobileImg.title, i = "mobile")
                }), s.listen("beforeResize", function () {
                    var e, t;
                    e = s.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), e > 900 ? t = "desktop" : e > 700 ? t = "tablet" : e > 400 ? t = "phablet" : e > 200 && (t = "mobile"), i !== t && (s.invalidateCurrItems(), i = t)
                }), s.init()
            })
        })
    }
}), ! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    var e = function (e, t) {
        var n, i, o, r, s, a, l, c, u, d, p, f, h, m, v, g, y, w, b, x = this,
            C = !1,
            E = !0,
            T = !0,
            I = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function (e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function () {
                    return e.currItem.src || ""
                },
                getPageURLForShare: function () {
                    return window.location.href
                },
                getTextForShare: function () {
                    return e.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            $ = function (e) {
                if (g) return !0;
                e = e || window.event, v.timeToIdle && v.mouseUsed && !u && O();
                for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", s = 0; s < W.length; s++) n = W[s], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    e.stopPropagation && e.stopPropagation(), g = !0;
                    var a = t.features.isOldAndroid ? 600 : 30;
                    y = setTimeout(function () {
                        g = !1
                    }, a)
                }
            },
            k = function () {
                return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
            },
            S = function (e, n, i) {
                t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
            },
            D = function () {
                var e = 1 === v.getNumItemsFn();
                e !== m && (S(i, "ui--one-slide", e), m = e)
            },
            A = function () {
                S(l, "share-modal--hidden", T)
            },
            P = function () {
                return T = !T, T ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                    T && A()
                }, 300)) : (A(), setTimeout(function () {
                    T || t.addClass(l, "pswp__share-modal--fade-in")
                }, 30)), T || L(), !1
            },
            _ = function (t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || P(), 1))
            },
            L = function () {
                for (var e, t, n, i, o, r = "", s = 0; s < v.shareButtons.length; s++) e = v.shareButtons[s], n = v.getImageURLForShare(e), i = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
                l.children[0].innerHTML = r, l.children[0].onclick = _
            },
            M = function (e) {
                for (var n = 0; n < v.closeElClasses.length; n++)
                    if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
            },
            F = 0,
            O = function () {
                clearTimeout(b), F = 0, u && x.setIdle(!1)
            },
            N = function (e) {
                e = e ? e : window.event;
                var t = e.relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
                    x.setIdle(!0)
                }, v.timeToIdleOutside))
            },
            R = function () {
                v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
            },
            z = function () {
                v.preloaderEl && (j(!0), d("beforeChange", function () {
                    clearTimeout(h), h = setTimeout(function () {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
                    }, v.loadingIndicatorDelay)
                }), d("imageLoadComplete", function (t, n) {
                    e.currItem === n && j(!0)
                }))
            },
            j = function (e) {
                f !== e && (S(p, "preloader--active", !e), f = e)
            },
            q = function (e) {
                var n = e.vGap;
                if (k()) {
                    var s = v.barsSize;
                    if (v.captionEl && "auto" === s.bottom)
                        if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
                            var a = r.clientHeight;
                            n.bottom = parseInt(a, 10) || 44
                        } else n.bottom = s.top;
                    else n.bottom = "auto" === s.bottom ? 0 : s.bottom;
                    n.top = s.top
                } else n.top = n.bottom = 0
            },
            B = function () {
                v.timeToIdle && d("mouseUsed", function () {
                    t.bind(document, "mousemove", O), t.bind(document, "mouseout", N), w = setInterval(function () {
                        F++ , 2 === F && x.setIdle(!0)
                    }, v.timeToIdle / 2)
                })
            },
            H = function () {
                d("onVerticalDrag", function (e) {
                    E && e < .95 ? x.hideControls() : !E && e >= .95 && x.showControls()
                });
                var e;
                d("onPinchClose", function (t) {
                    E && t < .9 ? (x.hideControls(), e = !0) : e && !E && t > .9 && x.showControls()
                }), d("zoomGestureEnded", function () {
                    e = !1, e && !E && x.showControls()
                })
            },
            W = [{
                name: "caption",
                option: "captionEl",
                onInit: function (e) {
                    o = e
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function (e) {
                    l = e
                },
                onTap: function () {
                    P()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function (e) {
                    a = e
                },
                onTap: function () {
                    P()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: e.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function (e) {
                    s = e
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: e.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: e.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: e.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function () {
                    n.isFullscreen() ? n.exit() : n.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function (e) {
                    p = e
                }
            }],
            X = function () {
                var e, n, o, r = function (i) {
                    if (i)
                        for (var r = i.length, s = 0; s < r; s++) {
                            e = i[s], n = e.className;
                            for (var a = 0; a < W.length; a++) o = W[a], n.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                        }
                };
                r(i.children);
                var s = t.getChildByClass(i, "pswp__top-bar");
                s && r(s.children)
            };
        x.init = function () {
            t.extend(e.options, I, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, H(), d("beforeChange", x.update), d("doubleTap", function (t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function (e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function () {
                t.bind(i, "pswpTap click", $), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }), d("unbindEvents", function () {
                T || P(), w && clearInterval(w), t.unbind(document, "mouseout", N), t.unbind(document, "mousemove", O), t.unbind(i, "pswpTap click", $), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function () {
                v.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
                v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function () {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", q), X(), v.shareEl && a && l && (T = !0), D(), B(), R(), z()
        }, x.setIdle = function (e) {
            u = e, S(i, "ui--idle", e)
        }, x.update = function () {
            E && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), S(o, "caption--empty", !e.currItem.title)), C = !0) : C = !1, T || P(), D()
        }, x.updateFullscreen = function (i) {
            i && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
            v.counterEl && (s.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
        }, x.onGlobalTap = function (n) {
            n = n || window.event;
            var i = n.target || n.srcElement;
            if (!g)
                if (n.detail && "mouse" === n.detail.pointerType) {
                    if (M(i)) return void e.close();
                    t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (v.tapToToggleControls && (E ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || M(i))) return void e.close()
        }, x.onMouseOver = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            S(i, "ui--over-close", M(t))
        }, x.hideControls = function () {
            t.addClass(i, "pswp__ui--hidden"), E = !1
        }, x.showControls = function () {
            E = !0, C || x.update(), t.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
            var t, n = document.documentElement,
                i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
                return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return v.closeOnScroll = c, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    };
    return e
}), $(document).ready(function () {
    var e = function (e) {
        $(e).feed({
            type: "gallery",
            title: "outside",
            title_class: ".gallery-title",
            wrapper: ".gallery-wrapper",
            item: ".gallery-photo",
            item_wrapper: ".gallery-image",
            video_thumb: "",
            bottom_line: "true"
        })
    },
        t = function (t, n) {
            var i = t,
                n = void 0 === n ? 400 : n;
            setTimeout(function () {
                e(i)
            }, n)
        },
        n = function (e) {
            $(e).slideShow({
                isCMS: isCMS(),
                autoplay: !0,
                blockClass: "gallery-slideshow",
                contentBlockElm: ".gallery-content",
                photoListElm: ".gallery-list",
                photoItemElm: ".gallery-photo",
                photoPrevElm: ".gallery-arrow-prev",
                photoNextElm: ".gallery-arrow-next",
                photoItemLinkElm: ".gallery-link",
                photoItemImageDivElm: ".gallery-image",
                navBlockWrapperElm: ".gallery-nav",
                navBlockContentElm: ".gallery-nav-content",
                navBlockPrevElm: ".gallery-nav-arrow-prev",
                navBlockNextElm: ".gallery-nav-arrow-next",
                slideshowPhotoClass: "gallery-photo"
            })
        },
        i = function (e, i) {
            for (var o in e) $("#" + o).length <= 0 && delete e[o];
            return $(".gallery").each(function () {
                var i, o = $(this).attr("id"),
                    r = $(this);
                i = $(this).hasClass("gallery-classic") ? "classic" : $(this).hasClass("gallery-slideshow") ? "slideshow" : "feed", void 0 === e[o] ? (e[o] = i, "slideshow" === i && n(r), "feed" === i && t(r, 400)) : e[o] != i && ("classic" !== i && $("#" + o).find(".clone").remove(), "slideshow" === i && n($("#" + o)), "feed" === i && ($("#" + o).find(".clone").remove(), t($("#" + o), 400)), e[o] = i)
            }), e
        };
    if (isCMS()) {
        var o = i([]);
        $(document).on("wnd-content-change", ".gallery", function () {
            i(o, $(this))
        }), $(document).on("wnd-content-change", function (e) {
            $(e.target).hasClass("section") && i(o)
        }), $(document).on("wnd-redraw", ".content", function () {
            $(this).find(".gallery-feed").each(function () {
                t($(this), 400)
            })
        }), $(window).on("resize orientationchange", function () {
            $(".gallery-feed").each(function () {
                e($(this))
            })
        })
    } else $(".gallery").each(function () {
        $(this).hasClass("gallery-slideshow") && n($(this)), $(this).hasClass("gallery-feed") && t($(this), 400)
    }), $(window).on("resize orientationchange", function () {
        $(".gallery-feed").each(function () {
            e($(this))
        })
    })
}), $(document).ready(function () {
    function e() {
        var e = $("#menu-mobile");
        $("#menu").find(".level-1").length <= 0 ? $(e).hasClass("hidden") || $(e).addClass("hidden") : $(e).hasClass("hidden") && $(e).removeClass("hidden")
    }

    function t(e) {
        if (isCMS()) {
            var t = document.createEvent("Event");
            "open" == e && t.initEvent("wnd-open-menu", !0, !0), "close" == e && t.initEvent("wnd-close-menu", !0, !0), "more" == e && t.initEvent("wnd-more-menu", !0, !0), C.dispatchEvent(t)
        }
    }

    function n(e) {
        "undefined" == typeof e ? $(".level-1 > li.wnd-with-submenu ul").each(function () {
            ($(this).hasClass("level-2") || $(this).hasClass("level-3") && !$(this).parent().hasClass("wnd-active-path")) && ($(this).removeClass("open"), $(this).parent().removeClass("hover"), $(this).next(".mm-up").addClass("mm-down").removeClass("mm-up"))
        }) : (($(e).hasClass("level-2") || $(e).hasClass("level-3") && !$(e).parent().hasClass("wnd-active-path")) && ($(e).removeClass("open"), $(e).parent().removeClass("hover"), $(e).next(".mm-up").addClass("mm-down").removeClass("mm-up")), $(e).hasClass("level-2") && t("close"))
    }

    function i(e) {
        if (e.hasClass("level-2")) {
            var n = parseInt(e.outerWidth(!0)),
                i = $(window).width() - 30;
            e.css("opacity", "0)").show();
            var o = e.offset().left + n;
            if (o > i && e.addClass("align"), "top" == b) {
                var r = $(window).scrollTop();
                r < y ? e.addClass("top") : e.removeClass("top")
            }
            t("open")
        }
        e.removeAttr("style").addClass("open")
    }

    function o() {
        var e = $("#menu-submit"),
            o = $("#menu"),
            r = $(".close-menu");
        if (w) var s = $("#menu-overlay");
        $(r).off("click").on("click", function () {
            $(e).removeClass("active"), $(o).removeClass("open"), $("html, body").removeClass("noscroll"), setTimeout(function () {
                $(o).removeClass("visible"), $("body").removeClass("menu-open")
            }, 250), t("close")
        }), $(e).off("click").on("click", function (n) {
            n.preventDefault(), n.stopImmediatePropagation(), n.stopPropagation(), $(e).hasClass("active") ? ($(e).removeClass("active"), $(o).removeClass("open"), w ? $(s).removeClass("show") : $("html, body").removeClass("noscroll"), setTimeout(function () {
                $(o).removeClass("visible"), $("body").removeClass("menu-open")
            }, 250), t("close")) : ($(e).addClass("active"), w && $(s).addClass("show"), $(o).addClass("visible"), setTimeout(function () {
                $(o).addClass("open"), w || ($("html, body").addClass("noscroll"), $("body").addClass("menu-open"))
            }, 10), t("open"))
        }), $("#wrapper").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function (t) {
            isMobileMenu() || $(t.target).closest("#menu").length <= 0 && $(".level-1 > li.hover").each(function () {
                $(this).removeClass("hover"), $(this).find("ul").each(function () {
                    n($(this))
                })
            }), $(t.target).closest("#menu").length <= 0 && $(o).hasClass("open") && $(t.target).closest("#menu-mobile").length <= 0 && $(e).trigger("click")
        });
        var a = $("li.wnd-with-submenu a.mm-arrow"),
            l = $("ul.level-1 > li.wnd-with-submenu");
        if ($(a).off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function (e) {
            if (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), d) return !1;
            d = !0, setTimeout(function () {
                d = !1
            }, 500);
            var n = $(this).parent().children("ul");
            if ($(this).hasClass("mm-down")) {
                if ($(this).parent().addClass("hover"), $(this).removeClass("mm-down").addClass("mm-up"), $(n).addClass("open"), t("open"), isMobileMenu()) {
                    var i = $(u).offset(),
                        r = $(n).offset(),
                        s = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        a = $(n).outerHeight(),
                        l = parseInt($(".level-1 li.wnd-homepage > a:first-child").css("padding-top").replace("px", ""));
                    r.top + a > s && $(o).animate({
                        scrollTop: i.top * -1 + (r.top + a - s) + l
                    }, 500)
                }
            } else $(this).parent().removeClass("hover"), $(this).removeClass("mm-up").addClass("mm-down"), $(n).removeClass("open"), $(n).hasClass("level-2") && t("close")
        }), isDevice("pc") && !isMobileMenu()) {
            var c = $(".level-1 > li.wnd-with-submenu > a:not(mm-arrow)");
            $(c).on("touchend MSPointerDown pointerdown click", function (e) {
                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), m || (window.location.href = $(this).attr("href"))
            }), $(l).on("mouseenter pointerenter", function (e) {
                isMobileMenu() || ("touch" == e.originalEvent.pointerType && ($(this).hasClass("hover") || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), n(), m = !0, setTimeout(function () {
                    m = !1
                }, 500))), setTimeout(function () {
                    f = !1
                }, 500), $(this).addClass("hover"), i($(this).children("ul")))
            }), $(l).on("mouseleave pointerleave", function (e) {
                if (!m) return "touch" == e.originalEvent.pointerType ? (m = !0, void setTimeout(function () {
                    m = !1
                }, 200)) : void (isMobileMenu() || (setTimeout(function () {
                    f = !1
                }, 500), $(this).removeClass("hover"), $(this).find("ul").each(function () {
                    n($(this))
                })))
            })
        }
        if (isDevice("tablet") && !isMobileMenu()) {
            var p = $(".level-1 > li.wnd-with-submenu:not(.more) > a"),
                v = $(".level-1 > li.more > a"),
                g = $(".level-1 > li.more a:not(.mm-arrow)");
            $(p).off(), $(p).on("touchend MSPointerDown pointerdown click", function (e) {
                return e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), !d && (d = !0, setTimeout(function () {
                    d = !1
                }, 600), void ("block" == $(this).parent().find("ul").css("display") && h ? $(this).parent().hasClass("more") ? ($(this).parent().removeClass("hover"), $(this).parent().find("ul").each(function () {
                    n($(this))
                }), h = !1) : (window.location.href = $(this).attr("href"), h = !1) : (n(), $(this).parent().addClass("hover"), i($(this).parent().children("ul")), h = !0)))
            }), $(g).off(), $(g).on("touchend MSPointerDown pointerdown click", function (e) {
                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), "SPAN" == e.target.nodeName ? window.location = $(e.target).parent().attr("href") : "A" == e.target.nodeName && (window.location = $(e.target).attr("href"))
            }), $(v).off(), $(v).on("touchend MSPointerDown pointerdown click", function (e) {
                return e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), !d && (d = !0, setTimeout(function () {
                    d = !1
                }, 600), void ("block" == $(this).parent().find("ul").css("display") && h ? ($(this).parent().removeClass("hover"), $(this).parent().find("ul").each(function () {
                    n($(this))
                }), h = !1) : (n(), $(this).parent().addClass("hover"), i($(this).parent().children("ul")), h = !0)))
            }), $(".level-1 > li.wnd-with-submenu > a").on("mouseenter touchend click", function (e) {
                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()
            }), $("html").on("touchend MSPointerDown pointerdown click", function (e) {
                if (!$(e.target).closest("#menu").length) {
                    var t = $("ul.level-2");
                    $(t).removeClass("open"), $(t).parent().removeClass("hover")
                }
            })
        } (isDevice("pc") || isDevice("tablet")) && $(".wnd-homepage a").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function (e) {
            if ($(".wtf-homepage")[0] && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), "true" == x)) {
                var t = $("#main").offset().top;
                isCMS() && (t -= S), $("html, body").animate({
                    scrollTop: t
                }, 1e3)
            }
        })
    }

    function r() {
        var e = $(".level-1 > li:not(.more)"),
            n = $(".nav-line .section-inner"),
            i = $(".logo");
        0 == $(n).length && (n = $(".nav-line")), I = parseInt($(n).width()), k = parseInt($(i).outerWidth(!0)), k < parseInt($(i).innerWidth()) && (k = parseInt($(i).innerWidth()));
        var o = parseInt($("#menu").css("right")),
            r = parseInt($(n).css("paddingRight"));
        o = o > 0 ? o - r : o, isNaN(o) && (o = 0);
        var s = parseInt($("#menu").css("paddingRight"));
        isNaN(s) && (s = 0), $(".level-1 li.more").length || $(".level-1").append('<li class="more wnd-with-submenu"><a href="#"><span>' + v + "</span></a></li>");
        var a = $(".level-1 li.more"),
            l = parseInt($(a).outerWidth(!0));
        $(a).remove();
        var c = parseInt($(".level-1 > li:first-child > a").css("paddingLeft")),
            u = 20,
            d = I - k - l - c - s - o - u,
            f = 0,
            h = 0;
        $(e).each(function () {
            if (f += parseInt($(this).outerWidth(!0)), f > d) {
                var e = $(".level-1 li.more");
                $(e).length || ($(".level-1").append('<li class="more wnd-with-submenu"><a href="#"><span>' + v + '</span></a><ul class="level-2"></ul></li>'), t("more")), e = $(".level-1 li.more");
                var n = $(this).clone();
                $(n).find("ul").each(function () {
                    $(this).hasClass("level-2") ? $(this).addClass("level-3").removeClass("level-2").removeAttr("style") : $(this).removeAttr("style")
                });
                var i = $(".level-1 li.more .level-2");
                p ? $(i).prepend(n) : $(i).append(n), $(this).hasClass("overflowed") || $(this).addClass("overflowed"), h++
            } else {
                var o = $(this).children("a").attr("href");
                $(".level-1 li.more a").each(function () {
                    var e = $(this).attr("href");
                    o == e && $(this).parent().remove()
                }), $(this).removeClass("overflowed")
            }
            0 == h && $(e).remove()
        }), p = !0
    }

    function s() {
        p = !1, c = $("#menu"), u = c.find(" > div"), C = document.getElementById($(u).attr("id")), e(), $(".nav-line").removeClass("initial-state"), $("a.mm-arrow").remove();
        var t = $("#menu-submit");
        $(t).hasClass("active") || $("#menu, #menu ul").removeClass("open align").removeAttr("style"), $(".wnd-with-submenu").removeClass("hover"), isMobileMenu() ? $(t).hasClass("active") ? ($(c).addClass("open"), $(c).addClass("visible"), w || ($(l).addClass("noscroll"), $(l).addClass("menu-open"))) : ($(c).removeClass("open"), $(c).removeClass("visible"), $(l).removeClass("noscroll"), $(l).removeClass("menu-open")) : r(), $(".wnd-with-submenu").each(function () {
            ($(this).parent().hasClass("level-1") || $(this).parent().hasClass("level-2")) && $(this).append('<a class="mm-arrow mm-down" href="#"></a>'), $(this).parent().hasClass("level-3") && $(this).removeClass("wnd-with-submenu"), isMobileMenu() ? $(".wnd-active-path").each(function () {
                $(this).children("a.mm-arrow").removeClass("mm-down").addClass("mm-up"), $(this).children("ul").addClass("open")
            }) : $(".level-2 li.wnd-active-path").each(function () {
                $(this).children("a.mm-arrow").removeClass("mm-up").addClass("mm-down"), $(this).children("ul").removeClass("open")
            })
        }), o(), "none" == $(c).css("display") && $(c).attr("style", "")
    }

    function a() {
        var e = parseInt($(T).outerWidth(!0)),
            t = parseInt($(E).width());
        e == k && t == I || (k = e, I = t, r(), o())
    }
    var l = $("body"),
        c = $("#menu"),
        u = c.find(" > div"),
        d = !1,
        p = !1,
        f = !1,
        h = !1,
        m = !1,
        v = $(".more-text").text(),
        g = $(window).width(),
        y = 180,
        w = $(c).hasClass("legacy-menu"),
        b = $(c).attr("data-position"),
        x = $(c).attr("data-to-main"),
        C = document.getElementById($(u).attr("id")),
        E = $(".nav-line .section-inner"),
        T = $(".logo");
    0 == $(E).length && (E = $(".nav-line"), T = $(".nav-line .logo"));
    var I, k;
    if (isCMS()) var S = $("#wnd_toolbar").outerHeight(!0);
    s();
    var D = $("#menu").css("fontFamily");
    if (D.indexOf("pt-serif") !== -1) var A = setInterval(function () {
        var e = $("html").attr("class");
        e.indexOf("ptserif") !== -1 && (setTimeout(s, 10), clearInterval(A))
    }, 100);
    $(window).on("resize orientationchange", function () {
        $(window).width() != g && (g = $(window).width(), s())
    }), isCMS() && ($(document).on("wnd-redraw", ".header", function () {
        setTimeout(s, 20)
    }), $(document).on("wnd-content-change", ".logo", function () {
        setTimeout(s, 20)
    })), $("body.wnd-cms #header").on("keyup click focusin focusout", ".logo-content", function (e) {
        "focusout" == e.type ? setTimeout(function () {
            a()
        }, 100) : a()
    })
}), $(document).ready(function () {
    var e = !1;
    sectionControl(), isCMS() && $(document).on("wnd-content-change", "body", function () {
        setTimeout(function () {
            e ? e = !1 : (sectionControl(), e = !0)
        }, 100)
    });
    $(".menulink").on("click", function () { $("#menu").removeClass("visible open"), $("html").removeClass("noscroll"), $("body").removeClass("noscroll menu-open") });
 });