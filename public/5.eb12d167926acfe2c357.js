(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], { "+s0g": function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "//9w": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("se", { months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"), monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"), weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"), weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s gea\u017ees", past: "ma\u014bit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta m\xe1nnu", MM: "%d m\xe1nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, "/X5v": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("x-pseudo", { months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"), monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"), monthsParseExact: !0, weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"), weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"), weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT", nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT", nextWeek: "dddd [\xe1t] LT", lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT", lastWeek: "[L~\xe1st] dddd [\xe1t] LT", sameElse: "L" }, relativeTime: { future: "\xed~\xf1 %s", past: "%s \xe1~g\xf3", s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds", ss: "%d s~\xe9c\xf3\xf1~ds", m: "\xe1 ~m\xed\xf1~\xfat\xe9", mm: "%d m~\xed\xf1\xfa~t\xe9s", h: "\xe1~\xf1 h\xf3~\xfar", hh: "%d h~\xf3\xfars", d: "\xe1 ~d\xe1\xfd", dd: "%d d~\xe1\xfds", M: "\xe1 ~m\xf3\xf1~th", MM: "%d m~\xf3\xf1t~hs", y: "\xe1 ~\xfd\xe9\xe1r", yy: "%d \xfd~\xe9\xe1rs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, "0mo+": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0f21", 2: "\u0f22", 3: "\u0f23", 4: "\u0f24", 5: "\u0f25", 6: "\u0f26", 7: "\u0f27", 8: "\u0f28", 9: "\u0f29", 0: "\u0f20" },
                    n = { "\u0f21": "1", "\u0f22": "2", "\u0f23": "3", "\u0f24": "4", "\u0f25": "5", "\u0f26": "6", "\u0f27": "7", "\u0f28": "8", "\u0f29": "9", "\u0f20": "0" };
                e.defineLocale("bo", { months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT", nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT", nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT", lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT", lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0f63\u0f0b", past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63", s: "\u0f63\u0f58\u0f0b\u0f66\u0f44", ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d", m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42", mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58", h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42", hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51", d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42", dd: "%d \u0f49\u0f72\u0f53\u0f0b", M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42", MM: "%d \u0f5f\u0fb3\u0f0b\u0f56", y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42", yy: "%d \u0f63\u0f7c" }, preparse: function(e) { return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === t && e >= 4 || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === t && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "0tRk": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("pt-br", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba" }) }() }, "1rYy": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("hy-am", { months: { format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"), standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_") }, monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"), weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"), weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0569.", LLL: "D MMMM YYYY \u0569., HH:mm", LLLL: "dddd, D MMMM YYYY \u0569., HH:mm" }, calendar: { sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT", nextDay: "[\u057e\u0561\u0572\u0568] LT", lastDay: "[\u0565\u0580\u0565\u056f] LT", nextWeek: function() { return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, lastWeek: function() { return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, sameElse: "L" }, relativeTime: { future: "%s \u0570\u0565\u057f\u0578", past: "%s \u0561\u057c\u0561\u057b", s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", m: "\u0580\u0578\u057a\u0565", mm: "%d \u0580\u0578\u057a\u0565", h: "\u056a\u0561\u0574", hh: "%d \u056a\u0561\u0574", d: "\u0585\u0580", dd: "%d \u0585\u0580", M: "\u0561\u0574\u056b\u057d", MM: "%d \u0561\u0574\u056b\u057d", y: "\u057f\u0561\u0580\u056b", yy: "%d \u057f\u0561\u0580\u056b" }, meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/, isPM: function(e) { return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e) }, meridiem: function(e) { return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576" }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/, ordinal: function(e, t) { switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                            default:
                                return e } }, week: { dow: 1, doy: 7 } }) }() }, "1xZ4": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ca", { months: { standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aqu\xed %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/, ordinal: function(e, t) { var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8"; return "w" !== t && "W" !== t || (n = "a"), e + n }, week: { dow: 1, doy: 4 } }) }() }, "2fjn": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("fr-ca", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) { default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e") } } }) }() }, "2ykv": function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "3E1r": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
                    n = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };
                e.defineLocale("hi", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u092c\u091c\u0947", LTS: "A h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u092e\u0947\u0902", past: "%s \u092a\u0939\u0932\u0947", s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u091f", mm: "%d \u092e\u093f\u0928\u091f", h: "\u090f\u0915 \u0918\u0902\u091f\u093e", hh: "%d \u0918\u0902\u091f\u0947", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947", MM: "%d \u092e\u0939\u0940\u0928\u0947", y: "\u090f\u0915 \u0935\u0930\u094d\u0937", yy: "%d \u0935\u0930\u094d\u0937" }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0930\u093e\u0924" === t ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === t ? e : "\u0926\u094b\u092a\u0939\u0930" === t ? e >= 10 ? e : e + 12 : "\u0936\u093e\u092e" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "4MV3": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0ae7", 2: "\u0ae8", 3: "\u0ae9", 4: "\u0aea", 5: "\u0aeb", 6: "\u0aec", 7: "\u0aed", 8: "\u0aee", 9: "\u0aef", 0: "\u0ae6" },
                    n = { "\u0ae7": "1", "\u0ae8": "2", "\u0ae9": "3", "\u0aea": "4", "\u0aeb": "5", "\u0aec": "6", "\u0aed": "7", "\u0aee": "8", "\u0aef": "9", "\u0ae6": "0" };
                e.defineLocale("gu", { months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"), monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"), monthsParseExact: !0, weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"), weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"), weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"), longDateFormat: { LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7" }, calendar: { sameDay: "[\u0a86\u0a9c] LT", nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT", nextWeek: "dddd, LT", lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT", lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0aae\u0abe", past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe", s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb", ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1", m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f", mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f", h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95", hh: "%d \u0a95\u0ab2\u0abe\u0a95", d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8", dd: "%d \u0aa6\u0abf\u0ab5\u0ab8", M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb", MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb", y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7", yy: "%d \u0ab5\u0ab0\u0acd\u0ab7" }, preparse: function(e) { return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === t ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === t ? e : "\u0aac\u0aaa\u0acb\u0ab0" === t ? e >= 10 ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "4dOw": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, "6+QB": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }() }, "6B0Y": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u17e1", 2: "\u17e2", 3: "\u17e3", 4: "\u17e4", 5: "\u17e5", 6: "\u17e6", 7: "\u17e7", 8: "\u17e8", 9: "\u17e9", 0: "\u17e0" },
                    n = { "\u17e1": "1", "\u17e2": "2", "\u17e3": "3", "\u17e4": "4", "\u17e5": "5", "\u17e6": "6", "\u17e7": "7", "\u17e8": "8", "\u17e9": "9", "\u17e0": "0" };
                e.defineLocale("km", { months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"), weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/, isPM: function(e) { return "\u179b\u17d2\u1784\u17b6\u1785" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785" }, calendar: { sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT", nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT", nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT", lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT", lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT", sameElse: "L" }, relativeTime: { future: "%s\u1791\u17c0\u178f", past: "%s\u1798\u17bb\u1793", s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8", ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8", m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8", mm: "%d \u1793\u17b6\u1791\u17b8", h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784", hh: "%d \u1798\u17c9\u17c4\u1784", d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3", dd: "%d \u1790\u17d2\u1784\u17c3", M: "\u1798\u17bd\u1799\u1781\u17c2", MM: "%d \u1781\u17c2", y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6", yy: "%d \u1786\u17d2\u1793\u17b6\u17c6" }, dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/, ordinal: "\u1791\u17b8%d", preparse: function(e) { return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "7BjC": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["\xfche minuti", "\xfcks minut"], mm: [e + " minuti", e + " minutit"], h: ["\xfche tunni", "tund aega", "\xfcks tund"], hh: [e + " tunni", e + " tundi"], d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"], M: ["kuu aja", "kuu aega", "\xfcks kuu"], MM: [e + " kuu", e + " kuud"], y: ["\xfche aasta", "aasta", "\xfcks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("et", { months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[T\xe4na,] LT", nextDay: "[Homme,] LT", nextWeek: "[J\xe4rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4rast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d p\xe4eva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, "7aV9": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("si", { months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"), monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"), weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"), weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"), weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss" }, calendar: { sameDay: "[\u0d85\u0daf] LT[\u0da7]", nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]", nextWeek: "dddd LT[\u0da7]", lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]", lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]", sameElse: "L" }, relativeTime: { future: "%s\u0d9a\u0dd2\u0db1\u0dca", past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb", s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba", ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d", m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0", mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d", h: "\u0db4\u0dd0\u0dba", hh: "\u0db4\u0dd0\u0dba %d", d: "\u0daf\u0dd2\u0db1\u0dba", dd: "\u0daf\u0dd2\u0db1 %d", M: "\u0db8\u0dcf\u0dc3\u0dba", MM: "\u0db8\u0dcf\u0dc3 %d", y: "\u0dc0\u0dc3\u0dbb", yy: "\u0dc0\u0dc3\u0dbb %d" }, dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/, ordinal: function(e) { return e + " \u0dc0\u0dd0\u0db1\u0dd2" }, meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./, isPM: function(e) { return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e }, meridiem: function(e, t, n) { return e > 11 ? n ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : n ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4" } }) }() }, "8/+R": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0a67", 2: "\u0a68", 3: "\u0a69", 4: "\u0a6a", 5: "\u0a6b", 6: "\u0a6c", 7: "\u0a6d", 8: "\u0a6e", 9: "\u0a6f", 0: "\u0a66" },
                    n = { "\u0a67": "1", "\u0a68": "2", "\u0a69": "3", "\u0a6a": "4", "\u0a6b": "5", "\u0a6c": "6", "\u0a6d": "7", "\u0a6e": "8", "\u0a6f": "9", "\u0a66": "0" };
                e.defineLocale("pa-in", { months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"), weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), longDateFormat: { LT: "A h:mm \u0a35\u0a1c\u0a47", LTS: "A h:mm:ss \u0a35\u0a1c\u0a47", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47", LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47" }, calendar: { sameDay: "[\u0a05\u0a1c] LT", nextDay: "[\u0a15\u0a32] LT", nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT", lastDay: "[\u0a15\u0a32] LT", lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0a35\u0a3f\u0a71\u0a1a", past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47", s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f", ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f", m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f", mm: "%d \u0a2e\u0a3f\u0a70\u0a1f", h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e", hh: "%d \u0a18\u0a70\u0a1f\u0a47", d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28", dd: "%d \u0a26\u0a3f\u0a28", M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e", MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47", y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32", yy: "%d \u0a38\u0a3e\u0a32" }, preparse: function(e) { return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === t ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === t ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === t ? e >= 10 ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "8mBD": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("pt", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, "9rRi": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"], monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"], monthsParseExact: !0, weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-m\xe0ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-d\xe8 aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "m\xecos", MM: "%d m\xecosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }) }() }, "A+xa": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("cv", { months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"), monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"), weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"), weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"), weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]", LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm", LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm" }, calendar: { sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", sameElse: "L" }, relativeTime: { future: function(e) { return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d") }, past: "%s \u043a\u0430\u044f\u043b\u043b\u0430", s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442", hh: "%d \u0441\u0435\u0445\u0435\u0442", d: "\u043f\u04d7\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445", MM: "%d \u0443\u0439\u04d1\u0445", y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b", yy: "%d \u04ab\u0443\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/, ordinal: "%d-\u043c\u04d7\u0448", week: { dow: 1, doy: 7 } }) }() }, AQ68: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }) }() }, AvvY: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ml", { months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"), monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"), monthsParseExact: !0, weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"), weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"), weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"), longDateFormat: { LT: "A h:mm -\u0d28\u0d41", LTS: "A h:mm:ss -\u0d28\u0d41", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41", LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41" }, calendar: { sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT", nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT", nextWeek: "dddd, LT", lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT", lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d", past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d", s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e", ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d", m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02", dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02", M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02", MM: "%d \u0d2e\u0d3e\u0d38\u0d02", y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02", yy: "%d \u0d35\u0d7c\u0d37\u0d02" }, meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === t && e >= 4 || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === t || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" } }) }() }, B55N: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ja", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"), weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm" }, meridiemParse: /\u5348\u524d|\u5348\u5f8c/i, isPM: function(e) { return "\u5348\u5f8c" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c" }, calendar: { sameDay: "[\u4eca\u65e5] LT", nextDay: "[\u660e\u65e5] LT", nextWeek: function(e) { return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT" }, lastDay: "[\u6628\u65e5] LT", lastWeek: function(e) { return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT" }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}\u65e5/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            default:
                                return e } }, relativeTime: { future: "%s\u5f8c", past: "%s\u524d", s: "\u6570\u79d2", ss: "%d\u79d2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65e5", dd: "%d\u65e5", M: "1\u30f6\u6708", MM: "%d\u30f6\u6708", y: "1\u5e74", yy: "%d\u5e74" } }) }() }, BVg3: function(e, t, n) {! function(e) { "use strict";

                function t(e) { return e % 100 == 11 || e % 10 != 1 }

                function a(e, n, a, r) { var l = e + " "; switch (a) {
                        case "s":
                            return n || r ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                        case "ss":
                            return t(e) ? l + (n || r ? "sek\xfandur" : "sek\xfandum") : l + "sek\xfanda";
                        case "m":
                            return n ? "m\xedn\xfata" : "m\xedn\xfatu";
                        case "mm":
                            return t(e) ? l + (n || r ? "m\xedn\xfatur" : "m\xedn\xfatum") : n ? l + "m\xedn\xfata" : l + "m\xedn\xfatu";
                        case "hh":
                            return t(e) ? l + (n || r ? "klukkustundir" : "klukkustundum") : l + "klukkustund";
                        case "d":
                            return n ? "dagur" : r ? "dag" : "degi";
                        case "dd":
                            return t(e) ? n ? l + "dagar" : l + (r ? "daga" : "d\xf6gum") : n ? l + "dagur" : l + (r ? "dag" : "degi");
                        case "M":
                            return n ? "m\xe1nu\xf0ur" : r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                        case "MM":
                            return t(e) ? n ? l + "m\xe1nu\xf0ir" : l + (r ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : n ? l + "m\xe1nu\xf0ur" : l + (r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                        case "y":
                            return n || r ? "\xe1r" : "\xe1ri";
                        case "yy":
                            return t(e) ? l + (n || r ? "\xe1r" : "\xe1rum") : l + (n || r ? "\xe1r" : "\xe1ri") } }
                n("wd/R").defineLocale("is", { months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"), weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"), weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"), weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[\xed dag kl.] LT", nextDay: "[\xe1 morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xed g\xe6r kl.] LT", lastWeek: "[s\xed\xf0asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s s\xed\xf0an", s: a, ss: a, m: a, mm: a, h: "klukkustund", hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, ByF4: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("fo", { months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"), weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"), weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[\xcd dag kl.] LT", nextDay: "[\xcd morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xcd gj\xe1r kl.] LT", lastWeek: "[s\xed\xf0stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s s\xed\xf0ani", s: "f\xe1 sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein t\xedmi", hh: "%d t\xedmar", d: "ein dagur", dd: "%d dagar", M: "ein m\xe1na\xf0ur", MM: "%d m\xe1na\xf0ir", y: "eitt \xe1r", yy: "%d \xe1r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, CjzT: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, CoRJ: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ar-ma", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 6, doy: 12 } }) }() }, "D/JM": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }() }, "DKr+": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return t ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function(e, t) { switch (t) {
                            case "D":
                                return e + "er";
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                            case "w":
                            case "W":
                                return e } }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" } }) }() }, Dkky: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("fr-ch", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) { default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }() }, Dmvi: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, DoHr: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
                e.defineLocale("tr", { months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"), monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\xfcn] LT", lastWeek: "[ge\xe7en] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \xf6nce", s: "birka\xe7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" }, ordinal: function(e, n) { switch (n) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'\u0131nc\u0131"; var a = e % 10; return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null]) } }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, DxQv: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\xe5 dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\xe5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "et \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, Dzi0: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }() }, "E+lV": function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"], m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"], mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"], h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"], hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"], dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"], MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"], yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("sr-cyrl", { months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"), monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"), monthsParseExact: !0, weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"), weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT", nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                                case 3:
                                    return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                                case 6:
                                    return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0443] dddd [\u0443] LT" } }, lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT", lastWeek: function() { return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "\u043f\u0440\u0435 %s", s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "\u0434\u0430\u043d", dd: t.translate, M: "\u043c\u0435\u0441\u0435\u0446", MM: t.translate, y: "\u0433\u043e\u0434\u0438\u043d\u0443", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, EOgW: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("th", { months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"), monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"), monthsParseExact: !0, weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm", LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm" }, meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/, isPM: function(e) { return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" }, calendar: { sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT", lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT", sameElse: "L" }, relativeTime: { future: "\u0e2d\u0e35\u0e01 %s", past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27", s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", m: "1 \u0e19\u0e32\u0e17\u0e35", mm: "%d \u0e19\u0e32\u0e17\u0e35", h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", d: "1 \u0e27\u0e31\u0e19", dd: "%d \u0e27\u0e31\u0e19", M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19", MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19", y: "1 \u0e1b\u0e35", yy: "%d \u0e1b\u0e35" } }) }() }, G0Uy: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"), weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"), weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"), weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[G\u0127ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-biera\u0127 fil-]LT", lastWeek: "dddd [li g\u0127adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f\u2019 %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "sieg\u0127a", hh: "%d sieg\u0127at", d: "\u0121urnata", dd: "%d \u0121ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, H8ED: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r; return "m" === n ? t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === n ? t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (a = +e, r = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", hh: t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d", dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e", yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e" }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]) }
                n("wd/R").defineLocale("be", { months: { format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"), standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_") }, monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"), weekdays: { format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., HH:mm", LLLL: "dddd, D MMMM YYYY \u0433., HH:mm" }, calendar: { sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT", nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT", lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT", nextWeek: function() { return "[\u0423] dddd [\u045e] LT" }, lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT" } }, sameElse: "L" }, relativeTime: { future: "\u043f\u0440\u0430\u0437 %s", past: "%s \u0442\u0430\u043c\u0443", s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434", m: t, mm: t, h: t, hh: t, d: "\u0434\u0437\u0435\u043d\u044c", dd: t, M: "\u043c\u0435\u0441\u044f\u0446", MM: t, y: "\u0433\u043e\u0434", yy: t }, meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/, isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/, ordinal: function(e, t) { switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456";
                            case "D":
                                return e + "-\u0433\u0430";
                            default:
                                return e } }, week: { dow: 1, doy: 7 } }) }() }, HP3h: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
                    n = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    a = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] },
                    r = function(e) { return function(t, r, l, i) { var o = n(t),
                                s = a[e][n(t)]; return 2 === o && (s = s[r ? 0 : 1]), s.replace(/%d/i, t) } },
                    l = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar-ly", { months: l, monthsShort: l, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: r("s"), ss: r("s"), m: r("m"), mm: r("m"), h: r("h"), hh: r("h"), d: r("d"), dd: r("d"), M: r("M"), MM: r("M"), y: r("y"), yy: r("y") }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, IBtZ: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ka", { months: { standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"), format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_") }, monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"), weekdays: { standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"), format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ }, weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"), weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]", nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]", lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]", nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]", lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4", sameElse: "L" }, relativeTime: { future: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8" }, past: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0 }, s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8", ss: "%d \u10ec\u10d0\u10db\u10d8", m: "\u10ec\u10e3\u10d7\u10d8", mm: "%d \u10ec\u10e3\u10d7\u10d8", h: "\u10e1\u10d0\u10d0\u10d7\u10d8", hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8", d: "\u10d3\u10e6\u10d4", dd: "%d \u10d3\u10e6\u10d4", M: "\u10d7\u10d5\u10d4", MM: "%d \u10d7\u10d5\u10d4", y: "\u10ec\u10d4\u10da\u10d8", yy: "%d \u10ec\u10d4\u10da\u10d8" }, dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4" }, week: { dow: 1, doy: 7 } }) }() }, "Ivi+": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ko", { months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"), weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\ub144 MMMM D\uc77c", LLL: "YYYY\ub144 MMMM D\uc77c A h:mm", LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\ub144 MMMM D\uc77c", lll: "YYYY\ub144 MMMM D\uc77c A h:mm", llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm" }, calendar: { sameDay: "\uc624\ub298 LT", nextDay: "\ub0b4\uc77c LT", nextWeek: "dddd LT", lastDay: "\uc5b4\uc81c LT", lastWeek: "\uc9c0\ub09c\uc8fc dddd LT", sameElse: "L" }, relativeTime: { future: "%s \ud6c4", past: "%s \uc804", s: "\uba87 \ucd08", ss: "%d\ucd08", m: "1\ubd84", mm: "%d\ubd84", h: "\ud55c \uc2dc\uac04", hh: "%d\uc2dc\uac04", d: "\ud558\ub8e8", dd: "%d\uc77c", M: "\ud55c \ub2ec", MM: "%d\ub2ec", y: "\uc77c \ub144", yy: "%d\ub144" }, dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\uc77c";
                            case "M":
                                return e + "\uc6d4";
                            case "w":
                            case "W":
                                return e + "\uc8fc";
                            default:
                                return e } }, meridiemParse: /\uc624\uc804|\uc624\ud6c4/, isPM: function(e) { return "\uc624\ud6c4" === e }, meridiem: function(e, t, n) { return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4" } }) }() }, "JCF/": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
                    n = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
                    a = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];
                e.defineLocale("ku", { months: a, monthsShort: a, weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/, isPM: function(e) { return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c" }, calendar: { sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", sameElse: "L" }, relativeTime: { future: "\u0644\u0647\u200c %s", past: "%s", s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643", ss: "\u0686\u0631\u0643\u0647\u200c %d", m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643", mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643", h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698", dd: "%d \u0695\u06c6\u0698", M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af", MM: "%d \u0645\u0627\u0646\u06af", y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5", yy: "%d \u0633\u0627\u06b5" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, JVSJ: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = e + " "; switch (n) {
                        case "ss":
                            return a + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return a + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return a + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                        case "dd":
                            return a + (1 === e ? "dan" : "dana");
                        case "MM":
                            return a + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                        case "yy":
                            return a + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina") } }
                n("wd/R").defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT" } }, lastDay: "[ju\u010der u] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }() }, JvlW: function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekund\u0117_sekund\u017ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };

                function n(e, t, n, a) { return t ? r(n)[0] : a ? r(n)[1] : r(n)[2] }

                function a(e) { return e % 10 == 0 || e > 10 && e < 20 }

                function r(e) { return t[e].split("_") }

                function l(e, t, l, i) { var o = e + " "; return 1 === e ? o + n(0, t, l[0], i) : t ? o + (a(e) ? r(l)[1] : r(l)[0]) : i ? o + r(l)[1] : o + (a(e) ? r(l)[1] : r(l)[2]) }
                e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"), weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012f] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prie\u0161 %s", s: function(e, t, n, a) { return t ? "kelios sekund\u0117s" : a ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes" }, ss: l, m: n, mm: l, h: n, hh: l, d: n, dd: l, M: n, MM: l, y: n, yy: l }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "K/tc": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[M\xf4re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }() }, KSF8: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("vi", { months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[H\xf4m nay l\xfac] LT", nextDay: "[Ng\xe0y mai l\xfac] LT", nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT", lastDay: "[H\xf4m qua l\xfac] LT", lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT", sameElse: "L" }, relativeTime: { future: "%s t\u1edbi", past: "%s tr\u01b0\u1edbc", s: "v\xe0i gi\xe2y", ss: "%d gi\xe2y", m: "m\u1ed9t ph\xfat", mm: "%d ph\xfat", h: "m\u1ed9t gi\u1edd", hh: "%d gi\u1edd", d: "m\u1ed9t ng\xe0y", dd: "%d ng\xe0y", M: "m\u1ed9t th\xe1ng", MM: "%d th\xe1ng", y: "m\u1ed9t n\u0103m", yy: "%d n\u0103m" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }() }, KTz0: function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT" } }, lastDay: "[ju\u010de u] LT", lastWeek: function() { return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mjesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, Loxo: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("uz", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"), weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"), weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]", nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", sameElse: "L" }, relativeTime: { future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430", past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d", s: "\u0444\u0443\u0440\u0441\u0430\u0442", ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442", m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430", mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430", h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u0431\u0438\u0440 \u043e\u0439", MM: "%d \u043e\u0439", y: "\u0431\u0438\u0440 \u0439\u0438\u043b", yy: "%d \u0439\u0438\u043b" }, week: { dow: 1, doy: 7 } }) }() }, LvDl: function(e, t, n) {
            (function(e) { var a;
                (function() { var r, l = 200,
                        i = "Expected a function",
                        o = "__lodash_placeholder__",
                        s = 1,
                        u = 2,
                        d = 4,
                        c = 1,
                        h = 2,
                        _ = 1,
                        m = 2,
                        f = 4,
                        p = 8,
                        g = 16,
                        b = 32,
                        y = 64,
                        M = 128,
                        v = 256,
                        L = 512,
                        k = 800,
                        Y = 16,
                        D = 1 / 0,
                        w = 9007199254740991,
                        x = 1.7976931348623157e308,
                        T = NaN,
                        S = 4294967295,
                        H = S - 1,
                        j = S >>> 1,
                        C = [
                            ["ary", M],
                            ["bind", _],
                            ["bindKey", m],
                            ["curry", p],
                            ["curryRight", g],
                            ["flip", L],
                            ["partial", b],
                            ["partialRight", y],
                            ["rearg", v]
                        ],
                        O = "[object Arguments]",
                        P = "[object Array]",
                        A = "[object AsyncFunction]",
                        E = "[object Boolean]",
                        W = "[object Date]",
                        F = "[object DOMException]",
                        I = "[object Error]",
                        R = "[object Function]",
                        z = "[object GeneratorFunction]",
                        N = "[object Map]",
                        B = "[object Number]",
                        V = "[object Null]",
                        U = "[object Object]",
                        J = "[object Proxy]",
                        G = "[object RegExp]",
                        q = "[object Set]",
                        $ = "[object String]",
                        K = "[object Symbol]",
                        Z = "[object Undefined]",
                        Q = "[object WeakMap]",
                        X = "[object ArrayBuffer]",
                        ee = "[object DataView]",
                        te = "[object Float32Array]",
                        ne = "[object Float64Array]",
                        ae = "[object Int8Array]",
                        re = "[object Int16Array]",
                        le = "[object Int32Array]",
                        ie = "[object Uint8Array]",
                        oe = "[object Uint8ClampedArray]",
                        se = "[object Uint16Array]",
                        ue = "[object Uint32Array]",
                        de = /\b__p \+= '';/g,
                        ce = /\b(__p \+=) '' \+/g,
                        he = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        _e = /&(?:amp|lt|gt|quot|#39);/g,
                        me = /[&<>"']/g,
                        fe = RegExp(_e.source),
                        pe = RegExp(me.source),
                        ge = /<%-([\s\S]+?)%>/g,
                        be = /<%([\s\S]+?)%>/g,
                        ye = /<%=([\s\S]+?)%>/g,
                        Me = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        ve = /^\w*$/,
                        Le = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        ke = /[\\^$.*+?()[\]{}|]/g,
                        Ye = RegExp(ke.source),
                        De = /^\s+|\s+$/g,
                        we = /^\s+/,
                        xe = /\s+$/,
                        Te = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        Se = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        He = /,? & /,
                        je = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        Ce = /\\(\\)?/g,
                        Oe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        Pe = /\w*$/,
                        Ae = /^[-+]0x[0-9a-f]+$/i,
                        Ee = /^0b[01]+$/i,
                        We = /^\[object .+?Constructor\]$/,
                        Fe = /^0o[0-7]+$/i,
                        Ie = /^(?:0|[1-9]\d*)$/,
                        Re = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ze = /($^)/,
                        Ne = /['\n\r\u2028\u2029\\]/g,
                        Be = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Ve = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Ue = "[" + Ve + "]",
                        Je = "[" + Be + "]",
                        Ge = "\\d+",
                        qe = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                        $e = "[^\\ud800-\\udfff" + Ve + Ge + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                        Ke = "\\ud83c[\\udffb-\\udfff]",
                        Ze = "[^\\ud800-\\udfff]",
                        Qe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Xe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        et = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                        tt = "(?:" + qe + "|" + $e + ")",
                        nt = "(?:" + et + "|" + $e + ")",
                        at = "(?:" + Je + "|" + Ke + ")?",
                        rt = "[\\ufe0e\\ufe0f]?" + at + "(?:\\u200d(?:" + [Ze, Qe, Xe].join("|") + ")[\\ufe0e\\ufe0f]?" + at + ")*",
                        lt = "(?:" + ["[\\u2700-\\u27bf]", Qe, Xe].join("|") + ")" + rt,
                        it = "(?:" + [Ze + Je + "?", Je, Qe, Xe, "[\\ud800-\\udfff]"].join("|") + ")",
                        ot = RegExp("['\u2019]", "g"),
                        st = RegExp(Je, "g"),
                        ut = RegExp(Ke + "(?=" + Ke + ")|" + it + rt, "g"),
                        dt = RegExp([et + "?" + qe + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=" + [Ue, et, "$"].join("|") + ")", nt + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=" + [Ue, et + tt, "$"].join("|") + ")", et + "?" + tt + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?", et + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ge, lt].join("|"), "g"),
                        ct = RegExp("[\\u200d\\ud800-\\udfff" + Be + "\\ufe0e\\ufe0f]"),
                        ht = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        _t = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        mt = -1,
                        ft = {};
                    ft[te] = ft[ne] = ft[ae] = ft[re] = ft[le] = ft[ie] = ft[oe] = ft[se] = ft[ue] = !0, ft[O] = ft[P] = ft[X] = ft[E] = ft[ee] = ft[W] = ft[I] = ft[R] = ft[N] = ft[B] = ft[U] = ft[G] = ft[q] = ft[$] = ft[Q] = !1; var pt = {};
                    pt[O] = pt[P] = pt[X] = pt[ee] = pt[E] = pt[W] = pt[te] = pt[ne] = pt[ae] = pt[re] = pt[le] = pt[N] = pt[B] = pt[U] = pt[G] = pt[q] = pt[$] = pt[K] = pt[ie] = pt[oe] = pt[se] = pt[ue] = !0, pt[I] = pt[R] = pt[Q] = !1; var gt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                        bt = parseFloat,
                        yt = parseInt,
                        Mt = "object" == typeof global && global && global.Object === Object && global,
                        vt = "object" == typeof self && self && self.Object === Object && self,
                        Lt = Mt || vt || Function("return this")(),
                        kt = t && !t.nodeType && t,
                        Yt = kt && "object" == typeof e && e && !e.nodeType && e,
                        Dt = Yt && Yt.exports === kt,
                        wt = Dt && Mt.process,
                        xt = function() { try { return Yt && Yt.require && Yt.require("util").types || wt && wt.binding && wt.binding("util") } catch (e) {} }(),
                        Tt = xt && xt.isArrayBuffer,
                        St = xt && xt.isDate,
                        Ht = xt && xt.isMap,
                        jt = xt && xt.isRegExp,
                        Ct = xt && xt.isSet,
                        Ot = xt && xt.isTypedArray;

                    function Pt(e, t, n) { switch (n.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, n[0]);
                            case 2:
                                return e.call(t, n[0], n[1]);
                            case 3:
                                return e.call(t, n[0], n[1], n[2]) } return e.apply(t, n) }

                    function At(e, t, n, a) { for (var r = -1, l = null == e ? 0 : e.length; ++r < l;) { var i = e[r];
                            t(a, i, n(i), e) } return a }

                    function Et(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a && !1 !== t(e[n], n, e);); return e }

                    function Wt(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
                            if (!t(e[n], n, e)) return !1;
                        return !0 }

                    function Ft(e, t) { for (var n = -1, a = null == e ? 0 : e.length, r = 0, l = []; ++n < a;) { var i = e[n];
                            t(i, n, e) && (l[r++] = i) } return l }

                    function It(e, t) { return !(null == e || !e.length) && $t(e, t, 0) > -1 }

                    function Rt(e, t, n) { for (var a = -1, r = null == e ? 0 : e.length; ++a < r;)
                            if (n(t, e[a])) return !0;
                        return !1 }

                    function zt(e, t) { for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a;) r[n] = t(e[n], n, e); return r }

                    function Nt(e, t) { for (var n = -1, a = t.length, r = e.length; ++n < a;) e[r + n] = t[n]; return e }

                    function Bt(e, t, n, a) { var r = -1,
                            l = null == e ? 0 : e.length; for (a && l && (n = e[++r]); ++r < l;) n = t(n, e[r], r, e); return n }

                    function Vt(e, t, n, a) { var r = null == e ? 0 : e.length; for (a && r && (n = e[--r]); r--;) n = t(n, e[r], r, e); return n }

                    function Ut(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
                            if (t(e[n], n, e)) return !0;
                        return !1 } var Jt = Xt("length");

                    function Gt(e, t, n) { var a; return n(e, function(e, n, r) { if (t(e, n, r)) return a = n, !1 }), a }

                    function qt(e, t, n, a) { for (var r = e.length, l = n + (a ? 1 : -1); a ? l-- : ++l < r;)
                            if (t(e[l], l, e)) return l;
                        return -1 }

                    function $t(e, t, n) { return t == t ? function(e, t, n) { for (var a = n - 1, r = e.length; ++a < r;)
                                if (e[a] === t) return a;
                            return -1 }(e, t, n) : qt(e, Zt, n) }

                    function Kt(e, t, n, a) { for (var r = n - 1, l = e.length; ++r < l;)
                            if (a(e[r], t)) return r;
                        return -1 }

                    function Zt(e) { return e != e }

                    function Qt(e, t) { var n = null == e ? 0 : e.length; return n ? nn(e, t) / n : T }

                    function Xt(e) { return function(t) { return null == t ? r : t[e] } }

                    function en(e) { return function(t) { return null == e ? r : e[t] } }

                    function tn(e, t, n, a, r) { return r(e, function(e, r, l) { n = a ? (a = !1, e) : t(n, e, r, l) }), n }

                    function nn(e, t) { for (var n, a = -1, l = e.length; ++a < l;) { var i = t(e[a]);
                            i !== r && (n = n === r ? i : n + i) } return n }

                    function an(e, t) { for (var n = -1, a = Array(e); ++n < e;) a[n] = t(n); return a }

                    function rn(e) { return function(t) { return e(t) } }

                    function ln(e, t) { return zt(t, function(t) { return e[t] }) }

                    function on(e, t) { return e.has(t) }

                    function sn(e, t) { for (var n = -1, a = e.length; ++n < a && $t(t, e[n], 0) > -1;); return n }

                    function un(e, t) { for (var n = e.length; n-- && $t(t, e[n], 0) > -1;); return n } var dn = en({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O", "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S", "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017f": "s" }),
                        cn = en({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });

                    function hn(e) { return "\\" + gt[e] }

                    function _n(e) { return ct.test(e) }

                    function mn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e, a) { n[++t] = [a, e] }), n }

                    function fn(e, t) { return function(n) { return e(t(n)) } }

                    function pn(e, t) { for (var n = -1, a = e.length, r = 0, l = []; ++n < a;) { var i = e[n];
                            i !== t && i !== o || (e[n] = o, l[r++] = n) } return l }

                    function gn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e) { n[++t] = e }), n }

                    function bn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e) { n[++t] = [e, e] }), n }

                    function yn(e) { return _n(e) ? function(e) { for (var t = ut.lastIndex = 0; ut.test(e);) ++t; return t }(e) : Jt(e) }

                    function Mn(e) { return _n(e) ? function(e) { return e.match(ut) || [] }(e) : function(e) { return e.split("") }(e) } var vn = en({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }),
                        Ln = function e(t) { var n, a = (t = null == t ? Lt : Ln.defaults(Lt.Object(), t, Ln.pick(Lt, _t))).Array,
                                Be = t.Date,
                                Ve = t.Error,
                                Ue = t.Function,
                                Je = t.Math,
                                Ge = t.Object,
                                qe = t.RegExp,
                                $e = t.String,
                                Ke = t.TypeError,
                                Ze = a.prototype,
                                Qe = Ge.prototype,
                                Xe = t["__core-js_shared__"],
                                et = Ue.prototype.toString,
                                tt = Qe.hasOwnProperty,
                                nt = 0,
                                at = (n = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                                rt = Qe.toString,
                                lt = et.call(Ge),
                                it = Lt._,
                                ut = qe("^" + et.call(tt).replace(ke, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ct = Dt ? t.Buffer : r,
                                gt = t.Symbol,
                                Mt = t.Uint8Array,
                                vt = ct ? ct.allocUnsafe : r,
                                kt = fn(Ge.getPrototypeOf, Ge),
                                Yt = Ge.create,
                                wt = Qe.propertyIsEnumerable,
                                xt = Ze.splice,
                                Jt = gt ? gt.isConcatSpreadable : r,
                                en = gt ? gt.iterator : r,
                                kn = gt ? gt.toStringTag : r,
                                Yn = function() { try { var e = Ll(Ge, "defineProperty"); return e({}, "", {}), e } catch (t) {} }(),
                                Dn = t.clearTimeout !== Lt.clearTimeout && t.clearTimeout,
                                wn = Be && Be.now !== Lt.Date.now && Be.now,
                                xn = t.setTimeout !== Lt.setTimeout && t.setTimeout,
                                Tn = Je.ceil,
                                Sn = Je.floor,
                                Hn = Ge.getOwnPropertySymbols,
                                jn = ct ? ct.isBuffer : r,
                                Cn = t.isFinite,
                                On = Ze.join,
                                Pn = fn(Ge.keys, Ge),
                                An = Je.max,
                                En = Je.min,
                                Wn = Be.now,
                                Fn = t.parseInt,
                                In = Je.random,
                                Rn = Ze.reverse,
                                zn = Ll(t, "DataView"),
                                Nn = Ll(t, "Map"),
                                Bn = Ll(t, "Promise"),
                                Vn = Ll(t, "Set"),
                                Un = Ll(t, "WeakMap"),
                                Jn = Ll(Ge, "create"),
                                Gn = Un && new Un,
                                qn = {},
                                $n = ql(zn),
                                Kn = ql(Nn),
                                Zn = ql(Bn),
                                Qn = ql(Vn),
                                Xn = ql(Un),
                                ea = gt ? gt.prototype : r,
                                ta = ea ? ea.valueOf : r,
                                na = ea ? ea.toString : r;

                            function aa(e) { if (ho(e) && !eo(e) && !(e instanceof oa)) { if (e instanceof ia) return e; if (tt.call(e, "__wrapped__")) return $l(e) } return new ia(e) } var ra = function() {
                                function e() {} return function(t) { if (!co(t)) return {}; if (Yt) return Yt(t);
                                    e.prototype = t; var n = new e; return e.prototype = r, n } }();

                            function la() {}

                            function ia(e, t) { this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r }

                            function oa(e) { this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = S, this.__views__ = [] }

                            function sa(e) { var t = -1,
                                    n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                    this.set(a[0], a[1]) } }

                            function ua(e) { var t = -1,
                                    n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                    this.set(a[0], a[1]) } }

                            function da(e) { var t = -1,
                                    n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                    this.set(a[0], a[1]) } }

                            function ca(e) { var t = -1,
                                    n = null == e ? 0 : e.length; for (this.__data__ = new da; ++t < n;) this.add(e[t]) }

                            function ha(e) { var t = this.__data__ = new ua(e);
                                this.size = t.size }

                            function _a(e, t) { var n = eo(e),
                                    a = !n && Xi(e),
                                    r = !n && !a && ro(e),
                                    l = !n && !a && !r && Mo(e),
                                    i = n || a || r || l,
                                    o = i ? an(e.length, $e) : [],
                                    s = o.length; for (var u in e) !t && !tt.call(e, u) || i && ("length" == u || r && ("offset" == u || "parent" == u) || l && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Sl(u, s)) || o.push(u); return o }

                            function ma(e) { var t = e.length; return t ? e[sr(0, t - 1)] : r }

                            function fa(e, t, n) {
                                (n === r || Ki(e[t], n)) && (n !== r || t in e) || Ma(e, t, n) }

                            function pa(e, t, n) { var a = e[t];
                                tt.call(e, t) && Ki(a, n) && (n !== r || t in e) || Ma(e, t, n) }

                            function ga(e, t) { for (var n = e.length; n--;)
                                    if (Ki(e[n][0], t)) return n;
                                return -1 }

                            function ba(e, t, n, a) { return xa(e, function(e, r, l) { t(a, e, n(e), l) }), a }

                            function ya(e, t) { return e && zr(t, No(t), e) }

                            function Ma(e, t, n) { "__proto__" == t && Yn ? Yn(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n }

                            function va(e, t) { for (var n = -1, l = t.length, i = a(l), o = null == e; ++n < l;) i[n] = o ? r : Wo(e, t[n]); return i }

                            function La(e, t, n) { return e == e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e }

                            function ka(e, t, n, a, l, i) { var o, c = t & s,
                                    h = t & u,
                                    _ = t & d; if (n && (o = l ? n(e, a, l, i) : n(e)), o !== r) return o; if (!co(e)) return e; var m = eo(e); if (m) { if (o = function(e) { var t = e.length,
                                                n = new e.constructor(t); return t && "string" == typeof e[0] && tt.call(e, "index") && (n.index = e.index, n.input = e.input), n }(e), !c) return Rr(e, o) } else { var f = Dl(e),
                                        p = f == R || f == z; if (ro(e)) return Pr(e, c); if (f == U || f == O || p && !l) { if (o = h || p ? {} : xl(e), !c) return h ? function(e, t) { return zr(e, Yl(e), t) }(e, function(t, n) { return t && zr(e, Bo(e), t) }(o)) : function(e, t) { return zr(e, kl(e), t) }(e, ya(o, e)) } else { if (!pt[f]) return l ? e : {};
                                        o = function(e, t, n) { var a, r, l = e.constructor; switch (t) {
                                                case X:
                                                    return Ar(e);
                                                case E:
                                                case W:
                                                    return new l(+e);
                                                case ee:
                                                    return function(e, t) { var n = t ? Ar(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.byteLength) }(e, n);
                                                case te:
                                                case ne:
                                                case ae:
                                                case re:
                                                case le:
                                                case ie:
                                                case oe:
                                                case se:
                                                case ue:
                                                    return Er(e, n);
                                                case N:
                                                    return new l;
                                                case B:
                                                case $:
                                                    return new l(e);
                                                case G:
                                                    return (r = new(a = e).constructor(a.source, Pe.exec(a))).lastIndex = a.lastIndex, r;
                                                case q:
                                                    return new l;
                                                case K:
                                                    return ta ? Ge(ta.call(e)) : {} } }(e, f, c) } }
                                i || (i = new ha); var g = i.get(e); if (g) return g; if (i.set(e, o), go(e)) return e.forEach(function(a) { o.add(ka(a, t, n, a, e, i)) }), o; if (_o(e)) return e.forEach(function(a, r) { o.set(r, ka(a, t, n, r, e, i)) }), o; var b = m ? r : (_ ? h ? fl : ml : h ? Bo : No)(e); return Et(b || e, function(a, r) { b && (a = e[r = a]), pa(o, r, ka(a, t, n, r, e, i)) }), o }

                            function Ya(e, t, n) { var a = n.length; if (null == e) return !a; for (e = Ge(e); a--;) { var l = n[a],
                                        i = e[l]; if (i === r && !(l in e) || !(0, t[l])(i)) return !1 } return !0 }

                            function Da(e, t, n) { if ("function" != typeof e) throw new Ke(i); return zl(function() { e.apply(r, n) }, t) }

                            function wa(e, t, n, a) { var r = -1,
                                    i = It,
                                    o = !0,
                                    s = e.length,
                                    u = [],
                                    d = t.length; if (!s) return u;
                                n && (t = zt(t, rn(n))), a ? (i = Rt, o = !1) : t.length >= l && (i = on, o = !1, t = new ca(t));
                                e: for (; ++r < s;) { var c = e[r],
                                        h = null == n ? c : n(c); if (c = a || 0 !== c ? c : 0, o && h == h) { for (var _ = d; _--;)
                                            if (t[_] === h) continue e;
                                        u.push(c) } else i(t, h, a) || u.push(c) }
                                return u }
                            aa.templateSettings = { escape: ge, evaluate: be, interpolate: ye, variable: "", imports: { _: aa } }, (aa.prototype = la.prototype).constructor = aa, (ia.prototype = ra(la.prototype)).constructor = ia, (oa.prototype = ra(la.prototype)).constructor = oa, sa.prototype.clear = function() { this.__data__ = Jn ? Jn(null) : {}, this.size = 0 }, sa.prototype.delete = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t }, sa.prototype.get = function(e) { var t = this.__data__; if (Jn) { var n = t[e]; return "__lodash_hash_undefined__" === n ? r : n } return tt.call(t, e) ? t[e] : r }, sa.prototype.has = function(e) { var t = this.__data__; return Jn ? t[e] !== r : tt.call(t, e) }, sa.prototype.set = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = Jn && t === r ? "__lodash_hash_undefined__" : t, this }, ua.prototype.clear = function() { this.__data__ = [], this.size = 0 }, ua.prototype.delete = function(e) { var t = this.__data__,
                                    n = ga(t, e); return !(n < 0 || (n == t.length - 1 ? t.pop() : xt.call(t, n, 1), --this.size, 0)) }, ua.prototype.get = function(e) { var t = this.__data__,
                                    n = ga(t, e); return n < 0 ? r : t[n][1] }, ua.prototype.has = function(e) { return ga(this.__data__, e) > -1 }, ua.prototype.set = function(e, t) { var n = this.__data__,
                                    a = ga(n, e); return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this }, da.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new sa, map: new(Nn || ua), string: new sa } }, da.prototype.delete = function(e) { var t = Ml(this, e).delete(e); return this.size -= t ? 1 : 0, t }, da.prototype.get = function(e) { return Ml(this, e).get(e) }, da.prototype.has = function(e) { return Ml(this, e).has(e) }, da.prototype.set = function(e, t) { var n = Ml(this, e),
                                    a = n.size; return n.set(e, t), this.size += n.size == a ? 0 : 1, this }, ca.prototype.add = ca.prototype.push = function(e) { return this.__data__.set(e, "__lodash_hash_undefined__"), this }, ca.prototype.has = function(e) { return this.__data__.has(e) }, ha.prototype.clear = function() { this.__data__ = new ua, this.size = 0 }, ha.prototype.delete = function(e) { var t = this.__data__,
                                    n = t.delete(e); return this.size = t.size, n }, ha.prototype.get = function(e) { return this.__data__.get(e) }, ha.prototype.has = function(e) { return this.__data__.has(e) }, ha.prototype.set = function(e, t) { var n = this.__data__; if (n instanceof ua) { var a = n.__data__; if (!Nn || a.length < l - 1) return a.push([e, t]), this.size = ++n.size, this;
                                    n = this.__data__ = new da(a) } return n.set(e, t), this.size = n.size, this }; var xa = Vr(Aa),
                                Ta = Vr(Ea, !0);

                            function Sa(e, t) { var n = !0; return xa(e, function(e, a, r) { return n = !!t(e, a, r) }), n }

                            function Ha(e, t, n) { for (var a = -1, l = e.length; ++a < l;) { var i = e[a],
                                        o = t(i); if (null != o && (s === r ? o == o && !yo(o) : n(o, s))) var s = o,
                                        u = i } return u }

                            function ja(e, t) { var n = []; return xa(e, function(e, a, r) { t(e, a, r) && n.push(e) }), n }

                            function Ca(e, t, n, a, r) { var l = -1,
                                    i = e.length; for (n || (n = Tl), r || (r = []); ++l < i;) { var o = e[l];
                                    t > 0 && n(o) ? t > 1 ? Ca(o, t - 1, n, a, r) : Nt(r, o) : a || (r[r.length] = o) } return r } var Oa = Ur(),
                                Pa = Ur(!0);

                            function Aa(e, t) { return e && Oa(e, t, No) }

                            function Ea(e, t) { return e && Pa(e, t, No) }

                            function Wa(e, t) { return Ft(t, function(t) { return oo(e[t]) }) }

                            function Fa(e, t) { for (var n = 0, a = (t = Hr(t, e)).length; null != e && n < a;) e = e[Gl(t[n++])]; return n && n == a ? e : r }

                            function Ia(e, t, n) { var a = t(e); return eo(e) ? a : Nt(a, n(e)) }

                            function Ra(e) { return null == e ? e === r ? Z : V : kn && kn in Ge(e) ? function(e) { var t = tt.call(e, kn),
                                        n = e[kn]; try { e[kn] = r; var a = !0 } catch (i) {} var l = rt.call(e); return a && (t ? e[kn] = n : delete e[kn]), l }(e) : function(e) { return rt.call(e) }(e) }

                            function za(e, t) { return e > t }

                            function Na(e, t) { return null != e && tt.call(e, t) }

                            function Ba(e, t) { return null != e && t in Ge(e) }

                            function Va(e, t, n) { for (var l = n ? Rt : It, i = e[0].length, o = e.length, s = o, u = a(o), d = 1 / 0, c = []; s--;) { var h = e[s];
                                    s && t && (h = zt(h, rn(t))), d = En(h.length, d), u[s] = !n && (t || i >= 120 && h.length >= 120) ? new ca(s && h) : r }
                                h = e[0]; var _ = -1,
                                    m = u[0];
                                e: for (; ++_ < i && c.length < d;) { var f = h[_],
                                        p = t ? t(f) : f; if (f = n || 0 !== f ? f : 0, !(m ? on(m, p) : l(c, p, n))) { for (s = o; --s;) { var g = u[s]; if (!(g ? on(g, p) : l(e[s], p, n))) continue e }
                                        m && m.push(p), c.push(f) } }
                                return c }

                            function Ua(e, t, n) { var a = null == (e = Fl(e, t = Hr(t, e))) ? e : e[Gl(ii(t))]; return null == a ? r : Pt(a, e, n) }

                            function Ja(e) { return ho(e) && Ra(e) == O }

                            function Ga(e, t, n, a, l) { return e === t || (null == e || null == t || !ho(e) && !ho(t) ? e != e && t != t : function(e, t, n, a, l, i) { var o = eo(e),
                                        s = eo(t),
                                        u = o ? P : Dl(e),
                                        d = s ? P : Dl(t),
                                        _ = (u = u == O ? U : u) == U,
                                        m = (d = d == O ? U : d) == U,
                                        f = u == d; if (f && ro(e)) { if (!ro(t)) return !1;
                                        o = !0, _ = !1 } if (f && !_) return i || (i = new ha), o || Mo(e) ? hl(e, t, n, a, l, i) : function(e, t, n, a, r, l, i) { switch (u) {
                                            case ee:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                e = e.buffer, t = t.buffer;
                                            case X:
                                                return !(e.byteLength != t.byteLength || !l(new Mt(e), new Mt(t)));
                                            case E:
                                            case W:
                                            case B:
                                                return Ki(+e, +t);
                                            case I:
                                                return e.name == t.name && e.message == t.message;
                                            case G:
                                            case $:
                                                return e == t + "";
                                            case N:
                                                var o = mn;
                                            case q:
                                                if (o || (o = gn), e.size != t.size && !(a & c)) return !1; var s = i.get(e); if (s) return s == t;
                                                a |= h, i.set(e, t); var d = hl(o(e), o(t), a, r, l, i); return i.delete(e), d;
                                            case K:
                                                if (ta) return ta.call(e) == ta.call(t) } return !1 }(e, t, 0, n, a, l, i); if (!(n & c)) { var p = _ && tt.call(e, "__wrapped__"),
                                            g = m && tt.call(t, "__wrapped__"); if (p || g) { var b = p ? e.value() : e,
                                                y = g ? t.value() : t; return i || (i = new ha), l(b, y, n, a, i) } } return !!f && (i || (i = new ha), function(e, t, n, a, l, i) { var o = n & c,
                                            s = ml(e),
                                            u = s.length; if (u != ml(t).length && !o) return !1; for (var d = u; d--;) { var h = s[d]; if (!(o ? h in t : tt.call(t, h))) return !1 } var _ = i.get(e); if (_ && i.get(t)) return _ == t; var m = !0;
                                        i.set(e, t), i.set(t, e); for (var f = o; ++d < u;) { var p = e[h = s[d]],
                                                g = t[h]; if (a) var b = o ? a(g, p, h, t, e, i) : a(p, g, h, e, t, i); if (!(b === r ? p === g || l(p, g, n, a, i) : b)) { m = !1; break }
                                            f || (f = "constructor" == h) } if (m && !f) { var y = e.constructor,
                                                M = t.constructor;
                                            y != M && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof M && M instanceof M) && (m = !1) } return i.delete(e), i.delete(t), m }(e, t, n, a, l, i)) }(e, t, n, a, Ga, l)) }

                            function qa(e, t, n, a) { var l = n.length,
                                    i = l,
                                    o = !a; if (null == e) return !i; for (e = Ge(e); l--;) { var s = n[l]; if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1 } for (; ++l < i;) { var u = (s = n[l])[0],
                                        d = e[u],
                                        _ = s[1]; if (o && s[2]) { if (d === r && !(u in e)) return !1 } else { var m = new ha; if (a) var f = a(d, _, u, e, t, m); if (!(f === r ? Ga(_, d, c | h, a, m) : f)) return !1 } } return !0 }

                            function $a(e) { return !(!co(e) || (t = e, at && at in t)) && (oo(e) ? ut : We).test(ql(e)); var t }

                            function Ka(e) { return "function" == typeof e ? e : null == e ? ms : "object" == typeof e ? eo(e) ? tr(e[0], e[1]) : er(e) : ks(e) }

                            function Za(e) { if (!Pl(e)) return Pn(e); var t = []; for (var n in Ge(e)) tt.call(e, n) && "constructor" != n && t.push(n); return t }

                            function Qa(e, t) { return e < t }

                            function Xa(e, t) { var n = -1,
                                    r = no(e) ? a(e.length) : []; return xa(e, function(e, a, l) { r[++n] = t(e, a, l) }), r }

                            function er(e) { var t = vl(e); return 1 == t.length && t[0][2] ? El(t[0][0], t[0][1]) : function(n) { return n === e || qa(n, e, t) } }

                            function tr(e, t) { return jl(e) && Al(t) ? El(Gl(e), t) : function(n) { var a = Wo(n, e); return a === r && a === t ? Fo(n, e) : Ga(t, a, c | h) } }

                            function nr(e, t, n, a, l) { e !== t && Oa(t, function(i, o) { if (co(i)) l || (l = new ha),
                                        function(e, t, n, a, l, i, o) { var s = Il(e, n),
                                                u = Il(t, n),
                                                d = o.get(u); if (d) fa(e, n, d);
                                            else { var c = i ? i(s, u, n + "", e, t, o) : r,
                                                    h = c === r; if (h) { var _ = eo(u),
                                                        m = !_ && ro(u),
                                                        f = !_ && !m && Mo(u);
                                                    c = u, _ || m || f ? eo(s) ? c = s : ao(s) ? c = Rr(s) : m ? (h = !1, c = Pr(u, !0)) : f ? (h = !1, c = Er(u, !0)) : c = [] : fo(u) || Xi(u) ? (c = s, Xi(s) ? c = To(s) : co(s) && !oo(s) || (c = xl(u))) : h = !1 }
                                                h && (o.set(u, c), l(c, u, a, i, o), o.delete(u)), fa(e, n, c) } }(e, t, o, n, nr, a, l);
                                    else { var s = a ? a(Il(e, o), i, o + "", e, t, l) : r;
                                        s === r && (s = i), fa(e, o, s) } }, Bo) }

                            function ar(e, t) { var n = e.length; if (n) return Sl(t += t < 0 ? n : 0, n) ? e[t] : r }

                            function rr(e, t, n) { var a = -1; return t = zt(t.length ? t : [ms], rn(yl())),
                                    function(e, t) { var a = e.length; for (e.sort(function(e, t) { return function(e, t, n) { for (var a = -1, r = e.criteria, l = t.criteria, i = r.length, o = n.length; ++a < i;) { var s = Wr(r[a], l[a]); if (s) return a >= o ? s : s * ("desc" == n[a] ? -1 : 1) } return e.index - t.index }(e, t, n) }); a--;) e[a] = e[a].value; return e }(Xa(e, function(e, n, r) { return { criteria: zt(t, function(t) { return t(e) }), index: ++a, value: e } })) }

                            function lr(e, t, n) { for (var a = -1, r = t.length, l = {}; ++a < r;) { var i = t[a],
                                        o = Fa(e, i);
                                    n(o, i) && cr(l, Hr(i, e), o) } return l }

                            function ir(e, t, n, a) { var r = a ? Kt : $t,
                                    l = -1,
                                    i = t.length,
                                    o = e; for (e === t && (t = Rr(t)), n && (o = zt(e, rn(n))); ++l < i;)
                                    for (var s = 0, u = t[l], d = n ? n(u) : u;
                                        (s = r(o, d, s, a)) > -1;) o !== e && xt.call(o, s, 1), xt.call(e, s, 1); return e }

                            function or(e, t) { for (var n = e ? t.length : 0, a = n - 1; n--;) { var r = t[n]; if (n == a || r !== l) { var l = r;
                                        Sl(r) ? xt.call(e, r, 1) : Lr(e, r) } } return e }

                            function sr(e, t) { return e + Sn(In() * (t - e + 1)) }

                            function ur(e, t) { var n = ""; if (!e || t < 1 || t > w) return n;
                                do { t % 2 && (n += e), (t = Sn(t / 2)) && (e += e) } while (t); return n }

                            function dr(e, t) { return Nl(Wl(e, t, ms), e + "") }

                            function cr(e, t, n, a) { if (!co(e)) return e; for (var l = -1, i = (t = Hr(t, e)).length, o = i - 1, s = e; null != s && ++l < i;) { var u = Gl(t[l]),
                                        d = n; if (l != o) { var c = s[u];
                                        (d = a ? a(c, u, s) : r) === r && (d = co(c) ? c : Sl(t[l + 1]) ? [] : {}) }
                                    pa(s, u, d), s = s[u] } return e } var hr = Gn ? function(e, t) { return Gn.set(e, t), e } : ms,
                                _r = Yn ? function(e, t) { return Yn(e, "toString", { configurable: !0, enumerable: !1, value: cs(t), writable: !0 }) } : ms;

                            function mr(e, t, n) { var r = -1,
                                    l = e.length;
                                t < 0 && (t = -t > l ? 0 : l + t), (n = n > l ? l : n) < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0; for (var i = a(l); ++r < l;) i[r] = e[r + t]; return i }

                            function fr(e, t) { var n; return xa(e, function(e, a, r) { return !(n = t(e, a, r)) }), !!n }

                            function pr(e, t, n) { var a = 0,
                                    r = null == e ? a : e.length; if ("number" == typeof t && t == t && r <= j) { for (; a < r;) { var l = a + r >>> 1,
                                            i = e[l];
                                        null !== i && !yo(i) && (n ? i <= t : i < t) ? a = l + 1 : r = l } return r } return gr(e, t, ms, n) }

                            function gr(e, t, n, a) { t = n(t); for (var l = 0, i = null == e ? 0 : e.length, o = t != t, s = null === t, u = yo(t), d = t === r; l < i;) { var c = Sn((l + i) / 2),
                                        h = n(e[c]),
                                        _ = h !== r,
                                        m = null === h,
                                        f = h == h,
                                        p = yo(h); if (o) var g = a || f;
                                    else g = d ? f && (a || _) : s ? f && _ && (a || !m) : u ? f && _ && !m && (a || !p) : !m && !p && (a ? h <= t : h < t);
                                    g ? l = c + 1 : i = c } return En(i, H) }

                            function br(e, t) { for (var n = -1, a = e.length, r = 0, l = []; ++n < a;) { var i = e[n],
                                        o = t ? t(i) : i; if (!n || !Ki(o, s)) { var s = o;
                                        l[r++] = 0 === i ? 0 : i } } return l }

                            function yr(e) { return "number" == typeof e ? e : yo(e) ? T : +e }

                            function Mr(e) { if ("string" == typeof e) return e; if (eo(e)) return zt(e, Mr) + ""; if (yo(e)) return na ? na.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -D ? "-0" : t }

                            function vr(e, t, n) { var a = -1,
                                    r = It,
                                    i = e.length,
                                    o = !0,
                                    s = [],
                                    u = s; if (n) o = !1, r = Rt;
                                else if (i >= l) { var d = t ? null : il(e); if (d) return gn(d);
                                    o = !1, r = on, u = new ca } else u = t ? [] : s;
                                e: for (; ++a < i;) { var c = e[a],
                                        h = t ? t(c) : c; if (c = n || 0 !== c ? c : 0, o && h == h) { for (var _ = u.length; _--;)
                                            if (u[_] === h) continue e;
                                        t && u.push(h), s.push(c) } else r(u, h, n) || (u !== s && u.push(h), s.push(c)) }
                                return s }

                            function Lr(e, t) { return null == (e = Fl(e, t = Hr(t, e))) || delete e[Gl(ii(t))] }

                            function kr(e, t, n, a) { return cr(e, t, n(Fa(e, t)), a) }

                            function Yr(e, t, n, a) { for (var r = e.length, l = a ? r : -1;
                                    (a ? l-- : ++l < r) && t(e[l], l, e);); return n ? mr(e, a ? 0 : l, a ? l + 1 : r) : mr(e, a ? l + 1 : 0, a ? r : l) }

                            function Dr(e, t) { var n = e; return n instanceof oa && (n = n.value()), Bt(t, function(e, t) { return t.func.apply(t.thisArg, Nt([e], t.args)) }, n) }

                            function wr(e, t, n) { var r = e.length; if (r < 2) return r ? vr(e[0]) : []; for (var l = -1, i = a(r); ++l < r;)
                                    for (var o = e[l], s = -1; ++s < r;) s != l && (i[l] = wa(i[l] || o, e[s], t, n)); return vr(Ca(i, 1), t, n) }

                            function xr(e, t, n) { for (var a = -1, l = e.length, i = t.length, o = {}; ++a < l;) n(o, e[a], a < i ? t[a] : r); return o }

                            function Tr(e) { return ao(e) ? e : [] }

                            function Sr(e) { return "function" == typeof e ? e : ms }

                            function Hr(e, t) { return eo(e) ? e : jl(e, t) ? [e] : Jl(So(e)) } var jr = dr;

                            function Cr(e, t, n) { var a = e.length; return n = n === r ? a : n, !t && n >= a ? e : mr(e, t, n) } var Or = Dn || function(e) { return Lt.clearTimeout(e) };

                            function Pr(e, t) { if (t) return e.slice(); var n = e.length,
                                    a = vt ? vt(n) : new e.constructor(n); return e.copy(a), a }

                            function Ar(e) { var t = new e.constructor(e.byteLength); return new Mt(t).set(new Mt(e)), t }

                            function Er(e, t) { var n = t ? Ar(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.length) }

                            function Wr(e, t) { if (e !== t) { var n = e !== r,
                                        a = null === e,
                                        l = e == e,
                                        i = yo(e),
                                        o = t !== r,
                                        s = null === t,
                                        u = t == t,
                                        d = yo(t); if (!s && !d && !i && e > t || i && o && u && !s && !d || a && o && u || !n && u || !l) return 1; if (!a && !i && !d && e < t || d && n && l && !a && !i || s && n && l || !o && l || !u) return -1 } return 0 }

                            function Fr(e, t, n, r) { for (var l = -1, i = e.length, o = n.length, s = -1, u = t.length, d = An(i - o, 0), c = a(u + d), h = !r; ++s < u;) c[s] = t[s]; for (; ++l < o;)(h || l < i) && (c[n[l]] = e[l]); for (; d--;) c[s++] = e[l++]; return c }

                            function Ir(e, t, n, r) { for (var l = -1, i = e.length, o = -1, s = n.length, u = -1, d = t.length, c = An(i - s, 0), h = a(c + d), _ = !r; ++l < c;) h[l] = e[l]; for (var m = l; ++u < d;) h[m + u] = t[u]; for (; ++o < s;)(_ || l < i) && (h[m + n[o]] = e[l++]); return h }

                            function Rr(e, t) { var n = -1,
                                    r = e.length; for (t || (t = a(r)); ++n < r;) t[n] = e[n]; return t }

                            function zr(e, t, n, a) { var l = !n;
                                n || (n = {}); for (var i = -1, o = t.length; ++i < o;) { var s = t[i],
                                        u = a ? a(n[s], e[s], s, n, e) : r;
                                    u === r && (u = e[s]), l ? Ma(n, s, u) : pa(n, s, u) } return n }

                            function Nr(e, t) { return function(n, a) { var r = eo(n) ? At : ba,
                                        l = t ? t() : {}; return r(n, e, yl(a, 2), l) } }

                            function Br(e) { return dr(function(t, n) { var a = -1,
                                        l = n.length,
                                        i = l > 1 ? n[l - 1] : r,
                                        o = l > 2 ? n[2] : r; for (i = e.length > 3 && "function" == typeof i ? (l--, i) : r, o && Hl(n[0], n[1], o) && (i = l < 3 ? r : i, l = 1), t = Ge(t); ++a < l;) { var s = n[a];
                                        s && e(t, s, a, i) } return t }) }

                            function Vr(e, t) { return function(n, a) { if (null == n) return n; if (!no(n)) return e(n, a); for (var r = n.length, l = t ? r : -1, i = Ge(n);
                                        (t ? l-- : ++l < r) && !1 !== a(i[l], l, i);); return n } }

                            function Ur(e) { return function(t, n, a) { for (var r = -1, l = Ge(t), i = a(t), o = i.length; o--;) { var s = i[e ? o : ++r]; if (!1 === n(l[s], s, l)) break } return t } }

                            function Jr(e) { return function(t) { var n = _n(t = So(t)) ? Mn(t) : r,
                                        a = n ? n[0] : t.charAt(0),
                                        l = n ? Cr(n, 1).join("") : t.slice(1); return a[e]() + l } }

                            function Gr(e) { return function(t) { return Bt(ss(es(t).replace(ot, "")), e, "") } }

                            function qr(e) { return function() { var t = arguments; switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]) } var n = ra(e.prototype),
                                        a = e.apply(n, t); return co(a) ? a : n } }

                            function $r(e) { return function(t, n, a) { var l = Ge(t); if (!no(t)) { var i = yl(n, 3);
                                        t = No(t), n = function(e) { return i(l[e], e, l) } } var o = e(t, n, a); return o > -1 ? l[i ? t[o] : o] : r } }

                            function Kr(e) { return _l(function(t) { var n = t.length,
                                        a = n,
                                        l = ia.prototype.thru; for (e && t.reverse(); a--;) { var o = t[a]; if ("function" != typeof o) throw new Ke(i); if (l && !s && "wrapper" == gl(o)) var s = new ia([], !0) } for (a = s ? a : n; ++a < n;) { var u = gl(o = t[a]),
                                            d = "wrapper" == u ? pl(o) : r;
                                        s = d && Cl(d[0]) && d[1] == (M | p | b | v) && !d[4].length && 1 == d[9] ? s[gl(d[0])].apply(s, d[3]) : 1 == o.length && Cl(o) ? s[u]() : s.thru(o) } return function() { var e = arguments,
                                            a = e[0]; if (s && 1 == e.length && eo(a)) return s.plant(a).value(); for (var r = 0, l = n ? t[r].apply(this, e) : a; ++r < n;) l = t[r].call(this, l); return l } }) }

                            function Zr(e, t, n, l, i, o, s, u, d, c) { var h = t & M,
                                    f = t & _,
                                    b = t & m,
                                    y = t & (p | g),
                                    v = t & L,
                                    k = b ? r : qr(e); return function _() { for (var m = arguments.length, p = a(m), g = m; g--;) p[g] = arguments[g]; if (y) var M = bl(_),
                                        L = function(e, t) { for (var n = e.length, a = 0; n--;) e[n] === t && ++a; return a }(p, M); if (l && (p = Fr(p, l, i, y)), o && (p = Ir(p, o, s, y)), m -= L, y && m < c) { var Y = pn(p, M); return rl(e, t, Zr, _.placeholder, n, p, Y, u, d, c - m) } var D = f ? n : this,
                                        w = b ? D[e] : e; return m = p.length, u ? p = function(e, t) { for (var n = e.length, a = En(t.length, n), l = Rr(e); a--;) { var i = t[a];
                                            e[a] = Sl(i, n) ? l[i] : r } return e }(p, u) : v && m > 1 && p.reverse(), h && d < m && (p.length = d), this && this !== Lt && this instanceof _ && (w = k || qr(w)), w.apply(D, p) } }

                            function Qr(e, t) { return function(n, a) { return function(e, t, n, a) { return Aa(e, function(e, r, l) { t(a, n(e), r, l) }), a }(n, e, t(a), {}) } }

                            function Xr(e, t) { return function(n, a) { var l; if (n === r && a === r) return t; if (n !== r && (l = n), a !== r) { if (l === r) return a; "string" == typeof n || "string" == typeof a ? (n = Mr(n), a = Mr(a)) : (n = yr(n), a = yr(a)), l = e(n, a) } return l } }

                            function el(e) { return _l(function(t) { return t = zt(t, rn(yl())), dr(function(n) { var a = this; return e(t, function(e) { return Pt(e, a, n) }) }) }) }

                            function tl(e, t) { var n = (t = t === r ? " " : Mr(t)).length; if (n < 2) return n ? ur(t, e) : t; var a = ur(t, Tn(e / yn(t))); return _n(t) ? Cr(Mn(a), 0, e).join("") : a.slice(0, e) }

                            function nl(e) { return function(t, n, l) { return l && "number" != typeof l && Hl(t, n, l) && (n = l = r), t = Yo(t), n === r ? (n = t, t = 0) : n = Yo(n),
                                        function(e, t, n, r) { for (var l = -1, i = An(Tn((t - e) / (n || 1)), 0), o = a(i); i--;) o[r ? i : ++l] = e, e += n; return o }(t, n, l = l === r ? t < n ? 1 : -1 : Yo(l), e) } }

                            function al(e) { return function(t, n) { return "string" == typeof t && "string" == typeof n || (t = xo(t), n = xo(n)), e(t, n) } }

                            function rl(e, t, n, a, l, i, o, s, u, d) { var c = t & p;
                                t |= c ? b : y, (t &= ~(c ? y : b)) & f || (t &= ~(_ | m)); var h = [e, t, l, c ? i : r, c ? o : r, c ? r : i, c ? r : o, s, u, d],
                                    g = n.apply(r, h); return Cl(e) && Rl(g, h), g.placeholder = a, Bl(g, e, t) }

                            function ll(e) { var t = Je[e]; return function(e, n) { if (e = xo(e), n = null == n ? 0 : En(Do(n), 292)) { var a = (So(e) + "e").split("e"); return +((a = (So(t(a[0] + "e" + (+a[1] + n))) + "e").split("e"))[0] + "e" + (+a[1] - n)) } return t(e) } } var il = Vn && 1 / gn(new Vn([, -0]))[1] == D ? function(e) { return new Vn(e) } : ys;

                            function ol(e) { return function(t) { var n = Dl(t); return n == N ? mn(t) : n == q ? bn(t) : function(e, t) { return zt(t, function(t) { return [t, e[t]] }) }(t, e(t)) } }

                            function sl(e, t, n, l, s, u, d, c) { var h = t & m; if (!h && "function" != typeof e) throw new Ke(i); var L = l ? l.length : 0; if (L || (t &= ~(b | y), l = s = r), d = d === r ? d : An(Do(d), 0), c = c === r ? c : Do(c), L -= s ? s.length : 0, t & y) { var k = l,
                                        Y = s;
                                    l = s = r } var D = h ? r : pl(e),
                                    w = [e, t, n, l, s, k, Y, u, d, c]; if (D && function(e, t) { var n = e[1],
                                            a = t[1],
                                            r = n | a; if (!(r < (_ | m | M) || a == M && n == p || a == M && n == v && e[7].length <= t[8] || a == (M | v) && t[7].length <= t[8] && n == p)) return e;
                                        a & _ && (e[2] = t[2], r |= n & _ ? 0 : f); var l = t[3]; if (l) { var i = e[3];
                                            e[3] = i ? Fr(i, l, t[4]) : l, e[4] = i ? pn(e[3], o) : t[4] }(l = t[5]) && (e[5] = (i = e[5]) ? Ir(i, l, t[6]) : l, e[6] = i ? pn(e[5], o) : t[6]), (l = t[7]) && (e[7] = l), a & M && (e[8] = null == e[8] ? t[8] : En(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r }(w, D), e = w[0], t = w[1], n = w[2], l = w[3], s = w[4], !(c = w[9] = w[9] === r ? h ? 0 : e.length : An(w[9] - L, 0)) && t & (p | g) && (t &= ~(p | g)), t && t != _) x = t == p || t == g ? function(e, t, n) { var l = qr(e); return function i() { for (var o = arguments.length, s = a(o), u = o, d = bl(i); u--;) s[u] = arguments[u]; var c = o < 3 && s[0] !== d && s[o - 1] !== d ? [] : pn(s, d); return (o -= c.length) < n ? rl(e, t, Zr, i.placeholder, r, s, c, r, r, n - o) : Pt(this && this !== Lt && this instanceof i ? l : e, this, s) } }(e, t, c) : t != b && t != (_ | b) || s.length ? Zr.apply(r, w) : function(e, t, n, r) { var l = t & _,
                                        i = qr(e); return function t() { for (var o = -1, s = arguments.length, u = -1, d = r.length, c = a(d + s), h = this && this !== Lt && this instanceof t ? i : e; ++u < d;) c[u] = r[u]; for (; s--;) c[u++] = arguments[++o]; return Pt(h, l ? n : this, c) } }(e, t, n, l);
                                else var x = function(e, t, n) { var a = t & _,
                                        r = qr(e); return function t() { return (this && this !== Lt && this instanceof t ? r : e).apply(a ? n : this, arguments) } }(e, t, n); return Bl((D ? hr : Rl)(x, w), e, t) }

                            function ul(e, t, n, a) { return e === r || Ki(e, Qe[n]) && !tt.call(a, n) ? t : e }

                            function dl(e, t, n, a, l, i) { return co(e) && co(t) && (i.set(t, e), nr(e, t, r, dl, i), i.delete(t)), e }

                            function cl(e) { return fo(e) ? r : e }

                            function hl(e, t, n, a, l, i) { var o = n & c,
                                    s = e.length,
                                    u = t.length; if (s != u && !(o && u > s)) return !1; var d = i.get(e); if (d && i.get(t)) return d == t; var _ = -1,
                                    m = !0,
                                    f = n & h ? new ca : r; for (i.set(e, t), i.set(t, e); ++_ < s;) { var p = e[_],
                                        g = t[_]; if (a) var b = o ? a(g, p, _, t, e, i) : a(p, g, _, e, t, i); if (b !== r) { if (b) continue;
                                        m = !1; break } if (f) { if (!Ut(t, function(e, t) { if (!on(f, t) && (p === e || l(p, e, n, a, i))) return f.push(t) })) { m = !1; break } } else if (p !== g && !l(p, g, n, a, i)) { m = !1; break } } return i.delete(e), i.delete(t), m }

                            function _l(e) { return Nl(Wl(e, r, ti), e + "") }

                            function ml(e) { return Ia(e, No, kl) }

                            function fl(e) { return Ia(e, Bo, Yl) } var pl = Gn ? function(e) { return Gn.get(e) } : ys;

                            function gl(e) { for (var t = e.name + "", n = qn[t], a = tt.call(qn, t) ? n.length : 0; a--;) { var r = n[a],
                                        l = r.func; if (null == l || l == e) return r.name } return t }

                            function bl(e) { return (tt.call(aa, "placeholder") ? aa : e).placeholder }

                            function yl() { var e = aa.iteratee || fs; return e = e === fs ? Ka : e, arguments.length ? e(arguments[0], arguments[1]) : e }

                            function Ml(e, t) { var n, a, r = e.__data__; return ("string" == (a = typeof(n = t)) || "number" == a || "symbol" == a || "boolean" == a ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map }

                            function vl(e) { for (var t = No(e), n = t.length; n--;) { var a = t[n],
                                        r = e[a];
                                    t[n] = [a, r, Al(r)] } return t }

                            function Ll(e, t) { var n = function(e, t) { return null == e ? r : e[t] }(e, t); return $a(n) ? n : r } var kl = Hn ? function(e) { return null == e ? [] : (e = Ge(e), Ft(Hn(e), function(t) { return wt.call(e, t) })) } : ws,
                                Yl = Hn ? function(e) { for (var t = []; e;) Nt(t, kl(e)), e = kt(e); return t } : ws,
                                Dl = Ra;

                            function wl(e, t, n) { for (var a = -1, r = (t = Hr(t, e)).length, l = !1; ++a < r;) { var i = Gl(t[a]); if (!(l = null != e && n(e, i))) break;
                                    e = e[i] } return l || ++a != r ? l : !!(r = null == e ? 0 : e.length) && uo(r) && Sl(i, r) && (eo(e) || Xi(e)) }

                            function xl(e) { return "function" != typeof e.constructor || Pl(e) ? {} : ra(kt(e)) }

                            function Tl(e) { return eo(e) || Xi(e) || !!(Jt && e && e[Jt]) }

                            function Sl(e, t) { var n = typeof e; return !!(t = null == t ? w : t) && ("number" == n || "symbol" != n && Ie.test(e)) && e > -1 && e % 1 == 0 && e < t }

                            function Hl(e, t, n) { if (!co(n)) return !1; var a = typeof t; return !!("number" == a ? no(n) && Sl(t, n.length) : "string" == a && t in n) && Ki(n[t], e) }

                            function jl(e, t) { if (eo(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !yo(e)) || ve.test(e) || !Me.test(e) || null != t && e in Ge(t) }

                            function Cl(e) { var t = gl(e),
                                    n = aa[t]; if ("function" != typeof n || !(t in oa.prototype)) return !1; if (e === n) return !0; var a = pl(n); return !!a && e === a[0] }(zn && Dl(new zn(new ArrayBuffer(1))) != ee || Nn && Dl(new Nn) != N || Bn && "[object Promise]" != Dl(Bn.resolve()) || Vn && Dl(new Vn) != q || Un && Dl(new Un) != Q) && (Dl = function(e) { var t = Ra(e),
                                    n = t == U ? e.constructor : r,
                                    a = n ? ql(n) : ""; if (a) switch (a) {
                                    case $n:
                                        return ee;
                                    case Kn:
                                        return N;
                                    case Zn:
                                        return "[object Promise]";
                                    case Qn:
                                        return q;
                                    case Xn:
                                        return Q }
                                return t }); var Ol = Xe ? oo : xs;

                            function Pl(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || Qe) }

                            function Al(e) { return e == e && !co(e) }

                            function El(e, t) { return function(n) { return null != n && n[e] === t && (t !== r || e in Ge(n)) } }

                            function Wl(e, t, n) { return t = An(t === r ? e.length - 1 : t, 0),
                                    function() { for (var r = arguments, l = -1, i = An(r.length - t, 0), o = a(i); ++l < i;) o[l] = r[t + l];
                                        l = -1; for (var s = a(t + 1); ++l < t;) s[l] = r[l]; return s[t] = n(o), Pt(e, this, s) } }

                            function Fl(e, t) { return t.length < 2 ? e : Fa(e, mr(t, 0, -1)) }

                            function Il(e, t) { if ("__proto__" != t) return e[t] } var Rl = Vl(hr),
                                zl = xn || function(e, t) { return Lt.setTimeout(e, t) },
                                Nl = Vl(_r);

                            function Bl(e, t, n) { var a = t + ""; return Nl(e, function(e, t) { var n = t.length; if (!n) return e; var a = n - 1; return t[a] = (n > 1 ? "& " : "") + t[a], t = t.join(n > 2 ? ", " : " "), e.replace(Te, "{\n/* [wrapped with " + t + "] */\n") }(a, function(e, t) { return Et(C, function(n) { var a = "_." + n[0];
                                        t & n[1] && !It(e, a) && e.push(a) }), e.sort() }(function(e) { var t = e.match(Se); return t ? t[1].split(He) : [] }(a), n))) }

                            function Vl(e) { var t = 0,
                                    n = 0; return function() { var a = Wn(),
                                        l = Y - (a - n); if (n = a, l > 0) { if (++t >= k) return arguments[0] } else t = 0; return e.apply(r, arguments) } }

                            function Ul(e, t) { var n = -1,
                                    a = e.length,
                                    l = a - 1; for (t = t === r ? a : t; ++n < t;) { var i = sr(n, l),
                                        o = e[i];
                                    e[i] = e[n], e[n] = o } return e.length = t, e } var Jl = function(e) { var t = Vi(function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(Le, function(e, n, a, r) { t.push(a ? r.replace(Ce, "$1") : n || e) }), t }, function(e) { return 500 === n.size && n.clear(), e }),
                                    n = t.cache; return t }();

                            function Gl(e) { if ("string" == typeof e || yo(e)) return e; var t = e + ""; return "0" == t && 1 / e == -D ? "-0" : t }

                            function ql(e) { if (null != e) { try { return et.call(e) } catch (t) {} try { return e + "" } catch (t) {} } return "" }

                            function $l(e) { if (e instanceof oa) return e.clone(); var t = new ia(e.__wrapped__, e.__chain__); return t.__actions__ = Rr(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t } var Kl = dr(function(e, t) { return ao(e) ? wa(e, Ca(t, 1, ao, !0)) : [] }),
                                Zl = dr(function(e, t) { var n = ii(t); return ao(n) && (n = r), ao(e) ? wa(e, Ca(t, 1, ao, !0), yl(n, 2)) : [] }),
                                Ql = dr(function(e, t) { var n = ii(t); return ao(n) && (n = r), ao(e) ? wa(e, Ca(t, 1, ao, !0), r, n) : [] });

                            function Xl(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var r = null == n ? 0 : Do(n); return r < 0 && (r = An(a + r, 0)), qt(e, yl(t, 3), r) }

                            function ei(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var l = a - 1; return n !== r && (l = Do(n), l = n < 0 ? An(a + l, 0) : En(l, a - 1)), qt(e, yl(t, 3), l, !0) }

                            function ti(e) { return null != e && e.length ? Ca(e, 1) : [] }

                            function ni(e) { return e && e.length ? e[0] : r } var ai = dr(function(e) { var t = zt(e, Tr); return t.length && t[0] === e[0] ? Va(t) : [] }),
                                ri = dr(function(e) { var t = ii(e),
                                        n = zt(e, Tr); return t === ii(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? Va(n, yl(t, 2)) : [] }),
                                li = dr(function(e) { var t = ii(e),
                                        n = zt(e, Tr); return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? Va(n, r, t) : [] });

                            function ii(e) { var t = null == e ? 0 : e.length; return t ? e[t - 1] : r } var oi = dr(si);

                            function si(e, t) { return e && e.length && t && t.length ? ir(e, t) : e } var ui = _l(function(e, t) { var n = null == e ? 0 : e.length,
                                    a = va(e, t); return or(e, zt(t, function(e) { return Sl(e, n) ? +e : e }).sort(Wr)), a });

                            function di(e) { return null == e ? e : Rn.call(e) } var ci = dr(function(e) { return vr(Ca(e, 1, ao, !0)) }),
                                hi = dr(function(e) { var t = ii(e); return ao(t) && (t = r), vr(Ca(e, 1, ao, !0), yl(t, 2)) }),
                                _i = dr(function(e) { var t = ii(e); return t = "function" == typeof t ? t : r, vr(Ca(e, 1, ao, !0), r, t) });

                            function mi(e) { if (!e || !e.length) return []; var t = 0; return e = Ft(e, function(e) { if (ao(e)) return t = An(e.length, t), !0 }), an(t, function(t) { return zt(e, Xt(t)) }) }

                            function fi(e, t) { if (!e || !e.length) return []; var n = mi(e); return null == t ? n : zt(n, function(e) { return Pt(t, r, e) }) } var pi = dr(function(e, t) { return ao(e) ? wa(e, t) : [] }),
                                gi = dr(function(e) { return wr(Ft(e, ao)) }),
                                bi = dr(function(e) { var t = ii(e); return ao(t) && (t = r), wr(Ft(e, ao), yl(t, 2)) }),
                                yi = dr(function(e) { var t = ii(e); return t = "function" == typeof t ? t : r, wr(Ft(e, ao), r, t) }),
                                Mi = dr(mi),
                                vi = dr(function(e) { var t = e.length,
                                        n = t > 1 ? e[t - 1] : r; return n = "function" == typeof n ? (e.pop(), n) : r, fi(e, n) });

                            function Li(e) { var t = aa(e); return t.__chain__ = !0, t }

                            function ki(e, t) { return t(e) } var Yi = _l(function(e) { var t = e.length,
                                        n = t ? e[0] : 0,
                                        a = this.__wrapped__,
                                        l = function(t) { return va(t, e) }; return !(t > 1 || this.__actions__.length) && a instanceof oa && Sl(n) ? ((a = a.slice(n, +n + (t ? 1 : 0))).__actions__.push({ func: ki, args: [l], thisArg: r }), new ia(a, this.__chain__).thru(function(e) { return t && !e.length && e.push(r), e })) : this.thru(l) }),
                                Di = Nr(function(e, t, n) { tt.call(e, n) ? ++e[n] : Ma(e, n, 1) }),
                                wi = $r(Xl),
                                xi = $r(ei);

                            function Ti(e, t) { return (eo(e) ? Et : xa)(e, yl(t, 3)) }

                            function Si(e, t) { return (eo(e) ? function(e, t) { for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e);); return e } : Ta)(e, yl(t, 3)) } var Hi = Nr(function(e, t, n) { tt.call(e, n) ? e[n].push(t) : Ma(e, n, [t]) }),
                                ji = dr(function(e, t, n) { var r = -1,
                                        l = "function" == typeof t,
                                        i = no(e) ? a(e.length) : []; return xa(e, function(e) { i[++r] = l ? Pt(t, e, n) : Ua(e, t, n) }), i }),
                                Ci = Nr(function(e, t, n) { Ma(e, n, t) });

                            function Oi(e, t) { return (eo(e) ? zt : Xa)(e, yl(t, 3)) } var Pi = Nr(function(e, t, n) { e[n ? 0 : 1].push(t) }, function() { return [
                                        [],
                                        []
                                    ] }),
                                Ai = dr(function(e, t) { if (null == e) return []; var n = t.length; return n > 1 && Hl(e, t[0], t[1]) ? t = [] : n > 2 && Hl(t[0], t[1], t[2]) && (t = [t[0]]), rr(e, Ca(t, 1), []) }),
                                Ei = wn || function() { return Lt.Date.now() };

                            function Wi(e, t, n) { return t = n ? r : t, sl(e, M, r, r, r, r, t = e && null == t ? e.length : t) }

                            function Fi(e, t) { var n; if ("function" != typeof t) throw new Ke(i); return e = Do(e),
                                    function() { return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n } } var Ii = dr(function(e, t, n) { var a = _; if (n.length) { var r = pn(n, bl(Ii));
                                        a |= b } return sl(e, a, t, n, r) }),
                                Ri = dr(function(e, t, n) { var a = _ | m; if (n.length) { var r = pn(n, bl(Ri));
                                        a |= b } return sl(t, a, e, n, r) });

                            function zi(e, t, n) { var a, l, o, s, u, d, c = 0,
                                    h = !1,
                                    _ = !1,
                                    m = !0; if ("function" != typeof e) throw new Ke(i);

                                function f(t) { var n = a,
                                        i = l; return a = l = r, c = t, s = e.apply(i, n) }

                                function p(e) { var n = e - d; return d === r || n >= t || n < 0 || _ && e - c >= o }

                                function g() { var e = Ei(); if (p(e)) return b(e);
                                    u = zl(g, function(e) { var n = t - (e - d); return _ ? En(n, o - (e - c)) : n }(e)) }

                                function b(e) { return u = r, m && a ? f(e) : (a = l = r, s) }

                                function y() { var e = Ei(),
                                        n = p(e); if (a = arguments, l = this, d = e, n) { if (u === r) return function(e) { return c = e, u = zl(g, t), h ? f(e) : s }(d); if (_) return u = zl(g, t), f(d) } return u === r && (u = zl(g, t)), s } return t = xo(t) || 0, co(n) && (h = !!n.leading, o = (_ = "maxWait" in n) ? An(xo(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m), y.cancel = function() { u !== r && Or(u), c = 0, a = d = l = u = r }, y.flush = function() { return u === r ? s : b(Ei()) }, y } var Ni = dr(function(e, t) { return Da(e, 1, t) }),
                                Bi = dr(function(e, t, n) { return Da(e, xo(t) || 0, n) });

                            function Vi(e, t) { if ("function" != typeof e || null != t && "function" != typeof t) throw new Ke(i); var n = function() { var a = arguments,
                                        r = t ? t.apply(this, a) : a[0],
                                        l = n.cache; if (l.has(r)) return l.get(r); var i = e.apply(this, a); return n.cache = l.set(r, i) || l, i }; return n.cache = new(Vi.Cache || da), n }

                            function Ui(e) { if ("function" != typeof e) throw new Ke(i); return function() { var t = arguments; switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2]) } return !e.apply(this, t) } }
                            Vi.Cache = da; var Ji = jr(function(e, t) { var n = (t = 1 == t.length && eo(t[0]) ? zt(t[0], rn(yl())) : zt(Ca(t, 1), rn(yl()))).length; return dr(function(a) { for (var r = -1, l = En(a.length, n); ++r < l;) a[r] = t[r].call(this, a[r]); return Pt(e, this, a) }) }),
                                Gi = dr(function(e, t) { var n = pn(t, bl(Gi)); return sl(e, b, r, t, n) }),
                                qi = dr(function(e, t) { var n = pn(t, bl(qi)); return sl(e, y, r, t, n) }),
                                $i = _l(function(e, t) { return sl(e, v, r, r, r, t) });

                            function Ki(e, t) { return e === t || e != e && t != t } var Zi = al(za),
                                Qi = al(function(e, t) { return e >= t }),
                                Xi = Ja(function() { return arguments }()) ? Ja : function(e) { return ho(e) && tt.call(e, "callee") && !wt.call(e, "callee") },
                                eo = a.isArray,
                                to = Tt ? rn(Tt) : function(e) { return ho(e) && Ra(e) == X };

                            function no(e) { return null != e && uo(e.length) && !oo(e) }

                            function ao(e) { return ho(e) && no(e) } var ro = jn || xs,
                                lo = St ? rn(St) : function(e) { return ho(e) && Ra(e) == W };

                            function io(e) { if (!ho(e)) return !1; var t = Ra(e); return t == I || t == F || "string" == typeof e.message && "string" == typeof e.name && !fo(e) }

                            function oo(e) { if (!co(e)) return !1; var t = Ra(e); return t == R || t == z || t == A || t == J }

                            function so(e) { return "number" == typeof e && e == Do(e) }

                            function uo(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= w }

                            function co(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) }

                            function ho(e) { return null != e && "object" == typeof e } var _o = Ht ? rn(Ht) : function(e) { return ho(e) && Dl(e) == N };

                            function mo(e) { return "number" == typeof e || ho(e) && Ra(e) == B }

                            function fo(e) { if (!ho(e) || Ra(e) != U) return !1; var t = kt(e); if (null === t) return !0; var n = tt.call(t, "constructor") && t.constructor; return "function" == typeof n && n instanceof n && et.call(n) == lt } var po = jt ? rn(jt) : function(e) { return ho(e) && Ra(e) == G },
                                go = Ct ? rn(Ct) : function(e) { return ho(e) && Dl(e) == q };

                            function bo(e) { return "string" == typeof e || !eo(e) && ho(e) && Ra(e) == $ }

                            function yo(e) { return "symbol" == typeof e || ho(e) && Ra(e) == K } var Mo = Ot ? rn(Ot) : function(e) { return ho(e) && uo(e.length) && !!ft[Ra(e)] },
                                vo = al(Qa),
                                Lo = al(function(e, t) { return e <= t });

                            function ko(e) { if (!e) return []; if (no(e)) return bo(e) ? Mn(e) : Rr(e); if (en && e[en]) return function(e) { for (var t, n = []; !(t = e.next()).done;) n.push(t.value); return n }(e[en]()); var t = Dl(e); return (t == N ? mn : t == q ? gn : Zo)(e) }

                            function Yo(e) { return e ? (e = xo(e)) === D || e === -D ? (e < 0 ? -1 : 1) * x : e == e ? e : 0 : 0 === e ? e : 0 }

                            function Do(e) { var t = Yo(e),
                                    n = t % 1; return t == t ? n ? t - n : t : 0 }

                            function wo(e) { return e ? La(Do(e), 0, S) : 0 }

                            function xo(e) { if ("number" == typeof e) return e; if (yo(e)) return T; if (co(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = co(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(De, ""); var n = Ee.test(e); return n || Fe.test(e) ? yt(e.slice(2), n ? 2 : 8) : Ae.test(e) ? T : +e }

                            function To(e) { return zr(e, Bo(e)) }

                            function So(e) { return null == e ? "" : Mr(e) } var Ho = Br(function(e, t) { if (Pl(t) || no(t)) zr(t, No(t), e);
                                    else
                                        for (var n in t) tt.call(t, n) && pa(e, n, t[n]) }),
                                jo = Br(function(e, t) { zr(t, Bo(t), e) }),
                                Co = Br(function(e, t, n, a) { zr(t, Bo(t), e, a) }),
                                Oo = Br(function(e, t, n, a) { zr(t, No(t), e, a) }),
                                Po = _l(va),
                                Ao = dr(function(e, t) { e = Ge(e); var n = -1,
                                        a = t.length,
                                        l = a > 2 ? t[2] : r; for (l && Hl(t[0], t[1], l) && (a = 1); ++n < a;)
                                        for (var i = t[n], o = Bo(i), s = -1, u = o.length; ++s < u;) { var d = o[s],
                                                c = e[d];
                                            (c === r || Ki(c, Qe[d]) && !tt.call(e, d)) && (e[d] = i[d]) }
                                    return e }),
                                Eo = dr(function(e) { return e.push(r, dl), Pt(Uo, r, e) });

                            function Wo(e, t, n) { var a = null == e ? r : Fa(e, t); return a === r ? n : a }

                            function Fo(e, t) { return null != e && wl(e, t, Ba) } var Io = Qr(function(e, t, n) { null != t && "function" != typeof t.toString && (t = rt.call(t)), e[t] = n }, cs(ms)),
                                Ro = Qr(function(e, t, n) { null != t && "function" != typeof t.toString && (t = rt.call(t)), tt.call(e, t) ? e[t].push(n) : e[t] = [n] }, yl),
                                zo = dr(Ua);

                            function No(e) { return no(e) ? _a(e) : Za(e) }

                            function Bo(e) { return no(e) ? _a(e, !0) : function(e) { if (!co(e)) return function(e) { var t = []; if (null != e)
                                            for (var n in Ge(e)) t.push(n); return t }(e); var t = Pl(e),
                                        n = []; for (var a in e)("constructor" != a || !t && tt.call(e, a)) && n.push(a); return n }(e) } var Vo = Br(function(e, t, n) { nr(e, t, n) }),
                                Uo = Br(function(e, t, n, a) { nr(e, t, n, a) }),
                                Jo = _l(function(e, t) { var n = {}; if (null == e) return n; var a = !1;
                                    t = zt(t, function(t) { return t = Hr(t, e), a || (a = t.length > 1), t }), zr(e, fl(e), n), a && (n = ka(n, s | u | d, cl)); for (var r = t.length; r--;) Lr(n, t[r]); return n }),
                                Go = _l(function(e, t) { return null == e ? {} : function(e, t) { return lr(e, t, function(t, n) { return Fo(e, n) }) }(e, t) });

                            function qo(e, t) { if (null == e) return {}; var n = zt(fl(e), function(e) { return [e] }); return t = yl(t), lr(e, n, function(e, n) { return t(e, n[0]) }) } var $o = ol(No),
                                Ko = ol(Bo);

                            function Zo(e) { return null == e ? [] : ln(e, No(e)) } var Qo = Gr(function(e, t, n) { return t = t.toLowerCase(), e + (n ? Xo(t) : t) });

                            function Xo(e) { return os(So(e).toLowerCase()) }

                            function es(e) { return (e = So(e)) && e.replace(Re, dn).replace(st, "") } var ts = Gr(function(e, t, n) { return e + (n ? "-" : "") + t.toLowerCase() }),
                                ns = Gr(function(e, t, n) { return e + (n ? " " : "") + t.toLowerCase() }),
                                as = Jr("toLowerCase"),
                                rs = Gr(function(e, t, n) { return e + (n ? "_" : "") + t.toLowerCase() }),
                                ls = Gr(function(e, t, n) { return e + (n ? " " : "") + os(t) }),
                                is = Gr(function(e, t, n) { return e + (n ? " " : "") + t.toUpperCase() }),
                                os = Jr("toUpperCase");

                            function ss(e, t, n) { return e = So(e), (t = n ? r : t) === r ? function(e) { return ht.test(e) }(e) ? function(e) { return e.match(dt) || [] }(e) : function(e) { return e.match(je) || [] }(e) : e.match(t) || [] } var us = dr(function(e, t) { try { return Pt(e, r, t) } catch (n) { return io(n) ? n : new Ve(n) } }),
                                ds = _l(function(e, t) { return Et(t, function(t) { t = Gl(t), Ma(e, t, Ii(e[t], e)) }), e });

                            function cs(e) { return function() { return e } } var hs = Kr(),
                                _s = Kr(!0);

                            function ms(e) { return e }

                            function fs(e) { return Ka("function" == typeof e ? e : ka(e, s)) } var ps = dr(function(e, t) { return function(n) { return Ua(n, e, t) } }),
                                gs = dr(function(e, t) { return function(n) { return Ua(e, n, t) } });

                            function bs(e, t, n) { var a = No(t),
                                    r = Wa(t, a);
                                null != n || co(t) && (r.length || !a.length) || (n = t, t = e, e = this, r = Wa(t, No(t))); var l = !(co(n) && "chain" in n && !n.chain),
                                    i = oo(e); return Et(r, function(n) { var a = t[n];
                                    e[n] = a, i && (e.prototype[n] = function() { var t = this.__chain__; if (l || t) { var n = e(this.__wrapped__); return (n.__actions__ = Rr(this.__actions__)).push({ func: a, args: arguments, thisArg: e }), n.__chain__ = t, n } return a.apply(e, Nt([this.value()], arguments)) }) }), e }

                            function ys() {} var Ms = el(zt),
                                vs = el(Wt),
                                Ls = el(Ut);

                            function ks(e) { return jl(e) ? Xt(Gl(e)) : function(e) { return function(t) { return Fa(t, e) } }(e) } var Ys = nl(),
                                Ds = nl(!0);

                            function ws() { return [] }

                            function xs() { return !1 } var Ts, Ss = Xr(function(e, t) { return e + t }, 0),
                                Hs = ll("ceil"),
                                js = Xr(function(e, t) { return e / t }, 1),
                                Cs = ll("floor"),
                                Os = Xr(function(e, t) { return e * t }, 1),
                                Ps = ll("round"),
                                As = Xr(function(e, t) { return e - t }, 0); return aa.after = function(e, t) { if ("function" != typeof t) throw new Ke(i); return e = Do(e),
                                    function() { if (--e < 1) return t.apply(this, arguments) } }, aa.ary = Wi, aa.assign = Ho, aa.assignIn = jo, aa.assignInWith = Co, aa.assignWith = Oo, aa.at = Po, aa.before = Fi, aa.bind = Ii, aa.bindAll = ds, aa.bindKey = Ri, aa.castArray = function() { if (!arguments.length) return []; var e = arguments[0]; return eo(e) ? e : [e] }, aa.chain = Li, aa.chunk = function(e, t, n) { t = (n ? Hl(e, t, n) : t === r) ? 1 : An(Do(t), 0); var l = null == e ? 0 : e.length; if (!l || t < 1) return []; for (var i = 0, o = 0, s = a(Tn(l / t)); i < l;) s[o++] = mr(e, i, i += t); return s }, aa.compact = function(e) { for (var t = -1, n = null == e ? 0 : e.length, a = 0, r = []; ++t < n;) { var l = e[t];
                                    l && (r[a++] = l) } return r }, aa.concat = function() { var e = arguments.length; if (!e) return []; for (var t = a(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r]; return Nt(eo(n) ? Rr(n) : [n], Ca(t, 1)) }, aa.cond = function(e) { var t = null == e ? 0 : e.length,
                                    n = yl(); return e = t ? zt(e, function(e) { if ("function" != typeof e[1]) throw new Ke(i); return [n(e[0]), e[1]] }) : [], dr(function(n) { for (var a = -1; ++a < t;) { var r = e[a]; if (Pt(r[0], this, n)) return Pt(r[1], this, n) } }) }, aa.conforms = function(e) { return function(e) { var t = No(e); return function(n) { return Ya(n, e, t) } }(ka(e, s)) }, aa.constant = cs, aa.countBy = Di, aa.create = function(e, t) { var n = ra(e); return null == t ? n : ya(n, t) }, aa.curry = function e(t, n, a) { var l = sl(t, p, r, r, r, r, r, n = a ? r : n); return l.placeholder = e.placeholder, l }, aa.curryRight = function e(t, n, a) { var l = sl(t, g, r, r, r, r, r, n = a ? r : n); return l.placeholder = e.placeholder, l }, aa.debounce = zi, aa.defaults = Ao, aa.defaultsDeep = Eo, aa.defer = Ni, aa.delay = Bi, aa.difference = Kl, aa.differenceBy = Zl, aa.differenceWith = Ql, aa.drop = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? mr(e, (t = n || t === r ? 1 : Do(t)) < 0 ? 0 : t, a) : [] }, aa.dropRight = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? mr(e, 0, (t = a - (t = n || t === r ? 1 : Do(t))) < 0 ? 0 : t) : [] }, aa.dropRightWhile = function(e, t) { return e && e.length ? Yr(e, yl(t, 3), !0, !0) : [] }, aa.dropWhile = function(e, t) { return e && e.length ? Yr(e, yl(t, 3), !0) : [] }, aa.fill = function(e, t, n, a) { var l = null == e ? 0 : e.length; return l ? (n && "number" != typeof n && Hl(e, t, n) && (n = 0, a = l), function(e, t, n, a) { var l = e.length; for ((n = Do(n)) < 0 && (n = -n > l ? 0 : l + n), (a = a === r || a > l ? l : Do(a)) < 0 && (a += l), a = n > a ? 0 : wo(a); n < a;) e[n++] = t; return e }(e, t, n, a)) : [] }, aa.filter = function(e, t) { return (eo(e) ? Ft : ja)(e, yl(t, 3)) }, aa.flatMap = function(e, t) { return Ca(Oi(e, t), 1) }, aa.flatMapDeep = function(e, t) { return Ca(Oi(e, t), D) }, aa.flatMapDepth = function(e, t, n) { return n = n === r ? 1 : Do(n), Ca(Oi(e, t), n) }, aa.flatten = ti, aa.flattenDeep = function(e) { return null != e && e.length ? Ca(e, D) : [] }, aa.flattenDepth = function(e, t) { return null != e && e.length ? Ca(e, t = t === r ? 1 : Do(t)) : [] }, aa.flip = function(e) { return sl(e, L) }, aa.flow = hs, aa.flowRight = _s, aa.fromPairs = function(e) { for (var t = -1, n = null == e ? 0 : e.length, a = {}; ++t < n;) { var r = e[t];
                                    a[r[0]] = r[1] } return a }, aa.functions = function(e) { return null == e ? [] : Wa(e, No(e)) }, aa.functionsIn = function(e) { return null == e ? [] : Wa(e, Bo(e)) }, aa.groupBy = Hi, aa.initial = function(e) { return null != e && e.length ? mr(e, 0, -1) : [] }, aa.intersection = ai, aa.intersectionBy = ri, aa.intersectionWith = li, aa.invert = Io, aa.invertBy = Ro, aa.invokeMap = ji, aa.iteratee = fs, aa.keyBy = Ci, aa.keys = No, aa.keysIn = Bo, aa.map = Oi, aa.mapKeys = function(e, t) { var n = {}; return t = yl(t, 3), Aa(e, function(e, a, r) { Ma(n, t(e, a, r), e) }), n }, aa.mapValues = function(e, t) { var n = {}; return t = yl(t, 3), Aa(e, function(e, a, r) { Ma(n, a, t(e, a, r)) }), n }, aa.matches = function(e) { return er(ka(e, s)) }, aa.matchesProperty = function(e, t) { return tr(e, ka(t, s)) }, aa.memoize = Vi, aa.merge = Vo, aa.mergeWith = Uo, aa.method = ps, aa.methodOf = gs, aa.mixin = bs, aa.negate = Ui, aa.nthArg = function(e) { return e = Do(e), dr(function(t) { return ar(t, e) }) }, aa.omit = Jo, aa.omitBy = function(e, t) { return qo(e, Ui(yl(t))) }, aa.once = function(e) { return Fi(2, e) }, aa.orderBy = function(e, t, n, a) { return null == e ? [] : (eo(t) || (t = null == t ? [] : [t]), eo(n = a ? r : n) || (n = null == n ? [] : [n]), rr(e, t, n)) }, aa.over = Ms, aa.overArgs = Ji, aa.overEvery = vs, aa.overSome = Ls, aa.partial = Gi, aa.partialRight = qi, aa.partition = Pi, aa.pick = Go, aa.pickBy = qo, aa.property = ks, aa.propertyOf = function(e) { return function(t) { return null == e ? r : Fa(e, t) } }, aa.pull = oi, aa.pullAll = si, aa.pullAllBy = function(e, t, n) { return e && e.length && t && t.length ? ir(e, t, yl(n, 2)) : e }, aa.pullAllWith = function(e, t, n) { return e && e.length && t && t.length ? ir(e, t, r, n) : e }, aa.pullAt = ui, aa.range = Ys, aa.rangeRight = Ds, aa.rearg = $i, aa.reject = function(e, t) { return (eo(e) ? Ft : ja)(e, Ui(yl(t, 3))) }, aa.remove = function(e, t) { var n = []; if (!e || !e.length) return n; var a = -1,
                                    r = [],
                                    l = e.length; for (t = yl(t, 3); ++a < l;) { var i = e[a];
                                    t(i, a, e) && (n.push(i), r.push(a)) } return or(e, r), n }, aa.rest = function(e, t) { if ("function" != typeof e) throw new Ke(i); return dr(e, t = t === r ? t : Do(t)) }, aa.reverse = di, aa.sampleSize = function(e, t, n) { return t = (n ? Hl(e, t, n) : t === r) ? 1 : Do(t), (eo(e) ? function(e, t) { return Ul(Rr(e), La(t, 0, e.length)) } : function(e, t) { var n = Zo(e); return Ul(n, La(t, 0, n.length)) })(e, t) }, aa.set = function(e, t, n) { return null == e ? e : cr(e, t, n) }, aa.setWith = function(e, t, n, a) { return a = "function" == typeof a ? a : r, null == e ? e : cr(e, t, n, a) }, aa.shuffle = function(e) { return (eo(e) ? function(e) { return Ul(Rr(e)) } : function(e) { return Ul(Zo(e)) })(e) }, aa.slice = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? (n && "number" != typeof n && Hl(e, t, n) ? (t = 0, n = a) : (t = null == t ? 0 : Do(t), n = n === r ? a : Do(n)), mr(e, t, n)) : [] }, aa.sortBy = Ai, aa.sortedUniq = function(e) { return e && e.length ? br(e) : [] }, aa.sortedUniqBy = function(e, t) { return e && e.length ? br(e, yl(t, 2)) : [] }, aa.split = function(e, t, n) { return n && "number" != typeof n && Hl(e, t, n) && (t = n = r), (n = n === r ? S : n >>> 0) ? (e = So(e)) && ("string" == typeof t || null != t && !po(t)) && !(t = Mr(t)) && _n(e) ? Cr(Mn(e), 0, n) : e.split(t, n) : [] }, aa.spread = function(e, t) { if ("function" != typeof e) throw new Ke(i); return t = null == t ? 0 : An(Do(t), 0), dr(function(n) { var a = n[t],
                                        r = Cr(n, 0, t); return a && Nt(r, a), Pt(e, this, r) }) }, aa.tail = function(e) { var t = null == e ? 0 : e.length; return t ? mr(e, 1, t) : [] }, aa.take = function(e, t, n) { return e && e.length ? mr(e, 0, (t = n || t === r ? 1 : Do(t)) < 0 ? 0 : t) : [] }, aa.takeRight = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? mr(e, (t = a - (t = n || t === r ? 1 : Do(t))) < 0 ? 0 : t, a) : [] }, aa.takeRightWhile = function(e, t) { return e && e.length ? Yr(e, yl(t, 3), !1, !0) : [] }, aa.takeWhile = function(e, t) { return e && e.length ? Yr(e, yl(t, 3)) : [] }, aa.tap = function(e, t) { return t(e), e }, aa.throttle = function(e, t, n) { var a = !0,
                                    r = !0; if ("function" != typeof e) throw new Ke(i); return co(n) && (a = "leading" in n ? !!n.leading : a, r = "trailing" in n ? !!n.trailing : r), zi(e, t, { leading: a, maxWait: t, trailing: r }) }, aa.thru = ki, aa.toArray = ko, aa.toPairs = $o, aa.toPairsIn = Ko, aa.toPath = function(e) { return eo(e) ? zt(e, Gl) : yo(e) ? [e] : Rr(Jl(So(e))) }, aa.toPlainObject = To, aa.transform = function(e, t, n) { var a = eo(e),
                                    r = a || ro(e) || Mo(e); if (t = yl(t, 4), null == n) { var l = e && e.constructor;
                                    n = r ? a ? new l : [] : co(e) && oo(l) ? ra(kt(e)) : {} } return (r ? Et : Aa)(e, function(e, a, r) { return t(n, e, a, r) }), n }, aa.unary = function(e) { return Wi(e, 1) }, aa.union = ci, aa.unionBy = hi, aa.unionWith = _i, aa.uniq = function(e) { return e && e.length ? vr(e) : [] }, aa.uniqBy = function(e, t) { return e && e.length ? vr(e, yl(t, 2)) : [] }, aa.uniqWith = function(e, t) { return t = "function" == typeof t ? t : r, e && e.length ? vr(e, r, t) : [] }, aa.unset = function(e, t) { return null == e || Lr(e, t) }, aa.unzip = mi, aa.unzipWith = fi, aa.update = function(e, t, n) { return null == e ? e : kr(e, t, Sr(n)) }, aa.updateWith = function(e, t, n, a) { return a = "function" == typeof a ? a : r, null == e ? e : kr(e, t, Sr(n), a) }, aa.values = Zo, aa.valuesIn = function(e) { return null == e ? [] : ln(e, Bo(e)) }, aa.without = pi, aa.words = ss, aa.wrap = function(e, t) { return Gi(Sr(t), e) }, aa.xor = gi, aa.xorBy = bi, aa.xorWith = yi, aa.zip = Mi, aa.zipObject = function(e, t) { return xr(e || [], t || [], pa) }, aa.zipObjectDeep = function(e, t) { return xr(e || [], t || [], cr) }, aa.zipWith = vi, aa.entries = $o, aa.entriesIn = Ko, aa.extend = jo, aa.extendWith = Co, bs(aa, aa), aa.add = Ss, aa.attempt = us, aa.camelCase = Qo, aa.capitalize = Xo, aa.ceil = Hs, aa.clamp = function(e, t, n) { return n === r && (n = t, t = r), n !== r && (n = (n = xo(n)) == n ? n : 0), t !== r && (t = (t = xo(t)) == t ? t : 0), La(xo(e), t, n) }, aa.clone = function(e) { return ka(e, d) }, aa.cloneDeep = function(e) { return ka(e, s | d) }, aa.cloneDeepWith = function(e, t) { return ka(e, s | d, t = "function" == typeof t ? t : r) }, aa.cloneWith = function(e, t) { return ka(e, d, t = "function" == typeof t ? t : r) }, aa.conformsTo = function(e, t) { return null == t || Ya(e, t, No(t)) }, aa.deburr = es, aa.defaultTo = function(e, t) { return null == e || e != e ? t : e }, aa.divide = js, aa.endsWith = function(e, t, n) { e = So(e), t = Mr(t); var a = e.length,
                                    l = n = n === r ? a : La(Do(n), 0, a); return (n -= t.length) >= 0 && e.slice(n, l) == t }, aa.eq = Ki, aa.escape = function(e) { return (e = So(e)) && pe.test(e) ? e.replace(me, cn) : e }, aa.escapeRegExp = function(e) { return (e = So(e)) && Ye.test(e) ? e.replace(ke, "\\$&") : e }, aa.every = function(e, t, n) { var a = eo(e) ? Wt : Sa; return n && Hl(e, t, n) && (t = r), a(e, yl(t, 3)) }, aa.find = wi, aa.findIndex = Xl, aa.findKey = function(e, t) { return Gt(e, yl(t, 3), Aa) }, aa.findLast = xi, aa.findLastIndex = ei, aa.findLastKey = function(e, t) { return Gt(e, yl(t, 3), Ea) }, aa.floor = Cs, aa.forEach = Ti, aa.forEachRight = Si, aa.forIn = function(e, t) { return null == e ? e : Oa(e, yl(t, 3), Bo) }, aa.forInRight = function(e, t) { return null == e ? e : Pa(e, yl(t, 3), Bo) }, aa.forOwn = function(e, t) { return e && Aa(e, yl(t, 3)) }, aa.forOwnRight = function(e, t) { return e && Ea(e, yl(t, 3)) }, aa.get = Wo, aa.gt = Zi, aa.gte = Qi, aa.has = function(e, t) { return null != e && wl(e, t, Na) }, aa.hasIn = Fo, aa.head = ni, aa.identity = ms, aa.includes = function(e, t, n, a) { e = no(e) ? e : Zo(e), n = n && !a ? Do(n) : 0; var r = e.length; return n < 0 && (n = An(r + n, 0)), bo(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && $t(e, t, n) > -1 }, aa.indexOf = function(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var r = null == n ? 0 : Do(n); return r < 0 && (r = An(a + r, 0)), $t(e, t, r) }, aa.inRange = function(e, t, n) { return t = Yo(t), n === r ? (n = t, t = 0) : n = Yo(n),
                                    function(e, t, n) { return e >= En(t, n) && e < An(t, n) }(e = xo(e), t, n) }, aa.invoke = zo, aa.isArguments = Xi, aa.isArray = eo, aa.isArrayBuffer = to, aa.isArrayLike = no, aa.isArrayLikeObject = ao, aa.isBoolean = function(e) { return !0 === e || !1 === e || ho(e) && Ra(e) == E }, aa.isBuffer = ro, aa.isDate = lo, aa.isElement = function(e) { return ho(e) && 1 === e.nodeType && !fo(e) }, aa.isEmpty = function(e) { if (null == e) return !0; if (no(e) && (eo(e) || "string" == typeof e || "function" == typeof e.splice || ro(e) || Mo(e) || Xi(e))) return !e.length; var t = Dl(e); if (t == N || t == q) return !e.size; if (Pl(e)) return !Za(e).length; for (var n in e)
                                    if (tt.call(e, n)) return !1;
                                return !0 }, aa.isEqual = function(e, t) { return Ga(e, t) }, aa.isEqualWith = function(e, t, n) { var a = (n = "function" == typeof n ? n : r) ? n(e, t) : r; return a === r ? Ga(e, t, r, n) : !!a }, aa.isError = io, aa.isFinite = function(e) { return "number" == typeof e && Cn(e) }, aa.isFunction = oo, aa.isInteger = so, aa.isLength = uo, aa.isMap = _o, aa.isMatch = function(e, t) { return e === t || qa(e, t, vl(t)) }, aa.isMatchWith = function(e, t, n) { return n = "function" == typeof n ? n : r, qa(e, t, vl(t), n) }, aa.isNaN = function(e) { return mo(e) && e != +e }, aa.isNative = function(e) { if (Ol(e)) throw new Ve("Unsupported core-js use. Try https://npms.io/search?q=ponyfill."); return $a(e) }, aa.isNil = function(e) { return null == e }, aa.isNull = function(e) { return null === e }, aa.isNumber = mo, aa.isObject = co, aa.isObjectLike = ho, aa.isPlainObject = fo, aa.isRegExp = po, aa.isSafeInteger = function(e) { return so(e) && e >= -w && e <= w }, aa.isSet = go, aa.isString = bo, aa.isSymbol = yo, aa.isTypedArray = Mo, aa.isUndefined = function(e) { return e === r }, aa.isWeakMap = function(e) { return ho(e) && Dl(e) == Q }, aa.isWeakSet = function(e) { return ho(e) && "[object WeakSet]" == Ra(e) }, aa.join = function(e, t) { return null == e ? "" : On.call(e, t) }, aa.kebabCase = ts, aa.last = ii, aa.lastIndexOf = function(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var l = a; return n !== r && (l = (l = Do(n)) < 0 ? An(a + l, 0) : En(l, a - 1)), t == t ? function(e, t, n) { for (var a = n + 1; a--;)
                                        if (e[a] === t) return a;
                                    return a }(e, t, l) : qt(e, Zt, l, !0) }, aa.lowerCase = ns, aa.lowerFirst = as, aa.lt = vo, aa.lte = Lo, aa.max = function(e) { return e && e.length ? Ha(e, ms, za) : r }, aa.maxBy = function(e, t) { return e && e.length ? Ha(e, yl(t, 2), za) : r }, aa.mean = function(e) { return Qt(e, ms) }, aa.meanBy = function(e, t) { return Qt(e, yl(t, 2)) }, aa.min = function(e) { return e && e.length ? Ha(e, ms, Qa) : r }, aa.minBy = function(e, t) { return e && e.length ? Ha(e, yl(t, 2), Qa) : r }, aa.stubArray = ws, aa.stubFalse = xs, aa.stubObject = function() { return {} }, aa.stubString = function() { return "" }, aa.stubTrue = function() { return !0 }, aa.multiply = Os, aa.nth = function(e, t) { return e && e.length ? ar(e, Do(t)) : r }, aa.noConflict = function() { return Lt._ === this && (Lt._ = it), this }, aa.noop = ys, aa.now = Ei, aa.pad = function(e, t, n) { e = So(e); var a = (t = Do(t)) ? yn(e) : 0; if (!t || a >= t) return e; var r = (t - a) / 2; return tl(Sn(r), n) + e + tl(Tn(r), n) }, aa.padEnd = function(e, t, n) { e = So(e); var a = (t = Do(t)) ? yn(e) : 0; return t && a < t ? e + tl(t - a, n) : e }, aa.padStart = function(e, t, n) { e = So(e); var a = (t = Do(t)) ? yn(e) : 0; return t && a < t ? tl(t - a, n) + e : e }, aa.parseInt = function(e, t, n) { return n || null == t ? t = 0 : t && (t = +t), Fn(So(e).replace(we, ""), t || 0) }, aa.random = function(e, t, n) { if (n && "boolean" != typeof n && Hl(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Yo(e), t === r ? (t = e, e = 0) : t = Yo(t)), e > t) { var a = e;
                                    e = t, t = a } if (n || e % 1 || t % 1) { var l = In(); return En(e + l * (t - e + bt("1e-" + ((l + "").length - 1))), t) } return sr(e, t) }, aa.reduce = function(e, t, n) { var a = eo(e) ? Bt : tn,
                                    r = arguments.length < 3; return a(e, yl(t, 4), n, r, xa) }, aa.reduceRight = function(e, t, n) { var a = eo(e) ? Vt : tn,
                                    r = arguments.length < 3; return a(e, yl(t, 4), n, r, Ta) }, aa.repeat = function(e, t, n) { return t = (n ? Hl(e, t, n) : t === r) ? 1 : Do(t), ur(So(e), t) }, aa.replace = function() { var e = arguments,
                                    t = So(e[0]); return e.length < 3 ? t : t.replace(e[1], e[2]) }, aa.result = function(e, t, n) { var a = -1,
                                    l = (t = Hr(t, e)).length; for (l || (l = 1, e = r); ++a < l;) { var i = null == e ? r : e[Gl(t[a])];
                                    i === r && (a = l, i = n), e = oo(i) ? i.call(e) : i } return e }, aa.round = Ps, aa.runInContext = e, aa.sample = function(e) { return (eo(e) ? ma : function(e) { return ma(Zo(e)) })(e) }, aa.size = function(e) { if (null == e) return 0; if (no(e)) return bo(e) ? yn(e) : e.length; var t = Dl(e); return t == N || t == q ? e.size : Za(e).length }, aa.snakeCase = rs, aa.some = function(e, t, n) { var a = eo(e) ? Ut : fr; return n && Hl(e, t, n) && (t = r), a(e, yl(t, 3)) }, aa.sortedIndex = function(e, t) { return pr(e, t) }, aa.sortedIndexBy = function(e, t, n) { return gr(e, t, yl(n, 2)) }, aa.sortedIndexOf = function(e, t) { var n = null == e ? 0 : e.length; if (n) { var a = pr(e, t); if (a < n && Ki(e[a], t)) return a } return -1 }, aa.sortedLastIndex = function(e, t) { return pr(e, t, !0) }, aa.sortedLastIndexBy = function(e, t, n) { return gr(e, t, yl(n, 2), !0) }, aa.sortedLastIndexOf = function(e, t) { if (null != e && e.length) { var n = pr(e, t, !0) - 1; if (Ki(e[n], t)) return n } return -1 }, aa.startCase = ls, aa.startsWith = function(e, t, n) { return e = So(e), n = null == n ? 0 : La(Do(n), 0, e.length), t = Mr(t), e.slice(n, n + t.length) == t }, aa.subtract = As, aa.sum = function(e) { return e && e.length ? nn(e, ms) : 0 }, aa.sumBy = function(e, t) { return e && e.length ? nn(e, yl(t, 2)) : 0 }, aa.template = function(e, t, n) { var a = aa.templateSettings;
                                n && Hl(e, t, n) && (t = r), e = So(e), t = Co({}, t, a, ul); var l, i, o = Co({}, t.imports, a.imports, ul),
                                    s = No(o),
                                    u = ln(o, s),
                                    d = 0,
                                    c = t.interpolate || ze,
                                    h = "__p += '",
                                    _ = qe((t.escape || ze).source + "|" + c.source + "|" + (c === ye ? Oe : ze).source + "|" + (t.evaluate || ze).source + "|$", "g"),
                                    m = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++mt + "]") + "\n";
                                e.replace(_, function(t, n, a, r, o, s) { return a || (a = r), h += e.slice(d, s).replace(Ne, hn), n && (l = !0, h += "' +\n__e(" + n + ") +\n'"), o && (i = !0, h += "';\n" + o + ";\n__p += '"), a && (h += "' +\n((__t = (" + a + ")) == null ? '' : __t) +\n'"), d = s + t.length, t }), h += "';\n"; var f = t.variable;
                                f || (h = "with (obj) {\n" + h + "\n}\n"), h = (i ? h.replace(de, "") : h).replace(ce, "$1").replace(he, "$1;"), h = "function(" + (f || "obj") + ") {\n" + (f ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}"; var p = us(function() { return Ue(s, m + "return " + h).apply(r, u) }); if (p.source = h, io(p)) throw p; return p }, aa.times = function(e, t) { if ((e = Do(e)) < 1 || e > w) return []; var n = S,
                                    a = En(e, S);
                                t = yl(t), e -= S; for (var r = an(a, t); ++n < e;) t(n); return r }, aa.toFinite = Yo, aa.toInteger = Do, aa.toLength = wo, aa.toLower = function(e) { return So(e).toLowerCase() }, aa.toNumber = xo, aa.toSafeInteger = function(e) { return e ? La(Do(e), -w, w) : 0 === e ? e : 0 }, aa.toString = So, aa.toUpper = function(e) { return So(e).toUpperCase() }, aa.trim = function(e, t, n) { if ((e = So(e)) && (n || t === r)) return e.replace(De, ""); if (!e || !(t = Mr(t))) return e; var a = Mn(e),
                                    l = Mn(t); return Cr(a, sn(a, l), un(a, l) + 1).join("") }, aa.trimEnd = function(e, t, n) { if ((e = So(e)) && (n || t === r)) return e.replace(xe, ""); if (!e || !(t = Mr(t))) return e; var a = Mn(e); return Cr(a, 0, un(a, Mn(t)) + 1).join("") }, aa.trimStart = function(e, t, n) { if ((e = So(e)) && (n || t === r)) return e.replace(we, ""); if (!e || !(t = Mr(t))) return e; var a = Mn(e); return Cr(a, sn(a, Mn(t))).join("") }, aa.truncate = function(e, t) { var n = 30,
                                    a = "..."; if (co(t)) { var l = "separator" in t ? t.separator : l;
                                    n = "length" in t ? Do(t.length) : n, a = "omission" in t ? Mr(t.omission) : a } var i = (e = So(e)).length; if (_n(e)) { var o = Mn(e);
                                    i = o.length } if (n >= i) return e; var s = n - yn(a); if (s < 1) return a; var u = o ? Cr(o, 0, s).join("") : e.slice(0, s); if (l === r) return u + a; if (o && (s += u.length - s), po(l)) { if (e.slice(s).search(l)) { var d, c = u; for (l.global || (l = qe(l.source, So(Pe.exec(l)) + "g")), l.lastIndex = 0; d = l.exec(c);) var h = d.index;
                                        u = u.slice(0, h === r ? s : h) } } else if (e.indexOf(Mr(l), s) != s) { var _ = u.lastIndexOf(l);
                                    _ > -1 && (u = u.slice(0, _)) } return u + a }, aa.unescape = function(e) { return (e = So(e)) && fe.test(e) ? e.replace(_e, vn) : e }, aa.uniqueId = function(e) { var t = ++nt; return So(e) + t }, aa.upperCase = is, aa.upperFirst = os, aa.each = Ti, aa.eachRight = Si, aa.first = ni, bs(aa, (Ts = {}, Aa(aa, function(e, t) { tt.call(aa.prototype, t) || (Ts[t] = e) }), Ts), { chain: !1 }), aa.VERSION = "4.17.11", Et(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) { aa[e].placeholder = aa }), Et(["drop", "take"], function(e, t) { oa.prototype[e] = function(n) { n = n === r ? 1 : An(Do(n), 0); var a = this.__filtered__ && !t ? new oa(this) : this.clone(); return a.__filtered__ ? a.__takeCount__ = En(n, a.__takeCount__) : a.__views__.push({ size: En(n, S), type: e + (a.__dir__ < 0 ? "Right" : "") }), a }, oa.prototype[e + "Right"] = function(t) { return this.reverse()[e](t).reverse() } }), Et(["filter", "map", "takeWhile"], function(e, t) { var n = t + 1,
                                    a = 1 == n || 3 == n;
                                oa.prototype[e] = function(e) { var t = this.clone(); return t.__iteratees__.push({ iteratee: yl(e, 3), type: n }), t.__filtered__ = t.__filtered__ || a, t } }), Et(["head", "last"], function(e, t) { var n = "take" + (t ? "Right" : "");
                                oa.prototype[e] = function() { return this[n](1).value()[0] } }), Et(["initial", "tail"], function(e, t) { var n = "drop" + (t ? "" : "Right");
                                oa.prototype[e] = function() { return this.__filtered__ ? new oa(this) : this[n](1) } }), oa.prototype.compact = function() { return this.filter(ms) }, oa.prototype.find = function(e) { return this.filter(e).head() }, oa.prototype.findLast = function(e) { return this.reverse().find(e) }, oa.prototype.invokeMap = dr(function(e, t) { return "function" == typeof e ? new oa(this) : this.map(function(n) { return Ua(n, e, t) }) }), oa.prototype.reject = function(e) { return this.filter(Ui(yl(e))) }, oa.prototype.slice = function(e, t) { e = Do(e); var n = this; return n.__filtered__ && (e > 0 || t < 0) ? new oa(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = Do(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n) }, oa.prototype.takeRightWhile = function(e) { return this.reverse().takeWhile(e).reverse() }, oa.prototype.toArray = function() { return this.take(S) }, Aa(oa.prototype, function(e, t) { var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                    a = /^(?:head|last)$/.test(t),
                                    l = aa[a ? "take" + ("last" == t ? "Right" : "") : t],
                                    i = a || /^find/.test(t);
                                l && (aa.prototype[t] = function() { var t = this.__wrapped__,
                                        o = a ? [1] : arguments,
                                        s = t instanceof oa,
                                        u = o[0],
                                        d = s || eo(t),
                                        c = function(e) { var t = l.apply(aa, Nt([e], o)); return a && h ? t[0] : t };
                                    d && n && "function" == typeof u && 1 != u.length && (s = d = !1); var h = this.__chain__,
                                        _ = i && !h,
                                        m = s && !this.__actions__.length; if (!i && d) { t = m ? t : new oa(this); var f = e.apply(t, o); return f.__actions__.push({ func: ki, args: [c], thisArg: r }), new ia(f, h) } return _ && m ? e.apply(this, o) : (f = this.thru(c), _ ? a ? f.value()[0] : f.value() : f) }) }), Et(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) { var t = Ze[e],
                                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    a = /^(?:pop|shift)$/.test(e);
                                aa.prototype[e] = function() { var e = arguments; if (a && !this.__chain__) { var r = this.value(); return t.apply(eo(r) ? r : [], e) } return this[n](function(n) { return t.apply(eo(n) ? n : [], e) }) } }), Aa(oa.prototype, function(e, t) { var n = aa[t]; if (n) { var a = n.name + "";
                                    (qn[a] || (qn[a] = [])).push({ name: t, func: n }) } }), qn[Zr(r, m).name] = [{ name: "wrapper", func: r }], oa.prototype.clone = function() { var e = new oa(this.__wrapped__); return e.__actions__ = Rr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Rr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Rr(this.__views__), e }, oa.prototype.reverse = function() { if (this.__filtered__) { var e = new oa(this);
                                    e.__dir__ = -1, e.__filtered__ = !0 } else(e = this.clone()).__dir__ *= -1; return e }, oa.prototype.value = function() { var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    n = eo(e),
                                    a = t < 0,
                                    r = n ? e.length : 0,
                                    l = function(e, t, n) { for (var a = -1, r = n.length; ++a < r;) { var l = n[a],
                                                i = l.size; switch (l.type) {
                                                case "drop":
                                                    e += i; break;
                                                case "dropRight":
                                                    t -= i; break;
                                                case "take":
                                                    t = En(t, e + i); break;
                                                case "takeRight":
                                                    e = An(e, t - i) } } return { start: e, end: t } }(0, r, this.__views__),
                                    i = l.start,
                                    o = l.end,
                                    s = o - i,
                                    u = a ? o : i - 1,
                                    d = this.__iteratees__,
                                    c = d.length,
                                    h = 0,
                                    _ = En(s, this.__takeCount__); if (!n || !a && r == s && _ == s) return Dr(e, this.__actions__); var m = [];
                                e: for (; s-- && h < _;) { for (var f = -1, p = e[u += t]; ++f < c;) { var g = d[f],
                                            b = g.type,
                                            y = (0, g.iteratee)(p); if (2 == b) p = y;
                                        else if (!y) { if (1 == b) continue e; break e } }
                                    m[h++] = p }
                                return m }, aa.prototype.at = Yi, aa.prototype.chain = function() { return Li(this) }, aa.prototype.commit = function() { return new ia(this.value(), this.__chain__) }, aa.prototype.next = function() { this.__values__ === r && (this.__values__ = ko(this.value())); var e = this.__index__ >= this.__values__.length; return { done: e, value: e ? r : this.__values__[this.__index__++] } }, aa.prototype.plant = function(e) { for (var t, n = this; n instanceof la;) { var a = $l(n);
                                    a.__index__ = 0, a.__values__ = r, t ? l.__wrapped__ = a : t = a; var l = a;
                                    n = n.__wrapped__ } return l.__wrapped__ = e, t }, aa.prototype.reverse = function() { var e = this.__wrapped__; if (e instanceof oa) { var t = e; return this.__actions__.length && (t = new oa(this)), (t = t.reverse()).__actions__.push({ func: ki, args: [di], thisArg: r }), new ia(t, this.__chain__) } return this.thru(di) }, aa.prototype.toJSON = aa.prototype.valueOf = aa.prototype.value = function() { return Dr(this.__wrapped__, this.__actions__) }, aa.prototype.first = aa.prototype.head, en && (aa.prototype[en] = function() { return this }), aa }();
                    Lt._ = Ln, (a = (function() { return Ln }).call(t, n, t, e)) === r || (e.exports = a) }).call(this) }).call(this, n("YuTi")(e)) }, "MO+k": function(e, t, n) { e.exports = function(e) { "use strict";
                e = e && e.hasOwnProperty("default") ? e.default : e; var t = { rgb2hsl: n, rgb2hsv: a, rgb2hwb: l, rgb2cmyk: i, rgb2keyword: o, rgb2xyz: s, rgb2lab: u, rgb2lch: function(e) { return y(u(e)) }, hsl2rgb: d, hsl2hsv: function(e) { var t = e[1] / 100,
                            n = e[2] / 100; return 0 === n ? [0, 0, 0] : [e[0], 2 * (t *= (n *= 2) <= 1 ? n : 2 - n) / (n + t) * 100, (n + t) / 2 * 100] }, hsl2hwb: function(e) { return l(d(e)) }, hsl2cmyk: function(e) { return i(d(e)) }, hsl2keyword: function(e) { return o(d(e)) }, hsv2rgb: c, hsv2hsl: function(e) { var t, n, a = e[1] / 100,
                            r = e[2] / 100; return t = a * r, [e[0], 100 * (t = (t /= (n = (2 - a) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)] }, hsv2hwb: function(e) { return l(c(e)) }, hsv2cmyk: function(e) { return i(c(e)) }, hsv2keyword: function(e) { return o(c(e)) }, hwb2rgb: h, hwb2hsl: function(e) { return n(h(e)) }, hwb2hsv: function(e) { return a(h(e)) }, hwb2cmyk: function(e) { return i(h(e)) }, hwb2keyword: function(e) { return o(h(e)) }, cmyk2rgb: _, cmyk2hsl: function(e) { return n(_(e)) }, cmyk2hsv: function(e) { return a(_(e)) }, cmyk2hwb: function(e) { return l(_(e)) }, cmyk2keyword: function(e) { return o(_(e)) }, keyword2rgb: L, keyword2hsl: function(e) { return n(L(e)) }, keyword2hsv: function(e) { return a(L(e)) }, keyword2hwb: function(e) { return l(L(e)) }, keyword2cmyk: function(e) { return i(L(e)) }, keyword2lab: function(e) { return u(L(e)) }, keyword2xyz: function(e) { return s(L(e)) }, xyz2rgb: m, xyz2lab: f, xyz2lch: function(e) { return y(f(e)) }, lab2xyz: p, lab2rgb: M, lab2lch: y, lch2lab: v, lch2xyz: function(e) { return p(v(e)) }, lch2rgb: function(e) { return M(v(e)) } };

                function n(e) { var t, n, a = e[0] / 255,
                        r = e[1] / 255,
                        l = e[2] / 255,
                        i = Math.min(a, r, l),
                        o = Math.max(a, r, l),
                        s = o - i; return o == i ? t = 0 : a == o ? t = (r - l) / s : r == o ? t = 2 + (l - a) / s : l == o && (t = 4 + (a - r) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + o) / 2, [t, 100 * (o == i ? 0 : n <= .5 ? s / (o + i) : s / (2 - o - i)), 100 * n] }

                function a(e) { var t, n, a = e[0],
                        r = e[1],
                        l = e[2],
                        i = Math.min(a, r, l),
                        o = Math.max(a, r, l),
                        s = o - i; return n = 0 == o ? 0 : s / o * 1e3 / 10, o == i ? t = 0 : a == o ? t = (r - l) / s : r == o ? t = 2 + (l - a) / s : l == o && (t = 4 + (a - r) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, o / 255 * 1e3 / 10] }

                function l(e) { var t = e[0],
                        a = e[1],
                        r = e[2]; return [n(e)[0], 1 / 255 * Math.min(t, Math.min(a, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(a, r)))] }

                function i(e) { var t, n = e[0] / 255,
                        a = e[1] / 255,
                        r = e[2] / 255; return [100 * ((1 - n - (t = Math.min(1 - n, 1 - a, 1 - r))) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t] }

                function o(e) { return Y[JSON.stringify(e)] }

                function s(e) { var t = e[0] / 255,
                        n = e[1] / 255,
                        a = e[2] / 255; return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * a), 100 * (.0193 * t + .1192 * n + .9505 * a)] }

                function u(e) { var t = s(e),
                        n = t[0],
                        a = t[1],
                        r = t[2]; return a /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (n - a), 200 * (a - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))] }

                function d(e) { var t, n, a, r, l, i = e[0] / 360,
                        o = e[1] / 100,
                        s = e[2] / 100; if (0 == o) return [l = 255 * s, l, l];
                    t = 2 * s - (n = s < .5 ? s * (1 + o) : s + o - s * o), r = [0, 0, 0]; for (var u = 0; u < 3; u++)(a = i + 1 / 3 * -(u - 1)) < 0 && a++, a > 1 && a--, r[u] = 255 * (l = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t); return r }

                function c(e) { var t = e[0] / 60,
                        n = e[1] / 100,
                        a = e[2] / 100,
                        r = Math.floor(t) % 6,
                        l = t - Math.floor(t),
                        i = 255 * a * (1 - n),
                        o = 255 * a * (1 - n * l),
                        s = 255 * a * (1 - n * (1 - l)); switch (a *= 255, r) {
                        case 0:
                            return [a, s, i];
                        case 1:
                            return [o, a, i];
                        case 2:
                            return [i, a, s];
                        case 3:
                            return [i, o, a];
                        case 4:
                            return [s, i, a];
                        case 5:
                            return [a, i, o] } }

                function h(e) { var t, n, a, l, i = e[0] / 360,
                        o = e[1] / 100,
                        s = e[2] / 100,
                        u = o + s; switch (u > 1 && (o /= u, s /= u), a = 6 * i - (t = Math.floor(6 * i)), 0 != (1 & t) && (a = 1 - a), l = o + a * ((n = 1 - s) - o), t) { default:
                            case 6:
                            case 0:
                            r = n, g = l, b = o; break;
                        case 1:
                                r = l, g = n, b = o; break;
                        case 2:
                                r = o, g = n, b = l; break;
                        case 3:
                                r = o, g = l, b = n; break;
                        case 4:
                                r = l, g = o, b = n; break;
                        case 5:
                                r = n, g = o, b = l } return [255 * r, 255 * g, 255 * b] }

                function _(e) { var t = e[1] / 100,
                        n = e[2] / 100,
                        a = e[3] / 100; return [255 * (1 - Math.min(1, e[0] / 100 * (1 - a) + a)), 255 * (1 - Math.min(1, t * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))] }

                function m(e) { var t, n, a, r = e[0] / 100,
                        l = e[1] / 100,
                        i = e[2] / 100; return n = -.9689 * r + 1.8758 * l + .0415 * i, a = .0557 * r + -.204 * l + 1.057 * i, t = (t = 3.2406 * r + -1.5372 * l + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (a = Math.min(Math.max(0, a), 1))] }

                function f(e) { var t = e[0],
                        n = e[1],
                        a = e[2]; return n /= 100, a /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))] }

                function p(e) { var t, n, a, r, l = e[0],
                        i = e[1],
                        o = e[2]; return l <= 8 ? r = (n = 100 * l / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((l + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (i / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(i / 500 + r, 3), n, a = a / 108.883 <= .008859 ? a = 108.883 * (r - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - o / 200, 3)] }

                function y(e) { var t, n = e[0],
                        a = e[1],
                        r = e[2]; return (t = 360 * Math.atan2(r, a) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(a * a + r * r), t] }

                function M(e) { return m(p(e)) }

                function v(e) { var t, n = e[1]; return t = e[2] / 360 * 2 * Math.PI, [e[0], n * Math.cos(t), n * Math.sin(t)] }

                function L(e) { return k[e] } var k = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    Y = {}; for (var D in k) Y[JSON.stringify(k[D])] = D; var w = function() { return new j }; for (var x in t) { w[x + "Raw"] = function(e) { return function(n) { return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), t[e](n) } }(x); var T = /(\w+)2(\w+)/.exec(x),
                        S = T[1],
                        H = T[2];
                    (w[S] = w[S] || {})[H] = w[x] = function(e) { return function(n) { "number" == typeof n && (n = Array.prototype.slice.call(arguments)); var a = t[e](n); if ("string" == typeof a || void 0 === a) return a; for (var r = 0; r < a.length; r++) a[r] = Math.round(a[r]); return a } }(x) } var j = function() { this.convs = {} };
                j.prototype.routeSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n)) }, j.prototype.setValues = function(e, t) { return this.space = e, this.convs = {}, this.convs[e] = t, this }, j.prototype.getValues = function(e) { var t = this.convs[e]; if (!t) { var n = this.space;
                        t = w[n][e](this.convs[n]), this.convs[e] = t } return t }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) { j.prototype[e] = function(t) { return this.routeSpace(e, arguments) } }); var C = w,
                    O = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    P = { getRgba: A, getHsla: E, getRgb: function(e) { var t = A(e); return t && t.slice(0, 3) }, getHsl: function(e) { var t = E(e); return t && t.slice(0, 3) }, getHwb: W, getAlpha: function(e) { var t = A(e); return t ? t[3] : (t = E(e)) ? t[3] : (t = W(e)) ? t[3] : void 0 }, hexString: function(e, t) { return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + N(e[0]) + N(e[1]) + N(e[2]) + (t >= 0 && t < 1 ? N(Math.round(255 * t)) : "") }, rgbString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? F(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" }, rgbaString: F, percentString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? I(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)" }, percentaString: I, hslString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? R(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" }, hslaString: R, hwbString: function(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")" }, keyword: function(e) { return B[e.slice(0, 3)] } };

                function A(e) { if (e) { var t = [0, 0, 0],
                            n = 1,
                            a = e.match(/^#([a-fA-F0-9]{3,4})$/i),
                            r = ""; if (a) { r = (a = a[1])[3]; for (var l = 0; l < t.length; l++) t[l] = parseInt(a[l] + a[l], 16);
                            r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100) } else if (a = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) { for (r = a[2], a = a[1], l = 0; l < t.length; l++) t[l] = parseInt(a.slice(2 * l, 2 * l + 2), 16);
                            r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100) } else if (a = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (l = 0; l < t.length; l++) t[l] = parseInt(a[l + 1]);
                            n = parseFloat(a[4]) } else if (a = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (l = 0; l < t.length; l++) t[l] = Math.round(2.55 * parseFloat(a[l + 1]));
                            n = parseFloat(a[4]) } else if (a = e.match(/(\w+)/)) { if ("transparent" == a[1]) return [0, 0, 0, 0]; if (!(t = O[a[1]])) return } for (l = 0; l < t.length; l++) t[l] = z(t[l], 0, 255); return n = n || 0 == n ? z(n, 0, 1) : 1, t[3] = n, t } }

                function E(e) { if (e) { var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]); return [z(parseInt(t[1]), 0, 360), z(parseFloat(t[2]), 0, 100), z(parseFloat(t[3]), 0, 100), z(isNaN(n) ? 1 : n, 0, 1)] } } }

                function W(e) { if (e) { var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]); return [z(parseInt(t[1]), 0, 360), z(parseFloat(t[2]), 0, 100), z(parseFloat(t[3]), 0, 100), z(isNaN(n) ? 1 : n, 0, 1)] } } }

                function F(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")" }

                function I(e, t) { return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")" }

                function R(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")" }

                function z(e, t, n) { return Math.min(Math.max(t, e), n) }

                function N(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t } var B = {}; for (var V in O) B[O[V]] = V; var U = function(e) { return e instanceof U ? e : this instanceof U ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof e ? (t = P.getRgba(e)) ? this.setValues("rgb", t) : (t = P.getHsla(e)) ? this.setValues("hsl", t) : (t = P.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new U(e); var t };
                U.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var e = this.values; return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var e = this.values; return e.rgb.concat([e.alpha]) }, hslaArray: function() { var e = this.values; return e.hsl.concat([e.alpha]) }, alpha: function(e) { return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this) }, red: function(e) { return this.setChannel("rgb", 0, e) }, green: function(e) { return this.setChannel("rgb", 1, e) }, blue: function(e) { return this.setChannel("rgb", 2, e) }, hue: function(e) { return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e) }, saturation: function(e) { return this.setChannel("hsl", 1, e) }, lightness: function(e) { return this.setChannel("hsl", 2, e) }, saturationv: function(e) { return this.setChannel("hsv", 1, e) }, whiteness: function(e) { return this.setChannel("hwb", 1, e) }, blackness: function(e) { return this.setChannel("hwb", 2, e) }, value: function(e) { return this.setChannel("hsv", 2, e) }, cyan: function(e) { return this.setChannel("cmyk", 0, e) }, magenta: function(e) { return this.setChannel("cmyk", 1, e) }, yellow: function(e) { return this.setChannel("cmyk", 2, e) }, black: function(e) { return this.setChannel("cmyk", 3, e) }, hexString: function() { return P.hexString(this.values.rgb) }, rgbString: function() { return P.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return P.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return P.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return P.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return P.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return P.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return P.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2] }, luminosity: function() { for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) { var a = e[n] / 255;
                            t[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4) } return .2126 * t[0] + .7152 * t[1] + .0722 * t[2] }, contrast: function(e) { var t = this.luminosity(),
                            n = e.luminosity(); return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05) }, level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" }, dark: function() { var e = this.values.rgb; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t]; return this.setValues("rgb", e), this }, lighten: function(e) { var t = this.values.hsl; return t[2] += t[2] * e, this.setValues("hsl", t), this }, darken: function(e) { var t = this.values.hsl; return t[2] -= t[2] * e, this.setValues("hsl", t), this }, saturate: function(e) { var t = this.values.hsl; return t[1] += t[1] * e, this.setValues("hsl", t), this }, desaturate: function(e) { var t = this.values.hsl; return t[1] -= t[1] * e, this.setValues("hsl", t), this }, whiten: function(e) { var t = this.values.hwb; return t[1] += t[1] * e, this.setValues("hwb", t), this }, blacken: function(e) { var t = this.values.hwb; return t[2] += t[2] * e, this.setValues("hwb", t), this }, greyscale: function() { var e = this.values.rgb,
                            t = .3 * e[0] + .59 * e[1] + .11 * e[2]; return this.setValues("rgb", [t, t, t]), this }, clearer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t - t * e), this }, opaquer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t + t * e), this }, rotate: function(e) { var t = this.values.hsl,
                            n = (t[0] + e) % 360; return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this }, mix: function(e, t) { var n = e,
                            a = void 0 === t ? .5 : t,
                            r = 2 * a - 1,
                            l = this.alpha() - n.alpha(),
                            i = ((r * l == -1 ? r : (r + l) / (1 + r * l)) + 1) / 2,
                            o = 1 - i; return this.rgb(i * this.red() + o * n.red(), i * this.green() + o * n.green(), i * this.blue() + o * n.blue()).alpha(this.alpha() * a + n.alpha() * (1 - a)) }, toJSON: function() { return this.rgb() }, clone: function() { var e, t, n = new U,
                            a = this.values,
                            r = n.values; for (var l in a) a.hasOwnProperty(l) && ("[object Array]" === (t = {}.toString.call(e = a[l])) ? r[l] = e.slice(0) : "[object Number]" === t ? r[l] = e : console.error("unexpected color value:", e)); return n } }, U.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, U.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, U.prototype.getValues = function(e) { for (var t = this.values, n = {}, a = 0; a < e.length; a++) n[e.charAt(a)] = t[e][a]; return 1 !== t.alpha && (n.a = t.alpha), n }, U.prototype.setValues = function(e, t) { var n, a, r = this.values,
                        l = this.spaces,
                        i = this.maxes,
                        o = 1; if (this.valid = !0, "alpha" === e) o = t;
                    else if (t.length) r[e] = t.slice(0, e.length), o = t[e.length];
                    else if (void 0 !== t[e.charAt(0)]) { for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                        o = t.a } else if (void 0 !== t[l[e][0]]) { var s = l[e]; for (n = 0; n < e.length; n++) r[e][n] = t[s[n]];
                        o = t.alpha } if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), "alpha" === e) return !1; for (n = 0; n < e.length; n++) a = Math.max(0, Math.min(i[e][n], r[e][n])), r[e][n] = Math.round(a); for (var u in l) u !== e && (r[u] = C[e][u](r[e])); return !0 }, U.prototype.setSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this) }, U.prototype.setChannel = function(e, t, n) { var a = this.values[e]; return void 0 === n ? a[t] : n === a[t] ? this : (a[t] = n, this.setValues(e, a), this) }, "undefined" != typeof window && (window.Color = U); var J, G = U,
                    q = { noop: function() {}, uid: (J = 0, function() { return J++ }), isNullOrUndef: function(e) { return null == e }, isArray: function(e) { if (Array.isArray && Array.isArray(e)) return !0; var t = Object.prototype.toString.call(e); return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6) }, isObject: function(e) { return null !== e && "[object Object]" === Object.prototype.toString.call(e) }, isFinite: function(e) { return ("number" == typeof e || e instanceof Number) && isFinite(e) }, valueOrDefault: function(e, t) { return void 0 === e ? t : e }, valueAtIndexOrDefault: function(e, t, n) { return q.valueOrDefault(q.isArray(e) ? e[t] : e, n) }, callback: function(e, t, n) { if (e && "function" == typeof e.call) return e.apply(n, t) }, each: function(e, t, n, a) { var r, l, i; if (q.isArray(e))
                                if (l = e.length, a)
                                    for (r = l - 1; r >= 0; r--) t.call(n, e[r], r);
                                else
                                    for (r = 0; r < l; r++) t.call(n, e[r], r);
                            else if (q.isObject(e))
                                for (l = (i = Object.keys(e)).length, r = 0; r < l; r++) t.call(n, e[i[r]], i[r]) }, arrayEquals: function(e, t) { var n, a, r, l; if (!e || !t || e.length !== t.length) return !1; for (n = 0, a = e.length; n < a; ++n)
                                if (l = t[n], (r = e[n]) instanceof Array && l instanceof Array) { if (!q.arrayEquals(r, l)) return !1 } else if (r !== l) return !1; return !0 }, clone: function(e) { if (q.isArray(e)) return e.map(q.clone); if (q.isObject(e)) { for (var t = {}, n = Object.keys(e), a = n.length, r = 0; r < a; ++r) t[n[r]] = q.clone(e[n[r]]); return t } return e }, _merger: function(e, t, n, a) { var r = t[e],
                                l = n[e];
                            q.isObject(r) && q.isObject(l) ? q.merge(r, l, a) : t[e] = q.clone(l) }, _mergerIf: function(e, t, n) { var a = t[e],
                                r = n[e];
                            q.isObject(a) && q.isObject(r) ? q.mergeIf(a, r) : t.hasOwnProperty(e) || (t[e] = q.clone(r)) }, merge: function(e, t, n) { var a, r, l, i, o, s = q.isArray(t) ? t : [t],
                                u = s.length; if (!q.isObject(e)) return e; for (a = (n = n || {}).merger || q._merger, r = 0; r < u; ++r)
                                if (q.isObject(t = s[r]))
                                    for (o = 0, i = (l = Object.keys(t)).length; o < i; ++o) a(l[o], e, t, n);
                            return e }, mergeIf: function(e, t) { return q.merge(e, t, { merger: q._mergerIf }) }, extend: function(e) { for (var t = function(t, n) { e[n] = t }, n = 1, a = arguments.length; n < a; ++n) q.each(arguments[n], t); return e }, inherits: function(e) { var t = this,
                                n = e && e.hasOwnProperty("constructor") ? e.constructor : function() { return t.apply(this, arguments) },
                                a = function() { this.constructor = n }; return a.prototype = t.prototype, n.prototype = new a, n.extend = q.inherits, e && q.extend(n.prototype, e), n.__super__ = t.prototype, n } },
                    $ = q;
                q.callCallback = q.callback, q.indexOf = function(e, t, n) { return Array.prototype.indexOf.call(e, t, n) }, q.getValueOrDefault = q.valueOrDefault, q.getValueAtIndexOrDefault = q.valueAtIndexOrDefault; var K = { linear: function(e) { return e }, easeInQuad: function(e) { return e * e }, easeOutQuad: function(e) { return -e * (e - 2) }, easeInOutQuad: function(e) { return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) }, easeInCubic: function(e) { return e * e * e }, easeOutCubic: function(e) { return (e -= 1) * e * e + 1 }, easeInOutCubic: function(e) { return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) }, easeInQuart: function(e) { return e * e * e * e }, easeOutQuart: function(e) { return -((e -= 1) * e * e * e - 1) }, easeInOutQuart: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) }, easeInQuint: function(e) { return e * e * e * e * e }, easeOutQuint: function(e) { return (e -= 1) * e * e * e * e + 1 }, easeInOutQuint: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) }, easeInSine: function(e) { return 1 - Math.cos(e * (Math.PI / 2)) }, easeOutSine: function(e) { return Math.sin(e * (Math.PI / 2)) }, easeInOutSine: function(e) { return -.5 * (Math.cos(Math.PI * e) - 1) }, easeInExpo: function(e) { return 0 === e ? 0 : Math.pow(2, 10 * (e - 1)) }, easeOutExpo: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) }, easeInOutExpo: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e)) }, easeInCirc: function(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1) }, easeOutCirc: function(e) { return Math.sqrt(1 - (e -= 1) * e) }, easeInOutCirc: function(e) { return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) }, easeInElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) }, easeOutElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1) }, easeInOutElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1) }, easeInBack: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) }, easeOutBack: function(e) { var t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 }, easeInOutBack: function(e) { var t = 1.70158; return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2) }, easeInBounce: function(e) { return 1 - K.easeOutBounce(1 - e) }, easeOutBounce: function(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 }, easeInOutBounce: function(e) { return e < .5 ? .5 * K.easeInBounce(2 * e) : .5 * K.easeOutBounce(2 * e - 1) + .5 } },
                    Z = { effects: K };
                $.easingEffects = K; var Q = Math.PI,
                    X = Q / 180,
                    ee = 2 * Q,
                    te = Q / 2,
                    ne = Q / 4,
                    ae = 2 * Q / 3,
                    re = { clear: function(e) { e.ctx.clearRect(0, 0, e.width, e.height) }, roundedRect: function(e, t, n, a, r, l) { if (l) { var i = Math.min(l, r / 2, a / 2),
                                    o = t + i,
                                    s = n + i,
                                    u = t + a - i,
                                    d = n + r - i;
                                e.moveTo(t, s), o < u && s < d ? (e.arc(o, s, i, -Q, -te), e.arc(u, s, i, -te, 0), e.arc(u, d, i, 0, te), e.arc(o, d, i, te, Q)) : o < u ? (e.moveTo(o, n), e.arc(u, s, i, -te, te), e.arc(o, s, i, te, Q + te)) : s < d ? (e.arc(o, s, i, -Q, 0), e.arc(o, d, i, 0, Q)) : e.arc(o, s, i, -Q, Q), e.closePath(), e.moveTo(t, n) } else e.rect(t, n, a, r) }, drawPoint: function(e, t, n, a, r, l) { var i, o, s, u, d, c = (l || 0) * X; if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (i = t.toString()) && "[object HTMLCanvasElement]" !== i) { if (!(isNaN(n) || n <= 0)) { switch (e.beginPath(), t) { default: e.arc(a, r, n, 0, ee), e.closePath(); break;
                                        case "triangle":
                                                e.moveTo(a + Math.sin(c) * n, r - Math.cos(c) * n), c += ae, e.lineTo(a + Math.sin(c) * n, r - Math.cos(c) * n), c += ae, e.lineTo(a + Math.sin(c) * n, r - Math.cos(c) * n), e.closePath(); break;
                                        case "rectRounded":
                                                u = n - (d = .516 * n), o = Math.cos(c + ne) * u, s = Math.sin(c + ne) * u, e.arc(a - o, r - s, d, c - Q, c - te), e.arc(a + s, r - o, d, c - te, c), e.arc(a + o, r + s, d, c, c + te), e.arc(a - s, r + o, d, c + te, c + Q), e.closePath(); break;
                                        case "rect":
                                                if (!l) { u = Math.SQRT1_2 * n, e.rect(a - u, r - u, 2 * u, 2 * u); break }c += ne;
                                        case "rectRot":
                                                o = Math.cos(c) * n, s = Math.sin(c) * n, e.moveTo(a - o, r - s), e.lineTo(a + s, r - o), e.lineTo(a + o, r + s), e.lineTo(a - s, r + o), e.closePath(); break;
                                        case "crossRot":
                                                c += ne;
                                        case "cross":
                                                o = Math.cos(c) * n, s = Math.sin(c) * n, e.moveTo(a - o, r - s), e.lineTo(a + o, r + s), e.moveTo(a + s, r - o), e.lineTo(a - s, r + o); break;
                                        case "star":
                                                o = Math.cos(c) * n, s = Math.sin(c) * n, e.moveTo(a - o, r - s), e.lineTo(a + o, r + s), e.moveTo(a + s, r - o), e.lineTo(a - s, r + o), c += ne, o = Math.cos(c) * n, s = Math.sin(c) * n, e.moveTo(a - o, r - s), e.lineTo(a + o, r + s), e.moveTo(a + s, r - o), e.lineTo(a - s, r + o); break;
                                        case "line":
                                                o = Math.cos(c) * n, s = Math.sin(c) * n, e.moveTo(a - o, r - s), e.lineTo(a + o, r + s); break;
                                        case "dash":
                                                e.moveTo(a, r), e.lineTo(a + Math.cos(c) * n, r + Math.sin(c) * n) }
                                    e.fill(), e.stroke() } } else e.drawImage(t, a - t.width / 2, r - t.height / 2, t.width, t.height) }, _isPointInArea: function(e, t) { return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6 }, clipArea: function(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() }, unclipArea: function(e) { e.restore() }, lineTo: function(e, t, n, a) { var r = n.steppedLine; if (r) { if ("middle" === r) { var l = (t.x + n.x) / 2;
                                    e.lineTo(l, a ? n.y : t.y), e.lineTo(l, a ? t.y : n.y) } else "after" === r && !a || "after" !== r && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
                                e.lineTo(n.x, n.y) } else n.tension ? e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y) } },
                    le = re;
                $.clear = re.clear, $.drawRoundedRectangle = function(e) { e.beginPath(), re.roundedRect.apply(re, arguments) }; var ie = { _set: function(e, t) { return $.merge(this[e] || (this[e] = {}), t) } };
                ie._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 }); var oe = ie,
                    se = $.valueOrDefault,
                    ue = { toLineHeight: function(e, t) { var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1]) return 1.2 * t; switch (e = +n[2], n[3]) {
                                case "px":
                                    return e;
                                case "%":
                                    e /= 100 } return t * e }, toPadding: function(e) { var t, n, a, r; return $.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, a = +e.bottom || 0, r = +e.left || 0) : t = n = a = r = +e || 0, { top: t, right: n, bottom: a, left: r, height: t + a, width: r + n } }, _parseFont: function(e) { var t = oe.global,
                                n = se(e.fontSize, t.defaultFontSize),
                                a = { family: se(e.fontFamily, t.defaultFontFamily), lineHeight: $.options.toLineHeight(se(e.lineHeight, t.defaultLineHeight), n), size: n, style: se(e.fontStyle, t.defaultFontStyle), weight: null, string: "" }; return a.string = function(e) { return !e || $.isNullOrUndef(e.size) || $.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }(a), a }, resolve: function(e, t, n) { var a, r, l; for (a = 0, r = e.length; a < r; ++a)
                                if (void 0 !== (l = e[a]) && (void 0 !== t && "function" == typeof l && (l = l(t)), void 0 !== n && $.isArray(l) && (l = l[n]), void 0 !== l)) return l } },
                    de = $,
                    ce = le,
                    he = ue;
                de.easing = Z, de.canvas = ce, de.options = he; var _e = function(e) { de.extend(this, e), this.initialize.apply(this, arguments) };
                de.extend(_e.prototype, { initialize: function() { this.hidden = !1 }, pivot: function() { var e = this; return e._view || (e._view = de.clone(e._model)), e._start = {}, e }, transition: function(e) { var t = this,
                            n = t._model,
                            a = t._start,
                            r = t._view; return n && 1 !== e ? (r || (r = t._view = {}), a || (a = t._start = {}), function(e, t, n, a) { var r, l, i, o, s, u, d, c, h, _ = Object.keys(n); for (r = 0, l = _.length; r < l; ++r)
                                if (u = n[i = _[r]], t.hasOwnProperty(i) || (t[i] = u), (o = t[i]) !== u && "_" !== i[0]) { if (e.hasOwnProperty(i) || (e[i] = o), (d = typeof u) == typeof(s = e[i]))
                                        if ("string" === d) { if ((c = G(s)).valid && (h = G(u)).valid) { t[i] = h.mix(c, a).rgbString(); continue } } else if (de.isFinite(s) && de.isFinite(u)) { t[i] = s + (u - s) * a; continue }
                                    t[i] = u } }(a, r, n, e), t) : (t._view = n, t._start = null, t) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return de.isNumber(this._model.x) && de.isNumber(this._model.y) } }), _e.extend = de.inherits; var me = _e,
                    fe = me.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
                    pe = fe;
                Object.defineProperty(fe.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(fe.prototype, "chartInstance", { get: function() { return this.chart }, set: function(e) { this.chart = e } }), oe._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: de.noop, onComplete: de.noop } }); var ge = { animations: [], request: null, addAnimation: function(e, t, n, a) { var r, l, i = this.animations; for (t.chart = e, t.startTime = Date.now(), t.duration = n, a || (e.animating = !0), r = 0, l = i.length; r < l; ++r)
                                if (i[r].chart === e) return void(i[r] = t);
                            i.push(t), 1 === i.length && this.requestAnimationFrame() }, cancelAnimation: function(e) { var t = de.findIndex(this.animations, function(t) { return t.chart === e }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1) }, requestAnimationFrame: function() { var e = this;
                            null === e.request && (e.request = de.requestAnimFrame.call(window, function() { e.request = null, e.startDigest() })) }, startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() }, advance: function() { for (var e, t, n, a, r = this.animations, l = 0; l < r.length;) t = (e = r[l]).chart, n = e.numSteps, a = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(a, n), de.callback(e.render, [t, e], t), de.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (de.callback(e.onAnimationComplete, [e], t), t.animating = !1, r.splice(l, 1)) : ++l } },
                    be = de.options.resolve,
                    ye = ["push", "pop", "shift", "splice", "unshift"];

                function Me(e, t) { var n = e._chartjs; if (n) { var a = n.listeners,
                            r = a.indexOf(t); - 1 !== r && a.splice(r, 1), a.length > 0 || (ye.forEach(function(t) { delete e[t] }), delete e._chartjs) } } var ve = function(e, t) { this.initialize(e, t) };
                de.extend(ve.prototype, { datasetElementType: null, dataElementType: null, initialize: function(e, t) { this.chart = e, this.index = t, this.linkScales(), this.addElements() }, updateIndex: function(e) { this.index = e }, linkScales: function() { var e = this,
                            t = e.getMeta(),
                            n = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(e) { return this.chart.scales[e] }, _getValueScaleId: function() { return this.getMeta().yAxisID }, _getIndexScaleId: function() { return this.getMeta().xAxisID }, _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) }, _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) }, reset: function() { this.update(!0) }, destroy: function() { this._data && Me(this._data, this) }, createMetaDataset: function() { var e = this.datasetElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(e) { var t = this.dataElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e }) }, addElements: function() { var e, t, n = this.getMeta(),
                            a = this.getDataset().data || [],
                            r = n.data; for (e = 0, t = a.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                        n.dataset = n.dataset || this.createMetaDataset() }, addElementAndReset: function(e) { var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0) }, buildOrUpdateElements: function() { var e, t, n = this,
                            a = n.getDataset(),
                            r = a.data || (a.data = []);
                        n._data !== r && (n._data && Me(n._data, n), r && Object.isExtensible(r) && (t = n, (e = r)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), ye.forEach(function(t) { var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                a = e[t];
                            Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: function() { var t = Array.prototype.slice.call(arguments),
                                        r = a.apply(this, t); return de.each(e._chartjs.listeners, function(e) { "function" == typeof e[n] && e[n].apply(e, t) }), r } }) }))), n._data = r), n.resyncElements() }, update: de.noop, transition: function(e) { for (var t = this.getMeta(), n = t.data || [], a = n.length, r = 0; r < a; ++r) n[r].transition(e);
                        t.dataset && t.dataset.transition(e) }, draw: function() { var e = this.getMeta(),
                            t = e.data || [],
                            n = t.length,
                            a = 0; for (e.dataset && e.dataset.draw(); a < n; ++a) t[a].draw() }, removeHoverStyle: function(e) { de.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle }, setHoverStyle: function(e) { var t = this.chart.data.datasets[e._datasetIndex],
                            n = e._index,
                            a = e.custom || {},
                            r = e._model,
                            l = de.getHoverColor;
                        e.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = be([a.hoverBackgroundColor, t.hoverBackgroundColor, l(r.backgroundColor)], void 0, n), r.borderColor = be([a.hoverBorderColor, t.hoverBorderColor, l(r.borderColor)], void 0, n), r.borderWidth = be([a.hoverBorderWidth, t.hoverBorderWidth, r.borderWidth], void 0, n) }, resyncElements: function() { var e = this.getMeta(),
                            t = this.getDataset().data,
                            n = e.data.length,
                            a = t.length;
                        a < n ? e.data.splice(a, n - a) : a > n && this.insertElements(n, a - n) }, insertElements: function(e, t) { for (var n = 0; n < t; ++n) this.addElementAndReset(e + n) }, onDataPush: function() { var e = arguments.length;
                        this.insertElements(this.getDataset().data.length - e, e) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), ve.extend = de.inherits; var Le = ve;
                oe._set("global", { elements: { arc: { backgroundColor: oe.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } }); var ke = me.extend({ inLabelRange: function(e) { var t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) }, inRange: function(e, t) { var n = this._view; if (n) { for (var a = de.getAngleFromPoint(n, { x: e, y: t }), r = a.angle, l = a.distance, i = n.startAngle, o = n.endAngle; o < i;) o += 2 * Math.PI; for (; r > o;) r -= 2 * Math.PI; for (; r < i;) r += 2 * Math.PI; return r >= i && r <= o && l >= n.innerRadius && l <= n.outerRadius } return !1 }, getCenterPoint: function() { var e = this._view,
                                t = (e.startAngle + e.endAngle) / 2,
                                n = (e.innerRadius + e.outerRadius) / 2; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, getArea: function() { var e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)) }, tooltipPosition: function() { var e = this._view,
                                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                                n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, draw: function() { var e, t = this._chart.ctx,
                                n = this._view,
                                a = n.startAngle,
                                r = n.endAngle,
                                l = "inner" === n.borderAlign ? .33 : 0;
                            t.save(), t.beginPath(), t.arc(n.x, n.y, Math.max(n.outerRadius - l, 0), a, r), t.arc(n.x, n.y, n.innerRadius, r, a, !0), t.closePath(), t.fillStyle = n.backgroundColor, t.fill(), n.borderWidth && ("inner" === n.borderAlign ? (t.beginPath(), t.arc(n.x, n.y, n.outerRadius, a - (e = l / n.outerRadius), r + e), n.innerRadius > l ? t.arc(n.x, n.y, n.innerRadius - l, r + (e = l / n.innerRadius), a - e, !0) : t.arc(n.x, n.y, l, r + Math.PI / 2, a - Math.PI / 2), t.closePath(), t.clip(), t.beginPath(), t.arc(n.x, n.y, n.outerRadius, a, r), t.arc(n.x, n.y, n.innerRadius, r, a, !0), t.closePath(), t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), t.strokeStyle = n.borderColor, t.stroke()), t.restore() } }),
                    Ye = de.valueOrDefault,
                    De = oe.global.defaultColor;
                oe._set("global", { elements: { line: { tension: .4, backgroundColor: De, borderWidth: 3, borderColor: De, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }); var we = me.extend({ draw: function() { var e, t, n, a, r = this._view,
                                l = this._chart.ctx,
                                i = r.spanGaps,
                                o = this._children.slice(),
                                s = oe.global,
                                u = s.elements.line,
                                d = -1; for (this._loop && o.length && o.push(o[0]), l.save(), l.lineCap = r.borderCapStyle || u.borderCapStyle, l.setLineDash && l.setLineDash(r.borderDash || u.borderDash), l.lineDashOffset = Ye(r.borderDashOffset, u.borderDashOffset), l.lineJoin = r.borderJoinStyle || u.borderJoinStyle, l.lineWidth = Ye(r.borderWidth, u.borderWidth), l.strokeStyle = r.borderColor || s.defaultColor, l.beginPath(), d = -1, e = 0; e < o.length; ++e) t = o[e], n = de.previousItem(o, e), a = t._view, 0 === e ? a.skip || (l.moveTo(a.x, a.y), d = e) : (n = -1 === d ? n : o[d], a.skip || (d !== e - 1 && !i || -1 === d ? l.moveTo(a.x, a.y) : de.canvas.lineTo(l, n._view, t._view), d = e));
                            l.stroke(), l.restore() } }),
                    xe = de.valueOrDefault,
                    Te = oe.global.defaultColor;

                function Se(e) { var t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius }
                oe._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: Te, borderColor: Te, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }); var He = me.extend({ inRange: function(e, t) { var n = this._view; return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) }, inLabelRange: Se, inXRange: Se, inYRange: function(e) { var t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius }, getCenterPoint: function() { var e = this._view; return { x: e.x, y: e.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth } }, draw: function(e) { var t = this._view,
                                n = this._chart.ctx,
                                a = t.pointStyle,
                                r = t.rotation,
                                l = t.radius,
                                i = t.x,
                                o = t.y,
                                s = oe.global,
                                u = s.defaultColor;
                            t.skip || (void 0 === e || de.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || u, n.lineWidth = xe(t.borderWidth, s.elements.point.borderWidth), n.fillStyle = t.backgroundColor || u, de.canvas.drawPoint(n, a, l, i, o, r)) } }),
                    je = oe.global.defaultColor;

                function Ce(e) { return e && void 0 !== e.width }

                function Oe(e) { var t, n, a, r, l; return Ce(e) ? (t = e.x - (l = e.width / 2), n = e.x + l, a = Math.min(e.y, e.base), r = Math.max(e.y, e.base)) : (l = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), a = e.y - l, r = e.y + l), { left: t, top: a, right: n, bottom: r } }

                function Pe(e, t, n) { return e === t ? n : e === n ? t : e }

                function Ae(e, t, n) { var a = null === t,
                        r = null === n,
                        l = !(!e || a && r) && Oe(e); return l && (a || t >= l.left && t <= l.right) && (r || n >= l.top && n <= l.bottom) }
                oe._set("global", { elements: { rectangle: { backgroundColor: je, borderColor: je, borderSkipped: "bottom", borderWidth: 0 } } }); var Ee = me.extend({ draw: function() { var e = this._chart.ctx,
                                t = this._view,
                                n = function(e) { var t = Oe(e),
                                        n = t.right - t.left,
                                        a = t.bottom - t.top,
                                        r = function(e, t, n) { var a, r, l, i, o = e.borderWidth,
                                                s = function(e) { var t = e.borderSkipped,
                                                        n = {}; return t ? (e.horizontal ? e.base > e.x && (t = Pe(t, "left", "right")) : e.base < e.y && (t = Pe(t, "bottom", "top")), n[t] = !0, n) : n }(e); return de.isObject(o) ? (a = +o.top || 0, r = +o.right || 0, l = +o.bottom || 0, i = +o.left || 0) : a = r = l = i = +o || 0, { t: s.top || a < 0 ? 0 : a > n ? n : a, r: s.right || r < 0 ? 0 : r > t ? t : r, b: s.bottom || l < 0 ? 0 : l > n ? n : l, l: s.left || i < 0 ? 0 : i > t ? t : i } }(e, n / 2, a / 2); return { outer: { x: t.left, y: t.top, w: n, h: a }, inner: { x: t.left + r.l, y: t.top + r.t, w: n - r.l - r.r, h: a - r.t - r.b } } }(t),
                                a = n.outer,
                                r = n.inner;
                            e.fillStyle = t.backgroundColor, e.fillRect(a.x, a.y, a.w, a.h), a.w === r.w && a.h === r.h || (e.save(), e.beginPath(), e.rect(a.x, a.y, a.w, a.h), e.clip(), e.fillStyle = t.borderColor, e.rect(r.x, r.y, r.w, r.h), e.fill("evenodd"), e.restore()) }, height: function() { var e = this._view; return e.base - e.y }, inRange: function(e, t) { return Ae(this._view, e, t) }, inLabelRange: function(e, t) { var n = this._view; return Ce(n) ? Ae(n, e, null) : Ae(n, null, t) }, inXRange: function(e) { return Ae(this._view, e, null) }, inYRange: function(e) { return Ae(this._view, null, e) }, getCenterPoint: function() { var e, t, n = this._view; return Ce(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), { x: e, y: t } }, getArea: function() { var e = this._view; return Ce(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y } } }),
                    We = {},
                    Fe = we,
                    Ie = He,
                    Re = Ee;
                We.Arc = ke, We.Line = Fe, We.Point = Ie, We.Rectangle = Re; var ze = de.options.resolve;
                oe._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }); var Ne = Le.extend({ dataElementType: We.Rectangle, initialize: function() { var e;
                            Le.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0 }, update: function(e) { var t, n, a = this.getMeta().data; for (this._ruler = this.getRuler(), t = 0, n = a.length; t < n; ++t) this.updateElement(a[t], t, e) }, updateElement: function(e, t, n) { var a = this,
                                r = a.getMeta(),
                                l = a.getDataset(),
                                i = a._resolveElementOptions(e, t);
                            e._xScale = a.getScaleForId(r.xAxisID), e._yScale = a.getScaleForId(r.yAxisID), e._datasetIndex = a.index, e._index = t, e._model = { backgroundColor: i.backgroundColor, borderColor: i.borderColor, borderSkipped: i.borderSkipped, borderWidth: i.borderWidth, datasetLabel: l.label, label: a.chart.data.labels[t] }, a._updateElementGeometry(e, t, n), e.pivot() }, _updateElementGeometry: function(e, t, n) { var a = this,
                                r = e._model,
                                l = a._getValueScale(),
                                i = l.getBasePixel(),
                                o = l.isHorizontal(),
                                s = a._ruler || a.getRuler(),
                                u = a.calculateBarValuePixels(a.index, t),
                                d = a.calculateBarIndexPixels(a.index, t, s);
                            r.horizontal = o, r.base = n ? i : u.base, r.x = o ? n ? i : u.head : d.center, r.y = o ? d.center : n ? i : u.head, r.height = o ? d.size : void 0, r.width = o ? void 0 : d.size }, _getStacks: function(e) { var t, n, a = this.chart,
                                r = this._getIndexScale().options.stacked,
                                l = void 0 === e ? a.data.datasets.length : e + 1,
                                i = []; for (t = 0; t < l; ++t)(n = a.getDatasetMeta(t)).bar && a.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === i.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === i.indexOf(n.stack))) && i.push(n.stack); return i }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(e, t) { var n = this._getStacks(e),
                                a = void 0 !== t ? n.indexOf(t) : -1; return -1 === a ? n.length - 1 : a }, getRuler: function() { var e, t, n = this._getIndexScale(),
                                a = this.getStackCount(),
                                r = this.index,
                                l = n.isHorizontal(),
                                i = l ? n.left : n.top,
                                o = i + (l ? n.width : n.height),
                                s = []; for (e = 0, t = this.getMeta().data.length; e < t; ++e) s.push(n.getPixelForValue(null, e, r)); return { min: de.isNullOrUndef(n.options.barThickness) ? function(e, t) { var n, a, r, l, i = e.isHorizontal() ? e.width : e.height,
                                        o = e.getTicks(); for (r = 1, l = t.length; r < l; ++r) i = Math.min(i, Math.abs(t[r] - t[r - 1])); for (r = 0, l = o.length; r < l; ++r) a = e.getPixelForTick(r), i = r > 0 ? Math.min(i, a - n) : i, n = a; return i }(n, s) : -1, pixels: s, start: i, end: o, stackCount: a, scale: n } }, calculateBarValuePixels: function(e, t) { var n, a, r, l, i, o, s = this.chart,
                                u = this.getMeta(),
                                d = this._getValueScale(),
                                c = d.isHorizontal(),
                                h = s.data.datasets,
                                _ = +d.getRightValue(h[e].data[t]),
                                m = d.options.minBarLength,
                                f = d.options.stacked,
                                p = u.stack,
                                g = 0; if (f || void 0 === f && void 0 !== p)
                                for (n = 0; n < e; ++n)(a = s.getDatasetMeta(n)).bar && a.stack === p && a.controller._getValueScaleId() === d.id && s.isDatasetVisible(n) && (r = +d.getRightValue(h[n].data[t]), (_ < 0 && r < 0 || _ >= 0 && r > 0) && (g += r)); return l = d.getPixelForValue(g), o = (i = d.getPixelForValue(g + _)) - l, void 0 !== m && Math.abs(o) < m && (o = m, i = _ >= 0 && !c || _ < 0 && c ? l - m : l + m), { size: o, base: l, head: i, center: i + o / 2 } }, calculateBarIndexPixels: function(e, t, n) { var a = n.scale.options,
                                r = "flex" === a.barThickness ? function(e, t, n) { var a, r = t.pixels,
                                        l = r[e],
                                        i = e > 0 ? r[e - 1] : null,
                                        o = e < r.length - 1 ? r[e + 1] : null,
                                        s = n.categoryPercentage; return null === i && (i = l - (null === o ? t.end - t.start : o - l)), null === o && (o = l + l - i), a = l - (l - Math.min(i, o)) / 2 * s, { chunk: Math.abs(o - i) / 2 * s / t.stackCount, ratio: n.barPercentage, start: a } }(t, n, a) : function(e, t, n) { var a, r, l = n.barThickness,
                                        i = t.stackCount,
                                        o = t.pixels[e]; return de.isNullOrUndef(l) ? (a = t.min * n.categoryPercentage, r = n.barPercentage) : (a = l * i, r = 1), { chunk: a / i, ratio: r, start: o - a / 2 } }(t, n, a),
                                l = this.getStackIndex(e, this.getMeta().stack),
                                i = r.start + r.chunk * l + r.chunk / 2,
                                o = Math.min(de.valueOrDefault(a.maxBarThickness, 1 / 0), r.chunk * r.ratio); return { base: i - o / 2, head: i + o / 2, center: i, size: o } }, draw: function() { var e = this.chart,
                                t = this._getValueScale(),
                                n = this.getMeta().data,
                                a = this.getDataset(),
                                r = n.length,
                                l = 0; for (de.canvas.clipArea(e.ctx, e.chartArea); l < r; ++l) isNaN(t.getRightValue(a.data[l])) || n[l].draw();
                            de.canvas.unclipArea(e.ctx) }, _resolveElementOptions: function(e, t) { var n, a, r, l = this.chart,
                                i = l.data.datasets[this.index],
                                o = e.custom || {},
                                s = l.options.elements.rectangle,
                                u = {},
                                d = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                                c = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"]; for (n = 0, a = c.length; n < a; ++n) u[r = c[n]] = ze([o[r], i[r], s[r]], d, t); return u } }),
                    Be = de.valueOrDefault,
                    Ve = de.options.resolve;
                oe._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return (t.datasets[e.datasetIndex].label || "") + ": (" + e.xLabel + ", " + e.yLabel + ", " + t.datasets[e.datasetIndex].data[e.index].r + ")" } } } }); var Ue = Le.extend({ dataElementType: We.Point, update: function(e) { var t = this,
                                n = t.getMeta();
                            de.each(n.data, function(n, a) { t.updateElement(n, a, e) }) }, updateElement: function(e, t, n) { var a = this,
                                r = a.getMeta(),
                                l = e.custom || {},
                                i = a.getScaleForId(r.xAxisID),
                                o = a.getScaleForId(r.yAxisID),
                                s = a._resolveElementOptions(e, t),
                                u = a.getDataset().data[t],
                                d = a.index,
                                c = n ? i.getPixelForDecimal(.5) : i.getPixelForValue("object" == typeof u ? u : NaN, t, d),
                                h = n ? o.getBasePixel() : o.getPixelForValue(u, t, d);
                            e._xScale = i, e._yScale = o, e._options = s, e._datasetIndex = d, e._index = t, e._model = { backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderWidth: s.borderWidth, hitRadius: s.hitRadius, pointStyle: s.pointStyle, rotation: s.rotation, radius: n ? 0 : s.radius, skip: l.skip || isNaN(c) || isNaN(h), x: c, y: h }, e.pivot() }, setHoverStyle: function(e) { var t = e._model,
                                n = e._options,
                                a = de.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Be(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Be(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Be(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius }, _resolveElementOptions: function(e, t) { var n, a, r, l = this.chart,
                                i = l.data.datasets[this.index],
                                o = e.custom || {},
                                s = l.options.elements.point,
                                u = i.data[t],
                                d = {},
                                c = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                                h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"]; for (n = 0, a = h.length; n < a; ++n) d[r = h[n]] = Ve([o[r], i[r], s[r]], c, t); return d.radius = Ve([o.radius, u ? u.r : void 0, i.radius, s.radius], c, t), d } }),
                    Je = de.options.resolve,
                    Ge = de.valueOrDefault;
                oe._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                            a = n.datasets,
                            r = n.labels; if (a.length)
                            for (var l = 0; l < a[0].data.length; ++l) t.push('<li><span style="background-color:' + a[0].backgroundColor[l] + '"></span>'), r[l] && t.push(r[l]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) { var r = e.getDatasetMeta(0),
                                        l = t.datasets[0],
                                        i = r.data[a],
                                        o = i && i.custom || {},
                                        s = e.options.elements.arc; return { text: n, fillStyle: Je([o.backgroundColor, l.backgroundColor, s.backgroundColor], void 0, a), strokeStyle: Je([o.borderColor, l.borderColor, s.borderColor], void 0, a), lineWidth: Je([o.borderWidth, l.borderWidth, s.borderWidth], void 0, a), hidden: isNaN(l.data[a]) || r.data[a].hidden, index: a } }) : [] } }, onClick: function(e, t) { var n, a, r, l = t.index,
                                i = this.chart; for (n = 0, a = (i.data.datasets || []).length; n < a; ++n)(r = i.getDatasetMeta(n)).data[l] && (r.data[l].hidden = !r.data[l].hidden);
                            i.update() } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { var n = t.labels[e.index],
                                    a = ": " + t.datasets[e.datasetIndex].data[e.index]; return de.isArray(n) ? (n = n.slice())[0] += a : n += a, n } } } }); var qe = Le.extend({ dataElementType: We.Arc, linkScales: de.noop, getRingIndex: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t; return t }, update: function(e) { var t, n, a = this,
                            r = a.chart,
                            l = r.chartArea,
                            i = r.options,
                            o = l.right - l.left,
                            s = l.bottom - l.top,
                            u = Math.min(o, s),
                            d = { x: 0, y: 0 },
                            c = a.getMeta(),
                            h = c.data,
                            _ = i.cutoutPercentage,
                            m = i.circumference,
                            f = a._getRingWeight(a.index); if (m < 2 * Math.PI) { var p = i.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + m,
                                b = { x: Math.cos(p), y: Math.sin(p) },
                                y = { x: Math.cos(g), y: Math.sin(g) },
                                M = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                v = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                L = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                k = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                Y = _ / 100,
                                D = { x: L ? -1 : Math.min(b.x * (b.x < 0 ? 1 : Y), y.x * (y.x < 0 ? 1 : Y)), y: k ? -1 : Math.min(b.y * (b.y < 0 ? 1 : Y), y.y * (y.y < 0 ? 1 : Y)) },
                                w = { x: M ? 1 : Math.max(b.x * (b.x > 0 ? 1 : Y), y.x * (y.x > 0 ? 1 : Y)), y: v ? 1 : Math.max(b.y * (b.y > 0 ? 1 : Y), y.y * (y.y > 0 ? 1 : Y)) },
                                x = { width: .5 * (w.x - D.x), height: .5 * (w.y - D.y) };
                            u = Math.min(o / x.width, s / x.height), d = { x: -.5 * (w.x + D.x), y: -.5 * (w.y + D.y) } } for (t = 0, n = h.length; t < n; ++t) h[t]._options = a._resolveElementOptions(h[t], t); for (r.borderWidth = a.getMaxBorderWidth(), r.outerRadius = Math.max((u - r.borderWidth) / 2, 0), r.innerRadius = Math.max(_ ? r.outerRadius / 100 * _ : 0, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), r.offsetX = d.x * r.outerRadius, r.offsetY = d.y * r.outerRadius, c.total = a.calculateTotal(), a.outerRadius = r.outerRadius - r.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - r.radiusLength * f, 0), t = 0, n = h.length; t < n; ++t) a.updateElement(h[t], t, e) }, updateElement: function(e, t, n) { var a = this,
                            r = a.chart,
                            l = r.chartArea,
                            i = r.options,
                            o = i.animation,
                            s = (l.left + l.right) / 2,
                            u = (l.top + l.bottom) / 2,
                            d = i.rotation,
                            c = i.rotation,
                            h = a.getDataset(),
                            _ = n && o.animateRotate ? 0 : e.hidden ? 0 : a.calculateCircumference(h.data[t]) * (i.circumference / (2 * Math.PI)),
                            m = e._options || {};
                        de.extend(e, { _datasetIndex: a.index, _index: t, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: s + r.offsetX, y: u + r.offsetY, startAngle: d, endAngle: c, circumference: _, outerRadius: n && o.animateScale ? 0 : a.outerRadius, innerRadius: n && o.animateScale ? 0 : a.innerRadius, label: de.valueAtIndexOrDefault(h.label, t, r.data.labels[t]) } }); var f = e._model;
                        n && o.animateRotate || (f.startAngle = 0 === t ? i.rotation : a.getMeta().data[t - 1]._model.endAngle, f.endAngle = f.startAngle + f.circumference), e.pivot() }, calculateTotal: function() { var e, t = this.getDataset(),
                            n = this.getMeta(),
                            a = 0; return de.each(n.data, function(n, r) { e = t.data[r], isNaN(e) || n.hidden || (a += Math.abs(e)) }), a }, calculateCircumference: function(e) { var t = this.getMeta().total; return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0 }, getMaxBorderWidth: function(e) { var t, n, a, r, l, i, o, s, u = 0,
                            d = this.chart; if (!e)
                            for (t = 0, n = d.data.datasets.length; t < n; ++t)
                                if (d.isDatasetVisible(t)) { e = (a = d.getDatasetMeta(t)).data, t !== this.index && (l = a.controller); break }
                        if (!e) return 0; for (t = 0, n = e.length; t < n; ++t) r = e[t], "inner" !== (i = l ? l._resolveElementOptions(r, t) : r._options).borderAlign && (u = (s = i.hoverBorderWidth) > (u = (o = i.borderWidth) > u ? o : u) ? s : u); return u }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = de.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = Ge(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ge(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ge(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, a, r, l = this.chart,
                            i = this.getDataset(),
                            o = e.custom || {},
                            s = l.options.elements.arc,
                            u = {},
                            d = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                            c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, a = c.length; n < a; ++n) u[r = c[n]] = Je([o[r], i[r], s[r]], d, t); return u }, _getRingWeightOffset: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n)); return t }, _getRingWeight: function(e) { return Math.max(Ge(this.chart.data.datasets[e].weight, 1), 0) }, _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) } });
                oe._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }); var $e = Ne.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
                    Ke = de.valueOrDefault,
                    Ze = de.options.resolve,
                    Qe = de.canvas._isPointInArea;

                function Xe(e, t) { return Ke(e.showLine, t.showLines) }
                oe._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }); var et = Le.extend({ datasetElementType: We.Line, dataElementType: We.Point, update: function(e) { var t, n, a = this,
                                r = a.getMeta(),
                                l = r.dataset,
                                i = r.data || [],
                                o = a.getScaleForId(r.yAxisID),
                                s = a.getDataset(),
                                u = Xe(s, a.chart.options); for (u && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), l._scale = o, l._datasetIndex = a.index, l._children = i, l._model = a._resolveLineOptions(l), l.pivot()), t = 0, n = i.length; t < n; ++t) a.updateElement(i[t], t, e); for (u && 0 !== l._model.tension && a.updateBezierControlPoints(), t = 0, n = i.length; t < n; ++t) i[t].pivot() }, updateElement: function(e, t, n) { var a, r, l = this,
                                i = l.getMeta(),
                                o = e.custom || {},
                                s = l.getDataset(),
                                u = l.index,
                                d = s.data[t],
                                c = l.getScaleForId(i.yAxisID),
                                h = l.getScaleForId(i.xAxisID),
                                _ = i.dataset._model,
                                m = l._resolvePointOptions(e, t);
                            a = h.getPixelForValue("object" == typeof d ? d : NaN, t, u), r = n ? c.getBasePixel() : l.calculatePointY(d, t, u), e._xScale = h, e._yScale = c, e._options = m, e._datasetIndex = u, e._index = t, e._model = { x: a, y: r, skip: o.skip || isNaN(a) || isNaN(r), radius: m.radius, pointStyle: m.pointStyle, rotation: m.rotation, backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, tension: Ke(o.tension, _ ? _.tension : 0), steppedLine: !!_ && _.steppedLine, hitRadius: m.hitRadius } }, _resolvePointOptions: function(e, t) { var n, a, r, l = this.chart,
                                i = l.data.datasets[this.index],
                                o = e.custom || {},
                                s = l.options.elements.point,
                                u = {},
                                d = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                                c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                                h = Object.keys(c); for (n = 0, a = h.length; n < a; ++n) u[r = h[n]] = Ze([o[r], i[c[r]], i[r], s[r]], d, t); return u }, _resolveLineOptions: function(e) { var t, n, a, r = this.chart,
                                l = r.data.datasets[this.index],
                                i = e.custom || {},
                                o = r.options,
                                s = o.elements.line,
                                u = {},
                                d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"]; for (t = 0, n = d.length; t < n; ++t) u[a = d[t]] = Ze([i[a], l[a], s[a]]); return u.spanGaps = Ke(l.spanGaps, o.spanGaps), u.tension = Ke(l.lineTension, s.tension), u.steppedLine = Ze([i.steppedLine, l.steppedLine, s.stepped]), u }, calculatePointY: function(e, t, n) { var a, r, l, i = this.chart,
                                o = this.getMeta(),
                                s = this.getScaleForId(o.yAxisID),
                                u = 0,
                                d = 0; if (s.options.stacked) { for (a = 0; a < n; a++)
                                    if (r = i.data.datasets[a], "line" === (l = i.getDatasetMeta(a)).type && l.yAxisID === s.id && i.isDatasetVisible(a)) { var c = Number(s.getRightValue(r.data[t]));
                                        c < 0 ? d += c || 0 : u += c || 0 }
                                var h = Number(s.getRightValue(e)); return s.getPixelForValue(h < 0 ? d + h : u + h) } return s.getPixelForValue(e) }, updateBezierControlPoints: function() { var e, t, n, a, r = this.chart,
                                l = this.getMeta(),
                                i = l.dataset._model,
                                o = r.chartArea,
                                s = l.data || [];

                            function u(e, t, n) { return Math.max(Math.min(e, n), t) } if (i.spanGaps && (s = s.filter(function(e) { return !e._model.skip })), "monotone" === i.cubicInterpolationMode) de.splineCurveMonotone(s);
                            else
                                for (e = 0, t = s.length; e < t; ++e) n = s[e]._model, a = de.splineCurve(de.previousItem(s, e)._model, n, de.nextItem(s, e)._model, i.tension), n.controlPointPreviousX = a.previous.x, n.controlPointPreviousY = a.previous.y, n.controlPointNextX = a.next.x, n.controlPointNextY = a.next.y; if (r.options.elements.line.capBezierPoints)
                                for (e = 0, t = s.length; e < t; ++e) Qe(n = s[e]._model, o) && (e > 0 && Qe(s[e - 1]._model, o) && (n.controlPointPreviousX = u(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = u(n.controlPointPreviousY, o.top, o.bottom)), e < s.length - 1 && Qe(s[e + 1]._model, o) && (n.controlPointNextX = u(n.controlPointNextX, o.left, o.right), n.controlPointNextY = u(n.controlPointNextY, o.top, o.bottom))) }, draw: function() { var e, t = this.chart,
                                n = this.getMeta(),
                                a = n.data || [],
                                r = t.chartArea,
                                l = a.length,
                                i = 0; for (Xe(this.getDataset(), t.options) && (de.canvas.clipArea(t.ctx, { left: r.left, right: r.right, top: r.top - (e = (n.dataset._model.borderWidth || 0) / 2), bottom: r.bottom + e }), n.dataset.draw(), de.canvas.unclipArea(t.ctx)); i < l; ++i) a[i].draw(r) }, setHoverStyle: function(e) { var t = e._model,
                                n = e._options,
                                a = de.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Ke(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ke(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ke(n.hoverBorderWidth, n.borderWidth), t.radius = Ke(n.hoverRadius, n.radius) } }),
                    tt = de.options.resolve;
                oe._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                            a = n.datasets,
                            r = n.labels; if (a.length)
                            for (var l = 0; l < a[0].data.length; ++l) t.push('<li><span style="background-color:' + a[0].backgroundColor[l] + '"></span>'), r[l] && t.push(r[l]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) { var r = e.getDatasetMeta(0),
                                        l = t.datasets[0],
                                        i = r.data[a].custom || {},
                                        o = e.options.elements.arc; return { text: n, fillStyle: tt([i.backgroundColor, l.backgroundColor, o.backgroundColor], void 0, a), strokeStyle: tt([i.borderColor, l.borderColor, o.borderColor], void 0, a), lineWidth: tt([i.borderWidth, l.borderWidth, o.borderWidth], void 0, a), hidden: isNaN(l.data[a]) || r.data[a].hidden, index: a } }) : [] } }, onClick: function(e, t) { var n, a, r, l = t.index,
                                i = this.chart; for (n = 0, a = (i.data.datasets || []).length; n < a; ++n)(r = i.getDatasetMeta(n)).data[l].hidden = !r.data[l].hidden;
                            i.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return t.labels[e.index] + ": " + e.yLabel } } } }); var nt = Le.extend({ dataElementType: We.Arc, linkScales: de.noop, update: function(e) { var t, n, a, r = this,
                            l = r.getDataset(),
                            i = r.getMeta(),
                            o = r.chart.options.startAngle || 0,
                            s = r._starts = [],
                            u = r._angles = [],
                            d = i.data; for (r._updateRadius(), i.count = r.countVisibleElements(), t = 0, n = l.data.length; t < n; t++) s[t] = o, a = r._computeAngle(t), u[t] = a, o += a; for (t = 0, n = d.length; t < n; ++t) d[t]._options = r._resolveElementOptions(d[t], t), r.updateElement(d[t], t, e) }, _updateRadius: function() { var e = this,
                            t = e.chart,
                            n = t.chartArea,
                            a = t.options,
                            r = Math.min(n.right - n.left, n.bottom - n.top);
                        t.outerRadius = Math.max(r / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength }, updateElement: function(e, t, n) { var a = this,
                            r = a.chart,
                            l = a.getDataset(),
                            i = r.options,
                            o = i.animation,
                            s = r.scale,
                            u = r.data.labels,
                            d = s.xCenter,
                            c = s.yCenter,
                            h = i.startAngle,
                            _ = e.hidden ? 0 : s.getDistanceFromCenterForValue(l.data[t]),
                            m = a._starts[t],
                            f = m + (e.hidden ? 0 : a._angles[t]),
                            p = o.animateScale ? 0 : s.getDistanceFromCenterForValue(l.data[t]),
                            g = e._options || {};
                        de.extend(e, { _datasetIndex: a.index, _index: t, _scale: s, _model: { backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, borderAlign: g.borderAlign, x: d, y: c, innerRadius: 0, outerRadius: n ? p : _, startAngle: n && o.animateRotate ? h : m, endAngle: n && o.animateRotate ? h : f, label: de.valueAtIndexOrDefault(u, t, u[t]) } }), e.pivot() }, countVisibleElements: function() { var e = this.getDataset(),
                            t = this.getMeta(),
                            n = 0; return de.each(t.data, function(t, a) { isNaN(e.data[a]) || t.hidden || n++ }), n }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = de.getHoverColor,
                            r = de.valueOrDefault;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = r(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = r(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = r(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, a, r, l = this.chart,
                            i = this.getDataset(),
                            o = e.custom || {},
                            s = l.options.elements.arc,
                            u = {},
                            d = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                            c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, a = c.length; n < a; ++n) u[r = c[n]] = tt([o[r], i[r], s[r]], d, t); return u }, _computeAngle: function(e) { var t = this,
                            n = this.getMeta().count,
                            a = t.getDataset(),
                            r = t.getMeta(); return isNaN(a.data[e]) || r.data[e].hidden ? 0 : tt([t.chart.options.elements.arc.angle, 2 * Math.PI / n], { chart: t.chart, dataIndex: e, dataset: a, datasetIndex: t.index }, e) } });
                oe._set("pie", de.clone(oe.doughnut)), oe._set("pie", { cutoutPercentage: 0 }); var at = qe,
                    rt = de.valueOrDefault,
                    lt = de.options.resolve;
                oe._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }); var it = Le.extend({ datasetElementType: We.Line, dataElementType: We.Point, linkScales: de.noop, update: function(e) { var t, n, a = this,
                            r = a.getMeta(),
                            l = r.dataset,
                            i = r.data || [],
                            o = a.chart.scale,
                            s = a.getDataset(); for (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), l._scale = o, l._datasetIndex = a.index, l._children = i, l._loop = !0, l._model = a._resolveLineOptions(l), l.pivot(), t = 0, n = i.length; t < n; ++t) a.updateElement(i[t], t, e); for (a.updateBezierControlPoints(), t = 0, n = i.length; t < n; ++t) i[t].pivot() }, updateElement: function(e, t, n) { var a = this,
                            r = e.custom || {},
                            l = a.getDataset(),
                            i = a.chart.scale,
                            o = i.getPointPositionForValue(t, l.data[t]),
                            s = a._resolvePointOptions(e, t),
                            u = a.getMeta().dataset._model,
                            d = n ? i.xCenter : o.x,
                            c = n ? i.yCenter : o.y;
                        e._scale = i, e._options = s, e._datasetIndex = a.index, e._index = t, e._model = { x: d, y: c, skip: r.skip || isNaN(d) || isNaN(c), radius: s.radius, pointStyle: s.pointStyle, rotation: s.rotation, backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderWidth: s.borderWidth, tension: rt(r.tension, u ? u.tension : 0), hitRadius: s.hitRadius } }, _resolvePointOptions: function(e, t) { var n, a, r, l = this.chart,
                            i = l.data.datasets[this.index],
                            o = e.custom || {},
                            s = l.options.elements.point,
                            u = {},
                            d = { chart: l, dataIndex: t, dataset: i, datasetIndex: this.index },
                            c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                            h = Object.keys(c); for (n = 0, a = h.length; n < a; ++n) u[r = h[n]] = lt([o[r], i[c[r]], i[r], s[r]], d, t); return u }, _resolveLineOptions: function(e) { var t, n, a, r = this.chart,
                            l = r.data.datasets[this.index],
                            i = e.custom || {},
                            o = r.options.elements.line,
                            s = {},
                            u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"]; for (t = 0, n = u.length; t < n; ++t) s[a = u[t]] = lt([i[a], l[a], o[a]]); return s.tension = rt(l.lineTension, o.tension), s }, updateBezierControlPoints: function() { var e, t, n, a, r = this.getMeta(),
                            l = this.chart.chartArea,
                            i = r.data || [];

                        function o(e, t, n) { return Math.max(Math.min(e, n), t) } for (e = 0, t = i.length; e < t; ++e) n = i[e]._model, a = de.splineCurve(de.previousItem(i, e, !0)._model, n, de.nextItem(i, e, !0)._model, n.tension), n.controlPointPreviousX = o(a.previous.x, l.left, l.right), n.controlPointPreviousY = o(a.previous.y, l.top, l.bottom), n.controlPointNextX = o(a.next.x, l.left, l.right), n.controlPointNextY = o(a.next.y, l.top, l.bottom) }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = de.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = rt(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = rt(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = rt(n.hoverBorderWidth, n.borderWidth), t.radius = rt(n.hoverRadius, n.radius) } });
                oe._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function() { return "" }, label: function(e) { return "(" + e.xLabel + ", " + e.yLabel + ")" } } } }); var ot = { bar: Ne, bubble: Ue, doughnut: qe, horizontalBar: $e, line: et, polarArea: nt, pie: at, radar: it, scatter: et };

                function st(e, t) { return e.native ? { x: e.x, y: e.y } : de.getRelativePosition(e, t) }

                function ut(e, t) { var n, a, r, l, i; for (a = 0, l = e.data.datasets.length; a < l; ++a)
                        if (e.isDatasetVisible(a))
                            for (r = 0, i = (n = e.getDatasetMeta(a)).data.length; r < i; ++r) { var o = n.data[r];
                                o._view.skip || t(o) } }

                function dt(e, t) { var n = []; return ut(e, function(e) { e.inRange(t.x, t.y) && n.push(e) }), n }

                function ct(e, t, n, a) { var r = Number.POSITIVE_INFINITY,
                        l = []; return ut(e, function(e) { if (!n || e.inRange(t.x, t.y)) { var i = e.getCenterPoint(),
                                o = a(t, i);
                            o < r ? (l = [e], r = o) : o === r && l.push(e) } }), l }

                function ht(e) { var t = -1 !== e.indexOf("x"),
                        n = -1 !== e.indexOf("y"); return function(e, a) { var r = t ? Math.abs(e.x - a.x) : 0,
                            l = n ? Math.abs(e.y - a.y) : 0; return Math.sqrt(Math.pow(r, 2) + Math.pow(l, 2)) } }

                function _t(e, t, n) { var a = st(t, e);
                    n.axis = n.axis || "x"; var r = ht(n.axis),
                        l = n.intersect ? dt(e, a) : ct(e, a, !1, r),
                        i = []; return l.length ? (e.data.datasets.forEach(function(t, n) { if (e.isDatasetVisible(n)) { var a = e.getDatasetMeta(n).data[l[0]._index];
                            a && !a._view.skip && i.push(a) } }), i) : [] } var mt = { modes: { single: function(e, t) { var n = st(t, e),
                                a = []; return ut(e, function(e) { if (e.inRange(n.x, n.y)) return a.push(e), a }), a.slice(0, 1) }, label: _t, index: _t, dataset: function(e, t, n) { var a = st(t, e);
                            n.axis = n.axis || "xy"; var r = ht(n.axis),
                                l = n.intersect ? dt(e, a) : ct(e, a, !1, r); return l.length > 0 && (l = e.getDatasetMeta(l[0]._datasetIndex).data), l }, "x-axis": function(e, t) { return _t(e, t, { intersect: !1 }) }, point: function(e, t) { return dt(e, st(t, e)) }, nearest: function(e, t, n) { var a = st(t, e);
                            n.axis = n.axis || "xy"; var r = ht(n.axis); return ct(e, a, n.intersect, r) }, x: function(e, t, n) { var a = st(t, e),
                                r = [],
                                l = !1; return ut(e, function(e) { e.inXRange(a.x) && r.push(e), e.inRange(a.x, a.y) && (l = !0) }), n.intersect && !l && (r = []), r }, y: function(e, t, n) { var a = st(t, e),
                                r = [],
                                l = !1; return ut(e, function(e) { e.inYRange(a.y) && r.push(e), e.inRange(a.x, a.y) && (l = !0) }), n.intersect && !l && (r = []), r } } };

                function ft(e, t) { return de.where(e, function(e) { return e.position === t }) }

                function pt(e, t) { e.forEach(function(e, t) { return e._tmpIndex_ = t, e }), e.sort(function(e, n) { var a = t ? n : e,
                            r = t ? e : n; return a.weight === r.weight ? a._tmpIndex_ - r._tmpIndex_ : a.weight - r.weight }), e.forEach(function(e) { delete e._tmpIndex_ }) }

                function gt(e, t) { de.each(e, function(e) { t[e.position] += e.isHorizontal() ? e.height : e.width }) }
                oe._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }); var bt, yt = { defaults: {}, addBox: function(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t) }, removeBox: function(e, t) { var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1) }, configure: function(e, t, n) { for (var a, r = ["fullWidth", "position", "weight"], l = r.length, i = 0; i < l; ++i) n.hasOwnProperty(a = r[i]) && (t[a] = n[a]) }, update: function(e, t, n) { if (e) { var a = de.options.toPadding((e.options.layout || {}).padding),
                                    r = a.left,
                                    l = a.right,
                                    i = a.top,
                                    o = a.bottom,
                                    s = ft(e.boxes, "left"),
                                    u = ft(e.boxes, "right"),
                                    d = ft(e.boxes, "top"),
                                    c = ft(e.boxes, "bottom"),
                                    h = ft(e.boxes, "chartArea");
                                pt(s, !0), pt(u, !1), pt(d, !0), pt(c, !1); var _, m = s.concat(u),
                                    f = d.concat(c),
                                    p = m.concat(f),
                                    g = t - r - l,
                                    b = n - i - o,
                                    y = (t - g / 2) / m.length,
                                    M = g,
                                    v = b,
                                    L = { top: i, left: r, bottom: o, right: l },
                                    k = [];
                                de.each(p, function(e) { var t, n = e.isHorizontal();
                                    n ? (t = e.update(e.fullWidth ? g : M, b / 2), v -= t.height) : (t = e.update(y, v), M -= t.width), k.push({ horizontal: n, width: t.width, box: e }) }), _ = function(e) { var t = 0,
                                        n = 0,
                                        a = 0,
                                        r = 0; return de.each(p, function(e) { if (e.getPadding) { var l = e.getPadding();
                                            t = Math.max(t, l.top), n = Math.max(n, l.left), a = Math.max(a, l.bottom), r = Math.max(r, l.right) } }), { top: t, left: n, bottom: a, right: r } }(), de.each(m, H), gt(m, L), de.each(f, H), gt(f, L), de.each(m, function(e) { var t = de.findNextWhere(k, function(t) { return t.box === e });
                                    t && e.update(t.width, v, { left: 0, right: 0, top: L.top, bottom: L.bottom }) }), gt(p, L = { top: i, left: r, bottom: o, right: l }); var Y = Math.max(_.left - L.left, 0);
                                L.left += Y, L.right += Math.max(_.right - L.right, 0); var D = Math.max(_.top - L.top, 0);
                                L.top += D, L.bottom += Math.max(_.bottom - L.bottom, 0); var w = n - L.top - L.bottom,
                                    x = t - L.left - L.right;
                                x === M && w === v || (de.each(m, function(e) { e.height = w }), de.each(f, function(e) { e.fullWidth || (e.width = x) }), v = w, M = x); var T = r + Y,
                                    S = i + D;
                                de.each(s.concat(d), j), T += M, S += v, de.each(u, j), de.each(c, j), e.chartArea = { left: L.left, top: L.top, right: L.left + M, bottom: L.top + v }, de.each(h, function(t) { t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(M, v) }) }

                            function H(e) { var t = de.findNextWhere(k, function(t) { return t.box === e }); if (t)
                                    if (t.horizontal) { var n = { left: Math.max(L.left, _.left), right: Math.max(L.right, _.right), top: 0, bottom: 0 };
                                        e.update(e.fullWidth ? g : M, b / 2, n) } else e.update(t.width, v) }

                            function j(e) { e.isHorizontal() ? (e.left = e.fullWidth ? r : L.left, e.right = e.fullWidth ? t - l : L.left + M, e.top = S, e.bottom = S + e.height, S = e.bottom) : (e.left = T, e.right = T + e.width, e.top = L.top, e.bottom = L.top + v, T = e.right) } } },
                    Mt = (bt = Object.freeze({ default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && bt.default || bt,
                    vt = ["animationstart", "webkitAnimationStart"],
                    Lt = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

                function kt(e, t) { var n = de.getStyle(e, t),
                        a = n && n.match(/^(\d+)(\.\d+)?px$/); return a ? Number(a[1]) : void 0 } var Yt = !! function() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        window.addEventListener("e", null, t) } catch (n) {} return e }() && { passive: !0 };

                function Dt(e, t, n) { e.addEventListener(t, n, Yt) }

                function wt(e, t, n) { e.removeEventListener(t, n, Yt) }

                function xt(e, t, n, a, r) { return { type: e, chart: t, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== a ? a : null } }

                function Tt(e) { var t = document.createElement("div"); return t.className = e || "", t } var St = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function() { var e, t;
                        this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = Mt, t = this._style || document.createElement("style"), this._style || (this._style = t, e = "/* Chart.js */\n" + e, t.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(t)), t.appendChild(document.createTextNode(e)))) }, acquireContext: function(e, t) { "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas); var n = e && e.getContext && e.getContext("2d"); return this._ensureLoaded(), n && n.canvas === e ? (function(e, t) { var n = e.style,
                                a = e.getAttribute("height"),
                                r = e.getAttribute("width"); if (e.$chartjs = { initial: { height: a, width: r, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === r || "" === r) { var l = kt(e, "width");
                                void 0 !== l && (e.width = l) } if (null === a || "" === a)
                                if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                                else { var i = kt(e, "height");
                                    void 0 !== l && (e.height = i) } }(e, t), n) : null }, releaseContext: function(e) { var t = e.canvas; if (t.$chartjs) { var n = t.$chartjs.initial;
                            ["height", "width"].forEach(function(e) { var a = n[e];
                                de.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a) }), de.each(n.style || {}, function(e, n) { t.style[n] = e }), t.width = t.width, delete t.$chartjs } }, addEventListener: function(e, t, n) { var a = e.canvas; if ("resize" !== t) { var r = n.$chartjs || (n.$chartjs = {});
                            Dt(a, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) { n(function(e, t) { var n = Lt[e.type] || e.type,
                                        a = de.getRelativePosition(e, t); return xt(n, t, a.x, a.y, e) }(t, e)) }) } else ! function(e, t, n) { var a, r, l, i, o = e.$chartjs || (e.$chartjs = {}),
                                s = o.resizer = function(e) { var t = Tt("chartjs-size-monitor"),
                                        n = Tt("chartjs-size-monitor-expand"),
                                        a = Tt("chartjs-size-monitor-shrink");
                                    n.appendChild(Tt()), a.appendChild(Tt()), t.appendChild(n), t.appendChild(a), t._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6 }; var r = function() { t._reset(), e() }; return Dt(n, "scroll", r.bind(n, "expand")), Dt(a, "scroll", r.bind(a, "shrink")), t }((a = function() { if (o.resizer) { var a = n.options.maintainAspectRatio && e.parentNode,
                                            r = a ? a.clientWidth : 0;
                                        t(xt("resize", n)), a && a.clientWidth < r && n.canvas && t(xt("resize", n)) } }, l = !1, i = [], function() { i = Array.prototype.slice.call(arguments), r = r || this, l || (l = !0, de.requestAnimFrame.call(window, function() { l = !1, a.apply(r, i) })) }));! function(e, t) { var n = e.$chartjs || (e.$chartjs = {}),
                                    a = n.renderProxy = function(e) { "chartjs-render-animation" === e.animationName && t() };
                                de.each(vt, function(t) { Dt(e, t, a) }), n.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor") }(e, function() { if (o.resizer) { var t = e.parentNode;
                                    t && t !== s.parentNode && t.insertBefore(s, t.firstChild), s._reset() } }) }(a, n, e) }, removeEventListener: function(e, t, n) { var a = e.canvas; if ("resize" !== t) { var r = ((n.$chartjs || {}).proxies || {})[e.id + "_" + t];
                            r && wt(a, t, r) } else ! function(e) { var t = e.$chartjs || {},
                                n = t.resizer;
                            delete t.resizer,
                                function(e) { var t = e.$chartjs || {},
                                        n = t.renderProxy;
                                    n && (de.each(vt, function(t) { wt(e, t, n) }), delete t.renderProxy), e.classList.remove("chartjs-render-monitor") }(e), n && n.parentNode && n.parentNode.removeChild(n) }(a) } };
                de.addEvent = Dt, de.removeEvent = wt; var Ht = de.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, St._enabled ? St : { acquireContext: function(e) { return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null } });
                oe._set("global", { plugins: {} }); var jt = { _plugins: [], _cacheId: 0, register: function(e) { var t = this._plugins;
                            [].concat(e).forEach(function(e) {-1 === t.indexOf(e) && t.push(e) }), this._cacheId++ }, unregister: function(e) { var t = this._plugins;
                            [].concat(e).forEach(function(e) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) }), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(e, t, n) { var a, r, l, i, o, s = this.descriptors(e),
                                u = s.length; for (a = 0; a < u; ++a)
                                if ("function" == typeof(o = (l = (r = s[a]).plugin)[t]) && ((i = [e].concat(n || [])).push(r.options), !1 === o.apply(l, i))) return !1;
                            return !0 }, descriptors: function(e) { var t = e.$plugins || (e.$plugins = {}); if (t.id === this._cacheId) return t.descriptors; var n = [],
                                a = [],
                                r = e && e.config || {},
                                l = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach(function(e) { if (-1 === n.indexOf(e)) { var t = e.id,
                                        r = l[t];!1 !== r && (!0 === r && (r = de.clone(oe.global.plugins[t])), n.push(e), a.push({ plugin: e, options: r || {} })) } }), t.descriptors = a, t.id = this._cacheId, a }, _invalidate: function(e) { delete e.$plugins } },
                    Ct = { constructors: {}, defaults: {}, registerScaleType: function(e, t, n) { this.constructors[e] = t, this.defaults[e] = de.clone(n) }, getScaleConstructor: function(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0 }, getScaleDefaults: function(e) { return this.defaults.hasOwnProperty(e) ? de.merge({}, [oe.scale, this.defaults[e]]) : {} }, updateScaleDefaults: function(e, t) { this.defaults.hasOwnProperty(e) && (this.defaults[e] = de.extend(this.defaults[e], t)) }, addScalesToLayout: function(e) { de.each(e.scales, function(t) { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, yt.addBox(e, t) }) } },
                    Ot = de.valueOrDefault;
                oe._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: de.noop, title: function(e, t) { var n = "",
                                    a = t.labels,
                                    r = a ? a.length : 0; if (e.length > 0) { var l = e[0];
                                    l.label ? n = l.label : l.xLabel ? n = l.xLabel : r > 0 && l.index < r && (n = a[l.index]) } return n }, afterTitle: de.noop, beforeBody: de.noop, beforeLabel: de.noop, label: function(e, t) { var n = t.datasets[e.datasetIndex].label || ""; return n && (n += ": "), de.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n }, labelColor: function(e, t) { var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: de.noop, afterBody: de.noop, beforeFooter: de.noop, footer: de.noop, afterFooter: de.noop } } }); var Pt = { average: function(e) { if (!e.length) return !1; var t, n, a = 0,
                            r = 0,
                            l = 0; for (t = 0, n = e.length; t < n; ++t) { var i = e[t]; if (i && i.hasValue()) { var o = i.tooltipPosition();
                                a += o.x, r += o.y, ++l } } return { x: a / l, y: r / l } }, nearest: function(e, t) { var n, a, r, l = t.x,
                            i = t.y,
                            o = Number.POSITIVE_INFINITY; for (n = 0, a = e.length; n < a; ++n) { var s = e[n]; if (s && s.hasValue()) { var u = s.getCenterPoint(),
                                    d = de.distanceBetweenPoints(t, u);
                                d < o && (o = d, r = s) } } if (r) { var c = r.tooltipPosition();
                            l = c.x, i = c.y } return { x: l, y: i } } };

                function At(e, t) { return t && (de.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

                function Et(e) { return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e }

                function Wt(e) { var t = oe.global; return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Ot(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Ot(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Ot(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Ot(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Ot(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Ot(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Ot(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Ot(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Ot(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth } }

                function Ft(e, t) { return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding }

                function It(e) { return At([], Et(e)) } var Rt = me.extend({ initialize: function() { this._model = Wt(this._options), this._lastActive = [] }, getTitle: function() { var e = this._options.callbacks,
                            t = e.beforeTitle.apply(this, arguments),
                            n = e.title.apply(this, arguments),
                            a = e.afterTitle.apply(this, arguments),
                            r = []; return r = At(r, Et(t)), r = At(r, Et(n)), At(r, Et(a)) }, getBeforeBody: function() { return It(this._options.callbacks.beforeBody.apply(this, arguments)) }, getBody: function(e, t) { var n = this,
                            a = n._options.callbacks,
                            r = []; return de.each(e, function(e) { var l = { before: [], lines: [], after: [] };
                            At(l.before, Et(a.beforeLabel.call(n, e, t))), At(l.lines, a.label.call(n, e, t)), At(l.after, Et(a.afterLabel.call(n, e, t))), r.push(l) }), r }, getAfterBody: function() { return It(this._options.callbacks.afterBody.apply(this, arguments)) }, getFooter: function() { var e = this._options.callbacks,
                            t = e.beforeFooter.apply(this, arguments),
                            n = e.footer.apply(this, arguments),
                            a = e.afterFooter.apply(this, arguments),
                            r = []; return r = At(r, Et(t)), r = At(r, Et(n)), At(r, Et(a)) }, update: function(e) { var t, n, a, r, l, i, o, s, u, d, c = this,
                            h = c._options,
                            _ = c._model,
                            m = c._model = Wt(h),
                            f = c._active,
                            p = c._data,
                            g = { xAlign: _.xAlign, yAlign: _.yAlign },
                            b = { x: _.x, y: _.y },
                            y = { width: _.width, height: _.height },
                            M = { x: _.caretX, y: _.caretY }; if (f.length) { m.opacity = 1; var v = [],
                                L = [];
                            M = Pt[h.position].call(c, f, c._eventPosition); var k = []; for (t = 0, n = f.length; t < n; ++t) k.push((r = void 0, l = void 0, s = void 0, u = void 0, d = void 0, r = (a = f[t])._xScale, l = a._yScale || a._scale, i = a._index, u = (s = a._chart.getDatasetMeta(o = a._datasetIndex).controller)._getIndexScale(), d = s._getValueScale(), { xLabel: r ? r.getLabelForIndex(i, o) : "", yLabel: l ? l.getLabelForIndex(i, o) : "", label: u ? "" + u.getLabelForIndex(i, o) : "", value: d ? "" + d.getLabelForIndex(i, o) : "", index: i, datasetIndex: o, x: a._model.x, y: a._model.y }));
                            h.filter && (k = k.filter(function(e) { return h.filter(e, p) })), h.itemSort && (k = k.sort(function(e, t) { return h.itemSort(e, t, p) })), de.each(k, function(e) { v.push(h.callbacks.labelColor.call(c, e, c._chart)), L.push(h.callbacks.labelTextColor.call(c, e, c._chart)) }), m.title = c.getTitle(k, p), m.beforeBody = c.getBeforeBody(k, p), m.body = c.getBody(k, p), m.afterBody = c.getAfterBody(k, p), m.footer = c.getFooter(k, p), m.x = M.x, m.y = M.y, m.caretPadding = h.caretPadding, m.labelColors = v, m.labelTextColors = L, m.dataPoints = k, b = function(e, t, n, a) { var r = m.x,
                                    l = m.y,
                                    i = m.caretPadding,
                                    o = n.xAlign,
                                    s = n.yAlign,
                                    u = m.caretSize + i,
                                    d = m.cornerRadius + i; return "right" === o ? r -= y.width : "center" === o && ((r -= y.width / 2) + y.width > a.width && (r = a.width - y.width), r < 0 && (r = 0)), "top" === s ? l += u : l -= "bottom" === s ? y.height + u : y.height / 2, "center" === s ? "left" === o ? r += u : "right" === o && (r -= u) : "left" === o ? r -= d : "right" === o && (r += d), { x: r, y: l } }(0, 0, g = function(e, t) { var n, a, r, l, i, o = e._model,
                                    s = e._chart,
                                    u = e._chart.chartArea,
                                    d = "center",
                                    c = "center";
                                o.y < t.height ? c = "top" : o.y > s.height - t.height && (c = "bottom"); var h = (u.left + u.right) / 2,
                                    _ = (u.top + u.bottom) / 2; "center" === c ? (n = function(e) { return e <= h }, a = function(e) { return e > h }) : (n = function(e) { return e <= t.width / 2 }, a = function(e) { return e >= s.width - t.width / 2 }), r = function(e) { return e + t.width + o.caretSize + o.caretPadding > s.width }, l = function(e) { return e - t.width - o.caretSize - o.caretPadding < 0 }, i = function(e) { return e <= _ ? "top" : "bottom" }, n(o.x) ? (d = "left", r(o.x) && (d = "center", c = i(o.y))) : a(o.x) && (d = "right", l(o.x) && (d = "center", c = i(o.y))); var m = e._options; return { xAlign: m.xAlign ? m.xAlign : d, yAlign: m.yAlign ? m.yAlign : c } }(this, y = function(e, t) { var n = e._chart.ctx,
                                    a = 2 * t.yPadding,
                                    r = 0,
                                    l = t.body,
                                    i = l.reduce(function(e, t) { return e + t.before.length + t.lines.length + t.after.length }, 0),
                                    o = t.title.length,
                                    s = t.footer.length,
                                    u = t.titleFontSize,
                                    d = t.bodyFontSize,
                                    c = t.footerFontSize;
                                a += o * u, a += o ? (o - 1) * t.titleSpacing : 0, a += o ? t.titleMarginBottom : 0, a += (i += t.beforeBody.length + t.afterBody.length) * d, a += i ? (i - 1) * t.bodySpacing : 0, a += s ? t.footerMarginTop : 0, a += s * c, a += s ? (s - 1) * t.footerSpacing : 0; var h = 0,
                                    _ = function(e) { r = Math.max(r, n.measureText(e).width + h) }; return n.font = de.fontString(u, t._titleFontStyle, t._titleFontFamily), de.each(t.title, _), n.font = de.fontString(d, t._bodyFontStyle, t._bodyFontFamily), de.each(t.beforeBody.concat(t.afterBody), _), h = t.displayColors ? d + 2 : 0, de.each(l, function(e) { de.each(e.before, _), de.each(e.lines, _), de.each(e.after, _) }), h = 0, n.font = de.fontString(c, t._footerFontStyle, t._footerFontFamily), de.each(t.footer, _), { width: r += 2 * t.xPadding, height: a } }(this, m)), c._chart) } else m.opacity = 0; return m.xAlign = g.xAlign, m.yAlign = g.yAlign, m.x = b.x, m.y = b.y, m.width = y.width, m.height = y.height, m.caretX = M.x, m.caretY = M.y, c._model = m, e && h.custom && h.custom.call(c, m), c }, drawCaret: function(e, t) { var n = this._chart.ctx,
                            a = this.getCaretPosition(e, t, this._view);
                        n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3) }, getCaretPosition: function(e, t, n) { var a, r, l, i, o, s, u = n.caretSize,
                            d = n.cornerRadius,
                            c = n.xAlign,
                            h = n.yAlign,
                            _ = e.x,
                            m = e.y,
                            f = t.width,
                            p = t.height; if ("center" === h) o = m + p / 2, "left" === c ? (r = (a = _) - u, l = a, i = o + u, s = o - u) : (r = (a = _ + f) + u, l = a, i = o - u, s = o + u);
                        else if ("left" === c ? (a = (r = _ + d + u) - u, l = r + u) : "right" === c ? (a = (r = _ + f - d - u) - u, l = r + u) : (a = (r = n.caretX) - u, l = r + u), "top" === h) o = (i = m) - u, s = i;
                        else { o = (i = m + p) + u, s = i; var g = l;
                            l = a, a = g } return { x1: a, x2: r, x3: l, y1: i, y2: o, y3: s } }, drawTitle: function(e, t, n) { var a = t.title; if (a.length) { e.x = Ft(t, t._titleAlign), n.textAlign = t._titleAlign, n.textBaseline = "top"; var r, l, i = t.titleFontSize,
                                o = t.titleSpacing; for (n.fillStyle = t.titleFontColor, n.font = de.fontString(i, t._titleFontStyle, t._titleFontFamily), r = 0, l = a.length; r < l; ++r) n.fillText(a[r], e.x, e.y), e.y += i + o, r + 1 === a.length && (e.y += t.titleMarginBottom - o) } }, drawBody: function(e, t, n) { var a, r = t.bodyFontSize,
                            l = t.bodySpacing,
                            i = t._bodyAlign,
                            o = t.body,
                            s = t.displayColors,
                            u = t.labelColors,
                            d = 0,
                            c = s ? Ft(t, "left") : 0;
                        n.textAlign = i, n.textBaseline = "top", n.font = de.fontString(r, t._bodyFontStyle, t._bodyFontFamily), e.x = Ft(t, i); var h = function(t) { n.fillText(t, e.x + d, e.y), e.y += r + l };
                        n.fillStyle = t.bodyFontColor, de.each(t.beforeBody, h), d = s && "right" !== i ? "center" === i ? r / 2 + 1 : r + 2 : 0, de.each(o, function(l, i) { n.fillStyle = a = t.labelTextColors[i], de.each(l.before, h), de.each(l.lines, function(l) { s && (n.fillStyle = t.legendColorBackground, n.fillRect(c, e.y, r, r), n.lineWidth = 1, n.strokeStyle = u[i].borderColor, n.strokeRect(c, e.y, r, r), n.fillStyle = u[i].backgroundColor, n.fillRect(c + 1, e.y + 1, r - 2, r - 2), n.fillStyle = a), h(l) }), de.each(l.after, h) }), d = 0, de.each(t.afterBody, h), e.y -= l }, drawFooter: function(e, t, n) { var a = t.footer;
                        a.length && (e.x = Ft(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = t.footerFontColor, n.font = de.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), de.each(a, function(a) { n.fillText(a, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing })) }, drawBackground: function(e, t, n, a) { n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth; var r = t.xAlign,
                            l = t.yAlign,
                            i = e.x,
                            o = e.y,
                            s = a.width,
                            u = a.height,
                            d = t.cornerRadius;
                        n.beginPath(), n.moveTo(i + d, o), "top" === l && this.drawCaret(e, a), n.lineTo(i + s - d, o), n.quadraticCurveTo(i + s, o, i + s, o + d), "center" === l && "right" === r && this.drawCaret(e, a), n.lineTo(i + s, o + u - d), n.quadraticCurveTo(i + s, o + u, i + s - d, o + u), "bottom" === l && this.drawCaret(e, a), n.lineTo(i + d, o + u), n.quadraticCurveTo(i, o + u, i, o + u - d), "center" === l && "left" === r && this.drawCaret(e, a), n.lineTo(i, o + d), n.quadraticCurveTo(i, o, i + d, o), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke() }, draw: function() { var e = this._chart.ctx,
                            t = this._view; if (0 !== t.opacity) { var n = { width: t.width, height: t.height },
                                a = { x: t.x, y: t.y },
                                r = Math.abs(t.opacity < .001) ? 0 : t.opacity;
                            this._options.enabled && (t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length) && (e.save(), e.globalAlpha = r, this.drawBackground(a, t, e, n), a.y += t.yPadding, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), e.restore()) } }, handleEvent: function(e) { var t, n = this,
                            a = n._options; return n._lastActive = n._lastActive || [], n._active = "mouseout" === e.type ? [] : n._chart.getElementsAtEventForMode(e, a.mode, a), (t = !de.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (a.enabled || a.custom) && (n._eventPosition = { x: e.x, y: e.y }, n.update(!0), n.pivot())), t } });
                Rt.positioners = Pt; var zt = de.valueOrDefault;

                function Nt() { return de.merge({}, [].slice.call(arguments), { merger: function(e, t, n, a) { if ("xAxes" === e || "yAxes" === e) { var r, l, i, o = n[e].length; for (t[e] || (t[e] = []), r = 0; r < o; ++r) l = zt((i = n[e][r]).type, "xAxes" === e ? "category" : "linear"), r >= t[e].length && t[e].push({}), de.merge(t[e][r], !t[e][r].type || i.type && i.type !== t[e][r].type ? [Ct.getScaleDefaults(l), i] : i) } else de._merger(e, t, n, a) } }) }

                function Bt() { return de.merge({}, [].slice.call(arguments), { merger: function(e, t, n, a) { var r = t[e] || {},
                                l = n[e]; "scales" === e ? t[e] = Nt(r, l) : "scale" === e ? t[e] = de.merge(r, [Ct.getScaleDefaults(l.type), l]) : de._merger(e, t, n, a) } }) }

                function Vt(e) { return "top" === e || "bottom" === e }
                oe._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 }); var Ut = function(e, t) { return this.construct(e, t), this };
                de.extend(Ut.prototype, { construct: function(e, t) { var n = this;
                        t = function(e) { var t = (e = e || {}).data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Bt(oe.global, oe[e.type], e.options || {}), e }(t); var a = Ht.acquireContext(e, t),
                            r = a && a.canvas,
                            l = r && r.height,
                            i = r && r.width;
                        n.id = de.uid(), n.ctx = a, n.canvas = r, n.config = t, n.width = i, n.height = l, n.aspectRatio = l ? i / l : null, n.options = t.options, n._bufferedRender = !1, n.chart = n, n.controller = n, Ut.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(e) { n.config.data = e } }), a && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item") }, initialize: function() { var e = this; return jt.notify(e, "beforeInit"), de.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), jt.notify(e, "afterInit"), e }, clear: function() { return de.canvas.clear(this), this }, stop: function() { return ge.cancelAnimation(this), this }, resize: function(e) { var t = this,
                            n = t.options,
                            a = t.canvas,
                            r = n.maintainAspectRatio && t.aspectRatio || null,
                            l = Math.max(0, Math.floor(de.getMaximumWidth(a))),
                            i = Math.max(0, Math.floor(r ? l / r : de.getMaximumHeight(a))); if ((t.width !== l || t.height !== i) && (a.width = t.width = l, a.height = t.height = i, a.style.width = l + "px", a.style.height = i + "px", de.retinaScale(t, n.devicePixelRatio), !e)) { var o = { width: l, height: i };
                            jt.notify(t, "resize", [o]), n.onResize && n.onResize(t, o), t.stop(), t.update({ duration: n.responsiveAnimationDuration }) } }, ensureScalesHaveIDs: function() { var e = this.options,
                            t = e.scales || {},
                            n = e.scale;
                        de.each(t.xAxes, function(e, t) { e.id = e.id || "x-axis-" + t }), de.each(t.yAxes, function(e, t) { e.id = e.id || "y-axis-" + t }), n && (n.id = n.id || "scale") }, buildOrUpdateScales: function() { var e = this,
                            t = e.options,
                            n = e.scales || {},
                            a = [],
                            r = Object.keys(n).reduce(function(e, t) { return e[t] = !1, e }, {});
                        t.scales && (a = a.concat((t.scales.xAxes || []).map(function(e) { return { options: e, dtype: "category", dposition: "bottom" } }), (t.scales.yAxes || []).map(function(e) { return { options: e, dtype: "linear", dposition: "left" } }))), t.scale && a.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), de.each(a, function(t) { var a = t.options,
                                l = a.id,
                                i = zt(a.type, t.dtype);
                            Vt(a.position) !== Vt(t.dposition) && (a.position = t.dposition), r[l] = !0; var o = null; if (l in n && n[l].type === i)(o = n[l]).options = a, o.ctx = e.ctx, o.chart = e;
                            else { var s = Ct.getScaleConstructor(i); if (!s) return;
                                o = new s({ id: l, type: i, options: a, ctx: e.ctx, chart: e }), n[o.id] = o }
                            o.mergeTicksOptions(), t.isDefault && (e.scale = o) }), de.each(r, function(e, t) { e || delete n[t] }), e.scales = n, Ct.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var e = this,
                            t = []; return de.each(e.data.datasets, function(n, a) { var r = e.getDatasetMeta(a),
                                l = n.type || e.config.type; if (r.type && r.type !== l && (e.destroyDatasetMeta(a), r = e.getDatasetMeta(a)), r.type = l, r.controller) r.controller.updateIndex(a), r.controller.linkScales();
                            else { var i = ot[r.type]; if (void 0 === i) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new i(e, a), t.push(r.controller) } }, e), t }, resetElements: function() { var e = this;
                        de.each(e.data.datasets, function(t, n) { e.getDatasetMeta(n).controller.reset() }, e) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(e) { var t, n, a = this; if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), n = (t = a).options, de.each(t.scales, function(e) { yt.removeBox(t, e) }), n = Bt(oe.global, oe[t.config.type], n), t.options = t.config.options = n, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = n.tooltips, t.tooltip.initialize(), jt._invalidate(a), !1 !== jt.notify(a, "beforeUpdate")) { a.tooltip._data = a.data; var r = a.buildOrUpdateControllers();
                            de.each(a.data.datasets, function(e, t) { a.getDatasetMeta(t).controller.buildOrUpdateElements() }, a), a.updateLayout(), a.options.animation && a.options.animation.duration && de.each(r, function(e) { e.reset() }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], jt.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : a.render(e) } }, updateLayout: function() {!1 !== jt.notify(this, "beforeLayout") && (yt.update(this, this.width, this.height), jt.notify(this, "afterScaleUpdate"), jt.notify(this, "afterLayout")) }, updateDatasets: function() { if (!1 !== jt.notify(this, "beforeDatasetsUpdate")) { for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            jt.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(e) { var t = this.getDatasetMeta(e),
                            n = { meta: t, index: e };!1 !== jt.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), jt.notify(this, "afterDatasetUpdate", [n])) }, render: function(e) { var t = this;
                        e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }); var n = t.options.animation,
                            a = zt(e.duration, n && n.duration),
                            r = e.lazy; if (!1 !== jt.notify(t, "beforeRender")) { var l = function(e) { jt.notify(t, "afterRender"), de.callback(n && n.onComplete, [e], t) }; if (n && a) { var i = new pe({ numSteps: a / 16.66, easing: e.easing || n.easing, render: function(e, t) { var n = t.currentStep,
                                            a = n / t.numSteps;
                                        e.draw((0, de.easing.effects[t.easing])(a), a, n) }, onAnimationProgress: n.onProgress, onAnimationComplete: l });
                                ge.addAnimation(t, i, a, r) } else t.draw(), l(new pe({ numSteps: 0, chart: t })); return t } }, draw: function(e) { var t = this;
                        t.clear(), de.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== jt.notify(t, "beforeDraw", [e]) && (de.each(t.boxes, function(e) { e.draw(t.chartArea) }, t), t.drawDatasets(e), t._drawTooltip(e), jt.notify(t, "afterDraw", [e])) }, transition: function(e) { for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e) }, drawDatasets: function(e) { var t = this; if (!1 !== jt.notify(t, "beforeDatasetsDraw", [e])) { for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                            jt.notify(t, "afterDatasetsDraw", [e]) } }, drawDataset: function(e, t) { var n = this.getDatasetMeta(e),
                            a = { meta: n, index: e, easingValue: t };!1 !== jt.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(t), jt.notify(this, "afterDatasetDraw", [a])) }, _drawTooltip: function(e) { var t = this.tooltip,
                            n = { tooltip: t, easingValue: e };!1 !== jt.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), jt.notify(this, "afterTooltipDraw", [n])) }, getElementAtEvent: function(e) { return mt.modes.single(this, e) }, getElementsAtEvent: function(e) { return mt.modes.label(this, e, { intersect: !0 }) }, getElementsAtXAxis: function(e) { return mt.modes["x-axis"](this, e, { intersect: !0 }) }, getElementsAtEventForMode: function(e, t, n) { var a = mt.modes[t]; return "function" == typeof a ? a(this, e, n) : [] }, getDatasetAtEvent: function(e) { return mt.modes.dataset(this, e, { intersect: !0 }) }, getDatasetMeta: function(e) { var t = this.data.datasets[e];
                        t._meta || (t._meta = {}); var n = t._meta[this.id]; return n || (n = t._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n }, getVisibleDatasetCount: function() { for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++; return e }, isDatasetVisible: function(e) { var t = this.getDatasetMeta(e); return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(e) { var t = this.id,
                            n = this.data.datasets[e],
                            a = n._meta && n._meta[t];
                        a && (a.controller.destroy(), delete n._meta[t]) }, destroy: function() { var e, t, n = this,
                            a = n.canvas; for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
                        a && (n.unbindEvents(), de.canvas.clear(n), Ht.releaseContext(n.ctx), n.canvas = null, n.ctx = null), jt.notify(n, "destroy"), delete Ut.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var e = this;
                        e.tooltip = new Rt({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e) }, bindEvents: function() { var e = this,
                            t = e._listeners = {},
                            n = function() { e.eventHandler.apply(e, arguments) };
                        de.each(e.options.events, function(a) { Ht.addEventListener(e, a, n), t[a] = n }), e.options.responsive && (n = function() { e.resize() }, Ht.addEventListener(e, "resize", n), t.resize = n) }, unbindEvents: function() { var e = this,
                            t = e._listeners;
                        t && (delete e._listeners, de.each(t, function(t, n) { Ht.removeEventListener(e, n, t) })) }, updateHoverStyle: function(e, t, n) { var a, r, l, i = n ? "setHoverStyle" : "removeHoverStyle"; for (r = 0, l = e.length; r < l; ++r)(a = e[r]) && this.getDatasetMeta(a._datasetIndex).controller[i](a) }, eventHandler: function(e) { var t = this,
                            n = t.tooltip; if (!1 !== jt.notify(t, "beforeEvent", [e])) { t._bufferedRender = !0, t._bufferedRequest = null; var a = t.handleEvent(e);
                            n && (a = n._start ? n.handleEvent(e) : a | n.handleEvent(e)), jt.notify(t, "afterEvent", [e]); var r = t._bufferedRequest; return r ? t.render(r) : a && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t } }, handleEvent: function(e) { var t, n = this,
                            a = n.options || {},
                            r = a.hover; return n.lastActive = n.lastActive || [], n.active = "mouseout" === e.type ? [] : n.getElementsAtEventForMode(e, r.mode, r), de.callback(a.onHover || a.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || a.onClick && a.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), t = !de.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t } }), Ut.instances = {}; var Jt = Ut;

                function Gt() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

                function qt(e) { this.options = e || {} }
                Ut.Controller = Ut, Ut.types = {}, de.configMerge = Bt, de.scaleMerge = Nt, de.extend(qt.prototype, { formats: Gt, parse: Gt, format: Gt, add: Gt, diff: Gt, startOf: Gt, endOf: Gt, _create: function(e) { return e } }), qt.override = function(e) { de.extend(qt.prototype, e) }; var $t = { _date: qt },
                    Kt = { formatters: { values: function(e) { return de.isArray(e) ? e : "" + e }, linear: function(e, t, n) { var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(a) > 1 && e !== Math.floor(e) && (a = e - Math.floor(e)); var r = de.log10(Math.abs(a)),
                                    l = ""; if (0 !== e)
                                    if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) { var i = de.log10(Math.abs(e));
                                        l = e.toExponential(Math.floor(i) - Math.floor(r)) } else { var o = -1 * Math.floor(r);
                                        o = Math.max(Math.min(o, 20), 0), l = e.toFixed(o) }
                                else l = "0"; return l }, logarithmic: function(e, t, n) { var a = e / Math.pow(10, Math.floor(de.log10(e))); return 0 === e ? "0" : 1 === a || 2 === a || 5 === a || 0 === t || t === n.length - 1 ? e.toExponential() : "" } } },
                    Zt = de.valueOrDefault,
                    Qt = de.valueAtIndexOrDefault;

                function Xt(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(e[t].label); return a }

                function en(e, t, n) { return de.isArray(t) ? de.longestText(e, n, t) : e.measureText(t).width }
                oe._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: Kt.formatters.values, minor: {}, major: {} } }); var tn = me.extend({ getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, mergeTicksOptions: function() { var e = this.options.ticks; for (var t in !1 === e.minor && (e.minor = { display: !1 }), !1 === e.major && (e.major = { display: !1 }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t])) }, beforeUpdate: function() { de.callback(this.options.beforeUpdate, [this]) }, update: function(e, t, n) { var a, r, l, i, o, s, u = this; for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = de.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), o = u.buildTicks() || [], o = u.afterBuildTicks(o) || o, u.beforeTickToLabelConversion(), l = u.convertTicksToLabels(o) || u.ticks, u.afterTickToLabelConversion(), u.ticks = l, a = 0, r = l.length; a < r; ++a) i = l[a], (s = o[a]) ? s.label = i : o.push(s = { label: i, major: !1 }); return u._ticks = o, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize }, afterUpdate: function() { de.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { de.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var e = this;
                            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0 }, afterSetDimensions: function() { de.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { de.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: de.noop, afterDataLimits: function() { de.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { de.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: de.noop, afterBuildTicks: function(e) { var t = this; return de.isArray(e) && e.length ? de.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = de.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e) }, beforeTickToLabelConversion: function() { de.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var e = this.options.ticks;
                            this.ticks = this.ticks.map(e.userCallback || e.callback, this) }, afterTickToLabelConversion: function() { de.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { de.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var e = this,
                                t = e.ctx,
                                n = e.options.ticks,
                                a = Xt(e._ticks),
                                r = de.options._parseFont(n);
                            t.font = r.string; var l = n.minRotation || 0; if (a.length && e.options.display && e.isHorizontal())
                                for (var i, o = de.longestText(t, r.string, a, e.longestTextCache), s = o, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; s > u && l < n.maxRotation;) { var d = de.toRadians(l); if (i = Math.cos(d), Math.sin(d) * o > e.maxHeight) { l--; break }
                                    l++, s = i * o }
                            e.labelRotation = l }, afterCalculateTickRotation: function() { de.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { de.callback(this.options.beforeFit, [this]) }, fit: function() { var e = this,
                                t = e.minSize = { width: 0, height: 0 },
                                n = Xt(e._ticks),
                                a = e.options,
                                r = a.ticks,
                                l = a.scaleLabel,
                                i = a.gridLines,
                                o = e._isVisible(),
                                s = a.position,
                                u = e.isHorizontal(),
                                d = de.options._parseFont,
                                c = d(r),
                                h = a.gridLines.tickMarkLength; if (t.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : o && i.drawTicks ? h : 0, t.height = u ? o && i.drawTicks ? h : 0 : e.maxHeight, l.display && o) { var _ = d(l),
                                    m = de.options.toPadding(l.padding),
                                    f = _.lineHeight + m.height;
                                u ? t.height += f : t.width += f } if (r.display && o) { var p = de.longestText(e.ctx, c.string, n, e.longestTextCache),
                                    g = de.numberOfLabelLines(n),
                                    b = .5 * c.size,
                                    y = e.options.ticks.padding; if (e._maxLabelLines = g, e.longestLabelWidth = p, u) { var M = de.toRadians(e.labelRotation),
                                        v = Math.cos(M),
                                        L = Math.sin(M);
                                    t.height = Math.min(e.maxHeight, t.height + (L * p + c.lineHeight * g + b) + y), e.ctx.font = c.string; var k, Y, D = en(e.ctx, n[0], c.string),
                                        w = en(e.ctx, n[n.length - 1], c.string),
                                        x = e.getPixelForTick(0) - e.left,
                                        T = e.right - e.getPixelForTick(n.length - 1);
                                    0 !== e.labelRotation ? (k = "bottom" === s ? v * D : v * b, Y = "bottom" === s ? v * b : v * w) : (k = D / 2, Y = w / 2), e.paddingLeft = Math.max(k - x, 0) + 3, e.paddingRight = Math.max(Y - T, 0) + 3 } else r.mirror ? p = 0 : p += y + b, t.width = Math.min(e.maxWidth, t.width + p), e.paddingTop = c.size / 2, e.paddingBottom = c.size / 2 }
                            e.handleMargins(), e.width = t.width, e.height = t.height }, handleMargins: function() { var e = this;
                            e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0)) }, afterFit: function() { de.callback(this.options.afterFit, [this]) }, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(e) { if (de.isNullOrUndef(e)) return NaN; if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN; if (e)
                                if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x) } else if (void 0 !== e.y) return this.getRightValue(e.y); return e }, getLabelForIndex: de.noop, getPixelForValue: de.noop, getValueForPixel: de.noop, getPixelForTick: function(e) { var t = this,
                                n = t.options.offset; if (t.isHorizontal()) { var a = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                    r = a * e + t.paddingLeft; return n && (r += a / 2), t.left + r + (t.isFullWidth() ? t.margins.left : 0) } return t.top + e * ((t.height - (t.paddingTop + t.paddingBottom)) / (t._ticks.length - 1)) }, getPixelForDecimal: function(e) { var t = this; return t.isHorizontal() ? t.left + ((t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft) + (t.isFullWidth() ? t.margins.left : 0) : t.top + e * t.height }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var e = this.min,
                                t = this.max; return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0 }, _autoSkip: function(e) { var t, n, a = this,
                                r = a.isHorizontal(),
                                l = e.length,
                                i = !1,
                                o = a.options.ticks.minor.maxTicksLimit,
                                s = a._tickSize() * (l - 1),
                                u = r ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.PaddingBottom),
                                d = []; for (s > u && (i = 1 + Math.floor(s / u)), l > o && (i = Math.max(i, 1 + Math.floor(l / o))), t = 0; t < l; t++) n = e[t], i > 1 && t % i > 0 && delete n.label, d.push(n); return d }, _tickSize: function() { var e = this,
                                t = e.isHorizontal(),
                                n = e.options.ticks.minor,
                                a = de.toRadians(e.labelRotation),
                                r = Math.abs(Math.cos(a)),
                                l = Math.abs(Math.sin(a)),
                                i = n.autoSkipPadding || 0,
                                o = e.longestLabelWidth + i || 0,
                                s = de.options._parseFont(n),
                                u = e._maxLabelLines * s.lineHeight + i || 0; return t ? u * r > o * l ? o / r : u / l : u * l < o * r ? u / r : o / l }, _isVisible: function() { var e, t, n, a = this.chart,
                                r = this.options.display; if ("auto" !== r) return !!r; for (e = 0, t = a.data.datasets.length; e < t; ++e)
                                if (a.isDatasetVisible(e) && ((n = a.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                            return !1 }, draw: function(e) { var t = this,
                                n = t.options; if (t._isVisible()) { var a, r, l, i = t.chart,
                                    o = t.ctx,
                                    s = oe.global.defaultFontColor,
                                    u = n.ticks.minor,
                                    d = n.ticks.major || u,
                                    c = n.gridLines,
                                    h = n.scaleLabel,
                                    _ = n.position,
                                    m = 0 !== t.labelRotation,
                                    f = u.mirror,
                                    p = t.isHorizontal(),
                                    g = de.options._parseFont,
                                    b = u.display && u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                                    y = Zt(u.fontColor, s),
                                    M = g(u),
                                    v = M.lineHeight,
                                    L = Zt(d.fontColor, s),
                                    k = g(d),
                                    Y = u.padding,
                                    D = u.labelOffset,
                                    w = c.drawTicks ? c.tickMarkLength : 0,
                                    x = Zt(h.fontColor, s),
                                    T = g(h),
                                    S = de.options.toPadding(h.padding),
                                    H = de.toRadians(t.labelRotation),
                                    j = [],
                                    C = c.drawBorder ? Qt(c.lineWidth, 0, 0) : 0,
                                    O = de._alignPixel; if ("top" === _ ? (a = O(i, t.bottom, C), r = t.bottom - w, l = a - C / 2) : "bottom" === _ ? (a = O(i, t.top, C), r = a + C / 2, l = t.top + w) : "left" === _ ? (a = O(i, t.right, C), r = t.right - w, l = a - C / 2) : (a = O(i, t.left, C), r = a + C / 2, l = t.left + w), de.each(b, function(a, o) { if (!de.isNullOrUndef(a.label)) { var s, u, d, h, g, b, y, M, L, k, x, T, S, P, A, E, W = a.label;
                                            o === t.zeroLineIndex && n.offset === c.offsetGridLines ? (s = c.zeroLineWidth, u = c.zeroLineColor, d = c.zeroLineBorderDash || [], h = c.zeroLineBorderDashOffset || 0) : (s = Qt(c.lineWidth, o), u = Qt(c.color, o), d = c.borderDash || [], h = c.borderDashOffset || 0); var F = de.isArray(W) ? W.length : 1,
                                                I = function(e, t, n) { var a = e.getPixelForTick(t); return n && (1 === e.getTicks().length ? a -= e.isHorizontal() ? Math.max(a - e.left, e.right - a) : Math.max(a - e.top, e.bottom - a) : a -= 0 === t ? (e.getPixelForTick(1) - a) / 2 : (a - e.getPixelForTick(t - 1)) / 2), a }(t, o, c.offsetGridLines); if (p) { var R = w + Y;
                                                I < t.left - 1e-7 && (u = "rgba(0,0,0,0)"), g = y = L = x = O(i, I, s), b = r, M = l, S = t.getPixelForTick(o) + D, "top" === _ ? (k = O(i, e.top, C) + C / 2, T = e.bottom, A = ((m ? 1 : .5) - F) * v, E = m ? "left" : "center", P = t.bottom - R) : (k = e.top, T = O(i, e.bottom, C) - C / 2, A = (m ? 0 : .5) * v, E = m ? "right" : "center", P = t.top + R) } else { var z = (f ? 0 : w) + Y;
                                                I < t.top - 1e-7 && (u = "rgba(0,0,0,0)"), g = r, y = l, b = M = k = T = O(i, I, s), P = t.getPixelForTick(o) + D, A = (1 - F) * v / 2, "left" === _ ? (L = O(i, e.left, C) + C / 2, x = e.right, E = f ? "left" : "right", S = t.right - z) : (L = e.left, x = O(i, e.right, C) - C / 2, E = f ? "right" : "left", S = t.left + z) }
                                            j.push({ tx1: g, ty1: b, tx2: y, ty2: M, x1: L, y1: k, x2: x, y2: T, labelX: S, labelY: P, glWidth: s, glColor: u, glBorderDash: d, glBorderDashOffset: h, rotation: -1 * H, label: W, major: a.major, textOffset: A, textAlign: E }) } }), de.each(j, function(e) { var t = e.glWidth,
                                            n = e.glColor; if (c.display && t && n && (o.save(), o.lineWidth = t, o.strokeStyle = n, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), c.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), c.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) { o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? k.string : M.string, o.fillStyle = e.major ? L : y, o.textBaseline = "middle", o.textAlign = e.textAlign; var a = e.label,
                                                r = e.textOffset; if (de.isArray(a))
                                                for (var l = 0; l < a.length; ++l) o.fillText("" + a[l], 0, r), r += v;
                                            else o.fillText(a, 0, r);
                                            o.restore() } }), h.display) { var P, A, E = 0,
                                        W = T.lineHeight / 2; if (p) P = t.left + (t.right - t.left) / 2, A = "bottom" === _ ? t.bottom - W - S.bottom : t.top + W + S.top;
                                    else { var F = "left" === _;
                                        P = F ? t.left + W + S.top : t.right - W - S.top, A = t.top + (t.bottom - t.top) / 2, E = F ? -.5 * Math.PI : .5 * Math.PI }
                                    o.save(), o.translate(P, A), o.rotate(E), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = x, o.font = T.string, o.fillText(h.labelString, 0, 0), o.restore() } if (C) { var I, R, z, N, B = C,
                                        V = Qt(c.lineWidth, b.length - 1, 0);
                                    p ? (I = O(i, t.left, B) - B / 2, R = O(i, t.right, V) + V / 2, z = N = a) : (z = O(i, t.top, B) - B / 2, N = O(i, t.bottom, V) + V / 2, I = R = a), o.lineWidth = C, o.strokeStyle = Qt(c.color, 0), o.beginPath(), o.moveTo(I, z), o.lineTo(R, N), o.stroke() } } } }),
                    nn = tn.extend({ getLabels: function() { var e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels }, determineDataLimits: function() { var e, t = this,
                                n = t.getLabels();
                            t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex] }, buildTicks: function() { var e = this,
                                t = e.getLabels();
                            e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1) }, getLabelForIndex: function(e, t) { var n = this,
                                a = n.chart; return a.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(a.data.datasets[t].data[e]) : n.ticks[e - n.minIndex] }, getPixelForValue: function(e, t) { var n, a = this,
                                r = a.options.offset,
                                l = Math.max(a.maxIndex + 1 - a.minIndex - (r ? 0 : 1), 1); if (null != e && (n = a.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) { var i = a.getLabels().indexOf(e = n || e);
                                t = -1 !== i ? i : t } if (a.isHorizontal()) { var o = a.width / l,
                                    s = o * (t - a.minIndex); return r && (s += o / 2), a.left + s } var u = a.height / l,
                                d = u * (t - a.minIndex); return r && (d += u / 2), a.top + d }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticks[e], e + this.minIndex, null) }, getValueForPixel: function(e) { var t = this,
                                n = t.options.offset,
                                a = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                r = t.isHorizontal(),
                                l = (r ? t.width : t.height) / a; return e -= r ? t.left : t.top, n && (e -= l / 2), (e <= 0 ? 0 : Math.round(e / l)) + t.minIndex }, getBasePixel: function() { return this.bottom } });
                nn._defaults = { position: "bottom" }; var an = de.isNullOrUndef,
                    rn = tn.extend({ getRightValue: function(e) { return "string" == typeof e ? +e : tn.prototype.getRightValue.call(this, e) }, handleTickRangeOptions: function() { var e = this,
                                t = e.options.ticks; if (t.beginAtZero) { var n = de.sign(e.min),
                                    a = de.sign(e.max);
                                n < 0 && a < 0 ? e.max = 0 : n > 0 && a > 0 && (e.min = 0) } var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                                l = void 0 !== t.max || void 0 !== t.suggestedMax;
                            void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (e.min = null === e.min ? t.suggestedMin : Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (e.max = null === e.max ? t.suggestedMax : Math.max(e.max, t.suggestedMax)), r !== l && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--) }, getTickLimit: function() { var e, t = this.options.ticks,
                                n = t.stepSize,
                                a = t.maxTicksLimit; return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), a = a || 11), a && (e = Math.min(a, e)), e }, _computeTickLimit: function() { return Number.POSITIVE_INFINITY }, handleDirectionalChanges: de.noop, buildTicks: function() { var e = this,
                                t = e.options.ticks,
                                n = e.getTickLimit(),
                                a = { maxTicks: n = Math.max(2, n), min: t.min, max: t.max, precision: t.precision, stepSize: de.valueOrDefault(t.fixedStepSize, t.stepSize) },
                                r = e.ticks = function(t, n) { var r, l, i, o, s = [],
                                        u = a.stepSize,
                                        d = u || 1,
                                        c = a.maxTicks - 1,
                                        h = a.min,
                                        _ = a.max,
                                        m = a.precision,
                                        f = e.min,
                                        p = e.max,
                                        g = de.niceNum((p - f) / c / d) * d; if (g < 1e-14 && an(h) && an(_)) return [f, p];
                                    (o = Math.ceil(p / g) - Math.floor(f / g)) > c && (g = de.niceNum(o * g / c / d) * d), u || an(m) ? r = Math.pow(10, de._decimalPlaces(g)) : (r = Math.pow(10, m), g = Math.ceil(g * r) / r), l = Math.floor(f / g) * g, i = Math.ceil(p / g) * g, u && (!an(h) && de.almostWhole(h / g, g / 1e3) && (l = h), !an(_) && de.almostWhole(_ / g, g / 1e3) && (i = _)), o = de.almostEquals(o = (i - l) / g, Math.round(o), g / 1e3) ? Math.round(o) : Math.ceil(o), l = Math.round(l * r) / r, i = Math.round(i * r) / r, s.push(an(h) ? l : h); for (var b = 1; b < o; ++b) s.push(Math.round((l + b * g) * r) / r); return s.push(an(_) ? i : _), s }();
                            e.handleDirectionalChanges(), e.max = de.max(r), e.min = de.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max) }, convertTicksToLabels: function() { var e = this;
                            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), tn.prototype.convertTicksToLabels.call(e) } }),
                    ln = { position: "left", ticks: { callback: Kt.formatters.linear } },
                    on = rn.extend({ determineDataLimits: function() { var e = this,
                                t = e.options,
                                n = e.chart,
                                a = n.data.datasets,
                                r = e.isHorizontal();

                            function l(t) { return r ? t.xAxisID === e.id : t.yAxisID === e.id }
                            e.min = null, e.max = null; var i = t.stacked; if (void 0 === i && de.each(a, function(e, t) { if (!i) { var a = n.getDatasetMeta(t);
                                        n.isDatasetVisible(t) && l(a) && void 0 !== a.stack && (i = !0) } }), t.stacked || i) { var o = {};
                                de.each(a, function(a, r) { var i = n.getDatasetMeta(r),
                                        s = [i.type, void 0 === t.stacked && void 0 === i.stack ? r : "", i.stack].join(".");
                                    void 0 === o[s] && (o[s] = { positiveValues: [], negativeValues: [] }); var u = o[s].positiveValues,
                                        d = o[s].negativeValues;
                                    n.isDatasetVisible(r) && l(i) && de.each(a.data, function(n, a) { var r = +e.getRightValue(n);
                                        isNaN(r) || i.data[a].hidden || (u[a] = u[a] || 0, d[a] = d[a] || 0, t.relativePoints ? u[a] = 100 : r < 0 ? d[a] += r : u[a] += r) }) }), de.each(o, function(t) { var n = t.positiveValues.concat(t.negativeValues),
                                        a = de.min(n),
                                        r = de.max(n);
                                    e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? r : Math.max(e.max, r) }) } else de.each(a, function(t, a) { var r = n.getDatasetMeta(a);
                                n.isDatasetVisible(a) && l(r) && de.each(t.data, function(t, n) { var a = +e.getRightValue(t);
                                    isNaN(a) || r.data[n].hidden || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a)) }) });
                            e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions() }, _computeTickLimit: function() { var e; return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = de.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight)) }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForValue: function(e) { var t = this,
                                n = t.start,
                                a = +t.getRightValue(e),
                                r = t.end - n; return t.isHorizontal() ? t.left + t.width / r * (a - n) : t.bottom - t.height / r * (a - n) }, getValueForPixel: function(e) { var t = this,
                                n = t.isHorizontal(); return t.start + (n ? e - t.left : t.bottom - e) / (n ? t.width : t.height) * (t.end - t.start) }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticksAsNumbers[e]) } });
                on._defaults = ln; var sn = de.valueOrDefault,
                    un = { position: "left", ticks: { callback: Kt.formatters.logarithmic } };

                function dn(e, t) { return de.isFinite(e) && e >= 0 ? e : t } var cn = tn.extend({ determineDataLimits: function() { var e = this,
                            t = e.options,
                            n = e.chart,
                            a = n.data.datasets,
                            r = e.isHorizontal();

                        function l(t) { return r ? t.xAxisID === e.id : t.yAxisID === e.id }
                        e.min = null, e.max = null, e.minNotZero = null; var i = t.stacked; if (void 0 === i && de.each(a, function(e, t) { if (!i) { var a = n.getDatasetMeta(t);
                                    n.isDatasetVisible(t) && l(a) && void 0 !== a.stack && (i = !0) } }), t.stacked || i) { var o = {};
                            de.each(a, function(a, r) { var i = n.getDatasetMeta(r),
                                    s = [i.type, void 0 === t.stacked && void 0 === i.stack ? r : "", i.stack].join(".");
                                n.isDatasetVisible(r) && l(i) && (void 0 === o[s] && (o[s] = []), de.each(a.data, function(t, n) { var a = o[s],
                                        r = +e.getRightValue(t);
                                    isNaN(r) || i.data[n].hidden || r < 0 || (a[n] = a[n] || 0, a[n] += r) })) }), de.each(o, function(t) { if (t.length > 0) { var n = de.min(t),
                                        a = de.max(t);
                                    e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? a : Math.max(e.max, a) } }) } else de.each(a, function(t, a) { var r = n.getDatasetMeta(a);
                            n.isDatasetVisible(a) && l(r) && de.each(t.data, function(t, n) { var a = +e.getRightValue(t);
                                isNaN(a) || r.data[n].hidden || a < 0 || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a), 0 !== a && (null === e.minNotZero || a < e.minNotZero) && (e.minNotZero = a)) }) });
                        this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var e = this,
                            t = e.options.ticks;
                        e.min = dn(t.min, e.min), e.max = dn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(de.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(de.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(de.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(de.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.minNotZero = e.min > 0 ? e.min : e.max < 1 ? Math.pow(10, Math.floor(de.log10(e.max))) : 1) }, buildTicks: function() { var e = this,
                            t = e.options.ticks,
                            n = !e.isHorizontal(),
                            a = { min: dn(t.min), max: dn(t.max) },
                            r = e.ticks = function(e, t) { var n, a, r = [],
                                    l = sn(e.min, Math.pow(10, Math.floor(de.log10(t.min)))),
                                    i = Math.floor(de.log10(t.max)),
                                    o = Math.ceil(t.max / Math.pow(10, i));
                                0 === l ? (n = Math.floor(de.log10(t.minNotZero)), a = Math.floor(t.minNotZero / Math.pow(10, n)), r.push(l), l = a * Math.pow(10, n)) : (n = Math.floor(de.log10(l)), a = Math.floor(l / Math.pow(10, n))); var s = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                do { r.push(l), 10 == ++a && (a = 1, s = ++n >= 0 ? 1 : s), l = Math.round(a * Math.pow(10, n) * s) / s } while (n < i || n === i && a < o); var u = sn(e.max, l); return r.push(u), r }(a, e);
                        e.max = de.max(r), e.min = de.min(r), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && r.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), tn.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForTick: function(e) { return this.getPixelForValue(this.tickValues[e]) }, _getFirstTickValue: function(e) { var t = Math.floor(de.log10(e)); return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t) }, getPixelForValue: function(e) { var t, n, a, r, l, i = this,
                            o = i.options.ticks,
                            s = o.reverse,
                            u = de.log10,
                            d = i._getFirstTickValue(i.minNotZero),
                            c = 0; return e = +i.getRightValue(e), s ? (a = i.end, r = i.start, l = -1) : (a = i.start, r = i.end, l = 1), i.isHorizontal() ? (t = i.width, n = s ? i.right : i.left) : (t = i.height, l *= -1, n = s ? i.top : i.bottom), e !== a && (0 === a && (t -= c = sn(o.fontSize, oe.global.defaultFontSize), a = d), 0 !== e && (c += t / (u(r) - u(a)) * (u(e) - u(a))), n += l * c), n }, getValueForPixel: function(e) { var t, n, a, r, l = this,
                            i = l.options.ticks,
                            o = i.reverse,
                            s = de.log10,
                            u = l._getFirstTickValue(l.minNotZero); if (o ? (n = l.end, a = l.start) : (n = l.start, a = l.end), l.isHorizontal() ? (t = l.width, r = o ? l.right - e : e - l.left) : (t = l.height, r = o ? e - l.top : l.bottom - e), r !== n) { if (0 === n) { var d = sn(i.fontSize, oe.global.defaultFontSize);
                                r -= d, t -= d, n = u }
                            r *= s(a) - s(n), r /= t, r = Math.pow(10, s(n) + r) } return r } });
                cn._defaults = un; var hn = de.valueOrDefault,
                    _n = de.valueAtIndexOrDefault,
                    mn = de.options.resolve,
                    fn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: Kt.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(e) { return e } } };

                function pn(e) { var t = e.options; return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0 }

                function gn(e) { var t = e.ticks; return t.display && e.display ? hn(t.fontSize, oe.global.defaultFontSize) + 2 * t.backdropPaddingY : 0 }

                function bn(e, t, n, a, r) { return e === a || e === r ? { start: t - n / 2, end: t + n / 2 } : e < a || e > r ? { start: t - n, end: t } : { start: t, end: t + n } }

                function yn(e) { return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right" }

                function Mn(e, t, n, a) { var r, l, i = n.y + a / 2; if (de.isArray(t))
                        for (r = 0, l = t.length; r < l; ++r) e.fillText(t[r], n.x, i), i += a;
                    else e.fillText(t, n.x, i) }

                function vn(e, t, n) { 90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h) }

                function Ln(e) { return de.isNumber(e) ? e : 0 } var kn = rn.extend({ setDimensions: function() { var e = this;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = gn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2 }, determineDataLimits: function() { var e = this,
                            t = e.chart,
                            n = Number.POSITIVE_INFINITY,
                            a = Number.NEGATIVE_INFINITY;
                        de.each(t.data.datasets, function(r, l) { if (t.isDatasetVisible(l)) { var i = t.getDatasetMeta(l);
                                de.each(r.data, function(t, r) { var l = +e.getRightValue(t);
                                    isNaN(l) || i.data[r].hidden || (n = Math.min(l, n), a = Math.max(l, a)) }) } }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions() }, _computeTickLimit: function() { return Math.ceil(this.drawingArea / gn(this.options)) }, convertTicksToLabels: function() { var e = this;
                        rn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, fit: function() { var e = this.options;
                        e.display && e.pointLabels.display ? function(e) { var t, n, a, r = de.options._parseFont(e.options.pointLabels),
                                l = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                                i = {};
                            e.ctx.font = r.string, e._pointLabelSizes = []; var o, s, u, d = pn(e); for (t = 0; t < d; t++) { a = e.getPointPosition(t, e.drawingArea + 5), o = e.ctx, s = r.lineHeight, n = de.isArray(u = e.pointLabels[t] || "") ? { w: de.longestText(o, o.font, u), h: u.length * s } : { w: o.measureText(u).width, h: s }, e._pointLabelSizes[t] = n; var c = e.getIndexAngle(t),
                                    h = de.toDegrees(c) % 360,
                                    _ = bn(h, a.x, n.w, 0, 180),
                                    m = bn(h, a.y, n.h, 90, 270);
                                _.start < l.l && (l.l = _.start, i.l = c), _.end > l.r && (l.r = _.end, i.r = c), m.start < l.t && (l.t = m.start, i.t = c), m.end > l.b && (l.b = m.end, i.b = c) }
                            e.setReductions(e.drawingArea, l, i) }(this) : this.setCenterPoint(0, 0, 0, 0) }, setReductions: function(e, t, n) { var a = this,
                            r = t.l / Math.sin(n.l),
                            l = Math.max(t.r - a.width, 0) / Math.sin(n.r),
                            i = -t.t / Math.cos(n.t),
                            o = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(n.b);
                        r = Ln(r), l = Ln(l), i = Ln(i), o = Ln(o), a.drawingArea = Math.min(Math.floor(e - (r + l) / 2), Math.floor(e - (i + o) / 2)), a.setCenterPoint(r, l, i, o) }, setCenterPoint: function(e, t, n, a) { var r = this,
                            l = n + r.drawingArea,
                            i = r.height - r.paddingTop - a - r.drawingArea;
                        r.xCenter = Math.floor((e + r.drawingArea + (r.width - t - r.drawingArea)) / 2 + r.left), r.yCenter = Math.floor((l + i) / 2 + r.top + r.paddingTop) }, getIndexAngle: function(e) { return e * (2 * Math.PI / pn(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360 }, getDistanceFromCenterForValue: function(e) { var t = this; if (null === e) return 0; var n = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n }, getPointPosition: function(e, t) { var n = this.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(n) * t + this.xCenter, y: Math.sin(n) * t + this.yCenter } }, getPointPositionForValue: function(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)) }, getBasePosition: function() { var e = this.min,
                            t = this.max; return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0) }, draw: function() { var e = this,
                            t = e.options,
                            n = t.gridLines,
                            a = t.ticks; if (t.display) { var r = e.ctx,
                                l = this.getIndexAngle(0),
                                i = de.options._parseFont(a);
                            (t.angleLines.display || t.pointLabels.display) && function(e) { var t = e.ctx,
                                    n = e.options,
                                    a = n.angleLines,
                                    r = n.gridLines,
                                    l = n.pointLabels,
                                    i = hn(a.lineWidth, r.lineWidth),
                                    o = hn(a.color, r.color),
                                    s = gn(n);
                                t.save(), t.lineWidth = i, t.strokeStyle = o, t.setLineDash && (t.setLineDash(mn([a.borderDash, r.borderDash, []])), t.lineDashOffset = mn([a.borderDashOffset, r.borderDashOffset, 0])); var u = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                                    d = de.options._parseFont(l);
                                t.font = d.string, t.textBaseline = "middle"; for (var c = pn(e) - 1; c >= 0; c--) { if (a.display && i && o) { var h = e.getPointPosition(c, u);
                                        t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(h.x, h.y), t.stroke() } if (l.display) { var _ = e.getPointPosition(c, u + (0 === c ? s / 2 : 0) + 5),
                                            m = _n(l.fontColor, c, oe.global.defaultFontColor);
                                        t.fillStyle = m; var f = e.getIndexAngle(c),
                                            p = de.toDegrees(f);
                                        t.textAlign = yn(p), vn(p, e._pointLabelSizes[c], _), Mn(t, e.pointLabels[c] || "", _, d.lineHeight) } }
                                t.restore() }(e), de.each(e.ticks, function(t, o) { if (o > 0 || a.reverse) { var s = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]); if (n.display && 0 !== o && function(e, t, n, a) { var r, l = e.ctx,
                                                i = t.circular,
                                                o = pn(e),
                                                s = _n(t.color, a - 1),
                                                u = _n(t.lineWidth, a - 1); if ((i || o) && s && u) { if (l.save(), l.strokeStyle = s, l.lineWidth = u, l.setLineDash && (l.setLineDash(t.borderDash || []), l.lineDashOffset = t.borderDashOffset || 0), l.beginPath(), i) l.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                                                else { r = e.getPointPosition(0, n), l.moveTo(r.x, r.y); for (var d = 1; d < o; d++) r = e.getPointPosition(d, n), l.lineTo(r.x, r.y) }
                                                l.closePath(), l.stroke(), l.restore() } }(e, n, s, o), a.display) { var u = hn(a.fontColor, oe.global.defaultFontColor); if (r.font = i.string, r.save(), r.translate(e.xCenter, e.yCenter), r.rotate(l), a.showLabelBackdrop) { var d = r.measureText(t).width;
                                            r.fillStyle = a.backdropColor, r.fillRect(-d / 2 - a.backdropPaddingX, -s - i.size / 2 - a.backdropPaddingY, d + 2 * a.backdropPaddingX, i.size + 2 * a.backdropPaddingY) }
                                        r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = u, r.fillText(t, 0, -s), r.restore() } } }) } } });
                kn._defaults = fn; var Yn = de.valueOrDefault,
                    Dn = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    wn = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    xn = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
                    Tn = Object.keys(xn);

                function Sn(e, t) { return e - t }

                function Hn(e) { var t, n, a, r = {},
                        l = []; for (t = 0, n = e.length; t < n; ++t) r[a = e[t]] || (r[a] = !0, l.push(a)); return l }

                function jn(e, t, n, a) { var r = function(e, t, n) { for (var a, r, l, i = 0, o = e.length - 1; i >= 0 && i <= o;) { if (l = e[a = i + o >> 1], !(r = e[a - 1] || null)) return { lo: null, hi: l }; if (l[t] < n) i = a + 1;
                                else { if (!(r[t] > n)) return { lo: r, hi: l };
                                    o = a - 1 } } return { lo: l, hi: null } }(e, t, n),
                        l = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                        i = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                        o = i[t] - l[t]; return l[a] + (i[a] - l[a]) * (o ? (n - l[t]) / o : 0) }

                function Cn(e, t) { var n = e._adapter,
                        a = e.options.time,
                        r = a.parser,
                        l = r || a.format,
                        i = t; return "function" == typeof r && (i = r(i)), de.isFinite(i) || (i = "string" == typeof l ? n.parse(i, l) : n.parse(i)), null !== i ? +i : (r || "function" != typeof l || (i = l(t), de.isFinite(i) || (i = n.parse(i))), i) }

                function On(e, t) { if (de.isNullOrUndef(t)) return null; var n = e.options.time,
                        a = Cn(e, e.getRightValue(t)); return null === a ? a : (n.round && (a = +e._adapter.startOf(a, n.round)), a) }

                function Pn(e) { for (var t = Tn.indexOf(e) + 1, n = Tn.length; t < n; ++t)
                        if (xn[Tn[t]].common) return Tn[t] } var An = tn.extend({ initialize: function() { this.mergeTicksOptions(), tn.prototype.initialize.call(this) }, update: function() { var e = this.options,
                            t = e.time || (e.time = {}),
                            n = this._adapter = new $t._date(e.adapters.date); return t.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), de.mergeIf(t.displayFormats, n.formats()), tn.prototype.update.apply(this, arguments) }, getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), tn.prototype.getRightValue.call(this, e) }, determineDataLimits: function() { var e, t, n, a, r, l, i = this,
                            o = i.chart,
                            s = i._adapter,
                            u = i.options.time,
                            d = u.unit || "day",
                            c = wn,
                            h = Dn,
                            _ = [],
                            m = [],
                            f = [],
                            p = o.data.labels || []; for (e = 0, n = p.length; e < n; ++e) f.push(On(i, p[e])); for (e = 0, n = (o.data.datasets || []).length; e < n; ++e)
                            if (o.isDatasetVisible(e))
                                if (de.isObject((r = o.data.datasets[e].data)[0]))
                                    for (m[e] = [], t = 0, a = r.length; t < a; ++t) l = On(i, r[t]), _.push(l), m[e][t] = l;
                                else { for (t = 0, a = f.length; t < a; ++t) _.push(f[t]);
                                    m[e] = f.slice(0) }
                        else m[e] = [];
                        f.length && (f = Hn(f).sort(Sn), c = Math.min(c, f[0]), h = Math.max(h, f[f.length - 1])), _.length && (_ = Hn(_).sort(Sn), c = Math.min(c, _[0]), h = Math.max(h, _[_.length - 1])), c = On(i, u.min) || c, h = On(i, u.max) || h, c = c === wn ? +s.startOf(Date.now(), d) : c, h = h === Dn ? +s.endOf(Date.now(), d) + 1 : h, i.min = Math.min(c, h), i.max = Math.max(c + 1, h), i._horizontal = i.isHorizontal(), i._table = [], i._timestamps = { data: _, datasets: m, labels: f } }, buildTicks: function() { var e, t, n, a = this,
                            r = a.min,
                            l = a.max,
                            i = a.options,
                            o = i.time,
                            s = [],
                            u = []; switch (i.ticks.source) {
                            case "data":
                                s = a._timestamps.data; break;
                            case "labels":
                                s = a._timestamps.labels; break;
                            case "auto":
                            default:
                                s = function(e, t, n, a) { var r, l = e._adapter,
                                        i = e.options,
                                        o = i.time,
                                        s = o.unit || function(e, t, n, a) { var r, l, i, s = Tn.length; for (r = Tn.indexOf(o.minUnit); r < s - 1; ++r)
                                                if (i = (l = xn[Tn[r]]).steps ? l.steps[l.steps.length - 1] : wn, l.common && Math.ceil((n - t) / (i * l.size)) <= a) return Tn[r];
                                            return Tn[s - 1] }(0, t, n, a),
                                        u = Pn(s),
                                        d = Yn(o.stepSize, o.unitStepSize),
                                        c = "week" === s && o.isoWeekday,
                                        h = i.ticks.major.enabled,
                                        _ = xn[s],
                                        m = t,
                                        f = n,
                                        p = []; for (d || (d = function(e, t, n, a) { var r, l, i, o = t - e,
                                                u = xn[s],
                                                d = u.size,
                                                c = u.steps; if (!c) return Math.ceil(o / (a * d)); for (r = 0, l = c.length; r < l && (i = c[r], !(Math.ceil(o / (d * i)) <= a)); ++r); return i }(t, n, 0, a)), c && (m = +l.startOf(m, "isoWeek", c), f = +l.startOf(f, "isoWeek", c)), m = +l.startOf(m, c ? "day" : s), (f = +l.startOf(f, c ? "day" : s)) < n && (f = +l.add(f, 1, s)), r = m, h && u && !c && !o.round && (r = +l.startOf(r, u), r = +l.add(r, ~~((m - r) / (_.size * d)) * d, s)); r < f; r = +l.add(r, d, s)) p.push(+r); return p.push(+r), p }(a, r, l, a.getLabelCapacity(r)) } for ("ticks" === i.bounds && s.length && (r = s[0], l = s[s.length - 1]), r = On(a, o.min) || r, l = On(a, o.max) || l, e = 0, t = s.length; e < t; ++e)(n = s[e]) >= r && n <= l && u.push(n); return a.min = r, a.max = l, a._unit = o.unit || function(e, t, n, a, r) { var l, i; for (l = Tn.length - 1; l >= Tn.indexOf(n); l--)
                                    if (xn[i = Tn[l]].common && e._adapter.diff(r, a, i) >= t.length) return i;
                                return Tn[n ? Tn.indexOf(n) : 0] }(a, u, o.minUnit, a.min, a.max), a._majorUnit = Pn(a._unit), a._table = function(e, t, n, a) { if ("linear" === i.distribution || !e.length) return [{ time: t, pos: 0 }, { time: n, pos: 1 }]; var r, l, o, s, u, d = [],
                                    c = [t]; for (r = 0, l = e.length; r < l; ++r)(s = e[r]) > t && s < n && c.push(s); for (c.push(n), r = 0, l = c.length; r < l; ++r) u = c[r + 1], s = c[r], void 0 !== (o = c[r - 1]) && void 0 !== u && Math.round((u + o) / 2) === s || d.push({ time: s, pos: r / (l - 1) }); return d }(a._timestamps.data, r, l), a._offsets = function(e, t, n, a, r) { var l, i, o = 0,
                                    s = 0; return r.offset && t.length && (r.time.min || (l = jn(e, "time", t[0], "pos"), o = 1 === t.length ? 1 - l : (jn(e, "time", t[1], "pos") - l) / 2), r.time.max || (i = jn(e, "time", t[t.length - 1], "pos"), s = 1 === t.length ? i : (i - jn(e, "time", t[t.length - 2], "pos")) / 2)), { start: o, end: s } }(a._table, u, 0, 0, i), i.ticks.reverse && u.reverse(),
                            function(e, t, n) { var a, r, l, i, o = []; for (a = 0, r = t.length; a < r; ++a) l = t[a], i = !!n && l === +e._adapter.startOf(l, n), o.push({ value: l, major: i }); return o }(a, u, a._majorUnit) }, getLabelForIndex: function(e, t) { var n = this,
                            a = n._adapter,
                            r = n.chart.data,
                            l = n.options.time,
                            i = r.labels && e < r.labels.length ? r.labels[e] : "",
                            o = r.datasets[t].data[e]; return de.isObject(o) && (i = n.getRightValue(o)), l.tooltipFormat ? a.format(Cn(n, i), l.tooltipFormat) : "string" == typeof i ? i : a.format(Cn(n, i), l.displayFormats.datetime) }, tickFormatFunction: function(e, t, n, a) { var r = this._adapter,
                            l = this.options,
                            i = l.time.displayFormats,
                            o = i[this._unit],
                            s = this._majorUnit,
                            u = i[s],
                            d = +r.startOf(e, s),
                            c = l.ticks.major,
                            h = c.enabled && s && u && e === d,
                            _ = r.format(e, a || (h ? u : o)),
                            m = h ? c : l.ticks.minor,
                            f = Yn(m.callback, m.userCallback); return f ? f(_, t, n) : _ }, convertTicksToLabels: function(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(e[t].value, t, e)); return a }, getPixelForOffset: function(e) { var t = this,
                            n = t.options.ticks.reverse,
                            a = t._horizontal ? t.width : t.height,
                            r = t._horizontal ? n ? t.right : t.left : n ? t.bottom : t.top,
                            l = jn(t._table, "time", e, "pos"),
                            i = a * (t._offsets.start + l) / (t._offsets.start + 1 + t._offsets.end); return n ? r - i : r + i }, getPixelForValue: function(e, t, n) { var a = null; if (void 0 !== t && void 0 !== n && (a = this._timestamps.datasets[n][t]), null === a && (a = On(this, e)), null !== a) return this.getPixelForOffset(a) }, getPixelForTick: function(e) { var t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null }, getValueForPixel: function(e) { var t = this,
                            n = t._horizontal ? t.width : t.height,
                            a = jn(t._table, "pos", (n ? (e - (t._horizontal ? t.left : t.top)) / n : 0) * (t._offsets.start + 1 + t._offsets.start) - t._offsets.end, "time"); return t._adapter._create(a) }, getLabelWidth: function(e) { var t = this.options.ticks,
                            n = this.ctx.measureText(e).width,
                            a = de.toRadians(t.maxRotation),
                            r = Math.cos(a),
                            l = Math.sin(a); return n * r + Yn(t.fontSize, oe.global.defaultFontSize) * l }, getLabelCapacity: function(e) { var t = this,
                            n = t.tickFormatFunction(e, 0, [], t.options.time.displayFormats.millisecond),
                            a = t.getLabelWidth(n),
                            r = t.isHorizontal() ? t.width : t.height,
                            l = Math.floor(r / a); return l > 0 ? l : 1 } });
                An._defaults = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } }; var En = { category: nn, linear: on, logarithmic: cn, radialLinear: kn, time: An },
                    Wn = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
                $t._date.override("function" == typeof e ? { _id: "moment", formats: function() { return Wn }, parse: function(t, n) { return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null }, format: function(t, n) { return e(t).format(n) }, add: function(t, n, a) { return e(t).add(n, a).valueOf() }, diff: function(t, n, a) { return e.duration(e(t).diff(e(n))).as(a) }, startOf: function(t, n, a) { return t = e(t), "isoWeek" === n ? t.isoWeekday(a).valueOf() : t.startOf(n).valueOf() }, endOf: function(t, n) { return e(t).endOf(n).valueOf() }, _create: function(t) { return e(t) } } : {}), oe._set("global", { plugins: { filler: { propagate: !0 } } }); var Fn = { dataset: function(e) { var t = e.fill,
                            n = e.chart,
                            a = n.getDatasetMeta(t),
                            r = a && n.isDatasetVisible(t) && a.dataset._children || [],
                            l = r.length || 0; return l ? function(e, t) { return t < l && r[t]._view || null } : null }, boundary: function(e) { var t = e.boundary,
                            n = t ? t.x : null,
                            a = t ? t.y : null; return function(e) { return { x: null === n ? e.x : n, y: null === a ? e.y : a } } } };

                function In(e, t, n) { var a, r = e._model || {},
                        l = r.fill; if (void 0 === l && (l = !!r.backgroundColor), !1 === l || null === l) return !1; if (!0 === l) return "origin"; if (a = parseFloat(l, 10), isFinite(a) && Math.floor(a) === a) return "-" !== l[0] && "+" !== l[0] || (a = t + a), !(a === t || a < 0 || a >= n) && a; switch (l) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return l;
                        default:
                            return !1 } }

                function Rn(e) { var t, n = e.el._model || {},
                        a = e.el._scale || {},
                        r = e.fill,
                        l = null; if (isFinite(r)) return null; if ("start" === r ? l = void 0 === n.scaleBottom ? a.bottom : n.scaleBottom : "end" === r ? l = void 0 === n.scaleTop ? a.top : n.scaleTop : void 0 !== n.scaleZero ? l = n.scaleZero : a.getBasePosition ? l = a.getBasePosition() : a.getBasePixel && (l = a.getBasePixel()), null != l) { if (void 0 !== l.x && void 0 !== l.y) return l; if (de.isFinite(l)) return { x: (t = a.isHorizontal()) ? l : null, y: t ? null : l } } return null }

                function zn(e, t, n) { var a, r = e[t].fill,
                        l = [t]; if (!n) return r; for (; !1 !== r && -1 === l.indexOf(r);) { if (!isFinite(r)) return r; if (!(a = e[r])) return !1; if (a.visible) return r;
                        l.push(r), r = a.fill } return !1 }

                function Nn(e) { var t = e.fill,
                        n = "dataset"; return !1 === t ? null : (isFinite(t) || (n = "boundary"), Fn[n](e)) }

                function Bn(e) { return e && !e.skip }

                function Vn(e, t, n, a, r) { var l; if (a && r) { for (e.moveTo(t[0].x, t[0].y), l = 1; l < a; ++l) de.canvas.lineTo(e, t[l - 1], t[l]); for (e.lineTo(n[r - 1].x, n[r - 1].y), l = r - 1; l > 0; --l) de.canvas.lineTo(e, n[l], n[l - 1], !0) } } var Un = { id: "filler", afterDatasetsUpdate: function(e, t) { var n, a, r, l, i = (e.data.datasets || []).length,
                                o = t.propagate,
                                s = []; for (a = 0; a < i; ++a) l = null, (r = (n = e.getDatasetMeta(a)).dataset) && r._model && r instanceof We.Line && (l = { visible: e.isDatasetVisible(a), fill: In(r, a, i), chart: e, el: r }), n.$filler = l, s.push(l); for (a = 0; a < i; ++a)(l = s[a]) && (l.fill = zn(s, a, o), l.boundary = Rn(l), l.mapper = Nn(l)) }, beforeDatasetDraw: function(e, t) { var n = t.meta.$filler; if (n) { var a = e.ctx,
                                    r = n.el,
                                    l = r._view,
                                    i = r._children || [],
                                    o = n.mapper,
                                    s = l.backgroundColor || oe.global.defaultColor;
                                o && s && i.length && (de.canvas.clipArea(a, e.chartArea), function(e, t, n, a, r, l) { var i, o, s, u, d, c, h, _ = t.length,
                                        m = a.spanGaps,
                                        f = [],
                                        p = [],
                                        g = 0,
                                        b = 0; for (e.beginPath(), i = 0, o = _ + !!l; i < o; ++i) d = n(u = t[s = i % _]._view, s, a), c = Bn(u), h = Bn(d), c && h ? (g = f.push(u), b = p.push(d)) : g && b && (m ? (c && f.push(u), h && p.push(d)) : (Vn(e, f, p, g, b), g = b = 0, f = [], p = []));
                                    Vn(e, f, p, g, b), e.closePath(), e.fillStyle = r, e.fill() }(a, i, o, l, s, r._loop), de.canvas.unclipArea(a)) } } },
                    Jn = de.noop,
                    Gn = de.valueOrDefault;

                function qn(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth }
                oe._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(e, t) { var n = t.datasetIndex,
                                a = this.chart,
                                r = a.getDatasetMeta(n);
                            r.hidden = null === r.hidden ? !a.data.datasets[n].hidden : null, a.update() }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(e) { var t = e.data; return de.isArray(t.datasets) ? t.datasets.map(function(t, n) { return { text: t.label, fillStyle: de.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor, hidden: !e.isDatasetVisible(n), lineCap: t.borderCapStyle, lineDash: t.borderDash, lineDashOffset: t.borderDashOffset, lineJoin: t.borderJoinStyle, lineWidth: t.borderWidth, strokeStyle: t.borderColor, pointStyle: t.pointStyle, datasetIndex: n } }, this) : [] } } }, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>"); return t.push("</ul>"), t.join("") } }); var $n = me.extend({ initialize: function(e) { de.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 }, beforeUpdate: Jn, update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize }, afterUpdate: Jn, beforeSetDimensions: Jn, setDimensions: function() { var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: Jn, beforeBuildLabels: Jn, buildLabels: function() { var e = this,
                            t = e.options.labels || {},
                            n = de.callback(t.generateLabels, [e.chart], e) || [];
                        t.filter && (n = n.filter(function(n) { return t.filter(n, e.chart.data) })), e.options.reverse && n.reverse(), e.legendItems = n }, afterBuildLabels: Jn, beforeFit: Jn, fit: function() { var e = this,
                            t = e.options,
                            n = t.labels,
                            a = t.display,
                            r = e.ctx,
                            l = de.options._parseFont(n),
                            i = l.size,
                            o = e.legendHitBoxes = [],
                            s = e.minSize,
                            u = e.isHorizontal(); if (u ? (s.width = e.maxWidth, s.height = a ? 10 : 0) : (s.width = a ? 10 : 0, s.height = e.maxHeight), a)
                            if (r.font = l.string, u) { var d = e.lineWidths = [0],
                                    c = 0;
                                r.textAlign = "left", r.textBaseline = "top", de.each(e.legendItems, function(e, t) { var a = qn(n, i) + i / 2 + r.measureText(e.text).width;
                                    (0 === t || d[d.length - 1] + a + n.padding > s.width) && (c += i + n.padding, d[d.length - (t > 0 ? 0 : 1)] = n.padding), o[t] = { left: 0, top: 0, width: a, height: i }, d[d.length - 1] += a + n.padding }), s.height += c } else { var h = n.padding,
                                    _ = e.columnWidths = [],
                                    m = n.padding,
                                    f = 0,
                                    p = 0,
                                    g = i + h;
                                de.each(e.legendItems, function(e, t) { var a = qn(n, i) + i / 2 + r.measureText(e.text).width;
                                    t > 0 && p + g > s.height - h && (m += f + n.padding, _.push(f), f = 0, p = 0), f = Math.max(f, a), p += g, o[t] = { left: 0, top: 0, width: a, height: i } }), m += f, _.push(f), s.width += m }
                        e.width = s.width, e.height = s.height }, afterFit: Jn, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var e = this,
                            t = e.options,
                            n = t.labels,
                            a = oe.global,
                            r = a.defaultColor,
                            l = a.elements.line,
                            i = e.width,
                            o = e.lineWidths; if (t.display) { var s, u = e.ctx,
                                d = Gn(n.fontColor, a.defaultFontColor),
                                c = de.options._parseFont(n),
                                h = c.size;
                            u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = d, u.fillStyle = d, u.font = c.string; var _ = qn(n, h),
                                m = e.legendHitBoxes,
                                f = e.isHorizontal();
                            s = f ? { x: e.left + (i - o[0]) / 2 + n.padding, y: e.top + n.padding, line: 0 } : { x: e.left + n.padding, y: e.top + n.padding, line: 0 }; var p = h + n.padding;
                            de.each(e.legendItems, function(a, d) { var c = u.measureText(a.text).width,
                                    g = _ + h / 2 + c,
                                    b = s.x,
                                    y = s.y;
                                f ? d > 0 && b + g + n.padding > e.left + e.minSize.width && (y = s.y += p, s.line++, b = s.x = e.left + (i - o[s.line]) / 2 + n.padding) : d > 0 && y + p > e.top + e.minSize.height && (b = s.x = b + e.columnWidths[s.line] + n.padding, y = s.y = e.top + n.padding, s.line++),
                                    function(e, n, a) { if (!(isNaN(_) || _ <= 0)) { u.save(); var i = Gn(a.lineWidth, l.borderWidth); if (u.fillStyle = Gn(a.fillStyle, r), u.lineCap = Gn(a.lineCap, l.borderCapStyle), u.lineDashOffset = Gn(a.lineDashOffset, l.borderDashOffset), u.lineJoin = Gn(a.lineJoin, l.borderJoinStyle), u.lineWidth = i, u.strokeStyle = Gn(a.strokeStyle, r), u.setLineDash && u.setLineDash(Gn(a.lineDash, l.borderDash)), t.labels && t.labels.usePointStyle) { var o = _ * Math.SQRT2 / 2;
                                                de.canvas.drawPoint(u, a.pointStyle, o, e + _ / 2, n + h / 2) } else 0 !== i && u.strokeRect(e, n, _, h), u.fillRect(e, n, _, h);
                                            u.restore() } }(b, y, a), m[d].left = b, m[d].top = y,
                                    function(e, t, n, a) { var r = h / 2,
                                            l = _ + r + e,
                                            i = t + r;
                                        u.fillText(n.text, l, i), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(l, i), u.lineTo(l + a, i), u.stroke()) }(b, y, a, c), f ? s.x += g + n.padding : s.y += p }) } }, _getLegendItemAt: function(e, t) { var n, a, r, l = this; if (e >= l.left && e <= l.right && t >= l.top && t <= l.bottom)
                            for (r = l.legendHitBoxes, n = 0; n < r.length; ++n)
                                if (e >= (a = r[n]).left && e <= a.left + a.width && t >= a.top && t <= a.top + a.height) return l.legendItems[n];
                        return null }, handleEvent: function(e) { var t, n = this,
                            a = n.options,
                            r = "mouseup" === e.type ? "click" : e.type; if ("mousemove" === r) { if (!a.onHover && !a.onLeave) return } else { if ("click" !== r) return; if (!a.onClick) return }
                        t = n._getLegendItemAt(e.x, e.y), "click" === r ? t && a.onClick && a.onClick.call(n, e.native, t) : (a.onLeave && t !== n._hoveredItem && (n._hoveredItem && a.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), a.onHover && t && a.onHover.call(n, e.native, t)) } });

                function Kn(e, t) { var n = new $n({ ctx: e.ctx, options: t, chart: e });
                    yt.configure(e, n, t), yt.addBox(e, n), e.legend = n } var Zn = { id: "legend", _element: $n, beforeInit: function(e) { var t = e.options.legend;
                            t && Kn(e, t) }, beforeUpdate: function(e) { var t = e.options.legend,
                                n = e.legend;
                            t ? (de.mergeIf(t, oe.global.legend), n ? (yt.configure(e, n, t), n.options = t) : Kn(e, t)) : n && (yt.removeBox(e, n), delete e.legend) }, afterEvent: function(e, t) { var n = e.legend;
                            n && n.handleEvent(t) } },
                    Qn = de.noop;
                oe._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } }); var Xn = me.extend({ initialize: function(e) { de.extend(this, e), this.legendHitBoxes = [] }, beforeUpdate: Qn, update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize }, afterUpdate: Qn, beforeSetDimensions: Qn, setDimensions: function() { var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: Qn, beforeBuildLabels: Qn, buildLabels: Qn, afterBuildLabels: Qn, beforeFit: Qn, fit: function() { var e = this,
                            t = e.options,
                            n = t.display,
                            a = e.minSize,
                            r = de.isArray(t.text) ? t.text.length : 1,
                            l = de.options._parseFont(t),
                            i = n ? r * l.lineHeight + 2 * t.padding : 0;
                        e.isHorizontal() ? (a.width = e.maxWidth, a.height = i) : (a.width = i, a.height = e.maxHeight), e.width = a.width, e.height = a.height }, afterFit: Qn, isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e }, draw: function() { var e = this,
                            t = e.ctx,
                            n = e.options; if (n.display) { var a, r, l, i = de.options._parseFont(n),
                                o = i.lineHeight,
                                s = o / 2 + n.padding,
                                u = 0,
                                d = e.top,
                                c = e.left,
                                h = e.bottom,
                                _ = e.right;
                            t.fillStyle = de.valueOrDefault(n.fontColor, oe.global.defaultFontColor), t.font = i.string, e.isHorizontal() ? (r = c + (_ - c) / 2, l = d + s, a = _ - c) : (r = "left" === n.position ? c + s : _ - s, l = d + (h - d) / 2, a = h - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(r, l), t.rotate(u), t.textAlign = "center", t.textBaseline = "middle"; var m = n.text; if (de.isArray(m))
                                for (var f = 0, p = 0; p < m.length; ++p) t.fillText(m[p], 0, f, a), f += o;
                            else t.fillText(m, 0, 0, a);
                            t.restore() } } });

                function ea(e, t) { var n = new Xn({ ctx: e.ctx, options: t, chart: e });
                    yt.configure(e, n, t), yt.addBox(e, n), e.titleBlock = n } var ta = {},
                    na = Un,
                    aa = Zn,
                    ra = { id: "title", _element: Xn, beforeInit: function(e) { var t = e.options.title;
                            t && ea(e, t) }, beforeUpdate: function(e) { var t = e.options.title,
                                n = e.titleBlock;
                            t ? (de.mergeIf(t, oe.global.title), n ? (yt.configure(e, n, t), n.options = t) : ea(e, t)) : n && (yt.removeBox(e, n), delete e.titleBlock) } }; for (var la in ta.filler = na, ta.legend = aa, ta.title = ra, Jt.helpers = de,
                        function() {
                            function e(e, t, n) { var a; return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a }

                            function t(e) { return null != e && "none" !== e }

                            function n(n, a, r) { var l = document.defaultView,
                                    i = de._getParentNode(n),
                                    o = l.getComputedStyle(n)[a],
                                    s = l.getComputedStyle(i)[a],
                                    u = t(o),
                                    d = t(s),
                                    c = Number.POSITIVE_INFINITY; return u || d ? Math.min(u ? e(o, n, r) : c, d ? e(s, i, r) : c) : "none" }
                            de.where = function(e, t) { if (de.isArray(e) && Array.prototype.filter) return e.filter(t); var n = []; return de.each(e, function(e) { t(e) && n.push(e) }), n }, de.findIndex = Array.prototype.findIndex ? function(e, t, n) { return e.findIndex(t, n) } : function(e, t, n) { n = void 0 === n ? e : n; for (var a = 0, r = e.length; a < r; ++a)
                                    if (t.call(n, e[a], a, e)) return a;
                                return -1 }, de.findNextWhere = function(e, t, n) { de.isNullOrUndef(n) && (n = -1); for (var a = n + 1; a < e.length; a++) { var r = e[a]; if (t(r)) return r } }, de.findPreviousWhere = function(e, t, n) { de.isNullOrUndef(n) && (n = e.length); for (var a = n - 1; a >= 0; a--) { var r = e[a]; if (t(r)) return r } }, de.isNumber = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, de.almostEquals = function(e, t, n) { return Math.abs(e - t) < n }, de.almostWhole = function(e, t) { var n = Math.round(e); return n - t < e && n + t > e }, de.max = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.max(e, t) }, Number.NEGATIVE_INFINITY) }, de.min = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.min(e, t) }, Number.POSITIVE_INFINITY) }, de.sign = Math.sign ? function(e) { return Math.sign(e) } : function(e) { return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1 }, de.log10 = Math.log10 ? function(e) { return Math.log10(e) } : function(e) { var t = Math.log(e) * Math.LOG10E,
                                    n = Math.round(t); return e === Math.pow(10, n) ? n : t }, de.toRadians = function(e) { return e * (Math.PI / 180) }, de.toDegrees = function(e) { return e * (180 / Math.PI) }, de._decimalPlaces = function(e) { if (de.isFinite(e)) { for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++; return n } }, de.getAngleFromPoint = function(e, t) { var n = t.x - e.x,
                                    a = t.y - e.y,
                                    r = Math.sqrt(n * n + a * a),
                                    l = Math.atan2(a, n); return l < -.5 * Math.PI && (l += 2 * Math.PI), { angle: l, distance: r } }, de.distanceBetweenPoints = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, de.aliasPixel = function(e) { return e % 2 == 0 ? 0 : .5 }, de._alignPixel = function(e, t, n) { var a = e.currentDevicePixelRatio,
                                    r = n / 2; return Math.round((t - r) * a) / a + r }, de.splineCurve = function(e, t, n, a) { var r = e.skip ? t : e,
                                    l = t,
                                    i = n.skip ? t : n,
                                    o = Math.sqrt(Math.pow(l.x - r.x, 2) + Math.pow(l.y - r.y, 2)),
                                    s = Math.sqrt(Math.pow(i.x - l.x, 2) + Math.pow(i.y - l.y, 2)),
                                    u = o / (o + s),
                                    d = s / (o + s),
                                    c = a * (u = isNaN(u) ? 0 : u),
                                    h = a * (d = isNaN(d) ? 0 : d); return { previous: { x: l.x - c * (i.x - r.x), y: l.y - c * (i.y - r.y) }, next: { x: l.x + h * (i.x - r.x), y: l.y + h * (i.y - r.y) } } }, de.EPSILON = Number.EPSILON || 1e-14, de.splineCurveMonotone = function(e) { var t, n, a, r, l, i, o, s, u, d = (e || []).map(function(e) { return { model: e._model, deltaK: 0, mK: 0 } }),
                                    c = d.length; for (t = 0; t < c; ++t)
                                    if (!(a = d[t]).model.skip) { if (n = t > 0 ? d[t - 1] : null, (r = t < c - 1 ? d[t + 1] : null) && !r.model.skip) { var h = r.model.x - a.model.x;
                                            a.deltaK = 0 !== h ? (r.model.y - a.model.y) / h : 0 }
                                        a.mK = !n || n.model.skip ? a.deltaK : !r || r.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? 0 : (n.deltaK + a.deltaK) / 2 }
                                for (t = 0; t < c - 1; ++t) r = d[t + 1], (a = d[t]).model.skip || r.model.skip || (de.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = r.mK = 0 : (l = a.mK / a.deltaK, i = r.mK / a.deltaK, (s = Math.pow(l, 2) + Math.pow(i, 2)) <= 9 || (o = 3 / Math.sqrt(s), a.mK = l * o * a.deltaK, r.mK = i * o * a.deltaK))); for (t = 0; t < c; ++t)(a = d[t]).model.skip || (r = t < c - 1 ? d[t + 1] : null, (n = t > 0 ? d[t - 1] : null) && !n.model.skip && (a.model.controlPointPreviousX = a.model.x - (u = (a.model.x - n.model.x) / 3), a.model.controlPointPreviousY = a.model.y - u * a.mK), r && !r.model.skip && (a.model.controlPointNextX = a.model.x + (u = (r.model.x - a.model.x) / 3), a.model.controlPointNextY = a.model.y + u * a.mK)) }, de.nextItem = function(e, t, n) { return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1] }, de.previousItem = function(e, t, n) { return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1] }, de.niceNum = function(e, t) { var n = Math.floor(de.log10(e)),
                                    a = e / Math.pow(10, n); return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n) }, de.requestAnimFrame = "undefined" == typeof window ? function(e) { e() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) }, de.getRelativePosition = function(e, t) { var n, a, r = e.originalEvent || e,
                                    l = e.target || e.srcElement,
                                    i = l.getBoundingClientRect(),
                                    o = r.touches;
                                o && o.length > 0 ? (n = o[0].clientX, a = o[0].clientY) : (n = r.clientX, a = r.clientY); var s = parseFloat(de.getStyle(l, "padding-left")),
                                    u = parseFloat(de.getStyle(l, "padding-top")),
                                    d = parseFloat(de.getStyle(l, "padding-right")),
                                    c = parseFloat(de.getStyle(l, "padding-bottom")),
                                    h = i.bottom - i.top - u - c; return { x: n = Math.round((n - i.left - s) / (i.right - i.left - s - d) * l.width / t.currentDevicePixelRatio), y: a = Math.round((a - i.top - u) / h * l.height / t.currentDevicePixelRatio) } }, de.getConstraintWidth = function(e) { return n(e, "max-width", "clientWidth") }, de.getConstraintHeight = function(e) { return n(e, "max-height", "clientHeight") }, de._calculatePadding = function(e, t, n) { return (t = de.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10) }, de._getParentNode = function(e) { var t = e.parentNode; return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t }, de.getMaximumWidth = function(e) { var t = de._getParentNode(e); if (!t) return e.clientWidth; var n = t.clientWidth,
                                    a = n - de._calculatePadding(t, "padding-left", n) - de._calculatePadding(t, "padding-right", n),
                                    r = de.getConstraintWidth(e); return isNaN(r) ? a : Math.min(a, r) }, de.getMaximumHeight = function(e) { var t = de._getParentNode(e); if (!t) return e.clientHeight; var n = t.clientHeight,
                                    a = n - de._calculatePadding(t, "padding-top", n) - de._calculatePadding(t, "padding-bottom", n),
                                    r = de.getConstraintHeight(e); return isNaN(r) ? a : Math.min(a, r) }, de.getStyle = function(e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t) }, de.retinaScale = function(e, t) { var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) { var a = e.canvas,
                                        r = e.height,
                                        l = e.width;
                                    a.height = r * n, a.width = l * n, e.ctx.scale(n, n), a.style.height || a.style.width || (a.style.height = r + "px", a.style.width = l + "px") } }, de.fontString = function(e, t, n) { return t + " " + e + "px " + n }, de.longestText = function(e, t, n, a) { var r = (a = a || {}).data = a.data || {},
                                    l = a.garbageCollect = a.garbageCollect || [];
                                a.font !== t && (r = a.data = {}, l = a.garbageCollect = [], a.font = t), e.font = t; var i = 0;
                                de.each(n, function(t) { null != t && !0 !== de.isArray(t) ? i = de.measureText(e, r, l, i, t) : de.isArray(t) && de.each(t, function(t) { null == t || de.isArray(t) || (i = de.measureText(e, r, l, i, t)) }) }); var o = l.length / 2; if (o > n.length) { for (var s = 0; s < o; s++) delete r[l[s]];
                                    l.splice(0, o) } return i }, de.measureText = function(e, t, n, a, r) { var l = t[r]; return l || (l = t[r] = e.measureText(r).width, n.push(r)), l > a && (a = l), a }, de.numberOfLabelLines = function(e) { var t = 1; return de.each(e, function(e) { de.isArray(e) && e.length > t && (t = e.length) }), t }, de.color = G ? function(e) { return e instanceof CanvasGradient && (e = oe.global.defaultColor), G(e) } : function(e) { return console.error("Color.js not found!"), e }, de.getHoverColor = function(e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : de.color(e).saturate(.5).darken(.1).rgbString() } }(), Jt._adapters = $t, Jt.Animation = pe, Jt.animationService = ge, Jt.controllers = ot, Jt.DatasetController = Le, Jt.defaults = oe, Jt.Element = me, Jt.elements = We, Jt.Interaction = mt, Jt.layouts = yt, Jt.platform = Ht, Jt.plugins = jt, Jt.Scale = tn, Jt.scaleService = Ct, Jt.Ticks = Kt, Jt.Tooltip = Rt, Jt.helpers.each(En, function(e, t) { Jt.scaleService.registerScaleType(t, e, e._defaults) }), ta) ta.hasOwnProperty(la) && Jt.plugins.register(ta[la]);
                Jt.platform.initialize(); var ia = Jt; return "undefined" != typeof window && (window.Chart = Jt), Jt.Chart = Jt, Jt.Legend = ta.legend._element, Jt.Title = ta.title._element, Jt.pluginService = Jt.plugins, Jt.PluginBase = Jt.Element.extend({}), Jt.canvasHelpers = Jt.helpers.canvas, Jt.layoutService = Jt.layouts, Jt.LinearScaleBase = rn, Jt.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(e) { Jt[e] = function(t, n) { return new Jt(t, Jt.helpers.merge(n || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })) } }), ia }(function() { try { return n("wd/R") } catch (e) {} }()) }, OIYi: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }) }() }, Oaa7: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, Ob0Z: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
                    n = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };

                function a(e, t, n, a) { var r = ""; if (t) switch (n) {
                        case "s":
                            r = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926"; break;
                        case "ss":
                            r = "%d \u0938\u0947\u0915\u0902\u0926"; break;
                        case "m":
                            r = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f"; break;
                        case "mm":
                            r = "%d \u092e\u093f\u0928\u093f\u091f\u0947"; break;
                        case "h":
                            r = "\u090f\u0915 \u0924\u093e\u0938"; break;
                        case "hh":
                            r = "%d \u0924\u093e\u0938"; break;
                        case "d":
                            r = "\u090f\u0915 \u0926\u093f\u0935\u0938"; break;
                        case "dd":
                            r = "%d \u0926\u093f\u0935\u0938"; break;
                        case "M":
                            r = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e"; break;
                        case "MM":
                            r = "%d \u092e\u0939\u093f\u0928\u0947"; break;
                        case "y":
                            r = "\u090f\u0915 \u0935\u0930\u094d\u0937"; break;
                        case "yy":
                            r = "%d \u0935\u0930\u094d\u0937\u0947" } else switch (n) {
                        case "s":
                            r = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902"; break;
                        case "ss":
                            r = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902"; break;
                        case "m":
                            r = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e"; break;
                        case "mm":
                            r = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902"; break;
                        case "h":
                            r = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e"; break;
                        case "hh":
                            r = "%d \u0924\u093e\u0938\u093e\u0902"; break;
                        case "d":
                            r = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e"; break;
                        case "dd":
                            r = "%d \u0926\u093f\u0935\u0938\u093e\u0902"; break;
                        case "M":
                            r = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e"; break;
                        case "MM":
                            r = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902"; break;
                        case "y":
                            r = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e"; break;
                        case "yy":
                            r = "%d \u0935\u0930\u094d\u0937\u093e\u0902" }
                    return r.replace(/%d/i, e) }
                e.defineLocale("mr", { months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"), monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u0935\u093e\u091c\u0924\u093e", LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e", LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u093e\u0932] LT", lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u0927\u094d\u092f\u0947", past: "%s\u092a\u0942\u0930\u094d\u0935\u0940", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === t ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === t ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === t ? e >= 10 ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, OjkT: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
                    n = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };
                e.defineLocale("ne", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"), monthsParseExact: !0, weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"), weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"), weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A\u0915\u094b h:mm \u092c\u091c\u0947", LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947" }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u093f" === t ? e < 4 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === t ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === t ? e >= 10 ? e : e + 12 : "\u0938\u093e\u0901\u091d" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 3 ? "\u0930\u093e\u0924\u093f" : e < 12 ? "\u092c\u093f\u0939\u093e\u0928" : e < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u092d\u094b\u0932\u093f] LT", nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT", lastDay: "[\u0939\u093f\u091c\u094b] LT", lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u093e", past: "%s \u0905\u0917\u093e\u0921\u093f", s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f", mm: "%d \u092e\u093f\u0928\u0947\u091f", h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e", hh: "%d \u0918\u0923\u094d\u091f\u093e", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e", MM: "%d \u092e\u0939\u093f\u0928\u093e", y: "\u090f\u0915 \u092c\u0930\u094d\u0937", yy: "%d \u092c\u0930\u094d\u0937" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, Oxv6: function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-\u0443\u043c", 1: "-\u0443\u043c", 2: "-\u044e\u043c", 3: "-\u044e\u043c", 4: "-\u0443\u043c", 5: "-\u0443\u043c", 6: "-\u0443\u043c", 7: "-\u0443\u043c", 8: "-\u0443\u043c", 9: "-\u0443\u043c", 10: "-\u0443\u043c", 12: "-\u0443\u043c", 13: "-\u0443\u043c", 20: "-\u0443\u043c", 30: "-\u044e\u043c", 40: "-\u0443\u043c", 50: "-\u0443\u043c", 60: "-\u0443\u043c", 70: "-\u0443\u043c", 80: "-\u0443\u043c", 90: "-\u0443\u043c", 100: "-\u0443\u043c" };
                e.defineLocale("tg", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"), weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"), weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT", lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT", lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT", sameElse: "L" }, relativeTime: { future: "\u0431\u0430\u044a\u0434\u0438 %s", past: "%s \u043f\u0435\u0448", s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f", m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430", mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430", h: "\u044f\u043a \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u044f\u043a \u0440\u04ef\u0437", dd: "%d \u0440\u04ef\u0437", M: "\u044f\u043a \u043c\u043e\u04b3", MM: "%d \u043c\u043e\u04b3", y: "\u044f\u043a \u0441\u043e\u043b", yy: "%d \u0441\u043e\u043b" }, meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0448\u0430\u0431" === t ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === t ? e : "\u0440\u04ef\u0437" === t ? e >= 11 ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/, ordinal: function(e) { return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, PA2r: function(e, t, n) {! function(e) { "use strict"; var t = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                    n = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
                    a = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
                    r = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;

                function l(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

                function i(e, t, n, a) { var r = e + " "; switch (n) {
                        case "s":
                            return t || a ? "p\xe1r sekund" : "p\xe1r sekundami";
                        case "ss":
                            return t || a ? r + (l(e) ? "sekundy" : "sekund") : r + "sekundami";
                        case "m":
                            return t ? "minuta" : a ? "minutu" : "minutou";
                        case "mm":
                            return t || a ? r + (l(e) ? "minuty" : "minut") : r + "minutami";
                        case "h":
                            return t ? "hodina" : a ? "hodinu" : "hodinou";
                        case "hh":
                            return t || a ? r + (l(e) ? "hodiny" : "hodin") : r + "hodinami";
                        case "d":
                            return t || a ? "den" : "dnem";
                        case "dd":
                            return t || a ? r + (l(e) ? "dny" : "dn\xed") : r + "dny";
                        case "M":
                            return t || a ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                        case "MM":
                            return t || a ? r + (l(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : r + "m\u011bs\xedci";
                        case "y":
                            return t || a ? "rok" : "rokem";
                        case "yy":
                            return t || a ? r + (l(e) ? "roky" : "let") : r + "lety" } }
                e.defineLocale("cs", { months: t, monthsShort: n, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i, monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"), weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"), weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[z\xedtra v] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[v ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve st\u0159edu v] LT";
                                case 4:
                                    return "[ve \u010dtvrtek v] LT";
                                case 5:
                                    return "[v p\xe1tek v] LT";
                                case 6:
                                    return "[v sobotu v] LT" } }, lastDay: "[v\u010dera v] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[minulou ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[minul\xe9] dddd [v] LT";
                                case 3:
                                    return "[minulou st\u0159edu v] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "p\u0159ed %s", s: i, ss: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, PeUW: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0be7", 2: "\u0be8", 3: "\u0be9", 4: "\u0bea", 5: "\u0beb", 6: "\u0bec", 7: "\u0bed", 8: "\u0bee", 9: "\u0bef", 0: "\u0be6" },
                    n = { "\u0be7": "1", "\u0be8": "2", "\u0be9": "3", "\u0bea": "4", "\u0beb": "5", "\u0bec": "6", "\u0bed": "7", "\u0bee": "8", "\u0bef": "9", "\u0be6": "0" };
                e.defineLocale("ta", { months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"), weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"), weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT", nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT", nextWeek: "dddd, LT", lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT", lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0b87\u0bb2\u0bcd", past: "%s \u0bae\u0bc1\u0ba9\u0bcd", s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd", mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd", h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd", dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd", M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd", MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd", y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd", yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd" }, dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/, ordinal: function(e) { return e + "\u0bb5\u0ba4\u0bc1" }, preparse: function(e) { return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/, meridiem: function(e, t, n) { return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === t ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === t || "\u0b95\u0bbe\u0bb2\u0bc8" === t ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, PpIw: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0ce7", 2: "\u0ce8", 3: "\u0ce9", 4: "\u0cea", 5: "\u0ceb", 6: "\u0cec", 7: "\u0ced", 8: "\u0cee", 9: "\u0cef", 0: "\u0ce6" },
                    n = { "\u0ce7": "1", "\u0ce8": "2", "\u0ce9": "3", "\u0cea": "4", "\u0ceb": "5", "\u0cec": "6", "\u0ced": "7", "\u0cee": "8", "\u0cef": "9", "\u0ce6": "0" };
                e.defineLocale("kn", { months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"), monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"), monthsParseExact: !0, weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"), weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"), weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT", nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT", nextWeek: "dddd, LT", lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT", lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0ca8\u0c82\u0ca4\u0cb0", past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6", s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1", ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1", m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6", hh: "%d \u0c97\u0c82\u0c9f\u0cc6", d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8", dd: "%d \u0ca6\u0cbf\u0ca8", M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7", yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7" }, preparse: function(e) { return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === t ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === t ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === t ? e >= 10 ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" }, dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/, ordinal: function(e) { return e + "\u0ca8\u0cc6\u0cd5" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, Qj4J: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ar-kw", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 12 } }) }() }, RAwQ: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? r[n][0] : r[n][1] }

                function a(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var t = e % 10; return a(0 === t ? e / 10 : t) } if (e < 1e4) { for (; e >= 10;) e /= 10; return a(e) } return a(e /= 1e3) }
                n("wd/R").defineLocale("lb", { months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"), weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[G\xebschter um] LT", lastWeek: function() { switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: function(e) { return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d M\xe9int", y: t, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, RnhZ: function(e, t, n) { var a = { "./af": "K/tc", "./af.js": "K/tc", "./ar": "jnO4", "./ar-dz": "o1bE", "./ar-dz.js": "o1bE", "./ar-kw": "Qj4J", "./ar-kw.js": "Qj4J", "./ar-ly": "HP3h", "./ar-ly.js": "HP3h", "./ar-ma": "CoRJ", "./ar-ma.js": "CoRJ", "./ar-sa": "gjCT", "./ar-sa.js": "gjCT", "./ar-tn": "bYM6", "./ar-tn.js": "bYM6", "./ar.js": "jnO4", "./az": "SFxW", "./az.js": "SFxW", "./be": "H8ED", "./be.js": "H8ED", "./bg": "hKrs", "./bg.js": "hKrs", "./bm": "p/rL", "./bm.js": "p/rL", "./bn": "kEOa", "./bn.js": "kEOa", "./bo": "0mo+", "./bo.js": "0mo+", "./br": "aIdf", "./br.js": "aIdf", "./bs": "JVSJ", "./bs.js": "JVSJ", "./ca": "1xZ4", "./ca.js": "1xZ4", "./cs": "PA2r", "./cs.js": "PA2r", "./cv": "A+xa", "./cv.js": "A+xa", "./cy": "l5ep", "./cy.js": "l5ep", "./da": "DxQv", "./da.js": "DxQv", "./de": "tGlX", "./de-at": "s+uk", "./de-at.js": "s+uk", "./de-ch": "u3GI", "./de-ch.js": "u3GI", "./de.js": "tGlX", "./dv": "WYrj", "./dv.js": "WYrj", "./el": "jUeY", "./el.js": "jUeY", "./en-SG": "zavE", "./en-SG.js": "zavE", "./en-au": "Dmvi", "./en-au.js": "Dmvi", "./en-ca": "OIYi", "./en-ca.js": "OIYi", "./en-gb": "Oaa7", "./en-gb.js": "Oaa7", "./en-ie": "4dOw", "./en-ie.js": "4dOw", "./en-il": "czMo", "./en-il.js": "czMo", "./en-nz": "b1Dy", "./en-nz.js": "b1Dy", "./eo": "Zduo", "./eo.js": "Zduo", "./es": "iYuL", "./es-do": "CjzT", "./es-do.js": "CjzT", "./es-us": "Vclq", "./es-us.js": "Vclq", "./es.js": "iYuL", "./et": "7BjC", "./et.js": "7BjC", "./eu": "D/JM", "./eu.js": "D/JM", "./fa": "jfSC", "./fa.js": "jfSC", "./fi": "gekB", "./fi.js": "gekB", "./fo": "ByF4", "./fo.js": "ByF4", "./fr": "nyYc", "./fr-ca": "2fjn", "./fr-ca.js": "2fjn", "./fr-ch": "Dkky", "./fr-ch.js": "Dkky", "./fr.js": "nyYc", "./fy": "cRix", "./fy.js": "cRix", "./ga": "USCx", "./ga.js": "USCx", "./gd": "9rRi", "./gd.js": "9rRi", "./gl": "iEDd", "./gl.js": "iEDd", "./gom-latn": "DKr+", "./gom-latn.js": "DKr+", "./gu": "4MV3", "./gu.js": "4MV3", "./he": "x6pH", "./he.js": "x6pH", "./hi": "3E1r", "./hi.js": "3E1r", "./hr": "S6ln", "./hr.js": "S6ln", "./hu": "WxRl", "./hu.js": "WxRl", "./hy-am": "1rYy", "./hy-am.js": "1rYy", "./id": "UDhR", "./id.js": "UDhR", "./is": "BVg3", "./is.js": "BVg3", "./it": "bpih", "./it-ch": "bxKX", "./it-ch.js": "bxKX", "./it.js": "bpih", "./ja": "B55N", "./ja.js": "B55N", "./jv": "tUCv", "./jv.js": "tUCv", "./ka": "IBtZ", "./ka.js": "IBtZ", "./kk": "bXm7", "./kk.js": "bXm7", "./km": "6B0Y", "./km.js": "6B0Y", "./kn": "PpIw", "./kn.js": "PpIw", "./ko": "Ivi+", "./ko.js": "Ivi+", "./ku": "JCF/", "./ku.js": "JCF/", "./ky": "lgnt", "./ky.js": "lgnt", "./lb": "RAwQ", "./lb.js": "RAwQ", "./lo": "sp3z", "./lo.js": "sp3z", "./lt": "JvlW", "./lt.js": "JvlW", "./lv": "uXwI", "./lv.js": "uXwI", "./me": "KTz0", "./me.js": "KTz0", "./mi": "aIsn", "./mi.js": "aIsn", "./mk": "aQkU", "./mk.js": "aQkU", "./ml": "AvvY", "./ml.js": "AvvY", "./mn": "lYtQ", "./mn.js": "lYtQ", "./mr": "Ob0Z", "./mr.js": "Ob0Z", "./ms": "6+QB", "./ms-my": "ZAMP", "./ms-my.js": "ZAMP", "./ms.js": "6+QB", "./mt": "G0Uy", "./mt.js": "G0Uy", "./my": "honF", "./my.js": "honF", "./nb": "bOMt", "./nb.js": "bOMt", "./ne": "OjkT", "./ne.js": "OjkT", "./nl": "+s0g", "./nl-be": "2ykv", "./nl-be.js": "2ykv", "./nl.js": "+s0g", "./nn": "uEye", "./nn.js": "uEye", "./pa-in": "8/+R", "./pa-in.js": "8/+R", "./pl": "jVdC", "./pl.js": "jVdC", "./pt": "8mBD", "./pt-br": "0tRk", "./pt-br.js": "0tRk", "./pt.js": "8mBD", "./ro": "lyxo", "./ro.js": "lyxo", "./ru": "lXzo", "./ru.js": "lXzo", "./sd": "Z4QM", "./sd.js": "Z4QM", "./se": "//9w", "./se.js": "//9w", "./si": "7aV9", "./si.js": "7aV9", "./sk": "e+ae", "./sk.js": "e+ae", "./sl": "gVVK", "./sl.js": "gVVK", "./sq": "yPMs", "./sq.js": "yPMs", "./sr": "zx6S", "./sr-cyrl": "E+lV", "./sr-cyrl.js": "E+lV", "./sr.js": "zx6S", "./ss": "Ur1D", "./ss.js": "Ur1D", "./sv": "X709", "./sv.js": "X709", "./sw": "dNwA", "./sw.js": "dNwA", "./ta": "PeUW", "./ta.js": "PeUW", "./te": "XLvN", "./te.js": "XLvN", "./tet": "V2x9", "./tet.js": "V2x9", "./tg": "Oxv6", "./tg.js": "Oxv6", "./th": "EOgW", "./th.js": "EOgW", "./tl-ph": "Dzi0", "./tl-ph.js": "Dzi0", "./tlh": "z3Vd", "./tlh.js": "z3Vd", "./tr": "DoHr", "./tr.js": "DoHr", "./tzl": "z1FC", "./tzl.js": "z1FC", "./tzm": "wQk9", "./tzm-latn": "tT3J", "./tzm-latn.js": "tT3J", "./tzm.js": "wQk9", "./ug-cn": "YRex", "./ug-cn.js": "YRex", "./uk": "raLr", "./uk.js": "raLr", "./ur": "UpQW", "./ur.js": "UpQW", "./uz": "Loxo", "./uz-latn": "AQ68", "./uz-latn.js": "AQ68", "./uz.js": "Loxo", "./vi": "KSF8", "./vi.js": "KSF8", "./x-pseudo": "/X5v", "./x-pseudo.js": "/X5v", "./yo": "fzPg", "./yo.js": "fzPg", "./zh-cn": "XDpg", "./zh-cn.js": "XDpg", "./zh-hk": "SatO", "./zh-hk.js": "SatO", "./zh-tw": "kOpN", "./zh-tw.js": "kOpN" };

            function r(e) { var t = l(e); return n(t) }

            function l(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return a[e] }
            r.keys = function() { return Object.keys(a) }, r.resolve = l, e.exports = r, r.id = "RnhZ" }, S6ln: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = e + " "; switch (n) {
                        case "ss":
                            return a + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return a + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return a + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                        case "dd":
                            return a + (1 === e ? "dan" : "dana");
                        case "MM":
                            return a + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                        case "yy":
                            return a + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina") } }
                n("wd/R").defineLocale("hr", { months: { format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT" } }, lastDay: "[ju\u010der u] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }() }, SFxW: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xfcnc\xfc", 4: "-\xfcnc\xfc", 100: "-\xfcnc\xfc", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };
                e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"), weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"), weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xfcn\u0259n] LT", lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xe7\u0259 saniy\u0259", ss: "%d saniy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/, isPM: function(e) { return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/, ordinal: function(e) { if (0 === e) return e + "-\u0131nc\u0131"; var n = e % 10; return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, SatO: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("zh-hk", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u9031";
                            default:
                                return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }) }() }, UDhR: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }() }, USCx: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ga", { months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "M\xe9itheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deaireadh F\xf3mhair", "Samhain", "Nollaig"], monthsShort: ["Ean\xe1", "Feab", "M\xe1rt", "Aibr", "Beal", "M\xe9it", "I\xfail", "L\xfana", "Me\xe1n", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Satharn"], weekdaysShort: ["Dom", "Lua", "M\xe1i", "C\xe9a", "D\xe9a", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "M\xe1", "Ce", "D\xe9", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Am\xe1rach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inn\xe9 aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s \xf3 shin", s: "c\xfapla soicind", ss: "%d soicind", m: "n\xf3im\xe9ad", mm: "%d n\xf3im\xe9ad", h: "uair an chloig", hh: "%d uair an chloig", d: "l\xe1", dd: "%d l\xe1", M: "m\xed", MM: "%d m\xed", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }) }() }, UpQW: function(e, t, n) {! function(e) { "use strict"; var t = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
                    a = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
                n("wd/R").defineLocale("ur", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT", nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT", nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT", lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT", lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0628\u0639\u062f", past: "%s \u0642\u0628\u0644", s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688", ss: "%d \u0633\u06cc\u06a9\u0646\u0688", m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679", mm: "%d \u0645\u0646\u0679", h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1", hh: "%d \u06af\u06be\u0646\u0679\u06d2", d: "\u0627\u06cc\u06a9 \u062f\u0646", dd: "%d \u062f\u0646", M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1", MM: "%d \u0645\u0627\u06c1", y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }) }() }, Ur1D: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, t, n) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }) }() }, V2x9: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, Vclq: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, WYrj: function(e, t, n) {! function(e) { "use strict"; var t = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
                    a = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
                n("wd/R").defineLocale("dv", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0789\u0786|\u0789\u078a/, isPM: function(e) { return "\u0789\u078a" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0789\u0786" : "\u0789\u078a" }, calendar: { sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT", nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT", nextWeek: "dddd LT", lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT", lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT", sameElse: "L" }, relativeTime: { future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s", past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s", s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0", ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa", m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0", mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d", h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0", hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d", d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0", dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d", M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0", MM: "\u0789\u07a6\u0790\u07b0 %d", y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0", yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 7, doy: 12 } }) }() }, WxRl: function(e, t, n) {! function(e) { "use strict"; var t = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

                function n(e, t, n, a) { var r = e; switch (n) {
                        case "s":
                            return a || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
                        case "ss":
                            return r + (a || t) ? " m\xe1sodperc" : " m\xe1sodperce";
                        case "m":
                            return "egy" + (a || t ? " perc" : " perce");
                        case "mm":
                            return r + (a || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (a || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "hh":
                            return r + (a || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "d":
                            return "egy" + (a || t ? " nap" : " napja");
                        case "dd":
                            return r + (a || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (a || t ? " h\xf3nap" : " h\xf3napja");
                        case "MM":
                            return r + (a || t ? " h\xf3nap" : " h\xf3napja");
                        case "y":
                            return "egy" + (a || t ? " \xe9v" : " \xe9ve");
                        case "yy":
                            return r + (a || t ? " \xe9v" : " \xe9ve") } return "" }

                function a(e) { return (e ? "" : "[m\xfalt] ") + "[" + t[this.day()] + "] LT[-kor]" }
                e.defineLocale("hu", { months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"), monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"), weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"), weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, n) { return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return a.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return a.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s m\xfalva", past: "%s", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, X709: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"), weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"), weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xe5r] LT", nextWeek: "[P\xe5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xf6r %s sedan", s: "n\xe5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xe5nad", MM: "%d m\xe5nader", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e") }, week: { dow: 1, doy: 4 } }) }() }, XDpg: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("zh-cn", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206", LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u5468";
                            default:
                                return e } }, relativeTime: { future: "%s\u5185", past: "%s\u524d", s: "\u51e0\u79d2", ss: "%d \u79d2", m: "1 \u5206\u949f", mm: "%d \u5206\u949f", h: "1 \u5c0f\u65f6", hh: "%d \u5c0f\u65f6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4e2a\u6708", MM: "%d \u4e2a\u6708", y: "1 \u5e74", yy: "%d \u5e74" }, week: { dow: 1, doy: 4 } }) }() }, XLvN: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("te", { months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"), monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"), monthsParseExact: !0, weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"), weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"), weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT", nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT", nextWeek: "dddd, LT", lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT", lastWeek: "[\u0c17\u0c24] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0c32\u0c4b", past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02", s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41", ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41", m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02", mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41", h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f", hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41", d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41", dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41", M: "\u0c12\u0c15 \u0c28\u0c46\u0c32", MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41", y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02", yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41" }, dayOfMonthOrdinalParse: /\d{1,2}\u0c35/, ordinal: "%d\u0c35", meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === t ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === t ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === t ? e >= 10 ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" }, week: { dow: 0, doy: 6 } }) }() }, YRex: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ug-cn", { months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"), weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649", LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm", LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm" }, meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === t || "\u0633\u06d5\u06be\u06d5\u0631" === t || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === t ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === t || "\u0643\u06d5\u0686" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : a < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : a < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : a < 1230 ? "\u0686\u06c8\u0634" : a < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686" }, calendar: { sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT", nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT", nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT", lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0643\u06d0\u064a\u0649\u0646", past: "%s \u0628\u06c7\u0631\u06c7\u0646", s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a", ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a", m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a", mm: "%d \u0645\u0649\u0646\u06c7\u062a", h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a", hh: "%d \u0633\u0627\u0626\u06d5\u062a", d: "\u0628\u0649\u0631 \u0643\u06c8\u0646", dd: "%d \u0643\u06c8\u0646", M: "\u0628\u0649\u0631 \u0626\u0627\u064a", MM: "%d \u0626\u0627\u064a", y: "\u0628\u0649\u0631 \u064a\u0649\u0644", yy: "%d \u064a\u0649\u0644" }, dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-\u0643\u06c8\u0646\u0649";
                            case "w":
                            case "W":
                                return e + "-\u06be\u06d5\u067e\u062a\u06d5";
                            default:
                                return e } }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 7 } }) }() }, Z4QM: function(e, t, n) {! function(e) { "use strict"; var t = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
                    a = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
                n("wd/R").defineLocale("sd", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0627\u0684] LT", nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT", nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT", lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT", lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT", sameElse: "L" }, relativeTime: { future: "%s \u067e\u0648\u0621", past: "%s \u0627\u06b3", s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a", ss: "%d \u0633\u064a\u06aa\u0646\u068a", m: "\u0647\u06aa \u0645\u0646\u067d", mm: "%d \u0645\u0646\u067d", h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa", hh: "%d \u06aa\u0644\u0627\u06aa", d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646", dd: "%d \u068f\u064a\u0646\u0647\u0646", M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648", MM: "%d \u0645\u0647\u064a\u0646\u0627", y: "\u0647\u06aa \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }) }() }, ZAMP: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }() }, Zduo: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"), weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodia\u016d je] LT", nextDay: "[Morga\u016d je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hiera\u016d je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "anta\u016d %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }() }, aIdf: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { return e + " " + function(e, t) { return 2 === t ? function(e) { var t = { m: "v", b: "v", d: "z" }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }(e) : e }({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e) }
                n("wd/R").defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondenno\xf9", ss: "%d eilenn", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: function(e) { switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 9:
                                    return e + " bloaz";
                                default:
                                    return e + " vloaz" } } }, dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/, ordinal: function(e) { return e + (1 === e ? "a\xf1" : "vet") }, week: { dow: 1, doy: 4 } }) }() }, aIsn: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("mi", { months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"), weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te h\u0113kona ruarua", ss: "%d h\u0113kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, aQkU: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("mk", { months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"), weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT", nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT" } }, sameElse: "L" }, relativeTime: { future: "\u043f\u043e\u0441\u043b\u0435 %s", past: "\u043f\u0440\u0435\u0434 %s", s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u0435\u043d\u0430", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function(e) { var t = e % 10,
                            n = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }) }() }, b1Dy: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, bOMt: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, bXm7: function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044b", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044b", 10: "-\u0448\u044b", 20: "-\u0448\u044b", 30: "-\u0448\u044b", 40: "-\u0448\u044b", 50: "-\u0448\u0456", 60: "-\u0448\u044b", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044b", 100: "-\u0448\u0456" };
                e.defineLocale("kk", { months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"), monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"), weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"), weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"), weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT", nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0456\u0448\u0456\u043d\u0434\u0435", past: "%s \u0431\u04b1\u0440\u044b\u043d", s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", hh: "%d \u0441\u0430\u0493\u0430\u0442", d: "\u0431\u0456\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0456\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0456\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/, ordinal: function(e) { return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, bYM6: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ar-tn", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 1, doy: 4 } }) }() }, bpih: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, bxKX: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("it-ch", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, cRix: function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[\xf4fr\xfbne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien min\xfat", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, czMo: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }) }() }, dNwA: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } }) }() }, "e+ae": function(e, t, n) {! function(e) { "use strict"; var t = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                    n = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

                function a(e) { return e > 1 && e < 5 }

                function r(e, t, n, r) { var l = e + " "; switch (n) {
                        case "s":
                            return t || r ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                        case "ss":
                            return t || r ? l + (a(e) ? "sekundy" : "sek\xfand") : l + "sekundami";
                        case "m":
                            return t ? "min\xfata" : r ? "min\xfatu" : "min\xfatou";
                        case "mm":
                            return t || r ? l + (a(e) ? "min\xfaty" : "min\xfat") : l + "min\xfatami";
                        case "h":
                            return t ? "hodina" : r ? "hodinu" : "hodinou";
                        case "hh":
                            return t || r ? l + (a(e) ? "hodiny" : "hod\xedn") : l + "hodinami";
                        case "d":
                            return t || r ? "de\u0148" : "d\u0148om";
                        case "dd":
                            return t || r ? l + (a(e) ? "dni" : "dn\xed") : l + "d\u0148ami";
                        case "M":
                            return t || r ? "mesiac" : "mesiacom";
                        case "MM":
                            return t || r ? l + (a(e) ? "mesiace" : "mesiacov") : l + "mesiacmi";
                        case "y":
                            return t || r ? "rok" : "rokom";
                        case "yy":
                            return t || r ? l + (a(e) ? "roky" : "rokov") : l + "rokmi" } }
                e.defineLocale("sk", { months: t, monthsShort: n, weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[v nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo \u0161tvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT" } }, lastDay: "[v\u010dera o] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[minul\xfa nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[minul\xfd] dddd [o] LT";
                                case 3:
                                    return "[minul\xfa stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [o] LT";
                                case 6:
                                    return "[minul\xfa sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, fzPg: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("yo", { months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"), weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"), weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[O\u0300ni\u0300 ni] LT", nextDay: "[\u1ecc\u0300la ni] LT", nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT", lastDay: "[A\u0300na ni] LT", lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT", sameElse: "L" }, relativeTime: { future: "ni\u0301 %s", past: "%s k\u1ecdja\u0301", s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die", ss: "aaya\u0301 %d", m: "i\u0300s\u1eb9ju\u0301 kan", mm: "i\u0300s\u1eb9ju\u0301 %d", h: "wa\u0301kati kan", hh: "wa\u0301kati %d", d: "\u1ecdj\u1ecd\u0301 kan", dd: "\u1ecdj\u1ecd\u0301 %d", M: "osu\u0300 kan", MM: "osu\u0300 %d", y: "\u1ecddu\u0301n kan", yy: "\u1ecddu\u0301n %d" }, dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/, ordinal: "\u1ecdj\u1ecd\u0301 %d", week: { dow: 1, doy: 4 } }) }() }, gVVK: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = e + " "; switch (n) {
                        case "s":
                            return t || a ? "nekaj sekund" : "nekaj sekundami";
                        case "ss":
                            return r + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund");
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return r + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami");
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return r + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami");
                        case "d":
                            return t || a ? "en dan" : "enim dnem";
                        case "dd":
                            return r + (1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi");
                        case "M":
                            return t || a ? "en mesec" : "enim mesecem";
                        case "MM":
                            return r + (1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci");
                        case "y":
                            return t || a ? "eno leto" : "enim letom";
                        case "yy":
                            return r + (1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti") } }
                n("wd/R").defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT" } }, lastDay: "[v\u010deraj ob] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[prej\u0161njo] [nedeljo] [ob] LT";
                                case 3:
                                    return "[prej\u0161njo] [sredo] [ob] LT";
                                case 6:
                                    return "[prej\u0161njo] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prej\u0161nji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "\u010dez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }() }, gekB: function(e, t, n) {! function(e) { "use strict"; var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
                    n = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

                function a(e, a, r, l) { var i = ""; switch (r) {
                        case "s":
                            return l ? "muutaman sekunnin" : "muutama sekunti";
                        case "ss":
                            return l ? "sekunnin" : "sekuntia";
                        case "m":
                            return l ? "minuutin" : "minuutti";
                        case "mm":
                            i = l ? "minuutin" : "minuuttia"; break;
                        case "h":
                            return l ? "tunnin" : "tunti";
                        case "hh":
                            i = l ? "tunnin" : "tuntia"; break;
                        case "d":
                            return l ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                        case "dd":
                            i = l ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4"; break;
                        case "M":
                            return l ? "kuukauden" : "kuukausi";
                        case "MM":
                            i = l ? "kuukauden" : "kuukautta"; break;
                        case "y":
                            return l ? "vuoden" : "vuosi";
                        case "yy":
                            i = l ? "vuoden" : "vuotta" } return function(e, a) { return e < 10 ? a ? n[e] : t[e] : e }(e, l) + " " + i }
                e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\xe4n\xe4\xe4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4\xe4st\xe4", past: "%s sitten", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, gjCT: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
                    n = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" };
                e.defineLocale("ar-sa", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, hKrs: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("bg", { months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT", nextWeek: "dddd [\u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT" } }, sameElse: "L" }, relativeTime: { future: "\u0441\u043b\u0435\u0434 %s", past: "\u043f\u0440\u0435\u0434\u0438 %s", s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u043d\u0438", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function(e) { var t = e % 10,
                            n = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }) }() }, honF: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u1041", 2: "\u1042", 3: "\u1043", 4: "\u1044", 5: "\u1045", 6: "\u1046", 7: "\u1047", 8: "\u1048", 9: "\u1049", 0: "\u1040" },
                    n = { "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1040": "0" };
                e.defineLocale("my", { months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"), monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"), weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"), weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]", nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]", nextWeek: "dddd LT [\u1019\u103e\u102c]", lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]", lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]", sameElse: "L" }, relativeTime: { future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c", past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000", s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a", ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a", m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a", mm: "%d \u1019\u102d\u1014\u1005\u103a", h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e", hh: "%d \u1014\u102c\u101b\u102e", d: "\u1010\u1005\u103a\u101b\u1000\u103a", dd: "%d \u101b\u1000\u103a", M: "\u1010\u1005\u103a\u101c", MM: "%d \u101c", y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a", yy: "%d \u1014\u103e\u1005\u103a" }, preparse: function(e) { return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, iEDd: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextDay: function() { return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }() }, iYuL: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, jUeY: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("el", { monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"), monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"), months: function(e, t) { return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl }, monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"), weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"), weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"), weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"), meridiem: function(e, t, n) { return e > 11 ? n ? "\u03bc\u03bc" : "\u039c\u039c" : n ? "\u03c0\u03bc" : "\u03a0\u039c" }, isPM: function(e) { return "\u03bc" === (e + "").toLowerCase()[0] }, meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT", nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT", lastWeek: function() { switch (this.day()) {
                                case 6:
                                    return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                                default:
                                    return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT" } }, sameElse: "L" }, calendar: function(e, t) { var n, a = this._calendarEl[e],
                            r = t && t.hours(); return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", r % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2") }, relativeTime: { future: "\u03c3\u03b5 %s", past: "%s \u03c0\u03c1\u03b9\u03bd", s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc", mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac", h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1", hh: "%d \u03ce\u03c1\u03b5\u03c2", d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1", dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2", M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2", MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2", y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2", yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1" }, dayOfMonthOrdinalParse: /\d{1,2}\u03b7/, ordinal: "%d\u03b7", week: { dow: 1, doy: 4 } }) }() }, jVdC: function(e, t, n) {! function(e) { "use strict"; var t = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
                    n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");

                function a(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

                function r(e, t, n) { var r = e + " "; switch (n) {
                        case "ss":
                            return r + (a(e) ? "sekundy" : "sekund");
                        case "m":
                            return t ? "minuta" : "minut\u0119";
                        case "mm":
                            return r + (a(e) ? "minuty" : "minut");
                        case "h":
                            return t ? "godzina" : "godzin\u0119";
                        case "hh":
                            return r + (a(e) ? "godziny" : "godzin");
                        case "MM":
                            return r + (a(e) ? "miesi\u0105ce" : "miesi\u0119cy");
                        case "yy":
                            return r + (a(e) ? "lata" : "lat") } }
                e.defineLocale("pl", { months: function(e, a) { return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"), weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dzi\u015b o] LT", nextDay: "[Jutro o] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[W niedziel\u0119 o] LT";
                                case 2:
                                    return "[We wtorek o] LT";
                                case 3:
                                    return "[W \u015brod\u0119 o] LT";
                                case 6:
                                    return "[W sobot\u0119 o] LT";
                                default:
                                    return "[W] dddd [o] LT" } }, lastDay: "[Wczoraj o] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                                case 3:
                                    return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                                case 6:
                                    return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                                default:
                                    return "[W zesz\u0142y] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: r, m: r, mm: r, h: r, hh: r, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: r, y: "rok", yy: r }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, jfSC: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u06f1", 2: "\u06f2", 3: "\u06f3", 4: "\u06f4", 5: "\u06f5", 6: "\u06f6", 7: "\u06f7", 8: "\u06f8", 9: "\u06f9", 0: "\u06f0" },
                    n = { "\u06f1": "1", "\u06f2": "2", "\u06f3": "3", "\u06f4": "4", "\u06f5": "5", "\u06f6": "6", "\u06f7": "7", "\u06f8": "8", "\u06f9": "9", "\u06f0": "0" };
                e.defineLocale("fa", { months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/, isPM: function(e) { return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631" }, calendar: { sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT", nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT", lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT", sameElse: "L" }, relativeTime: { future: "\u062f\u0631 %s", past: "%s \u067e\u06cc\u0634", s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647", ss: "\u062b\u0627\u0646\u06cc\u0647 d%", m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647", mm: "%d \u062f\u0642\u06cc\u0642\u0647", h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a", hh: "%d \u0633\u0627\u0639\u062a", d: "\u06cc\u06a9 \u0631\u0648\u0632", dd: "%d \u0631\u0648\u0632", M: "\u06cc\u06a9 \u0645\u0627\u0647", MM: "%d \u0645\u0627\u0647", y: "\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/[\u06f0-\u06f9]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, dayOfMonthOrdinalParse: /\d{1,2}\u0645/, ordinal: "%d\u0645", week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, jnO4: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
                    n = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
                    a = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    r = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] },
                    l = function(e) { return function(t, n, l, i) { var o = a(t),
                                s = r[e][a(t)]; return 2 === o && (s = s[n ? 0 : 1]), s.replace(/%d/i, t) } },
                    i = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar", { months: i, monthsShort: i, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: l("s"), ss: l("s"), m: l("m"), mm: l("m"), h: l("h"), hh: l("h"), d: l("d"), dd: l("d"), M: l("M"), MM: l("M"), y: l("y"), yy: l("y") }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, kEOa: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u09e7", 2: "\u09e8", 3: "\u09e9", 4: "\u09ea", 5: "\u09eb", 6: "\u09ec", 7: "\u09ed", 8: "\u09ee", 9: "\u09ef", 0: "\u09e6" },
                    n = { "\u09e7": "1", "\u09e8": "2", "\u09e9": "3", "\u09ea": "4", "\u09eb": "5", "\u09ec": "6", "\u09ed": "7", "\u09ee": "8", "\u09ef": "9", "\u09e6": "0" };
                e.defineLocale("bn", { months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"), monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"), weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"), weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), longDateFormat: { LT: "A h:mm \u09b8\u09ae\u09df", LTS: "A h:mm:ss \u09b8\u09ae\u09df", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df", LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df" }, calendar: { sameDay: "[\u0986\u099c] LT", nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT", lastWeek: "[\u0997\u09a4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09aa\u09b0\u09c7", past: "%s \u0986\u0997\u09c7", s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f", mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f", h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be", hh: "%d \u0998\u09a8\u09cd\u099f\u09be", d: "\u098f\u0995 \u09a6\u09bf\u09a8", dd: "%d \u09a6\u09bf\u09a8", M: "\u098f\u0995 \u09ae\u09be\u09b8", MM: "%d \u09ae\u09be\u09b8", y: "\u098f\u0995 \u09ac\u099b\u09b0", yy: "%d \u09ac\u099b\u09b0" }, preparse: function(e) { return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === t && e >= 4 || "\u09a6\u09c1\u09aa\u09c1\u09b0" === t && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, kOpN: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("zh-tw", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929] LT", nextDay: "[\u660e\u5929] LT", nextWeek: "[\u4e0b]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4e0a]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u9031";
                            default:
                                return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }) }() }, l5ep: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn \xf4l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var t = ""; return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t }, week: { dow: 1, doy: 4 } }) }() }, lXzo: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r; return "m" === n ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (a = +e, r = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442", hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432", yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442" }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]) } var a = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
                n("wd/R").defineLocale("ru", { months: { format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"), standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_") }, monthsShort: { format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"), standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_") }, weekdays: { standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"), format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ }, weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), monthsParse: a, longMonthsParse: a, shortMonthsParse: a, monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i, monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" }, calendar: { sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT", nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT", nextWeek: function(e) { if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT"; switch (this.day()) {
                                case 0:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT" } }, lastWeek: function(e) { if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT"; switch (this.day()) {
                                case 0:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT" } }, sameElse: "L" }, relativeTime: { future: "\u0447\u0435\u0440\u0435\u0437 %s", past: "%s \u043d\u0430\u0437\u0430\u0434", s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434", ss: t, m: t, mm: t, h: "\u0447\u0430\u0441", hh: t, d: "\u0434\u0435\u043d\u044c", dd: t, M: "\u043c\u0435\u0441\u044f\u0446", MM: t, y: "\u0433\u043e\u0434", yy: t }, meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i, isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/, ordinal: function(e, t) { switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            case "w":
                            case "W":
                                return e + "-\u044f";
                            default:
                                return e } }, week: { dow: 1, doy: 4 } }) }() }, lYtQ: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { switch (n) {
                        case "s":
                            return t ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
                        case "ss":
                            return e + (t ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
                        case "m":
                        case "mm":
                            return e + (t ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
                        case "h":
                        case "hh":
                            return e + (t ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
                        case "d":
                        case "dd":
                            return e + (t ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
                        case "M":
                        case "MM":
                            return e + (t ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
                        case "y":
                        case "yy":
                            return e + (t ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
                        default:
                            return e } }
                n("wd/R").defineLocale("mn", { months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"), monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"), monthsParseExact: !0, weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"), weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"), weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D", LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm", LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm" }, meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i, isPM: function(e) { return "\u04ae\u0425" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425" }, calendar: { sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT", nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT", nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT", lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT", lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT", sameElse: "L" }, relativeTime: { future: "%s \u0434\u0430\u0440\u0430\u0430", past: "%s \u04e9\u043c\u043d\u04e9", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " \u04e9\u0434\u04e9\u0440";
                            default:
                                return e } } }) }() }, lgnt: function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-\u0447\u04af", 1: "-\u0447\u0438", 2: "-\u0447\u0438", 3: "-\u0447\u04af", 4: "-\u0447\u04af", 5: "-\u0447\u0438", 6: "-\u0447\u044b", 7: "-\u0447\u0438", 8: "-\u0447\u0438", 9: "-\u0447\u0443", 10: "-\u0447\u0443", 20: "-\u0447\u044b", 30: "-\u0447\u0443", 40: "-\u0447\u044b", 50: "-\u0447\u04af", 60: "-\u0447\u044b", 70: "-\u0447\u0438", 80: "-\u0447\u0438", 90: "-\u0447\u0443", 100: "-\u0447\u04af" };
                e.defineLocale("ky", { months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"), weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"), weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT", nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0438\u0447\u0438\u043d\u0434\u0435", past: "%s \u043c\u0443\u0440\u0443\u043d", s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442", mm: "%d \u043c\u04af\u043d\u04e9\u0442", h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442", hh: "%d \u0441\u0430\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0438\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0438\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/, ordinal: function(e) { return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, lyxo: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[n] }
                n("wd/R").defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\xe2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s \xeen urm\u0103", s: "c\xe2teva secunde", ss: t, m: "un minut", mm: t, h: "o or\u0103", hh: t, d: "o zi", dd: t, M: "o lun\u0103", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } }) }() }, nyYc: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("fr", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function(e, t) { switch (t) {
                            case "D":
                                return e + (1 === e ? "er" : "");
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                            case "W":
                                return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }() }, o1bE: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("ar-dz", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 4 } }) }() }, "p/rL": function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"), weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm" }, calendar: { sameDay: "[Bi l\u025br\u025b] LT", nextDay: "[Sini l\u025br\u025b] LT", nextWeek: "dddd [don l\u025br\u025b] LT", lastDay: "[Kunu l\u025br\u025b] LT", lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT", sameElse: "L" }, relativeTime: { future: "%s k\u0254n\u0254", past: "a b\u025b %s b\u0254", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "l\u025br\u025b kelen", hh: "l\u025br\u025b %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } }) }() }, raLr: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r; return "m" === n ? t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === n ? t ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (a = +e, r = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d", hh: t ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432", MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432", yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432" }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]) }

                function a(e) { return function() { return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT" } }
                n("wd/R").defineLocale("uk", { months: { format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_") }, monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"), weekdays: function(e, t) { var n = { nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_") }; return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" }, calendar: { sameDay: a("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "), nextDay: a("[\u0417\u0430\u0432\u0442\u0440\u0430 "), lastDay: a("[\u0412\u0447\u043e\u0440\u0430 "), nextWeek: a("[\u0423] dddd ["), lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return a("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return a("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "%s \u0442\u043e\u043c\u0443", s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434", ss: t, m: t, mm: t, h: "\u0433\u043e\u0434\u0438\u043d\u0443", hh: t, d: "\u0434\u0435\u043d\u044c", dd: t, M: "\u043c\u0456\u0441\u044f\u0446\u044c", MM: t, y: "\u0440\u0456\u043a", yy: t }, meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/, isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/, ordinal: function(e, t) { switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            default:
                                return e } }, week: { dow: 1, doy: 7 } }) }() }, "s+uk": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("de-at", { months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, sp3z: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("lo", { months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/, isPM: function(e) { return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" }, calendar: { sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", sameElse: "L" }, relativeTime: { future: "\u0ead\u0eb5\u0e81 %s", past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2", s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", m: "1 \u0e99\u0eb2\u0e97\u0eb5", mm: "%d \u0e99\u0eb2\u0e97\u0eb5", h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", d: "1 \u0ea1\u0eb7\u0ec9", dd: "%d \u0ea1\u0eb7\u0ec9", M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99", MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99", y: "1 \u0e9b\u0eb5", yy: "%d \u0e9b\u0eb5" }, dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/, ordinal: function(e) { return "\u0e97\u0eb5\u0ec8" + e } }) }() }, tGlX: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("de", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, tT3J: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("tzm-latn", { months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minu\u1e0d", mm: "%d minu\u1e0d", h: "sa\u025ba", hh: "%d tassa\u025bin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }() }, tUCv: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }) }() }, tePd: function(e, t, n) { "use strict";
            n.r(t); var a = n("CcnG"),
                r = function() { return function() {} }(),
                l = n("pMnS"),
                i = function() {
                    function e() {} return e.prototype.ngOnInit = function() {}, e }(),
                o = a.nb({ encapsulation: 2, styles: [], data: {} });

            function s(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" dashboard works!\n"]))], null, null) }

            function u(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-dashboard", [], null, null, null, s, o)), a.ob(1, 114688, null, 0, i, [], null, null)], function(e, t) { e(t, 1, 0) }, null) } var d = a.lb("app-dashboard", i, u, {}, {}, []),
                c = n("gIcY"),
                h = function() {
                    function e() { this.leyenda = "Leyenda", this.progreso = 50, this.cambioValor = new a.m } return e.prototype.ngOnInit = function() {}, e.prototype.onChanges = function(e) { this.progreso = e >= 100 ? 100 : e <= 0 ? 0 : e, this.txtProgress.nativeElement.value = this.progreso, this.cambioValor.emit(this.progreso) }, e.prototype.cambiarValor = function(e) { this.progreso >= 100 && e > 0 ? this.progreso = 100 : this.progreso <= 0 && e < 0 ? this.progreso = 0 : (this.progreso = this.progreso + e, this.cambioValor.emit(this.progreso), this.txtProgress.nativeElement.focus()) }, e }(),
                _ = a.nb({ encapsulation: 2, styles: [], data: {} });

            function m(e) { return a.Gb(0, [a.Cb(671088640, 1, { txtProgress: 0 }), (e()(), a.pb(1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (e()(), a.Eb(2, null, [" ", " - ", "\n"])), (e()(), a.pb(3, 0, null, null, 13, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarValor(-5) && a), a }, null, null)), (e()(), a.pb(6, 0, null, null, 0, "i", [
                    ["class", "mdi mdi-minus"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, [
                    [1, 0],
                    ["txtProgress", 1]
                ], null, 6, "input", [
                    ["class", "form-control"],
                    ["max", "100"],
                    ["min", "1"],
                    ["name", "progreso"],
                    ["type", "number"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"],
                    [null, "change"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "input" === t && (r = !1 !== a.xb(e, 8)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 8).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 8)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 8)._compositionEnd(n.target.value) && r), "change" === t && (r = !1 !== a.xb(e, 9).onChange(n.target.value) && r), "input" === t && (r = !1 !== a.xb(e, 9).onChange(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 9).onTouched() && r), "ngModelChange" === t && (r = !1 !== (l.progreso = n) && r), "ngModelChange" === t && (r = !1 !== l.onChanges(n) && r), r }, null, null)), a.ob(8, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.ob(9, 16384, null, 0, c.s, [a.D, a.k], null, null), a.Bb(1024, null, c.l, function(e, t) { return [e, t] }, [c.d, c.s]), a.ob(11, 671744, null, 0, c.q, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(13, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(14, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (e()(), a.pb(15, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarValor(5) && a), a }, null, null)), (e()(), a.pb(16, 0, null, null, 0, "i", [
                    ["class", "mdi mdi-plus"]
                ], null, null, null, null, null))], function(e, t) { e(t, 11, 0, "progreso", t.component.progreso) }, function(e, t) { var n = t.component;
                    e(t, 2, 0, n.leyenda, n.progreso), e(t, 7, 0, a.xb(t, 13).ngClassUntouched, a.xb(t, 13).ngClassTouched, a.xb(t, 13).ngClassPristine, a.xb(t, 13).ngClassDirty, a.xb(t, 13).ngClassValid, a.xb(t, 13).ngClassInvalid, a.xb(t, 13).ngClassPending) }) } var f = function() {
                    function e() { this.progreso1 = 20, this.progreso2 = 30 } return e.prototype.ngOnInit = function() {}, e }(),
                p = a.nb({ encapsulation: 2, styles: [], data: {} });

            function g(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 9, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 8, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 7, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(5, null, ["Barra de progreso ", " "])), (e()(), a.pb(6, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated"],
                    ["role", "progressbar"]
                ], [
                    [1, "ariaValuenow", 0],
                    [4, "width", null]
                ], null, null, null, null)), (e()(), a.pb(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated bg-success"],
                    ["role", "progressbar"]
                ], [
                    [1, "ariaValuenow", 0],
                    [4, "width", null]
                ], null, null, null, null)), (e()(), a.pb(11, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(12, 0, null, null, 4, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(13, 0, null, null, 3, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(14, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(15, 0, null, null, 1, "app-incrementador", [
                    ["nombre", "Progress Azul"]
                ], null, [
                    [null, "actualizaValor"]
                ], function(e, t, n) { var a = !0; return "actualizaValor" === t && (a = !1 !== (e.component.progreso1 = n) && a), a }, m, _)), a.ob(16, 114688, null, 0, h, [], { leyenda: [0, "leyenda"], progreso: [1, "progreso"] }, { cambioValor: "actualizaValor" }), (e()(), a.pb(17, 0, null, null, 4, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(18, 0, null, null, 3, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(19, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(20, 0, null, null, 1, "app-incrementador", [
                    ["nombre", "Progress Verde"]
                ], null, [
                    [null, "actualizaValor"]
                ], function(e, t, n) { var a = !0; return "actualizaValor" === t && (a = !1 !== (e.component.progreso2 = n) && a), a }, m, _)), a.ob(21, 114688, null, 0, h, [], { leyenda: [0, "leyenda"], progreso: [1, "progreso"] }, { cambioValor: "actualizaValor" })], function(e, t) { var n = t.component;
                    e(t, 16, 0, "Progress Azul", n.progreso1), e(t, 21, 0, "Progress Verde", n.progreso2) }, function(e, t) { var n = t.component;
                    e(t, 5, 0, n.progreso1), e(t, 7, 0, n.progreso1, n.progreso1 + "%"), e(t, 10, 0, n.progreso2, n.progreso2 + "%") }) }

            function b(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-progress", [], null, null, null, g, p)), a.ob(1, 114688, null, 0, f, [], null, null)], function(e, t) { e(t, 1, 0) }, null) } var y = a.lb("app-progress", f, b, {}, {}, []),
                M = n("mrSG"),
                v = n("MO+k"),
                L = n("26FU"),
                k = n("LvDl"),
                Y = [
                    [255, 99, 132],
                    [54, 162, 235],
                    [255, 206, 86],
                    [231, 233, 237],
                    [75, 192, 192],
                    [151, 187, 205],
                    [220, 220, 220],
                    [247, 70, 74],
                    [70, 191, 189],
                    [253, 180, 92],
                    [148, 159, 177],
                    [77, 83, 96]
                ];

            function D(e, t) { return "rgba(" + e.concat(t).join(",") + ")" }

            function w(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e }

            function x(e) { return { backgroundColor: e.map(function(e) { return D(e, .6) }), borderColor: e.map(function() { return "#fff" }), pointBackgroundColor: e.map(function(e) { return D(e, 1) }), pointBorderColor: e.map(function() { return "#fff" }), pointHoverBackgroundColor: e.map(function(e) { return D(e, 1) }), pointHoverBorderColor: e.map(function(e) { return D(e, 1) }) } }

            function T() { return [w(0, 255), w(0, 255), w(0, 255)] }

            function S(e) { return Y[e] || T() }

            function H(e) { for (var t = new Array(e), n = 0; n < e; n++) t[n] = Y[n] || T(); return t } var j = function() {
                    function e() { this.pColorschemesOptions = {}, this.colorschemesOptions = new L.a({}) } return e.prototype.setColorschemesOptions = function(e) { this.pColorschemesOptions = e, this.colorschemesOptions.next(e) }, e.prototype.getColorschemesOptions = function() { return this.pColorschemesOptions }, e.ngInjectableDef = Object(a.Ib)({ factory: function() { return new e }, token: e, providedIn: "root" }), e }(),
                C = function() { var e = { Default: 0, Update: 1, Refresh: 2 }; return e[e.Default] = "Default", e[e.Update] = "Update", e[e.Refresh] = "Refresh", e }(),
                O = function() {
                    function e(e, t) { this.element = e, this.themeService = t, this.options = {}, this.chartClick = new a.m, this.chartHover = new a.m, this.old = { dataExists: !1, dataLength: 0, datasetsExists: !1, datasetsLength: 0, datasetsDataObjects: [], datasetsDataLengths: [], colorsExists: !1, colors: [], labelsExist: !1, labels: [], legendExists: !1, legend: {} }, this.subs = [] } return e.registerPlugin = function(e) { v.Chart.plugins.register(e) }, e.unregisterPlugin = function(e) { v.Chart.plugins.unregister(e) }, e.prototype.ngOnInit = function() { var e = this;
                        this.ctx = this.element.nativeElement.getContext("2d"), this.refresh(), this.subs.push(this.themeService.colorschemesOptions.subscribe(function(t) { return e.themeChanged(t) })) }, e.prototype.themeChanged = function(e) { this.refresh() }, e.prototype.ngDoCheck = function() { var e = this; if (this.chart) { var t = C.Default,
                                n = function(e) { t = e > t ? e : t }; switch (!!this.data !== this.old.dataExists && (this.propagateDataToDatasets(this.data), this.old.dataExists = !!this.data, n(C.Update)), this.data && this.data.length !== this.old.dataLength && (this.old.dataLength = this.data && this.data.length || 0, n(C.Update)), !!this.datasets !== this.old.datasetsExists && (this.old.datasetsExists = !!this.datasets, n(C.Update)), this.datasets && this.datasets.length !== this.old.datasetsLength && (this.old.datasetsLength = this.datasets && this.datasets.length || 0, n(C.Update)), this.datasets && this.datasets.filter(function(t, n) { return t.data !== e.old.datasetsDataObjects[n] }).length && (this.old.datasetsDataObjects = this.datasets.map(function(e) { return e.data }), n(C.Update)), this.datasets && this.datasets.filter(function(t, n) { return t.data.length !== e.old.datasetsDataLengths[n] }).length && (this.old.datasetsDataLengths = this.datasets.map(function(e) { return e.data.length }), n(C.Update)), !!this.colors !== this.old.colorsExists && (this.old.colorsExists = !!this.colors, this.updateColors(), n(C.Update)), this.colors && this.colors.filter(function(t, n) { return !e.colorsEqual(t, e.old.colors[n]) }).length && (this.old.colors = this.colors.map(function(t) { return e.copyColor(t) }), this.updateColors(), n(C.Update)), !!this.labels !== this.old.labelsExist && (this.old.labelsExist = !!this.labels, n(C.Update)), this.labels && this.labels.filter(function(t, n) { return !e.labelsEqual(t, e.old.labels[n]) }).length && (this.old.labels = this.labels.map(function(t) { return e.copyLabel(t) }), n(C.Update)), !!this.options.legend !== this.old.legendExists && (this.old.legendExists = !!this.options.legend, n(C.Refresh)), this.options.legend && this.options.legend.position !== this.old.legend.position && (this.old.legend.position = this.options.legend.position, n(C.Refresh)), t) {
                                case C.Default:
                                    break;
                                case C.Update:
                                    this.update(); break;
                                case C.Refresh:
                                    this.refresh() } } }, e.prototype.copyLabel = function(e) { return Array.isArray(e) ? Object(M.g)(e) : e }, e.prototype.labelsEqual = function(e, t) { return Array.isArray(e) === Array.isArray(t) && (Array.isArray(e) || e === t) && (!Array.isArray(e) || e.length === t.length) && (!Array.isArray(e) || 0 === e.filter(function(e, n) { return e !== t[n] }).length) }, e.prototype.copyColor = function(e) { return { backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderColor: e.borderColor, borderCapStyle: e.borderCapStyle, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderJoinStyle: e.borderJoinStyle, pointBorderColor: e.pointBorderColor, pointBackgroundColor: e.pointBackgroundColor, pointBorderWidth: e.pointBorderWidth, pointRadius: e.pointRadius, pointHoverRadius: e.pointHoverRadius, pointHitRadius: e.pointHitRadius, pointHoverBackgroundColor: e.pointHoverBackgroundColor, pointHoverBorderColor: e.pointHoverBorderColor, pointHoverBorderWidth: e.pointHoverBorderWidth, pointStyle: e.pointStyle, hoverBackgroundColor: e.hoverBackgroundColor, hoverBorderColor: e.hoverBorderColor, hoverBorderWidth: e.hoverBorderWidth } }, e.prototype.colorsEqual = function(e, t) { return !e == !t && (!e || e.backgroundColor === t.backgroundColor && e.borderWidth === t.borderWidth && e.borderColor === t.borderColor && e.borderCapStyle === t.borderCapStyle && e.borderDash === t.borderDash && e.borderDashOffset === t.borderDashOffset && e.borderJoinStyle === t.borderJoinStyle && e.pointBorderColor === t.pointBorderColor && e.pointBackgroundColor === t.pointBackgroundColor && e.pointBorderWidth === t.pointBorderWidth && e.pointRadius === t.pointRadius && e.pointHoverRadius === t.pointHoverRadius && e.pointHitRadius === t.pointHitRadius && e.pointHoverBackgroundColor === t.pointHoverBackgroundColor && e.pointHoverBorderColor === t.pointHoverBorderColor && e.pointHoverBorderWidth === t.pointHoverBorderWidth && e.pointStyle === t.pointStyle && e.hoverBackgroundColor === t.hoverBackgroundColor && e.hoverBorderColor === t.hoverBorderColor && e.hoverBorderWidth === t.hoverBorderWidth) }, e.prototype.updateColors = function() { var e = this;
                        this.datasets.forEach(function(t, n) { e.colors && e.colors[n] ? Object.assign(t, e.colors[n]) : Object.assign(t, function(e, t, n) { if ("pie" === e || "doughnut" === e) return x(H(n)); if ("polarArea" === e) return { backgroundColor: (a = H(n)).map(function(e) { return D(e, .6) }), borderColor: a.map(function(e) { return D(e, 1) }), hoverBackgroundColor: a.map(function(e) { return D(e, .8) }), hoverBorderColor: a.map(function(e) { return D(e, 1) }) }; var a; if ("line" === e || "radar" === e) return function(e) { return { backgroundColor: D(e, .4), borderColor: D(e, 1), pointBackgroundColor: D(e, 1), pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: D(e, .8) } }(S(t)); if ("bar" === e || "horizontalBar" === e) return function(e) { return { backgroundColor: D(e, .6), borderColor: D(e, 1), hoverBackgroundColor: D(e, .8), hoverBorderColor: D(e, 1) } }(S(t)); if ("bubble" === e) return x(H(n)); if ("scatter" === e) return x(H(n)); throw new Error("getColors - Unsupported chart type " + e) }(e.chartType, n, t.data.length), Object(M.a)({}, t)) }) }, e.prototype.ngOnChanges = function(e) { var t = C.Default,
                            n = function(e) { t = e > t ? e : t }; switch (e.hasOwnProperty("data") && e.data.currentValue && (this.propagateDataToDatasets(e.data.currentValue), n(C.Update)), e.hasOwnProperty("datasets") && e.datasets.currentValue && (this.propagateDatasetsToData(e.datasets.currentValue), n(C.Update)), e.hasOwnProperty("labels") && (this.chart && (this.chart.data.labels = e.labels.currentValue), n(C.Update)), e.hasOwnProperty("legend") && (this.chart && (this.chart.config.options.legend.display = e.legend.currentValue, this.chart.generateLegend()), n(C.Update)), e.hasOwnProperty("options") && n(C.Refresh), t) {
                            case C.Update:
                                this.update(); break;
                            case C.Refresh:
                            case C.Default:
                                this.refresh() } }, e.prototype.ngOnDestroy = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach(function(e) { return e.unsubscribe() }) }, e.prototype.update = function(e, t) { if (this.chart) return this.chart.update(e, t) }, e.prototype.hideDataset = function(e, t) { this.chart.getDatasetMeta(e).hidden = t, this.chart.update() }, e.prototype.isDatasetHidden = function(e) { return this.chart.getDatasetMeta(e).hidden }, e.prototype.toBase64Image = function() { return this.chart.toBase64Image() }, e.prototype.getChartConfiguration = function() { var e = this,
                            t = this.getDatasets(),
                            n = Object.assign({}, this.options);!1 === this.legend && (n.legend = { display: !1 }), n.hover = n.hover || {}, n.hover.onHover || (n.hover.onHover = function(t, n) { n && !n.length || e.chartHover.emit({ event: t, active: n }) }), n.onClick || (n.onClick = function(t, n) { e.chartClick.emit({ event: t, active: n }) }); var a = this.smartMerge(n, this.themeService.getColorschemesOptions()); return { type: this.chartType, data: { labels: this.labels || [], datasets: t }, plugins: this.plugins, options: a } }, e.prototype.getChartBuilder = function(e) { var t = this.getChartConfiguration(); return new v.Chart(e, t) }, e.prototype.smartMerge = function(e, t, n) { var a = this; if (void 0 === n && (n = 0), 0 === n && (e = Object(k.cloneDeep)(e)), Object.keys(t).forEach(function(r) { if (Array.isArray(t[r])) { var l = e[r];
                                    l && l.forEach(function(e) { a.smartMerge(e, t[r][0], n + 1) }) } else "object" == typeof t[r] ? (r in e || (e[r] = {}), a.smartMerge(e[r], t[r], n + 1)) : e[r] = t[r] }), 0 === n) return e }, e.prototype.isMultiLineLabel = function(e) { return Array.isArray(e) }, e.prototype.joinLabel = function(e) { return e ? this.isMultiLineLabel(e) ? e.join(" ") : e : null }, e.prototype.propagateDatasetsToData = function(e) { this.data = this.datasets.map(function(e) { return e.data }), this.chart && (this.chart.data.datasets = e), this.updateColors() }, e.prototype.propagateDataToDatasets = function(e) { var t = this;
                        this.isMultiDataSet(e) ? this.datasets && e.length === this.datasets.length ? this.datasets.forEach(function(t, n) { t.data = e[n] }) : (this.datasets = e.map(function(e, n) { return { data: e, label: t.joinLabel(t.labels[n]) || "Label " + n } }), this.chart && (this.chart.data.datasets = this.datasets)) : this.datasets ? (this.datasets[0].data = e, this.datasets.splice(1)) : (this.datasets = [{ data: e }], this.chart && (this.chart.data.datasets = this.datasets)), this.updateColors() }, e.prototype.isMultiDataSet = function(e) { return Array.isArray(e[0]) }, e.prototype.getDatasets = function() { if (!this.datasets && !this.data) throw new Error("ng-charts configuration error, data or datasets field are required to render chart " + this.chartType); return this.datasets ? (this.propagateDatasetsToData(this.datasets), this.datasets) : this.data ? (this.propagateDataToDatasets(this.data), this.datasets) : void 0 }, e.prototype.refresh = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.ctx && (this.chart = this.getChartBuilder(this.ctx)) }, e }(),
                P = function() { return function() {} }(),
                A = function() {
                    function e() { this.doughnutChartLabels = [], this.doughnutChartData = [], this.doughnutChartType = "" } return e.prototype.ngOnInit = function() {}, e }(),
                E = a.nb({ encapsulation: 2, styles: [], data: {} });

            function W(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 2, "div", [
                    ["style", "display: block"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 1, "canvas", [
                    ["baseChart", ""]
                ], null, null, null, null, null)), a.ob(2, 999424, null, 0, O, [a.k, j], { data: [0, "data"], labels: [1, "labels"], chartType: [2, "chartType"] }, null)], function(e, t) { var n = t.component;
                    e(t, 2, 0, n.doughnutChartData, n.doughnutChartLabels, n.doughnutChartType) }, null) } var F = function() {
                    function e() { this.graficos = { grafico1: { labels: ["Con Frijoles", "Con Natilla", "Con tocino"], data: [24, 30, 46], type: "doughnut", leyenda: "El pan se come con" }, grafico2: { labels: ["Hombres", "Mujeres"], data: [4500, 6e3], type: "doughnut", leyenda: "Entrevistados" }, grafico3: { labels: ["Si", "No"], data: [95, 5], type: "doughnut", leyenda: "\xbfLe dan gases los frijoles?" }, grafico4: { labels: ["No", "Si"], data: [85, 15], type: "doughnut", leyenda: "\xbfLe importa que le den gases?" } } } return e.prototype.ngOnInit = function() {}, e }(),
                I = a.nb({ encapsulation: 2, styles: [], data: {} });

            function R(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 6, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 5, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 4, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(5, null, ["", " "])), (e()(), a.pb(6, 0, null, null, 1, "app-grafico-dona", [
                    ["chartType", "doughnut"]
                ], null, null, null, W, E)), a.ob(7, 114688, null, 0, A, [], { doughnutChartLabels: [0, "doughnutChartLabels"], doughnutChartData: [1, "doughnutChartData"], doughnutChartType: [2, "doughnutChartType"] }, null), (e()(), a.pb(8, 0, null, null, 6, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 5, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 4, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(11, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(12, null, ["", " "])), (e()(), a.pb(13, 0, null, null, 1, "app-grafico-dona", [
                    ["chartType", "doughnut"]
                ], null, null, null, W, E)), a.ob(14, 114688, null, 0, A, [], { doughnutChartLabels: [0, "doughnutChartLabels"], doughnutChartData: [1, "doughnutChartData"], doughnutChartType: [2, "doughnutChartType"] }, null), (e()(), a.pb(15, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(16, 0, null, null, 6, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(17, 0, null, null, 5, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(18, 0, null, null, 4, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(19, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(20, null, ["", " "])), (e()(), a.pb(21, 0, null, null, 1, "app-grafico-dona", [
                    ["chartType", "doughnut"]
                ], null, null, null, W, E)), a.ob(22, 114688, null, 0, A, [], { doughnutChartLabels: [0, "doughnutChartLabels"], doughnutChartData: [1, "doughnutChartData"], doughnutChartType: [2, "doughnutChartType"] }, null), (e()(), a.pb(23, 0, null, null, 6, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (e()(), a.pb(24, 0, null, null, 5, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(25, 0, null, null, 4, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(26, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(27, null, ["", " "])), (e()(), a.pb(28, 0, null, null, 1, "app-grafico-dona", [
                    ["chartType", "doughnut"]
                ], null, null, null, W, E)), a.ob(29, 114688, null, 0, A, [], { doughnutChartLabels: [0, "doughnutChartLabels"], doughnutChartData: [1, "doughnutChartData"], doughnutChartType: [2, "doughnutChartType"] }, null)], function(e, t) { var n = t.component;
                    e(t, 7, 0, n.graficos.grafico1.labels, n.graficos.grafico1.data, "doughnut"), e(t, 14, 0, n.graficos.grafico2.labels, n.graficos.grafico2.data, "doughnut"), e(t, 22, 0, n.graficos.grafico3.labels, n.graficos.grafico3.data, "doughnut"), e(t, 29, 0, n.graficos.grafico4.labels, n.graficos.grafico4.data, "doughnut") }, function(e, t) { var n = t.component;
                    e(t, 5, 0, n.graficos.grafico1.leyenda), e(t, 12, 0, n.graficos.grafico2.leyenda), e(t, 20, 0, n.graficos.grafico3.leyenda), e(t, 27, 0, n.graficos.grafico4.leyenda) }) }

            function z(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-graficas1", [], null, null, null, R, I)), a.ob(1, 114688, null, 0, F, [], null, null)], function(e, t) { e(t, 1, 0) }, null) } var N = a.lb("app-graficas1", F, z, {}, {}, []),
                B = function() {
                    function e() { this.contarTres().then(function(e) { return console.log("Termino!", e) }).catch(function(e) { return console.error("Error en la promesa", e) }) } return e.prototype.ngOnInit = function() {}, e.prototype.contarTres = function() { return new Promise(function(e, t) { var n = 0,
                                a = setInterval(function() { n += 1, console.log(n), 3 === n && (e(!0), clearInterval(a)) }, 1e3) }) }, e }(),
                V = a.nb({ encapsulation: 2, styles: [], data: {} });

            function U(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" promesas works!\n"]))], null, null) }

            function J(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-promesas", [], null, null, null, U, V)), a.ob(1, 114688, null, 0, B, [], null, null)], function(e, t) { e(t, 1, 0) }, null) } var G = a.lb("app-promesas", B, J, {}, {}, []),
                q = n("88/t"),
                $ = n("67Y/"),
                K = n("VnD/"),
                Z = function() {
                    function e() { this.subscription = this.regresaObservable().subscribe(function(e) { return console.log("subs", e) }, function(e) { return console.error("error en el obs", e) }, function() { return console.log("El Observador termino") }) } return e.prototype.ngOnInit = function() {}, e.prototype.ngOnDestroy = function() { console.log("La Pagina se va a cerrar"), this.subscription.unsubscribe() }, e.prototype.regresaObservable = function() { return new q.a(function(e) { var t = 0;
                            setInterval(function() { e.next({ valor: ++t }) }, 1e3) }).pipe(Object($.a)(function(e) { return e.valor }), Object(K.a)(function(e, t) { return e % 2 == 1 })) }, e }(),
                Q = a.nb({ encapsulation: 2, styles: [], data: {} });

            function X(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" rxjs works!\n"]))], null, null) }

            function ee(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-rxjs", [], null, null, null, X, Q)), a.ob(1, 245760, null, 0, Z, [], null, null)], function(e, t) { e(t, 1, 0) }, null) } var te = a.lb("app-rxjs", Z, ee, {}, {}, []),
                ne = n("0CBe"),
                ae = n("Ip0R"),
                re = n("vWu4"),
                le = n("gWzw"),
                ie = function() {
                    function e(e, t, n) { this._chatService = e, this._usuarioService = t, this._modalUploadService = n, this.textoUser = "", this.texto = "", this.mensajes = [] } return e.prototype.ngOnInit = function() { var e = this;
                        this.elemento = document.getElementById("divChatbox"), this.mensajesSubscription = this._chatService.getMessages().subscribe(function(t) { console.log("En Subscribe"); var n = t.de,
                                a = t.cuerpo,
                                r = new Date(t.fecha),
                                l = t.img;
                            t.de === e._usuarioService.usuario.nombre && (n = "yo"); var i = r.getHours() + ":" + r.getMinutes();
                            e.msg = { de: n, cuerpo: a, hora: i, img: l }, e.mensajes.push(e.msg), console.log("mensaje1", e.msg) }), this._modalUploadService.notificacion.subscribe(function(t) { return e._usuarioService.cargarUsuarios() }) }, e.prototype.ngOnDestroy = function() { this.mensajesSubscription.unsubscribe() }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.enviar = function() { var e = this;
                        0 !== this.texto.trim().length && (this._chatService.sendMessage(this.texto, function(t) { e.msg = t, console.log("this.msg = ", e.msg) }), this.texto = "") }, e.prototype.buscar = function() { 0 !== this.textoUser.trim().length && (this._chatService.focusBuscar(this.textoUser), this.textoUser = "") }, e }(),
                oe = n("Mxw7"),
                se = n("7k1j"),
                ue = a.nb({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function de(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 9, "div", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 8, "li", [
                    ["class", "reverse"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 7, "div", [
                    ["class", "chat-content"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (e()(), a.Eb(4, null, ["", ""])), (e()(), a.pb(5, 0, null, null, 1, "div", [
                    ["class", "box bg-light-inverse"]
                ], null, null, null, null, null)), (e()(), a.Eb(6, null, ["", ""])), (e()(), a.pb(7, 0, null, null, 2, "div", [
                    ["class", "chat-img"]
                ], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 1, "img", [
                    ["class", "img-50 img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(9, 2)], null, function(e, t) { e(t, 4, 0, t.parent.context.$implicit.de), e(t, 6, 0, t.parent.context.$implicit.cuerpo); var n = a.Fb(t, 8, 0, e(t, 9, 0, a.xb(t.parent.parent, 0), t.parent.context.$implicit.img, "usuario"));
                    e(t, 8, 0, n) }) }

            function ce(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 7, "div", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 1, "div", [
                    ["class", "chat-img"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 0, "img", [
                    ["alt", "user"],
                    ["src", "../../../assets/images/big/img2.jpg"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 4, "div", [
                    ["class", "chat-content"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h5", [], null, null, null, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 1, "div", [
                    ["class", "box bg-light-danger"]
                ], null, null, null, null, null)), (e()(), a.Eb(7, null, [" ", " "]))], null, function(e, t) { e(t, 5, 0, t.parent.parent.context.$implicit.de), e(t, 7, 0, t.parent.parent.context.$implicit.cuerpo) }) }

            function he(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 2, "div", [
                    ["class", "chat-img"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 1, "img", [
                    ["class", "img-50 img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(2, 2), (e()(), a.pb(3, 0, null, null, 4, "div", [
                    ["class", "chat-content"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h5", [], null, null, null, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 1, "div", [
                    ["class", "box bg-light-inverse"]
                ], null, null, null, null, null)), (e()(), a.Eb(7, null, [" ", " "]))], null, function(e, t) { var n = a.Fb(t, 1, 0, e(t, 2, 0, a.xb(t.parent.parent.parent, 0), t.parent.parent.context.$implicit.img, "usuario"));
                    e(t, 1, 0, n), e(t, 5, 0, t.parent.parent.context.$implicit.de), e(t, 7, 0, t.parent.parent.context.$implicit.cuerpo) }) }

            function _e(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 3, "li", [
                    ["class", "animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, ce)), a.ob(2, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (e()(), a.eb(0, [
                    ["elseBlock", 2]
                ], null, 0, null, he))], function(e, t) { e(t, 2, 0, "Administrador" === t.parent.context.$implicit.de, a.xb(t, 3)) }, null) }

            function me(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 3, "ul", [
                    ["class", "chat-list p-20"],
                    ["id", "divChatbox"]
                ], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, de)), a.ob(3, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (e()(), a.eb(0, [
                    ["elseBlock", 2]
                ], null, 0, null, _e))], function(e, t) { e(t, 3, 0, "yo" === t.context.$implicit.de, a.xb(t, 4)) }, null) }

            function fe(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 42, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 41, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 40, "div", [
                    ["class", "card m-b-0"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 39, "div", [
                    ["class", "chat-main-box"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, null, null, 17, "div", [
                    ["class", "chat-left-aside"]
                ], null, null, null, null, null)), (e()(), a.pb(6, 0, null, null, 1, "div", [
                    ["class", "open-panel"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 0, "i", [
                    ["class", "ti-angle-right"]
                ], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 14, "div", [
                    ["class", "chat-left-inner"]
                ], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 12, "div", [
                    ["class", "form-material"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 11, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngSubmit"],
                    [null, "submit"],
                    [null, "reset"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "submit" === t && (r = !1 !== a.xb(e, 12).onSubmit(n) && r), "reset" === t && (r = !1 !== a.xb(e, 12).onReset() && r), "ngSubmit" === t && (r = !1 !== l.buscar() && r), r }, null, null)), a.ob(11, 16384, null, 0, c.B, [], null, null), a.ob(12, 4210688, null, 0, c.p, [
                    [8, null],
                    [8, null]
                ], null, { ngSubmit: "ngSubmit" }), a.Bb(2048, null, c.c, null, [c.p]), a.ob(14, 16384, null, 0, c.o, [
                    [4, c.c]
                ], null, null), (e()(), a.pb(15, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(16, 0, null, null, 5, "input", [
                    ["autocomplete", "off"],
                    ["class", "form-control b-0"],
                    ["name", "textoUser"],
                    ["placeholder", "Buscar"],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "input" === t && (r = !1 !== a.xb(e, 17)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 17).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 17)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 17)._compositionEnd(n.target.value) && r), "ngModelChange" === t && (r = !1 !== (l.textoUser = n) && r), r }, null, null)), a.ob(17, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.d]), a.ob(19, 671744, null, 0, c.q, [
                    [2, c.c],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(21, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(22, 0, null, null, 0, "ul", [
                    ["class", "chatonline style-none"],
                    ["id", "divUsuarios"]
                ], null, null, null, null, null)), (e()(), a.pb(23, 0, null, null, 20, "div", [
                    ["class", "chat-right-aside"]
                ], null, null, null, null, null)), (e()(), a.pb(24, 0, null, null, 2, "div", [
                    ["class", "chat-rbox"]
                ], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, me)), a.ob(26, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(27, 0, null, null, 16, "div", [
                    ["class", "card-body b-t"]
                ], null, null, null, null, null)), (e()(), a.pb(28, 0, null, null, 15, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngSubmit"],
                    [null, "submit"],
                    [null, "reset"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "submit" === t && (r = !1 !== a.xb(e, 30).onSubmit(n) && r), "reset" === t && (r = !1 !== a.xb(e, 30).onReset() && r), "ngSubmit" === t && (r = !1 !== l.enviar() && r), r }, null, null)), a.ob(29, 16384, null, 0, c.B, [], null, null), a.ob(30, 4210688, null, 0, c.p, [
                    [8, null],
                    [8, null]
                ], null, { ngSubmit: "ngSubmit" }), a.Bb(2048, null, c.c, null, [c.p]), a.ob(32, 16384, null, 0, c.o, [
                    [4, c.c]
                ], null, null), (e()(), a.pb(33, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(34, 0, null, null, 6, "div", [
                    ["class", "col-9 text-right"]
                ], null, null, null, null, null)), (e()(), a.pb(35, 0, null, null, 5, "input", [
                    ["autocomplete", "off"],
                    ["autofocus", ""],
                    ["class", "form-control b-0"],
                    ["name", "texto"],
                    ["placeholder", "Escribe tu mensaje aqu\xed"],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "input" === t && (r = !1 !== a.xb(e, 36)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 36).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 36)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 36)._compositionEnd(n.target.value) && r), "ngModelChange" === t && (r = !1 !== (l.texto = n) && r), r }, null, null)), a.ob(36, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.d]), a.ob(38, 671744, null, 0, c.q, [
                    [2, c.c],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(40, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(41, 0, null, null, 2, "div", [
                    ["class", "col-1 text-right"]
                ], null, null, null, null, null)), (e()(), a.pb(42, 0, null, null, 1, "button", [
                    ["class", "btn btn-info btn-circle btn-lg"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (e()(), a.pb(43, 0, null, null, 0, "i", [
                    ["class", "fa fa-paper-plane-o"]
                ], null, null, null, null, null))], function(e, t) { var n = t.component;
                    e(t, 19, 0, "textoUser", n.textoUser), e(t, 26, 0, n.mensajes), e(t, 38, 0, "texto", n.texto) }, function(e, t) { e(t, 10, 0, a.xb(t, 14).ngClassUntouched, a.xb(t, 14).ngClassTouched, a.xb(t, 14).ngClassPristine, a.xb(t, 14).ngClassDirty, a.xb(t, 14).ngClassValid, a.xb(t, 14).ngClassInvalid, a.xb(t, 14).ngClassPending), e(t, 16, 0, a.xb(t, 21).ngClassUntouched, a.xb(t, 21).ngClassTouched, a.xb(t, 21).ngClassPristine, a.xb(t, 21).ngClassDirty, a.xb(t, 21).ngClassValid, a.xb(t, 21).ngClassInvalid, a.xb(t, 21).ngClassPending), e(t, 28, 0, a.xb(t, 32).ngClassUntouched, a.xb(t, 32).ngClassTouched, a.xb(t, 32).ngClassPristine, a.xb(t, 32).ngClassDirty, a.xb(t, 32).ngClassValid, a.xb(t, 32).ngClassInvalid, a.xb(t, 32).ngClassPending), e(t, 35, 0, a.xb(t, 40).ngClassUntouched, a.xb(t, 40).ngClassTouched, a.xb(t, 40).ngClassPristine, a.xb(t, 40).ngClassDirty, a.xb(t, 40).ngClassValid, a.xb(t, 40).ngClassInvalid, a.xb(t, 40).ngClassPending) }) } var pe = function() {
                    function e(e, t, n, a) { this._chatService = e, this._usuarioService = t, this._modalUploadService = n, this._wsService = a, this.usuarios = [], this.sala = this._usuarioService.usuario.sala, this.cargando = !0, this.totalRegistros = 0 } return e.prototype.ngOnInit = function() { var e = this;
                        this._chatService.emitirUsuariosActivos(), this.usuariosSubscription = this._chatService.getUsuariosActivos().subscribe(function(t) { void 0 === t && (t = []), e.usuarios = t, console.log("usuarios", e.usuarios) }), this.nombre = this._usuarioService.usuario.nombre, this.sala = this._usuarioService.usuario.sala }, e.prototype.ngOnDestroy = function() {}, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios1", e) }, e.prototype.salir = function() { this._chatService.logoutChatS() }, e }(),
                ge = n("fKaL"),
                be = a.nb({ encapsulation: 0, styles: [
                        [""]
                    ], data: {} });

            function ye(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 7, "tr", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 1, "img", [
                    ["class", "img-50 img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(3, 2), (e()(), a.pb(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, [" ", " "]))], null, function(e, t) { var n = a.Fb(t, 2, 0, e(t, 3, 0, a.xb(t.parent, 0), t.context.$implicit.img, "usuario"));
                    e(t, 2, 0, n), e(t, 5, 0, t.context.$implicit.nombre), e(t, 7, 0, t.context.$implicit.sala) }) }

            function Me(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 3, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 2, "h1", [], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 1, "small", [], null, null, null, null, null)), (e()(), a.Eb(4, null, [" Usuario: ", " "])), (e()(), a.pb(5, 0, null, null, 20, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(6, 0, null, null, 19, "h1", [], null, null, null, null, null)), (e()(), a.Eb(7, null, [" Sala: ", " "])), (e()(), a.pb(8, 0, null, null, 17, "select", [
                    ["class", "form-control"],
                    ["name", "sala"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "change"],
                    [null, "blur"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "change" === t && (r = !1 !== a.xb(e, 9).onChange(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 9).onTouched() && r), "ngModelChange" === t && (r = !1 !== (l.sala = n) && r), r }, null, null)), a.ob(9, 16384, null, 0, c.v, [a.D, a.k], null, null), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.v]), a.ob(11, 671744, null, 0, c.q, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(13, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(14, 0, null, null, 3, "option", [
                    ["value", "Juegos"]
                ], null, null, null, null, null)), a.ob(15, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(16, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["JUEGOS"])), (e()(), a.pb(18, 0, null, null, 3, "option", [
                    ["value", "Vacaciones"]
                ], null, null, null, null, null)), a.ob(19, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(20, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["VACACIONES"])), (e()(), a.pb(22, 0, null, null, 3, "option", [
                    ["value", "Idiomas"]
                ], null, null, null, null, null)), a.ob(23, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(24, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["IDIOMAS"])), (e()(), a.pb(26, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.salir() && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Salir\n"])), (e()(), a.pb(28, 0, null, null, 0, "hr", [], null, null, null, null, null)), (e()(), a.pb(29, 0, null, null, 21, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(30, 0, null, null, 15, "div", [
                    ["class", "col-3"]
                ], null, null, null, null, null)), (e()(), a.pb(31, 0, null, null, 14, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(32, 0, null, null, 13, "div", [
                    ["class", "card-body"],
                    ["id", "chat-usuarios"]
                ], null, null, null, null, null)), (e()(), a.pb(33, 0, null, null, 12, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(34, 0, null, null, 8, "thead", [], null, null, null, null, null)), (e()(), a.pb(35, 0, null, null, 7, "tr", [], null, null, null, null, null)), (e()(), a.pb(36, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Foto"])), (e()(), a.pb(38, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["usuario"])), (e()(), a.pb(40, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["sala"])), (e()(), a.pb(42, 0, null, null, 0, "th", [], null, null, null, null, null)), (e()(), a.pb(43, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, ye)), a.ob(45, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(46, 0, null, null, 4, "div", [
                    ["class", "col-9"]
                ], null, null, null, null, null)), (e()(), a.pb(47, 0, null, null, 3, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(48, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(49, 0, null, null, 1, "app-chat", [], null, null, null, fe, ue)), a.ob(50, 245760, null, 0, ie, [oe.a, le.a, se.a], null, null)], function(e, t) { var n = t.component;
                    e(t, 11, 0, "sala", n.sala), e(t, 15, 0, "Juegos"), e(t, 16, 0, "Juegos"), e(t, 19, 0, "Vacaciones"), e(t, 20, 0, "Vacaciones"), e(t, 23, 0, "Idiomas"), e(t, 24, 0, "Idiomas"), e(t, 45, 0, n.usuarios), e(t, 50, 0) }, function(e, t) { var n = t.component;
                    e(t, 4, 0, n.nombre), e(t, 7, 0, n.sala), e(t, 8, 0, a.xb(t, 13).ngClassUntouched, a.xb(t, 13).ngClassTouched, a.xb(t, 13).ngClassPristine, a.xb(t, 13).ngClassDirty, a.xb(t, 13).ngClassValid, a.xb(t, 13).ngClassInvalid, a.xb(t, 13).ngClassPending) }) }

            function ve(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-mensajes", [], null, null, null, Me, be)), a.ob(1, 245760, null, 0, pe, [oe.a, le.a, se.a, ge.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var Le = a.lb("app-mensajes", pe, ve, {}, {}, []),
                ke = function() {
                    function e(e) { this._ajustes = e } return e.prototype.ngOnInit = function() { this.colocarCheck() }, e.prototype.cambiarColor = function(e, t) { this.aplicarCheck(t), this._ajustes.aplicarTema(e) }, e.prototype.aplicarCheck = function(e) { for (var t = 0, n = document.getElementsByClassName("selector"); t < n.length; t++) n[t].classList.remove("working");
                        e.classList.add("working") }, e.prototype.colocarCheck = function() { for (var e = document.getElementsByClassName("selector"), t = this._ajustes.ajustes.tema, n = 0, a = e; n < a.length; n++) { var r = a[n]; if (r.getAttribute("data-theme") === t) { r.classList.add("working"); break } } }, e }(),
                Ye = n("LjSU"),
                De = a.nb({ encapsulation: 2, styles: [], data: {} });

            function we(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 50, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 49, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 48, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 47, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Temas"])), (e()(), a.pb(6, 0, null, null, 0, "hr", [], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 43, "div", [
                    ["class", "r-panel-body"]
                ], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 42, "ul", [
                    ["class", "m-t-20"],
                    ["id", "themecolors"]
                ], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Con el sidebar claro"])), (e()(), a.pb(12, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(13, 0, [
                    ["link1", 1]
                ], null, 1, "a", [
                    ["class", "selector default-theme"],
                    ["data-theme", "default"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("default", a.xb(e, 13)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["1"])), (e()(), a.pb(15, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(16, 0, [
                    ["link2", 1]
                ], null, 1, "a", [
                    ["class", "selector green-theme"],
                    ["data-theme", "green"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("green", a.xb(e, 16)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["2"])), (e()(), a.pb(18, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(19, 0, [
                    ["link3", 1]
                ], null, 1, "a", [
                    ["class", "selector red-theme"],
                    ["data-theme", "red"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("red", a.xb(e, 19)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["3"])), (e()(), a.pb(21, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(22, 0, [
                    ["link4", 1]
                ], null, 1, "a", [
                    ["class", "selector blue-theme"],
                    ["data-theme", "blue"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("blue", a.xb(e, 22)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["4"])), (e()(), a.pb(24, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(25, 0, [
                    ["link5", 1]
                ], null, 1, "a", [
                    ["class", "selector purple-theme"],
                    ["data-theme", "purple"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("purple", a.xb(e, 25)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["5"])), (e()(), a.pb(27, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(28, 0, [
                    ["link6", 1]
                ], null, 1, "a", [
                    ["class", "selector megna-theme"],
                    ["data-theme", "megna"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("megna", a.xb(e, 28)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["6"])), (e()(), a.pb(30, 0, null, null, 2, "li", [
                    ["class", "d-block m-t-30"]
                ], null, null, null, null, null)), (e()(), a.pb(31, 0, null, null, 1, "b", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Con el sidebar oscuro"])), (e()(), a.pb(33, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(34, 0, [
                    ["link7", 1]
                ], null, 1, "a", [
                    ["class", "selector default-dark-theme"],
                    ["data-theme", "default-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("default-dark", a.xb(e, 34)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["7"])), (e()(), a.pb(36, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(37, 0, [
                    ["link8", 1]
                ], null, 1, "a", [
                    ["class", "selector green-dark-theme"],
                    ["data-theme", "green-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("green-dark", a.xb(e, 37)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["8"])), (e()(), a.pb(39, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(40, 0, [
                    ["link9", 1]
                ], null, 1, "a", [
                    ["class", "selector red-dark-theme"],
                    ["data-theme", "red-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("red-dark", a.xb(e, 40)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["9"])), (e()(), a.pb(42, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(43, 0, [
                    ["link10", 1]
                ], null, 1, "a", [
                    ["class", "selector blue-dark-theme"],
                    ["data-theme", "blue-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("blue-dark", a.xb(e, 43)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["10"])), (e()(), a.pb(45, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(46, 0, [
                    ["link11", 1]
                ], null, 1, "a", [
                    ["class", "selector purple-dark-theme"],
                    ["data-theme", "purple-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("purple-dark", a.xb(e, 46)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["11"])), (e()(), a.pb(48, 0, null, null, 2, "li", [], null, null, null, null, null)), (e()(), a.pb(49, 0, [
                    ["link12", 1]
                ], null, 1, "a", [
                    ["class", "selector megna-dark-theme"],
                    ["data-theme", "megna-dark"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== e.component.cambiarColor("megna-dark", a.xb(e, 49)) && r), r }, null, null)), (e()(), a.Eb(-1, null, ["12"]))], null, null) }

            function xe(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-accout-settings", [], null, null, null, we, De)), a.ob(1, 114688, null, 0, ke, [Ye.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var Te = a.lb("app-accout-settings", ke, xe, {}, {}, []),
                Se = n("GUC0"),
                He = n.n(Se),
                je = function() {
                    function e(e) { this._usuarioService = e, this.usuario = this._usuarioService.usuario } return e.prototype.ngOnInit = function() {}, e.prototype.guardar = function(e) { this.usuario.nombre = e.nombre, this.usuario.google || (this.usuario.email = e.email), this._usuarioService.actualizarUsuario(this.usuario).subscribe() }, e.prototype.seleccionImage = function(e) { var t = this; if (e) { if (e.type.indexOf("image") < 0) return He()("Solo imagenes", "El archivo seleccionado no se una imagen", "error"), void(this.imagenSubir = null);
                            this.imagenSubir = e; var n = new FileReader;
                            n.readAsDataURL(e), n.onloadend = function() { return t.imagenTemp = n.result } } else this.imagenSubir = null }, e.prototype.cambiarImagen = function() { this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id) }, e }(),
                Ce = a.nb({ encapsulation: 2, styles: [], data: {} });

            function Oe(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "img", [
                    ["class", "w150"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(1, 1)], null, function(e, t) { var n = t.component,
                        r = a.Fb(t, 0, 0, e(t, 1, 0, a.xb(t.parent, 0), n.usuario.img));
                    e(t, 0, 0, r) }) }

            function Pe(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 0, "img", [
                    ["class", "w150"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null))], null, function(e, t) { e(t, 0, 0, t.component.imagenTemp) }) }

            function Ae(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 59, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 41, "div", [
                    ["class", "col-lg-7"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 40, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 39, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Perfil del usuario"])), (e()(), a.pb(7, 0, null, null, 1, "h6", [
                    ["class", "card-subtitle"]
                ], null, null, null, null, null)), (e()(), a.Eb(8, null, ["", ""])), (e()(), a.pb(9, 0, null, null, 34, "form", [
                    ["class", "form p-t-20"],
                    ["ngNativeValidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngSubmit"],
                    [null, "submit"],
                    [null, "reset"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "submit" === t && (r = !1 !== a.xb(e, 10).onSubmit(n) && r), "reset" === t && (r = !1 !== a.xb(e, 10).onReset() && r), "ngSubmit" === t && (r = !1 !== l.guardar(a.xb(e, 10).value) && r), r }, null, null)), a.ob(10, 4210688, [
                    ["f", 4]
                ], 0, c.p, [
                    [8, null],
                    [8, null]
                ], null, { ngSubmit: "ngSubmit" }), a.Bb(2048, null, c.c, null, [c.p]), a.ob(12, 16384, null, 0, c.o, [
                    [4, c.c]
                ], null, null), (e()(), a.pb(13, 0, null, null, 13, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (e()(), a.pb(14, 0, null, null, 1, "label", [
                    ["for", "exampleInputuname"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Nombre de usuario"])), (e()(), a.pb(16, 0, null, null, 10, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (e()(), a.pb(17, 0, null, null, 1, "div", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (e()(), a.pb(18, 0, null, null, 0, "i", [
                    ["class", "ti-user"]
                ], null, null, null, null, null)), (e()(), a.pb(19, 0, null, null, 7, "input", [
                    ["class", "form-control"],
                    ["name", "nombre"],
                    ["placeholder", "Nombre de usuario"],
                    ["required", ""],
                    ["type", "text"]
                ], [
                    [1, "required", 0],
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(e, t, n) { var r = !0; return "input" === t && (r = !1 !== a.xb(e, 20)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 20).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 20)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 20)._compositionEnd(n.target.value) && r), r }, null, null)), a.ob(20, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.ob(21, 16384, null, 0, c.u, [], { required: [0, "required"] }, null), a.Bb(1024, null, c.k, function(e) { return [e] }, [c.u]), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.d]), a.ob(24, 671744, null, 0, c.q, [
                    [2, c.c],
                    [6, c.k],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, null), a.Bb(2048, null, c.m, null, [c.q]), a.ob(26, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(27, 0, null, null, 13, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (e()(), a.pb(28, 0, null, null, 1, "label", [
                    ["for", "exampleInputEmail1"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Correo de usuario"])), (e()(), a.pb(30, 0, null, null, 10, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (e()(), a.pb(31, 0, null, null, 1, "div", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (e()(), a.pb(32, 0, null, null, 0, "i", [
                    ["class", "ti-email"]
                ], null, null, null, null, null)), (e()(), a.pb(33, 0, null, null, 7, "input", [
                    ["class", "form-control"],
                    ["name", "email"],
                    ["placeholder", "Correo del usuario"],
                    ["required", ""],
                    ["type", "email"]
                ], [
                    [1, "required", 0],
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(e, t, n) { var r = !0; return "input" === t && (r = !1 !== a.xb(e, 34)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 34).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 34)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 34)._compositionEnd(n.target.value) && r), r }, null, null)), a.ob(34, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.ob(35, 16384, null, 0, c.u, [], { required: [0, "required"] }, null), a.Bb(1024, null, c.k, function(e) { return [e] }, [c.u]), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.d]), a.ob(38, 671744, null, 0, c.q, [
                    [2, c.c],
                    [6, c.k],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"] }, null), a.Bb(2048, null, c.m, null, [c.q]), a.ob(40, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(41, 0, null, null, 2, "button", [
                    ["class", " btn btn-success waves-effect waves-light m-r-10 "],
                    ["type", "submit"]
                ], null, null, null, null, null)), (e()(), a.pb(42, 0, null, null, 0, "i", [
                    ["class", "fa fa-save "]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" Guardar "])), (e()(), a.pb(44, 0, null, null, 16, "div", [
                    ["class", "col-lg-5"]
                ], null, null, null, null, null)), (e()(), a.pb(45, 0, null, null, 15, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(46, 0, null, null, 14, "div", [
                    ["align", "center"],
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(47, 0, null, null, 1, "h4", [
                    ["class", "card-title "]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Fotografia del usuario"])), (e()(), a.pb(49, 0, null, null, 1, "h6", [
                    ["class", "card-subtitle "]
                ], null, null, null, null, null)), (e()(), a.Eb(50, null, ["", ""])), (e()(), a.eb(16777216, null, null, 1, null, Oe)), a.ob(52, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, Pe)), a.ob(54, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.pb(55, 0, null, null, 0, "input", [
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], function(e, t, n) { var a = !0; return "change" === t && (a = !1 !== e.component.seleccionImage(n.target.files[0]) && a), a }, null, null)), (e()(), a.pb(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(57, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(58, 0, null, null, 2, "button", [
                    ["class", "btn btn-block btn-success waves-effect waves-light m-r-10 "],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarImagen() && a), a }, null, null)), (e()(), a.pb(59, 0, null, null, 0, "i", [
                    ["class", "fa fa-save "]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" Actualizar foto "]))], function(e, t) { var n = t.component;
                    e(t, 21, 0, ""), e(t, 24, 0, "nombre", n.usuario.nombre), e(t, 35, 0, ""), e(t, 38, 0, "email", n.usuario.google, n.usuario.email), e(t, 52, 0, !n.imagenTemp), e(t, 54, 0, n.imagenTemp) }, function(e, t) { var n = t.component;
                    e(t, 8, 0, n.usuario.nombre), e(t, 9, 0, a.xb(t, 12).ngClassUntouched, a.xb(t, 12).ngClassTouched, a.xb(t, 12).ngClassPristine, a.xb(t, 12).ngClassDirty, a.xb(t, 12).ngClassValid, a.xb(t, 12).ngClassInvalid, a.xb(t, 12).ngClassPending), e(t, 19, 0, a.xb(t, 21).required ? "" : null, a.xb(t, 26).ngClassUntouched, a.xb(t, 26).ngClassTouched, a.xb(t, 26).ngClassPristine, a.xb(t, 26).ngClassDirty, a.xb(t, 26).ngClassValid, a.xb(t, 26).ngClassInvalid, a.xb(t, 26).ngClassPending), e(t, 33, 0, a.xb(t, 35).required ? "" : null, a.xb(t, 40).ngClassUntouched, a.xb(t, 40).ngClassTouched, a.xb(t, 40).ngClassPristine, a.xb(t, 40).ngClassDirty, a.xb(t, 40).ngClassValid, a.xb(t, 40).ngClassInvalid, a.xb(t, 40).ngClassPending), e(t, 50, 0, n.usuario.nombre), e(t, 58, 0, !n.imagenSubir) }) }

            function Ee(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-profile", [], null, null, null, Ae, Ce)), a.ob(1, 114688, null, 0, je, [le.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var We = a.lb("app-profile", je, Ee, {}, {}, []),
                Fe = n("ZYCi"),
                Ie = n("0np6"),
                Re = function() {
                    function e(e, t) { var n = this;
                        this.activatedRoute = e, this.http = t, this.usuarios = [], this.medicos = [], this.hospitales = [], e.params.subscribe(function(e) { n.buscar(e.termino) }) } return e.prototype.ngOnInit = function() {}, e.prototype.buscar = function(e) { var t = this;
                        this.http.get(Ie.a + "/busqueda/todo/" + e).subscribe(function(e) { console.log(e), t.hospitales = e.hospitales, t.medicos = e.medicos, t.usuarios = e.usuarios }) }, e }(),
                ze = n("t/Na"),
                Ne = a.nb({ encapsulation: 2, styles: [], data: {} });

            function Be(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 7, "tr", [
                    ["class", "pointer"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 1).onClick() && r), r }, null, null)), a.ob(1, 16384, null, 0, Fe.m, [Fe.l, Fe.a, [8, null], a.D, a.k], { routerLink: [0, "routerLink"] }, null), a.yb(2, 1), (e()(), a.pb(3, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "img", [
                    ["class", "img-50  img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(5, 2), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, ["", ""]))], function(e, t) { var n = e(t, 2, 0, "/usuarios");
                    e(t, 1, 0, n) }, function(e, t) { var n = a.Fb(t, 4, 0, e(t, 5, 0, a.xb(t.parent.parent, 0), t.context.$implicit.img, "usuario"));
                    e(t, 4, 0, n), e(t, 7, 0, t.context.$implicit.nombre) }) }

            function Ve(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 3, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, Be)), a.ob(3, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null)], function(e, t) { e(t, 3, 0, t.component.usuarios) }, null) }

            function Ue(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "div", [
                    ["class", "alert alert-info"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" NO HAY REGISTROS! "]))], null, null) }

            function Je(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 7, "tr", [
                    ["class", "pointer"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 1).onClick() && r), r }, null, null)), a.ob(1, 16384, null, 0, Fe.m, [Fe.l, Fe.a, [8, null], a.D, a.k], { routerLink: [0, "routerLink"] }, null), a.yb(2, 1), (e()(), a.pb(3, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "img", [
                    ["class", "img-50  img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(5, 2), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, ["", ""]))], function(e, t) { var n = e(t, 2, 0, "/hospitales");
                    e(t, 1, 0, n) }, function(e, t) { var n = a.Fb(t, 4, 0, e(t, 5, 0, a.xb(t.parent.parent, 0), t.context.$implicit.img, "hospital"));
                    e(t, 4, 0, n), e(t, 7, 0, t.context.$implicit.nombre) }) }

            function Ge(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 3, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, Je)), a.ob(3, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null)], function(e, t) { e(t, 3, 0, t.component.hospitales) }, null) }

            function qe(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "div", [
                    ["class", "alert alert-info"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" NO HAY REGISTROS! "]))], null, null) }

            function $e(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 7, "tr", [
                    ["class", "pointer"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 1).onClick() && r), r }, null, null)), a.ob(1, 16384, null, 0, Fe.m, [Fe.l, Fe.a, [8, null], a.D, a.k], { routerLink: [0, "routerLink"] }, null), a.yb(2, 2), (e()(), a.pb(3, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "img", [
                    ["class", "img-50  img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(5, 2), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, ["", ""]))], function(e, t) { var n = e(t, 2, 0, "/medico", t.context.$implicit._id);
                    e(t, 1, 0, n) }, function(e, t) { var n = a.Fb(t, 4, 0, e(t, 5, 0, a.xb(t.parent.parent, 0), t.context.$implicit.img, "medico"));
                    e(t, 4, 0, n), e(t, 7, 0, t.context.$implicit.nombre) }) }

            function Ke(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 3, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, $e)), a.ob(3, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null)], function(e, t) { e(t, 3, 0, t.component.medicos) }, null) }

            function Ze(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "div", [
                    ["class", "alert alert-info"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" NO HAY REGISTROS! "]))], null, null) }

            function Qe(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 27, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 8, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 7, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 6, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, null, null, 1, "h4", [
                    ["class", "cardtitle"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Usuarios"])), (e()(), a.eb(16777216, null, null, 1, null, Ve)), a.ob(8, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, Ue)), a.ob(10, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.pb(11, 0, null, null, 8, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (e()(), a.pb(12, 0, null, null, 7, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(13, 0, null, null, 6, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(14, 0, null, null, 1, "h4", [
                    ["class", "cardtitle"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospitales"])), (e()(), a.eb(16777216, null, null, 1, null, Ge)), a.ob(17, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, qe)), a.ob(19, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.pb(20, 0, null, null, 8, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (e()(), a.pb(21, 0, null, null, 7, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(22, 0, null, null, 6, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(23, 0, null, null, 1, "h4", [
                    ["class", "cardtitle"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Medicos"])), (e()(), a.eb(16777216, null, null, 1, null, Ke)), a.ob(26, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, Ze)), a.ob(28, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null)], function(e, t) { var n = t.component;
                    e(t, 8, 0, n.usuarios.length > 0), e(t, 10, 0, 0 === n.usuarios.length), e(t, 17, 0, n.hospitales.length > 0), e(t, 19, 0, 0 === n.hospitales.length), e(t, 26, 0, n.medicos.length > 0), e(t, 28, 0, 0 === n.medicos.length) }, null) }

            function Xe(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-busqueda", [], null, null, null, Qe, Ne)), a.ob(1, 114688, null, 0, Re, [Fe.a, ze.c], null, null)], function(e, t) { e(t, 1, 0) }, null) } var et = a.lb("app-busqueda", Re, Xe, {}, {}, []),
                tt = function() {
                    function e(e, t) { this._usuarioService = e, this._modalUploadService = t, this.usuarios = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { var e = this;
                        this.cargarUsuarios(), this._modalUploadService.notificacion.subscribe(function(t) { return e.cargarUsuarios() }) }, e.prototype.cargarUsuarios = function() { var e = this;
                        this._usuarioService.cargarUsuarios().subscribe(function(t) { e.totalRegistros = t.total, e.usuarios = t.usuarios, e.cargando = !1 }) }, e.prototype.buscarUsuario = function(e) { var t = this;
                        e.length <= 0 ? this.cargarUsuarios() : (this.cargando = !0, this._usuarioService.buscarUsuarios(e).subscribe(function(e) { t.usuarios = e, t.cargando = !1 })) }, e.prototype.guardarUsuario = function(e) { this._usuarioService.actualizarUsuario(e).subscribe() }, e.prototype.borrarUsuario = function(e) { var t = this;
                        e._id !== this._usuarioService.usuario._id ? swal({ title: "\xbfEsta seguro?", text: "Esta a punto de borrar a " + e.nombre, icon: "warning", buttons: !0, dangerMode: !0 }).then(function(n) { console.log(n), n && t._usuarioService.borrarUsuario(e._id).subscribe(function(e) { console.log(e), t.cargarUsuarios() }) }) : swal("No puede borrar usuario", "No se puede borrar a si mismo", "error") }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdeu")) + e;
                        t >= this.totalRegistros || t < 0 || (this._usuarioService.guardardesdeStorage(t), this.cargarUsuarios()) }, e }(),
                nt = a.nb({ encapsulation: 2, styles: [], data: {} });

            function at(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 9, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 8, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 7, "div", [
                    ["class", "alert-warning text-center"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Cargando"])), (e()(), a.pb(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(6, 0, null, null, 0, "i", [
                    ["class", "fa fa-refresh fa-spin fa-2x"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Espere por favor"]))], null, null) }

            function rt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "label", [
                    ["class", "label label-danger"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Google"]))], null, null) }

            function lt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "label", [
                    ["class", "label label-info"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Normal"]))], null, null) }

            function it(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 59, "tr", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 1, "img", [
                    ["class", "img-50 img-circle pointer"]
                ], [
                    [8, "src", 4]
                ], [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.mostrarModal(e.context.$implicit._id) && a), a }, null, null)), a.Ab(3, 2), (e()(), a.pb(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, [" ", " "])), (e()(), a.pb(8, 0, null, null, 26, "td", [], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 25, "select", [
                    ["class", "form-control"],
                    ["name", "sala"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "change"],
                    [null, "blur"]
                ], function(e, t, n) { var r = !0; return "change" === t && (r = !1 !== a.xb(e, 10).onChange(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 10).onTouched() && r), "ngModelChange" === t && (r = !1 !== (e.context.$implicit.sala = n) && r), r }, null, null)), a.ob(10, 16384, null, 0, c.v, [a.D, a.k], null, null), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.v]), a.ob(12, 671744, null, 0, c.q, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(14, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(15, 0, null, null, 3, "option", [
                    ["value", "Juegos"]
                ], null, null, null, null, null)), a.ob(16, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(17, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["JUEGOS"])), (e()(), a.pb(19, 0, null, null, 3, "option", [
                    ["value", "Vacaciones"]
                ], null, null, null, null, null)), a.ob(20, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(21, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["VACACIONES"])), (e()(), a.pb(23, 0, null, null, 3, "option", [
                    ["value", "Idiomas"]
                ], null, null, null, null, null)), a.ob(24, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(25, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["IDIOMAS"])), (e()(), a.pb(27, 0, null, null, 3, "option", [
                    ["value", "Trabajo"]
                ], null, null, null, null, null)), a.ob(28, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(29, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["TRABAJO"])), (e()(), a.pb(31, 0, null, null, 3, "option", [
                    ["value", "Musica"]
                ], null, null, null, null, null)), a.ob(32, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(33, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["MUSICA"])), (e()(), a.pb(35, 0, null, null, 14, "td", [], null, null, null, null, null)), (e()(), a.pb(36, 0, null, null, 13, "select", [
                    ["class", "form-control"],
                    ["name", "role"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "change"],
                    [null, "blur"]
                ], function(e, t, n) { var r = !0; return "change" === t && (r = !1 !== a.xb(e, 37).onChange(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 37).onTouched() && r), "ngModelChange" === t && (r = !1 !== (e.context.$implicit.role = n) && r), r }, null, null)), a.ob(37, 16384, null, 0, c.v, [a.D, a.k], null, null), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.v]), a.ob(39, 671744, null, 0, c.q, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(41, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(42, 0, null, null, 3, "option", [
                    ["value", "ADMIN_ROLE"]
                ], null, null, null, null, null)), a.ob(43, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(44, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["ADMIN_ROLE"])), (e()(), a.pb(46, 0, null, null, 3, "option", [
                    ["value", "USER_ROLE"]
                ], null, null, null, null, null)), a.ob(47, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(48, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["USER_ROLE"])), (e()(), a.pb(50, 0, null, null, 4, "td", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, rt)), a.ob(52, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, lt)), a.ob(54, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.pb(55, 0, null, null, 4, "td", [], null, null, null, null, null)), (e()(), a.pb(56, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.guardarUsuario(e.context.$implicit) && a), a }, null, null)), (e()(), a.pb(57, 0, null, null, 0, "i", [
                    ["class", "fa fa-save"]
                ], null, null, null, null, null)), (e()(), a.pb(58, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.borrarUsuario(e.context.$implicit) && a), a }, null, null)), (e()(), a.pb(59, 0, null, null, 0, "i", [
                    ["class", "fa fa-trash-o"]
                ], null, null, null, null, null))], function(e, t) { e(t, 12, 0, "sala", t.context.$implicit.sala), e(t, 16, 0, "Juegos"), e(t, 17, 0, "Juegos"), e(t, 20, 0, "Vacaciones"), e(t, 21, 0, "Vacaciones"), e(t, 24, 0, "Idiomas"), e(t, 25, 0, "Idiomas"), e(t, 28, 0, "Trabajo"), e(t, 29, 0, "Trabajo"), e(t, 32, 0, "Musica"), e(t, 33, 0, "Musica"), e(t, 39, 0, "role", t.context.$implicit.role), e(t, 43, 0, "ADMIN_ROLE"), e(t, 44, 0, "ADMIN_ROLE"), e(t, 47, 0, "USER_ROLE"), e(t, 48, 0, "USER_ROLE"), e(t, 52, 0, t.context.$implicit.google), e(t, 54, 0, !t.context.$implicit.google) }, function(e, t) { var n = a.Fb(t, 2, 0, e(t, 3, 0, a.xb(t.parent.parent, 0), t.context.$implicit.img, "usuario"));
                    e(t, 2, 0, n), e(t, 5, 0, t.context.$implicit.email), e(t, 7, 0, t.context.$implicit.nombre), e(t, 9, 0, a.xb(t, 14).ngClassUntouched, a.xb(t, 14).ngClassTouched, a.xb(t, 14).ngClassPristine, a.xb(t, 14).ngClassDirty, a.xb(t, 14).ngClassValid, a.xb(t, 14).ngClassInvalid, a.xb(t, 14).ngClassPending), e(t, 36, 0, a.xb(t, 41).ngClassUntouched, a.xb(t, 41).ngClassTouched, a.xb(t, 41).ngClassPristine, a.xb(t, 41).ngClassDirty, a.xb(t, 41).ngClassValid, a.xb(t, 41).ngClassInvalid, a.xb(t, 41).ngClassPending) }) }

            function ot(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 31, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 30, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 29, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 28, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 4, "h3", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Usuarios registrados ( "])), (e()(), a.pb(6, 0, null, null, 1, "small", [], null, null, null, null, null)), (e()(), a.Eb(7, null, ["", ""])), (e()(), a.Eb(-1, null, [" )"])), (e()(), a.pb(9, 0, null, null, 18, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 14, "thead", [], null, null, null, null, null)), (e()(), a.pb(11, 0, null, null, 13, "tr", [], null, null, null, null, null)), (e()(), a.pb(12, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Imagen"])), (e()(), a.pb(14, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Correo"])), (e()(), a.pb(16, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Nombre"])), (e()(), a.pb(18, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Sala"])), (e()(), a.pb(20, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Role"])), (e()(), a.pb(22, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Auth"])), (e()(), a.pb(24, 0, null, null, 0, "th", [], null, null, null, null, null)), (e()(), a.pb(25, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, it)), a.ob(27, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(28, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(-5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Anteriores "])), (e()(), a.pb(30, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Siguientes "]))], function(e, t) { e(t, 27, 0, t.component.usuarios) }, function(e, t) { e(t, 7, 0, t.component.totalRegistros) }) }

            function st(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 4, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 3, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 2, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, [
                    ["input", 1]
                ], null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Buscar usuario..."],
                    ["type", "text"]
                ], null, [
                    [null, "keyup"]
                ], function(e, t, n) { var r = !0; return "keyup" === t && (r = !1 !== e.component.buscarUsuario(a.xb(e, 5).value) && r), r }, null, null)), (e()(), a.eb(16777216, null, null, 1, null, at)), a.ob(7, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, ot)), a.ob(9, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null)], function(e, t) { var n = t.component;
                    e(t, 7, 0, n.cargando), e(t, 9, 0, !n.cargando) }, null) }

            function ut(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-usuarios", [], null, null, null, st, nt)), a.ob(1, 114688, null, 0, tt, [le.a, se.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var dt = a.lb("app-usuarios", tt, ut, {}, {}, []),
                ct = function() { return function(e, t, n, a) { this.nombre = e, this.img = t, this.usuario = n, this._id = a } }(),
                ht = function() {
                    function e(e, t) { this._hospitalService = e, this._modalUploadService = t, this.hospitales = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { var e = this;
                        this.cargarHospitales(), this._modalUploadService.notificacion.subscribe(function() { return e.cargarHospitales() }) }, e.prototype.cargarHospitales = function() { var e = this;
                        this._hospitalService.cargarHospitales().subscribe(function(t) { e.totalRegistros = t.total, e.hospitales = t.hospitales, e.cargando = !1 }) }, e.prototype.crearHospital = function() { var e = this;
                        He()({ title: "Ingrese nuevo nombre:", text: "Ingrese el nombre del hospital", content: { element: "input", attributes: { placeholder: "Nombre de hospital" } }, buttons: ["Mejor no!", !0] }).then(function(t) { if (t) { var n = new ct(t);
                                e._hospitalService.crearHospital(n).subscribe(function() { return e.cargarHospitales() }) } }) }, e.prototype.buscarHospital = function(e) { var t = this;
                        e.length <= 0 ? this.cargarHospitales() : (this.cargando = !0, this._hospitalService.buscarHospitales(e).subscribe(function(e) { t.totalRegistros = null, t.hospitales = e, t.cargando = !1 })) }, e.prototype.cambiarNombre = function(e) { He()({ title: "Nombre hospital:", text: "CAMBIAR A", content: { element: "input", attributes: { value: e.nombre } }, buttons: ["Mejor no!", !0] }).then(function(t) { t && (e.nombre = t) }) }, e.prototype.guardarHospital = function(e) { var t = this;
                        this._hospitalService.actualizarHospital(e).subscribe(function() { return t.cargarHospitales() }) }, e.prototype.borrarHospital = function(e) { var t = this;
                        this._hospitalService.borrarHospital(e._id).subscribe(function() { return t.cargarHospitales() }) }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("hospitales", e) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdeh")) + e;
                        t >= this.totalRegistros || t < 0 || (this._hospitalService.guardardesdeStorage(t), this.cargarHospitales()) }, e }(),
                _t = n("Fi67"),
                mt = a.nb({ encapsulation: 2, styles: [], data: {} });

            function ft(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 9, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 8, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 7, "div", [
                    ["class", "alert-warning text-center"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Cargando"])), (e()(), a.pb(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(6, 0, null, null, 0, "i", [
                    ["class", "fa fa-refresh fa-spin fa-2x"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Espere por favor"]))], null, null) }

            function pt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "td", [
                    ["class", "w70"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 1, "img", [
                    ["class", "img-50  pointer"]
                ], [
                    [8, "src", 4]
                ], [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.mostrarModal(e.context.$implicit._id) && a), a }, null, null)), a.Ab(3, 2), (e()(), a.pb(4, 0, null, null, 1, "td", [], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarNombre(e.context.$implicit) && a), a }, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 4, "td", [], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.guardarHospital(e.context.$implicit) && a), a }, null, null)), (e()(), a.pb(8, 0, null, null, 0, "i", [
                    ["class", "fa fa-save"]
                ], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.borrarHospital(e.context.$implicit) && a), a }, null, null)), (e()(), a.pb(10, 0, null, null, 0, "i", [
                    ["class", "fa fa-trash-o"]
                ], null, null, null, null, null))], null, function(e, t) { var n = a.Fb(t, 2, 0, e(t, 3, 0, a.xb(t.parent.parent, 0), t.context.$implicit.img, "hospital"));
                    e(t, 2, 0, n), e(t, 5, 0, t.context.$implicit.nombre) }) }

            function gt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 27, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 26, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 25, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 24, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 4, "h3", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospitales registrados ( "])), (e()(), a.pb(6, 0, null, null, 1, "small", [], null, null, null, null, null)), (e()(), a.Eb(7, null, ["", ""])), (e()(), a.Eb(-1, null, [" )"])), (e()(), a.pb(9, 0, null, null, 3, "div", [
                    ["class", "text-right"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 2, "button", [
                    ["class", "btn waves-effect waves-light btn-rounded btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.crearHospital() && a), a }, null, null)), (e()(), a.pb(11, 0, null, null, 0, "i", [
                    ["class", "fa fa-plus"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" Crear Hospital "])), (e()(), a.pb(13, 0, null, null, 10, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(14, 0, null, null, 6, "thead", [], null, null, null, null, null)), (e()(), a.pb(15, 0, null, null, 5, "tr", [], null, null, null, null, null)), (e()(), a.pb(16, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Imagen"])), (e()(), a.pb(18, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospital"])), (e()(), a.pb(20, 0, null, null, 0, "th", [], null, null, null, null, null)), (e()(), a.pb(21, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, pt)), a.ob(23, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(24, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(-5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Anteriores "])), (e()(), a.pb(26, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Siguientes "]))], function(e, t) { e(t, 23, 0, t.component.hospitales) }, function(e, t) { e(t, 7, 0, t.component.totalRegistros) }) }

            function bt(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 4, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 3, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 2, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, [
                    ["input", 1]
                ], null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Buscar hospital..."],
                    ["type", "text"]
                ], null, [
                    [null, "keyup"]
                ], function(e, t, n) { var r = !0; return "keyup" === t && (r = !1 !== e.component.buscarHospital(a.xb(e, 5).value) && r), r }, null, null)), (e()(), a.eb(16777216, null, null, 1, null, ft)), a.ob(7, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null), (e()(), a.eb(16777216, null, null, 1, null, gt)), a.ob(9, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null)], function(e, t) { var n = t.component;
                    e(t, 7, 0, n.cargando), e(t, 9, 0, !n.cargando) }, null) }

            function yt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-hospitales", [], null, null, null, bt, mt)), a.ob(1, 114688, null, 0, ht, [_t.a, se.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var Mt = a.lb("app-hospitales", ht, yt, {}, {}, []),
                vt = function() {
                    function e(e) { this._medicoService = e, this.medicos = [], this.desde = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { this.cargarMedicos() }, e.prototype.cargarMedicos = function() { var e = this;
                        this._medicoService.cargarMedico().subscribe(function(t) { e.medicos = t, e.cargando = !1 }) }, e.prototype.buscarMedico = function(e) { var t = this;
                        e.length <= 0 ? this.cargarMedicos() : (this.cargando = !0, this._medicoService.buscarMedicos(e).subscribe(function(e) { t._medicoService.totalMedicos = null, t.medicos = e, t.cargando = !1 })) }, e.prototype.borrarMedico = function(e) { var t = this;
                        this._medicoService.borrarMedico(e._id).subscribe(function() { return t.cargarMedicos() }) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdem")) + e;
                        t >= this._medicoService.totalMedicos || t < 0 || (this._medicoService.guardardesdeStorage(t), this.cargarMedicos()) }, e }(),
                Lt = n("nEBN"),
                kt = a.nb({ encapsulation: 2, styles: [], data: {} });

            function Yt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 2, "td", [], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 1, "img", [
                    ["class", "img-50 img-circle"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(3, 2), (e()(), a.pb(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(5, null, [" ", " "])), (e()(), a.pb(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (e()(), a.Eb(7, null, [" ", " "])), (e()(), a.pb(8, 0, null, null, 6, "td", [], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 3, "button", [
                    ["class", "btn btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 10).onClick() && r), r }, null, null)), a.ob(10, 16384, null, 0, Fe.m, [Fe.l, Fe.a, [8, null], a.D, a.k], { routerLink: [0, "routerLink"] }, null), a.yb(11, 2), (e()(), a.pb(12, 0, null, null, 0, "i", [
                    ["class", "fa fa-edit"]
                ], null, null, null, null, null)), (e()(), a.pb(13, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.borrarMedico(e.context.$implicit) && a), a }, null, null)), (e()(), a.pb(14, 0, null, null, 0, "i", [
                    ["class", "fa fa-trash-o"]
                ], null, null, null, null, null))], function(e, t) { var n = e(t, 11, 0, "/medico", t.context.$implicit._id);
                    e(t, 10, 0, n) }, function(e, t) { var n = a.Fb(t, 2, 0, e(t, 3, 0, a.xb(t.parent, 0), t.context.$implicit.img, "medico"));
                    e(t, 2, 0, n), e(t, 5, 0, t.context.$implicit.nombre), e(t, 7, 0, t.context.$implicit.hospital.nombre) }) }

            function Dt(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 4, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 3, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 2, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(5, 0, [
                    ["input", 1]
                ], null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Buscar medico..."],
                    ["type", "text"]
                ], null, [
                    [null, "keyup"]
                ], function(e, t, n) { var r = !0; return "keyup" === t && (r = !1 !== e.component.buscarMedico(a.xb(e, 5).value) && r), r }, null, null)), (e()(), a.pb(6, 0, null, null, 31, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 30, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 29, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (e()(), a.pb(9, 0, null, null, 28, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(10, 0, null, null, 4, "h3", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Medicos registrados ( "])), (e()(), a.pb(12, 0, null, null, 1, "small", [], null, null, null, null, null)), (e()(), a.Eb(13, null, ["", ""])), (e()(), a.Eb(-1, null, [" )"])), (e()(), a.pb(15, 0, null, null, 5, "div", [
                    ["class", "text-right"]
                ], null, null, null, null, null)), (e()(), a.pb(16, 0, null, null, 4, "button", [
                    ["class", "btn waves-effect waves-light btn-rounded btn-primary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 17).onClick() && r), r }, null, null)), a.ob(17, 16384, null, 0, Fe.m, [Fe.l, Fe.a, [8, null], a.D, a.k], { routerLink: [0, "routerLink"] }, null), a.yb(18, 2), (e()(), a.pb(19, 0, null, null, 0, "i", [
                    ["class", "fa fa-plus"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" Crear Medico "])), (e()(), a.pb(21, 0, null, null, 12, "table", [
                    ["class", "table table-hover"]
                ], null, null, null, null, null)), (e()(), a.pb(22, 0, null, null, 8, "thead", [], null, null, null, null, null)), (e()(), a.pb(23, 0, null, null, 7, "tr", [], null, null, null, null, null)), (e()(), a.pb(24, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Foto"])), (e()(), a.pb(26, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Medico"])), (e()(), a.pb(28, 0, null, null, 1, "th", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospital"])), (e()(), a.pb(30, 0, null, null, 0, "th", [], null, null, null, null, null)), (e()(), a.pb(31, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (e()(), a.eb(16777216, null, null, 1, null, Yt)), a.ob(33, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(34, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(-5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Anteriores "])), (e()(), a.pb(36, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarDesde(5) && a), a }, null, null)), (e()(), a.Eb(-1, null, [" Siguientes "]))], function(e, t) { var n = t.component,
                        a = e(t, 18, 0, "/medico", "nuevo");
                    e(t, 17, 0, a), e(t, 33, 0, n.medicos) }, function(e, t) { e(t, 13, 0, t.component._medicoService.totalMedicos) }) }

            function wt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-medicos", [], null, null, null, Dt, kt)), a.ob(1, 114688, null, 0, vt, [Lt.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var xt = a.lb("app-medicos", vt, wt, {}, {}, []),
                Tt = function() { return function(e, t, n, a, r) { this.nombre = e, this.img = t, this.usuario = n, this.hospital = a, this._id = r } }(),
                St = function() {
                    function e(e, t, n, a, r) { var l = this;
                        this._medicoService = e, this._hospitalService = t, this.router = n, this.activatedRoute = a, this._modalUploadService = r, this.hospitales = [], this.medico = new Tt("", "", "", "", ""), this.hospital = new ct(""), a.params.subscribe(function(e) { var t = e.id; "nuevo" !== t && l.cargarMedicoid(t) }) } return e.prototype.ngOnInit = function() { var e = this;
                        this._hospitalService.cargarHospitales().subscribe(function(t) { return e.hospitales = t.hospitales }), this._modalUploadService.notificacion.subscribe(function(t) { e.medico.img = t.medico.img }) }, e.prototype.guardarMedico = function(e) { var t = this;
                        console.log(e.valid), console.log(e.value), e.invalid || this._medicoService.guardarMedico(this.medico).subscribe(function(e) { t.medico._id = e._id, t.router.navigate(["/medico", e._id]) }) }, e.prototype.cambioHospital = function(e) { var t = this;
                        this._hospitalService.obtenerHospital(e).subscribe(function(e) { return t.hospital = e }) }, e.prototype.cargarMedicoid = function(e) { var t = this;
                        this._medicoService.cargarMedicoid(e).subscribe(function(e) { console.log(e), t.medico = e, t.medico.hospital = e.hospital._id, t.cambioHospital(t.medico.hospital) }) }, e.prototype.cambiarFoto = function() { this._modalUploadService.mostrarModal("medicos", this.medico._id) }, e }(),
                Ht = a.nb({ encapsulation: 2, styles: [], data: {} });

            function jt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 3, "option", [], null, null, null, null, null)), a.ob(1, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(2, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(3, null, ["", ""]))], function(e, t) { e(t, 1, 0, t.context.$implicit._id), e(t, 2, 0, t.context.$implicit._id) }, function(e, t) { e(t, 3, 0, t.context.$implicit.nombre) }) }

            function Ct(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 5, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (e()(), a.pb(1, 0, null, null, 4, "div", [
                    ["class", "card card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 1, "h4", [
                    ["class", "box-title m-b-0"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Fotografia"])), (e()(), a.pb(4, 0, null, null, 1, "img", [
                    ["class", "img-circle img-fluid"],
                    ["pointer", ""]
                ], [
                    [8, "src", 4]
                ], [
                    [null, "click"]
                ], function(e, t, n) { var a = !0; return "click" === t && (a = !1 !== e.component.cambiarFoto() && a), a }, null, null)), a.Ab(5, 2)], null, function(e, t) { var n = t.component,
                        r = a.Fb(t, 4, 0, e(t, 5, 0, a.xb(t.parent, 0), n.medico.img, "medico"));
                    e(t, 4, 0, r) }) }

            function Ot(e) { return a.Gb(0, [a.zb(0, ne.a, []), (e()(), a.pb(1, 0, null, null, 52, "div", [
                    ["class", "row animated fadeIn"]
                ], null, null, null, null, null)), (e()(), a.pb(2, 0, null, null, 43, "div", [
                    ["class", "col-md-6"]
                ], null, null, null, null, null)), (e()(), a.pb(3, 0, null, null, 42, "div", [
                    ["class", "card card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(4, 0, null, null, 1, "h3", [
                    ["class", "box-title m-b-0"]
                ], null, null, null, null, null)), (e()(), a.Eb(5, null, ["MEDICO: ", ""])), (e()(), a.pb(6, 0, null, null, 39, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (e()(), a.pb(7, 0, null, null, 38, "div", [
                    ["class", "col-sm-12 col-xs-12"]
                ], null, null, null, null, null)), (e()(), a.pb(8, 0, null, null, 37, "form", [
                    ["ngNativeValidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngSubmit"],
                    [null, "submit"],
                    [null, "reset"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "submit" === t && (r = !1 !== a.xb(e, 9).onSubmit(n) && r), "reset" === t && (r = !1 !== a.xb(e, 9).onReset() && r), "ngSubmit" === t && (r = !1 !== l.guardarMedico(a.xb(e, 9)) && r), r }, null, null)), a.ob(9, 4210688, [
                    ["f", 4]
                ], 0, c.p, [
                    [8, null],
                    [8, null]
                ], null, { ngSubmit: "ngSubmit" }), a.Bb(2048, null, c.c, null, [c.p]), a.ob(11, 16384, null, 0, c.o, [
                    [4, c.c]
                ], null, null), (e()(), a.pb(12, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (e()(), a.pb(13, 0, null, null, 1, "label", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Nombre del medico"])), (e()(), a.pb(15, 0, null, null, 7, "input", [
                    ["class", "form-control"],
                    ["name", "nombre"],
                    ["placeholder", "Ingrese el nombre de medico"],
                    ["required", ""],
                    ["type", "text"]
                ], [
                    [1, "required", 0],
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "input" === t && (r = !1 !== a.xb(e, 16)._handleInput(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 16).onTouched() && r), "compositionstart" === t && (r = !1 !== a.xb(e, 16)._compositionStart() && r), "compositionend" === t && (r = !1 !== a.xb(e, 16)._compositionEnd(n.target.value) && r), "ngModelChange" === t && (r = !1 !== (l.medico.nombre = n) && r), r }, null, null)), a.ob(16, 16384, null, 0, c.d, [a.D, a.k, [2, c.a]], null, null), a.ob(17, 16384, null, 0, c.u, [], { required: [0, "required"] }, null), a.Bb(1024, null, c.k, function(e) { return [e] }, [c.u]), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.d]), a.ob(20, 671744, null, 0, c.q, [
                    [2, c.c],
                    [6, c.k],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(22, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(23, 0, null, null, 16, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (e()(), a.pb(24, 0, null, null, 1, "label", [], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospital"])), (e()(), a.pb(26, 0, null, null, 13, "select", [
                    ["class", "form-control"],
                    ["name", "hospital"],
                    ["required", ""]
                ], [
                    [1, "required", 0],
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "change"],
                    [null, "ngModelChange"],
                    [null, "blur"]
                ], function(e, t, n) { var r = !0,
                        l = e.component; return "change" === t && (r = !1 !== a.xb(e, 27).onChange(n.target.value) && r), "blur" === t && (r = !1 !== a.xb(e, 27).onTouched() && r), "change" === t && (r = !1 !== l.cambioHospital(n.target.value) && r), "ngModelChange" === t && (r = !1 !== (l.medico.hospital = n) && r), r }, null, null)), a.ob(27, 16384, null, 0, c.v, [a.D, a.k], null, null), a.ob(28, 16384, null, 0, c.u, [], { required: [0, "required"] }, null), a.Bb(1024, null, c.k, function(e) { return [e] }, [c.u]), a.Bb(1024, null, c.l, function(e) { return [e] }, [c.v]), a.ob(31, 671744, null, 0, c.q, [
                    [2, c.c],
                    [6, c.k],
                    [8, null],
                    [6, c.l]
                ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), a.Bb(2048, null, c.m, null, [c.q]), a.ob(33, 16384, null, 0, c.n, [
                    [4, c.m]
                ], null, null), (e()(), a.pb(34, 0, null, null, 3, "option", [
                    ["value", ""]
                ], null, null, null, null, null)), a.ob(35, 147456, null, 0, c.r, [a.k, a.D, [2, c.v]], { value: [0, "value"] }, null), a.ob(36, 147456, null, 0, c.A, [a.k, a.D, [8, null]], { value: [0, "value"] }, null), (e()(), a.Eb(-1, null, ["Selecione hospital"])), (e()(), a.eb(16777216, null, null, 1, null, jt)), a.ob(39, 278528, null, 0, ae.i, [a.O, a.L, a.s], { ngForOf: [0, "ngForOf"] }, null), (e()(), a.pb(40, 0, null, null, 2, "button", [
                    ["class", "btn btn-success waves-effect waves-light m-r-10"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, [" Guardar "])), (e()(), a.pb(42, 0, null, null, 0, "i", [
                    ["class", "fa fa-save"]
                ], null, null, null, null, null)), (e()(), a.pb(43, 0, null, null, 2, "a", [
                    ["class", "btn btn-inverse waves-effect waves-light"],
                    ["routerLink", "/medicos"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(e, t, n) { var r = !0; return "click" === t && (r = !1 !== a.xb(e, 44).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r }, null, null)), a.ob(44, 671744, null, 0, Fe.o, [Fe.l, Fe.a, ae.g], { routerLink: [0, "routerLink"] }, null), (e()(), a.Eb(-1, null, ["Cancelar"])), (e()(), a.pb(46, 0, null, null, 5, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (e()(), a.pb(47, 0, null, null, 4, "div", [
                    ["class", "card card-body"]
                ], null, null, null, null, null)), (e()(), a.pb(48, 0, null, null, 1, "h4", [
                    ["class", "box-title m-b-0"]
                ], null, null, null, null, null)), (e()(), a.Eb(-1, null, ["Hospital"])), (e()(), a.pb(50, 0, null, null, 1, "img", [
                    ["class", "rounded img-fluid"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), a.Ab(51, 2), (e()(), a.eb(16777216, null, null, 1, null, Ct)), a.ob(53, 16384, null, 0, ae.j, [a.O, a.L], { ngIf: [0, "ngIf"] }, null)], function(e, t) { var n = t.component;
                    e(t, 17, 0, ""), e(t, 20, 0, "nombre", n.medico.nombre), e(t, 28, 0, ""), e(t, 31, 0, "hospital", n.medico.hospital), e(t, 35, 0, ""), e(t, 36, 0, ""), e(t, 39, 0, n.hospitales), e(t, 44, 0, "/medicos"), e(t, 53, 0, n.medico._id) }, function(e, t) { var n = t.component;
                    e(t, 5, 0, n.medico.nombre), e(t, 8, 0, a.xb(t, 11).ngClassUntouched, a.xb(t, 11).ngClassTouched, a.xb(t, 11).ngClassPristine, a.xb(t, 11).ngClassDirty, a.xb(t, 11).ngClassValid, a.xb(t, 11).ngClassInvalid, a.xb(t, 11).ngClassPending), e(t, 15, 0, a.xb(t, 17).required ? "" : null, a.xb(t, 22).ngClassUntouched, a.xb(t, 22).ngClassTouched, a.xb(t, 22).ngClassPristine, a.xb(t, 22).ngClassDirty, a.xb(t, 22).ngClassValid, a.xb(t, 22).ngClassInvalid, a.xb(t, 22).ngClassPending), e(t, 26, 0, a.xb(t, 28).required ? "" : null, a.xb(t, 33).ngClassUntouched, a.xb(t, 33).ngClassTouched, a.xb(t, 33).ngClassPristine, a.xb(t, 33).ngClassDirty, a.xb(t, 33).ngClassValid, a.xb(t, 33).ngClassInvalid, a.xb(t, 33).ngClassPending), e(t, 43, 0, a.xb(t, 44).target, a.xb(t, 44).href); var r = a.Fb(t, 50, 0, e(t, 51, 0, a.xb(t, 0), n.hospital.img, "hospital"));
                    e(t, 50, 0, r) }) }

            function Pt(e) { return a.Gb(0, [(e()(), a.pb(0, 0, null, null, 1, "app-medico", [], null, null, null, Ot, Ht)), a.ob(1, 114688, null, 0, St, [Lt.a, _t.a, Fe.l, Fe.a, se.a], null, null)], function(e, t) { e(t, 1, 0) }, null) } var At = a.lb("app-medico", St, Pt, {}, {}, []),
                Et = n("iTUp"),
                Wt = n("PCNd"),
                Ft = n("36tb"),
                It = { titulo: "Dashboard" },
                Rt = { titulo: "Progress" },
                zt = { titulo: "Graficas" },
                Nt = { titulo: "Promesas" },
                Bt = { titulo: "RxJs" },
                Vt = { titulo: "Mensajes" },
                Ut = { titulo: "Ajustes" },
                Jt = { titulo: "Perfil" },
                Gt = { titulo: "Buscador" },
                qt = { titulo: "mantenimiento de usuario" },
                $t = { titulo: "mantenimiento de hospital" },
                Kt = { titulo: "mantenimiento de medico" },
                Zt = { titulo: "Actualizar medico" },
                Qt = (Fe.p.forChild([{ path: "dashboard", component: i, canActivate: [re.b], data: It }, { path: "progress", component: f, data: Rt }, { path: "graficas1", component: F, data: zt }, { path: "promesas", component: B, data: Nt }, { path: "rxjs", component: Z, data: Bt }, { path: "mensajes", component: pe, data: Vt }, { path: "account-settings", component: ke, data: Ut }, { path: "perfil", component: je, data: Jt }, { path: "busqueda/:termino", component: Re, data: Gt }, { path: "usuarios", component: tt, canActivate: [re.a], data: qt }, { path: "hospitales", component: ht, data: $t }, { path: "medicos", component: vt, data: Kt }, { path: "medico/:id", component: St, data: Zt }, { path: "", redirectTo: "/dashboard", pathMatch: "full" }]), n("B0km"));
            n.d(t, "PagesModuleNgFactory", function() { return Xt }); var Xt = a.mb(r, [], function(e) { return a.vb([a.wb(512, a.j, a.Z, [
                    [8, [l.a, d, y, N, G, te, Le, Te, We, et, dt, Mt, xt, At]],
                    [3, a.j], a.x
                ]), a.wb(4608, ae.l, ae.k, [a.u, [2, ae.t]]), a.wb(4608, c.y, c.y, []), a.wb(1073742336, ae.b, ae.b, []), a.wb(1073742336, Fe.p, Fe.p, [
                    [2, Fe.u],
                    [2, Fe.l]
                ]), a.wb(1073742336, Et.a, Et.a, []), a.wb(1073742336, Wt.a, Wt.a, []), a.wb(1073742336, c.x, c.x, []), a.wb(1073742336, c.j, c.j, []), a.wb(1073742336, P, P, []), a.wb(1073742336, r, r, []), a.wb(1024, Fe.j, function() { return [
                        [{ path: "dashboard", component: i, canActivate: [Ft.a], data: It }, { path: "progress", component: f, data: Rt }, { path: "graficas1", component: F, data: zt }, { path: "promesas", component: B, data: Nt }, { path: "rxjs", component: Z, data: Bt }, { path: "mensajes", component: pe, data: Vt }, { path: "account-settings", component: ke, data: Ut }, { path: "perfil", component: je, data: Jt }, { path: "busqueda/:termino", component: Re, data: Gt }, { path: "usuarios", component: tt, canActivate: [Qt.a], data: qt }, { path: "hospitales", component: ht, data: $t }, { path: "medicos", component: vt, data: Kt }, { path: "medico/:id", component: St, data: Zt }, { path: "", redirectTo: "/dashboard", pathMatch: "full" }]
                    ] }, [])]) }) }, u3GI: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("de-ch", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, uEye: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I g\xe5r klokka] LT", lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein m\xe5nad", MM: "%d m\xe5nader", y: "eit \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, uXwI: function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"), m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), h: "stundas_stund\u0101m_stunda_stundas".split("_"), hh: "stundas_stund\u0101m_stunda_stundas".split("_"), d: "dienas_dien\u0101m_diena_dienas".split("_"), dd: "dienas_dien\u0101m_diena_dienas".split("_"), M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

                function n(e, t, n) { return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1] }

                function a(e, a, r) { return e + " " + n(t[r], e, a) }

                function r(e, a, r) { return n(t[r], e, a) }
                e.defineLocale("lv", { months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"), weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[\u0160odien pulksten] LT", nextDay: "[R\u012bt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "p\u0113c %s", past: "pirms %s", s: function(e, t) { return t ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m" }, ss: a, m: r, mm: a, h: r, hh: a, d: r, dd: a, M: r, MM: a, y: r, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, wQk9: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("tzm", { months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT", nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT", nextWeek: "dddd [\u2d34] LT", lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT", lastWeek: "dddd [\u2d34] LT", sameElse: "L" }, relativeTime: { future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s", past: "\u2d62\u2d30\u2d4f %s", s: "\u2d49\u2d4e\u2d49\u2d3d", ss: "%d \u2d49\u2d4e\u2d49\u2d3d", m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a", mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a", h: "\u2d59\u2d30\u2d44\u2d30", hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f", d: "\u2d30\u2d59\u2d59", dd: "%d o\u2d59\u2d59\u2d30\u2d4f", M: "\u2d30\u2d62o\u2d53\u2d54", MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f", y: "\u2d30\u2d59\u2d33\u2d30\u2d59", yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f" }, week: { dow: 6, doy: 12 } }) }() }, "wd/R": function(e, t, n) {
            (function(e) { e.exports = function() { "use strict"; var t, a;

                    function r() { return t.apply(null, arguments) }

                    function l(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

                    function i(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

                    function o(e) { return void 0 === e }

                    function s(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

                    function u(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

                    function d(e, t) { var n, a = []; for (n = 0; n < e.length; ++n) a.push(t(e[n], n)); return a }

                    function c(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

                    function h(e, t) { for (var n in t) c(t, n) && (e[n] = t[n]); return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e }

                    function _(e, t, n, a) { return Ht(e, t, n, a, !0).utc() }

                    function m(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

                    function f(e) { if (null == e._isValid) { var t = m(e),
                                n = a.call(t.parsedDateParts, function(e) { return null != e }),
                                r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                            e._isValid = r } return e._isValid }

                    function p(e) { var t = _(NaN); return null != e ? h(m(t), e) : m(t).userInvalidated = !0, t }
                    a = Array.prototype.some ? Array.prototype.some : function(e) { for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                            if (a in t && e.call(this, t[a], a, t)) return !0;
                        return !1 }; var g = r.momentProperties = [];

                    function b(e, t) { var n, a, r; if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = m(t)), o(t._locale) || (e._locale = t._locale), g.length > 0)
                            for (n = 0; n < g.length; n++) o(r = t[a = g[n]]) || (e[a] = r); return e } var y = !1;

                    function M(e) { b(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, r.updateOffset(this), y = !1) }

                    function v(e) { return e instanceof M || null != e && null != e._isAMomentObject }

                    function L(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

                    function k(e) { var t = +e,
                            n = 0; return 0 !== t && isFinite(t) && (n = L(t)), n }

                    function Y(e, t, n) { var a, r = Math.min(e.length, t.length),
                            l = Math.abs(e.length - t.length),
                            i = 0; for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && i++; return i + l }

                    function D(e) {!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

                    function w(e, t) { var n = !0; return h(function() { if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) { for (var a, l = [], i = 0; i < arguments.length; i++) { if (a = "", "object" == typeof arguments[i]) { for (var o in a += "\n[" + i + "] ", arguments[0]) a += o + ": " + arguments[0][o] + ", ";
                                        a = a.slice(0, -2) } else a = arguments[i];
                                    l.push(a) }
                                D(e + "\nArguments: " + Array.prototype.slice.call(l).join("") + "\n" + (new Error).stack), n = !1 } return t.apply(this, arguments) }, t) } var x, T = {};

                    function S(e, t) { null != r.deprecationHandler && r.deprecationHandler(e, t), T[e] || (D(t), T[e] = !0) }

                    function H(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

                    function j(e, t) { var n, a = h({}, e); for (n in t) c(t, n) && (i(e[n]) && i(t[n]) ? (a[n] = {}, h(a[n], e[n]), h(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]); for (n in e) c(e, n) && !c(t, n) && i(e[n]) && (a[n] = h({}, a[n])); return a }

                    function C(e) { null != e && this.set(e) }
                    r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, x = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) c(e, t) && n.push(t); return n }; var O = {};

                    function P(e, t) { var n = e.toLowerCase();
                        O[n] = O[n + "s"] = O[t] = e }

                    function A(e) { return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0 }

                    function E(e) { var t, n, a = {}; for (n in e) c(e, n) && (t = A(n)) && (a[t] = e[n]); return a } var W = {};

                    function F(e, t) { W[e] = t }

                    function I(e, t, n) { var a = "" + Math.abs(e); return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - a.length)).toString().substr(1) + a } var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        N = {},
                        B = {};

                    function V(e, t, n, a) { var r = a; "string" == typeof a && (r = function() { return this[a]() }), e && (B[e] = r), t && (B[t[0]] = function() { return I(r.apply(this, arguments), t[1], t[2]) }), n && (B[n] = function() { return this.localeData().ordinal(r.apply(this, arguments), e) }) }

                    function U(e, t) { return e.isValid() ? (t = J(t, e.localeData()), N[t] = N[t] || function(e) { var t, n, a, r = e.match(R); for (t = 0, n = r.length; t < n; t++) r[t] = B[r[t]] ? B[r[t]] : (a = r[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); return function(t) { var a, l = ""; for (a = 0; a < n; a++) l += H(r[a]) ? r[a].call(t, e) : r[a]; return l } }(t), N[t](e)) : e.localeData().invalidDate() }

                    function J(e, t) { var n = 5;

                        function a(e) { return t.longDateFormat(e) || e } for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, a), z.lastIndex = 0, n -= 1; return e } var G = /\d/,
                        q = /\d\d/,
                        $ = /\d{3}/,
                        K = /\d{4}/,
                        Z = /[+-]?\d{6}/,
                        Q = /\d\d?/,
                        X = /\d\d\d\d?/,
                        ee = /\d\d\d\d\d\d?/,
                        te = /\d{1,3}/,
                        ne = /\d{1,4}/,
                        ae = /[+-]?\d{1,6}/,
                        re = /\d+/,
                        le = /[+-]?\d+/,
                        ie = /Z|[+-]\d\d:?\d\d/gi,
                        oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                        ue = {};

                    function de(e, t, n) { ue[e] = H(t) ? t : function(e, a) { return e && n ? n : t } }

                    function ce(e, t) { return c(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) { return t || n || a || r }))) }

                    function he(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var _e = {};

                    function me(e, t) { var n, a = t; for ("string" == typeof e && (e = [e]), s(t) && (a = function(e, n) { n[t] = k(e) }), n = 0; n < e.length; n++) _e[e[n]] = a }

                    function fe(e, t) { me(e, function(e, n, a, r) { a._w = a._w || {}, t(e, a._w, a, r) }) }

                    function pe(e, t, n) { null != t && c(_e, e) && _e[e](t, n._a, n, e) } var ge = 0,
                        be = 1,
                        ye = 2,
                        Me = 3,
                        ve = 4,
                        Le = 5,
                        ke = 6,
                        Ye = 7,
                        De = 8;

                    function we(e) { return xe(e) ? 366 : 365 }

                    function xe(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
                    V("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), V(0, ["YY", 2], 0, function() { return this.year() % 100 }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), F("year", 1), de("Y", le), de("YY", Q, q), de("YYYY", ne, K), de("YYYYY", ae, Z), de("YYYYYY", ae, Z), me(["YYYYY", "YYYYYY"], ge), me("YYYY", function(e, t) { t[ge] = 2 === e.length ? r.parseTwoDigitYear(e) : k(e) }), me("YY", function(e, t) { t[ge] = r.parseTwoDigitYear(e) }), me("Y", function(e, t) { t[ge] = parseInt(e, 10) }), r.parseTwoDigitYear = function(e) { return k(e) + (k(e) > 68 ? 1900 : 2e3) }; var Te, Se = He("FullYear", !0);

                    function He(e, t) { return function(n) { return null != n ? (Ce(this, e, n), r.updateOffset(this, t), this) : je(this, e) } }

                    function je(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

                    function Ce(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

                    function Oe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = (t % 12 + 12) % 12; return e += (t - n) / 12, 1 === n ? xe(e) ? 29 : 28 : 31 - n % 7 % 2 }
                    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1 }, V("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), V("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), V("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), P("month", "M"), F("month", 8), de("M", Q), de("MM", Q, q), de("MMM", function(e, t) { return t.monthsShortRegex(e) }), de("MMMM", function(e, t) { return t.monthsRegex(e) }), me(["M", "MM"], function(e, t) { t[be] = k(e) - 1 }), me(["MMM", "MMMM"], function(e, t, n, a) { var r = n._locale.monthsParse(e, a, n._strict);
                        null != r ? t[be] = r : m(n).invalidMonth = e }); var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        Ae = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        Ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                    function We(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
                            if (/^\d+$/.test(t)) t = k(t);
                            else if (!s(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

                    function Fe(e) { return null != e ? (We(this, e), r.updateOffset(this, !0), this) : je(this, "Month") } var Ie = se,
                        Re = se;

                    function ze() {
                        function e(e, t) { return t.length - e.length } var t, n, a = [],
                            r = [],
                            l = []; for (t = 0; t < 12; t++) n = _([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), l.push(this.months(n, "")), l.push(this.monthsShort(n, "")); for (a.sort(e), r.sort(e), l.sort(e), t = 0; t < 12; t++) a[t] = he(a[t]), r[t] = he(r[t]); for (t = 0; t < 24; t++) l[t] = he(l[t]);
                        this._monthsRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

                    function Ne(e) { var t; if (e < 100 && e >= 0) { var n = Array.prototype.slice.call(arguments);
                            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

                    function Be(e, t, n) { var a = 7 + t - n; return -(7 + Ne(e, 0, a).getUTCDay() - t) % 7 + a - 1 }

                    function Ve(e, t, n, a, r) { var l, i, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Be(e, a, r); return o <= 0 ? i = we(l = e - 1) + o : o > we(e) ? (l = e + 1, i = o - we(e)) : (l = e, i = o), { year: l, dayOfYear: i } }

                    function Ue(e, t, n) { var a, r, l = Be(e.year(), t, n),
                            i = Math.floor((e.dayOfYear() - l - 1) / 7) + 1; return i < 1 ? a = i + Je(r = e.year() - 1, t, n) : i > Je(e.year(), t, n) ? (a = i - Je(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = i), { week: a, year: r } }

                    function Je(e, t, n) { var a = Be(e, t, n),
                            r = Be(e + 1, t, n); return (we(e) - a + r) / 7 }

                    function Ge(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
                    V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), F("week", 5), F("isoWeek", 5), de("w", Q), de("ww", Q, q), de("W", Q), de("WW", Q, q), fe(["w", "ww", "W", "WW"], function(e, t, n, a) { t[a.substr(0, 1)] = k(e) }), V("d", 0, "do", "day"), V("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), V("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), V("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), de("d", Q), de("e", Q), de("E", Q), de("dd", function(e, t) { return t.weekdaysMinRegex(e) }), de("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), de("dddd", function(e, t) { return t.weekdaysRegex(e) }), fe(["dd", "ddd", "dddd"], function(e, t, n, a) { var r = n._locale.weekdaysParse(e, a, n._strict);
                        null != r ? t.d = r : m(n).invalidWeekday = e }), fe(["d", "e", "E"], function(e, t, n, a) { t[a] = k(e) }); var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        Ze = se,
                        Qe = se,
                        Xe = se;

                    function et() {
                        function e(e, t) { return t.length - e.length } var t, n, a, r, l, i = [],
                            o = [],
                            s = [],
                            u = []; for (t = 0; t < 7; t++) n = _([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), l = this.weekdays(n, ""), i.push(a), o.push(r), s.push(l), u.push(a), u.push(r), u.push(l); for (i.sort(e), o.sort(e), s.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), s[t] = he(s[t]), u[t] = he(u[t]);
                        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

                    function tt() { return this.hours() % 12 || 12 }

                    function nt(e, t) { V(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

                    function at(e, t) { return t._meridiemParse }
                    V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, tt), V("k", ["kk", 2], 0, function() { return this.hours() || 24 }), V("hmm", 0, 0, function() { return "" + tt.apply(this) + I(this.minutes(), 2) }), V("hmmss", 0, 0, function() { return "" + tt.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2) }), V("Hmm", 0, 0, function() { return "" + this.hours() + I(this.minutes(), 2) }), V("Hmmss", 0, 0, function() { return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2) }), nt("a", !0), nt("A", !1), P("hour", "h"), F("hour", 13), de("a", at), de("A", at), de("H", Q), de("h", Q), de("k", Q), de("HH", Q, q), de("hh", Q, q), de("kk", Q, q), de("hmm", X), de("hmmss", ee), de("Hmm", X), de("Hmmss", ee), me(["H", "HH"], Me), me(["k", "kk"], function(e, t, n) { var a = k(e);
                        t[Me] = 24 === a ? 0 : a }), me(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), me(["h", "hh"], function(e, t, n) { t[Me] = k(e), m(n).bigHour = !0 }), me("hmm", function(e, t, n) { var a = e.length - 2;
                        t[Me] = k(e.substr(0, a)), t[ve] = k(e.substr(a)), m(n).bigHour = !0 }), me("hmmss", function(e, t, n) { var a = e.length - 4,
                            r = e.length - 2;
                        t[Me] = k(e.substr(0, a)), t[ve] = k(e.substr(a, 2)), t[Le] = k(e.substr(r)), m(n).bigHour = !0 }), me("Hmm", function(e, t, n) { var a = e.length - 2;
                        t[Me] = k(e.substr(0, a)), t[ve] = k(e.substr(a)) }), me("Hmmss", function(e, t, n) { var a = e.length - 4,
                            r = e.length - 2;
                        t[Me] = k(e.substr(0, a)), t[ve] = k(e.substr(a, 2)), t[Le] = k(e.substr(r)) }); var rt, lt = He("Hours", !0),
                        it = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ae, monthsShort: Ee, week: { dow: 0, doy: 6 }, weekdays: qe, weekdaysMin: Ke, weekdaysShort: $e, meridiemParse: /[ap]\.?m?\.?/i },
                        ot = {},
                        st = {};

                    function ut(e) { return e ? e.toLowerCase().replace("_", "-") : e }

                    function dt(t) { var a = null; if (!ot[t] && void 0 !== e && e && e.exports) try { a = rt._abbr, n("RnhZ")("./" + t), ct(a) } catch (r) {}
                        return ot[t] }

                    function ct(e, t) { var n; return e && ((n = o(t) ? _t(e) : ht(e, t)) ? rt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rt._abbr }

                    function ht(e, t) { if (null !== t) { var n, a = it; if (t.abbr = e, null != ot[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = ot[e]._config;
                            else if (null != t.parentLocale)
                                if (null != ot[t.parentLocale]) a = ot[t.parentLocale]._config;
                                else { if (null == (n = dt(t.parentLocale))) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({ name: e, config: t }), null;
                                    a = n._config }
                            return ot[e] = new C(j(a, t)), st[e] && st[e].forEach(function(e) { ht(e.name, e.config) }), ct(e), ot[e] } return delete ot[e], null }

                    function _t(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt; if (!l(e)) { if (t = dt(e)) return t;
                            e = [e] } return function(e) { for (var t, n, a, r, l = 0; l < e.length;) { for (t = (r = ut(e[l]).split("-")).length, n = (n = ut(e[l + 1])) ? n.split("-") : null; t > 0;) { if (a = dt(r.slice(0, t).join("-"))) return a; if (n && n.length >= t && Y(r, n, !0) >= t - 1) break;
                                    t-- }
                                l++ } return rt }(e) }

                    function mt(e) { var t, n = e._a; return n && -2 === m(e).overflow && (t = n[be] < 0 || n[be] > 11 ? be : n[ye] < 1 || n[ye] > Oe(n[ge], n[be]) ? ye : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[ve] || 0 !== n[Le] || 0 !== n[ke]) ? Me : n[ve] < 0 || n[ve] > 59 ? ve : n[Le] < 0 || n[Le] > 59 ? Le : n[ke] < 0 || n[ke] > 999 ? ke : -1, m(e)._overflowDayOfYear && (t < ge || t > ye) && (t = ye), m(e)._overflowWeeks && -1 === t && (t = Ye), m(e)._overflowWeekday && -1 === t && (t = De), m(e).overflow = t), e }

                    function ft(e, t, n) { return null != e ? e : null != t ? t : n }

                    function pt(e) { var t, n, a, l, i, o = []; if (!e._d) { for (a = function(e) { var t = new Date(r.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[ye] && null == e._a[be] && function(e) { var t, n, a, r, l, i, o, s; if (null != (t = e._w).GG || null != t.W || null != t.E) l = 1, i = 4, n = ft(t.GG, e._a[ge], Ue(jt(), 1, 4).year), a = ft(t.W, 1), ((r = ft(t.E, 1)) < 1 || r > 7) && (s = !0);
                                    else { l = e._locale._week.dow, i = e._locale._week.doy; var u = Ue(jt(), l, i);
                                        n = ft(t.gg, e._a[ge], u.year), a = ft(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (s = !0) : null != t.e ? (r = t.e + l, (t.e < 0 || t.e > 6) && (s = !0)) : r = l }
                                    a < 1 || a > Je(n, l, i) ? m(e)._overflowWeeks = !0 : null != s ? m(e)._overflowWeekday = !0 : (o = Ve(n, a, r, l, i), e._a[ge] = o.year, e._dayOfYear = o.dayOfYear) }(e), null != e._dayOfYear && (i = ft(e._a[ge], a[ge]), (e._dayOfYear > we(i) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0), n = Ne(i, 0, e._dayOfYear), e._a[be] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t]; for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[Me] && 0 === e._a[ve] && 0 === e._a[Le] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? Ne : function(e, t, n, a, r, l, i) { var o; return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, r, l, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, r, l, i), o }).apply(null, o), l = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== l && (m(e).weekdayMismatch = !0) } } var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        bt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        yt = /Z|[+-]\d\d(?::?\d\d)?/,
                        Mt = [
                            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                            ["YYYY-DDD", /\d{4}-\d{3}/],
                            ["YYYY-MM", /\d{4}-\d\d/, !1],
                            ["YYYYYYMMDD", /[+-]\d{10}/],
                            ["YYYYMMDD", /\d{8}/],
                            ["GGGG[W]WWE", /\d{4}W\d{3}/],
                            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                            ["YYYYDDD", /\d{7}/]
                        ],
                        vt = [
                            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                            ["HH:mm", /\d\d:\d\d/],
                            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                            ["HHmmss", /\d\d\d\d\d\d/],
                            ["HHmm", /\d\d\d\d/],
                            ["HH", /\d\d/]
                        ],
                        Lt = /^\/?Date\((\-?\d+)/i;

                    function kt(e) { var t, n, a, r, l, i, o = e._i,
                            s = gt.exec(o) || bt.exec(o); if (s) { for (m(e).iso = !0, t = 0, n = Mt.length; t < n; t++)
                                if (Mt[t][1].exec(s[1])) { r = Mt[t][0], a = !1 !== Mt[t][2]; break }
                            if (null == r) return void(e._isValid = !1); if (s[3]) { for (t = 0, n = vt.length; t < n; t++)
                                    if (vt[t][1].exec(s[3])) { l = (s[2] || " ") + vt[t][0]; break }
                                if (null == l) return void(e._isValid = !1) } if (!a && null != l) return void(e._isValid = !1); if (s[4]) { if (!yt.exec(s[4])) return void(e._isValid = !1);
                                i = "Z" }
                            e._f = r + (l || "") + (i || ""), Tt(e) } else e._isValid = !1 } var Yt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

                    function Dt(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t } var wt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                    function xt(e) { var t, n, a, r, l, i, o = Yt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (o) { var s = (t = o[3], n = o[2], a = o[5], r = o[6], l = o[7], i = [Dt(o[4]), Ee.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)], l && i.push(parseInt(l, 10)), i); if (! function(e, t, n) { return !e || $e.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (m(n).weekdayMismatch = !0, n._isValid = !1, !1) }(o[1], s, e)) return;
                            e._a = s, e._tzm = function(e, t, n) { if (e) return wt[e]; if (o[9]) return 0; var a = parseInt(o[10], 10),
                                    r = a % 100; return (a - r) / 100 * 60 + r }(o[8]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0 } else e._isValid = !1 }

                    function Tt(e) { if (e._f !== r.ISO_8601)
                            if (e._f !== r.RFC_2822) { e._a = [], m(e).empty = !0; var t, n, a, l, i, o = "" + e._i,
                                    s = o.length,
                                    u = 0; for (a = J(e._f, e._locale).match(R) || [], t = 0; t < a.length; t++)(n = (o.match(ce(l = a[t], e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && m(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), u += n.length), B[l] ? (n ? m(e).empty = !1 : m(e).unusedTokens.push(l), pe(l, n, e)) : e._strict && !n && m(e).unusedTokens.push(l);
                                m(e).charsLeftOver = s - u, o.length > 0 && m(e).unusedInput.push(o), e._a[Me] <= 12 && !0 === m(e).bigHour && e._a[Me] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[Me] = (d = e._locale, c = e._a[Me], null == (h = e._meridiem) ? c : null != d.meridiemHour ? d.meridiemHour(c, h) : null != d.isPM ? ((_ = d.isPM(h)) && c < 12 && (c += 12), _ || 12 !== c || (c = 0), c) : c), pt(e), mt(e) } else xt(e);
                        else kt(e); var d, c, h, _ }

                    function St(e) { var t = e._i,
                            n = e._f; return e._locale = e._locale || _t(e._l), null === t || void 0 === n && "" === t ? p({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new M(mt(t)) : (u(t) ? e._d = t : l(n) ? function(e) { var t, n, a, r, l; if (0 === e._f.length) return m(e).invalidFormat = !0, void(e._d = new Date(NaN)); for (r = 0; r < e._f.length; r++) l = 0, t = b({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Tt(t), f(t) && (l += m(t).charsLeftOver, l += 10 * m(t).unusedTokens.length, m(t).score = l, (null == a || l < a) && (a = l, n = t));
                            h(e, n || t) }(e) : n ? Tt(e) : function(e) { var t = e._i;
                            o(t) ? e._d = new Date(r.now()) : u(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) { var t = Lt.exec(e._i);
                                null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, xt(e), !1 === e._isValid && (delete e._isValid, r.createFromInputFallback(e)))) : e._d = new Date(+t[1]) }(e) : l(t) ? (e._a = d(t.slice(0), function(e) { return parseInt(e, 10) }), pt(e)) : i(t) ? function(e) { if (!e._d) { var t = E(e._i);
                                    e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), pt(e) } }(e) : s(t) ? e._d = new Date(t) : r.createFromInputFallback(e) }(e), f(e) || (e._d = null), e)) }

                    function Ht(e, t, n, a, r) { var o, s = {}; return !0 !== n && !1 !== n || (a = n, n = void 0), (i(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0 }(e) || l(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = e, s._f = t, s._strict = a, (o = new M(mt(St(s))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o }

                    function jt(e, t, n, a) { return Ht(e, t, n, a, !1) }
                    r.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), r.ISO_8601 = function() {}, r.RFC_2822 = function() {}; var Ct = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = jt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
                        Ot = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = jt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : p() });

                    function Pt(e, t) { var n, a; if (1 === t.length && l(t[0]) && (t = t[0]), !t.length) return jt(); for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]); return n } var At = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                    function Et(e) { var t = E(e),
                            n = t.year || 0,
                            a = t.quarter || 0,
                            r = t.month || 0,
                            l = t.week || t.isoWeek || 0,
                            i = t.day || 0,
                            o = t.hour || 0,
                            s = t.minute || 0,
                            u = t.second || 0,
                            d = t.millisecond || 0;
                        this._isValid = function(e) { for (var t in e)
                                if (-1 === Te.call(At, t) || null != e[t] && isNaN(e[t])) return !1;
                            for (var n = !1, a = 0; a < At.length; ++a)
                                if (e[At[a]]) { if (n) return !1;
                                    parseFloat(e[At[a]]) !== k(e[At[a]]) && (n = !0) }
                            return !0 }(t), this._milliseconds = +d + 1e3 * u + 6e4 * s + 1e3 * o * 60 * 60, this._days = +i + 7 * l, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = _t(), this._bubble() }

                    function Wt(e) { return e instanceof Et }

                    function Ft(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

                    function It(e, t) { V(e, 0, 0, function() { var e = this.utcOffset(),
                                n = "+"; return e < 0 && (e = -e, n = "-"), n + I(~~(e / 60), 2) + t + I(~~e % 60, 2) }) }
                    It("Z", ":"), It("ZZ", ""), de("Z", oe), de("ZZ", oe), me(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = zt(oe, e) }); var Rt = /([\+\-]|\d\d)/gi;

                    function zt(e, t) { var n = (t || "").match(e); if (null === n) return null; var a = ((n[n.length - 1] || []) + "").match(Rt) || ["-", 0, 0],
                            r = 60 * a[1] + k(a[2]); return 0 === r ? 0 : "+" === a[0] ? r : -r }

                    function Nt(e, t) { var n, a; return t._isUTC ? (n = t.clone(), a = (v(e) || u(e) ? e.valueOf() : jt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), r.updateOffset(n, !1), n) : jt(e).local() }

                    function Bt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

                    function Vt() { return !!this.isValid() && this._isUTC && 0 === this._offset }
                    r.updateOffset = function() {}; var Ut = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        Jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                    function Gt(e, t) { var n, a, r, l, i, o, u = e,
                            d = null; return Wt(e) ? u = { ms: e._milliseconds, d: e._days, M: e._months } : s(e) ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (d = Ut.exec(e)) ? (n = "-" === d[1] ? -1 : 1, u = { y: 0, d: k(d[ye]) * n, h: k(d[Me]) * n, m: k(d[ve]) * n, s: k(d[Le]) * n, ms: k(Ft(1e3 * d[ke])) * n }) : (d = Jt.exec(e)) ? u = { y: qt(d[2], n = "-" === d[1] ? -1 : 1), M: qt(d[3], n), w: qt(d[4], n), d: qt(d[5], n), h: qt(d[6], n), m: qt(d[7], n), s: qt(d[8], n) } : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (l = jt(u.from), i = jt(u.to), r = l.isValid() && i.isValid() ? (i = Nt(i, l), l.isBefore(i) ? o = $t(l, i) : ((o = $t(i, l)).milliseconds = -o.milliseconds, o.months = -o.months), o) : { milliseconds: 0, months: 0 }, (u = {}).ms = r.milliseconds, u.M = r.months), a = new Et(u), Wt(e) && c(e, "_locale") && (a._locale = e._locale), a }

                    function qt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

                    function $t(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

                    function Kt(e, t) { return function(n, a) { var r; return null === a || isNaN(+a) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), Zt(this, Gt(n = "string" == typeof n ? +n : n, a), e), this } }

                    function Zt(e, t, n, a) { var l = t._milliseconds,
                            i = Ft(t._days),
                            o = Ft(t._months);
                        e.isValid() && (a = null == a || a, o && We(e, je(e, "Month") + o * n), i && Ce(e, "Date", je(e, "Date") + i * n), l && e._d.setTime(e._d.valueOf() + l * n), a && r.updateOffset(e, i || o)) }
                    Gt.fn = Et.prototype, Gt.invalid = function() { return Gt(NaN) }; var Qt = Kt(1, "add"),
                        Xt = Kt(-1, "subtract");

                    function en(e, t) { var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            a = e.clone().add(n, "months"); return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a))) || 0 }

                    function tn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = _t(e)) && (this._locale = t), this) }
                    r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var nn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

                    function an() { return this._locale } var rn = 126227808e5;

                    function ln(e, t) { return (e % t + t) % t }

                    function on(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - rn : new Date(e, t, n).valueOf() }

                    function sn(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - rn : Date.UTC(e, t, n) }

                    function un(e, t) { V(0, [e, e.length], 0, t) }

                    function dn(e, t, n, a, r) { var l; return null == e ? Ue(this, a, r).year : (t > (l = Je(e, a, r)) && (t = l), (function(e, t, n, a, r) { var l = Ve(e, t, n, a, r),
                                i = Ne(l.year, 0, l.dayOfYear); return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this }).call(this, e, t, n, a, r)) }
                    V(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), V(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), un("gggg", "weekYear"), un("ggggg", "weekYear"), un("GGGG", "isoWeekYear"), un("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), de("G", le), de("g", le), de("GG", Q, q), de("gg", Q, q), de("GGGG", ne, K), de("gggg", ne, K), de("GGGGG", ae, Z), de("ggggg", ae, Z), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) { t[a.substr(0, 2)] = k(e) }), fe(["gg", "GG"], function(e, t, n, a) { t[a] = r.parseTwoDigitYear(e) }), V("Q", 0, "Qo", "quarter"), P("quarter", "Q"), F("quarter", 7), de("Q", G), me("Q", function(e, t) { t[be] = 3 * (k(e) - 1) }), V("D", ["DD", 2], "Do", "date"), P("date", "D"), F("date", 9), de("D", Q), de("DD", Q, q), de("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), me(["D", "DD"], ye), me("Do", function(e, t) { t[ye] = k(e.match(Q)[0]) }); var cn = He("Date", !0);
                    V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), F("dayOfYear", 4), de("DDD", te), de("DDDD", $), me(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = k(e) }), V("m", ["mm", 2], 0, "minute"), P("minute", "m"), F("minute", 14), de("m", Q), de("mm", Q, q), me(["m", "mm"], ve); var hn = He("Minutes", !1);
                    V("s", ["ss", 2], 0, "second"), P("second", "s"), F("second", 15), de("s", Q), de("ss", Q, q), me(["s", "ss"], Le); var _n, mn = He("Seconds", !1); for (V("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), V(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), V(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), V(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), V(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), V(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), V(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), P("millisecond", "ms"), F("millisecond", 16), de("S", te, G), de("SS", te, q), de("SSS", te, $), _n = "SSSS"; _n.length <= 9; _n += "S") de(_n, re);

                    function fn(e, t) { t[ke] = k(1e3 * ("0." + e)) } for (_n = "S"; _n.length <= 9; _n += "S") me(_n, fn); var pn = He("Milliseconds", !1);
                    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName"); var gn = M.prototype;

                    function bn(e) { return e }
                    gn.add = Qt, gn.calendar = function(e, t) { var n = e || jt(),
                            a = Nt(n, this).startOf("day"),
                            l = r.calendarFormat(this, a) || "sameElse",
                            i = t && (H(t[l]) ? t[l].call(this, n) : t[l]); return this.format(i || this.localeData().calendar(l, this, jt(n))) }, gn.clone = function() { return new M(this) }, gn.diff = function(e, t, n) { var a, r, l; if (!this.isValid()) return NaN; if (!(a = Nt(e, this)).isValid()) return NaN; switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = A(t)) {
                            case "year":
                                l = en(this, a) / 12; break;
                            case "month":
                                l = en(this, a); break;
                            case "quarter":
                                l = en(this, a) / 3; break;
                            case "second":
                                l = (this - a) / 1e3; break;
                            case "minute":
                                l = (this - a) / 6e4; break;
                            case "hour":
                                l = (this - a) / 36e5; break;
                            case "day":
                                l = (this - a - r) / 864e5; break;
                            case "week":
                                l = (this - a - r) / 6048e5; break;
                            default:
                                l = this - a } return n ? l : L(l) }, gn.endOf = function(e) { var t; if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? sn : on; switch (e) {
                            case "year":
                                t = n(this.year() + 1, 0, 1) - 1; break;
                            case "quarter":
                                t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
                            case "month":
                                t = n(this.year(), this.month() + 1, 1) - 1; break;
                            case "week":
                                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
                            case "isoWeek":
                                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
                            case "day":
                            case "date":
                                t = n(this.year(), this.month(), this.date() + 1) - 1; break;
                            case "hour":
                                t = this._d.valueOf(), t += 36e5 - ln(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
                            case "minute":
                                t = this._d.valueOf(), t += 6e4 - ln(t, 6e4) - 1; break;
                            case "second":
                                t = this._d.valueOf(), t += 1e3 - ln(t, 1e3) - 1 } return this._d.setTime(t), r.updateOffset(this, !0), this }, gn.format = function(e) { e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat); var t = U(this, e); return this.localeData().postformat(t) }, gn.from = function(e, t) { return this.isValid() && (v(e) && e.isValid() || jt(e).isValid()) ? Gt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, gn.fromNow = function(e) { return this.from(jt(), e) }, gn.to = function(e, t) { return this.isValid() && (v(e) && e.isValid() || jt(e).isValid()) ? Gt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, gn.toNow = function(e) { return this.to(jt(), e) }, gn.get = function(e) { return H(this[e = A(e)]) ? this[e]() : this }, gn.invalidAt = function() { return m(this).overflow }, gn.isAfter = function(e, t) { var n = v(e) ? e : jt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, gn.isBefore = function(e, t) { var n = v(e) ? e : jt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, gn.isBetween = function(e, t, n, a) { var r = v(e) ? e : jt(e),
                            l = v(t) ? t : jt(t); return !!(this.isValid() && r.isValid() && l.isValid()) && ("(" === (a = a || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === a[1] ? this.isBefore(l, n) : !this.isAfter(l, n)) }, gn.isSame = function(e, t) { var n, a = v(e) ? e : jt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, gn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, gn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, gn.isValid = function() { return f(this) }, gn.lang = nn, gn.locale = tn, gn.localeData = an, gn.max = Ot, gn.min = Ct, gn.parsingFlags = function() { return h({}, m(this)) }, gn.set = function(e, t) { if ("object" == typeof e)
                            for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: W[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = E(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
                        else if (H(this[e = A(e)])) return this[e](t); return this }, gn.startOf = function(e) { var t; if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? sn : on; switch (e) {
                            case "year":
                                t = n(this.year(), 0, 1); break;
                            case "quarter":
                                t = n(this.year(), this.month() - this.month() % 3, 1); break;
                            case "month":
                                t = n(this.year(), this.month(), 1); break;
                            case "week":
                                t = n(this.year(), this.month(), this.date() - this.weekday()); break;
                            case "isoWeek":
                                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
                            case "day":
                            case "date":
                                t = n(this.year(), this.month(), this.date()); break;
                            case "hour":
                                t = this._d.valueOf(), t -= ln(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
                            case "minute":
                                t = this._d.valueOf(), t -= ln(t, 6e4); break;
                            case "second":
                                t = this._d.valueOf(), t -= ln(t, 1e3) } return this._d.setTime(t), r.updateOffset(this, !0), this }, gn.subtract = Xt, gn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, gn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, gn.toDate = function() { return new Date(this.valueOf()) }, gn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
                            n = t ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, gn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
                            t = "";
                        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
                            a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"; return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + t + '[")]') }, gn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, gn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, gn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, gn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, gn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, gn.year = Se, gn.isLeapYear = function() { return xe(this.year()) }, gn.weekYear = function(e) { return dn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, gn.isoWeekYear = function(e) { return dn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, gn.quarter = gn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, gn.month = Fe, gn.daysInMonth = function() { return Oe(this.year(), this.month()) }, gn.week = gn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, gn.isoWeek = gn.isoWeeks = function(e) { var t = Ue(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, gn.weeksInYear = function() { var e = this.localeData()._week; return Je(this.year(), e.dow, e.doy) }, gn.isoWeeksInYear = function() { return Je(this.year(), 1, 4) }, gn.date = cn, gn.day = gn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, gn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, gn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, gn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, gn.hour = gn.hours = lt, gn.minute = gn.minutes = hn, gn.second = gn.seconds = mn, gn.millisecond = gn.milliseconds = pn, gn.utcOffset = function(e, t, n) { var a, l = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = zt(oe, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (a = Bt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), l !== e && (!t || this._changeInProgress ? Zt(this, Gt(e - l, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? l : Bt(this) }, gn.utc = function(e) { return this.utcOffset(0, e) }, gn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this }, gn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                        else if ("string" == typeof this._i) { var e = zt(ie, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, gn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? jt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, gn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, gn.isLocal = function() { return !!this.isValid() && !this._isUTC }, gn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, gn.isUtc = Vt, gn.isUTC = Vt, gn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, gn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, gn.dates = w("dates accessor is deprecated. Use date instead.", cn), gn.months = w("months accessor is deprecated. Use month instead", Fe), gn.years = w("years accessor is deprecated. Use year instead", Se), gn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), gn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!o(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (b(e, this), (e = St(e))._a) { var t = e._isUTC ? _(e._a) : jt(e._a);
                            this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted }); var yn = C.prototype;

                    function Mn(e, t, n, a) { var r = _t(),
                            l = _().set(a, t); return r[n](l, e) }

                    function vn(e, t, n) { if (s(e) && (t = e, e = void 0), e = e || "", null != t) return Mn(e, t, n, "month"); var a, r = []; for (a = 0; a < 12; a++) r[a] = Mn(e, a, n, "month"); return r }

                    function Ln(e, t, n, a) { "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || ""); var r, l = _t(),
                            i = e ? l._week.dow : 0; if (null != n) return Mn(t, (n + i) % 7, a, "day"); var o = []; for (r = 0; r < 7; r++) o[r] = Mn(t, (r + i) % 7, a, "day"); return o }
                    yn.calendar = function(e, t, n) { var a = this._calendar[e] || this._calendar.sameElse; return H(a) ? a.call(t, n) : a }, yn.longDateFormat = function(e) { var t = this._longDateFormat[e],
                            n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, yn.invalidDate = function() { return this._invalidDate }, yn.ordinal = function(e) { return this._ordinal.replace("%d", e) }, yn.preparse = bn, yn.postformat = bn, yn.relativeTime = function(e, t, n, a) { var r = this._relativeTime[n]; return H(r) ? r(e, t, n, a) : r.replace(/%d/i, e) }, yn.pastFuture = function(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return H(n) ? n(t) : n.replace(/%s/i, t) }, yn.set = function(e) { var t, n; for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, yn.months = function(e, t) { return e ? l(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : l(this._months) ? this._months : this._months.standalone }, yn.monthsShort = function(e, t) { return e ? l(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : l(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, yn.monthsParse = function(e, t, n) { var a, r, l; if (this._monthsParseExact) return (function(e, t, n) { var a, r, l, i = e.toLocaleLowerCase(); if (!this._monthsParse)
                                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) l = _([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(l, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(l, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, i)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, i)) ? r : null : "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, i)) ? r : -1 !== (r = Te.call(this._longMonthsParse, i)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, i)) ? r : -1 !== (r = Te.call(this._shortMonthsParse, i)) ? r : null }).call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) { if (r = _([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (l = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(l.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a; if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a; if (!n && this._monthsParse[a].test(e)) return a } }, yn.monthsRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, yn.monthsShortRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, yn.week = function(e) { return Ue(e, this._week.dow, this._week.doy).week }, yn.firstDayOfYear = function() { return this._week.doy }, yn.firstDayOfWeek = function() { return this._week.dow }, yn.weekdays = function(e, t) { var n = l(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Ge(n, this._week.dow) : e ? n[e.day()] : n }, yn.weekdaysMin = function(e) { return !0 === e ? Ge(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, yn.weekdaysShort = function(e) { return !0 === e ? Ge(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, yn.weekdaysParse = function(e, t, n) { var a, r, l; if (this._weekdaysParseExact) return (function(e, t, n) { var a, r, l, i = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) l = _([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(l, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(l, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(l, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, i)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, i)) ? r : null : "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, i)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, i)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, i)) ? r : -1 !== (r = Te.call(this._weekdaysParse, i)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, i)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, i)) ? r : -1 !== (r = Te.call(this._weekdaysParse, i)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, i)) ? r : null }).call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) { if (r = _([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (l = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(l.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a; if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a; if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a; if (!n && this._weekdaysParse[a].test(e)) return a } }, yn.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, yn.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, yn.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, yn.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, yn.meridiem = function(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, ct("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), r.lang = w("moment.lang is deprecated. Use moment.locale instead.", ct), r.langData = w("moment.langData is deprecated. Use moment.localeData instead.", _t); var kn = Math.abs;

                    function Yn(e, t, n, a) { var r = Gt(t, n); return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble() }

                    function Dn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

                    function wn(e) { return 4800 * e / 146097 }

                    function xn(e) { return 146097 * e / 4800 }

                    function Tn(e) { return function() { return this.as(e) } } var Sn = Tn("ms"),
                        Hn = Tn("s"),
                        jn = Tn("m"),
                        Cn = Tn("h"),
                        On = Tn("d"),
                        Pn = Tn("w"),
                        An = Tn("M"),
                        En = Tn("Q"),
                        Wn = Tn("y");

                    function Fn(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var In = Fn("milliseconds"),
                        Rn = Fn("seconds"),
                        zn = Fn("minutes"),
                        Nn = Fn("hours"),
                        Bn = Fn("days"),
                        Vn = Fn("months"),
                        Un = Fn("years"),
                        Jn = Math.round,
                        Gn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                        qn = Math.abs;

                    function $n(e) { return (e > 0) - (e < 0) || +e }

                    function Kn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = qn(this._milliseconds) / 1e3,
                            a = qn(this._days),
                            r = qn(this._months);
                        e = L(n / 60), t = L(e / 60), n %= 60, e %= 60; var l = L(r / 12),
                            i = r %= 12,
                            o = a,
                            s = t,
                            u = e,
                            d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                            c = this.asSeconds(); if (!c) return "P0D"; var h = c < 0 ? "-" : "",
                            _ = $n(this._months) !== $n(c) ? "-" : "",
                            m = $n(this._days) !== $n(c) ? "-" : "",
                            f = $n(this._milliseconds) !== $n(c) ? "-" : ""; return h + "P" + (l ? _ + l + "Y" : "") + (i ? _ + i + "M" : "") + (o ? m + o + "D" : "") + (s || u || d ? "T" : "") + (s ? f + s + "H" : "") + (u ? f + u + "M" : "") + (d ? f + d + "S" : "") } var Zn = Et.prototype; return Zn.isValid = function() { return this._isValid }, Zn.abs = function() { var e = this._data; return this._milliseconds = kn(this._milliseconds), this._days = kn(this._days), this._months = kn(this._months), e.milliseconds = kn(e.milliseconds), e.seconds = kn(e.seconds), e.minutes = kn(e.minutes), e.hours = kn(e.hours), e.months = kn(e.months), e.years = kn(e.years), this }, Zn.add = function(e, t) { return Yn(this, e, t, 1) }, Zn.subtract = function(e, t) { return Yn(this, e, t, -1) }, Zn.as = function(e) { if (!this.isValid()) return NaN; var t, n, a = this._milliseconds; if ("month" === (e = A(e)) || "quarter" === e || "year" === e) switch (n = this._months + wn(t = this._days + a / 864e5), e) {
                            case "month":
                                return n;
                            case "quarter":
                                return n / 3;
                            case "year":
                                return n / 12 } else switch (t = this._days + Math.round(xn(this._months)), e) {
                            case "week":
                                return t / 7 + a / 6048e5;
                            case "day":
                                return t + a / 864e5;
                            case "hour":
                                return 24 * t + a / 36e5;
                            case "minute":
                                return 1440 * t + a / 6e4;
                            case "second":
                                return 86400 * t + a / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + a;
                            default:
                                throw new Error("Unknown unit " + e) } }, Zn.asMilliseconds = Sn, Zn.asSeconds = Hn, Zn.asMinutes = jn, Zn.asHours = Cn, Zn.asDays = On, Zn.asWeeks = Pn, Zn.asMonths = An, Zn.asQuarters = En, Zn.asYears = Wn, Zn.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN }, Zn._bubble = function() { var e, t, n, a, r, l = this._milliseconds,
                            i = this._days,
                            o = this._months,
                            s = this._data; return l >= 0 && i >= 0 && o >= 0 || l <= 0 && i <= 0 && o <= 0 || (l += 864e5 * Dn(xn(o) + i), i = 0, o = 0), s.milliseconds = l % 1e3, e = L(l / 1e3), s.seconds = e % 60, t = L(e / 60), s.minutes = t % 60, n = L(t / 60), s.hours = n % 24, i += L(n / 24), o += r = L(wn(i)), i -= Dn(xn(r)), a = L(o / 12), o %= 12, s.days = i, s.months = o, s.years = a, this }, Zn.clone = function() { return Gt(this) }, Zn.get = function(e) { return e = A(e), this.isValid() ? this[e + "s"]() : NaN }, Zn.milliseconds = In, Zn.seconds = Rn, Zn.minutes = zn, Zn.hours = Nn, Zn.days = Bn, Zn.weeks = function() { return L(this.days() / 7) }, Zn.months = Vn, Zn.years = Un, Zn.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t = this.localeData(),
                            n = function(e, t, n) { var a = Gt(e).abs(),
                                    r = Jn(a.as("s")),
                                    l = Jn(a.as("m")),
                                    i = Jn(a.as("h")),
                                    o = Jn(a.as("d")),
                                    s = Jn(a.as("M")),
                                    u = Jn(a.as("y")),
                                    d = r <= Gn.ss && ["s", r] || r < Gn.s && ["ss", r] || l <= 1 && ["m"] || l < Gn.m && ["mm", l] || i <= 1 && ["h"] || i < Gn.h && ["hh", i] || o <= 1 && ["d"] || o < Gn.d && ["dd", o] || s <= 1 && ["M"] || s < Gn.M && ["MM", s] || u <= 1 && ["y"] || ["yy", u]; return d[2] = t, d[3] = +e > 0, d[4] = n, (function(e, t, n, a, r) { return r.relativeTime(t || 1, !!n, e, a) }).apply(null, d) }(this, !e, t); return e && (n = t.pastFuture(+this, n)), t.postformat(n) }, Zn.toISOString = Kn, Zn.toString = Kn, Zn.toJSON = Kn, Zn.locale = tn, Zn.localeData = an, Zn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn), Zn.lang = nn, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), de("x", le), de("X", /[+-]?\d+(\.\d{1,3})?/), me("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), me("x", function(e, t, n) { n._d = new Date(k(e)) }), r.version = "2.24.0", t = jt, r.fn = gn, r.min = function() { return Pt("isBefore", [].slice.call(arguments, 0)) }, r.max = function() { return Pt("isAfter", [].slice.call(arguments, 0)) }, r.now = function() { return Date.now ? Date.now() : +new Date }, r.utc = _, r.unix = function(e) { return jt(1e3 * e) }, r.months = function(e, t) { return vn(e, t, "months") }, r.isDate = u, r.locale = ct, r.invalid = p, r.duration = Gt, r.isMoment = v, r.weekdays = function(e, t, n) { return Ln(e, t, n, "weekdays") }, r.parseZone = function() { return jt.apply(null, arguments).parseZone() }, r.localeData = _t, r.isDuration = Wt, r.monthsShort = function(e, t) { return vn(e, t, "monthsShort") }, r.weekdaysMin = function(e, t, n) { return Ln(e, t, n, "weekdaysMin") }, r.defineLocale = ht, r.updateLocale = function(e, t) { if (null != t) { var n, a, r = it;
                            null != (a = dt(e)) && (r = a._config), (n = new C(t = j(r, t))).parentLocale = ot[e], ot[e] = n, ct(e) } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]); return ot[e] }, r.locales = function() { return x(ot) }, r.weekdaysShort = function(e, t, n) { return Ln(e, t, n, "weekdaysShort") }, r.normalizeUnits = A, r.relativeTimeRounding = function(e) { return void 0 === e ? Jn : "function" == typeof e && (Jn = e, !0) }, r.relativeTimeThreshold = function(e, t) { return void 0 !== Gn[e] && (void 0 === t ? Gn[e] : (Gn[e] = t, "s" === e && (Gn.ss = t - 1), !0)) }, r.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, r.prototype = gn, r.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, r }() }).call(this, n("YuTi")(e)) }, x6pH: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("he", { months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"), monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"), weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"), weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"), weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [\u05d1]MMMM YYYY", LLL: "D [\u05d1]MMMM YYYY HH:mm", LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT", nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT", nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT", lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT", lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT", sameElse: "L" }, relativeTime: { future: "\u05d1\u05e2\u05d5\u05d3 %s", past: "\u05dc\u05e4\u05e0\u05d9 %s", s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea", ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea", m: "\u05d3\u05e7\u05d4", mm: "%d \u05d3\u05e7\u05d5\u05ea", h: "\u05e9\u05e2\u05d4", hh: function(e) { return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea" }, d: "\u05d9\u05d5\u05dd", dd: function(e) { return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd" }, M: "\u05d7\u05d5\u05d3\u05e9", MM: function(e) { return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd" }, y: "\u05e9\u05e0\u05d4", yy: function(e) { return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd" } }, meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i, isPM: function(e) { return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e) }, meridiem: function(e, t, n) { return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? n ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? n ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1" } }) }() }, yPMs: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"), weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"), weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, n) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot n\xeb] LT", nextDay: "[Nes\xebr n\xeb] LT", nextWeek: "dddd [n\xeb] LT", lastDay: "[Dje n\xeb] LT", lastWeek: "dddd [e kaluar n\xeb] LT", sameElse: "L" }, relativeTime: { future: "n\xeb %s", past: "%s m\xeb par\xeb", s: "disa sekonda", ss: "%d sekonda", m: "nj\xeb minut\xeb", mm: "%d minuta", h: "nj\xeb or\xeb", hh: "%d or\xeb", d: "nj\xeb dit\xeb", dd: "%d dit\xeb", M: "nj\xeb muaj", MM: "%d muaj", y: "nj\xeb vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, z1FC: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n m\xedut", "'iens m\xedut"], mm: [e + " m\xeduts", e + " m\xeduts"], h: ["'n \xfeora", "'iensa \xfeora"], hh: [e + " \xfeoras", e + " \xfeoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return a ? r[n][0] : t ? r[n][0] : r[n][1] }
                n("wd/R").defineLocale("tzl", { months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"), weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"), weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi \xe0] LT", nextDay: "[dem\xe0 \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[ieiri \xe0] LT", lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }() }, z3Vd: function(e, t, n) {! function(e) { "use strict"; var t = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function n(e, n, a, r) { var l = function(e) { var n = Math.floor(e % 1e3 / 100),
                            a = Math.floor(e % 100 / 10),
                            r = e % 10,
                            l = ""; return n > 0 && (l += t[n] + "vatlh"), a > 0 && (l += ("" !== l ? " " : "") + t[a] + "maH"), r > 0 && (l += ("" !== l ? " " : "") + t[r]), "" === l ? "pagh" : l }(e); switch (a) {
                        case "ss":
                            return l + " lup";
                        case "mm":
                            return l + " tup";
                        case "hh":
                            return l + " rep";
                        case "dd":
                            return l + " jaj";
                        case "MM":
                            return l + " jar";
                        case "yy":
                            return l + " DIS" } }
                e.defineLocale("tlh", { months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"), monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa\u2019leS] LT", nextWeek: "LLL", lastDay: "[wa\u2019Hu\u2019] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", ss: n, m: "wa\u2019 tup", mm: n, h: "wa\u2019 rep", hh: n, d: "wa\u2019 jaj", dd: n, M: "wa\u2019 jar", MM: n, y: "wa\u2019 DIS", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, zavE: function(e, t, n) {! function(e) { "use strict";
                n("wd/R").defineLocale("en-SG", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } }) }() }, zx6S: function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT" } }, lastDay: "[ju\u010de u] LT", lastWeek: function() { return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) } }
]);