(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], { "+s0g": function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "//9w": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("se", { months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"), monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"), weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"), weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s gea\u017ees", past: "ma\u014bit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta m\xe1nnu", MM: "%d m\xe1nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "/X5v": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("x-pseudo", { months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"), monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"), monthsParseExact: !0, weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"), weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"), weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT", nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT", nextWeek: "dddd [\xe1t] LT", lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT", lastWeek: "[L~\xe1st] dddd [\xe1t] LT", sameElse: "L" }, relativeTime: { future: "\xed~\xf1 %s", past: "%s \xe1~g\xf3", s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds", ss: "%d s~\xe9c\xf3\xf1~ds", m: "\xe1 ~m\xed\xf1~\xfat\xe9", mm: "%d m~\xed\xf1\xfa~t\xe9s", h: "\xe1~\xf1 h\xf3~\xfar", hh: "%d h~\xf3\xfars", d: "\xe1 ~d\xe1\xfd", dd: "%d d~\xe1\xfds", M: "\xe1 ~m\xf3\xf1~th", MM: "%d m~\xf3\xf1t~hs", y: "\xe1 ~\xfd\xe9\xe1r", yy: "%d \xfd~\xe9\xe1rs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "0PPJ": function(e, t) { e.exports = "<p>\n  rxjs works!\n</p>\n" }, "0mo+": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0f21", 2: "\u0f22", 3: "\u0f23", 4: "\u0f24", 5: "\u0f25", 6: "\u0f26", 7: "\u0f27", 8: "\u0f28", 9: "\u0f29", 0: "\u0f20" },
                    n = { "\u0f21": "1", "\u0f22": "2", "\u0f23": "3", "\u0f24": "4", "\u0f25": "5", "\u0f26": "6", "\u0f27": "7", "\u0f28": "8", "\u0f29": "9", "\u0f20": "0" };
                e.defineLocale("bo", { months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT", nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT", nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT", lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT", lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0f63\u0f0b", past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63", s: "\u0f63\u0f58\u0f0b\u0f66\u0f44", ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d", m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42", mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58", h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42", hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51", d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42", dd: "%d \u0f49\u0f72\u0f53\u0f0b", M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42", MM: "%d \u0f5f\u0fb3\u0f0b\u0f56", y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42", yy: "%d \u0f63\u0f7c" }, preparse: function(e) { return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === t && e >= 4 || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === t && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "0ncs": function(e, t) { e.exports = '<div class="row animated fadeIn">\n    <div class="col-md-6">\n        <div class="card card-body">\n            <h3 class="box-title m-b-0">MEDICO: {{medico.nombre}}</h3>\n            <div class="row">\n                <div class="col-sm-12 col-xs-12">\n                    <form #f="ngForm" ngNativeValidate (ngSubmit)="guardarMedico(f)">\n                        <div class="form-group">\n                            <label>Nombre del medico</label>\n                            <input [(ngModel)]="medico.nombre" name="nombre" type="text" class="form-control" placeholder="Ingrese el nombre de medico" required>\n                        </div>\n\n                        <div class="form-group">\n                            <label>Hospital</label>\n                            <select (change)="cambioHospital( $event.target.value )" [(ngModel)]="medico.hospital" name="hospital" class="form-control" required>\n                              <option value="">Selecione hospital</option>\n                              <option *ngFor="let hospital of hospitales" [value]="hospital._id">{{hospital.nombre}}</option>\n                            </select>\n                        </div>\n\n                        <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">\n                          Guardar\n                        <i class="fa fa-save"></i>\n                        </button>\n                        <a routerLink="/medicos" class="btn btn-inverse waves-effect waves-light">Cancelar</a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="col-md-3">\n        <div class="card card-body">\n            <h4 class="box-title m-b-0">Hospital</h4>\n            <img [src]="hospital.img | imagen:\'hospital\'" class="rounded img-fluid">\n        </div>\n    </div>\n    <div class="col-md-3" *ngIf="medico._id">\n        <div class="card card-body">\n            <h4 class="box-title m-b-0">Fotografia</h4>\n            <img (click)="cambiarFoto()" [src]="medico.img | imagen:\'medico\'" class="img-circle img-fluid" pointer>\n        </div>\n    </div>\n</div>' }, "0tRk": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba" }) }(n("wd/R")) }, "1rYy": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("hy-am", { months: { format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"), standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_") }, monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"), weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"), weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0569.", LLL: "D MMMM YYYY \u0569., HH:mm", LLLL: "dddd, D MMMM YYYY \u0569., HH:mm" }, calendar: { sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT", nextDay: "[\u057e\u0561\u0572\u0568] LT", lastDay: "[\u0565\u0580\u0565\u056f] LT", nextWeek: function() { return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, lastWeek: function() { return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, sameElse: "L" }, relativeTime: { future: "%s \u0570\u0565\u057f\u0578", past: "%s \u0561\u057c\u0561\u057b", s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", m: "\u0580\u0578\u057a\u0565", mm: "%d \u0580\u0578\u057a\u0565", h: "\u056a\u0561\u0574", hh: "%d \u056a\u0561\u0574", d: "\u0585\u0580", dd: "%d \u0585\u0580", M: "\u0561\u0574\u056b\u057d", MM: "%d \u0561\u0574\u056b\u057d", y: "\u057f\u0561\u0580\u056b", yy: "%d \u057f\u0561\u0580\u056b" }, meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/, isPM: function(e) { return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e) }, meridiem: function(e) { return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576" }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/, ordinal: function(e, t) { switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                            default:
                                return e } }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, "1xZ4": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ca", { months: { standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aqu\xed %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/, ordinal: function(e, t) { var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8"; return "w" !== t && "W" !== t || (n = "a"), e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "2fjn": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("fr-ca", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) { default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e") } } }) }(n("wd/R")) }, "2xEq": function(e, t) { e.exports = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarUsuario( input.value )" type="text" class="form-control" placeholder="Buscar usuario...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="cargando">\n    <div class="col-sm-12">\n        <div class="alert-warning text-center">\n            <strong>Cargando</strong>\n            <br>\n            <i class="fa fa-refresh fa-spin fa-2x"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="!cargando">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h3 class="card-title">Usuarios registrados ( <small>{{ totalRegistros }}</small> )</h3>\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Imagen</th>\n                            <th>Correo</th>\n                            <th>Nombre</th>\n                            <th>Sala</th>\n                            <th>Role</th>\n                            <th>Auth</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor="let usuario of usuarios">\n                            <td class="w70">\n                                <img (click)="mostrarModal( usuario._id )" [src]="usuario.img | imagen:\'usuario\'" class="img-50 img-circle pointer">\n                            </td>\n                            <td>\n                                {{usuario.email}}\n                            </td>\n                            <td>\n                                {{usuario.nombre}}\n                            </td>\n                            <td>\n                                <select [(ngModel)]="usuario.sala" name="sala" class="form-control">\n                                        <option value="Juegos">JUEGOS</option>\n                                        <option value="Vacaciones">VACACIONES</option>\n                                        <option value="Idiomas">IDIOMAS</option>\n                                        <option value="Trabajo">TRABAJO</option>\n                                        <option value="Musica">MUSICA</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select [(ngModel)]="usuario.role" name="role" class="form-control">\n                                        <option value="ADMIN_ROLE">ADMIN_ROLE</option>\n                                        <option value="USER_ROLE">USER_ROLE</option>\n                                    </select>\n                            </td>\n                            <td>\n                                <label *ngIf="usuario.google" class="label label-danger">Google</label>\n                                <label *ngIf="!usuario.google" class="label label-info">Normal</label>\n                            </td>\n                            <td>\n                                <button (click)="guardarUsuario( usuario )" class="btn btn-primary">\n                                <i class="fa fa-save"></i>\n                                </button>\n\n                                <button (click)="borrarUsuario( usuario )" class="btn btn-danger">\n                                <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                  Anteriores\n                </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                  Siguientes\n                </button>\n            </div>\n        </div>\n    </div>\n</div>' }, "2ykv": function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "3E1r": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
                    n = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };
                e.defineLocale("hi", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u092c\u091c\u0947", LTS: "A h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u092e\u0947\u0902", past: "%s \u092a\u0939\u0932\u0947", s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u091f", mm: "%d \u092e\u093f\u0928\u091f", h: "\u090f\u0915 \u0918\u0902\u091f\u093e", hh: "%d \u0918\u0902\u091f\u0947", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947", MM: "%d \u092e\u0939\u0940\u0928\u0947", y: "\u090f\u0915 \u0935\u0930\u094d\u0937", yy: "%d \u0935\u0930\u094d\u0937" }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0930\u093e\u0924" === t ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === t ? e : "\u0926\u094b\u092a\u0939\u0930" === t ? e >= 10 ? e : e + 12 : "\u0936\u093e\u092e" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "3tpr": function(e, t) { e.exports = "" }, "4MV3": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0ae7", 2: "\u0ae8", 3: "\u0ae9", 4: "\u0aea", 5: "\u0aeb", 6: "\u0aec", 7: "\u0aed", 8: "\u0aee", 9: "\u0aef", 0: "\u0ae6" },
                    n = { "\u0ae7": "1", "\u0ae8": "2", "\u0ae9": "3", "\u0aea": "4", "\u0aeb": "5", "\u0aec": "6", "\u0aed": "7", "\u0aee": "8", "\u0aef": "9", "\u0ae6": "0" };
                e.defineLocale("gu", { months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"), monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"), monthsParseExact: !0, weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"), weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"), weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"), longDateFormat: { LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7" }, calendar: { sameDay: "[\u0a86\u0a9c] LT", nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT", nextWeek: "dddd, LT", lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT", lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0aae\u0abe", past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe", s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb", ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1", m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f", mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f", h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95", hh: "%d \u0a95\u0ab2\u0abe\u0a95", d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8", dd: "%d \u0aa6\u0abf\u0ab5\u0ab8", M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb", MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb", y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7", yy: "%d \u0ab5\u0ab0\u0acd\u0ab7" }, preparse: function(e) { return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === t ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === t ? e : "\u0aac\u0aaa\u0acb\u0ab0" === t ? e >= 10 ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "4dOw": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "53Vw": function(e, t) { e.exports = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarHospital( input.value )" type="text" class="form-control" placeholder="Buscar hospital...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="cargando">\n    <div class="col-sm-12">\n        <div class="alert-warning text-center">\n            <strong>Cargando</strong>\n            <br>\n            <i class="fa fa-refresh fa-spin fa-2x"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="!cargando">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h3 class="card-title">Hospitales registrados ( <small>{{ totalRegistros }}</small> )</h3>\n                <div class="text-right">\n                    <button (click)="crearHospital()" class="btn waves-effect waves-light btn-rounded btn-primary">\n                        <i class="fa fa-plus"></i>\n                        Crear Hospital\n                    </button>\n                </div>\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Imagen</th>\n                            <th>Hospital</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor="let hospital of hospitales">\n                            <td class="w70">\n                                <img (click)="mostrarModal( hospital._id )" [src]="hospital.img | imagen:\'hospital\'" class="img-50  pointer">\n                            </td>\n                            <td (click)="cambiarNombre( hospital )">\n                                {{hospital.nombre}}\n                            </td>\n                            <td>\n                                <button (click)="guardarHospital( hospital)" class="btn btn-primary">\n                                <i class="fa fa-save"></i>\n                                </button>\n\n                                <button (click)="borrarHospital( hospital )" class="btn btn-danger">\n                                <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                  Anteriores\n                </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                  Siguientes\n                </button>\n\n            </div>\n        </div>\n    </div>\n</div>' }, "6+QB": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, "66Xq": function(e, t) { e.exports = '<h3>\n    {{ leyenda }} - {{ progreso }}\n</h3>\n\n<div class="input-group">\n    <span class="input-group-btn">\n    <button class="btn btn-primary" type="button" (click)="cambiarValor(-5)">\n        <i class="mdi mdi-minus"></i>\n    </button>\n  </span>\n\n    <input #txtProgress type="number" class="form-control" name="progreso" [(ngModel)]="progreso" (ngModelChange)="onChanges($event)" min="1" max="100">\n\n    <span class="input-group-btn">\n      <button class="btn btn-primary" type="button" (click)="cambiarValor(+5)">\n          <i class="mdi mdi-plus"></i>\n      </button>\n    </span>\n</div>' }, "6B0Y": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u17e1", 2: "\u17e2", 3: "\u17e3", 4: "\u17e4", 5: "\u17e5", 6: "\u17e6", 7: "\u17e7", 8: "\u17e8", 9: "\u17e9", 0: "\u17e0" },
                    n = { "\u17e1": "1", "\u17e2": "2", "\u17e3": "3", "\u17e4": "4", "\u17e5": "5", "\u17e6": "6", "\u17e7": "7", "\u17e8": "8", "\u17e9": "9", "\u17e0": "0" };
                e.defineLocale("km", { months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"), weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/, isPM: function(e) { return "\u179b\u17d2\u1784\u17b6\u1785" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785" }, calendar: { sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT", nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT", nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT", lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT", lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT", sameElse: "L" }, relativeTime: { future: "%s\u1791\u17c0\u178f", past: "%s\u1798\u17bb\u1793", s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8", ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8", m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8", mm: "%d \u1793\u17b6\u1791\u17b8", h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784", hh: "%d \u1798\u17c9\u17c4\u1784", d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3", dd: "%d \u1790\u17d2\u1784\u17c3", M: "\u1798\u17bd\u1799\u1781\u17c2", MM: "%d \u1781\u17c2", y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6", yy: "%d \u1786\u17d2\u1793\u17b6\u17c6" }, dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/, ordinal: "\u1791\u17b8%d", preparse: function(e) { return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "6iPR": function(e, t) { e.exports = '<div class="w3-container">\n    <div class="row animated fadeIn">\n        <div class="col-12">\n            <div class="card m-b-0">\n                \x3c!-- .chat-row --\x3e\n                <div class="chat-main-box">\n\n                    <div class="chat-right-aside">\n                        <div class="chat-rbox">\n                            <div *ngFor="let msg of mensajes">\n                                <ul class="chat-list p-20" id="divChatbox">\n\n                                    <div *ngIf=" msg.de === \'yo\' ; else elseBlock">\n                                        <li class="reverse">\n                                            <div class="chat-content">\n                                                <h5>{{msg.de}}</h5>\n                                                <div class="box bg-light-inverse">{{msg.cuerpo}}</div>\n                                                <div class="chat-img"><img [src]="msg.img | imagen:\'usuario\'" class="img-50 img-circle"></div>\n                                            </div>\n                                            \x3c!-- <div class="chat-time"> {{hora}} </div> --\x3e\n                                        </li>\n                                    </div>\n                                    <ng-template #elseBlock>\n                                        <li class="animated fadeIn">\n                                            <div *ngIf="msg.de === \'Administrador\'; else elseBlock">\n                                                <div class="chat-img"><img src="public/assets/images/big/img2.jpg" alt="user" /></div>\n                                                <div class="chat-content">\n                                                    <h5> {{msg.de}} </h5>\n                                                    <div class="box bg-light-danger"> {{msg.cuerpo}} </div>\n                                                </div>\n                                            </div>\n                                            <ng-template #elseBlock>\n                                                <div class="chat-img"><img [src]="msg.img | imagen:\'usuario\'" class="img-50 img-circle"></div>\n                                                <div class="chat-content">\n                                                    <h5> {{msg.de}} </h5>\n                                                    <div class="box bg-light-inverse"> {{msg.cuerpo}} </div>\n                                                </div>\n                                            </ng-template>\n                                            \x3c!-- <div class="chat-time"> {{hora}} </div> --\x3e\n                                        </li>\n                                    </ng-template>\n                                </ul>\n                            </div>\n                        </div>\n\n                    </div>\n                    \x3c!-- .chat-right-panel --\x3e\n                </div>\n\n                \x3c!-- /.chat-row --\x3e\n            </div>\n\n        </div>\n\n    </div>\n</div>\n<div class="row-3">\n    <div class="card">\n        <div class="card-body-InputChat">\n            <form (ngSubmit)="enviar()">\n                <div class="row">\n                    <div class="col-9 text-right">\n                        <input type="text" [(ngModel)]="texto" autocomplete="off" name="texto" placeholder="Escribe tu mensaje aqu\xed" class="form-control b-0" autofocus>\n                    </div>\n                    <div class="col-1 text-right">\n                        <button type="submit" class="btn btn-info btn-circle btn-lg"><i class="fa fa-paper-plane-o"></i> </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\x3c!-- <script src="../jquery.min.js"><\/script> --\x3e\n\n\n\n\n\x3c!-- <!doctype html>\n<html>\n  <head>\n    <title>Multi Mouse - How many mice can I mouse eater eat?</title> --\x3e\n\x3c!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"><\/script>    --\x3e\n\x3c!-- <script src="/json.js"><\/script> for ie --\x3e\n\x3c!-- <script src="socket.io/socket.io.js"><\/script> sockets --\x3e\n\x3c!-- </head>\n  <body>\n<h1> You can see my mouse!! ZOMG - <a href="http://www.youtube.com/watch?v=aFLcbBvTGns">Video explaining why I\'m doign this</a></h1>    \n \n    <script>\n \n// some random color \nfunction randc(){\ncolors = new Array(\'#FF0000\',\'#00FF00\',\'#0000FF\',\'#00FFFF\',\'#FF00FF\',\'#C0C0C0\');\nvar color = colors[Math.floor(Math.random()*colors.length)]\nreturn color;\n}\n \n// When a new message arrives..\n      function message(obj){\n    var data = obj.message[1].split(\':\');\n    var x = data[0];\n    var y = data[1];\n        var userid = obj.message[0];\n \n  if($(\'#mouse_\'+userid).length == 0 && userid != \'you\') {\n    var randcolor = randc();\n    $(\'body\').append(\'<div class="dot" style="background-color:\'+randcolor+\'" id="mouse_\'+userid+\'"/>\'\n    );\n  }\n \n// stops a dot being drawn for local user\nif (userid != \'you\'){\n   $(\'#mouse_\'+userid).css({\n    \'left\' : x + \'px\',\n    \'top\' : y + \'px\'\n  })\n}\n        var el = document.createElement(\'p\');\n        if (\'announcement\' in obj) el.innerHTML = \'<em>\' + esc(obj.announcement) + \'</em>\';\n        else if (\'message\' in obj) el.innerHTML = \'<b>\' + esc(obj.message[0]) + \':</b> \' + esc(obj.message[1]);\n        document.getElementById(\'chat\').appendChild(el);\n        document.getElementById(\'chat\').scrollTop = 1000000;\n      }\n       \n// A function to define how we send data\n      function send(){\n        var val = document.getElementById(\'text\').value;\n        socket.send(val);\n        message({ message: [\'you\', val] });\n        document.getElementById(\'text\').value = \'\';\n      }\n       \n// When a mouse is moved\n      window.onmousemove = function(event){\n     message({ message: [\'you\', event.clientX+\':\'+event.clientY] });\n         socket.send(event.clientX+\':\'+event.clientY);\n      };\n \n// replace <&> w/ &lt&&gt\n      function esc(msg){\n        return msg.replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\');\n      };\n \n// establish the socket connection      \n      var socket = new io.Socket(null, {port: 8080, rememberTransport: false});\n      socket.connect();\n      socket.on(\'message\', function(obj){\n        if (\'buffer\' in obj){\n          document.getElementById(\'form\').style.display=\'none\';\n          document.getElementById(\'chat\').innerHTML = \'\';\n           \n          for (var i in obj.buffer) message(obj.buffer[i]);\n        } else message(obj);\n      });\n    <\/script>\n     \n    <div id="chat"><p>Connecting...</p></div>\n    <form id="form" onsubmit="send(); return false">\n      <input type="text" autocomplete="off" id="text"><input type="submit" value="Send">\n    </form>\n     \n    <style>\n      .dot { height: 10px; width: 10px; background-color:#000000;position:absolute;left:0;top:0;}\n    </style>\n     \n  </body>\n</html> --\x3e' }, "7BjC": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["\xfche minuti", "\xfcks minut"], mm: [e + " minuti", e + " minutit"], h: ["\xfche tunni", "tund aega", "\xfcks tund"], hh: [e + " tunni", e + " tundi"], d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"], M: ["kuu aja", "kuu aega", "\xfcks kuu"], MM: [e + " kuu", e + " kuud"], y: ["\xfche aasta", "aasta", "\xfcks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1] }
                e.defineLocale("et", { months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[T\xe4na,] LT", nextDay: "[Homme,] LT", nextWeek: "[J\xe4rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4rast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d p\xe4eva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "7aV9": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("si", { months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"), monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"), weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"), weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"), weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss" }, calendar: { sameDay: "[\u0d85\u0daf] LT[\u0da7]", nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]", nextWeek: "dddd LT[\u0da7]", lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]", lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]", sameElse: "L" }, relativeTime: { future: "%s\u0d9a\u0dd2\u0db1\u0dca", past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb", s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba", ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d", m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0", mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d", h: "\u0db4\u0dd0\u0dba", hh: "\u0db4\u0dd0\u0dba %d", d: "\u0daf\u0dd2\u0db1\u0dba", dd: "\u0daf\u0dd2\u0db1 %d", M: "\u0db8\u0dcf\u0dc3\u0dba", MM: "\u0db8\u0dcf\u0dc3 %d", y: "\u0dc0\u0dc3\u0dbb", yy: "\u0dc0\u0dc3\u0dbb %d" }, dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/, ordinal: function(e) { return e + " \u0dc0\u0dd0\u0db1\u0dd2" }, meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./, isPM: function(e) { return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e }, meridiem: function(e, t, n) { return e > 11 ? n ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : n ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4" } }) }(n("wd/R")) }, "8/+R": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0a67", 2: "\u0a68", 3: "\u0a69", 4: "\u0a6a", 5: "\u0a6b", 6: "\u0a6c", 7: "\u0a6d", 8: "\u0a6e", 9: "\u0a6f", 0: "\u0a66" },
                    n = { "\u0a67": "1", "\u0a68": "2", "\u0a69": "3", "\u0a6a": "4", "\u0a6b": "5", "\u0a6c": "6", "\u0a6d": "7", "\u0a6e": "8", "\u0a6f": "9", "\u0a66": "0" };
                e.defineLocale("pa-in", { months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"), weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), longDateFormat: { LT: "A h:mm \u0a35\u0a1c\u0a47", LTS: "A h:mm:ss \u0a35\u0a1c\u0a47", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47", LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47" }, calendar: { sameDay: "[\u0a05\u0a1c] LT", nextDay: "[\u0a15\u0a32] LT", nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT", lastDay: "[\u0a15\u0a32] LT", lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0a35\u0a3f\u0a71\u0a1a", past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47", s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f", ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f", m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f", mm: "%d \u0a2e\u0a3f\u0a70\u0a1f", h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e", hh: "%d \u0a18\u0a70\u0a1f\u0a47", d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28", dd: "%d \u0a26\u0a3f\u0a28", M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e", MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47", y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32", yy: "%d \u0a38\u0a3e\u0a32" }, preparse: function(e) { return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === t ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === t ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === t ? e >= 10 ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, "8mBD": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("pt", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "9rRi": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"], monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"], monthsParseExact: !0, weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-m\xe0ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-d\xe8 aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "m\xecos", MM: "%d m\xecosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "A+xa": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("cv", { months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"), monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"), weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"), weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"), weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]", LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm", LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm" }, calendar: { sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", sameElse: "L" }, relativeTime: { future: function(e) { var t = /\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d"; return e + t }, past: "%s \u043a\u0430\u044f\u043b\u043b\u0430", s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442", hh: "%d \u0441\u0435\u0445\u0435\u0442", d: "\u043f\u04d7\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445", MM: "%d \u0443\u0439\u04d1\u0445", y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b", yy: "%d \u04ab\u0443\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/, ordinal: "%d-\u043c\u04d7\u0448", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, AQ68: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, AvvY: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ml", { months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"), monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"), monthsParseExact: !0, weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"), weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"), weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"), longDateFormat: { LT: "A h:mm -\u0d28\u0d41", LTS: "A h:mm:ss -\u0d28\u0d41", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41", LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41" }, calendar: { sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT", nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT", nextWeek: "dddd, LT", lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT", lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d", past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d", s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e", ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d", m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02", dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02", M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02", MM: "%d \u0d2e\u0d3e\u0d38\u0d02", y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02", yy: "%d \u0d35\u0d7c\u0d37\u0d02" }, meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === t && e >= 4 || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === t || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" } }) }(n("wd/R")) }, B55N: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ja", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"), weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm" }, meridiemParse: /\u5348\u524d|\u5348\u5f8c/i, isPM: function(e) { return "\u5348\u5f8c" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c" }, calendar: { sameDay: "[\u4eca\u65e5] LT", nextDay: "[\u660e\u65e5] LT", nextWeek: function(e) { return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT" }, lastDay: "[\u6628\u65e5] LT", lastWeek: function(e) { return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT" }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}\u65e5/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            default:
                                return e } }, relativeTime: { future: "%s\u5f8c", past: "%s\u524d", s: "\u6570\u79d2", ss: "%d\u79d2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65e5", dd: "%d\u65e5", M: "1\u30f6\u6708", MM: "%d\u30f6\u6708", y: "1\u5e74", yy: "%d\u5e74" } }) }(n("wd/R")) }, BVg3: function(e, t, n) {! function(e) { "use strict";

                function t(e) { return e % 100 == 11 || e % 10 != 1 }

                function n(e, n, a, r) { var i = e + " "; switch (a) {
                        case "s":
                            return n || r ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                        case "ss":
                            return t(e) ? i + (n || r ? "sek\xfandur" : "sek\xfandum") : i + "sek\xfanda";
                        case "m":
                            return n ? "m\xedn\xfata" : "m\xedn\xfatu";
                        case "mm":
                            return t(e) ? i + (n || r ? "m\xedn\xfatur" : "m\xedn\xfatum") : n ? i + "m\xedn\xfata" : i + "m\xedn\xfatu";
                        case "hh":
                            return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                        case "d":
                            return n ? "dagur" : r ? "dag" : "degi";
                        case "dd":
                            return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "d\xf6gum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
                        case "M":
                            return n ? "m\xe1nu\xf0ur" : r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                        case "MM":
                            return t(e) ? n ? i + "m\xe1nu\xf0ir" : i + (r ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : n ? i + "m\xe1nu\xf0ur" : i + (r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                        case "y":
                            return n || r ? "\xe1r" : "\xe1ri";
                        case "yy":
                            return t(e) ? i + (n || r ? "\xe1r" : "\xe1rum") : i + (n || r ? "\xe1r" : "\xe1ri") } }
                e.defineLocale("is", { months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"), weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"), weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"), weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[\xed dag kl.] LT", nextDay: "[\xe1 morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xed g\xe6r kl.] LT", lastWeek: "[s\xed\xf0asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s s\xed\xf0an", s: n, ss: n, m: n, mm: n, h: "klukkustund", hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, ByF4: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("fo", { months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"), weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"), weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[\xcd dag kl.] LT", nextDay: "[\xcd morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xcd gj\xe1r kl.] LT", lastWeek: "[s\xed\xf0stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s s\xed\xf0ani", s: "f\xe1 sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein t\xedmi", hh: "%d t\xedmar", d: "ein dagur", dd: "%d dagar", M: "ein m\xe1na\xf0ur", MM: "%d m\xe1na\xf0ir", y: "eitt \xe1r", yy: "%d \xe1r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, CRzq: function(e, t) { e.exports = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarMedico( input.value )" type="text" class="form-control" placeholder="Buscar medico...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h3 class="card-title">Medicos registrados ( <small>{{ this._medicoService.totalMedicos }}</small> )</h3>\n\n                <div class="text-right">\n                    <button [routerLink]="[\'/medico\',\'nuevo\']" class="btn waves-effect waves-light btn-rounded btn-primary">\n                  <i class="fa fa-plus"></i>\n                  Crear Medico\n              </button>\n                </div>\n\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Foto</th>\n                            <th>Medico</th>\n                            <th>Hospital</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor="let medico of medicos">\n                            <td>\n                                <img [src]="medico.img | imagen:\'medico\'" class="img-50 img-circle">\n                            </td>\n                            <td>\n                                {{medico.nombre}}\n                            </td>\n                            <td>\n                                {{medico.hospital.nombre}}\n                            </td>\n                            <td>\n                                <button [routerLink]="[\'/medico\', medico._id]" class="btn btn-primary">\n                                <i class="fa fa-edit"></i>\n                              </button>\n\n                                <button (click)="borrarMedico( medico )" class="btn btn-primary">\n                                  <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                    Anteriores\n                  </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                    Siguientes\n                  </button>\n            </div>\n        </div>\n    </div>\n</div>' }, CjzT: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, CoRJ: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ar-ma", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, "D/JM": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, "DKr+": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return t ? r[n][0] : r[n][1] }
                e.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function(e, t) { switch (t) {
                            case "D":
                                return e + "er";
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                            case "w":
                            case "W":
                                return e } }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" } }) }(n("wd/R")) }, Dkky: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("fr-ch", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) { default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, Dmvi: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, DoHr: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
                e.defineLocale("tr", { months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"), monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\xfcn] LT", lastWeek: "[ge\xe7en] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \xf6nce", s: "birka\xe7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" }, ordinal: function(e, n) { switch (n) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'\u0131nc\u0131"; var a = e % 10,
                                    r = e % 100 - a,
                                    i = e >= 100 ? 100 : null; return e + (t[a] || t[r] || t[i]) } }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, DxQv: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\xe5 dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\xe5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "et \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, Dzi0: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "E+lV": function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"], m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"], mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"], h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"], hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"], dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"], MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"], yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
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
                e.defineLocale("th", { months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"), monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"), monthsParseExact: !0, weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm", LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm" }, meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/, isPM: function(e) { return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" }, calendar: { sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT", lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT", sameElse: "L" }, relativeTime: { future: "\u0e2d\u0e35\u0e01 %s", past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27", s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", m: "1 \u0e19\u0e32\u0e17\u0e35", mm: "%d \u0e19\u0e32\u0e17\u0e35", h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", d: "1 \u0e27\u0e31\u0e19", dd: "%d \u0e27\u0e31\u0e19", M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19", MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19", y: "1 \u0e1b\u0e35", yy: "%d \u0e1b\u0e35" } }) }(n("wd/R")) }, G0Uy: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"), weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"), weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"), weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[G\u0127ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-biera\u0127 fil-]LT", lastWeek: "dddd [li g\u0127adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f\u2019 %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "sieg\u0127a", hh: "%d sieg\u0127at", d: "\u0121urnata", dd: "%d \u0121ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, H8ED: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r, i, o = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", hh: t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d", dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e", yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e" }; return "m" === n ? t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === n ? t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (a = o[n], r = +e, i = a.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) }
                e.defineLocale("be", { months: { format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"), standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_") }, monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"), weekdays: { format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., HH:mm", LLLL: "dddd, D MMMM YYYY \u0433., HH:mm" }, calendar: { sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT", nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT", lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT", nextWeek: function() { return "[\u0423] dddd [\u045e] LT" }, lastWeek: function() { switch (this.day()) {
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
                                return e } }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, HP3h: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
                    n = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    a = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] },
                    r = function(e) { return function(t, r, i, o) { var s = n(t),
                                d = a[e][n(t)]; return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, t) } },
                    i = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar-ly", { months: i, monthsShort: i, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: r("s"), ss: r("s"), m: r("m"), mm: r("m"), h: r("h"), hh: r("h"), d: r("d"), dd: r("d"), M: r("M"), MM: r("M"), y: r("y"), yy: r("y") }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, HoiS: function(e, t) { e.exports = '<div class="row">\n\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">{{ graficos.grafico1.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico1.labels" [chartData]="graficos.grafico1.data" chartType="doughnut"></app-grafico-dona>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico2.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico2.labels" [chartData]="graficos.grafico2.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class="row">\n\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico3.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico3.labels" [chartData]="graficos.grafico3.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico4.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico4.labels" [chartData]="graficos.grafico4.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n</div>' }, IBtZ: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ka", { months: { standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"), format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_") }, monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"), weekdays: { standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"), format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ }, weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"), weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]", nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]", lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]", nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]", lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4", sameElse: "L" }, relativeTime: { future: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8" }, past: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0 }, s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8", ss: "%d \u10ec\u10d0\u10db\u10d8", m: "\u10ec\u10e3\u10d7\u10d8", mm: "%d \u10ec\u10e3\u10d7\u10d8", h: "\u10e1\u10d0\u10d0\u10d7\u10d8", hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8", d: "\u10d3\u10e6\u10d4", dd: "%d \u10d3\u10e6\u10d4", M: "\u10d7\u10d5\u10d4", MM: "%d \u10d7\u10d5\u10d4", y: "\u10ec\u10d4\u10da\u10d8", yy: "%d \u10ec\u10d4\u10da\u10d8" }, dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, "Ivi+": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ko", { months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"), weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\ub144 MMMM D\uc77c", LLL: "YYYY\ub144 MMMM D\uc77c A h:mm", LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\ub144 MMMM D\uc77c", lll: "YYYY\ub144 MMMM D\uc77c A h:mm", llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm" }, calendar: { sameDay: "\uc624\ub298 LT", nextDay: "\ub0b4\uc77c LT", nextWeek: "dddd LT", lastDay: "\uc5b4\uc81c LT", lastWeek: "\uc9c0\ub09c\uc8fc dddd LT", sameElse: "L" }, relativeTime: { future: "%s \ud6c4", past: "%s \uc804", s: "\uba87 \ucd08", ss: "%d\ucd08", m: "1\ubd84", mm: "%d\ubd84", h: "\ud55c \uc2dc\uac04", hh: "%d\uc2dc\uac04", d: "\ud558\ub8e8", dd: "%d\uc77c", M: "\ud55c \ub2ec", MM: "%d\ub2ec", y: "\uc77c \ub144", yy: "%d\ub144" }, dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/, ordinal: function(e, t) { switch (t) {
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
                                return e } }, meridiemParse: /\uc624\uc804|\uc624\ud6c4/, isPM: function(e) { return "\uc624\ud6c4" === e }, meridiem: function(e, t, n) { return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4" } }) }(n("wd/R")) }, "J/NR": function(e, t) { e.exports = '<div class="row">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">Barra de progreso {{ progreso1 }} </h4>\n\n                <div class="progress">\n                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" [attr.ariaValuenow]="progreso1" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" [style.width]="progreso1 + \'%\'"></div>\n                </div>\n\n                <br>\n\n                <div class="progress">\n                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" [attr.ariaValuenow]="progreso2" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" [style.width]="progreso2 + \'%\'"></div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row">\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n\n                <app-incrementador (actualizaValor)="progreso1 = $event" nombre="Progress Azul" [progreso]="progreso1"></app-incrementador>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n\n                <app-incrementador (actualizaValor)="progreso2 = $event" nombre="Progress Verde" [progreso]="progreso2"></app-incrementador>\n\n            </div>\n        </div>\n    </div>\n\n</div>' }, "JCF/": function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
                    n = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
                    a = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];
                e.defineLocale("ku", { months: a, monthsShort: a, weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/, isPM: function(e) { return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c" }, calendar: { sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", sameElse: "L" }, relativeTime: { future: "\u0644\u0647\u200c %s", past: "%s", s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643", ss: "\u0686\u0631\u0643\u0647\u200c %d", m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643", mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643", h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698", dd: "%d \u0695\u06c6\u0698", M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af", MM: "%d \u0645\u0627\u0646\u06af", y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5", yy: "%d \u0633\u0627\u06b5" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, JVSJ: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = e + " "; switch (n) {
                        case "ss":
                            return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return a += 1 === e ? "dan" : "dana";
                        case "MM":
                            return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } }
                e.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
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
                                    return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, Jt6t: function(e, t) { e.exports = '<div class="row">\r\n    <h1>\r\n        Sala:{{sala}}\r\n        <select [(ngModel)]="sala" name="sala" class="form-control" autofocus="true">\r\n\r\n\r\n            \x3c!-- <option input #salaSelected type="string" name="value1" (ngModelChange)="onChanges($event)" selected>{{value1}}</option> --\x3e\r\n            <option value1>value1</option>\r\n            \x3c!-- <option input #salaSelected type="string" name="value2" (ngModelChange)="onChanges($event)" selected>{{value2}}</option> --\x3e\r\n            <option value2>value2</option>\r\n            \x3c!-- <option input #salaSelected type="string" name="value3" (ngModelChange)="onChanges($event)" selected>{{value3}}</option>     --\x3e\r\n            <option value3>value3</option>\r\n        </select>\r\n        \x3c!-- <small> wsService.usuario.sala </small> --\x3e\r\n    </h1>\r\n</div>\r\n<button class="btn btn-danger" (click)="salir()">   \r\n  Salir\r\n</button>\r\n<hr>\r\n<div class="row">\r\n    <div class="col-3">\r\n        <div class="card">\r\n            <div id="chat-usuarios" class="card-body">\r\n\r\n                <table class="table table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Foto</th>\r\n                            <th>usuario</th>\r\n                            <th>sala</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                        <tr *ngFor="let usuario of usuarios">\r\n                            <td class="w70">\r\n                                <img [src]="usuario.img | imagen:\'usuario\'" class="img-50 img-circle">\r\n                            </td>\r\n                            <td>\r\n                                {{usuario.nombre}}\r\n                            </td>\r\n                            <td>\r\n                                {{usuario.sala}}\r\n                            </td>\r\n\r\n                            \x3c!-- <td>   ACA LA IDEA ES SELECCIONAR USUARIOS PARA ESCRIBILES, TAMBIEN MEDICOS Y HOSPITALES\r\n                            <button [routerLink]="[\'/medico\', medico._id]" class="btn btn-primary">\r\n                            <i class="fa fa-edit"></i>\r\n                          </button>\r\n\r\n                            <button (click)="borrarMedico( medico )" class="btn btn-primary">\r\n                              <i class="fa fa-trash-o"></i>\r\n                            </button>\r\n                            </td> --\x3e\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- <app-lista-usuarios></app-lista-usuarios> --\x3e\r\n\r\n\r\n    <div class="col-9">\r\n        <div class="card">\r\n            <div class="card-body">\r\n                <app-chat></app-chat>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class="footer">\r\n        Super Chat - Ignacio Trezza\r\n    </footer>\r\n</div>' }, JvlW: function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekund\u0117_sekund\u017ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };

                function n(e, t, n, a) { return t ? r(n)[0] : a ? r(n)[1] : r(n)[2] }

                function a(e) { return e % 10 == 0 || e > 10 && e < 20 }

                function r(e) { return t[e].split("_") }

                function i(e, t, i, o) { var s = e + " "; return 1 === e ? s + n(0, t, i[0], o) : t ? s + (a(e) ? r(i)[1] : r(i)[0]) : o ? s + r(i)[1] : s + (a(e) ? r(i)[1] : r(i)[2]) }
                e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"), weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012f] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prie\u0161 %s", s: function(e, t, n, a) { return t ? "kelios sekund\u0117s" : a ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes" }, ss: i, m: n, mm: i, h: n, hh: i, d: n, dd: i, M: n, MM: i, y: n, yy: i }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, "K/tc": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[M\xf4re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, K12L: function(e, t) { e.exports = "<p>\n  promesas works!\n</p>\n" }, KSF8: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("vi", { months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[H\xf4m nay l\xfac] LT", nextDay: "[Ng\xe0y mai l\xfac] LT", nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT", lastDay: "[H\xf4m qua l\xfac] LT", lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT", sameElse: "L" }, relativeTime: { future: "%s t\u1edbi", past: "%s tr\u01b0\u1edbc", s: "v\xe0i gi\xe2y", ss: "%d gi\xe2y", m: "m\u1ed9t ph\xfat", mm: "%d ph\xfat", h: "m\u1ed9t gi\u1edd", hh: "%d gi\u1edd", d: "m\u1ed9t ng\xe0y", dd: "%d ng\xe0y", M: "m\u1ed9t th\xe1ng", MM: "%d th\xe1ng", y: "m\u1ed9t n\u0103m", yy: "%d n\u0103m" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, KTz0: function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
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
                e.defineLocale("uz", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"), weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"), weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]", nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", sameElse: "L" }, relativeTime: { future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430", past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d", s: "\u0444\u0443\u0440\u0441\u0430\u0442", ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442", m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430", mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430", h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u0431\u0438\u0440 \u043e\u0439", MM: "%d \u043e\u0439", y: "\u0431\u0438\u0440 \u0439\u0438\u043b", yy: "%d \u0439\u0438\u043b" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, LvDl: function(e, t, n) {
            (function(e) { var a;
                (function() { var r, i = 200,
                        o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                        s = "Expected a function",
                        d = "__lodash_hash_undefined__",
                        u = 500,
                        l = "__lodash_placeholder__",
                        c = 1,
                        h = 2,
                        _ = 4,
                        m = 1,
                        f = 2,
                        p = 1,
                        g = 2,
                        y = 4,
                        M = 8,
                        v = 16,
                        b = 32,
                        L = 64,
                        k = 128,
                        Y = 256,
                        w = 512,
                        D = 30,
                        x = "...",
                        T = 800,
                        S = 16,
                        H = 1,
                        j = 2,
                        O = 1 / 0,
                        P = 9007199254740991,
                        A = 1.7976931348623157e308,
                        C = NaN,
                        R = 4294967295,
                        W = R - 1,
                        F = R >>> 1,
                        I = [
                            ["ary", k],
                            ["bind", p],
                            ["bindKey", g],
                            ["curry", M],
                            ["curryRight", v],
                            ["flip", w],
                            ["partial", b],
                            ["partialRight", L],
                            ["rearg", Y]
                        ],
                        E = "[object Arguments]",
                        z = "[object Array]",
                        N = "[object AsyncFunction]",
                        B = "[object Boolean]",
                        V = "[object Date]",
                        U = "[object DOMException]",
                        J = "[object Error]",
                        G = "[object Function]",
                        q = "[object GeneratorFunction]",
                        K = "[object Map]",
                        $ = "[object Number]",
                        Z = "[object Null]",
                        X = "[object Object]",
                        Q = "[object Proxy]",
                        ee = "[object RegExp]",
                        te = "[object Set]",
                        ne = "[object String]",
                        ae = "[object Symbol]",
                        re = "[object Undefined]",
                        ie = "[object WeakMap]",
                        oe = "[object WeakSet]",
                        se = "[object ArrayBuffer]",
                        de = "[object DataView]",
                        ue = "[object Float32Array]",
                        le = "[object Float64Array]",
                        ce = "[object Int8Array]",
                        he = "[object Int16Array]",
                        _e = "[object Int32Array]",
                        me = "[object Uint8Array]",
                        fe = "[object Uint8ClampedArray]",
                        pe = "[object Uint16Array]",
                        ge = "[object Uint32Array]",
                        ye = /\b__p \+= '';/g,
                        Me = /\b(__p \+=) '' \+/g,
                        ve = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        be = /&(?:amp|lt|gt|quot|#39);/g,
                        Le = /[&<>"']/g,
                        ke = RegExp(be.source),
                        Ye = RegExp(Le.source),
                        we = /<%-([\s\S]+?)%>/g,
                        De = /<%([\s\S]+?)%>/g,
                        xe = /<%=([\s\S]+?)%>/g,
                        Te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        Se = /^\w*$/,
                        He = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        je = /[\\^$.*+?()[\]{}|]/g,
                        Oe = RegExp(je.source),
                        Pe = /^\s+|\s+$/g,
                        Ae = /^\s+/,
                        Ce = /\s+$/,
                        Re = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        We = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        Fe = /,? & /,
                        Ie = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        Ee = /\\(\\)?/g,
                        ze = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        Ne = /\w*$/,
                        Be = /^[-+]0x[0-9a-f]+$/i,
                        Ve = /^0b[01]+$/i,
                        Ue = /^\[object .+?Constructor\]$/,
                        Je = /^0o[0-7]+$/i,
                        Ge = /^(?:0|[1-9]\d*)$/,
                        qe = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        Ke = /($^)/,
                        $e = /['\n\r\u2028\u2029\\]/g,
                        Ze = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Xe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Qe = "[\\ud800-\\udfff]",
                        et = "[" + Xe + "]",
                        tt = "[" + Ze + "]",
                        nt = "\\d+",
                        at = "[\\u2700-\\u27bf]",
                        rt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                        it = "[^\\ud800-\\udfff" + Xe + nt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                        ot = "\\ud83c[\\udffb-\\udfff]",
                        st = "[^\\ud800-\\udfff]",
                        dt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        ut = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        lt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                        ct = "(?:" + rt + "|" + it + ")",
                        ht = "(?:" + lt + "|" + it + ")",
                        _t = "(?:" + tt + "|" + ot + ")" + "?",
                        mt = "[\\ufe0e\\ufe0f]?" + _t + ("(?:\\u200d(?:" + [st, dt, ut].join("|") + ")[\\ufe0e\\ufe0f]?" + _t + ")*"),
                        ft = "(?:" + [at, dt, ut].join("|") + ")" + mt,
                        pt = "(?:" + [st + tt + "?", tt, dt, ut, Qe].join("|") + ")",
                        gt = RegExp("['\u2019]", "g"),
                        yt = RegExp(tt, "g"),
                        Mt = RegExp(ot + "(?=" + ot + ")|" + pt + mt, "g"),
                        vt = RegExp([lt + "?" + rt + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=" + [et, lt, "$"].join("|") + ")", ht + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=" + [et, lt + ct, "$"].join("|") + ")", lt + "?" + ct + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?", lt + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nt, ft].join("|"), "g"),
                        bt = RegExp("[\\u200d\\ud800-\\udfff" + Ze + "\\ufe0e\\ufe0f]"),
                        Lt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        kt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        Yt = -1,
                        wt = {};
                    wt[ue] = wt[le] = wt[ce] = wt[he] = wt[_e] = wt[me] = wt[fe] = wt[pe] = wt[ge] = !0, wt[E] = wt[z] = wt[se] = wt[B] = wt[de] = wt[V] = wt[J] = wt[G] = wt[K] = wt[$] = wt[X] = wt[ee] = wt[te] = wt[ne] = wt[ie] = !1; var Dt = {};
                    Dt[E] = Dt[z] = Dt[se] = Dt[de] = Dt[B] = Dt[V] = Dt[ue] = Dt[le] = Dt[ce] = Dt[he] = Dt[_e] = Dt[K] = Dt[$] = Dt[X] = Dt[ee] = Dt[te] = Dt[ne] = Dt[ae] = Dt[me] = Dt[fe] = Dt[pe] = Dt[ge] = !0, Dt[J] = Dt[G] = Dt[ie] = !1; var xt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                        Tt = parseFloat,
                        St = parseInt,
                        Ht = "object" == typeof global && global && global.Object === Object && global,
                        jt = "object" == typeof self && self && self.Object === Object && self,
                        Ot = Ht || jt || Function("return this")(),
                        Pt = t && !t.nodeType && t,
                        At = Pt && "object" == typeof e && e && !e.nodeType && e,
                        Ct = At && At.exports === Pt,
                        Rt = Ct && Ht.process,
                        Wt = function() { try { var e = At && At.require && At.require("util").types; return e || Rt && Rt.binding && Rt.binding("util") } catch (t) {} }(),
                        Ft = Wt && Wt.isArrayBuffer,
                        It = Wt && Wt.isDate,
                        Et = Wt && Wt.isMap,
                        zt = Wt && Wt.isRegExp,
                        Nt = Wt && Wt.isSet,
                        Bt = Wt && Wt.isTypedArray;

                    function Vt(e, t, n) { switch (n.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, n[0]);
                            case 2:
                                return e.call(t, n[0], n[1]);
                            case 3:
                                return e.call(t, n[0], n[1], n[2]) } return e.apply(t, n) }

                    function Ut(e, t, n, a) { for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) { var o = e[r];
                            t(a, o, n(o), e) } return a }

                    function Jt(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a && !1 !== t(e[n], n, e);); return e }

                    function Gt(e, t) { for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e);); return e }

                    function qt(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
                            if (!t(e[n], n, e)) return !1;
                        return !0 }

                    function Kt(e, t) { for (var n = -1, a = null == e ? 0 : e.length, r = 0, i = []; ++n < a;) { var o = e[n];
                            t(o, n, e) && (i[r++] = o) } return i }

                    function $t(e, t) { return !!(null == e ? 0 : e.length) && sn(e, t, 0) > -1 }

                    function Zt(e, t, n) { for (var a = -1, r = null == e ? 0 : e.length; ++a < r;)
                            if (n(t, e[a])) return !0;
                        return !1 }

                    function Xt(e, t) { for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a;) r[n] = t(e[n], n, e); return r }

                    function Qt(e, t) { for (var n = -1, a = t.length, r = e.length; ++n < a;) e[r + n] = t[n]; return e }

                    function en(e, t, n, a) { var r = -1,
                            i = null == e ? 0 : e.length; for (a && i && (n = e[++r]); ++r < i;) n = t(n, e[r], r, e); return n }

                    function tn(e, t, n, a) { var r = null == e ? 0 : e.length; for (a && r && (n = e[--r]); r--;) n = t(n, e[r], r, e); return n }

                    function nn(e, t) { for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
                            if (t(e[n], n, e)) return !0;
                        return !1 } var an = cn("length");

                    function rn(e, t, n) { var a; return n(e, function(e, n, r) { if (t(e, n, r)) return a = n, !1 }), a }

                    function on(e, t, n, a) { for (var r = e.length, i = n + (a ? 1 : -1); a ? i-- : ++i < r;)
                            if (t(e[i], i, e)) return i;
                        return -1 }

                    function sn(e, t, n) { return t == t ? function(e, t, n) { var a = n - 1,
                                r = e.length; for (; ++a < r;)
                                if (e[a] === t) return a;
                            return -1 }(e, t, n) : on(e, un, n) }

                    function dn(e, t, n, a) { for (var r = n - 1, i = e.length; ++r < i;)
                            if (a(e[r], t)) return r;
                        return -1 }

                    function un(e) { return e != e }

                    function ln(e, t) { var n = null == e ? 0 : e.length; return n ? mn(e, t) / n : C }

                    function cn(e) { return function(t) { return null == t ? r : t[e] } }

                    function hn(e) { return function(t) { return null == e ? r : e[t] } }

                    function _n(e, t, n, a, r) { return r(e, function(e, r, i) { n = a ? (a = !1, e) : t(n, e, r, i) }), n }

                    function mn(e, t) { for (var n, a = -1, i = e.length; ++a < i;) { var o = t(e[a]);
                            o !== r && (n = n === r ? o : n + o) } return n }

                    function fn(e, t) { for (var n = -1, a = Array(e); ++n < e;) a[n] = t(n); return a }

                    function pn(e) { return function(t) { return e(t) } }

                    function gn(e, t) { return Xt(t, function(t) { return e[t] }) }

                    function yn(e, t) { return e.has(t) }

                    function Mn(e, t) { for (var n = -1, a = e.length; ++n < a && sn(t, e[n], 0) > -1;); return n }

                    function vn(e, t) { for (var n = e.length; n-- && sn(t, e[n], 0) > -1;); return n } var bn = hn({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O", "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S", "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017f": "s" }),
                        Ln = hn({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });

                    function kn(e) { return "\\" + xt[e] }

                    function Yn(e) { return bt.test(e) }

                    function wn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e, a) { n[++t] = [a, e] }), n }

                    function Dn(e, t) { return function(n) { return e(t(n)) } }

                    function xn(e, t) { for (var n = -1, a = e.length, r = 0, i = []; ++n < a;) { var o = e[n];
                            o !== t && o !== l || (e[n] = l, i[r++] = n) } return i }

                    function Tn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e) { n[++t] = e }), n }

                    function Sn(e) { var t = -1,
                            n = Array(e.size); return e.forEach(function(e) { n[++t] = [e, e] }), n }

                    function Hn(e) { return Yn(e) ? function(e) { var t = Mt.lastIndex = 0; for (; Mt.test(e);) ++t; return t }(e) : an(e) }

                    function jn(e) { return Yn(e) ? function(e) { return e.match(Mt) || [] }(e) : function(e) { return e.split("") }(e) } var On = hn({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }); var Pn = function e(t) { var n, a = (t = null == t ? Ot : Pn.defaults(Ot.Object(), t, Pn.pick(Ot, kt))).Array,
                            Ze = t.Date,
                            Xe = t.Error,
                            Qe = t.Function,
                            et = t.Math,
                            tt = t.Object,
                            nt = t.RegExp,
                            at = t.String,
                            rt = t.TypeError,
                            it = a.prototype,
                            ot = Qe.prototype,
                            st = tt.prototype,
                            dt = t["__core-js_shared__"],
                            ut = ot.toString,
                            lt = st.hasOwnProperty,
                            ct = 0,
                            ht = (n = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                            _t = st.toString,
                            mt = ut.call(tt),
                            ft = Ot._,
                            pt = nt("^" + ut.call(lt).replace(je, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Mt = Ct ? t.Buffer : r,
                            bt = t.Symbol,
                            xt = t.Uint8Array,
                            Ht = Mt ? Mt.allocUnsafe : r,
                            jt = Dn(tt.getPrototypeOf, tt),
                            Pt = tt.create,
                            At = st.propertyIsEnumerable,
                            Rt = it.splice,
                            Wt = bt ? bt.isConcatSpreadable : r,
                            an = bt ? bt.iterator : r,
                            hn = bt ? bt.toStringTag : r,
                            An = function() { try { var e = Fi(tt, "defineProperty"); return e({}, "", {}), e } catch (t) {} }(),
                            Cn = t.clearTimeout !== Ot.clearTimeout && t.clearTimeout,
                            Rn = Ze && Ze.now !== Ot.Date.now && Ze.now,
                            Wn = t.setTimeout !== Ot.setTimeout && t.setTimeout,
                            Fn = et.ceil,
                            In = et.floor,
                            En = tt.getOwnPropertySymbols,
                            zn = Mt ? Mt.isBuffer : r,
                            Nn = t.isFinite,
                            Bn = it.join,
                            Vn = Dn(tt.keys, tt),
                            Un = et.max,
                            Jn = et.min,
                            Gn = Ze.now,
                            qn = t.parseInt,
                            Kn = et.random,
                            $n = it.reverse,
                            Zn = Fi(t, "DataView"),
                            Xn = Fi(t, "Map"),
                            Qn = Fi(t, "Promise"),
                            ea = Fi(t, "Set"),
                            ta = Fi(t, "WeakMap"),
                            na = Fi(tt, "create"),
                            aa = ta && new ta,
                            ra = {},
                            ia = co(Zn),
                            oa = co(Xn),
                            sa = co(Qn),
                            da = co(ea),
                            ua = co(ta),
                            la = bt ? bt.prototype : r,
                            ca = la ? la.valueOf : r,
                            ha = la ? la.toString : r;

                        function _a(e) { if (Ts(e) && !gs(e) && !(e instanceof ga)) { if (e instanceof pa) return e; if (lt.call(e, "__wrapped__")) return ho(e) } return new pa(e) } var ma = function() {
                            function e() {} return function(t) { if (!xs(t)) return {}; if (Pt) return Pt(t);
                                e.prototype = t; var n = new e; return e.prototype = r, n } }();

                        function fa() {}

                        function pa(e, t) { this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r }

                        function ga(e) { this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = R, this.__views__ = [] }

                        function ya(e) { var t = -1,
                                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                this.set(a[0], a[1]) } }

                        function Ma(e) { var t = -1,
                                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                this.set(a[0], a[1]) } }

                        function va(e) { var t = -1,
                                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var a = e[t];
                                this.set(a[0], a[1]) } }

                        function ba(e) { var t = -1,
                                n = null == e ? 0 : e.length; for (this.__data__ = new va; ++t < n;) this.add(e[t]) }

                        function La(e) { var t = this.__data__ = new Ma(e);
                            this.size = t.size }

                        function ka(e, t) { var n = gs(e),
                                a = !n && ps(e),
                                r = !n && !a && bs(e),
                                i = !n && !a && !r && Rs(e),
                                o = n || a || r || i,
                                s = o ? fn(e.length, at) : [],
                                d = s.length; for (var u in e) !t && !lt.call(e, u) || o && ("length" == u || r && ("offset" == u || "parent" == u) || i && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ui(u, d)) || s.push(u); return s }

                        function Ya(e) { var t = e.length; return t ? e[br(0, t - 1)] : r }

                        function wa(e, t) { return so(ni(e), Aa(t, 0, e.length)) }

                        function Da(e) { return so(ni(e)) }

                        function xa(e, t, n) {
                            (n === r || _s(e[t], n)) && (n !== r || t in e) || Oa(e, t, n) }

                        function Ta(e, t, n) { var a = e[t];
                            lt.call(e, t) && _s(a, n) && (n !== r || t in e) || Oa(e, t, n) }

                        function Sa(e, t) { for (var n = e.length; n--;)
                                if (_s(e[n][0], t)) return n;
                            return -1 }

                        function Ha(e, t, n, a) { return Ia(e, function(e, r, i) { t(a, e, n(e), i) }), a }

                        function ja(e, t) { return e && ai(t, rd(t), e) }

                        function Oa(e, t, n) { "__proto__" == t && An ? An(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n }

                        function Pa(e, t) { for (var n = -1, i = t.length, o = a(i), s = null == e; ++n < i;) o[n] = s ? r : Qs(e, t[n]); return o }

                        function Aa(e, t, n) { return e == e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e }

                        function Ca(e, t, n, a, i, o) { var s, d = t & c,
                                u = t & h,
                                l = t & _; if (n && (s = i ? n(e, a, i, o) : n(e)), s !== r) return s; if (!xs(e)) return e; var m = gs(e); if (m) { if (s = function(e) { var t = e.length,
                                            n = new e.constructor(t); return t && "string" == typeof e[0] && lt.call(e, "index") && (n.index = e.index, n.input = e.input), n }(e), !d) return ni(e, s) } else { var f = zi(e),
                                    p = f == G || f == q; if (bs(e)) return $r(e, d); if (f == X || f == E || p && !i) { if (s = u || p ? {} : Bi(e), !d) return u ? function(e, t) { return ai(e, Ei(e), t) }(e, function(e, t) { return e && ai(t, id(t), e) }(s, e)) : function(e, t) { return ai(e, Ii(e), t) }(e, ja(s, e)) } else { if (!Dt[f]) return i ? e : {};
                                    s = function(e, t, n) { var a, r, i, o = e.constructor; switch (t) {
                                            case se:
                                                return Zr(e);
                                            case B:
                                            case V:
                                                return new o(+e);
                                            case de:
                                                return function(e, t) { var n = t ? Zr(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.byteLength) }(e, n);
                                            case ue:
                                            case le:
                                            case ce:
                                            case he:
                                            case _e:
                                            case me:
                                            case fe:
                                            case pe:
                                            case ge:
                                                return Xr(e, n);
                                            case K:
                                                return new o;
                                            case $:
                                            case ne:
                                                return new o(e);
                                            case ee:
                                                return (i = new(r = e).constructor(r.source, Ne.exec(r))).lastIndex = r.lastIndex, i;
                                            case te:
                                                return new o;
                                            case ae:
                                                return a = e, ca ? tt(ca.call(a)) : {} } }(e, f, d) } }
                            o || (o = new La); var g = o.get(e); if (g) return g;
                            o.set(e, s), Ps(e) ? e.forEach(function(a) { s.add(Ca(a, t, n, a, e, o)) }) : Ss(e) && e.forEach(function(a, r) { s.set(r, Ca(a, t, n, r, e, o)) }); var y = m ? r : (l ? u ? ji : Hi : u ? id : rd)(e); return Jt(y || e, function(a, r) { y && (a = e[r = a]), Ta(s, r, Ca(a, t, n, r, e, o)) }), s }

                        function Ra(e, t, n) { var a = n.length; if (null == e) return !a; for (e = tt(e); a--;) { var i = n[a],
                                    o = t[i],
                                    s = e[i]; if (s === r && !(i in e) || !o(s)) return !1 } return !0 }

                        function Wa(e, t, n) { if ("function" != typeof e) throw new rt(s); return ao(function() { e.apply(r, n) }, t) }

                        function Fa(e, t, n, a) { var r = -1,
                                o = $t,
                                s = !0,
                                d = e.length,
                                u = [],
                                l = t.length; if (!d) return u;
                            n && (t = Xt(t, pn(n))), a ? (o = Zt, s = !1) : t.length >= i && (o = yn, s = !1, t = new ba(t));
                            e: for (; ++r < d;) { var c = e[r],
                                    h = null == n ? c : n(c); if (c = a || 0 !== c ? c : 0, s && h == h) { for (var _ = l; _--;)
                                        if (t[_] === h) continue e;
                                    u.push(c) } else o(t, h, a) || u.push(c) }
                            return u }
                        _a.templateSettings = { escape: we, evaluate: De, interpolate: xe, variable: "", imports: { _: _a } }, _a.prototype = fa.prototype, _a.prototype.constructor = _a, pa.prototype = ma(fa.prototype), pa.prototype.constructor = pa, ga.prototype = ma(fa.prototype), ga.prototype.constructor = ga, ya.prototype.clear = function() { this.__data__ = na ? na(null) : {}, this.size = 0 }, ya.prototype.delete = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t }, ya.prototype.get = function(e) { var t = this.__data__; if (na) { var n = t[e]; return n === d ? r : n } return lt.call(t, e) ? t[e] : r }, ya.prototype.has = function(e) { var t = this.__data__; return na ? t[e] !== r : lt.call(t, e) }, ya.prototype.set = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = na && t === r ? d : t, this }, Ma.prototype.clear = function() { this.__data__ = [], this.size = 0 }, Ma.prototype.delete = function(e) { var t = this.__data__,
                                n = Sa(t, e); return !(n < 0 || (n == t.length - 1 ? t.pop() : Rt.call(t, n, 1), --this.size, 0)) }, Ma.prototype.get = function(e) { var t = this.__data__,
                                n = Sa(t, e); return n < 0 ? r : t[n][1] }, Ma.prototype.has = function(e) { return Sa(this.__data__, e) > -1 }, Ma.prototype.set = function(e, t) { var n = this.__data__,
                                a = Sa(n, e); return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this }, va.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new ya, map: new(Xn || Ma), string: new ya } }, va.prototype.delete = function(e) { var t = Ri(this, e).delete(e); return this.size -= t ? 1 : 0, t }, va.prototype.get = function(e) { return Ri(this, e).get(e) }, va.prototype.has = function(e) { return Ri(this, e).has(e) }, va.prototype.set = function(e, t) { var n = Ri(this, e),
                                a = n.size; return n.set(e, t), this.size += n.size == a ? 0 : 1, this }, ba.prototype.add = ba.prototype.push = function(e) { return this.__data__.set(e, d), this }, ba.prototype.has = function(e) { return this.__data__.has(e) }, La.prototype.clear = function() { this.__data__ = new Ma, this.size = 0 }, La.prototype.delete = function(e) { var t = this.__data__,
                                n = t.delete(e); return this.size = t.size, n }, La.prototype.get = function(e) { return this.__data__.get(e) }, La.prototype.has = function(e) { return this.__data__.has(e) }, La.prototype.set = function(e, t) { var n = this.__data__; if (n instanceof Ma) { var a = n.__data__; if (!Xn || a.length < i - 1) return a.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new va(a) } return n.set(e, t), this.size = n.size, this }; var Ia = oi(Ga),
                            Ea = oi(qa, !0);

                        function za(e, t) { var n = !0; return Ia(e, function(e, a, r) { return n = !!t(e, a, r) }), n }

                        function Na(e, t, n) { for (var a = -1, i = e.length; ++a < i;) { var o = e[a],
                                    s = t(o); if (null != s && (d === r ? s == s && !Cs(s) : n(s, d))) var d = s,
                                    u = o } return u }

                        function Ba(e, t) { var n = []; return Ia(e, function(e, a, r) { t(e, a, r) && n.push(e) }), n }

                        function Va(e, t, n, a, r) { var i = -1,
                                o = e.length; for (n || (n = Vi), r || (r = []); ++i < o;) { var s = e[i];
                                t > 0 && n(s) ? t > 1 ? Va(s, t - 1, n, a, r) : Qt(r, s) : a || (r[r.length] = s) } return r } var Ua = si(),
                            Ja = si(!0);

                        function Ga(e, t) { return e && Ua(e, t, rd) }

                        function qa(e, t) { return e && Ja(e, t, rd) }

                        function Ka(e, t) { return Kt(t, function(t) { return Ys(e[t]) }) }

                        function $a(e, t) { for (var n = 0, a = (t = Jr(t, e)).length; null != e && n < a;) e = e[lo(t[n++])]; return n && n == a ? e : r }

                        function Za(e, t, n) { var a = t(e); return gs(e) ? a : Qt(a, n(e)) }

                        function Xa(e) { return null == e ? e === r ? re : Z : hn && hn in tt(e) ? function(e) { var t = lt.call(e, hn),
                                    n = e[hn]; try { e[hn] = r; var a = !0 } catch (o) {} var i = _t.call(e); return a && (t ? e[hn] = n : delete e[hn]), i }(e) : function(e) { return _t.call(e) }(e) }

                        function Qa(e, t) { return e > t }

                        function er(e, t) { return null != e && lt.call(e, t) }

                        function tr(e, t) { return null != e && t in tt(e) }

                        function nr(e, t, n) { for (var i = n ? Zt : $t, o = e[0].length, s = e.length, d = s, u = a(s), l = 1 / 0, c = []; d--;) { var h = e[d];
                                d && t && (h = Xt(h, pn(t))), l = Jn(h.length, l), u[d] = !n && (t || o >= 120 && h.length >= 120) ? new ba(d && h) : r }
                            h = e[0]; var _ = -1,
                                m = u[0];
                            e: for (; ++_ < o && c.length < l;) { var f = h[_],
                                    p = t ? t(f) : f; if (f = n || 0 !== f ? f : 0, !(m ? yn(m, p) : i(c, p, n))) { for (d = s; --d;) { var g = u[d]; if (!(g ? yn(g, p) : i(e[d], p, n))) continue e }
                                    m && m.push(p), c.push(f) } }
                            return c }

                        function ar(e, t, n) { var a = null == (e = eo(e, t = Jr(t, e))) ? e : e[lo(ko(t))]; return null == a ? r : Vt(a, e, n) }

                        function rr(e) { return Ts(e) && Xa(e) == E }

                        function ir(e, t, n, a, i) { return e === t || (null == e || null == t || !Ts(e) && !Ts(t) ? e != e && t != t : function(e, t, n, a, i, o) { var s = gs(e),
                                    d = gs(t),
                                    u = s ? z : zi(e),
                                    l = d ? z : zi(t),
                                    c = (u = u == E ? X : u) == X,
                                    h = (l = l == E ? X : l) == X,
                                    _ = u == l; if (_ && bs(e)) { if (!bs(t)) return !1;
                                    s = !0, c = !1 } if (_ && !c) return o || (o = new La), s || Rs(e) ? Ti(e, t, n, a, i, o) : function(e, t, n, a, r, i, o) { switch (n) {
                                        case de:
                                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                            e = e.buffer, t = t.buffer;
                                        case se:
                                            return !(e.byteLength != t.byteLength || !i(new xt(e), new xt(t)));
                                        case B:
                                        case V:
                                        case $:
                                            return _s(+e, +t);
                                        case J:
                                            return e.name == t.name && e.message == t.message;
                                        case ee:
                                        case ne:
                                            return e == t + "";
                                        case K:
                                            var s = wn;
                                        case te:
                                            var d = a & m; if (s || (s = Tn), e.size != t.size && !d) return !1; var u = o.get(e); if (u) return u == t;
                                            a |= f, o.set(e, t); var l = Ti(s(e), s(t), a, r, i, o); return o.delete(e), l;
                                        case ae:
                                            if (ca) return ca.call(e) == ca.call(t) } return !1 }(e, t, u, n, a, i, o); if (!(n & m)) { var p = c && lt.call(e, "__wrapped__"),
                                        g = h && lt.call(t, "__wrapped__"); if (p || g) { var y = p ? e.value() : e,
                                            M = g ? t.value() : t; return o || (o = new La), i(y, M, n, a, o) } } return !!_ && (o || (o = new La), function(e, t, n, a, i, o) { var s = n & m,
                                        d = Hi(e),
                                        u = d.length,
                                        l = Hi(t).length; if (u != l && !s) return !1; for (var c = u; c--;) { var h = d[c]; if (!(s ? h in t : lt.call(t, h))) return !1 } var _ = o.get(e); if (_ && o.get(t)) return _ == t; var f = !0;
                                    o.set(e, t), o.set(t, e); for (var p = s; ++c < u;) { h = d[c]; var g = e[h],
                                            y = t[h]; if (a) var M = s ? a(y, g, h, t, e, o) : a(g, y, h, e, t, o); if (!(M === r ? g === y || i(g, y, n, a, o) : M)) { f = !1; break }
                                        p || (p = "constructor" == h) } if (f && !p) { var v = e.constructor,
                                            b = t.constructor;
                                        v != b && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof b && b instanceof b) && (f = !1) } return o.delete(e), o.delete(t), f }(e, t, n, a, i, o)) }(e, t, n, a, ir, i)) }

                        function or(e, t, n, a) { var i = n.length,
                                o = i,
                                s = !a; if (null == e) return !o; for (e = tt(e); i--;) { var d = n[i]; if (s && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1 } for (; ++i < o;) { var u = (d = n[i])[0],
                                    l = e[u],
                                    c = d[1]; if (s && d[2]) { if (l === r && !(u in e)) return !1 } else { var h = new La; if (a) var _ = a(l, c, u, e, t, h); if (!(_ === r ? ir(c, l, m | f, a, h) : _)) return !1 } } return !0 }

                        function sr(e) { return !(!xs(e) || (t = e, ht && ht in t)) && (Ys(e) ? pt : Ue).test(co(e)); var t }

                        function dr(e) { return "function" == typeof e ? e : null == e ? Hd : "object" == typeof e ? gs(e) ? mr(e[0], e[1]) : _r(e) : Id(e) }

                        function ur(e) { if (!$i(e)) return Vn(e); var t = []; for (var n in tt(e)) lt.call(e, n) && "constructor" != n && t.push(n); return t }

                        function lr(e) { if (!xs(e)) return function(e) { var t = []; if (null != e)
                                    for (var n in tt(e)) t.push(n); return t }(e); var t = $i(e),
                                n = []; for (var a in e)("constructor" != a || !t && lt.call(e, a)) && n.push(a); return n }

                        function cr(e, t) { return e < t }

                        function hr(e, t) { var n = -1,
                                r = Ms(e) ? a(e.length) : []; return Ia(e, function(e, a, i) { r[++n] = t(e, a, i) }), r }

                        function _r(e) { var t = Wi(e); return 1 == t.length && t[0][2] ? Xi(t[0][0], t[0][1]) : function(n) { return n === e || or(n, e, t) } }

                        function mr(e, t) { return Gi(e) && Zi(t) ? Xi(lo(e), t) : function(n) { var a = Qs(n, e); return a === r && a === t ? ed(n, e) : ir(t, a, m | f) } }

                        function fr(e, t, n, a, i) { e !== t && Ua(t, function(o, s) { if (i || (i = new La), xs(o)) ! function(e, t, n, a, i, o, s) { var d = to(e, n),
                                        u = to(t, n),
                                        l = s.get(u); if (l) xa(e, n, l);
                                    else { var c = o ? o(d, u, n + "", e, t, s) : r,
                                            h = c === r; if (h) { var _ = gs(u),
                                                m = !_ && bs(u),
                                                f = !_ && !m && Rs(u);
                                            c = u, _ || m || f ? gs(d) ? c = d : vs(d) ? c = ni(d) : m ? (h = !1, c = $r(u, !0)) : f ? (h = !1, c = Xr(u, !0)) : c = [] : js(u) || ps(u) ? (c = d, ps(d) ? c = Vs(d) : xs(d) && !Ys(d) || (c = Bi(u))) : h = !1 }
                                        h && (s.set(u, c), i(c, u, a, o, s), s.delete(u)), xa(e, n, c) } }(e, t, s, n, fr, a, i);
                                else { var d = a ? a(to(e, s), o, s + "", e, t, i) : r;
                                    d === r && (d = o), xa(e, s, d) } }, id) }

                        function pr(e, t) { var n = e.length; if (n) return Ui(t += t < 0 ? n : 0, n) ? e[t] : r }

                        function gr(e, t, n) { var a = -1; return t = Xt(t.length ? t : [Hd], pn(Ci())),
                                function(e, t) { var n = e.length; for (e.sort(t); n--;) e[n] = e[n].value; return e }(hr(e, function(e, n, r) { return { criteria: Xt(t, function(t) { return t(e) }), index: ++a, value: e } }), function(e, t) { return function(e, t, n) { for (var a = -1, r = e.criteria, i = t.criteria, o = r.length, s = n.length; ++a < o;) { var d = Qr(r[a], i[a]); if (d) { if (a >= s) return d; var u = n[a]; return d * ("desc" == u ? -1 : 1) } } return e.index - t.index }(e, t, n) }) }

                        function yr(e, t, n) { for (var a = -1, r = t.length, i = {}; ++a < r;) { var o = t[a],
                                    s = $a(e, o);
                                n(s, o) && Dr(i, Jr(o, e), s) } return i }

                        function Mr(e, t, n, a) { var r = a ? dn : sn,
                                i = -1,
                                o = t.length,
                                s = e; for (e === t && (t = ni(t)), n && (s = Xt(e, pn(n))); ++i < o;)
                                for (var d = 0, u = t[i], l = n ? n(u) : u;
                                    (d = r(s, l, d, a)) > -1;) s !== e && Rt.call(s, d, 1), Rt.call(e, d, 1); return e }

                        function vr(e, t) { for (var n = e ? t.length : 0, a = n - 1; n--;) { var r = t[n]; if (n == a || r !== i) { var i = r;
                                    Ui(r) ? Rt.call(e, r, 1) : Fr(e, r) } } return e }

                        function br(e, t) { return e + In(Kn() * (t - e + 1)) }

                        function Lr(e, t) { var n = ""; if (!e || t < 1 || t > P) return n;
                            do { t % 2 && (n += e), (t = In(t / 2)) && (e += e) } while (t); return n }

                        function kr(e, t) { return ro(Qi(e, t, Hd), e + "") }

                        function Yr(e) { return Ya(_d(e)) }

                        function wr(e, t) { var n = _d(e); return so(n, Aa(t, 0, n.length)) }

                        function Dr(e, t, n, a) { if (!xs(e)) return e; for (var i = -1, o = (t = Jr(t, e)).length, s = o - 1, d = e; null != d && ++i < o;) { var u = lo(t[i]),
                                    l = n; if (i != s) { var c = d[u];
                                    (l = a ? a(c, u, d) : r) === r && (l = xs(c) ? c : Ui(t[i + 1]) ? [] : {}) }
                                Ta(d, u, l), d = d[u] } return e } var xr = aa ? function(e, t) { return aa.set(e, t), e } : Hd,
                            Tr = An ? function(e, t) { return An(e, "toString", { configurable: !0, enumerable: !1, value: xd(t), writable: !0 }) } : Hd;

                        function Sr(e) { return so(_d(e)) }

                        function Hr(e, t, n) { var r = -1,
                                i = e.length;
                            t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0; for (var o = a(i); ++r < i;) o[r] = e[r + t]; return o }

                        function jr(e, t) { var n; return Ia(e, function(e, a, r) { return !(n = t(e, a, r)) }), !!n }

                        function Or(e, t, n) { var a = 0,
                                r = null == e ? a : e.length; if ("number" == typeof t && t == t && r <= F) { for (; a < r;) { var i = a + r >>> 1,
                                        o = e[i];
                                    null !== o && !Cs(o) && (n ? o <= t : o < t) ? a = i + 1 : r = i } return r } return Pr(e, t, Hd, n) }

                        function Pr(e, t, n, a) { t = n(t); for (var i = 0, o = null == e ? 0 : e.length, s = t != t, d = null === t, u = Cs(t), l = t === r; i < o;) { var c = In((i + o) / 2),
                                    h = n(e[c]),
                                    _ = h !== r,
                                    m = null === h,
                                    f = h == h,
                                    p = Cs(h); if (s) var g = a || f;
                                else g = l ? f && (a || _) : d ? f && _ && (a || !m) : u ? f && _ && !m && (a || !p) : !m && !p && (a ? h <= t : h < t);
                                g ? i = c + 1 : o = c } return Jn(o, W) }

                        function Ar(e, t) { for (var n = -1, a = e.length, r = 0, i = []; ++n < a;) { var o = e[n],
                                    s = t ? t(o) : o; if (!n || !_s(s, d)) { var d = s;
                                    i[r++] = 0 === o ? 0 : o } } return i }

                        function Cr(e) { return "number" == typeof e ? e : Cs(e) ? C : +e }

                        function Rr(e) { if ("string" == typeof e) return e; if (gs(e)) return Xt(e, Rr) + ""; if (Cs(e)) return ha ? ha.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -O ? "-0" : t }

                        function Wr(e, t, n) { var a = -1,
                                r = $t,
                                o = e.length,
                                s = !0,
                                d = [],
                                u = d; if (n) s = !1, r = Zt;
                            else if (o >= i) { var l = t ? null : Li(e); if (l) return Tn(l);
                                s = !1, r = yn, u = new ba } else u = t ? [] : d;
                            e: for (; ++a < o;) { var c = e[a],
                                    h = t ? t(c) : c; if (c = n || 0 !== c ? c : 0, s && h == h) { for (var _ = u.length; _--;)
                                        if (u[_] === h) continue e;
                                    t && u.push(h), d.push(c) } else r(u, h, n) || (u !== d && u.push(h), d.push(c)) }
                            return d }

                        function Fr(e, t) { return null == (e = eo(e, t = Jr(t, e))) || delete e[lo(ko(t))] }

                        function Ir(e, t, n, a) { return Dr(e, t, n($a(e, t)), a) }

                        function Er(e, t, n, a) { for (var r = e.length, i = a ? r : -1;
                                (a ? i-- : ++i < r) && t(e[i], i, e);); return n ? Hr(e, a ? 0 : i, a ? i + 1 : r) : Hr(e, a ? i + 1 : 0, a ? r : i) }

                        function zr(e, t) { var n = e; return n instanceof ga && (n = n.value()), en(t, function(e, t) { return t.func.apply(t.thisArg, Qt([e], t.args)) }, n) }

                        function Nr(e, t, n) { var r = e.length; if (r < 2) return r ? Wr(e[0]) : []; for (var i = -1, o = a(r); ++i < r;)
                                for (var s = e[i], d = -1; ++d < r;) d != i && (o[i] = Fa(o[i] || s, e[d], t, n)); return Wr(Va(o, 1), t, n) }

                        function Br(e, t, n) { for (var a = -1, i = e.length, o = t.length, s = {}; ++a < i;) { var d = a < o ? t[a] : r;
                                n(s, e[a], d) } return s }

                        function Vr(e) { return vs(e) ? e : [] }

                        function Ur(e) { return "function" == typeof e ? e : Hd }

                        function Jr(e, t) { return gs(e) ? e : Gi(e, t) ? [e] : uo(Us(e)) } var Gr = kr;

                        function qr(e, t, n) { var a = e.length; return n = n === r ? a : n, !t && n >= a ? e : Hr(e, t, n) } var Kr = Cn || function(e) { return Ot.clearTimeout(e) };

                        function $r(e, t) { if (t) return e.slice(); var n = e.length,
                                a = Ht ? Ht(n) : new e.constructor(n); return e.copy(a), a }

                        function Zr(e) { var t = new e.constructor(e.byteLength); return new xt(t).set(new xt(e)), t }

                        function Xr(e, t) { var n = t ? Zr(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.length) }

                        function Qr(e, t) { if (e !== t) { var n = e !== r,
                                    a = null === e,
                                    i = e == e,
                                    o = Cs(e),
                                    s = t !== r,
                                    d = null === t,
                                    u = t == t,
                                    l = Cs(t); if (!d && !l && !o && e > t || o && s && u && !d && !l || a && s && u || !n && u || !i) return 1; if (!a && !o && !l && e < t || l && n && i && !a && !o || d && n && i || !s && i || !u) return -1 } return 0 }

                        function ei(e, t, n, r) { for (var i = -1, o = e.length, s = n.length, d = -1, u = t.length, l = Un(o - s, 0), c = a(u + l), h = !r; ++d < u;) c[d] = t[d]; for (; ++i < s;)(h || i < o) && (c[n[i]] = e[i]); for (; l--;) c[d++] = e[i++]; return c }

                        function ti(e, t, n, r) { for (var i = -1, o = e.length, s = -1, d = n.length, u = -1, l = t.length, c = Un(o - d, 0), h = a(c + l), _ = !r; ++i < c;) h[i] = e[i]; for (var m = i; ++u < l;) h[m + u] = t[u]; for (; ++s < d;)(_ || i < o) && (h[m + n[s]] = e[i++]); return h }

                        function ni(e, t) { var n = -1,
                                r = e.length; for (t || (t = a(r)); ++n < r;) t[n] = e[n]; return t }

                        function ai(e, t, n, a) { var i = !n;
                            n || (n = {}); for (var o = -1, s = t.length; ++o < s;) { var d = t[o],
                                    u = a ? a(n[d], e[d], d, n, e) : r;
                                u === r && (u = e[d]), i ? Oa(n, d, u) : Ta(n, d, u) } return n }

                        function ri(e, t) { return function(n, a) { var r = gs(n) ? Ut : Ha,
                                    i = t ? t() : {}; return r(n, e, Ci(a, 2), i) } }

                        function ii(e) { return kr(function(t, n) { var a = -1,
                                    i = n.length,
                                    o = i > 1 ? n[i - 1] : r,
                                    s = i > 2 ? n[2] : r; for (o = e.length > 3 && "function" == typeof o ? (i--, o) : r, s && Ji(n[0], n[1], s) && (o = i < 3 ? r : o, i = 1), t = tt(t); ++a < i;) { var d = n[a];
                                    d && e(t, d, a, o) } return t }) }

                        function oi(e, t) { return function(n, a) { if (null == n) return n; if (!Ms(n)) return e(n, a); for (var r = n.length, i = t ? r : -1, o = tt(n);
                                    (t ? i-- : ++i < r) && !1 !== a(o[i], i, o);); return n } }

                        function si(e) { return function(t, n, a) { for (var r = -1, i = tt(t), o = a(t), s = o.length; s--;) { var d = o[e ? s : ++r]; if (!1 === n(i[d], d, i)) break } return t } }

                        function di(e) { return function(t) { var n = Yn(t = Us(t)) ? jn(t) : r,
                                    a = n ? n[0] : t.charAt(0),
                                    i = n ? qr(n, 1).join("") : t.slice(1); return a[e]() + i } }

                        function ui(e) { return function(t) { return en(Yd(pd(t).replace(gt, "")), e, "") } }

                        function li(e) { return function() { var t = arguments; switch (t.length) {
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
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]) } var n = ma(e.prototype),
                                    a = e.apply(n, t); return xs(a) ? a : n } }

                        function ci(e) { return function(t, n, a) { var i = tt(t); if (!Ms(t)) { var o = Ci(n, 3);
                                    t = rd(t), n = function(e) { return o(i[e], e, i) } } var s = e(t, n, a); return s > -1 ? i[o ? t[s] : s] : r } }

                        function hi(e) { return Si(function(t) { var n = t.length,
                                    a = n,
                                    i = pa.prototype.thru; for (e && t.reverse(); a--;) { var o = t[a]; if ("function" != typeof o) throw new rt(s); if (i && !d && "wrapper" == Pi(o)) var d = new pa([], !0) } for (a = d ? a : n; ++a < n;) { var u = Pi(o = t[a]),
                                        l = "wrapper" == u ? Oi(o) : r;
                                    d = l && qi(l[0]) && l[1] == (k | M | b | Y) && !l[4].length && 1 == l[9] ? d[Pi(l[0])].apply(d, l[3]) : 1 == o.length && qi(o) ? d[u]() : d.thru(o) } return function() { var e = arguments,
                                        a = e[0]; if (d && 1 == e.length && gs(a)) return d.plant(a).value(); for (var r = 0, i = n ? t[r].apply(this, e) : a; ++r < n;) i = t[r].call(this, i); return i } }) }

                        function _i(e, t, n, i, o, s, d, u, l, c) { var h = t & k,
                                _ = t & p,
                                m = t & g,
                                f = t & (M | v),
                                y = t & w,
                                b = m ? r : li(e); return function p() { for (var g = arguments.length, M = a(g), v = g; v--;) M[v] = arguments[v]; if (f) var L = Ai(p),
                                    k = function(e, t) { for (var n = e.length, a = 0; n--;) e[n] === t && ++a; return a }(M, L); if (i && (M = ei(M, i, o, f)), s && (M = ti(M, s, d, f)), g -= k, f && g < c) { var Y = xn(M, L); return vi(e, t, _i, p.placeholder, n, M, Y, u, l, c - g) } var w = _ ? n : this,
                                    D = m ? w[e] : e; return g = M.length, u ? M = function(e, t) { for (var n = e.length, a = Jn(t.length, n), i = ni(e); a--;) { var o = t[a];
                                        e[a] = Ui(o, n) ? i[o] : r } return e }(M, u) : y && g > 1 && M.reverse(), h && l < g && (M.length = l), this && this !== Ot && this instanceof p && (D = b || li(D)), D.apply(w, M) } }

                        function mi(e, t) { return function(n, a) { return function(e, t, n, a) { return Ga(e, function(e, r, i) { t(a, n(e), r, i) }), a }(n, e, t(a), {}) } }

                        function fi(e, t) { return function(n, a) { var i; if (n === r && a === r) return t; if (n !== r && (i = n), a !== r) { if (i === r) return a; "string" == typeof n || "string" == typeof a ? (n = Rr(n), a = Rr(a)) : (n = Cr(n), a = Cr(a)), i = e(n, a) } return i } }

                        function pi(e) { return Si(function(t) { return t = Xt(t, pn(Ci())), kr(function(n) { var a = this; return e(t, function(e) { return Vt(e, a, n) }) }) }) }

                        function gi(e, t) { var n = (t = t === r ? " " : Rr(t)).length; if (n < 2) return n ? Lr(t, e) : t; var a = Lr(t, Fn(e / Hn(t))); return Yn(t) ? qr(jn(a), 0, e).join("") : a.slice(0, e) }

                        function yi(e) { return function(t, n, i) { return i && "number" != typeof i && Ji(t, n, i) && (n = i = r), t = Es(t), n === r ? (n = t, t = 0) : n = Es(n),
                                    function(e, t, n, r) { for (var i = -1, o = Un(Fn((t - e) / (n || 1)), 0), s = a(o); o--;) s[r ? o : ++i] = e, e += n; return s }(t, n, i = i === r ? t < n ? 1 : -1 : Es(i), e) } }

                        function Mi(e) { return function(t, n) { return "string" == typeof t && "string" == typeof n || (t = Bs(t), n = Bs(n)), e(t, n) } }

                        function vi(e, t, n, a, i, o, s, d, u, l) { var c = t & M;
                            t |= c ? b : L, (t &= ~(c ? L : b)) & y || (t &= ~(p | g)); var h = [e, t, i, c ? o : r, c ? s : r, c ? r : o, c ? r : s, d, u, l],
                                _ = n.apply(r, h); return qi(e) && no(_, h), _.placeholder = a, io(_, e, t) }

                        function bi(e) { var t = et[e]; return function(e, n) { if (e = Bs(e), (n = null == n ? 0 : Jn(zs(n), 292)) && Nn(e)) { var a = (Us(e) + "e").split("e"); return +((a = (Us(t(a[0] + "e" + (+a[1] + n))) + "e").split("e"))[0] + "e" + (+a[1] - n)) } return t(e) } } var Li = ea && 1 / Tn(new ea([, -0]))[1] == O ? function(e) { return new ea(e) } : Cd;

                        function ki(e) { return function(t) { var n = zi(t); return n == K ? wn(t) : n == te ? Sn(t) : function(e, t) { return Xt(t, function(t) { return [t, e[t]] }) }(t, e(t)) } }

                        function Yi(e, t, n, i, o, d, u, c) { var h = t & g; if (!h && "function" != typeof e) throw new rt(s); var _ = i ? i.length : 0; if (_ || (t &= ~(b | L), i = o = r), u = u === r ? u : Un(zs(u), 0), c = c === r ? c : zs(c), _ -= o ? o.length : 0, t & L) { var m = i,
                                    f = o;
                                i = o = r } var w = h ? r : Oi(e),
                                D = [e, t, n, i, o, m, f, d, u, c]; if (w && function(e, t) { var n = e[1],
                                        a = t[1],
                                        r = n | a,
                                        i = r < (p | g | k),
                                        o = a == k && n == M || a == k && n == Y && e[7].length <= t[8] || a == (k | Y) && t[7].length <= t[8] && n == M; if (!i && !o) return e;
                                    a & p && (e[2] = t[2], r |= n & p ? 0 : y); var s = t[3]; if (s) { var d = e[3];
                                        e[3] = d ? ei(d, s, t[4]) : s, e[4] = d ? xn(e[3], l) : t[4] }(s = t[5]) && (d = e[5], e[5] = d ? ti(d, s, t[6]) : s, e[6] = d ? xn(e[5], l) : t[6]), (s = t[7]) && (e[7] = s), a & k && (e[8] = null == e[8] ? t[8] : Jn(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r }(D, w), e = D[0], t = D[1], n = D[2], i = D[3], o = D[4], !(c = D[9] = D[9] === r ? h ? 0 : e.length : Un(D[9] - _, 0)) && t & (M | v) && (t &= ~(M | v)), t && t != p) x = t == M || t == v ? function(e, t, n) { var i = li(e); return function o() { for (var s = arguments.length, d = a(s), u = s, l = Ai(o); u--;) d[u] = arguments[u]; var c = s < 3 && d[0] !== l && d[s - 1] !== l ? [] : xn(d, l); return (s -= c.length) < n ? vi(e, t, _i, o.placeholder, r, d, c, r, r, n - s) : Vt(this && this !== Ot && this instanceof o ? i : e, this, d) } }(e, t, c) : t != b && t != (p | b) || o.length ? _i.apply(r, D) : function(e, t, n, r) { var i = t & p,
                                    o = li(e); return function t() { for (var s = -1, d = arguments.length, u = -1, l = r.length, c = a(l + d), h = this && this !== Ot && this instanceof t ? o : e; ++u < l;) c[u] = r[u]; for (; d--;) c[u++] = arguments[++s]; return Vt(h, i ? n : this, c) } }(e, t, n, i);
                            else var x = function(e, t, n) { var a = t & p,
                                    r = li(e); return function t() { return (this && this !== Ot && this instanceof t ? r : e).apply(a ? n : this, arguments) } }(e, t, n); return io((w ? xr : no)(x, D), e, t) }

                        function wi(e, t, n, a) { return e === r || _s(e, st[n]) && !lt.call(a, n) ? t : e }

                        function Di(e, t, n, a, i, o) { return xs(e) && xs(t) && (o.set(t, e), fr(e, t, r, Di, o), o.delete(t)), e }

                        function xi(e) { return js(e) ? r : e }

                        function Ti(e, t, n, a, i, o) { var s = n & m,
                                d = e.length,
                                u = t.length; if (d != u && !(s && u > d)) return !1; var l = o.get(e); if (l && o.get(t)) return l == t; var c = -1,
                                h = !0,
                                _ = n & f ? new ba : r; for (o.set(e, t), o.set(t, e); ++c < d;) { var p = e[c],
                                    g = t[c]; if (a) var y = s ? a(g, p, c, t, e, o) : a(p, g, c, e, t, o); if (y !== r) { if (y) continue;
                                    h = !1; break } if (_) { if (!nn(t, function(e, t) { if (!yn(_, t) && (p === e || i(p, e, n, a, o))) return _.push(t) })) { h = !1; break } } else if (p !== g && !i(p, g, n, a, o)) { h = !1; break } } return o.delete(e), o.delete(t), h }

                        function Si(e) { return ro(Qi(e, r, yo), e + "") }

                        function Hi(e) { return Za(e, rd, Ii) }

                        function ji(e) { return Za(e, id, Ei) } var Oi = aa ? function(e) { return aa.get(e) } : Cd;

                        function Pi(e) { for (var t = e.name + "", n = ra[t], a = lt.call(ra, t) ? n.length : 0; a--;) { var r = n[a],
                                    i = r.func; if (null == i || i == e) return r.name } return t }

                        function Ai(e) { return (lt.call(_a, "placeholder") ? _a : e).placeholder }

                        function Ci() { var e = _a.iteratee || jd; return e = e === jd ? dr : e, arguments.length ? e(arguments[0], arguments[1]) : e }

                        function Ri(e, t) { var n, a, r = e.__data__; return ("string" == (a = typeof(n = t)) || "number" == a || "symbol" == a || "boolean" == a ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map }

                        function Wi(e) { for (var t = rd(e), n = t.length; n--;) { var a = t[n],
                                    r = e[a];
                                t[n] = [a, r, Zi(r)] } return t }

                        function Fi(e, t) { var n = function(e, t) { return null == e ? r : e[t] }(e, t); return sr(n) ? n : r } var Ii = En ? function(e) { return null == e ? [] : (e = tt(e), Kt(En(e), function(t) { return At.call(e, t) })) } : Nd,
                            Ei = En ? function(e) { for (var t = []; e;) Qt(t, Ii(e)), e = jt(e); return t } : Nd,
                            zi = Xa;

                        function Ni(e, t, n) { for (var a = -1, r = (t = Jr(t, e)).length, i = !1; ++a < r;) { var o = lo(t[a]); if (!(i = null != e && n(e, o))) break;
                                e = e[o] } return i || ++a != r ? i : !!(r = null == e ? 0 : e.length) && Ds(r) && Ui(o, r) && (gs(e) || ps(e)) }

                        function Bi(e) { return "function" != typeof e.constructor || $i(e) ? {} : ma(jt(e)) }

                        function Vi(e) { return gs(e) || ps(e) || !!(Wt && e && e[Wt]) }

                        function Ui(e, t) { var n = typeof e; return !!(t = null == t ? P : t) && ("number" == n || "symbol" != n && Ge.test(e)) && e > -1 && e % 1 == 0 && e < t }

                        function Ji(e, t, n) { if (!xs(n)) return !1; var a = typeof t; return !!("number" == a ? Ms(n) && Ui(t, n.length) : "string" == a && t in n) && _s(n[t], e) }

                        function Gi(e, t) { if (gs(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Cs(e)) || Se.test(e) || !Te.test(e) || null != t && e in tt(t) }

                        function qi(e) { var t = Pi(e),
                                n = _a[t]; if ("function" != typeof n || !(t in ga.prototype)) return !1; if (e === n) return !0; var a = Oi(n); return !!a && e === a[0] }(Zn && zi(new Zn(new ArrayBuffer(1))) != de || Xn && zi(new Xn) != K || Qn && "[object Promise]" != zi(Qn.resolve()) || ea && zi(new ea) != te || ta && zi(new ta) != ie) && (zi = function(e) { var t = Xa(e),
                                n = t == X ? e.constructor : r,
                                a = n ? co(n) : ""; if (a) switch (a) {
                                case ia:
                                    return de;
                                case oa:
                                    return K;
                                case sa:
                                    return "[object Promise]";
                                case da:
                                    return te;
                                case ua:
                                    return ie }
                            return t }); var Ki = dt ? Ys : Bd;

                        function $i(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || st) }

                        function Zi(e) { return e == e && !xs(e) }

                        function Xi(e, t) { return function(n) { return null != n && n[e] === t && (t !== r || e in tt(n)) } }

                        function Qi(e, t, n) { return t = Un(t === r ? e.length - 1 : t, 0),
                                function() { for (var r = arguments, i = -1, o = Un(r.length - t, 0), s = a(o); ++i < o;) s[i] = r[t + i];
                                    i = -1; for (var d = a(t + 1); ++i < t;) d[i] = r[i]; return d[t] = n(s), Vt(e, this, d) } }

                        function eo(e, t) { return t.length < 2 ? e : $a(e, Hr(t, 0, -1)) }

                        function to(e, t) { if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t] } var no = oo(xr),
                            ao = Wn || function(e, t) { return Ot.setTimeout(e, t) },
                            ro = oo(Tr);

                        function io(e, t, n) { var a = t + ""; return ro(e, function(e, t) { var n = t.length; if (!n) return e; var a = n - 1; return t[a] = (n > 1 ? "& " : "") + t[a], t = t.join(n > 2 ? ", " : " "), e.replace(Re, "{\n/* [wrapped with " + t + "] */\n") }(a, function(e, t) { return Jt(I, function(n) { var a = "_." + n[0];
                                    t & n[1] && !$t(e, a) && e.push(a) }), e.sort() }(function(e) { var t = e.match(We); return t ? t[1].split(Fe) : [] }(a), n))) }

                        function oo(e) { var t = 0,
                                n = 0; return function() { var a = Gn(),
                                    i = S - (a - n); if (n = a, i > 0) { if (++t >= T) return arguments[0] } else t = 0; return e.apply(r, arguments) } }

                        function so(e, t) { var n = -1,
                                a = e.length,
                                i = a - 1; for (t = t === r ? a : t; ++n < t;) { var o = br(n, i),
                                    s = e[o];
                                e[o] = e[n], e[n] = s } return e.length = t, e } var uo = function(e) { var t = ss(e, function(e) { return n.size === u && n.clear(), e }),
                                n = t.cache; return t }(function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(He, function(e, n, a, r) { t.push(a ? r.replace(Ee, "$1") : n || e) }), t });

                        function lo(e) { if ("string" == typeof e || Cs(e)) return e; var t = e + ""; return "0" == t && 1 / e == -O ? "-0" : t }

                        function co(e) { if (null != e) { try { return ut.call(e) } catch (t) {} try { return e + "" } catch (t) {} } return "" }

                        function ho(e) { if (e instanceof ga) return e.clone(); var t = new pa(e.__wrapped__, e.__chain__); return t.__actions__ = ni(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t } var _o = kr(function(e, t) { return vs(e) ? Fa(e, Va(t, 1, vs, !0)) : [] }),
                            mo = kr(function(e, t) { var n = ko(t); return vs(n) && (n = r), vs(e) ? Fa(e, Va(t, 1, vs, !0), Ci(n, 2)) : [] }),
                            fo = kr(function(e, t) { var n = ko(t); return vs(n) && (n = r), vs(e) ? Fa(e, Va(t, 1, vs, !0), r, n) : [] });

                        function po(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var r = null == n ? 0 : zs(n); return r < 0 && (r = Un(a + r, 0)), on(e, Ci(t, 3), r) }

                        function go(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var i = a - 1; return n !== r && (i = zs(n), i = n < 0 ? Un(a + i, 0) : Jn(i, a - 1)), on(e, Ci(t, 3), i, !0) }

                        function yo(e) { return null != e && e.length ? Va(e, 1) : [] }

                        function Mo(e) { return e && e.length ? e[0] : r } var vo = kr(function(e) { var t = Xt(e, Vr); return t.length && t[0] === e[0] ? nr(t) : [] }),
                            bo = kr(function(e) { var t = ko(e),
                                    n = Xt(e, Vr); return t === ko(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? nr(n, Ci(t, 2)) : [] }),
                            Lo = kr(function(e) { var t = ko(e),
                                    n = Xt(e, Vr); return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? nr(n, r, t) : [] });

                        function ko(e) { var t = null == e ? 0 : e.length; return t ? e[t - 1] : r } var Yo = kr(wo);

                        function wo(e, t) { return e && e.length && t && t.length ? Mr(e, t) : e } var Do = Si(function(e, t) { var n = null == e ? 0 : e.length,
                                a = Pa(e, t); return vr(e, Xt(t, function(e) { return Ui(e, n) ? +e : e }).sort(Qr)), a });

                        function xo(e) { return null == e ? e : $n.call(e) } var To = kr(function(e) { return Wr(Va(e, 1, vs, !0)) }),
                            So = kr(function(e) { var t = ko(e); return vs(t) && (t = r), Wr(Va(e, 1, vs, !0), Ci(t, 2)) }),
                            Ho = kr(function(e) { var t = ko(e); return t = "function" == typeof t ? t : r, Wr(Va(e, 1, vs, !0), r, t) });

                        function jo(e) { if (!e || !e.length) return []; var t = 0; return e = Kt(e, function(e) { if (vs(e)) return t = Un(e.length, t), !0 }), fn(t, function(t) { return Xt(e, cn(t)) }) }

                        function Oo(e, t) { if (!e || !e.length) return []; var n = jo(e); return null == t ? n : Xt(n, function(e) { return Vt(t, r, e) }) } var Po = kr(function(e, t) { return vs(e) ? Fa(e, t) : [] }),
                            Ao = kr(function(e) { return Nr(Kt(e, vs)) }),
                            Co = kr(function(e) { var t = ko(e); return vs(t) && (t = r), Nr(Kt(e, vs), Ci(t, 2)) }),
                            Ro = kr(function(e) { var t = ko(e); return t = "function" == typeof t ? t : r, Nr(Kt(e, vs), r, t) }),
                            Wo = kr(jo); var Fo = kr(function(e) { var t = e.length,
                                n = t > 1 ? e[t - 1] : r; return n = "function" == typeof n ? (e.pop(), n) : r, Oo(e, n) });

                        function Io(e) { var t = _a(e); return t.__chain__ = !0, t }

                        function Eo(e, t) { return t(e) } var zo = Si(function(e) { var t = e.length,
                                n = t ? e[0] : 0,
                                a = this.__wrapped__,
                                i = function(t) { return Pa(t, e) }; return !(t > 1 || this.__actions__.length) && a instanceof ga && Ui(n) ? ((a = a.slice(n, +n + (t ? 1 : 0))).__actions__.push({ func: Eo, args: [i], thisArg: r }), new pa(a, this.__chain__).thru(function(e) { return t && !e.length && e.push(r), e })) : this.thru(i) }); var No = ri(function(e, t, n) { lt.call(e, n) ? ++e[n] : Oa(e, n, 1) }); var Bo = ci(po),
                            Vo = ci(go);

                        function Uo(e, t) { return (gs(e) ? Jt : Ia)(e, Ci(t, 3)) }

                        function Jo(e, t) { return (gs(e) ? Gt : Ea)(e, Ci(t, 3)) } var Go = ri(function(e, t, n) { lt.call(e, n) ? e[n].push(t) : Oa(e, n, [t]) }); var qo = kr(function(e, t, n) { var r = -1,
                                    i = "function" == typeof t,
                                    o = Ms(e) ? a(e.length) : []; return Ia(e, function(e) { o[++r] = i ? Vt(t, e, n) : ar(e, t, n) }), o }),
                            Ko = ri(function(e, t, n) { Oa(e, n, t) });

                        function $o(e, t) { return (gs(e) ? Xt : hr)(e, Ci(t, 3)) } var Zo = ri(function(e, t, n) { e[n ? 0 : 1].push(t) }, function() { return [
                                [],
                                []
                            ] }); var Xo = kr(function(e, t) { if (null == e) return []; var n = t.length; return n > 1 && Ji(e, t[0], t[1]) ? t = [] : n > 2 && Ji(t[0], t[1], t[2]) && (t = [t[0]]), gr(e, Va(t, 1), []) }),
                            Qo = Rn || function() { return Ot.Date.now() };

                        function es(e, t, n) { return t = n ? r : t, t = e && null == t ? e.length : t, Yi(e, k, r, r, r, r, t) }

                        function ts(e, t) { var n; if ("function" != typeof t) throw new rt(s); return e = zs(e),
                                function() { return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n } } var ns = kr(function(e, t, n) { var a = p; if (n.length) { var r = xn(n, Ai(ns));
                                    a |= b } return Yi(e, a, t, n, r) }),
                            as = kr(function(e, t, n) { var a = p | g; if (n.length) { var r = xn(n, Ai(as));
                                    a |= b } return Yi(t, a, e, n, r) });

                        function rs(e, t, n) { var a, i, o, d, u, l, c = 0,
                                h = !1,
                                _ = !1,
                                m = !0; if ("function" != typeof e) throw new rt(s);

                            function f(t) { var n = a,
                                    o = i; return a = i = r, c = t, d = e.apply(o, n) }

                            function p(e) { var n = e - l; return l === r || n >= t || n < 0 || _ && e - c >= o }

                            function g() { var e = Qo(); if (p(e)) return y(e);
                                u = ao(g, function(e) { var n = t - (e - l); return _ ? Jn(n, o - (e - c)) : n }(e)) }

                            function y(e) { return u = r, m && a ? f(e) : (a = i = r, d) }

                            function M() { var e = Qo(),
                                    n = p(e); if (a = arguments, i = this, l = e, n) { if (u === r) return function(e) { return c = e, u = ao(g, t), h ? f(e) : d }(l); if (_) return Kr(u), u = ao(g, t), f(l) } return u === r && (u = ao(g, t)), d } return t = Bs(t) || 0, xs(n) && (h = !!n.leading, o = (_ = "maxWait" in n) ? Un(Bs(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m), M.cancel = function() { u !== r && Kr(u), c = 0, a = l = i = u = r }, M.flush = function() { return u === r ? d : y(Qo()) }, M } var is = kr(function(e, t) { return Wa(e, 1, t) }),
                            os = kr(function(e, t, n) { return Wa(e, Bs(t) || 0, n) });

                        function ss(e, t) { if ("function" != typeof e || null != t && "function" != typeof t) throw new rt(s); var n = function() { var a = arguments,
                                    r = t ? t.apply(this, a) : a[0],
                                    i = n.cache; if (i.has(r)) return i.get(r); var o = e.apply(this, a); return n.cache = i.set(r, o) || i, o }; return n.cache = new(ss.Cache || va), n }

                        function ds(e) { if ("function" != typeof e) throw new rt(s); return function() { var t = arguments; switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2]) } return !e.apply(this, t) } }
                        ss.Cache = va; var us = Gr(function(e, t) { var n = (t = 1 == t.length && gs(t[0]) ? Xt(t[0], pn(Ci())) : Xt(Va(t, 1), pn(Ci()))).length; return kr(function(a) { for (var r = -1, i = Jn(a.length, n); ++r < i;) a[r] = t[r].call(this, a[r]); return Vt(e, this, a) }) }),
                            ls = kr(function(e, t) { var n = xn(t, Ai(ls)); return Yi(e, b, r, t, n) }),
                            cs = kr(function(e, t) { var n = xn(t, Ai(cs)); return Yi(e, L, r, t, n) }),
                            hs = Si(function(e, t) { return Yi(e, Y, r, r, r, t) });

                        function _s(e, t) { return e === t || e != e && t != t } var ms = Mi(Qa),
                            fs = Mi(function(e, t) { return e >= t }),
                            ps = rr(function() { return arguments }()) ? rr : function(e) { return Ts(e) && lt.call(e, "callee") && !At.call(e, "callee") },
                            gs = a.isArray,
                            ys = Ft ? pn(Ft) : function(e) { return Ts(e) && Xa(e) == se };

                        function Ms(e) { return null != e && Ds(e.length) && !Ys(e) }

                        function vs(e) { return Ts(e) && Ms(e) } var bs = zn || Bd,
                            Ls = It ? pn(It) : function(e) { return Ts(e) && Xa(e) == V };

                        function ks(e) { if (!Ts(e)) return !1; var t = Xa(e); return t == J || t == U || "string" == typeof e.message && "string" == typeof e.name && !js(e) }

                        function Ys(e) { if (!xs(e)) return !1; var t = Xa(e); return t == G || t == q || t == N || t == Q }

                        function ws(e) { return "number" == typeof e && e == zs(e) }

                        function Ds(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= P }

                        function xs(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) }

                        function Ts(e) { return null != e && "object" == typeof e } var Ss = Et ? pn(Et) : function(e) { return Ts(e) && zi(e) == K };

                        function Hs(e) { return "number" == typeof e || Ts(e) && Xa(e) == $ }

                        function js(e) { if (!Ts(e) || Xa(e) != X) return !1; var t = jt(e); if (null === t) return !0; var n = lt.call(t, "constructor") && t.constructor; return "function" == typeof n && n instanceof n && ut.call(n) == mt } var Os = zt ? pn(zt) : function(e) { return Ts(e) && Xa(e) == ee }; var Ps = Nt ? pn(Nt) : function(e) { return Ts(e) && zi(e) == te };

                        function As(e) { return "string" == typeof e || !gs(e) && Ts(e) && Xa(e) == ne }

                        function Cs(e) { return "symbol" == typeof e || Ts(e) && Xa(e) == ae } var Rs = Bt ? pn(Bt) : function(e) { return Ts(e) && Ds(e.length) && !!wt[Xa(e)] }; var Ws = Mi(cr),
                            Fs = Mi(function(e, t) { return e <= t });

                        function Is(e) { if (!e) return []; if (Ms(e)) return As(e) ? jn(e) : ni(e); if (an && e[an]) return function(e) { for (var t, n = []; !(t = e.next()).done;) n.push(t.value); return n }(e[an]()); var t = zi(e); return (t == K ? wn : t == te ? Tn : _d)(e) }

                        function Es(e) { return e ? (e = Bs(e)) === O || e === -O ? (e < 0 ? -1 : 1) * A : e == e ? e : 0 : 0 === e ? e : 0 }

                        function zs(e) { var t = Es(e),
                                n = t % 1; return t == t ? n ? t - n : t : 0 }

                        function Ns(e) { return e ? Aa(zs(e), 0, R) : 0 }

                        function Bs(e) { if ("number" == typeof e) return e; if (Cs(e)) return C; if (xs(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = xs(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(Pe, ""); var n = Ve.test(e); return n || Je.test(e) ? St(e.slice(2), n ? 2 : 8) : Be.test(e) ? C : +e }

                        function Vs(e) { return ai(e, id(e)) }

                        function Us(e) { return null == e ? "" : Rr(e) } var Js = ii(function(e, t) { if ($i(t) || Ms(t)) ai(t, rd(t), e);
                                else
                                    for (var n in t) lt.call(t, n) && Ta(e, n, t[n]) }),
                            Gs = ii(function(e, t) { ai(t, id(t), e) }),
                            qs = ii(function(e, t, n, a) { ai(t, id(t), e, a) }),
                            Ks = ii(function(e, t, n, a) { ai(t, rd(t), e, a) }),
                            $s = Si(Pa); var Zs = kr(function(e, t) { e = tt(e); var n = -1,
                                    a = t.length,
                                    i = a > 2 ? t[2] : r; for (i && Ji(t[0], t[1], i) && (a = 1); ++n < a;)
                                    for (var o = t[n], s = id(o), d = -1, u = s.length; ++d < u;) { var l = s[d],
                                            c = e[l];
                                        (c === r || _s(c, st[l]) && !lt.call(e, l)) && (e[l] = o[l]) }
                                return e }),
                            Xs = kr(function(e) { return e.push(r, Di), Vt(sd, r, e) });

                        function Qs(e, t, n) { var a = null == e ? r : $a(e, t); return a === r ? n : a }

                        function ed(e, t) { return null != e && Ni(e, t, tr) } var td = mi(function(e, t, n) { null != t && "function" != typeof t.toString && (t = _t.call(t)), e[t] = n }, xd(Hd)),
                            nd = mi(function(e, t, n) { null != t && "function" != typeof t.toString && (t = _t.call(t)), lt.call(e, t) ? e[t].push(n) : e[t] = [n] }, Ci),
                            ad = kr(ar);

                        function rd(e) { return Ms(e) ? ka(e) : ur(e) }

                        function id(e) { return Ms(e) ? ka(e, !0) : lr(e) } var od = ii(function(e, t, n) { fr(e, t, n) }),
                            sd = ii(function(e, t, n, a) { fr(e, t, n, a) }),
                            dd = Si(function(e, t) { var n = {}; if (null == e) return n; var a = !1;
                                t = Xt(t, function(t) { return t = Jr(t, e), a || (a = t.length > 1), t }), ai(e, ji(e), n), a && (n = Ca(n, c | h | _, xi)); for (var r = t.length; r--;) Fr(n, t[r]); return n }); var ud = Si(function(e, t) { return null == e ? {} : function(e, t) { return yr(e, t, function(t, n) { return ed(e, n) }) }(e, t) });

                        function ld(e, t) { if (null == e) return {}; var n = Xt(ji(e), function(e) { return [e] }); return t = Ci(t), yr(e, n, function(e, n) { return t(e, n[0]) }) } var cd = ki(rd),
                            hd = ki(id);

                        function _d(e) { return null == e ? [] : gn(e, rd(e)) } var md = ui(function(e, t, n) { return t = t.toLowerCase(), e + (n ? fd(t) : t) });

                        function fd(e) { return kd(Us(e).toLowerCase()) }

                        function pd(e) { return (e = Us(e)) && e.replace(qe, bn).replace(yt, "") } var gd = ui(function(e, t, n) { return e + (n ? "-" : "") + t.toLowerCase() }),
                            yd = ui(function(e, t, n) { return e + (n ? " " : "") + t.toLowerCase() }),
                            Md = di("toLowerCase"); var vd = ui(function(e, t, n) { return e + (n ? "_" : "") + t.toLowerCase() }); var bd = ui(function(e, t, n) { return e + (n ? " " : "") + kd(t) }); var Ld = ui(function(e, t, n) { return e + (n ? " " : "") + t.toUpperCase() }),
                            kd = di("toUpperCase");

                        function Yd(e, t, n) { return e = Us(e), (t = n ? r : t) === r ? function(e) { return Lt.test(e) }(e) ? function(e) { return e.match(vt) || [] }(e) : function(e) { return e.match(Ie) || [] }(e) : e.match(t) || [] } var wd = kr(function(e, t) { try { return Vt(e, r, t) } catch (n) { return ks(n) ? n : new Xe(n) } }),
                            Dd = Si(function(e, t) { return Jt(t, function(t) { t = lo(t), Oa(e, t, ns(e[t], e)) }), e });

                        function xd(e) { return function() { return e } } var Td = hi(),
                            Sd = hi(!0);

                        function Hd(e) { return e }

                        function jd(e) { return dr("function" == typeof e ? e : Ca(e, c)) } var Od = kr(function(e, t) { return function(n) { return ar(n, e, t) } }),
                            Pd = kr(function(e, t) { return function(n) { return ar(e, n, t) } });

                        function Ad(e, t, n) { var a = rd(t),
                                r = Ka(t, a);
                            null != n || xs(t) && (r.length || !a.length) || (n = t, t = e, e = this, r = Ka(t, rd(t))); var i = !(xs(n) && "chain" in n && !n.chain),
                                o = Ys(e); return Jt(r, function(n) { var a = t[n];
                                e[n] = a, o && (e.prototype[n] = function() { var t = this.__chain__; if (i || t) { var n = e(this.__wrapped__); return (n.__actions__ = ni(this.__actions__)).push({ func: a, args: arguments, thisArg: e }), n.__chain__ = t, n } return a.apply(e, Qt([this.value()], arguments)) }) }), e }

                        function Cd() {} var Rd = pi(Xt),
                            Wd = pi(qt),
                            Fd = pi(nn);

                        function Id(e) { return Gi(e) ? cn(lo(e)) : function(e) { return function(t) { return $a(t, e) } }(e) } var Ed = yi(),
                            zd = yi(!0);

                        function Nd() { return [] }

                        function Bd() { return !1 } var Vd = fi(function(e, t) { return e + t }, 0),
                            Ud = bi("ceil"),
                            Jd = fi(function(e, t) { return e / t }, 1),
                            Gd = bi("floor"); var qd, Kd = fi(function(e, t) { return e * t }, 1),
                            $d = bi("round"),
                            Zd = fi(function(e, t) { return e - t }, 0); return _a.after = function(e, t) { if ("function" != typeof t) throw new rt(s); return e = zs(e),
                                function() { if (--e < 1) return t.apply(this, arguments) } }, _a.ary = es, _a.assign = Js, _a.assignIn = Gs, _a.assignInWith = qs, _a.assignWith = Ks, _a.at = $s, _a.before = ts, _a.bind = ns, _a.bindAll = Dd, _a.bindKey = as, _a.castArray = function() { if (!arguments.length) return []; var e = arguments[0]; return gs(e) ? e : [e] }, _a.chain = Io, _a.chunk = function(e, t, n) { t = (n ? Ji(e, t, n) : t === r) ? 1 : Un(zs(t), 0); var i = null == e ? 0 : e.length; if (!i || t < 1) return []; for (var o = 0, s = 0, d = a(Fn(i / t)); o < i;) d[s++] = Hr(e, o, o += t); return d }, _a.compact = function(e) { for (var t = -1, n = null == e ? 0 : e.length, a = 0, r = []; ++t < n;) { var i = e[t];
                                i && (r[a++] = i) } return r }, _a.concat = function() { var e = arguments.length; if (!e) return []; for (var t = a(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r]; return Qt(gs(n) ? ni(n) : [n], Va(t, 1)) }, _a.cond = function(e) { var t = null == e ? 0 : e.length,
                                n = Ci(); return e = t ? Xt(e, function(e) { if ("function" != typeof e[1]) throw new rt(s); return [n(e[0]), e[1]] }) : [], kr(function(n) { for (var a = -1; ++a < t;) { var r = e[a]; if (Vt(r[0], this, n)) return Vt(r[1], this, n) } }) }, _a.conforms = function(e) { return function(e) { var t = rd(e); return function(n) { return Ra(n, e, t) } }(Ca(e, c)) }, _a.constant = xd, _a.countBy = No, _a.create = function(e, t) { var n = ma(e); return null == t ? n : ja(n, t) }, _a.curry = function e(t, n, a) { var i = Yi(t, M, r, r, r, r, r, n = a ? r : n); return i.placeholder = e.placeholder, i }, _a.curryRight = function e(t, n, a) { var i = Yi(t, v, r, r, r, r, r, n = a ? r : n); return i.placeholder = e.placeholder, i }, _a.debounce = rs, _a.defaults = Zs, _a.defaultsDeep = Xs, _a.defer = is, _a.delay = os, _a.difference = _o, _a.differenceBy = mo, _a.differenceWith = fo, _a.drop = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? Hr(e, (t = n || t === r ? 1 : zs(t)) < 0 ? 0 : t, a) : [] }, _a.dropRight = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? Hr(e, 0, (t = a - (t = n || t === r ? 1 : zs(t))) < 0 ? 0 : t) : [] }, _a.dropRightWhile = function(e, t) { return e && e.length ? Er(e, Ci(t, 3), !0, !0) : [] }, _a.dropWhile = function(e, t) { return e && e.length ? Er(e, Ci(t, 3), !0) : [] }, _a.fill = function(e, t, n, a) { var i = null == e ? 0 : e.length; return i ? (n && "number" != typeof n && Ji(e, t, n) && (n = 0, a = i), function(e, t, n, a) { var i = e.length; for ((n = zs(n)) < 0 && (n = -n > i ? 0 : i + n), (a = a === r || a > i ? i : zs(a)) < 0 && (a += i), a = n > a ? 0 : Ns(a); n < a;) e[n++] = t; return e }(e, t, n, a)) : [] }, _a.filter = function(e, t) { return (gs(e) ? Kt : Ba)(e, Ci(t, 3)) }, _a.flatMap = function(e, t) { return Va($o(e, t), 1) }, _a.flatMapDeep = function(e, t) { return Va($o(e, t), O) }, _a.flatMapDepth = function(e, t, n) { return n = n === r ? 1 : zs(n), Va($o(e, t), n) }, _a.flatten = yo, _a.flattenDeep = function(e) { return null != e && e.length ? Va(e, O) : [] }, _a.flattenDepth = function(e, t) { return null != e && e.length ? Va(e, t = t === r ? 1 : zs(t)) : [] }, _a.flip = function(e) { return Yi(e, w) }, _a.flow = Td, _a.flowRight = Sd, _a.fromPairs = function(e) { for (var t = -1, n = null == e ? 0 : e.length, a = {}; ++t < n;) { var r = e[t];
                                a[r[0]] = r[1] } return a }, _a.functions = function(e) { return null == e ? [] : Ka(e, rd(e)) }, _a.functionsIn = function(e) { return null == e ? [] : Ka(e, id(e)) }, _a.groupBy = Go, _a.initial = function(e) { return null != e && e.length ? Hr(e, 0, -1) : [] }, _a.intersection = vo, _a.intersectionBy = bo, _a.intersectionWith = Lo, _a.invert = td, _a.invertBy = nd, _a.invokeMap = qo, _a.iteratee = jd, _a.keyBy = Ko, _a.keys = rd, _a.keysIn = id, _a.map = $o, _a.mapKeys = function(e, t) { var n = {}; return t = Ci(t, 3), Ga(e, function(e, a, r) { Oa(n, t(e, a, r), e) }), n }, _a.mapValues = function(e, t) { var n = {}; return t = Ci(t, 3), Ga(e, function(e, a, r) { Oa(n, a, t(e, a, r)) }), n }, _a.matches = function(e) { return _r(Ca(e, c)) }, _a.matchesProperty = function(e, t) { return mr(e, Ca(t, c)) }, _a.memoize = ss, _a.merge = od, _a.mergeWith = sd, _a.method = Od, _a.methodOf = Pd, _a.mixin = Ad, _a.negate = ds, _a.nthArg = function(e) { return e = zs(e), kr(function(t) { return pr(t, e) }) }, _a.omit = dd, _a.omitBy = function(e, t) { return ld(e, ds(Ci(t))) }, _a.once = function(e) { return ts(2, e) }, _a.orderBy = function(e, t, n, a) { return null == e ? [] : (gs(t) || (t = null == t ? [] : [t]), gs(n = a ? r : n) || (n = null == n ? [] : [n]), gr(e, t, n)) }, _a.over = Rd, _a.overArgs = us, _a.overEvery = Wd, _a.overSome = Fd, _a.partial = ls, _a.partialRight = cs, _a.partition = Zo, _a.pick = ud, _a.pickBy = ld, _a.property = Id, _a.propertyOf = function(e) { return function(t) { return null == e ? r : $a(e, t) } }, _a.pull = Yo, _a.pullAll = wo, _a.pullAllBy = function(e, t, n) { return e && e.length && t && t.length ? Mr(e, t, Ci(n, 2)) : e }, _a.pullAllWith = function(e, t, n) { return e && e.length && t && t.length ? Mr(e, t, r, n) : e }, _a.pullAt = Do, _a.range = Ed, _a.rangeRight = zd, _a.rearg = hs, _a.reject = function(e, t) { return (gs(e) ? Kt : Ba)(e, ds(Ci(t, 3))) }, _a.remove = function(e, t) { var n = []; if (!e || !e.length) return n; var a = -1,
                                r = [],
                                i = e.length; for (t = Ci(t, 3); ++a < i;) { var o = e[a];
                                t(o, a, e) && (n.push(o), r.push(a)) } return vr(e, r), n }, _a.rest = function(e, t) { if ("function" != typeof e) throw new rt(s); return kr(e, t = t === r ? t : zs(t)) }, _a.reverse = xo, _a.sampleSize = function(e, t, n) { return t = (n ? Ji(e, t, n) : t === r) ? 1 : zs(t), (gs(e) ? wa : wr)(e, t) }, _a.set = function(e, t, n) { return null == e ? e : Dr(e, t, n) }, _a.setWith = function(e, t, n, a) { return a = "function" == typeof a ? a : r, null == e ? e : Dr(e, t, n, a) }, _a.shuffle = function(e) { return (gs(e) ? Da : Sr)(e) }, _a.slice = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? (n && "number" != typeof n && Ji(e, t, n) ? (t = 0, n = a) : (t = null == t ? 0 : zs(t), n = n === r ? a : zs(n)), Hr(e, t, n)) : [] }, _a.sortBy = Xo, _a.sortedUniq = function(e) { return e && e.length ? Ar(e) : [] }, _a.sortedUniqBy = function(e, t) { return e && e.length ? Ar(e, Ci(t, 2)) : [] }, _a.split = function(e, t, n) { return n && "number" != typeof n && Ji(e, t, n) && (t = n = r), (n = n === r ? R : n >>> 0) ? (e = Us(e)) && ("string" == typeof t || null != t && !Os(t)) && !(t = Rr(t)) && Yn(e) ? qr(jn(e), 0, n) : e.split(t, n) : [] }, _a.spread = function(e, t) { if ("function" != typeof e) throw new rt(s); return t = null == t ? 0 : Un(zs(t), 0), kr(function(n) { var a = n[t],
                                    r = qr(n, 0, t); return a && Qt(r, a), Vt(e, this, r) }) }, _a.tail = function(e) { var t = null == e ? 0 : e.length; return t ? Hr(e, 1, t) : [] }, _a.take = function(e, t, n) { return e && e.length ? Hr(e, 0, (t = n || t === r ? 1 : zs(t)) < 0 ? 0 : t) : [] }, _a.takeRight = function(e, t, n) { var a = null == e ? 0 : e.length; return a ? Hr(e, (t = a - (t = n || t === r ? 1 : zs(t))) < 0 ? 0 : t, a) : [] }, _a.takeRightWhile = function(e, t) { return e && e.length ? Er(e, Ci(t, 3), !1, !0) : [] }, _a.takeWhile = function(e, t) { return e && e.length ? Er(e, Ci(t, 3)) : [] }, _a.tap = function(e, t) { return t(e), e }, _a.throttle = function(e, t, n) { var a = !0,
                                r = !0; if ("function" != typeof e) throw new rt(s); return xs(n) && (a = "leading" in n ? !!n.leading : a, r = "trailing" in n ? !!n.trailing : r), rs(e, t, { leading: a, maxWait: t, trailing: r }) }, _a.thru = Eo, _a.toArray = Is, _a.toPairs = cd, _a.toPairsIn = hd, _a.toPath = function(e) { return gs(e) ? Xt(e, lo) : Cs(e) ? [e] : ni(uo(Us(e))) }, _a.toPlainObject = Vs, _a.transform = function(e, t, n) { var a = gs(e),
                                r = a || bs(e) || Rs(e); if (t = Ci(t, 4), null == n) { var i = e && e.constructor;
                                n = r ? a ? new i : [] : xs(e) && Ys(i) ? ma(jt(e)) : {} } return (r ? Jt : Ga)(e, function(e, a, r) { return t(n, e, a, r) }), n }, _a.unary = function(e) { return es(e, 1) }, _a.union = To, _a.unionBy = So, _a.unionWith = Ho, _a.uniq = function(e) { return e && e.length ? Wr(e) : [] }, _a.uniqBy = function(e, t) { return e && e.length ? Wr(e, Ci(t, 2)) : [] }, _a.uniqWith = function(e, t) { return t = "function" == typeof t ? t : r, e && e.length ? Wr(e, r, t) : [] }, _a.unset = function(e, t) { return null == e || Fr(e, t) }, _a.unzip = jo, _a.unzipWith = Oo, _a.update = function(e, t, n) { return null == e ? e : Ir(e, t, Ur(n)) }, _a.updateWith = function(e, t, n, a) { return a = "function" == typeof a ? a : r, null == e ? e : Ir(e, t, Ur(n), a) }, _a.values = _d, _a.valuesIn = function(e) { return null == e ? [] : gn(e, id(e)) }, _a.without = Po, _a.words = Yd, _a.wrap = function(e, t) { return ls(Ur(t), e) }, _a.xor = Ao, _a.xorBy = Co, _a.xorWith = Ro, _a.zip = Wo, _a.zipObject = function(e, t) { return Br(e || [], t || [], Ta) }, _a.zipObjectDeep = function(e, t) { return Br(e || [], t || [], Dr) }, _a.zipWith = Fo, _a.entries = cd, _a.entriesIn = hd, _a.extend = Gs, _a.extendWith = qs, Ad(_a, _a), _a.add = Vd, _a.attempt = wd, _a.camelCase = md, _a.capitalize = fd, _a.ceil = Ud, _a.clamp = function(e, t, n) { return n === r && (n = t, t = r), n !== r && (n = (n = Bs(n)) == n ? n : 0), t !== r && (t = (t = Bs(t)) == t ? t : 0), Aa(Bs(e), t, n) }, _a.clone = function(e) { return Ca(e, _) }, _a.cloneDeep = function(e) { return Ca(e, c | _) }, _a.cloneDeepWith = function(e, t) { return Ca(e, c | _, t = "function" == typeof t ? t : r) }, _a.cloneWith = function(e, t) { return Ca(e, _, t = "function" == typeof t ? t : r) }, _a.conformsTo = function(e, t) { return null == t || Ra(e, t, rd(t)) }, _a.deburr = pd, _a.defaultTo = function(e, t) { return null == e || e != e ? t : e }, _a.divide = Jd, _a.endsWith = function(e, t, n) { e = Us(e), t = Rr(t); var a = e.length,
                                i = n = n === r ? a : Aa(zs(n), 0, a); return (n -= t.length) >= 0 && e.slice(n, i) == t }, _a.eq = _s, _a.escape = function(e) { return (e = Us(e)) && Ye.test(e) ? e.replace(Le, Ln) : e }, _a.escapeRegExp = function(e) { return (e = Us(e)) && Oe.test(e) ? e.replace(je, "\\$&") : e }, _a.every = function(e, t, n) { var a = gs(e) ? qt : za; return n && Ji(e, t, n) && (t = r), a(e, Ci(t, 3)) }, _a.find = Bo, _a.findIndex = po, _a.findKey = function(e, t) { return rn(e, Ci(t, 3), Ga) }, _a.findLast = Vo, _a.findLastIndex = go, _a.findLastKey = function(e, t) { return rn(e, Ci(t, 3), qa) }, _a.floor = Gd, _a.forEach = Uo, _a.forEachRight = Jo, _a.forIn = function(e, t) { return null == e ? e : Ua(e, Ci(t, 3), id) }, _a.forInRight = function(e, t) { return null == e ? e : Ja(e, Ci(t, 3), id) }, _a.forOwn = function(e, t) { return e && Ga(e, Ci(t, 3)) }, _a.forOwnRight = function(e, t) { return e && qa(e, Ci(t, 3)) }, _a.get = Qs, _a.gt = ms, _a.gte = fs, _a.has = function(e, t) { return null != e && Ni(e, t, er) }, _a.hasIn = ed, _a.head = Mo, _a.identity = Hd, _a.includes = function(e, t, n, a) { e = Ms(e) ? e : _d(e), n = n && !a ? zs(n) : 0; var r = e.length; return n < 0 && (n = Un(r + n, 0)), As(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && sn(e, t, n) > -1 }, _a.indexOf = function(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var r = null == n ? 0 : zs(n); return r < 0 && (r = Un(a + r, 0)), sn(e, t, r) }, _a.inRange = function(e, t, n) { return t = Es(t), n === r ? (n = t, t = 0) : n = Es(n),
                                function(e, t, n) { return e >= Jn(t, n) && e < Un(t, n) }(e = Bs(e), t, n) }, _a.invoke = ad, _a.isArguments = ps, _a.isArray = gs, _a.isArrayBuffer = ys, _a.isArrayLike = Ms, _a.isArrayLikeObject = vs, _a.isBoolean = function(e) { return !0 === e || !1 === e || Ts(e) && Xa(e) == B }, _a.isBuffer = bs, _a.isDate = Ls, _a.isElement = function(e) { return Ts(e) && 1 === e.nodeType && !js(e) }, _a.isEmpty = function(e) { if (null == e) return !0; if (Ms(e) && (gs(e) || "string" == typeof e || "function" == typeof e.splice || bs(e) || Rs(e) || ps(e))) return !e.length; var t = zi(e); if (t == K || t == te) return !e.size; if ($i(e)) return !ur(e).length; for (var n in e)
                                if (lt.call(e, n)) return !1;
                            return !0 }, _a.isEqual = function(e, t) { return ir(e, t) }, _a.isEqualWith = function(e, t, n) { var a = (n = "function" == typeof n ? n : r) ? n(e, t) : r; return a === r ? ir(e, t, r, n) : !!a }, _a.isError = ks, _a.isFinite = function(e) { return "number" == typeof e && Nn(e) }, _a.isFunction = Ys, _a.isInteger = ws, _a.isLength = Ds, _a.isMap = Ss, _a.isMatch = function(e, t) { return e === t || or(e, t, Wi(t)) }, _a.isMatchWith = function(e, t, n) { return n = "function" == typeof n ? n : r, or(e, t, Wi(t), n) }, _a.isNaN = function(e) { return Hs(e) && e != +e }, _a.isNative = function(e) { if (Ki(e)) throw new Xe(o); return sr(e) }, _a.isNil = function(e) { return null == e }, _a.isNull = function(e) { return null === e }, _a.isNumber = Hs, _a.isObject = xs, _a.isObjectLike = Ts, _a.isPlainObject = js, _a.isRegExp = Os, _a.isSafeInteger = function(e) { return ws(e) && e >= -P && e <= P }, _a.isSet = Ps, _a.isString = As, _a.isSymbol = Cs, _a.isTypedArray = Rs, _a.isUndefined = function(e) { return e === r }, _a.isWeakMap = function(e) { return Ts(e) && zi(e) == ie }, _a.isWeakSet = function(e) { return Ts(e) && Xa(e) == oe }, _a.join = function(e, t) { return null == e ? "" : Bn.call(e, t) }, _a.kebabCase = gd, _a.last = ko, _a.lastIndexOf = function(e, t, n) { var a = null == e ? 0 : e.length; if (!a) return -1; var i = a; return n !== r && (i = (i = zs(n)) < 0 ? Un(a + i, 0) : Jn(i, a - 1)), t == t ? function(e, t, n) { for (var a = n + 1; a--;)
                                    if (e[a] === t) return a;
                                return a }(e, t, i) : on(e, un, i, !0) }, _a.lowerCase = yd, _a.lowerFirst = Md, _a.lt = Ws, _a.lte = Fs, _a.max = function(e) { return e && e.length ? Na(e, Hd, Qa) : r }, _a.maxBy = function(e, t) { return e && e.length ? Na(e, Ci(t, 2), Qa) : r }, _a.mean = function(e) { return ln(e, Hd) }, _a.meanBy = function(e, t) { return ln(e, Ci(t, 2)) }, _a.min = function(e) { return e && e.length ? Na(e, Hd, cr) : r }, _a.minBy = function(e, t) { return e && e.length ? Na(e, Ci(t, 2), cr) : r }, _a.stubArray = Nd, _a.stubFalse = Bd, _a.stubObject = function() { return {} }, _a.stubString = function() { return "" }, _a.stubTrue = function() { return !0 }, _a.multiply = Kd, _a.nth = function(e, t) { return e && e.length ? pr(e, zs(t)) : r }, _a.noConflict = function() { return Ot._ === this && (Ot._ = ft), this }, _a.noop = Cd, _a.now = Qo, _a.pad = function(e, t, n) { e = Us(e); var a = (t = zs(t)) ? Hn(e) : 0; if (!t || a >= t) return e; var r = (t - a) / 2; return gi(In(r), n) + e + gi(Fn(r), n) }, _a.padEnd = function(e, t, n) { e = Us(e); var a = (t = zs(t)) ? Hn(e) : 0; return t && a < t ? e + gi(t - a, n) : e }, _a.padStart = function(e, t, n) { e = Us(e); var a = (t = zs(t)) ? Hn(e) : 0; return t && a < t ? gi(t - a, n) + e : e }, _a.parseInt = function(e, t, n) { return n || null == t ? t = 0 : t && (t = +t), qn(Us(e).replace(Ae, ""), t || 0) }, _a.random = function(e, t, n) { if (n && "boolean" != typeof n && Ji(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Es(e), t === r ? (t = e, e = 0) : t = Es(t)), e > t) { var a = e;
                                e = t, t = a } if (n || e % 1 || t % 1) { var i = Kn(); return Jn(e + i * (t - e + Tt("1e-" + ((i + "").length - 1))), t) } return br(e, t) }, _a.reduce = function(e, t, n) { var a = gs(e) ? en : _n,
                                r = arguments.length < 3; return a(e, Ci(t, 4), n, r, Ia) }, _a.reduceRight = function(e, t, n) { var a = gs(e) ? tn : _n,
                                r = arguments.length < 3; return a(e, Ci(t, 4), n, r, Ea) }, _a.repeat = function(e, t, n) { return t = (n ? Ji(e, t, n) : t === r) ? 1 : zs(t), Lr(Us(e), t) }, _a.replace = function() { var e = arguments,
                                t = Us(e[0]); return e.length < 3 ? t : t.replace(e[1], e[2]) }, _a.result = function(e, t, n) { var a = -1,
                                i = (t = Jr(t, e)).length; for (i || (i = 1, e = r); ++a < i;) { var o = null == e ? r : e[lo(t[a])];
                                o === r && (a = i, o = n), e = Ys(o) ? o.call(e) : o } return e }, _a.round = $d, _a.runInContext = e, _a.sample = function(e) { return (gs(e) ? Ya : Yr)(e) }, _a.size = function(e) { if (null == e) return 0; if (Ms(e)) return As(e) ? Hn(e) : e.length; var t = zi(e); return t == K || t == te ? e.size : ur(e).length }, _a.snakeCase = vd, _a.some = function(e, t, n) { var a = gs(e) ? nn : jr; return n && Ji(e, t, n) && (t = r), a(e, Ci(t, 3)) }, _a.sortedIndex = function(e, t) { return Or(e, t) }, _a.sortedIndexBy = function(e, t, n) { return Pr(e, t, Ci(n, 2)) }, _a.sortedIndexOf = function(e, t) { var n = null == e ? 0 : e.length; if (n) { var a = Or(e, t); if (a < n && _s(e[a], t)) return a } return -1 }, _a.sortedLastIndex = function(e, t) { return Or(e, t, !0) }, _a.sortedLastIndexBy = function(e, t, n) { return Pr(e, t, Ci(n, 2), !0) }, _a.sortedLastIndexOf = function(e, t) { if (null != e && e.length) { var n = Or(e, t, !0) - 1; if (_s(e[n], t)) return n } return -1 }, _a.startCase = bd, _a.startsWith = function(e, t, n) { return e = Us(e), n = null == n ? 0 : Aa(zs(n), 0, e.length), t = Rr(t), e.slice(n, n + t.length) == t }, _a.subtract = Zd, _a.sum = function(e) { return e && e.length ? mn(e, Hd) : 0 }, _a.sumBy = function(e, t) { return e && e.length ? mn(e, Ci(t, 2)) : 0 }, _a.template = function(e, t, n) { var a = _a.templateSettings;
                            n && Ji(e, t, n) && (t = r), e = Us(e), t = qs({}, t, a, wi); var i, o, s = qs({}, t.imports, a.imports, wi),
                                d = rd(s),
                                u = gn(s, d),
                                l = 0,
                                c = t.interpolate || Ke,
                                h = "__p += '",
                                _ = nt((t.escape || Ke).source + "|" + c.source + "|" + (c === xe ? ze : Ke).source + "|" + (t.evaluate || Ke).source + "|$", "g"),
                                m = "//# sourceURL=" + (lt.call(t, "sourceURL") ? (t.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Yt + "]") + "\n";
                            e.replace(_, function(t, n, a, r, s, d) { return a || (a = r), h += e.slice(l, d).replace($e, kn), n && (i = !0, h += "' +\n__e(" + n + ") +\n'"), s && (o = !0, h += "';\n" + s + ";\n__p += '"), a && (h += "' +\n((__t = (" + a + ")) == null ? '' : __t) +\n'"), l = d + t.length, t }), h += "';\n"; var f = lt.call(t, "variable") && t.variable;
                            f || (h = "with (obj) {\n" + h + "\n}\n"), h = (o ? h.replace(ye, "") : h).replace(Me, "$1").replace(ve, "$1;"), h = "function(" + (f || "obj") + ") {\n" + (f ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}"; var p = wd(function() { return Qe(d, m + "return " + h).apply(r, u) }); if (p.source = h, ks(p)) throw p; return p }, _a.times = function(e, t) { if ((e = zs(e)) < 1 || e > P) return []; var n = R,
                                a = Jn(e, R);
                            t = Ci(t), e -= R; for (var r = fn(a, t); ++n < e;) t(n); return r }, _a.toFinite = Es, _a.toInteger = zs, _a.toLength = Ns, _a.toLower = function(e) { return Us(e).toLowerCase() }, _a.toNumber = Bs, _a.toSafeInteger = function(e) { return e ? Aa(zs(e), -P, P) : 0 === e ? e : 0 }, _a.toString = Us, _a.toUpper = function(e) { return Us(e).toUpperCase() }, _a.trim = function(e, t, n) { if ((e = Us(e)) && (n || t === r)) return e.replace(Pe, ""); if (!e || !(t = Rr(t))) return e; var a = jn(e),
                                i = jn(t); return qr(a, Mn(a, i), vn(a, i) + 1).join("") }, _a.trimEnd = function(e, t, n) { if ((e = Us(e)) && (n || t === r)) return e.replace(Ce, ""); if (!e || !(t = Rr(t))) return e; var a = jn(e); return qr(a, 0, vn(a, jn(t)) + 1).join("") }, _a.trimStart = function(e, t, n) { if ((e = Us(e)) && (n || t === r)) return e.replace(Ae, ""); if (!e || !(t = Rr(t))) return e; var a = jn(e); return qr(a, Mn(a, jn(t))).join("") }, _a.truncate = function(e, t) { var n = D,
                                a = x; if (xs(t)) { var i = "separator" in t ? t.separator : i;
                                n = "length" in t ? zs(t.length) : n, a = "omission" in t ? Rr(t.omission) : a } var o = (e = Us(e)).length; if (Yn(e)) { var s = jn(e);
                                o = s.length } if (n >= o) return e; var d = n - Hn(a); if (d < 1) return a; var u = s ? qr(s, 0, d).join("") : e.slice(0, d); if (i === r) return u + a; if (s && (d += u.length - d), Os(i)) { if (e.slice(d).search(i)) { var l, c = u; for (i.global || (i = nt(i.source, Us(Ne.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(c);) var h = l.index;
                                    u = u.slice(0, h === r ? d : h) } } else if (e.indexOf(Rr(i), d) != d) { var _ = u.lastIndexOf(i);
                                _ > -1 && (u = u.slice(0, _)) } return u + a }, _a.unescape = function(e) { return (e = Us(e)) && ke.test(e) ? e.replace(be, On) : e }, _a.uniqueId = function(e) { var t = ++ct; return Us(e) + t }, _a.upperCase = Ld, _a.upperFirst = kd, _a.each = Uo, _a.eachRight = Jo, _a.first = Mo, Ad(_a, (qd = {}, Ga(_a, function(e, t) { lt.call(_a.prototype, t) || (qd[t] = e) }), qd), { chain: !1 }), _a.VERSION = "4.17.15", Jt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) { _a[e].placeholder = _a }), Jt(["drop", "take"], function(e, t) { ga.prototype[e] = function(n) { n = n === r ? 1 : Un(zs(n), 0); var a = this.__filtered__ && !t ? new ga(this) : this.clone(); return a.__filtered__ ? a.__takeCount__ = Jn(n, a.__takeCount__) : a.__views__.push({ size: Jn(n, R), type: e + (a.__dir__ < 0 ? "Right" : "") }), a }, ga.prototype[e + "Right"] = function(t) { return this.reverse()[e](t).reverse() } }), Jt(["filter", "map", "takeWhile"], function(e, t) { var n = t + 1,
                                a = n == H || 3 == n;
                            ga.prototype[e] = function(e) { var t = this.clone(); return t.__iteratees__.push({ iteratee: Ci(e, 3), type: n }), t.__filtered__ = t.__filtered__ || a, t } }), Jt(["head", "last"], function(e, t) { var n = "take" + (t ? "Right" : "");
                            ga.prototype[e] = function() { return this[n](1).value()[0] } }), Jt(["initial", "tail"], function(e, t) { var n = "drop" + (t ? "" : "Right");
                            ga.prototype[e] = function() { return this.__filtered__ ? new ga(this) : this[n](1) } }), ga.prototype.compact = function() { return this.filter(Hd) }, ga.prototype.find = function(e) { return this.filter(e).head() }, ga.prototype.findLast = function(e) { return this.reverse().find(e) }, ga.prototype.invokeMap = kr(function(e, t) { return "function" == typeof e ? new ga(this) : this.map(function(n) { return ar(n, e, t) }) }), ga.prototype.reject = function(e) { return this.filter(ds(Ci(e))) }, ga.prototype.slice = function(e, t) { e = zs(e); var n = this; return n.__filtered__ && (e > 0 || t < 0) ? new ga(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = zs(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n) }, ga.prototype.takeRightWhile = function(e) { return this.reverse().takeWhile(e).reverse() }, ga.prototype.toArray = function() { return this.take(R) }, Ga(ga.prototype, function(e, t) { var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                a = /^(?:head|last)$/.test(t),
                                i = _a[a ? "take" + ("last" == t ? "Right" : "") : t],
                                o = a || /^find/.test(t);
                            i && (_a.prototype[t] = function() { var t = this.__wrapped__,
                                    s = a ? [1] : arguments,
                                    d = t instanceof ga,
                                    u = s[0],
                                    l = d || gs(t),
                                    c = function(e) { var t = i.apply(_a, Qt([e], s)); return a && h ? t[0] : t };
                                l && n && "function" == typeof u && 1 != u.length && (d = l = !1); var h = this.__chain__,
                                    _ = !!this.__actions__.length,
                                    m = o && !h,
                                    f = d && !_; if (!o && l) { t = f ? t : new ga(this); var p = e.apply(t, s); return p.__actions__.push({ func: Eo, args: [c], thisArg: r }), new pa(p, h) } return m && f ? e.apply(this, s) : (p = this.thru(c), m ? a ? p.value()[0] : p.value() : p) }) }), Jt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) { var t = it[e],
                                n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                a = /^(?:pop|shift)$/.test(e);
                            _a.prototype[e] = function() { var e = arguments; if (a && !this.__chain__) { var r = this.value(); return t.apply(gs(r) ? r : [], e) } return this[n](function(n) { return t.apply(gs(n) ? n : [], e) }) } }), Ga(ga.prototype, function(e, t) { var n = _a[t]; if (n) { var a = n.name + "";
                                lt.call(ra, a) || (ra[a] = []), ra[a].push({ name: t, func: n }) } }), ra[_i(r, g).name] = [{ name: "wrapper", func: r }], ga.prototype.clone = function() { var e = new ga(this.__wrapped__); return e.__actions__ = ni(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ni(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ni(this.__views__), e }, ga.prototype.reverse = function() { if (this.__filtered__) { var e = new ga(this);
                                e.__dir__ = -1, e.__filtered__ = !0 } else(e = this.clone()).__dir__ *= -1; return e }, ga.prototype.value = function() { var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                n = gs(e),
                                a = t < 0,
                                r = n ? e.length : 0,
                                i = function(e, t, n) { for (var a = -1, r = n.length; ++a < r;) { var i = n[a],
                                            o = i.size; switch (i.type) {
                                            case "drop":
                                                e += o; break;
                                            case "dropRight":
                                                t -= o; break;
                                            case "take":
                                                t = Jn(t, e + o); break;
                                            case "takeRight":
                                                e = Un(e, t - o) } } return { start: e, end: t } }(0, r, this.__views__),
                                o = i.start,
                                s = i.end,
                                d = s - o,
                                u = a ? s : o - 1,
                                l = this.__iteratees__,
                                c = l.length,
                                h = 0,
                                _ = Jn(d, this.__takeCount__); if (!n || !a && r == d && _ == d) return zr(e, this.__actions__); var m = [];
                            e: for (; d-- && h < _;) { for (var f = -1, p = e[u += t]; ++f < c;) { var g = l[f],
                                        y = g.iteratee,
                                        M = g.type,
                                        v = y(p); if (M == j) p = v;
                                    else if (!v) { if (M == H) continue e; break e } }
                                m[h++] = p }
                            return m }, _a.prototype.at = zo, _a.prototype.chain = function() { return Io(this) }, _a.prototype.commit = function() { return new pa(this.value(), this.__chain__) }, _a.prototype.next = function() { this.__values__ === r && (this.__values__ = Is(this.value())); var e = this.__index__ >= this.__values__.length; return { done: e, value: e ? r : this.__values__[this.__index__++] } }, _a.prototype.plant = function(e) { for (var t, n = this; n instanceof fa;) { var a = ho(n);
                                a.__index__ = 0, a.__values__ = r, t ? i.__wrapped__ = a : t = a; var i = a;
                                n = n.__wrapped__ } return i.__wrapped__ = e, t }, _a.prototype.reverse = function() { var e = this.__wrapped__; if (e instanceof ga) { var t = e; return this.__actions__.length && (t = new ga(this)), (t = t.reverse()).__actions__.push({ func: Eo, args: [xo], thisArg: r }), new pa(t, this.__chain__) } return this.thru(xo) }, _a.prototype.toJSON = _a.prototype.valueOf = _a.prototype.value = function() { return zr(this.__wrapped__, this.__actions__) }, _a.prototype.first = _a.prototype.head, an && (_a.prototype[an] = function() { return this }), _a }();
                    Ot._ = Pn, (a = (function() { return Pn }).call(t, n, t, e)) === r || (e.exports = a) }).call(this) }).call(this, n("YuTi")(e)) }, "MO+k": function(e, t, n) { e.exports = function(e) { "use strict";
                e = e && e.hasOwnProperty("default") ? e.default : e; var t = { rgb2hsl: n, rgb2hsv: a, rgb2hwb: i, rgb2cmyk: o, rgb2keyword: s, rgb2xyz: d, rgb2lab: u, rgb2lch: function(e) { return y(u(e)) }, hsl2rgb: l, hsl2hsv: function(e) { var t = e[0],
                            n = e[1] / 100,
                            a = e[2] / 100; return 0 === a ? [0, 0, 0] : [t, 2 * (n *= (a *= 2) <= 1 ? a : 2 - a) / (a + n) * 100, (a + n) / 2 * 100] }, hsl2hwb: function(e) { return i(l(e)) }, hsl2cmyk: function(e) { return o(l(e)) }, hsl2keyword: function(e) { return s(l(e)) }, hsv2rgb: c, hsv2hsl: function(e) { var t, n, a = e[0],
                            r = e[1] / 100,
                            i = e[2] / 100; return t = r * i, [a, 100 * (t = (t /= (n = (2 - r) * i) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)] }, hsv2hwb: function(e) { return i(c(e)) }, hsv2cmyk: function(e) { return o(c(e)) }, hsv2keyword: function(e) { return s(c(e)) }, hwb2rgb: h, hwb2hsl: function(e) { return n(h(e)) }, hwb2hsv: function(e) { return a(h(e)) }, hwb2cmyk: function(e) { return o(h(e)) }, hwb2keyword: function(e) { return s(h(e)) }, cmyk2rgb: _, cmyk2hsl: function(e) { return n(_(e)) }, cmyk2hsv: function(e) { return a(_(e)) }, cmyk2hwb: function(e) { return i(_(e)) }, cmyk2keyword: function(e) { return s(_(e)) }, keyword2rgb: L, keyword2hsl: function(e) { return n(L(e)) }, keyword2hsv: function(e) { return a(L(e)) }, keyword2hwb: function(e) { return i(L(e)) }, keyword2cmyk: function(e) { return o(L(e)) }, keyword2lab: function(e) { return u(L(e)) }, keyword2xyz: function(e) { return d(L(e)) }, xyz2rgb: m, xyz2lab: f, xyz2lch: function(e) { return y(f(e)) }, lab2xyz: p, lab2rgb: M, lab2lch: y, lch2lab: v, lch2xyz: function(e) { return p(v(e)) }, lch2rgb: function(e) { return M(v(e)) } };

                function n(e) { var t, n, a = e[0] / 255,
                        r = e[1] / 255,
                        i = e[2] / 255,
                        o = Math.min(a, r, i),
                        s = Math.max(a, r, i),
                        d = s - o; return s == o ? t = 0 : a == s ? t = (r - i) / d : r == s ? t = 2 + (i - a) / d : i == s && (t = 4 + (a - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + s) / 2, [t, 100 * (s == o ? 0 : n <= .5 ? d / (s + o) : d / (2 - s - o)), 100 * n] }

                function a(e) { var t, n, a = e[0],
                        r = e[1],
                        i = e[2],
                        o = Math.min(a, r, i),
                        s = Math.max(a, r, i),
                        d = s - o; return n = 0 == s ? 0 : d / s * 1e3 / 10, s == o ? t = 0 : a == s ? t = (r - i) / d : r == s ? t = 2 + (i - a) / d : i == s && (t = 4 + (a - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10] }

                function i(e) { var t = e[0],
                        a = e[1],
                        r = e[2],
                        i = n(e)[0],
                        o = 1 / 255 * Math.min(t, Math.min(a, r)),
                        r = 1 - 1 / 255 * Math.max(t, Math.max(a, r)); return [i, 100 * o, 100 * r] }

                function o(e) { var t, n = e[0] / 255,
                        a = e[1] / 255,
                        r = e[2] / 255; return t = Math.min(1 - n, 1 - a, 1 - r), [100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t] }

                function s(e) { return Y[JSON.stringify(e)] }

                function d(e) { var t = e[0] / 255,
                        n = e[1] / 255,
                        a = e[2] / 255;
                    t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92; var r = .4124 * t + .3576 * n + .1805 * a,
                        i = .2126 * t + .7152 * n + .0722 * a,
                        o = .0193 * t + .1192 * n + .9505 * a; return [100 * r, 100 * i, 100 * o] }

                function u(e) { var t = d(e),
                        n = t[0],
                        a = t[1],
                        r = t[2]; return a /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * a - 16, 500 * (n - a), 200 * (a - r)] }

                function l(e) { var t, n, a, r, i, o = e[0] / 360,
                        s = e[1] / 100,
                        d = e[2] / 100; if (0 == s) return [i = 255 * d, i, i];
                    t = 2 * d - (n = d < .5 ? d * (1 + s) : d + s - d * s), r = [0, 0, 0]; for (var u = 0; u < 3; u++)(a = o + 1 / 3 * -(u - 1)) < 0 && a++, a > 1 && a--, i = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t, r[u] = 255 * i; return r }

                function c(e) { var t = e[0] / 60,
                        n = e[1] / 100,
                        a = e[2] / 100,
                        r = Math.floor(t) % 6,
                        i = t - Math.floor(t),
                        o = 255 * a * (1 - n),
                        s = 255 * a * (1 - n * i),
                        d = 255 * a * (1 - n * (1 - i)),
                        a = 255 * a; switch (r) {
                        case 0:
                            return [a, d, o];
                        case 1:
                            return [s, a, o];
                        case 2:
                            return [o, a, d];
                        case 3:
                            return [o, s, a];
                        case 4:
                            return [d, o, a];
                        case 5:
                            return [a, o, s] } }

                function h(e) { var t, n, a, i, o = e[0] / 360,
                        s = e[1] / 100,
                        d = e[2] / 100,
                        u = s + d; switch (u > 1 && (s /= u, d /= u), t = Math.floor(6 * o), a = 6 * o - t, 0 != (1 & t) && (a = 1 - a), i = s + a * ((n = 1 - d) - s), t) { default:
                            case 6:
                            case 0:
                            r = n, g = i, b = s; break;
                        case 1:
                                r = i, g = n, b = s; break;
                        case 2:
                                r = s, g = n, b = i; break;
                        case 3:
                                r = s, g = i, b = n; break;
                        case 4:
                                r = i, g = s, b = n; break;
                        case 5:
                                r = n, g = s, b = i } return [255 * r, 255 * g, 255 * b] }

                function _(e) { var t, n, a, r = e[0] / 100,
                        i = e[1] / 100,
                        o = e[2] / 100,
                        s = e[3] / 100; return t = 1 - Math.min(1, r * (1 - s) + s), n = 1 - Math.min(1, i * (1 - s) + s), a = 1 - Math.min(1, o * (1 - s) + s), [255 * t, 255 * n, 255 * a] }

                function m(e) { var t, n, a, r = e[0] / 100,
                        i = e[1] / 100,
                        o = e[2] / 100; return n = -.9689 * r + 1.8758 * i + .0415 * o, a = .0557 * r + -.204 * i + 1.057 * o, t = (t = 3.2406 * r + -1.5372 * i + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), a = Math.min(Math.max(0, a), 1), [255 * t, 255 * n, 255 * a] }

                function f(e) { var t = e[0],
                        n = e[1],
                        a = e[2]; return n /= 100, a /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * n - 16, 500 * (t - n), 200 * (n - a)] }

                function p(e) { var t, n, a, r, i = e[0],
                        o = e[1],
                        s = e[2]; return i <= 8 ? r = (n = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [t, n, a] }

                function y(e) { var t, n, a, r = e[0],
                        i = e[1],
                        o = e[2]; return t = Math.atan2(o, i), (n = 360 * t / 2 / Math.PI) < 0 && (n += 360), a = Math.sqrt(i * i + o * o), [r, a, n] }

                function M(e) { return m(p(e)) }

                function v(e) { var t, n, a, r = e[0],
                        i = e[1],
                        o = e[2]; return a = o / 360 * 2 * Math.PI, t = i * Math.cos(a), n = i * Math.sin(a), [r, t, n] }

                function L(e) { return k[e] } var k = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    Y = {}; for (var w in k) Y[JSON.stringify(k[w])] = w; var D = function() { return new j }; for (var x in t) { D[x + "Raw"] = function(e) { return function(n) { return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), t[e](n) } }(x); var T = /(\w+)2(\w+)/.exec(x),
                        S = T[1],
                        H = T[2];
                    D[S] = D[S] || {}, D[S][H] = D[x] = function(e) { return function(n) { "number" == typeof n && (n = Array.prototype.slice.call(arguments)); var a = t[e](n); if ("string" == typeof a || void 0 === a) return a; for (var r = 0; r < a.length; r++) a[r] = Math.round(a[r]); return a } }(x) } var j = function() { this.convs = {} };
                j.prototype.routeSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n)) }, j.prototype.setValues = function(e, t) { return this.space = e, this.convs = {}, this.convs[e] = t, this }, j.prototype.getValues = function(e) { var t = this.convs[e]; if (!t) { var n = this.space,
                            a = this.convs[n];
                        t = D[n][e](a), this.convs[e] = t } return t }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) { j.prototype[e] = function(t) { return this.routeSpace(e, arguments) } }); var O = D,
                    P = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    A = { getRgba: C, getHsla: R, getRgb: function(e) { var t = C(e); return t && t.slice(0, 3) }, getHsl: function(e) { var t = R(e); return t && t.slice(0, 3) }, getHwb: W, getAlpha: function(e) { var t = C(e); return t ? t[3] : (t = R(e)) ? t[3] : (t = W(e)) ? t[3] : void 0 }, hexString: function(e, t) { var t = void 0 !== t && 3 === e.length ? t : e[3]; return "#" + N(e[0]) + N(e[1]) + N(e[2]) + (t >= 0 && t < 1 ? N(Math.round(255 * t)) : "") }, rgbString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? F(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" }, rgbaString: F, percentString: function(e, t) { if (t < 1 || e[3] && e[3] < 1) return I(e, t); var n = Math.round(e[0] / 255 * 100),
                                a = Math.round(e[1] / 255 * 100),
                                r = Math.round(e[2] / 255 * 100); return "rgb(" + n + "%, " + a + "%, " + r + "%)" }, percentaString: I, hslString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? E(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" }, hslaString: E, hwbString: function(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")" }, keyword: function(e) { return B[e.slice(0, 3)] } };

                function C(e) { if (e) { var t = [0, 0, 0],
                            n = 1,
                            a = e.match(/^#([a-fA-F0-9]{3,4})$/i),
                            r = ""; if (a) { a = a[1], r = a[3]; for (var i = 0; i < t.length; i++) t[i] = parseInt(a[i] + a[i], 16);
                            r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100) } else if (a = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) { r = a[2], a = a[1]; for (var i = 0; i < t.length; i++) t[i] = parseInt(a.slice(2 * i, 2 * i + 2), 16);
                            r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100) } else if (a = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (var i = 0; i < t.length; i++) t[i] = parseInt(a[i + 1]);
                            n = parseFloat(a[4]) } else if (a = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (var i = 0; i < t.length; i++) t[i] = Math.round(2.55 * parseFloat(a[i + 1]));
                            n = parseFloat(a[4]) } else if (a = e.match(/(\w+)/)) { if ("transparent" == a[1]) return [0, 0, 0, 0]; if (!(t = P[a[1]])) return } for (var i = 0; i < t.length; i++) t[i] = z(t[i], 0, 255); return n = n || 0 == n ? z(n, 0, 1) : 1, t[3] = n, t } }

                function R(e) { if (e) { var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]),
                                a = z(parseInt(t[1]), 0, 360),
                                r = z(parseFloat(t[2]), 0, 100),
                                i = z(parseFloat(t[3]), 0, 100),
                                o = z(isNaN(n) ? 1 : n, 0, 1); return [a, r, i, o] } } }

                function W(e) { if (e) { var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]),
                                a = z(parseInt(t[1]), 0, 360),
                                r = z(parseFloat(t[2]), 0, 100),
                                i = z(parseFloat(t[3]), 0, 100),
                                o = z(isNaN(n) ? 1 : n, 0, 1); return [a, r, i, o] } } }

                function F(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")" }

                function I(e, t) { var n = Math.round(e[0] / 255 * 100),
                        a = Math.round(e[1] / 255 * 100),
                        r = Math.round(e[2] / 255 * 100); return "rgba(" + n + "%, " + a + "%, " + r + "%, " + (t || e[3] || 1) + ")" }

                function E(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")" }

                function z(e, t, n) { return Math.min(Math.max(t, e), n) }

                function N(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t } var B = {}; for (var V in P) B[P[V]] = V; var U = function(e) { return e instanceof U ? e : this instanceof U ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof e ? (t = A.getRgba(e)) ? this.setValues("rgb", t) : (t = A.getHsla(e)) ? this.setValues("hsl", t) : (t = A.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new U(e); var t };
                U.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var e = this.values; return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var e = this.values; return e.rgb.concat([e.alpha]) }, hslaArray: function() { var e = this.values; return e.hsl.concat([e.alpha]) }, alpha: function(e) { return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this) }, red: function(e) { return this.setChannel("rgb", 0, e) }, green: function(e) { return this.setChannel("rgb", 1, e) }, blue: function(e) { return this.setChannel("rgb", 2, e) }, hue: function(e) { return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e) }, saturation: function(e) { return this.setChannel("hsl", 1, e) }, lightness: function(e) { return this.setChannel("hsl", 2, e) }, saturationv: function(e) { return this.setChannel("hsv", 1, e) }, whiteness: function(e) { return this.setChannel("hwb", 1, e) }, blackness: function(e) { return this.setChannel("hwb", 2, e) }, value: function(e) { return this.setChannel("hsv", 2, e) }, cyan: function(e) { return this.setChannel("cmyk", 0, e) }, magenta: function(e) { return this.setChannel("cmyk", 1, e) }, yellow: function(e) { return this.setChannel("cmyk", 2, e) }, black: function(e) { return this.setChannel("cmyk", 3, e) }, hexString: function() { return A.hexString(this.values.rgb) }, rgbString: function() { return A.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return A.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return A.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return A.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return A.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return A.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return A.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2] }, luminosity: function() { for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) { var a = e[n] / 255;
                            t[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4) } return .2126 * t[0] + .7152 * t[1] + .0722 * t[2] }, contrast: function(e) { var t = this.luminosity(),
                            n = e.luminosity(); return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05) }, level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" }, dark: function() { var e = this.values.rgb; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t]; return this.setValues("rgb", e), this }, lighten: function(e) { var t = this.values.hsl; return t[2] += t[2] * e, this.setValues("hsl", t), this }, darken: function(e) { var t = this.values.hsl; return t[2] -= t[2] * e, this.setValues("hsl", t), this }, saturate: function(e) { var t = this.values.hsl; return t[1] += t[1] * e, this.setValues("hsl", t), this }, desaturate: function(e) { var t = this.values.hsl; return t[1] -= t[1] * e, this.setValues("hsl", t), this }, whiten: function(e) { var t = this.values.hwb; return t[1] += t[1] * e, this.setValues("hwb", t), this }, blacken: function(e) { var t = this.values.hwb; return t[2] += t[2] * e, this.setValues("hwb", t), this }, greyscale: function() { var e = this.values.rgb,
                            t = .3 * e[0] + .59 * e[1] + .11 * e[2]; return this.setValues("rgb", [t, t, t]), this }, clearer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t - t * e), this }, opaquer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t + t * e), this }, rotate: function(e) { var t = this.values.hsl,
                            n = (t[0] + e) % 360; return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this }, mix: function(e, t) { var n = e,
                            a = void 0 === t ? .5 : t,
                            r = 2 * a - 1,
                            i = this.alpha() - n.alpha(),
                            o = ((r * i == -1 ? r : (r + i) / (1 + r * i)) + 1) / 2,
                            s = 1 - o; return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * a + n.alpha() * (1 - a)) }, toJSON: function() { return this.rgb() }, clone: function() { var e, t, n = new U,
                            a = this.values,
                            r = n.values; for (var i in a) a.hasOwnProperty(i) && (e = a[i], "[object Array]" === (t = {}.toString.call(e)) ? r[i] = e.slice(0) : "[object Number]" === t ? r[i] = e : console.error("unexpected color value:", e)); return n } }, U.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, U.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, U.prototype.getValues = function(e) { for (var t = this.values, n = {}, a = 0; a < e.length; a++) n[e.charAt(a)] = t[e][a]; return 1 !== t.alpha && (n.a = t.alpha), n }, U.prototype.setValues = function(e, t) { var n, a, r = this.values,
                        i = this.spaces,
                        o = this.maxes,
                        s = 1; if (this.valid = !0, "alpha" === e) s = t;
                    else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length];
                    else if (void 0 !== t[e.charAt(0)]) { for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                        s = t.a } else if (void 0 !== t[i[e][0]]) { var d = i[e]; for (n = 0; n < e.length; n++) r[e][n] = t[d[n]];
                        s = t.alpha } if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1; for (n = 0; n < e.length; n++) a = Math.max(0, Math.min(o[e][n], r[e][n])), r[e][n] = Math.round(a); for (var u in i) u !== e && (r[u] = O[e][u](r[e])); return !0 }, U.prototype.setSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this) }, U.prototype.setChannel = function(e, t, n) { var a = this.values[e]; return void 0 === n ? a[t] : n === a[t] ? this : (a[t] = n, this.setValues(e, a), this) }, "undefined" != typeof window && (window.Color = U); var J, G = U,
                    q = { noop: function() {}, uid: (J = 0, function() { return J++ }), isNullOrUndef: function(e) { return null == e }, isArray: function(e) { if (Array.isArray && Array.isArray(e)) return !0; var t = Object.prototype.toString.call(e); return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6) }, isObject: function(e) { return null !== e && "[object Object]" === Object.prototype.toString.call(e) }, isFinite: function(e) { return ("number" == typeof e || e instanceof Number) && isFinite(e) }, valueOrDefault: function(e, t) { return void 0 === e ? t : e }, valueAtIndexOrDefault: function(e, t, n) { return q.valueOrDefault(q.isArray(e) ? e[t] : e, n) }, callback: function(e, t, n) { if (e && "function" == typeof e.call) return e.apply(n, t) }, each: function(e, t, n, a) { var r, i, o; if (q.isArray(e))
                                if (i = e.length, a)
                                    for (r = i - 1; r >= 0; r--) t.call(n, e[r], r);
                                else
                                    for (r = 0; r < i; r++) t.call(n, e[r], r);
                            else if (q.isObject(e))
                                for (o = Object.keys(e), i = o.length, r = 0; r < i; r++) t.call(n, e[o[r]], o[r]) }, arrayEquals: function(e, t) { var n, a, r, i; if (!e || !t || e.length !== t.length) return !1; for (n = 0, a = e.length; n < a; ++n)
                                if (r = e[n], i = t[n], r instanceof Array && i instanceof Array) { if (!q.arrayEquals(r, i)) return !1 } else if (r !== i) return !1; return !0 }, clone: function(e) { if (q.isArray(e)) return e.map(q.clone); if (q.isObject(e)) { for (var t = {}, n = Object.keys(e), a = n.length, r = 0; r < a; ++r) t[n[r]] = q.clone(e[n[r]]); return t } return e }, _merger: function(e, t, n, a) { var r = t[e],
                                i = n[e];
                            q.isObject(r) && q.isObject(i) ? q.merge(r, i, a) : t[e] = q.clone(i) }, _mergerIf: function(e, t, n) { var a = t[e],
                                r = n[e];
                            q.isObject(a) && q.isObject(r) ? q.mergeIf(a, r) : t.hasOwnProperty(e) || (t[e] = q.clone(r)) }, merge: function(e, t, n) { var a, r, i, o, s, d = q.isArray(t) ? t : [t],
                                u = d.length; if (!q.isObject(e)) return e; for (a = (n = n || {}).merger || q._merger, r = 0; r < u; ++r)
                                if (t = d[r], q.isObject(t))
                                    for (i = Object.keys(t), s = 0, o = i.length; s < o; ++s) a(i[s], e, t, n);
                            return e }, mergeIf: function(e, t) { return q.merge(e, t, { merger: q._mergerIf }) }, extend: function(e) { for (var t = function(t, n) { e[n] = t }, n = 1, a = arguments.length; n < a; ++n) q.each(arguments[n], t); return e }, inherits: function(e) { var t = this,
                                n = e && e.hasOwnProperty("constructor") ? e.constructor : function() { return t.apply(this, arguments) },
                                a = function() { this.constructor = n }; return a.prototype = t.prototype, n.prototype = new a, n.extend = q.inherits, e && q.extend(n.prototype, e), n.__super__ = t.prototype, n } },
                    K = q;
                q.callCallback = q.callback, q.indexOf = function(e, t, n) { return Array.prototype.indexOf.call(e, t, n) }, q.getValueOrDefault = q.valueOrDefault, q.getValueAtIndexOrDefault = q.valueAtIndexOrDefault; var $ = { linear: function(e) { return e }, easeInQuad: function(e) { return e * e }, easeOutQuad: function(e) { return -e * (e - 2) }, easeInOutQuad: function(e) { return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) }, easeInCubic: function(e) { return e * e * e }, easeOutCubic: function(e) { return (e -= 1) * e * e + 1 }, easeInOutCubic: function(e) { return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) }, easeInQuart: function(e) { return e * e * e * e }, easeOutQuart: function(e) { return -((e -= 1) * e * e * e - 1) }, easeInOutQuart: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) }, easeInQuint: function(e) { return e * e * e * e * e }, easeOutQuint: function(e) { return (e -= 1) * e * e * e * e + 1 }, easeInOutQuint: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) }, easeInSine: function(e) { return 1 - Math.cos(e * (Math.PI / 2)) }, easeOutSine: function(e) { return Math.sin(e * (Math.PI / 2)) }, easeInOutSine: function(e) { return -.5 * (Math.cos(Math.PI * e) - 1) }, easeInExpo: function(e) { return 0 === e ? 0 : Math.pow(2, 10 * (e - 1)) }, easeOutExpo: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) }, easeInOutExpo: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e)) }, easeInCirc: function(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1) }, easeOutCirc: function(e) { return Math.sqrt(1 - (e -= 1) * e) }, easeInOutCirc: function(e) { return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) }, easeInElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) }, easeOutElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1) }, easeInOutElastic: function(e) { var t = 1.70158,
                                n = 0,
                                a = 1; return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1) }, easeInBack: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) }, easeOutBack: function(e) { var t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 }, easeInOutBack: function(e) { var t = 1.70158; return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2) }, easeInBounce: function(e) { return 1 - $.easeOutBounce(1 - e) }, easeOutBounce: function(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 }, easeInOutBounce: function(e) { return e < .5 ? .5 * $.easeInBounce(2 * e) : .5 * $.easeOutBounce(2 * e - 1) + .5 } },
                    Z = { effects: $ };
                K.easingEffects = $; var X = Math.PI,
                    Q = X / 180,
                    ee = 2 * X,
                    te = X / 2,
                    ne = X / 4,
                    ae = 2 * X / 3,
                    re = { clear: function(e) { e.ctx.clearRect(0, 0, e.width, e.height) }, roundedRect: function(e, t, n, a, r, i) { if (i) { var o = Math.min(i, r / 2, a / 2),
                                    s = t + o,
                                    d = n + o,
                                    u = t + a - o,
                                    l = n + r - o;
                                e.moveTo(t, d), s < u && d < l ? (e.arc(s, d, o, -X, -te), e.arc(u, d, o, -te, 0), e.arc(u, l, o, 0, te), e.arc(s, l, o, te, X)) : s < u ? (e.moveTo(s, n), e.arc(u, d, o, -te, te), e.arc(s, d, o, te, X + te)) : d < l ? (e.arc(s, d, o, -X, 0), e.arc(s, l, o, 0, X)) : e.arc(s, d, o, -X, X), e.closePath(), e.moveTo(t, n) } else e.rect(t, n, a, r) }, drawPoint: function(e, t, n, a, r, i) { var o, s, d, u, l, c = (i || 0) * Q; if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (o = t.toString()) && "[object HTMLCanvasElement]" !== o) { if (!(isNaN(n) || n <= 0)) { switch (e.beginPath(), t) { default: e.arc(a, r, n, 0, ee), e.closePath(); break;
                                        case "triangle":
                                                e.moveTo(a + Math.sin(c) * n, r - Math.cos(c) * n), c += ae, e.lineTo(a + Math.sin(c) * n, r - Math.cos(c) * n), c += ae, e.lineTo(a + Math.sin(c) * n, r - Math.cos(c) * n), e.closePath(); break;
                                        case "rectRounded":
                                                u = n - (l = .516 * n), s = Math.cos(c + ne) * u, d = Math.sin(c + ne) * u, e.arc(a - s, r - d, l, c - X, c - te), e.arc(a + d, r - s, l, c - te, c), e.arc(a + s, r + d, l, c, c + te), e.arc(a - d, r + s, l, c + te, c + X), e.closePath(); break;
                                        case "rect":
                                                if (!i) { u = Math.SQRT1_2 * n, e.rect(a - u, r - u, 2 * u, 2 * u); break }c += ne;
                                        case "rectRot":
                                                s = Math.cos(c) * n, d = Math.sin(c) * n, e.moveTo(a - s, r - d), e.lineTo(a + d, r - s), e.lineTo(a + s, r + d), e.lineTo(a - d, r + s), e.closePath(); break;
                                        case "crossRot":
                                                c += ne;
                                        case "cross":
                                                s = Math.cos(c) * n, d = Math.sin(c) * n, e.moveTo(a - s, r - d), e.lineTo(a + s, r + d), e.moveTo(a + d, r - s), e.lineTo(a - d, r + s); break;
                                        case "star":
                                                s = Math.cos(c) * n, d = Math.sin(c) * n, e.moveTo(a - s, r - d), e.lineTo(a + s, r + d), e.moveTo(a + d, r - s), e.lineTo(a - d, r + s), c += ne, s = Math.cos(c) * n, d = Math.sin(c) * n, e.moveTo(a - s, r - d), e.lineTo(a + s, r + d), e.moveTo(a + d, r - s), e.lineTo(a - d, r + s); break;
                                        case "line":
                                                s = Math.cos(c) * n, d = Math.sin(c) * n, e.moveTo(a - s, r - d), e.lineTo(a + s, r + d); break;
                                        case "dash":
                                                e.moveTo(a, r), e.lineTo(a + Math.cos(c) * n, r + Math.sin(c) * n) }
                                    e.fill(), e.stroke() } } else e.drawImage(t, a - t.width / 2, r - t.height / 2, t.width, t.height) }, _isPointInArea: function(e, t) { return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6 }, clipArea: function(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() }, unclipArea: function(e) { e.restore() }, lineTo: function(e, t, n, a) { var r = n.steppedLine; if (r) { if ("middle" === r) { var i = (t.x + n.x) / 2;
                                    e.lineTo(i, a ? n.y : t.y), e.lineTo(i, a ? t.y : n.y) } else "after" === r && !a || "after" !== r && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
                                e.lineTo(n.x, n.y) } else n.tension ? e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y) } },
                    ie = re;
                K.clear = re.clear, K.drawRoundedRectangle = function(e) { e.beginPath(), re.roundedRect.apply(re, arguments) }; var oe = { _set: function(e, t) { return K.merge(this[e] || (this[e] = {}), t) } };
                oe._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 }); var se = oe,
                    de = K.valueOrDefault,
                    ue = { toLineHeight: function(e, t) { var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1]) return 1.2 * t; switch (e = +n[2], n[3]) {
                                case "px":
                                    return e;
                                case "%":
                                    e /= 100 } return t * e }, toPadding: function(e) { var t, n, a, r; return K.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, a = +e.bottom || 0, r = +e.left || 0) : t = n = a = r = +e || 0, { top: t, right: n, bottom: a, left: r, height: t + a, width: r + n } }, _parseFont: function(e) { var t = se.global,
                                n = de(e.fontSize, t.defaultFontSize),
                                a = { family: de(e.fontFamily, t.defaultFontFamily), lineHeight: K.options.toLineHeight(de(e.lineHeight, t.defaultLineHeight), n), size: n, style: de(e.fontStyle, t.defaultFontStyle), weight: null, string: "" }; return a.string = function(e) { return !e || K.isNullOrUndef(e.size) || K.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }(a), a }, resolve: function(e, t, n) { var a, r, i; for (a = 0, r = e.length; a < r; ++a)
                                if (void 0 !== (i = e[a]) && (void 0 !== t && "function" == typeof i && (i = i(t)), void 0 !== n && K.isArray(i) && (i = i[n]), void 0 !== i)) return i } },
                    le = K,
                    ce = Z,
                    he = ie,
                    _e = ue;
                le.easing = ce, le.canvas = he, le.options = _e; var me = function(e) { le.extend(this, e), this.initialize.apply(this, arguments) };
                le.extend(me.prototype, { initialize: function() { this.hidden = !1 }, pivot: function() { var e = this; return e._view || (e._view = le.clone(e._model)), e._start = {}, e }, transition: function(e) { var t = this,
                            n = t._model,
                            a = t._start,
                            r = t._view; return n && 1 !== e ? (r || (r = t._view = {}), a || (a = t._start = {}), function(e, t, n, a) { var r, i, o, s, d, u, l, c, h, _ = Object.keys(n); for (r = 0, i = _.length; r < i; ++r)
                                if (o = _[r], u = n[o], t.hasOwnProperty(o) || (t[o] = u), (s = t[o]) !== u && "_" !== o[0]) { if (e.hasOwnProperty(o) || (e[o] = s), d = e[o], (l = typeof u) == typeof d)
                                        if ("string" === l) { if ((c = G(d)).valid && (h = G(u)).valid) { t[o] = h.mix(c, a).rgbString(); continue } } else if (le.isFinite(d) && le.isFinite(u)) { t[o] = d + (u - d) * a; continue }
                                    t[o] = u } }(a, r, n, e), t) : (t._view = n, t._start = null, t) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return le.isNumber(this._model.x) && le.isNumber(this._model.y) } }), me.extend = le.inherits; var fe = me,
                    pe = fe.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
                    ge = pe;
                Object.defineProperty(pe.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(pe.prototype, "chartInstance", { get: function() { return this.chart }, set: function(e) { this.chart = e } }), se._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: le.noop, onComplete: le.noop } }); var ye = { animations: [], request: null, addAnimation: function(e, t, n, a) { var r, i, o = this.animations; for (t.chart = e, t.startTime = Date.now(), t.duration = n, a || (e.animating = !0), r = 0, i = o.length; r < i; ++r)
                                if (o[r].chart === e) return void(o[r] = t);
                            o.push(t), 1 === o.length && this.requestAnimationFrame() }, cancelAnimation: function(e) { var t = le.findIndex(this.animations, function(t) { return t.chart === e }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1) }, requestAnimationFrame: function() { var e = this;
                            null === e.request && (e.request = le.requestAnimFrame.call(window, function() { e.request = null, e.startDigest() })) }, startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() }, advance: function() { for (var e, t, n, a, r = this.animations, i = 0; i < r.length;) e = r[i], t = e.chart, n = e.numSteps, a = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(a, n), le.callback(e.render, [t, e], t), le.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (le.callback(e.onAnimationComplete, [e], t), t.animating = !1, r.splice(i, 1)) : ++i } },
                    Me = le.options.resolve,
                    ve = ["push", "pop", "shift", "splice", "unshift"];

                function be(e, t) { var n = e._chartjs; if (n) { var a = n.listeners,
                            r = a.indexOf(t); - 1 !== r && a.splice(r, 1), a.length > 0 || (ve.forEach(function(t) { delete e[t] }), delete e._chartjs) } } var Le = function(e, t) { this.initialize(e, t) };
                le.extend(Le.prototype, { datasetElementType: null, dataElementType: null, initialize: function(e, t) { this.chart = e, this.index = t, this.linkScales(), this.addElements() }, updateIndex: function(e) { this.index = e }, linkScales: function() { var e = this,
                            t = e.getMeta(),
                            n = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(e) { return this.chart.scales[e] }, _getValueScaleId: function() { return this.getMeta().yAxisID }, _getIndexScaleId: function() { return this.getMeta().xAxisID }, _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) }, _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) }, reset: function() { this.update(!0) }, destroy: function() { this._data && be(this._data, this) }, createMetaDataset: function() { var e = this.datasetElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(e) { var t = this.dataElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e }) }, addElements: function() { var e, t, n = this.getMeta(),
                            a = this.getDataset().data || [],
                            r = n.data; for (e = 0, t = a.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                        n.dataset = n.dataset || this.createMetaDataset() }, addElementAndReset: function(e) { var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0) }, buildOrUpdateElements: function() { var e, t, n = this,
                            a = n.getDataset(),
                            r = a.data || (a.data = []);
                        n._data !== r && (n._data && be(n._data, n), r && Object.isExtensible(r) && (t = n, (e = r)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), ve.forEach(function(t) { var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                a = e[t];
                            Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: function() { var t = Array.prototype.slice.call(arguments),
                                        r = a.apply(this, t); return le.each(e._chartjs.listeners, function(e) { "function" == typeof e[n] && e[n].apply(e, t) }), r } }) }))), n._data = r), n.resyncElements() }, update: le.noop, transition: function(e) { for (var t = this.getMeta(), n = t.data || [], a = n.length, r = 0; r < a; ++r) n[r].transition(e);
                        t.dataset && t.dataset.transition(e) }, draw: function() { var e = this.getMeta(),
                            t = e.data || [],
                            n = t.length,
                            a = 0; for (e.dataset && e.dataset.draw(); a < n; ++a) t[a].draw() }, removeHoverStyle: function(e) { le.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle }, setHoverStyle: function(e) { var t = this.chart.data.datasets[e._datasetIndex],
                            n = e._index,
                            a = e.custom || {},
                            r = e._model,
                            i = le.getHoverColor;
                        e.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = Me([a.hoverBackgroundColor, t.hoverBackgroundColor, i(r.backgroundColor)], void 0, n), r.borderColor = Me([a.hoverBorderColor, t.hoverBorderColor, i(r.borderColor)], void 0, n), r.borderWidth = Me([a.hoverBorderWidth, t.hoverBorderWidth, r.borderWidth], void 0, n) }, resyncElements: function() { var e = this.getMeta(),
                            t = this.getDataset().data,
                            n = e.data.length,
                            a = t.length;
                        a < n ? e.data.splice(a, n - a) : a > n && this.insertElements(n, a - n) }, insertElements: function(e, t) { for (var n = 0; n < t; ++n) this.addElementAndReset(e + n) }, onDataPush: function() { var e = arguments.length;
                        this.insertElements(this.getDataset().data.length - e, e) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), Le.extend = le.inherits; var ke = Le;
                se._set("global", { elements: { arc: { backgroundColor: se.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } }); var Ye = fe.extend({ inLabelRange: function(e) { var t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) }, inRange: function(e, t) { var n = this._view; if (n) { for (var a = le.getAngleFromPoint(n, { x: e, y: t }), r = a.angle, i = a.distance, o = n.startAngle, s = n.endAngle; s < o;) s += 2 * Math.PI; for (; r > s;) r -= 2 * Math.PI; for (; r < o;) r += 2 * Math.PI; var d = r >= o && r <= s,
                                    u = i >= n.innerRadius && i <= n.outerRadius; return d && u } return !1 }, getCenterPoint: function() { var e = this._view,
                                t = (e.startAngle + e.endAngle) / 2,
                                n = (e.innerRadius + e.outerRadius) / 2; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, getArea: function() { var e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)) }, tooltipPosition: function() { var e = this._view,
                                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                                n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, draw: function() { var e, t = this._chart.ctx,
                                n = this._view,
                                a = n.startAngle,
                                r = n.endAngle,
                                i = "inner" === n.borderAlign ? .33 : 0;
                            t.save(), t.beginPath(), t.arc(n.x, n.y, Math.max(n.outerRadius - i, 0), a, r), t.arc(n.x, n.y, n.innerRadius, r, a, !0), t.closePath(), t.fillStyle = n.backgroundColor, t.fill(), n.borderWidth && ("inner" === n.borderAlign ? (t.beginPath(), e = i / n.outerRadius, t.arc(n.x, n.y, n.outerRadius, a - e, r + e), n.innerRadius > i ? (e = i / n.innerRadius, t.arc(n.x, n.y, n.innerRadius - i, r + e, a - e, !0)) : t.arc(n.x, n.y, i, r + Math.PI / 2, a - Math.PI / 2), t.closePath(), t.clip(), t.beginPath(), t.arc(n.x, n.y, n.outerRadius, a, r), t.arc(n.x, n.y, n.innerRadius, r, a, !0), t.closePath(), t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), t.strokeStyle = n.borderColor, t.stroke()), t.restore() } }),
                    we = le.valueOrDefault,
                    De = se.global.defaultColor;
                se._set("global", { elements: { line: { tension: .4, backgroundColor: De, borderWidth: 3, borderColor: De, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }); var xe = fe.extend({ draw: function() { var e, t, n, a, r = this._view,
                                i = this._chart.ctx,
                                o = r.spanGaps,
                                s = this._children.slice(),
                                d = se.global,
                                u = d.elements.line,
                                l = -1; for (this._loop && s.length && s.push(s[0]), i.save(), i.lineCap = r.borderCapStyle || u.borderCapStyle, i.setLineDash && i.setLineDash(r.borderDash || u.borderDash), i.lineDashOffset = we(r.borderDashOffset, u.borderDashOffset), i.lineJoin = r.borderJoinStyle || u.borderJoinStyle, i.lineWidth = we(r.borderWidth, u.borderWidth), i.strokeStyle = r.borderColor || d.defaultColor, i.beginPath(), l = -1, e = 0; e < s.length; ++e) t = s[e], n = le.previousItem(s, e), a = t._view, 0 === e ? a.skip || (i.moveTo(a.x, a.y), l = e) : (n = -1 === l ? n : s[l], a.skip || (l !== e - 1 && !o || -1 === l ? i.moveTo(a.x, a.y) : le.canvas.lineTo(i, n._view, t._view), l = e));
                            i.stroke(), i.restore() } }),
                    Te = le.valueOrDefault,
                    Se = se.global.defaultColor;

                function He(e) { var t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius }
                se._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: Se, borderColor: Se, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }); var je = fe.extend({ inRange: function(e, t) { var n = this._view; return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) }, inLabelRange: He, inXRange: He, inYRange: function(e) { var t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius }, getCenterPoint: function() { var e = this._view; return { x: e.x, y: e.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth } }, draw: function(e) { var t = this._view,
                                n = this._chart.ctx,
                                a = t.pointStyle,
                                r = t.rotation,
                                i = t.radius,
                                o = t.x,
                                s = t.y,
                                d = se.global,
                                u = d.defaultColor;
                            t.skip || (void 0 === e || le.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || u, n.lineWidth = Te(t.borderWidth, d.elements.point.borderWidth), n.fillStyle = t.backgroundColor || u, le.canvas.drawPoint(n, a, i, o, s, r)) } }),
                    Oe = se.global.defaultColor;

                function Pe(e) { return e && void 0 !== e.width }

                function Ae(e) { var t, n, a, r, i; return Pe(e) ? (i = e.width / 2, t = e.x - i, n = e.x + i, a = Math.min(e.y, e.base), r = Math.max(e.y, e.base)) : (i = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), a = e.y - i, r = e.y + i), { left: t, top: a, right: n, bottom: r } }

                function Ce(e, t, n) { return e === t ? n : e === n ? t : e }

                function Re(e, t, n) { var a, r, i, o, s = e.borderWidth,
                        d = function(e) { var t = e.borderSkipped,
                                n = {}; return t ? (e.horizontal ? e.base > e.x && (t = Ce(t, "left", "right")) : e.base < e.y && (t = Ce(t, "bottom", "top")), n[t] = !0, n) : n }(e); return le.isObject(s) ? (a = +s.top || 0, r = +s.right || 0, i = +s.bottom || 0, o = +s.left || 0) : a = r = i = o = +s || 0, { t: d.top || a < 0 ? 0 : a > n ? n : a, r: d.right || r < 0 ? 0 : r > t ? t : r, b: d.bottom || i < 0 ? 0 : i > n ? n : i, l: d.left || o < 0 ? 0 : o > t ? t : o } }

                function We(e, t, n) { var a = null === t,
                        r = null === n,
                        i = !(!e || a && r) && Ae(e); return i && (a || t >= i.left && t <= i.right) && (r || n >= i.top && n <= i.bottom) }
                se._set("global", { elements: { rectangle: { backgroundColor: Oe, borderColor: Oe, borderSkipped: "bottom", borderWidth: 0 } } }); var Fe = fe.extend({ draw: function() { var e = this._chart.ctx,
                                t = this._view,
                                n = function(e) { var t = Ae(e),
                                        n = t.right - t.left,
                                        a = t.bottom - t.top,
                                        r = Re(e, n / 2, a / 2); return { outer: { x: t.left, y: t.top, w: n, h: a }, inner: { x: t.left + r.l, y: t.top + r.t, w: n - r.l - r.r, h: a - r.t - r.b } } }(t),
                                a = n.outer,
                                r = n.inner;
                            e.fillStyle = t.backgroundColor, e.fillRect(a.x, a.y, a.w, a.h), a.w === r.w && a.h === r.h || (e.save(), e.beginPath(), e.rect(a.x, a.y, a.w, a.h), e.clip(), e.fillStyle = t.borderColor, e.rect(r.x, r.y, r.w, r.h), e.fill("evenodd"), e.restore()) }, height: function() { var e = this._view; return e.base - e.y }, inRange: function(e, t) { return We(this._view, e, t) }, inLabelRange: function(e, t) { var n = this._view; return Pe(n) ? We(n, e, null) : We(n, null, t) }, inXRange: function(e) { return We(this._view, e, null) }, inYRange: function(e) { return We(this._view, null, e) }, getCenterPoint: function() { var e, t, n = this._view; return Pe(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), { x: e, y: t } }, getArea: function() { var e = this._view; return Pe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y } } }),
                    Ie = {},
                    Ee = Ye,
                    ze = xe,
                    Ne = je,
                    Be = Fe;
                Ie.Arc = Ee, Ie.Line = ze, Ie.Point = Ne, Ie.Rectangle = Be; var Ve = le.options.resolve;
                se._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }); var Ue = ke.extend({ dataElementType: Ie.Rectangle, initialize: function() { var e;
                            ke.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0 }, update: function(e) { var t, n, a = this.getMeta().data; for (this._ruler = this.getRuler(), t = 0, n = a.length; t < n; ++t) this.updateElement(a[t], t, e) }, updateElement: function(e, t, n) { var a = this,
                                r = a.getMeta(),
                                i = a.getDataset(),
                                o = a._resolveElementOptions(e, t);
                            e._xScale = a.getScaleForId(r.xAxisID), e._yScale = a.getScaleForId(r.yAxisID), e._datasetIndex = a.index, e._index = t, e._model = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderSkipped: o.borderSkipped, borderWidth: o.borderWidth, datasetLabel: i.label, label: a.chart.data.labels[t] }, a._updateElementGeometry(e, t, n), e.pivot() }, _updateElementGeometry: function(e, t, n) { var a = this,
                                r = e._model,
                                i = a._getValueScale(),
                                o = i.getBasePixel(),
                                s = i.isHorizontal(),
                                d = a._ruler || a.getRuler(),
                                u = a.calculateBarValuePixels(a.index, t),
                                l = a.calculateBarIndexPixels(a.index, t, d);
                            r.horizontal = s, r.base = n ? o : u.base, r.x = s ? n ? o : u.head : l.center, r.y = s ? l.center : n ? o : u.head, r.height = s ? l.size : void 0, r.width = s ? void 0 : l.size }, _getStacks: function(e) { var t, n, a = this.chart,
                                r = this._getIndexScale(),
                                i = r.options.stacked,
                                o = void 0 === e ? a.data.datasets.length : e + 1,
                                s = []; for (t = 0; t < o; ++t)(n = a.getDatasetMeta(t)).bar && a.isDatasetVisible(t) && (!1 === i || !0 === i && -1 === s.indexOf(n.stack) || void 0 === i && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack); return s }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(e, t) { var n = this._getStacks(e),
                                a = void 0 !== t ? n.indexOf(t) : -1; return -1 === a ? n.length - 1 : a }, getRuler: function() { var e, t, n = this._getIndexScale(),
                                a = this.getStackCount(),
                                r = this.index,
                                i = n.isHorizontal(),
                                o = i ? n.left : n.top,
                                s = o + (i ? n.width : n.height),
                                d = []; for (e = 0, t = this.getMeta().data.length; e < t; ++e) d.push(n.getPixelForValue(null, e, r)); return { min: le.isNullOrUndef(n.options.barThickness) ? function(e, t) { var n, a, r, i, o = e.isHorizontal() ? e.width : e.height,
                                        s = e.getTicks(); for (r = 1, i = t.length; r < i; ++r) o = Math.min(o, Math.abs(t[r] - t[r - 1])); for (r = 0, i = s.length; r < i; ++r) a = e.getPixelForTick(r), o = r > 0 ? Math.min(o, a - n) : o, n = a; return o }(n, d) : -1, pixels: d, start: o, end: s, stackCount: a, scale: n } }, calculateBarValuePixels: function(e, t) { var n, a, r, i, o, s, d = this.chart,
                                u = this.getMeta(),
                                l = this._getValueScale(),
                                c = l.isHorizontal(),
                                h = d.data.datasets,
                                _ = +l.getRightValue(h[e].data[t]),
                                m = l.options.minBarLength,
                                f = l.options.stacked,
                                p = u.stack,
                                g = 0; if (f || void 0 === f && void 0 !== p)
                                for (n = 0; n < e; ++n)(a = d.getDatasetMeta(n)).bar && a.stack === p && a.controller._getValueScaleId() === l.id && d.isDatasetVisible(n) && (r = +l.getRightValue(h[n].data[t]), (_ < 0 && r < 0 || _ >= 0 && r > 0) && (g += r)); return i = l.getPixelForValue(g), o = l.getPixelForValue(g + _), s = o - i, void 0 !== m && Math.abs(s) < m && (s = m, o = _ >= 0 && !c || _ < 0 && c ? i - m : i + m), { size: s, base: i, head: o, center: o + s / 2 } }, calculateBarIndexPixels: function(e, t, n) { var a = n.scale.options,
                                r = "flex" === a.barThickness ? function(e, t, n) { var a, r = t.pixels,
                                        i = r[e],
                                        o = e > 0 ? r[e - 1] : null,
                                        s = e < r.length - 1 ? r[e + 1] : null,
                                        d = n.categoryPercentage; return null === o && (o = i - (null === s ? t.end - t.start : s - i)), null === s && (s = i + i - o), a = i - (i - Math.min(o, s)) / 2 * d, { chunk: Math.abs(s - o) / 2 * d / t.stackCount, ratio: n.barPercentage, start: a } }(t, n, a) : function(e, t, n) { var a, r, i = n.barThickness,
                                        o = t.stackCount,
                                        s = t.pixels[e]; return le.isNullOrUndef(i) ? (a = t.min * n.categoryPercentage, r = n.barPercentage) : (a = i * o, r = 1), { chunk: a / o, ratio: r, start: s - a / 2 } }(t, n, a),
                                i = this.getStackIndex(e, this.getMeta().stack),
                                o = r.start + r.chunk * i + r.chunk / 2,
                                s = Math.min(le.valueOrDefault(a.maxBarThickness, 1 / 0), r.chunk * r.ratio); return { base: o - s / 2, head: o + s / 2, center: o, size: s } }, draw: function() { var e = this.chart,
                                t = this._getValueScale(),
                                n = this.getMeta().data,
                                a = this.getDataset(),
                                r = n.length,
                                i = 0; for (le.canvas.clipArea(e.ctx, e.chartArea); i < r; ++i) isNaN(t.getRightValue(a.data[i])) || n[i].draw();
                            le.canvas.unclipArea(e.ctx) }, _resolveElementOptions: function(e, t) { var n, a, r, i = this.chart,
                                o = i.data.datasets,
                                s = o[this.index],
                                d = e.custom || {},
                                u = i.options.elements.rectangle,
                                l = {},
                                c = { chart: i, dataIndex: t, dataset: s, datasetIndex: this.index },
                                h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"]; for (n = 0, a = h.length; n < a; ++n) r = h[n], l[r] = Ve([d[r], s[r], u[r]], c, t); return l } }),
                    Je = le.valueOrDefault,
                    Ge = le.options.resolve;
                se._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { var n = t.datasets[e.datasetIndex].label || "",
                                    a = t.datasets[e.datasetIndex].data[e.index]; return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")" } } } }); var qe = ke.extend({ dataElementType: Ie.Point, update: function(e) { var t = this,
                                n = t.getMeta(),
                                a = n.data;
                            le.each(a, function(n, a) { t.updateElement(n, a, e) }) }, updateElement: function(e, t, n) { var a = this,
                                r = a.getMeta(),
                                i = e.custom || {},
                                o = a.getScaleForId(r.xAxisID),
                                s = a.getScaleForId(r.yAxisID),
                                d = a._resolveElementOptions(e, t),
                                u = a.getDataset().data[t],
                                l = a.index,
                                c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, t, l),
                                h = n ? s.getBasePixel() : s.getPixelForValue(u, t, l);
                            e._xScale = o, e._yScale = s, e._options = d, e._datasetIndex = l, e._index = t, e._model = { backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, hitRadius: d.hitRadius, pointStyle: d.pointStyle, rotation: d.rotation, radius: n ? 0 : d.radius, skip: i.skip || isNaN(c) || isNaN(h), x: c, y: h }, e.pivot() }, setHoverStyle: function(e) { var t = e._model,
                                n = e._options,
                                a = le.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Je(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Je(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Je(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius }, _resolveElementOptions: function(e, t) { var n, a, r, i = this.chart,
                                o = i.data.datasets,
                                s = o[this.index],
                                d = e.custom || {},
                                u = i.options.elements.point,
                                l = s.data[t],
                                c = {},
                                h = { chart: i, dataIndex: t, dataset: s, datasetIndex: this.index },
                                _ = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"]; for (n = 0, a = _.length; n < a; ++n) r = _[n], c[r] = Ge([d[r], s[r], u[r]], h, t); return c.radius = Ge([d.radius, l ? l.r : void 0, s.radius, u.radius], h, t), c } }),
                    Ke = le.options.resolve,
                    $e = le.valueOrDefault;
                se._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                            a = n.datasets,
                            r = n.labels; if (a.length)
                            for (var i = 0; i < a[0].data.length; ++i) t.push('<li><span style="background-color:' + a[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) { var r = e.getDatasetMeta(0),
                                        i = t.datasets[0],
                                        o = r.data[a],
                                        s = o && o.custom || {},
                                        d = e.options.elements.arc,
                                        u = Ke([s.backgroundColor, i.backgroundColor, d.backgroundColor], void 0, a),
                                        l = Ke([s.borderColor, i.borderColor, d.borderColor], void 0, a),
                                        c = Ke([s.borderWidth, i.borderWidth, d.borderWidth], void 0, a); return { text: n, fillStyle: u, strokeStyle: l, lineWidth: c, hidden: isNaN(i.data[a]) || r.data[a].hidden, index: a } }) : [] } }, onClick: function(e, t) { var n, a, r, i = t.index,
                                o = this.chart; for (n = 0, a = (o.data.datasets || []).length; n < a; ++n)(r = o.getDatasetMeta(n)).data[i] && (r.data[i].hidden = !r.data[i].hidden);
                            o.update() } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { var n = t.labels[e.index],
                                    a = ": " + t.datasets[e.datasetIndex].data[e.index]; return le.isArray(n) ? (n = n.slice())[0] += a : n += a, n } } } }); var Ze = ke.extend({ dataElementType: Ie.Arc, linkScales: le.noop, getRingIndex: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t; return t }, update: function(e) { var t, n, a = this,
                            r = a.chart,
                            i = r.chartArea,
                            o = r.options,
                            s = i.right - i.left,
                            d = i.bottom - i.top,
                            u = Math.min(s, d),
                            l = { x: 0, y: 0 },
                            c = a.getMeta(),
                            h = c.data,
                            _ = o.cutoutPercentage,
                            m = o.circumference,
                            f = a._getRingWeight(a.index); if (m < 2 * Math.PI) { var p = o.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + m,
                                y = { x: Math.cos(p), y: Math.sin(p) },
                                M = { x: Math.cos(g), y: Math.sin(g) },
                                v = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                L = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                k = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                Y = _ / 100,
                                w = { x: L ? -1 : Math.min(y.x * (y.x < 0 ? 1 : Y), M.x * (M.x < 0 ? 1 : Y)), y: k ? -1 : Math.min(y.y * (y.y < 0 ? 1 : Y), M.y * (M.y < 0 ? 1 : Y)) },
                                D = { x: v ? 1 : Math.max(y.x * (y.x > 0 ? 1 : Y), M.x * (M.x > 0 ? 1 : Y)), y: b ? 1 : Math.max(y.y * (y.y > 0 ? 1 : Y), M.y * (M.y > 0 ? 1 : Y)) },
                                x = { width: .5 * (D.x - w.x), height: .5 * (D.y - w.y) };
                            u = Math.min(s / x.width, d / x.height), l = { x: -.5 * (D.x + w.x), y: -.5 * (D.y + w.y) } } for (t = 0, n = h.length; t < n; ++t) h[t]._options = a._resolveElementOptions(h[t], t); for (r.borderWidth = a.getMaxBorderWidth(), r.outerRadius = Math.max((u - r.borderWidth) / 2, 0), r.innerRadius = Math.max(_ ? r.outerRadius / 100 * _ : 0, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), r.offsetX = l.x * r.outerRadius, r.offsetY = l.y * r.outerRadius, c.total = a.calculateTotal(), a.outerRadius = r.outerRadius - r.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - r.radiusLength * f, 0), t = 0, n = h.length; t < n; ++t) a.updateElement(h[t], t, e) }, updateElement: function(e, t, n) { var a = this,
                            r = a.chart,
                            i = r.chartArea,
                            o = r.options,
                            s = o.animation,
                            d = (i.left + i.right) / 2,
                            u = (i.top + i.bottom) / 2,
                            l = o.rotation,
                            c = o.rotation,
                            h = a.getDataset(),
                            _ = n && s.animateRotate ? 0 : e.hidden ? 0 : a.calculateCircumference(h.data[t]) * (o.circumference / (2 * Math.PI)),
                            m = n && s.animateScale ? 0 : a.innerRadius,
                            f = n && s.animateScale ? 0 : a.outerRadius,
                            p = e._options || {};
                        le.extend(e, { _datasetIndex: a.index, _index: t, _model: { backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, borderAlign: p.borderAlign, x: d + r.offsetX, y: u + r.offsetY, startAngle: l, endAngle: c, circumference: _, outerRadius: f, innerRadius: m, label: le.valueAtIndexOrDefault(h.label, t, r.data.labels[t]) } }); var g = e._model;
                        n && s.animateRotate || (g.startAngle = 0 === t ? o.rotation : a.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot() }, calculateTotal: function() { var e, t = this.getDataset(),
                            n = this.getMeta(),
                            a = 0; return le.each(n.data, function(n, r) { e = t.data[r], isNaN(e) || n.hidden || (a += Math.abs(e)) }), a }, calculateCircumference: function(e) { var t = this.getMeta().total; return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0 }, getMaxBorderWidth: function(e) { var t, n, a, r, i, o, s, d, u = 0,
                            l = this.chart; if (!e)
                            for (t = 0, n = l.data.datasets.length; t < n; ++t)
                                if (l.isDatasetVisible(t)) { a = l.getDatasetMeta(t), e = a.data, t !== this.index && (i = a.controller); break }
                        if (!e) return 0; for (t = 0, n = e.length; t < n; ++t) r = e[t], "inner" !== (o = i ? i._resolveElementOptions(r, t) : r._options).borderAlign && (s = o.borderWidth, d = o.hoverBorderWidth, u = d > (u = s > u ? s : u) ? d : u); return u }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = le.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = $e(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = $e(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = $e(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, a, r, i = this.chart,
                            o = this.getDataset(),
                            s = e.custom || {},
                            d = i.options.elements.arc,
                            u = {},
                            l = { chart: i, dataIndex: t, dataset: o, datasetIndex: this.index },
                            c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, a = c.length; n < a; ++n) r = c[n], u[r] = Ke([s[r], o[r], d[r]], l, t); return u }, _getRingWeightOffset: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n)); return t }, _getRingWeight: function(e) { return Math.max($e(this.chart.data.datasets[e].weight, 1), 0) }, _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) } });
                se._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }); var Xe = Ue.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
                    Qe = le.valueOrDefault,
                    et = le.options.resolve,
                    tt = le.canvas._isPointInArea;

                function nt(e, t) { return Qe(e.showLine, t.showLines) }
                se._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }); var at = ke.extend({ datasetElementType: Ie.Line, dataElementType: Ie.Point, update: function(e) { var t, n, a = this,
                                r = a.getMeta(),
                                i = r.dataset,
                                o = r.data || [],
                                s = a.getScaleForId(r.yAxisID),
                                d = a.getDataset(),
                                u = nt(d, a.chart.options); for (u && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = s, i._datasetIndex = a.index, i._children = o, i._model = a._resolveLineOptions(i), i.pivot()), t = 0, n = o.length; t < n; ++t) a.updateElement(o[t], t, e); for (u && 0 !== i._model.tension && a.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot() }, updateElement: function(e, t, n) { var a, r, i = this,
                                o = i.getMeta(),
                                s = e.custom || {},
                                d = i.getDataset(),
                                u = i.index,
                                l = d.data[t],
                                c = i.getScaleForId(o.yAxisID),
                                h = i.getScaleForId(o.xAxisID),
                                _ = o.dataset._model,
                                m = i._resolvePointOptions(e, t);
                            a = h.getPixelForValue("object" == typeof l ? l : NaN, t, u), r = n ? c.getBasePixel() : i.calculatePointY(l, t, u), e._xScale = h, e._yScale = c, e._options = m, e._datasetIndex = u, e._index = t, e._model = { x: a, y: r, skip: s.skip || isNaN(a) || isNaN(r), radius: m.radius, pointStyle: m.pointStyle, rotation: m.rotation, backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, tension: Qe(s.tension, _ ? _.tension : 0), steppedLine: !!_ && _.steppedLine, hitRadius: m.hitRadius } }, _resolvePointOptions: function(e, t) { var n, a, r, i = this.chart,
                                o = i.data.datasets[this.index],
                                s = e.custom || {},
                                d = i.options.elements.point,
                                u = {},
                                l = { chart: i, dataIndex: t, dataset: o, datasetIndex: this.index },
                                c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                                h = Object.keys(c); for (n = 0, a = h.length; n < a; ++n) r = h[n], u[r] = et([s[r], o[c[r]], o[r], d[r]], l, t); return u }, _resolveLineOptions: function(e) { var t, n, a, r = this.chart,
                                i = r.data.datasets[this.index],
                                o = e.custom || {},
                                s = r.options,
                                d = s.elements.line,
                                u = {},
                                l = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"]; for (t = 0, n = l.length; t < n; ++t) a = l[t], u[a] = et([o[a], i[a], d[a]]); return u.spanGaps = Qe(i.spanGaps, s.spanGaps), u.tension = Qe(i.lineTension, d.tension), u.steppedLine = et([o.steppedLine, i.steppedLine, d.stepped]), u }, calculatePointY: function(e, t, n) { var a, r, i, o = this.chart,
                                s = this.getMeta(),
                                d = this.getScaleForId(s.yAxisID),
                                u = 0,
                                l = 0; if (d.options.stacked) { for (a = 0; a < n; a++)
                                    if (r = o.data.datasets[a], "line" === (i = o.getDatasetMeta(a)).type && i.yAxisID === d.id && o.isDatasetVisible(a)) { var c = Number(d.getRightValue(r.data[t]));
                                        c < 0 ? l += c || 0 : u += c || 0 }
                                var h = Number(d.getRightValue(e)); return h < 0 ? d.getPixelForValue(l + h) : d.getPixelForValue(u + h) } return d.getPixelForValue(e) }, updateBezierControlPoints: function() { var e, t, n, a, r = this.chart,
                                i = this.getMeta(),
                                o = i.dataset._model,
                                s = r.chartArea,
                                d = i.data || [];

                            function u(e, t, n) { return Math.max(Math.min(e, n), t) } if (o.spanGaps && (d = d.filter(function(e) { return !e._model.skip })), "monotone" === o.cubicInterpolationMode) le.splineCurveMonotone(d);
                            else
                                for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, a = le.splineCurve(le.previousItem(d, e)._model, n, le.nextItem(d, e)._model, o.tension), n.controlPointPreviousX = a.previous.x, n.controlPointPreviousY = a.previous.y, n.controlPointNextX = a.next.x, n.controlPointNextY = a.next.y; if (r.options.elements.line.capBezierPoints)
                                for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, tt(n, s) && (e > 0 && tt(d[e - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), e < d.length - 1 && tt(d[e + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom))) }, draw: function() { var e, t = this.chart,
                                n = this.getMeta(),
                                a = n.data || [],
                                r = t.chartArea,
                                i = a.length,
                                o = 0; for (nt(this.getDataset(), t.options) && (e = (n.dataset._model.borderWidth || 0) / 2, le.canvas.clipArea(t.ctx, { left: r.left, right: r.right, top: r.top - e, bottom: r.bottom + e }), n.dataset.draw(), le.canvas.unclipArea(t.ctx)); o < i; ++o) a[o].draw(r) }, setHoverStyle: function(e) { var t = e._model,
                                n = e._options,
                                a = le.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Qe(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Qe(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Qe(n.hoverBorderWidth, n.borderWidth), t.radius = Qe(n.hoverRadius, n.radius) } }),
                    rt = le.options.resolve;
                se._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                            a = n.datasets,
                            r = n.labels; if (a.length)
                            for (var i = 0; i < a[0].data.length; ++i) t.push('<li><span style="background-color:' + a[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) { var r = e.getDatasetMeta(0),
                                        i = t.datasets[0],
                                        o = r.data[a],
                                        s = o.custom || {},
                                        d = e.options.elements.arc,
                                        u = rt([s.backgroundColor, i.backgroundColor, d.backgroundColor], void 0, a),
                                        l = rt([s.borderColor, i.borderColor, d.borderColor], void 0, a),
                                        c = rt([s.borderWidth, i.borderWidth, d.borderWidth], void 0, a); return { text: n, fillStyle: u, strokeStyle: l, lineWidth: c, hidden: isNaN(i.data[a]) || r.data[a].hidden, index: a } }) : [] } }, onClick: function(e, t) { var n, a, r, i = t.index,
                                o = this.chart; for (n = 0, a = (o.data.datasets || []).length; n < a; ++n)(r = o.getDatasetMeta(n)).data[i].hidden = !r.data[i].hidden;
                            o.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return t.labels[e.index] + ": " + e.yLabel } } } }); var it = ke.extend({ dataElementType: Ie.Arc, linkScales: le.noop, update: function(e) { var t, n, a, r = this,
                            i = r.getDataset(),
                            o = r.getMeta(),
                            s = r.chart.options.startAngle || 0,
                            d = r._starts = [],
                            u = r._angles = [],
                            l = o.data; for (r._updateRadius(), o.count = r.countVisibleElements(), t = 0, n = i.data.length; t < n; t++) d[t] = s, a = r._computeAngle(t), u[t] = a, s += a; for (t = 0, n = l.length; t < n; ++t) l[t]._options = r._resolveElementOptions(l[t], t), r.updateElement(l[t], t, e) }, _updateRadius: function() { var e = this,
                            t = e.chart,
                            n = t.chartArea,
                            a = t.options,
                            r = Math.min(n.right - n.left, n.bottom - n.top);
                        t.outerRadius = Math.max(r / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength }, updateElement: function(e, t, n) { var a = this,
                            r = a.chart,
                            i = a.getDataset(),
                            o = r.options,
                            s = o.animation,
                            d = r.scale,
                            u = r.data.labels,
                            l = d.xCenter,
                            c = d.yCenter,
                            h = o.startAngle,
                            _ = e.hidden ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
                            m = a._starts[t],
                            f = m + (e.hidden ? 0 : a._angles[t]),
                            p = s.animateScale ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
                            g = e._options || {};
                        le.extend(e, { _datasetIndex: a.index, _index: t, _scale: d, _model: { backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, borderAlign: g.borderAlign, x: l, y: c, innerRadius: 0, outerRadius: n ? p : _, startAngle: n && s.animateRotate ? h : m, endAngle: n && s.animateRotate ? h : f, label: le.valueAtIndexOrDefault(u, t, u[t]) } }), e.pivot() }, countVisibleElements: function() { var e = this.getDataset(),
                            t = this.getMeta(),
                            n = 0; return le.each(t.data, function(t, a) { isNaN(e.data[a]) || t.hidden || n++ }), n }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = le.getHoverColor,
                            r = le.valueOrDefault;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = r(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = r(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = r(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, a, r, i = this.chart,
                            o = this.getDataset(),
                            s = e.custom || {},
                            d = i.options.elements.arc,
                            u = {},
                            l = { chart: i, dataIndex: t, dataset: o, datasetIndex: this.index },
                            c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, a = c.length; n < a; ++n) r = c[n], u[r] = rt([s[r], o[r], d[r]], l, t); return u }, _computeAngle: function(e) { var t = this,
                            n = this.getMeta().count,
                            a = t.getDataset(),
                            r = t.getMeta(); if (isNaN(a.data[e]) || r.data[e].hidden) return 0; var i = { chart: t.chart, dataIndex: e, dataset: a, datasetIndex: t.index }; return rt([t.chart.options.elements.arc.angle, 2 * Math.PI / n], i, e) } });
                se._set("pie", le.clone(se.doughnut)), se._set("pie", { cutoutPercentage: 0 }); var ot = Ze,
                    st = le.valueOrDefault,
                    dt = le.options.resolve;
                se._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }); var ut = ke.extend({ datasetElementType: Ie.Line, dataElementType: Ie.Point, linkScales: le.noop, update: function(e) { var t, n, a = this,
                            r = a.getMeta(),
                            i = r.dataset,
                            o = r.data || [],
                            s = a.chart.scale,
                            d = a.getDataset(); for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = s, i._datasetIndex = a.index, i._children = o, i._loop = !0, i._model = a._resolveLineOptions(i), i.pivot(), t = 0, n = o.length; t < n; ++t) a.updateElement(o[t], t, e); for (a.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot() }, updateElement: function(e, t, n) { var a = this,
                            r = e.custom || {},
                            i = a.getDataset(),
                            o = a.chart.scale,
                            s = o.getPointPositionForValue(t, i.data[t]),
                            d = a._resolvePointOptions(e, t),
                            u = a.getMeta().dataset._model,
                            l = n ? o.xCenter : s.x,
                            c = n ? o.yCenter : s.y;
                        e._scale = o, e._options = d, e._datasetIndex = a.index, e._index = t, e._model = { x: l, y: c, skip: r.skip || isNaN(l) || isNaN(c), radius: d.radius, pointStyle: d.pointStyle, rotation: d.rotation, backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, tension: st(r.tension, u ? u.tension : 0), hitRadius: d.hitRadius } }, _resolvePointOptions: function(e, t) { var n, a, r, i = this.chart,
                            o = i.data.datasets[this.index],
                            s = e.custom || {},
                            d = i.options.elements.point,
                            u = {},
                            l = { chart: i, dataIndex: t, dataset: o, datasetIndex: this.index },
                            c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                            h = Object.keys(c); for (n = 0, a = h.length; n < a; ++n) r = h[n], u[r] = dt([s[r], o[c[r]], o[r], d[r]], l, t); return u }, _resolveLineOptions: function(e) { var t, n, a, r = this.chart,
                            i = r.data.datasets[this.index],
                            o = e.custom || {},
                            s = r.options.elements.line,
                            d = {},
                            u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"]; for (t = 0, n = u.length; t < n; ++t) a = u[t], d[a] = dt([o[a], i[a], s[a]]); return d.tension = st(i.lineTension, s.tension), d }, updateBezierControlPoints: function() { var e, t, n, a, r = this.getMeta(),
                            i = this.chart.chartArea,
                            o = r.data || [];

                        function s(e, t, n) { return Math.max(Math.min(e, n), t) } for (e = 0, t = o.length; e < t; ++e) n = o[e]._model, a = le.splineCurve(le.previousItem(o, e, !0)._model, n, le.nextItem(o, e, !0)._model, n.tension), n.controlPointPreviousX = s(a.previous.x, i.left, i.right), n.controlPointPreviousY = s(a.previous.y, i.top, i.bottom), n.controlPointNextX = s(a.next.x, i.left, i.right), n.controlPointNextY = s(a.next.y, i.top, i.bottom) }, setHoverStyle: function(e) { var t = e._model,
                            n = e._options,
                            a = le.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = st(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = st(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = st(n.hoverBorderWidth, n.borderWidth), t.radius = st(n.hoverRadius, n.radius) } });
                se._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function() { return "" }, label: function(e) { return "(" + e.xLabel + ", " + e.yLabel + ")" } } } }); var lt = { bar: Ue, bubble: qe, doughnut: Ze, horizontalBar: Xe, line: at, polarArea: it, pie: ot, radar: ut, scatter: at };

                function ct(e, t) { return e.native ? { x: e.x, y: e.y } : le.getRelativePosition(e, t) }

                function ht(e, t) { var n, a, r, i, o, s = e.data.datasets; for (a = 0, i = s.length; a < i; ++a)
                        if (e.isDatasetVisible(a))
                            for (n = e.getDatasetMeta(a), r = 0, o = n.data.length; r < o; ++r) { var d = n.data[r];
                                d._view.skip || t(d) } }

                function _t(e, t) { var n = []; return ht(e, function(e) { e.inRange(t.x, t.y) && n.push(e) }), n }

                function mt(e, t, n, a) { var r = Number.POSITIVE_INFINITY,
                        i = []; return ht(e, function(e) { if (!n || e.inRange(t.x, t.y)) { var o = e.getCenterPoint(),
                                s = a(t, o);
                            s < r ? (i = [e], r = s) : s === r && i.push(e) } }), i }

                function ft(e) { var t = -1 !== e.indexOf("x"),
                        n = -1 !== e.indexOf("y"); return function(e, a) { var r = t ? Math.abs(e.x - a.x) : 0,
                            i = n ? Math.abs(e.y - a.y) : 0; return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)) } }

                function pt(e, t, n) { var a = ct(t, e);
                    n.axis = n.axis || "x"; var r = ft(n.axis),
                        i = n.intersect ? _t(e, a) : mt(e, a, !1, r),
                        o = []; return i.length ? (e.data.datasets.forEach(function(t, n) { if (e.isDatasetVisible(n)) { var a = e.getDatasetMeta(n),
                                r = a.data[i[0]._index];
                            r && !r._view.skip && o.push(r) } }), o) : [] } var gt = { modes: { single: function(e, t) { var n = ct(t, e),
                                a = []; return ht(e, function(e) { if (e.inRange(n.x, n.y)) return a.push(e), a }), a.slice(0, 1) }, label: pt, index: pt, dataset: function(e, t, n) { var a = ct(t, e);
                            n.axis = n.axis || "xy"; var r = ft(n.axis),
                                i = n.intersect ? _t(e, a) : mt(e, a, !1, r); return i.length > 0 && (i = e.getDatasetMeta(i[0]._datasetIndex).data), i }, "x-axis": function(e, t) { return pt(e, t, { intersect: !1 }) }, point: function(e, t) { var n = ct(t, e); return _t(e, n) }, nearest: function(e, t, n) { var a = ct(t, e);
                            n.axis = n.axis || "xy"; var r = ft(n.axis); return mt(e, a, n.intersect, r) }, x: function(e, t, n) { var a = ct(t, e),
                                r = [],
                                i = !1; return ht(e, function(e) { e.inXRange(a.x) && r.push(e), e.inRange(a.x, a.y) && (i = !0) }), n.intersect && !i && (r = []), r }, y: function(e, t, n) { var a = ct(t, e),
                                r = [],
                                i = !1; return ht(e, function(e) { e.inYRange(a.y) && r.push(e), e.inRange(a.x, a.y) && (i = !0) }), n.intersect && !i && (r = []), r } } };

                function yt(e, t) { return le.where(e, function(e) { return e.position === t }) }

                function Mt(e, t) { e.forEach(function(e, t) { return e._tmpIndex_ = t, e }), e.sort(function(e, n) { var a = t ? n : e,
                            r = t ? e : n; return a.weight === r.weight ? a._tmpIndex_ - r._tmpIndex_ : a.weight - r.weight }), e.forEach(function(e) { delete e._tmpIndex_ }) }

                function vt(e, t) { le.each(e, function(e) { t[e.position] += e.isHorizontal() ? e.height : e.width }) }
                se._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }); var bt, Lt = { defaults: {}, addBox: function(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t) }, removeBox: function(e, t) { var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1) }, configure: function(e, t, n) { for (var a, r = ["fullWidth", "position", "weight"], i = r.length, o = 0; o < i; ++o) a = r[o], n.hasOwnProperty(a) && (t[a] = n[a]) }, update: function(e, t, n) { if (e) { var a = e.options.layout || {},
                                    r = le.options.toPadding(a.padding),
                                    i = r.left,
                                    o = r.right,
                                    s = r.top,
                                    d = r.bottom,
                                    u = yt(e.boxes, "left"),
                                    l = yt(e.boxes, "right"),
                                    c = yt(e.boxes, "top"),
                                    h = yt(e.boxes, "bottom"),
                                    _ = yt(e.boxes, "chartArea");
                                Mt(u, !0), Mt(l, !1), Mt(c, !0), Mt(h, !1); var m, f = u.concat(l),
                                    p = c.concat(h),
                                    g = f.concat(p),
                                    y = t - i - o,
                                    M = n - s - d,
                                    v = y / 2,
                                    b = (t - v) / f.length,
                                    L = y,
                                    k = M,
                                    Y = { top: s, left: i, bottom: d, right: o },
                                    w = [];
                                le.each(g, function(e) { var t, n = e.isHorizontal();
                                    n ? (t = e.update(e.fullWidth ? y : L, M / 2), k -= t.height) : (t = e.update(b, k), L -= t.width), w.push({ horizontal: n, width: t.width, box: e }) }), m = function(e) { var t = 0,
                                        n = 0,
                                        a = 0,
                                        r = 0; return le.each(e, function(e) { if (e.getPadding) { var i = e.getPadding();
                                            t = Math.max(t, i.top), n = Math.max(n, i.left), a = Math.max(a, i.bottom), r = Math.max(r, i.right) } }), { top: t, left: n, bottom: a, right: r } }(g), le.each(f, O), vt(f, Y), le.each(p, O), vt(p, Y), le.each(f, function(e) { var t = le.findNextWhere(w, function(t) { return t.box === e }),
                                        n = { left: 0, right: 0, top: Y.top, bottom: Y.bottom };
                                    t && e.update(t.width, k, n) }), vt(g, Y = { top: s, left: i, bottom: d, right: o }); var D = Math.max(m.left - Y.left, 0);
                                Y.left += D, Y.right += Math.max(m.right - Y.right, 0); var x = Math.max(m.top - Y.top, 0);
                                Y.top += x, Y.bottom += Math.max(m.bottom - Y.bottom, 0); var T = n - Y.top - Y.bottom,
                                    S = t - Y.left - Y.right;
                                S === L && T === k || (le.each(f, function(e) { e.height = T }), le.each(p, function(e) { e.fullWidth || (e.width = S) }), k = T, L = S); var H = i + D,
                                    j = s + x;
                                le.each(u.concat(c), P), H += L, j += k, le.each(l, P), le.each(h, P), e.chartArea = { left: Y.left, top: Y.top, right: Y.left + L, bottom: Y.top + k }, le.each(_, function(t) { t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, k) }) }

                            function O(e) { var t = le.findNextWhere(w, function(t) { return t.box === e }); if (t)
                                    if (t.horizontal) { var n = { left: Math.max(Y.left, m.left), right: Math.max(Y.right, m.right), top: 0, bottom: 0 };
                                        e.update(e.fullWidth ? y : L, M / 2, n) } else e.update(t.width, k) }

                            function P(e) { e.isHorizontal() ? (e.left = e.fullWidth ? i : Y.left, e.right = e.fullWidth ? t - o : Y.left + L, e.top = j, e.bottom = j + e.height, j = e.bottom) : (e.left = H, e.right = H + e.width, e.top = Y.top, e.bottom = Y.top + k, H = e.right) } } },
                    kt = (bt = Object.freeze({ default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && bt.default || bt,
                    Yt = "$chartjs",
                    wt = "chartjs-size-monitor",
                    Dt = "chartjs-render-monitor",
                    xt = "chartjs-render-animation",
                    Tt = ["animationstart", "webkitAnimationStart"],
                    St = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

                function Ht(e, t) { var n = le.getStyle(e, t),
                        a = n && n.match(/^(\d+)(\.\d+)?px$/); return a ? Number(a[1]) : void 0 } var jt = !! function() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        window.addEventListener("e", null, t) } catch (n) {} return e }() && { passive: !0 };

                function Ot(e, t, n) { e.addEventListener(t, n, jt) }

                function Pt(e, t, n) { e.removeEventListener(t, n, jt) }

                function At(e, t, n, a, r) { return { type: e, chart: t, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== a ? a : null } }

                function Ct(e) { var t = document.createElement("div"); return t.className = e || "", t }

                function Rt(e, t, n) { var a, r, i, o, s = e[Yt] || (e[Yt] = {}),
                        d = s.resizer = function(e) { var t = Ct(wt),
                                n = Ct(wt + "-expand"),
                                a = Ct(wt + "-shrink");
                            n.appendChild(Ct()), a.appendChild(Ct()), t.appendChild(n), t.appendChild(a), t._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6 }; var r = function() { t._reset(), e() }; return Ot(n, "scroll", r.bind(n, "expand")), Ot(a, "scroll", r.bind(a, "shrink")), t }((a = function() { if (s.resizer) { var a = n.options.maintainAspectRatio && e.parentNode,
                                    r = a ? a.clientWidth : 0;
                                t(At("resize", n)), a && a.clientWidth < r && n.canvas && t(At("resize", n)) } }, i = !1, o = [], function() { o = Array.prototype.slice.call(arguments), r = r || this, i || (i = !0, le.requestAnimFrame.call(window, function() { i = !1, a.apply(r, o) })) }));! function(e, t) { var n = e[Yt] || (e[Yt] = {}),
                            a = n.renderProxy = function(e) { e.animationName === xt && t() };
                        le.each(Tt, function(t) { Ot(e, t, a) }), n.reflow = !!e.offsetParent, e.classList.add(Dt) }(e, function() { if (s.resizer) { var t = e.parentNode;
                            t && t !== d.parentNode && t.insertBefore(d, t.firstChild), d._reset() } }) }

                function Wt(e) { var t = e[Yt] || {},
                        n = t.resizer;
                    delete t.resizer,
                        function(e) { var t = e[Yt] || {},
                                n = t.renderProxy;
                            n && (le.each(Tt, function(t) { Pt(e, t, n) }), delete t.renderProxy), e.classList.remove(Dt) }(e), n && n.parentNode && n.parentNode.removeChild(n) } var Ft = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function() { var e, t, n;
                        this._loaded || (this._loaded = !0, this.disableCSSInjection || (t = kt, n = (e = this)._style || document.createElement("style"), e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t)))) }, acquireContext: function(e, t) { "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas); var n = e && e.getContext && e.getContext("2d"); return this._ensureLoaded(), n && n.canvas === e ? (function(e, t) { var n = e.style,
                                a = e.getAttribute("height"),
                                r = e.getAttribute("width"); if (e[Yt] = { initial: { height: a, width: r, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === r || "" === r) { var i = Ht(e, "width");
                                void 0 !== i && (e.width = i) } if (null === a || "" === a)
                                if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                                else { var o = Ht(e, "height");
                                    void 0 !== i && (e.height = o) } }(e, t), n) : null }, releaseContext: function(e) { var t = e.canvas; if (t[Yt]) { var n = t[Yt].initial;
                            ["height", "width"].forEach(function(e) { var a = n[e];
                                le.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a) }), le.each(n.style || {}, function(e, n) { t.style[n] = e }), t.width = t.width, delete t[Yt] } }, addEventListener: function(e, t, n) { var a = e.canvas; if ("resize" !== t) { var r = n[Yt] || (n[Yt] = {}),
                                i = r.proxies || (r.proxies = {}),
                                o = i[e.id + "_" + t] = function(t) { n(function(e, t) { var n = St[e.type] || e.type,
                                            a = le.getRelativePosition(e, t); return At(n, t, a.x, a.y, e) }(t, e)) };
                            Ot(a, t, o) } else Rt(a, n, e) }, removeEventListener: function(e, t, n) { var a = e.canvas; if ("resize" !== t) { var r = n[Yt] || {},
                                i = r.proxies || {},
                                o = i[e.id + "_" + t];
                            o && Pt(a, t, o) } else Wt(a) } };
                le.addEvent = Ot, le.removeEvent = Pt; var It = Ft._enabled ? Ft : { acquireContext: function(e) { return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null } },
                    Et = le.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, It);
                se._set("global", { plugins: {} }); var zt = { _plugins: [], _cacheId: 0, register: function(e) { var t = this._plugins;
                            [].concat(e).forEach(function(e) {-1 === t.indexOf(e) && t.push(e) }), this._cacheId++ }, unregister: function(e) { var t = this._plugins;
                            [].concat(e).forEach(function(e) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) }), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(e, t, n) { var a, r, i, o, s, d = this.descriptors(e),
                                u = d.length; for (a = 0; a < u; ++a)
                                if (r = d[a], i = r.plugin, "function" == typeof(s = i[t]) && ((o = [e].concat(n || [])).push(r.options), !1 === s.apply(i, o))) return !1;
                            return !0 }, descriptors: function(e) { var t = e.$plugins || (e.$plugins = {}); if (t.id === this._cacheId) return t.descriptors; var n = [],
                                a = [],
                                r = e && e.config || {},
                                i = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach(function(e) { var t = n.indexOf(e); if (-1 === t) { var r = e.id,
                                        o = i[r];!1 !== o && (!0 === o && (o = le.clone(se.global.plugins[r])), n.push(e), a.push({ plugin: e, options: o || {} })) } }), t.descriptors = a, t.id = this._cacheId, a }, _invalidate: function(e) { delete e.$plugins } },
                    Nt = { constructors: {}, defaults: {}, registerScaleType: function(e, t, n) { this.constructors[e] = t, this.defaults[e] = le.clone(n) }, getScaleConstructor: function(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0 }, getScaleDefaults: function(e) { return this.defaults.hasOwnProperty(e) ? le.merge({}, [se.scale, this.defaults[e]]) : {} }, updateScaleDefaults: function(e, t) { this.defaults.hasOwnProperty(e) && (this.defaults[e] = le.extend(this.defaults[e], t)) }, addScalesToLayout: function(e) { le.each(e.scales, function(t) { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, Lt.addBox(e, t) }) } },
                    Bt = le.valueOrDefault;
                se._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: le.noop, title: function(e, t) { var n = "",
                                    a = t.labels,
                                    r = a ? a.length : 0; if (e.length > 0) { var i = e[0];
                                    i.label ? n = i.label : i.xLabel ? n = i.xLabel : r > 0 && i.index < r && (n = a[i.index]) } return n }, afterTitle: le.noop, beforeBody: le.noop, beforeLabel: le.noop, label: function(e, t) { var n = t.datasets[e.datasetIndex].label || ""; return n && (n += ": "), le.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n }, labelColor: function(e, t) { var n = t.getDatasetMeta(e.datasetIndex),
                                    a = n.data[e.index],
                                    r = a._view; return { borderColor: r.borderColor, backgroundColor: r.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: le.noop, afterBody: le.noop, beforeFooter: le.noop, footer: le.noop, afterFooter: le.noop } } }); var Vt = { average: function(e) { if (!e.length) return !1; var t, n, a = 0,
                            r = 0,
                            i = 0; for (t = 0, n = e.length; t < n; ++t) { var o = e[t]; if (o && o.hasValue()) { var s = o.tooltipPosition();
                                a += s.x, r += s.y, ++i } } return { x: a / i, y: r / i } }, nearest: function(e, t) { var n, a, r, i = t.x,
                            o = t.y,
                            s = Number.POSITIVE_INFINITY; for (n = 0, a = e.length; n < a; ++n) { var d = e[n]; if (d && d.hasValue()) { var u = d.getCenterPoint(),
                                    l = le.distanceBetweenPoints(t, u);
                                l < s && (s = l, r = d) } } if (r) { var c = r.tooltipPosition();
                            i = c.x, o = c.y } return { x: i, y: o } } };

                function Ut(e, t) { return t && (le.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

                function Jt(e) { return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e }

                function Gt(e) { var t = se.global; return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Bt(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Bt(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Bt(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Bt(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Bt(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Bt(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Bt(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Bt(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Bt(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth } }

                function qt(e, t) { return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding }

                function Kt(e) { return Ut([], Jt(e)) } var $t = fe.extend({ initialize: function() { this._model = Gt(this._options), this._lastActive = [] }, getTitle: function() { var e = this._options,
                                t = e.callbacks,
                                n = t.beforeTitle.apply(this, arguments),
                                a = t.title.apply(this, arguments),
                                r = t.afterTitle.apply(this, arguments),
                                i = []; return i = Ut(i, Jt(n)), i = Ut(i, Jt(a)), i = Ut(i, Jt(r)) }, getBeforeBody: function() { return Kt(this._options.callbacks.beforeBody.apply(this, arguments)) }, getBody: function(e, t) { var n = this,
                                a = n._options.callbacks,
                                r = []; return le.each(e, function(e) { var i = { before: [], lines: [], after: [] };
                                Ut(i.before, Jt(a.beforeLabel.call(n, e, t))), Ut(i.lines, a.label.call(n, e, t)), Ut(i.after, Jt(a.afterLabel.call(n, e, t))), r.push(i) }), r }, getAfterBody: function() { return Kt(this._options.callbacks.afterBody.apply(this, arguments)) }, getFooter: function() { var e = this._options.callbacks,
                                t = e.beforeFooter.apply(this, arguments),
                                n = e.footer.apply(this, arguments),
                                a = e.afterFooter.apply(this, arguments),
                                r = []; return r = Ut(r, Jt(t)), r = Ut(r, Jt(n)), r = Ut(r, Jt(a)) }, update: function(e) { var t, n, a, r, i, o, s, d, u, l, c = this,
                                h = c._options,
                                _ = c._model,
                                m = c._model = Gt(h),
                                f = c._active,
                                p = c._data,
                                g = { xAlign: _.xAlign, yAlign: _.yAlign },
                                y = { x: _.x, y: _.y },
                                M = { width: _.width, height: _.height },
                                v = { x: _.caretX, y: _.caretY }; if (f.length) { m.opacity = 1; var b = [],
                                    L = [];
                                v = Vt[h.position].call(c, f, c._eventPosition); var k = []; for (t = 0, n = f.length; t < n; ++t) k.push((a = f[t], r = void 0, i = void 0, o = void 0, s = void 0, d = void 0, u = void 0, l = void 0, r = a._xScale, i = a._yScale || a._scale, o = a._index, s = a._datasetIndex, d = a._chart.getDatasetMeta(s).controller, u = d._getIndexScale(), l = d._getValueScale(), { xLabel: r ? r.getLabelForIndex(o, s) : "", yLabel: i ? i.getLabelForIndex(o, s) : "", label: u ? "" + u.getLabelForIndex(o, s) : "", value: l ? "" + l.getLabelForIndex(o, s) : "", index: o, datasetIndex: s, x: a._model.x, y: a._model.y }));
                                h.filter && (k = k.filter(function(e) { return h.filter(e, p) })), h.itemSort && (k = k.sort(function(e, t) { return h.itemSort(e, t, p) })), le.each(k, function(e) { b.push(h.callbacks.labelColor.call(c, e, c._chart)), L.push(h.callbacks.labelTextColor.call(c, e, c._chart)) }), m.title = c.getTitle(k, p), m.beforeBody = c.getBeforeBody(k, p), m.body = c.getBody(k, p), m.afterBody = c.getAfterBody(k, p), m.footer = c.getFooter(k, p), m.x = v.x, m.y = v.y, m.caretPadding = h.caretPadding, m.labelColors = b, m.labelTextColors = L, m.dataPoints = k, M = function(e, t) { var n = e._chart.ctx,
                                        a = 2 * t.yPadding,
                                        r = 0,
                                        i = t.body,
                                        o = i.reduce(function(e, t) { return e + t.before.length + t.lines.length + t.after.length }, 0);
                                    o += t.beforeBody.length + t.afterBody.length; var s = t.title.length,
                                        d = t.footer.length,
                                        u = t.titleFontSize,
                                        l = t.bodyFontSize,
                                        c = t.footerFontSize;
                                    a += s * u, a += s ? (s - 1) * t.titleSpacing : 0, a += s ? t.titleMarginBottom : 0, a += o * l, a += o ? (o - 1) * t.bodySpacing : 0, a += d ? t.footerMarginTop : 0, a += d * c, a += d ? (d - 1) * t.footerSpacing : 0; var h = 0,
                                        _ = function(e) { r = Math.max(r, n.measureText(e).width + h) }; return n.font = le.fontString(u, t._titleFontStyle, t._titleFontFamily), le.each(t.title, _), n.font = le.fontString(l, t._bodyFontStyle, t._bodyFontFamily), le.each(t.beforeBody.concat(t.afterBody), _), h = t.displayColors ? l + 2 : 0, le.each(i, function(e) { le.each(e.before, _), le.each(e.lines, _), le.each(e.after, _) }), h = 0, n.font = le.fontString(c, t._footerFontStyle, t._footerFontFamily), le.each(t.footer, _), { width: r += 2 * t.xPadding, height: a } }(this, m), g = function(e, t) { var n, a, r, i, o, s = e._model,
                                        d = e._chart,
                                        u = e._chart.chartArea,
                                        l = "center",
                                        c = "center";
                                    s.y < t.height ? c = "top" : s.y > d.height - t.height && (c = "bottom"); var h = (u.left + u.right) / 2,
                                        _ = (u.top + u.bottom) / 2; "center" === c ? (n = function(e) { return e <= h }, a = function(e) { return e > h }) : (n = function(e) { return e <= t.width / 2 }, a = function(e) { return e >= d.width - t.width / 2 }), r = function(e) { return e + t.width + s.caretSize + s.caretPadding > d.width }, i = function(e) { return e - t.width - s.caretSize - s.caretPadding < 0 }, o = function(e) { return e <= _ ? "top" : "bottom" }, n(s.x) ? (l = "left", r(s.x) && (l = "center", c = o(s.y))) : a(s.x) && (l = "right", i(s.x) && (l = "center", c = o(s.y))); var m = e._options; return { xAlign: m.xAlign ? m.xAlign : l, yAlign: m.yAlign ? m.yAlign : c } }(this, M), y = function(e, t, n, a) { var r = e.x,
                                        i = e.y,
                                        o = e.caretSize,
                                        s = e.caretPadding,
                                        d = e.cornerRadius,
                                        u = n.xAlign,
                                        l = n.yAlign,
                                        c = o + s,
                                        h = d + s; return "right" === u ? r -= t.width : "center" === u && ((r -= t.width / 2) + t.width > a.width && (r = a.width - t.width), r < 0 && (r = 0)), "top" === l ? i += c : i -= "bottom" === l ? t.height + c : t.height / 2, "center" === l ? "left" === u ? r += c : "right" === u && (r -= c) : "left" === u ? r -= h : "right" === u && (r += h), { x: r, y: i } }(m, M, g, c._chart) } else m.opacity = 0; return m.xAlign = g.xAlign, m.yAlign = g.yAlign, m.x = y.x, m.y = y.y, m.width = M.width, m.height = M.height, m.caretX = v.x, m.caretY = v.y, c._model = m, e && h.custom && h.custom.call(c, m), c }, drawCaret: function(e, t) { var n = this._chart.ctx,
                                a = this._view,
                                r = this.getCaretPosition(e, t, a);
                            n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3) }, getCaretPosition: function(e, t, n) { var a, r, i, o, s, d, u = n.caretSize,
                                l = n.cornerRadius,
                                c = n.xAlign,
                                h = n.yAlign,
                                _ = e.x,
                                m = e.y,
                                f = t.width,
                                p = t.height; if ("center" === h) s = m + p / 2, "left" === c ? (r = (a = _) - u, i = a, o = s + u, d = s - u) : (r = (a = _ + f) + u, i = a, o = s - u, d = s + u);
                            else if ("left" === c ? (a = (r = _ + l + u) - u, i = r + u) : "right" === c ? (a = (r = _ + f - l - u) - u, i = r + u) : (r = n.caretX, a = r - u, i = r + u), "top" === h) s = (o = m) - u, d = o;
                            else { s = (o = m + p) + u, d = o; var g = i;
                                i = a, a = g } return { x1: a, x2: r, x3: i, y1: o, y2: s, y3: d } }, drawTitle: function(e, t, n) { var a = t.title; if (a.length) { e.x = qt(t, t._titleAlign), n.textAlign = t._titleAlign, n.textBaseline = "top"; var r, i, o = t.titleFontSize,
                                    s = t.titleSpacing; for (n.fillStyle = t.titleFontColor, n.font = le.fontString(o, t._titleFontStyle, t._titleFontFamily), r = 0, i = a.length; r < i; ++r) n.fillText(a[r], e.x, e.y), e.y += o + s, r + 1 === a.length && (e.y += t.titleMarginBottom - s) } }, drawBody: function(e, t, n) { var a, r = t.bodyFontSize,
                                i = t.bodySpacing,
                                o = t._bodyAlign,
                                s = t.body,
                                d = t.displayColors,
                                u = t.labelColors,
                                l = 0,
                                c = d ? qt(t, "left") : 0;
                            n.textAlign = o, n.textBaseline = "top", n.font = le.fontString(r, t._bodyFontStyle, t._bodyFontFamily), e.x = qt(t, o); var h = function(t) { n.fillText(t, e.x + l, e.y), e.y += r + i };
                            n.fillStyle = t.bodyFontColor, le.each(t.beforeBody, h), l = d && "right" !== o ? "center" === o ? r / 2 + 1 : r + 2 : 0, le.each(s, function(i, o) { a = t.labelTextColors[o], n.fillStyle = a, le.each(i.before, h), le.each(i.lines, function(i) { d && (n.fillStyle = t.legendColorBackground, n.fillRect(c, e.y, r, r), n.lineWidth = 1, n.strokeStyle = u[o].borderColor, n.strokeRect(c, e.y, r, r), n.fillStyle = u[o].backgroundColor, n.fillRect(c + 1, e.y + 1, r - 2, r - 2), n.fillStyle = a), h(i) }), le.each(i.after, h) }), l = 0, le.each(t.afterBody, h), e.y -= i }, drawFooter: function(e, t, n) { var a = t.footer;
                            a.length && (e.x = qt(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = t.footerFontColor, n.font = le.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), le.each(a, function(a) { n.fillText(a, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing })) }, drawBackground: function(e, t, n, a) { n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth; var r = t.xAlign,
                                i = t.yAlign,
                                o = e.x,
                                s = e.y,
                                d = a.width,
                                u = a.height,
                                l = t.cornerRadius;
                            n.beginPath(), n.moveTo(o + l, s), "top" === i && this.drawCaret(e, a), n.lineTo(o + d - l, s), n.quadraticCurveTo(o + d, s, o + d, s + l), "center" === i && "right" === r && this.drawCaret(e, a), n.lineTo(o + d, s + u - l), n.quadraticCurveTo(o + d, s + u, o + d - l, s + u), "bottom" === i && this.drawCaret(e, a), n.lineTo(o + l, s + u), n.quadraticCurveTo(o, s + u, o, s + u - l), "center" === i && "left" === r && this.drawCaret(e, a), n.lineTo(o, s + l), n.quadraticCurveTo(o, s, o + l, s), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke() }, draw: function() { var e = this._chart.ctx,
                                t = this._view; if (0 !== t.opacity) { var n = { width: t.width, height: t.height },
                                    a = { x: t.x, y: t.y },
                                    r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                                    i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                                this._options.enabled && i && (e.save(), e.globalAlpha = r, this.drawBackground(a, t, e, n), a.y += t.yPadding, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), e.restore()) } }, handleEvent: function(e) { var t = this,
                                n = t._options,
                                a = !1; return t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, n.mode, n), (a = !le.arrayEquals(t._active, t._lastActive)) && (t._lastActive = t._active, (n.enabled || n.custom) && (t._eventPosition = { x: e.x, y: e.y }, t.update(!0), t.pivot())), a } }),
                    Zt = Vt,
                    Xt = $t;
                Xt.positioners = Zt; var Qt = le.valueOrDefault;

                function en() { return le.merge({}, [].slice.call(arguments), { merger: function(e, t, n, a) { if ("xAxes" === e || "yAxes" === e) { var r, i, o, s = n[e].length; for (t[e] || (t[e] = []), r = 0; r < s; ++r) o = n[e][r], i = Qt(o.type, "xAxes" === e ? "category" : "linear"), r >= t[e].length && t[e].push({}), !t[e][r].type || o.type && o.type !== t[e][r].type ? le.merge(t[e][r], [Nt.getScaleDefaults(i), o]) : le.merge(t[e][r], o) } else le._merger(e, t, n, a) } }) }

                function tn() { return le.merge({}, [].slice.call(arguments), { merger: function(e, t, n, a) { var r = t[e] || {},
                                i = n[e]; "scales" === e ? t[e] = en(r, i) : "scale" === e ? t[e] = le.merge(r, [Nt.getScaleDefaults(i.type), i]) : le._merger(e, t, n, a) } }) }

                function nn(e) { return "top" === e || "bottom" === e }
                se._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 }); var an = function(e, t) { return this.construct(e, t), this };
                le.extend(an.prototype, { construct: function(e, t) { var n = this;
                        t = function(e) { var t = (e = e || {}).data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = tn(se.global, se[e.type], e.options || {}), e }(t); var a = Et.acquireContext(e, t),
                            r = a && a.canvas,
                            i = r && r.height,
                            o = r && r.width;
                        n.id = le.uid(), n.ctx = a, n.canvas = r, n.config = t, n.width = o, n.height = i, n.aspectRatio = i ? o / i : null, n.options = t.options, n._bufferedRender = !1, n.chart = n, n.controller = n, an.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(e) { n.config.data = e } }), a && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item") }, initialize: function() { var e = this; return zt.notify(e, "beforeInit"), le.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), zt.notify(e, "afterInit"), e }, clear: function() { return le.canvas.clear(this), this }, stop: function() { return ye.cancelAnimation(this), this }, resize: function(e) { var t = this,
                            n = t.options,
                            a = t.canvas,
                            r = n.maintainAspectRatio && t.aspectRatio || null,
                            i = Math.max(0, Math.floor(le.getMaximumWidth(a))),
                            o = Math.max(0, Math.floor(r ? i / r : le.getMaximumHeight(a))); if ((t.width !== i || t.height !== o) && (a.width = t.width = i, a.height = t.height = o, a.style.width = i + "px", a.style.height = o + "px", le.retinaScale(t, n.devicePixelRatio), !e)) { var s = { width: i, height: o };
                            zt.notify(t, "resize", [s]), n.onResize && n.onResize(t, s), t.stop(), t.update({ duration: n.responsiveAnimationDuration }) } }, ensureScalesHaveIDs: function() { var e = this.options,
                            t = e.scales || {},
                            n = e.scale;
                        le.each(t.xAxes, function(e, t) { e.id = e.id || "x-axis-" + t }), le.each(t.yAxes, function(e, t) { e.id = e.id || "y-axis-" + t }), n && (n.id = n.id || "scale") }, buildOrUpdateScales: function() { var e = this,
                            t = e.options,
                            n = e.scales || {},
                            a = [],
                            r = Object.keys(n).reduce(function(e, t) { return e[t] = !1, e }, {});
                        t.scales && (a = a.concat((t.scales.xAxes || []).map(function(e) { return { options: e, dtype: "category", dposition: "bottom" } }), (t.scales.yAxes || []).map(function(e) { return { options: e, dtype: "linear", dposition: "left" } }))), t.scale && a.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), le.each(a, function(t) { var a = t.options,
                                i = a.id,
                                o = Qt(a.type, t.dtype);
                            nn(a.position) !== nn(t.dposition) && (a.position = t.dposition), r[i] = !0; var s = null; if (i in n && n[i].type === o)(s = n[i]).options = a, s.ctx = e.ctx, s.chart = e;
                            else { var d = Nt.getScaleConstructor(o); if (!d) return;
                                s = new d({ id: i, type: o, options: a, ctx: e.ctx, chart: e }), n[s.id] = s }
                            s.mergeTicksOptions(), t.isDefault && (e.scale = s) }), le.each(r, function(e, t) { e || delete n[t] }), e.scales = n, Nt.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var e = this,
                            t = []; return le.each(e.data.datasets, function(n, a) { var r = e.getDatasetMeta(a),
                                i = n.type || e.config.type; if (r.type && r.type !== i && (e.destroyDatasetMeta(a), r = e.getDatasetMeta(a)), r.type = i, r.controller) r.controller.updateIndex(a), r.controller.linkScales();
                            else { var o = lt[r.type]; if (void 0 === o) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new o(e, a), t.push(r.controller) } }, e), t }, resetElements: function() { var e = this;
                        le.each(e.data.datasets, function(t, n) { e.getDatasetMeta(n).controller.reset() }, e) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(e) { var t, n, a = this; if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), n = (t = a).options, le.each(t.scales, function(e) { Lt.removeBox(t, e) }), n = tn(se.global, se[t.config.type], n), t.options = t.config.options = n, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = n.tooltips, t.tooltip.initialize(), zt._invalidate(a), !1 !== zt.notify(a, "beforeUpdate")) { a.tooltip._data = a.data; var r = a.buildOrUpdateControllers();
                            le.each(a.data.datasets, function(e, t) { a.getDatasetMeta(t).controller.buildOrUpdateElements() }, a), a.updateLayout(), a.options.animation && a.options.animation.duration && le.each(r, function(e) { e.reset() }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], zt.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : a.render(e) } }, updateLayout: function() {!1 !== zt.notify(this, "beforeLayout") && (Lt.update(this, this.width, this.height), zt.notify(this, "afterScaleUpdate"), zt.notify(this, "afterLayout")) }, updateDatasets: function() { if (!1 !== zt.notify(this, "beforeDatasetsUpdate")) { for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            zt.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(e) { var t = this.getDatasetMeta(e),
                            n = { meta: t, index: e };!1 !== zt.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), zt.notify(this, "afterDatasetUpdate", [n])) }, render: function(e) { var t = this;
                        e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }); var n = t.options.animation,
                            a = Qt(e.duration, n && n.duration),
                            r = e.lazy; if (!1 !== zt.notify(t, "beforeRender")) { var i = function(e) { zt.notify(t, "afterRender"), le.callback(n && n.onComplete, [e], t) }; if (n && a) { var o = new ge({ numSteps: a / 16.66, easing: e.easing || n.easing, render: function(e, t) { var n = le.easing.effects[t.easing],
                                            a = t.currentStep,
                                            r = a / t.numSteps;
                                        e.draw(n(r), r, a) }, onAnimationProgress: n.onProgress, onAnimationComplete: i });
                                ye.addAnimation(t, o, a, r) } else t.draw(), i(new ge({ numSteps: 0, chart: t })); return t } }, draw: function(e) { var t = this;
                        t.clear(), le.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== zt.notify(t, "beforeDraw", [e]) && (le.each(t.boxes, function(e) { e.draw(t.chartArea) }, t), t.drawDatasets(e), t._drawTooltip(e), zt.notify(t, "afterDraw", [e])) }, transition: function(e) { for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e) }, drawDatasets: function(e) { var t = this; if (!1 !== zt.notify(t, "beforeDatasetsDraw", [e])) { for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                            zt.notify(t, "afterDatasetsDraw", [e]) } }, drawDataset: function(e, t) { var n = this.getDatasetMeta(e),
                            a = { meta: n, index: e, easingValue: t };!1 !== zt.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(t), zt.notify(this, "afterDatasetDraw", [a])) }, _drawTooltip: function(e) { var t = this.tooltip,
                            n = { tooltip: t, easingValue: e };!1 !== zt.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), zt.notify(this, "afterTooltipDraw", [n])) }, getElementAtEvent: function(e) { return gt.modes.single(this, e) }, getElementsAtEvent: function(e) { return gt.modes.label(this, e, { intersect: !0 }) }, getElementsAtXAxis: function(e) { return gt.modes["x-axis"](this, e, { intersect: !0 }) }, getElementsAtEventForMode: function(e, t, n) { var a = gt.modes[t]; return "function" == typeof a ? a(this, e, n) : [] }, getDatasetAtEvent: function(e) { return gt.modes.dataset(this, e, { intersect: !0 }) }, getDatasetMeta: function(e) { var t = this.data.datasets[e];
                        t._meta || (t._meta = {}); var n = t._meta[this.id]; return n || (n = t._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n }, getVisibleDatasetCount: function() { for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++; return e }, isDatasetVisible: function(e) { var t = this.getDatasetMeta(e); return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(e) { var t = this.id,
                            n = this.data.datasets[e],
                            a = n._meta && n._meta[t];
                        a && (a.controller.destroy(), delete n._meta[t]) }, destroy: function() { var e, t, n = this,
                            a = n.canvas; for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
                        a && (n.unbindEvents(), le.canvas.clear(n), Et.releaseContext(n.ctx), n.canvas = null, n.ctx = null), zt.notify(n, "destroy"), delete an.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var e = this;
                        e.tooltip = new Xt({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e) }, bindEvents: function() { var e = this,
                            t = e._listeners = {},
                            n = function() { e.eventHandler.apply(e, arguments) };
                        le.each(e.options.events, function(a) { Et.addEventListener(e, a, n), t[a] = n }), e.options.responsive && (n = function() { e.resize() }, Et.addEventListener(e, "resize", n), t.resize = n) }, unbindEvents: function() { var e = this,
                            t = e._listeners;
                        t && (delete e._listeners, le.each(t, function(t, n) { Et.removeEventListener(e, n, t) })) }, updateHoverStyle: function(e, t, n) { var a, r, i, o = n ? "setHoverStyle" : "removeHoverStyle"; for (r = 0, i = e.length; r < i; ++r)(a = e[r]) && this.getDatasetMeta(a._datasetIndex).controller[o](a) }, eventHandler: function(e) { var t = this,
                            n = t.tooltip; if (!1 !== zt.notify(t, "beforeEvent", [e])) { t._bufferedRender = !0, t._bufferedRequest = null; var a = t.handleEvent(e);
                            n && (a = n._start ? n.handleEvent(e) : a | n.handleEvent(e)), zt.notify(t, "afterEvent", [e]); var r = t._bufferedRequest; return r ? t.render(r) : a && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t } }, handleEvent: function(e) { var t = this,
                            n = t.options || {},
                            a = n.hover,
                            r = !1; return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, a.mode, a), le.callback(n.onHover || n.hover.onHover, [e.native, t.active], t), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, a.mode, !1), t.active.length && a.mode && t.updateHoverStyle(t.active, a.mode, !0), r = !le.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, r } }), an.instances = {}; var rn = an;

                function on() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

                function sn(e) { this.options = e || {} }
                an.Controller = an, an.types = {}, le.configMerge = tn, le.scaleMerge = en, le.extend(sn.prototype, { formats: on, parse: on, format: on, add: on, diff: on, startOf: on, endOf: on, _create: function(e) { return e } }), sn.override = function(e) { le.extend(sn.prototype, e) }; var dn = { _date: sn },
                    un = { formatters: { values: function(e) { return le.isArray(e) ? e : "" + e }, linear: function(e, t, n) { var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(a) > 1 && e !== Math.floor(e) && (a = e - Math.floor(e)); var r = le.log10(Math.abs(a)),
                                    i = ""; if (0 !== e) { var o = Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])); if (o < 1e-4) { var s = le.log10(Math.abs(e));
                                        i = e.toExponential(Math.floor(s) - Math.floor(r)) } else { var d = -1 * Math.floor(r);
                                        d = Math.max(Math.min(d, 20), 0), i = e.toFixed(d) } } else i = "0"; return i }, logarithmic: function(e, t, n) { var a = e / Math.pow(10, Math.floor(le.log10(e))); return 0 === e ? "0" : 1 === a || 2 === a || 5 === a || 0 === t || t === n.length - 1 ? e.toExponential() : "" } } },
                    ln = le.valueOrDefault,
                    cn = le.valueAtIndexOrDefault;

                function hn(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(e[t].label); return a }

                function _n(e, t, n) { return le.isArray(t) ? le.longestText(e, n, t) : e.measureText(t).width }
                se._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: un.formatters.values, minor: {}, major: {} } }); var mn = fe.extend({ getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, mergeTicksOptions: function() { var e = this.options.ticks; for (var t in !1 === e.minor && (e.minor = { display: !1 }), !1 === e.major && (e.major = { display: !1 }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t])) }, beforeUpdate: function() { le.callback(this.options.beforeUpdate, [this]) }, update: function(e, t, n) { var a, r, i, o, s, d, u = this; for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = le.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], s = u.afterBuildTicks(s) || s, u.beforeTickToLabelConversion(), i = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = i, a = 0, r = i.length; a < r; ++a) o = i[a], (d = s[a]) ? d.label = o : s.push(d = { label: o, major: !1 }); return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize }, afterUpdate: function() { le.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { le.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var e = this;
                            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0 }, afterSetDimensions: function() { le.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { le.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: le.noop, afterDataLimits: function() { le.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { le.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: le.noop, afterBuildTicks: function(e) { var t = this; return le.isArray(e) && e.length ? le.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = le.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e) }, beforeTickToLabelConversion: function() { le.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var e = this.options.ticks;
                            this.ticks = this.ticks.map(e.userCallback || e.callback, this) }, afterTickToLabelConversion: function() { le.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { le.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var e = this,
                                t = e.ctx,
                                n = e.options.ticks,
                                a = hn(e._ticks),
                                r = le.options._parseFont(n);
                            t.font = r.string; var i = n.minRotation || 0; if (a.length && e.options.display && e.isHorizontal())
                                for (var o, s = le.longestText(t, r.string, a, e.longestTextCache), d = s, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > u && i < n.maxRotation;) { var l = le.toRadians(i); if (o = Math.cos(l), Math.sin(l) * s > e.maxHeight) { i--; break }
                                    i++, d = o * s }
                            e.labelRotation = i }, afterCalculateTickRotation: function() { le.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { le.callback(this.options.beforeFit, [this]) }, fit: function() { var e = this,
                                t = e.minSize = { width: 0, height: 0 },
                                n = hn(e._ticks),
                                a = e.options,
                                r = a.ticks,
                                i = a.scaleLabel,
                                o = a.gridLines,
                                s = e._isVisible(),
                                d = a.position,
                                u = e.isHorizontal(),
                                l = le.options._parseFont,
                                c = l(r),
                                h = a.gridLines.tickMarkLength; if (t.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : s && o.drawTicks ? h : 0, t.height = u ? s && o.drawTicks ? h : 0 : e.maxHeight, i.display && s) { var _ = l(i),
                                    m = le.options.toPadding(i.padding),
                                    f = _.lineHeight + m.height;
                                u ? t.height += f : t.width += f } if (r.display && s) { var p = le.longestText(e.ctx, c.string, n, e.longestTextCache),
                                    g = le.numberOfLabelLines(n),
                                    y = .5 * c.size,
                                    M = e.options.ticks.padding; if (e._maxLabelLines = g, e.longestLabelWidth = p, u) { var v = le.toRadians(e.labelRotation),
                                        b = Math.cos(v),
                                        L = Math.sin(v),
                                        k = L * p + c.lineHeight * g + y;
                                    t.height = Math.min(e.maxHeight, t.height + k + M), e.ctx.font = c.string; var Y, w, D = _n(e.ctx, n[0], c.string),
                                        x = _n(e.ctx, n[n.length - 1], c.string),
                                        T = e.getPixelForTick(0) - e.left,
                                        S = e.right - e.getPixelForTick(n.length - 1);
                                    0 !== e.labelRotation ? (Y = "bottom" === d ? b * D : b * y, w = "bottom" === d ? b * y : b * x) : (Y = D / 2, w = x / 2), e.paddingLeft = Math.max(Y - T, 0) + 3, e.paddingRight = Math.max(w - S, 0) + 3 } else r.mirror ? p = 0 : p += M + y, t.width = Math.min(e.maxWidth, t.width + p), e.paddingTop = c.size / 2, e.paddingBottom = c.size / 2 }
                            e.handleMargins(), e.width = t.width, e.height = t.height }, handleMargins: function() { var e = this;
                            e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0)) }, afterFit: function() { le.callback(this.options.afterFit, [this]) }, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(e) { if (le.isNullOrUndef(e)) return NaN; if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN; if (e)
                                if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x) } else if (void 0 !== e.y) return this.getRightValue(e.y); return e }, getLabelForIndex: le.noop, getPixelForValue: le.noop, getValueForPixel: le.noop, getPixelForTick: function(e) { var t = this,
                                n = t.options.offset; if (t.isHorizontal()) { var a = t.width - (t.paddingLeft + t.paddingRight),
                                    r = a / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                    i = r * e + t.paddingLeft;
                                n && (i += r / 2); var o = t.left + i; return o += t.isFullWidth() ? t.margins.left : 0 } var s = t.height - (t.paddingTop + t.paddingBottom); return t.top + e * (s / (t._ticks.length - 1)) }, getPixelForDecimal: function(e) { var t = this; if (t.isHorizontal()) { var n = t.width - (t.paddingLeft + t.paddingRight),
                                    a = n * e + t.paddingLeft,
                                    r = t.left + a; return r += t.isFullWidth() ? t.margins.left : 0 } return t.top + e * t.height }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var e = this.min,
                                t = this.max; return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0 }, _autoSkip: function(e) { var t, n, a = this,
                                r = a.isHorizontal(),
                                i = a.options.ticks.minor,
                                o = e.length,
                                s = !1,
                                d = i.maxTicksLimit,
                                u = a._tickSize() * (o - 1),
                                l = r ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.PaddingBottom),
                                c = []; for (u > l && (s = 1 + Math.floor(u / l)), o > d && (s = Math.max(s, 1 + Math.floor(o / d))), t = 0; t < o; t++) n = e[t], s > 1 && t % s > 0 && delete n.label, c.push(n); return c }, _tickSize: function() { var e = this,
                                t = e.isHorizontal(),
                                n = e.options.ticks.minor,
                                a = le.toRadians(e.labelRotation),
                                r = Math.abs(Math.cos(a)),
                                i = Math.abs(Math.sin(a)),
                                o = n.autoSkipPadding || 0,
                                s = e.longestLabelWidth + o || 0,
                                d = le.options._parseFont(n),
                                u = e._maxLabelLines * d.lineHeight + o || 0; return t ? u * r > s * i ? s / r : u / i : u * i < s * r ? u / r : s / i }, _isVisible: function() { var e, t, n, a = this.chart,
                                r = this.options.display; if ("auto" !== r) return !!r; for (e = 0, t = a.data.datasets.length; e < t; ++e)
                                if (a.isDatasetVisible(e) && ((n = a.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                            return !1 }, draw: function(e) { var t = this,
                                n = t.options; if (t._isVisible()) { var a, r, i, o = t.chart,
                                    s = t.ctx,
                                    d = se.global,
                                    u = d.defaultFontColor,
                                    l = n.ticks.minor,
                                    c = n.ticks.major || l,
                                    h = n.gridLines,
                                    _ = n.scaleLabel,
                                    m = n.position,
                                    f = 0 !== t.labelRotation,
                                    p = l.mirror,
                                    g = t.isHorizontal(),
                                    y = le.options._parseFont,
                                    M = l.display && l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                                    v = ln(l.fontColor, u),
                                    b = y(l),
                                    L = b.lineHeight,
                                    k = ln(c.fontColor, u),
                                    Y = y(c),
                                    w = l.padding,
                                    D = l.labelOffset,
                                    x = h.drawTicks ? h.tickMarkLength : 0,
                                    T = ln(_.fontColor, u),
                                    S = y(_),
                                    H = le.options.toPadding(_.padding),
                                    j = le.toRadians(t.labelRotation),
                                    O = [],
                                    P = h.drawBorder ? cn(h.lineWidth, 0, 0) : 0,
                                    A = le._alignPixel; if ("top" === m ? (a = A(o, t.bottom, P), r = t.bottom - x, i = a - P / 2) : "bottom" === m ? (a = A(o, t.top, P), r = a + P / 2, i = t.top + x) : "left" === m ? (a = A(o, t.right, P), r = t.right - x, i = a - P / 2) : (a = A(o, t.left, P), r = a + P / 2, i = t.left + x), le.each(M, function(a, s) { if (!le.isNullOrUndef(a.label)) { var d, u, l, c, _, y, M, v, b, k, Y, T, S, H, C, R, W = a.label;
                                            s === t.zeroLineIndex && n.offset === h.offsetGridLines ? (d = h.zeroLineWidth, u = h.zeroLineColor, l = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (d = cn(h.lineWidth, s), u = cn(h.color, s), l = h.borderDash || [], c = h.borderDashOffset || 0); var F = le.isArray(W) ? W.length : 1,
                                                I = function(e, t, n) { var a = e.getPixelForTick(t); return n && (1 === e.getTicks().length ? a -= e.isHorizontal() ? Math.max(a - e.left, e.right - a) : Math.max(a - e.top, e.bottom - a) : a -= 0 === t ? (e.getPixelForTick(1) - a) / 2 : (a - e.getPixelForTick(t - 1)) / 2), a }(t, s, h.offsetGridLines); if (g) { var E = x + w;
                                                I < t.left - 1e-7 && (u = "rgba(0,0,0,0)"), _ = M = b = Y = A(o, I, d), y = r, v = i, S = t.getPixelForTick(s) + D, "top" === m ? (k = A(o, e.top, P) + P / 2, T = e.bottom, C = ((f ? 1 : .5) - F) * L, R = f ? "left" : "center", H = t.bottom - E) : (k = e.top, T = A(o, e.bottom, P) - P / 2, C = (f ? 0 : .5) * L, R = f ? "right" : "center", H = t.top + E) } else { var z = (p ? 0 : x) + w;
                                                I < t.top - 1e-7 && (u = "rgba(0,0,0,0)"), _ = r, M = i, y = v = k = T = A(o, I, d), H = t.getPixelForTick(s) + D, C = (1 - F) * L / 2, "left" === m ? (b = A(o, e.left, P) + P / 2, Y = e.right, R = p ? "left" : "right", S = t.right - z) : (b = e.left, Y = A(o, e.right, P) - P / 2, R = p ? "right" : "left", S = t.left + z) }
                                            O.push({ tx1: _, ty1: y, tx2: M, ty2: v, x1: b, y1: k, x2: Y, y2: T, labelX: S, labelY: H, glWidth: d, glColor: u, glBorderDash: l, glBorderDashOffset: c, rotation: -1 * j, label: W, major: a.major, textOffset: C, textAlign: R }) } }), le.each(O, function(e) { var t = e.glWidth,
                                            n = e.glColor; if (h.display && t && n && (s.save(), s.lineWidth = t, s.strokeStyle = n, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), l.display) { s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? Y.string : b.string, s.fillStyle = e.major ? k : v, s.textBaseline = "middle", s.textAlign = e.textAlign; var a = e.label,
                                                r = e.textOffset; if (le.isArray(a))
                                                for (var i = 0; i < a.length; ++i) s.fillText("" + a[i], 0, r), r += L;
                                            else s.fillText(a, 0, r);
                                            s.restore() } }), _.display) { var C, R, W = 0,
                                        F = S.lineHeight / 2; if (g) C = t.left + (t.right - t.left) / 2, R = "bottom" === m ? t.bottom - F - H.bottom : t.top + F + H.top;
                                    else { var I = "left" === m;
                                        C = I ? t.left + F + H.top : t.right - F - H.top, R = t.top + (t.bottom - t.top) / 2, W = I ? -.5 * Math.PI : .5 * Math.PI }
                                    s.save(), s.translate(C, R), s.rotate(W), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = T, s.font = S.string, s.fillText(_.labelString, 0, 0), s.restore() } if (P) { var E, z, N, B, V = P,
                                        U = cn(h.lineWidth, M.length - 1, 0);
                                    g ? (E = A(o, t.left, V) - V / 2, z = A(o, t.right, U) + U / 2, N = B = a) : (N = A(o, t.top, V) - V / 2, B = A(o, t.bottom, U) + U / 2, E = z = a), s.lineWidth = P, s.strokeStyle = cn(h.color, 0), s.beginPath(), s.moveTo(E, N), s.lineTo(z, B), s.stroke() } } } }),
                    fn = mn.extend({ getLabels: function() { var e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels }, determineDataLimits: function() { var e, t = this,
                                n = t.getLabels();
                            t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex] }, buildTicks: function() { var e = this,
                                t = e.getLabels();
                            e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1) }, getLabelForIndex: function(e, t) { var n = this,
                                a = n.chart; return a.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(a.data.datasets[t].data[e]) : n.ticks[e - n.minIndex] }, getPixelForValue: function(e, t) { var n, a = this,
                                r = a.options.offset,
                                i = Math.max(a.maxIndex + 1 - a.minIndex - (r ? 0 : 1), 1); if (null != e && (n = a.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) { var o = a.getLabels();
                                e = n || e; var s = o.indexOf(e);
                                t = -1 !== s ? s : t } if (a.isHorizontal()) { var d = a.width / i,
                                    u = d * (t - a.minIndex); return r && (u += d / 2), a.left + u } var l = a.height / i,
                                c = l * (t - a.minIndex); return r && (c += l / 2), a.top + c }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticks[e], e + this.minIndex, null) }, getValueForPixel: function(e) { var t = this,
                                n = t.options.offset,
                                a = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                r = t.isHorizontal(),
                                i = (r ? t.width : t.height) / a; return e -= r ? t.left : t.top, n && (e -= i / 2), (e <= 0 ? 0 : Math.round(e / i)) + t.minIndex }, getBasePixel: function() { return this.bottom } }),
                    pn = { position: "bottom" };
                fn._defaults = pn; var gn = le.noop,
                    yn = le.isNullOrUndef,
                    Mn = mn.extend({ getRightValue: function(e) { return "string" == typeof e ? +e : mn.prototype.getRightValue.call(this, e) }, handleTickRangeOptions: function() { var e = this,
                                t = e.options,
                                n = t.ticks; if (n.beginAtZero) { var a = le.sign(e.min),
                                    r = le.sign(e.max);
                                a < 0 && r < 0 ? e.max = 0 : a > 0 && r > 0 && (e.min = 0) } var i = void 0 !== n.min || void 0 !== n.suggestedMin,
                                o = void 0 !== n.max || void 0 !== n.suggestedMax;
                            void 0 !== n.min ? e.min = n.min : void 0 !== n.suggestedMin && (null === e.min ? e.min = n.suggestedMin : e.min = Math.min(e.min, n.suggestedMin)), void 0 !== n.max ? e.max = n.max : void 0 !== n.suggestedMax && (null === e.max ? e.max = n.suggestedMax : e.max = Math.max(e.max, n.suggestedMax)), i !== o && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, n.beginAtZero || e.min--) }, getTickLimit: function() { var e, t = this.options.ticks,
                                n = t.stepSize,
                                a = t.maxTicksLimit; return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), a = a || 11), a && (e = Math.min(a, e)), e }, _computeTickLimit: function() { return Number.POSITIVE_INFINITY }, handleDirectionalChanges: gn, buildTicks: function() { var e = this,
                                t = e.options,
                                n = t.ticks,
                                a = e.getTickLimit(),
                                r = { maxTicks: a = Math.max(2, a), min: n.min, max: n.max, precision: n.precision, stepSize: le.valueOrDefault(n.fixedStepSize, n.stepSize) },
                                i = e.ticks = function(e, t) { var n, a, r, i, o = [],
                                        s = e.stepSize,
                                        d = s || 1,
                                        u = e.maxTicks - 1,
                                        l = e.min,
                                        c = e.max,
                                        h = e.precision,
                                        _ = t.min,
                                        m = t.max,
                                        f = le.niceNum((m - _) / u / d) * d; if (f < 1e-14 && yn(l) && yn(c)) return [_, m];
                                    (i = Math.ceil(m / f) - Math.floor(_ / f)) > u && (f = le.niceNum(i * f / u / d) * d), s || yn(h) ? n = Math.pow(10, le._decimalPlaces(f)) : (n = Math.pow(10, h), f = Math.ceil(f * n) / n), a = Math.floor(_ / f) * f, r = Math.ceil(m / f) * f, s && (!yn(l) && le.almostWhole(l / f, f / 1e3) && (a = l), !yn(c) && le.almostWhole(c / f, f / 1e3) && (r = c)), i = (r - a) / f, i = le.almostEquals(i, Math.round(i), f / 1e3) ? Math.round(i) : Math.ceil(i), a = Math.round(a * n) / n, r = Math.round(r * n) / n, o.push(yn(l) ? a : l); for (var p = 1; p < i; ++p) o.push(Math.round((a + p * f) * n) / n); return o.push(yn(c) ? r : c), o }(r, e);
                            e.handleDirectionalChanges(), e.max = le.max(i), e.min = le.min(i), n.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max) }, convertTicksToLabels: function() { var e = this;
                            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), mn.prototype.convertTicksToLabels.call(e) } }),
                    vn = { position: "left", ticks: { callback: un.formatters.linear } },
                    bn = Mn.extend({ determineDataLimits: function() { var e = this,
                                t = e.options,
                                n = e.chart,
                                a = n.data,
                                r = a.datasets,
                                i = e.isHorizontal();

                            function o(t) { return i ? t.xAxisID === e.id : t.yAxisID === e.id }
                            e.min = null, e.max = null; var s = t.stacked; if (void 0 === s && le.each(r, function(e, t) { if (!s) { var a = n.getDatasetMeta(t);
                                        n.isDatasetVisible(t) && o(a) && void 0 !== a.stack && (s = !0) } }), t.stacked || s) { var d = {};
                                le.each(r, function(a, r) { var i = n.getDatasetMeta(r),
                                        s = [i.type, void 0 === t.stacked && void 0 === i.stack ? r : "", i.stack].join(".");
                                    void 0 === d[s] && (d[s] = { positiveValues: [], negativeValues: [] }); var u = d[s].positiveValues,
                                        l = d[s].negativeValues;
                                    n.isDatasetVisible(r) && o(i) && le.each(a.data, function(n, a) { var r = +e.getRightValue(n);
                                        isNaN(r) || i.data[a].hidden || (u[a] = u[a] || 0, l[a] = l[a] || 0, t.relativePoints ? u[a] = 100 : r < 0 ? l[a] += r : u[a] += r) }) }), le.each(d, function(t) { var n = t.positiveValues.concat(t.negativeValues),
                                        a = le.min(n),
                                        r = le.max(n);
                                    e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? r : Math.max(e.max, r) }) } else le.each(r, function(t, a) { var r = n.getDatasetMeta(a);
                                n.isDatasetVisible(a) && o(r) && le.each(t.data, function(t, n) { var a = +e.getRightValue(t);
                                    isNaN(a) || r.data[n].hidden || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a)) }) });
                            e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions() }, _computeTickLimit: function() { var e; return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = le.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight)) }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForValue: function(e) { var t = this,
                                n = t.start,
                                a = +t.getRightValue(e),
                                r = t.end - n; return t.isHorizontal() ? t.left + t.width / r * (a - n) : t.bottom - t.height / r * (a - n) }, getValueForPixel: function(e) { var t = this,
                                n = t.isHorizontal(),
                                a = n ? t.width : t.height,
                                r = (n ? e - t.left : t.bottom - e) / a; return t.start + (t.end - t.start) * r }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticksAsNumbers[e]) } }),
                    Ln = vn;
                bn._defaults = Ln; var kn = le.valueOrDefault,
                    Yn = { position: "left", ticks: { callback: un.formatters.logarithmic } };

                function wn(e, t) { return le.isFinite(e) && e >= 0 ? e : t } var Dn = mn.extend({ determineDataLimits: function() { var e = this,
                                t = e.options,
                                n = e.chart,
                                a = n.data,
                                r = a.datasets,
                                i = e.isHorizontal();

                            function o(t) { return i ? t.xAxisID === e.id : t.yAxisID === e.id }
                            e.min = null, e.max = null, e.minNotZero = null; var s = t.stacked; if (void 0 === s && le.each(r, function(e, t) { if (!s) { var a = n.getDatasetMeta(t);
                                        n.isDatasetVisible(t) && o(a) && void 0 !== a.stack && (s = !0) } }), t.stacked || s) { var d = {};
                                le.each(r, function(a, r) { var i = n.getDatasetMeta(r),
                                        s = [i.type, void 0 === t.stacked && void 0 === i.stack ? r : "", i.stack].join(".");
                                    n.isDatasetVisible(r) && o(i) && (void 0 === d[s] && (d[s] = []), le.each(a.data, function(t, n) { var a = d[s],
                                            r = +e.getRightValue(t);
                                        isNaN(r) || i.data[n].hidden || r < 0 || (a[n] = a[n] || 0, a[n] += r) })) }), le.each(d, function(t) { if (t.length > 0) { var n = le.min(t),
                                            a = le.max(t);
                                        e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? a : Math.max(e.max, a) } }) } else le.each(r, function(t, a) { var r = n.getDatasetMeta(a);
                                n.isDatasetVisible(a) && o(r) && le.each(t.data, function(t, n) { var a = +e.getRightValue(t);
                                    isNaN(a) || r.data[n].hidden || a < 0 || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a), 0 !== a && (null === e.minNotZero || a < e.minNotZero) && (e.minNotZero = a)) }) });
                            this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var e = this,
                                t = e.options.ticks;
                            e.min = wn(t.min, e.min), e.max = wn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(le.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(le.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(le.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(le.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(le.log10(e.max))) : e.minNotZero = 1) }, buildTicks: function() { var e = this,
                                t = e.options.ticks,
                                n = !e.isHorizontal(),
                                a = { min: wn(t.min), max: wn(t.max) },
                                r = e.ticks = function(e, t) { var n, a, r = [],
                                        i = kn(e.min, Math.pow(10, Math.floor(le.log10(t.min)))),
                                        o = Math.floor(le.log10(t.max)),
                                        s = Math.ceil(t.max / Math.pow(10, o));
                                    0 === i ? (n = Math.floor(le.log10(t.minNotZero)), a = Math.floor(t.minNotZero / Math.pow(10, n)), r.push(i), i = a * Math.pow(10, n)) : (n = Math.floor(le.log10(i)), a = Math.floor(i / Math.pow(10, n))); var d = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                    do { r.push(i), 10 == ++a && (a = 1, d = ++n >= 0 ? 1 : d), i = Math.round(a * Math.pow(10, n) * d) / d } while (n < o || n === o && a < s); var u = kn(e.max, i); return r.push(u), r }(a, e);
                            e.max = le.max(r), e.min = le.min(r), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && r.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), mn.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForTick: function(e) { return this.getPixelForValue(this.tickValues[e]) }, _getFirstTickValue: function(e) { var t = Math.floor(le.log10(e)),
                                n = Math.floor(e / Math.pow(10, t)); return n * Math.pow(10, t) }, getPixelForValue: function(e) { var t, n, a, r, i, o = this,
                                s = o.options.ticks,
                                d = s.reverse,
                                u = le.log10,
                                l = o._getFirstTickValue(o.minNotZero),
                                c = 0; return e = +o.getRightValue(e), d ? (a = o.end, r = o.start, i = -1) : (a = o.start, r = o.end, i = 1), o.isHorizontal() ? (t = o.width, n = d ? o.right : o.left) : (t = o.height, i *= -1, n = d ? o.top : o.bottom), e !== a && (0 === a && (c = kn(s.fontSize, se.global.defaultFontSize), t -= c, a = l), 0 !== e && (c += t / (u(r) - u(a)) * (u(e) - u(a))), n += i * c), n }, getValueForPixel: function(e) { var t, n, a, r, i = this,
                                o = i.options.ticks,
                                s = o.reverse,
                                d = le.log10,
                                u = i._getFirstTickValue(i.minNotZero); if (s ? (n = i.end, a = i.start) : (n = i.start, a = i.end), i.isHorizontal() ? (t = i.width, r = s ? i.right - e : e - i.left) : (t = i.height, r = s ? e - i.top : i.bottom - e), r !== n) { if (0 === n) { var l = kn(o.fontSize, se.global.defaultFontSize);
                                    r -= l, t -= l, n = u }
                                r *= d(a) - d(n), r /= t, r = Math.pow(10, d(n) + r) } return r } }),
                    xn = Yn;
                Dn._defaults = xn; var Tn = le.valueOrDefault,
                    Sn = le.valueAtIndexOrDefault,
                    Hn = le.options.resolve,
                    jn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: un.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(e) { return e } } };

                function On(e) { var t = e.options; return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0 }

                function Pn(e) { var t = e.ticks; return t.display && e.display ? Tn(t.fontSize, se.global.defaultFontSize) + 2 * t.backdropPaddingY : 0 }

                function An(e, t, n, a, r) { return e === a || e === r ? { start: t - n / 2, end: t + n / 2 } : e < a || e > r ? { start: t - n, end: t } : { start: t, end: t + n } }

                function Cn(e) { return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right" }

                function Rn(e, t, n, a) { var r, i, o = n.y + a / 2; if (le.isArray(t))
                        for (r = 0, i = t.length; r < i; ++r) e.fillText(t[r], n.x, o), o += a;
                    else e.fillText(t, n.x, o) }

                function Wn(e, t, n) { 90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h) }

                function Fn(e) { return le.isNumber(e) ? e : 0 } var In = Mn.extend({ setDimensions: function() { var e = this;
                            e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Pn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2 }, determineDataLimits: function() { var e = this,
                                t = e.chart,
                                n = Number.POSITIVE_INFINITY,
                                a = Number.NEGATIVE_INFINITY;
                            le.each(t.data.datasets, function(r, i) { if (t.isDatasetVisible(i)) { var o = t.getDatasetMeta(i);
                                    le.each(r.data, function(t, r) { var i = +e.getRightValue(t);
                                        isNaN(i) || o.data[r].hidden || (n = Math.min(i, n), a = Math.max(i, a)) }) } }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions() }, _computeTickLimit: function() { return Math.ceil(this.drawingArea / Pn(this.options)) }, convertTicksToLabels: function() { var e = this;
                            Mn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, fit: function() { var e = this.options;
                            e.display && e.pointLabels.display ? function(e) { var t, n, a, r = le.options._parseFont(e.options.pointLabels),
                                    i = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                                    o = {};
                                e.ctx.font = r.string, e._pointLabelSizes = []; var s, d, u, l = On(e); for (t = 0; t < l; t++) { a = e.getPointPosition(t, e.drawingArea + 5), s = e.ctx, d = r.lineHeight, u = e.pointLabels[t] || "", n = le.isArray(u) ? { w: le.longestText(s, s.font, u), h: u.length * d } : { w: s.measureText(u).width, h: d }, e._pointLabelSizes[t] = n; var c = e.getIndexAngle(t),
                                        h = le.toDegrees(c) % 360,
                                        _ = An(h, a.x, n.w, 0, 180),
                                        m = An(h, a.y, n.h, 90, 270);
                                    _.start < i.l && (i.l = _.start, o.l = c), _.end > i.r && (i.r = _.end, o.r = c), m.start < i.t && (i.t = m.start, o.t = c), m.end > i.b && (i.b = m.end, o.b = c) }
                                e.setReductions(e.drawingArea, i, o) }(this) : this.setCenterPoint(0, 0, 0, 0) }, setReductions: function(e, t, n) { var a = this,
                                r = t.l / Math.sin(n.l),
                                i = Math.max(t.r - a.width, 0) / Math.sin(n.r),
                                o = -t.t / Math.cos(n.t),
                                s = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(n.b);
                            r = Fn(r), i = Fn(i), o = Fn(o), s = Fn(s), a.drawingArea = Math.min(Math.floor(e - (r + i) / 2), Math.floor(e - (o + s) / 2)), a.setCenterPoint(r, i, o, s) }, setCenterPoint: function(e, t, n, a) { var r = this,
                                i = r.width - t - r.drawingArea,
                                o = e + r.drawingArea,
                                s = n + r.drawingArea,
                                d = r.height - r.paddingTop - a - r.drawingArea;
                            r.xCenter = Math.floor((o + i) / 2 + r.left), r.yCenter = Math.floor((s + d) / 2 + r.top + r.paddingTop) }, getIndexAngle: function(e) { var t = 2 * Math.PI / On(this),
                                n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                                a = n * Math.PI * 2 / 360; return e * t + a }, getDistanceFromCenterForValue: function(e) { var t = this; if (null === e) return 0; var n = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n }, getPointPosition: function(e, t) { var n = this.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(n) * t + this.xCenter, y: Math.sin(n) * t + this.yCenter } }, getPointPositionForValue: function(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)) }, getBasePosition: function() { var e = this.min,
                                t = this.max; return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0) }, draw: function() { var e = this,
                                t = e.options,
                                n = t.gridLines,
                                a = t.ticks; if (t.display) { var r = e.ctx,
                                    i = this.getIndexAngle(0),
                                    o = le.options._parseFont(a);
                                (t.angleLines.display || t.pointLabels.display) && function(e) { var t = e.ctx,
                                        n = e.options,
                                        a = n.angleLines,
                                        r = n.gridLines,
                                        i = n.pointLabels,
                                        o = Tn(a.lineWidth, r.lineWidth),
                                        s = Tn(a.color, r.color),
                                        d = Pn(n);
                                    t.save(), t.lineWidth = o, t.strokeStyle = s, t.setLineDash && (t.setLineDash(Hn([a.borderDash, r.borderDash, []])), t.lineDashOffset = Hn([a.borderDashOffset, r.borderDashOffset, 0])); var u = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                                        l = le.options._parseFont(i);
                                    t.font = l.string, t.textBaseline = "middle"; for (var c = On(e) - 1; c >= 0; c--) { if (a.display && o && s) { var h = e.getPointPosition(c, u);
                                            t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(h.x, h.y), t.stroke() } if (i.display) { var _ = 0 === c ? d / 2 : 0,
                                                m = e.getPointPosition(c, u + _ + 5),
                                                f = Sn(i.fontColor, c, se.global.defaultFontColor);
                                            t.fillStyle = f; var p = e.getIndexAngle(c),
                                                g = le.toDegrees(p);
                                            t.textAlign = Cn(g), Wn(g, e._pointLabelSizes[c], m), Rn(t, e.pointLabels[c] || "", m, l.lineHeight) } }
                                    t.restore() }(e), le.each(e.ticks, function(t, s) { if (s > 0 || a.reverse) { var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]); if (n.display && 0 !== s && function(e, t, n, a) { var r, i = e.ctx,
                                                    o = t.circular,
                                                    s = On(e),
                                                    d = Sn(t.color, a - 1),
                                                    u = Sn(t.lineWidth, a - 1); if ((o || s) && d && u) { if (i.save(), i.strokeStyle = d, i.lineWidth = u, i.setLineDash && (i.setLineDash(t.borderDash || []), i.lineDashOffset = t.borderDashOffset || 0), i.beginPath(), o) i.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                                                    else { r = e.getPointPosition(0, n), i.moveTo(r.x, r.y); for (var l = 1; l < s; l++) r = e.getPointPosition(l, n), i.lineTo(r.x, r.y) }
                                                    i.closePath(), i.stroke(), i.restore() } }(e, n, d, s), a.display) { var u = Tn(a.fontColor, se.global.defaultFontColor); if (r.font = o.string, r.save(), r.translate(e.xCenter, e.yCenter), r.rotate(i), a.showLabelBackdrop) { var l = r.measureText(t).width;
                                                r.fillStyle = a.backdropColor, r.fillRect(-l / 2 - a.backdropPaddingX, -d - o.size / 2 - a.backdropPaddingY, l + 2 * a.backdropPaddingX, o.size + 2 * a.backdropPaddingY) }
                                            r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = u, r.fillText(t, 0, -d), r.restore() } } }) } } }),
                    En = jn;
                In._defaults = En; var zn = le.valueOrDefault,
                    Nn = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    Bn = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    Vn = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
                    Un = Object.keys(Vn);

                function Jn(e, t) { return e - t }

                function Gn(e) { var t, n, a, r = {},
                        i = []; for (t = 0, n = e.length; t < n; ++t) a = e[t], r[a] || (r[a] = !0, i.push(a)); return i }

                function qn(e, t, n, a) { var r = function(e, t, n) { for (var a, r, i, o = 0, s = e.length - 1; o >= 0 && o <= s;) { if (r = e[(a = o + s >> 1) - 1] || null, i = e[a], !r) return { lo: null, hi: i }; if (i[t] < n) o = a + 1;
                                else { if (!(r[t] > n)) return { lo: r, hi: i };
                                    s = a - 1 } } return { lo: i, hi: null } }(e, t, n),
                        i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                        o = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                        s = o[t] - i[t],
                        d = s ? (n - i[t]) / s : 0,
                        u = (o[a] - i[a]) * d; return i[a] + u }

                function Kn(e, t) { var n = e._adapter,
                        a = e.options.time,
                        r = a.parser,
                        i = r || a.format,
                        o = t; return "function" == typeof r && (o = r(o)), le.isFinite(o) || (o = "string" == typeof i ? n.parse(o, i) : n.parse(o)), null !== o ? +o : (r || "function" != typeof i || (o = i(t), le.isFinite(o) || (o = n.parse(o))), o) }

                function $n(e, t) { if (le.isNullOrUndef(t)) return null; var n = e.options.time,
                        a = Kn(e, e.getRightValue(t)); return null === a ? a : (n.round && (a = +e._adapter.startOf(a, n.round)), a) }

                function Zn(e) { for (var t = Un.indexOf(e) + 1, n = Un.length; t < n; ++t)
                        if (Vn[Un[t]].common) return Un[t] }

                function Xn(e, t, n, a) { var r, i = e._adapter,
                        o = e.options,
                        s = o.time,
                        d = s.unit || function(e, t, n, a) { var r, i, o, s = Un.length; for (r = Un.indexOf(e); r < s - 1; ++r)
                                if (i = Vn[Un[r]], o = i.steps ? i.steps[i.steps.length - 1] : Bn, i.common && Math.ceil((n - t) / (o * i.size)) <= a) return Un[r];
                            return Un[s - 1] }(s.minUnit, t, n, a),
                        u = Zn(d),
                        l = zn(s.stepSize, s.unitStepSize),
                        c = "week" === d && s.isoWeekday,
                        h = o.ticks.major.enabled,
                        _ = Vn[d],
                        m = t,
                        f = n,
                        p = []; for (l || (l = function(e, t, n, a) { var r, i, o, s = t - e,
                                d = Vn[n],
                                u = d.size,
                                l = d.steps; if (!l) return Math.ceil(s / (a * u)); for (r = 0, i = l.length; r < i && (o = l[r], !(Math.ceil(s / (u * o)) <= a)); ++r); return o }(t, n, d, a)), c && (m = +i.startOf(m, "isoWeek", c), f = +i.startOf(f, "isoWeek", c)), m = +i.startOf(m, c ? "day" : d), (f = +i.startOf(f, c ? "day" : d)) < n && (f = +i.add(f, 1, d)), r = m, h && u && !c && !s.round && (r = +i.startOf(r, u), r = +i.add(r, ~~((m - r) / (_.size * l)) * l, d)); r < f; r = +i.add(r, l, d)) p.push(+r); return p.push(+r), p } var Qn = mn.extend({ initialize: function() { this.mergeTicksOptions(), mn.prototype.initialize.call(this) }, update: function() { var e = this.options,
                                t = e.time || (e.time = {}),
                                n = this._adapter = new dn._date(e.adapters.date); return t.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), le.mergeIf(t.displayFormats, n.formats()), mn.prototype.update.apply(this, arguments) }, getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), mn.prototype.getRightValue.call(this, e) }, determineDataLimits: function() { var e, t, n, a, r, i, o = this,
                                s = o.chart,
                                d = o._adapter,
                                u = o.options.time,
                                l = u.unit || "day",
                                c = Bn,
                                h = Nn,
                                _ = [],
                                m = [],
                                f = [],
                                p = s.data.labels || []; for (e = 0, n = p.length; e < n; ++e) f.push($n(o, p[e])); for (e = 0, n = (s.data.datasets || []).length; e < n; ++e)
                                if (s.isDatasetVisible(e))
                                    if (r = s.data.datasets[e].data, le.isObject(r[0]))
                                        for (m[e] = [], t = 0, a = r.length; t < a; ++t) i = $n(o, r[t]), _.push(i), m[e][t] = i;
                                    else { for (t = 0, a = f.length; t < a; ++t) _.push(f[t]);
                                        m[e] = f.slice(0) }
                            else m[e] = [];
                            f.length && (f = Gn(f).sort(Jn), c = Math.min(c, f[0]), h = Math.max(h, f[f.length - 1])), _.length && (_ = Gn(_).sort(Jn), c = Math.min(c, _[0]), h = Math.max(h, _[_.length - 1])), c = $n(o, u.min) || c, h = $n(o, u.max) || h, c = c === Bn ? +d.startOf(Date.now(), l) : c, h = h === Nn ? +d.endOf(Date.now(), l) + 1 : h, o.min = Math.min(c, h), o.max = Math.max(c + 1, h), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = { data: _, datasets: m, labels: f } }, buildTicks: function() { var e, t, n, a = this,
                                r = a.min,
                                i = a.max,
                                o = a.options,
                                s = o.time,
                                d = [],
                                u = []; switch (o.ticks.source) {
                                case "data":
                                    d = a._timestamps.data; break;
                                case "labels":
                                    d = a._timestamps.labels; break;
                                case "auto":
                                default:
                                    d = Xn(a, r, i, a.getLabelCapacity(r)) } for ("ticks" === o.bounds && d.length && (r = d[0], i = d[d.length - 1]), r = $n(a, s.min) || r, i = $n(a, s.max) || i, e = 0, t = d.length; e < t; ++e)(n = d[e]) >= r && n <= i && u.push(n); return a.min = r, a.max = i, a._unit = s.unit || function(e, t, n, a, r) { var i, o, s = Un.length; for (i = s - 1; i >= Un.indexOf(n); i--)
                                        if (o = Un[i], Vn[o].common && e._adapter.diff(r, a, o) >= t.length) return o;
                                    return Un[n ? Un.indexOf(n) : 0] }(a, u, s.minUnit, a.min, a.max), a._majorUnit = Zn(a._unit), a._table = function(e, t, n, a) { if ("linear" === a || !e.length) return [{ time: t, pos: 0 }, { time: n, pos: 1 }]; var r, i, o, s, d, u = [],
                                        l = [t]; for (r = 0, i = e.length; r < i; ++r)(s = e[r]) > t && s < n && l.push(s); for (l.push(n), r = 0, i = l.length; r < i; ++r) d = l[r + 1], o = l[r - 1], s = l[r], void 0 !== o && void 0 !== d && Math.round((d + o) / 2) === s || u.push({ time: s, pos: r / (i - 1) }); return u }(a._timestamps.data, r, i, o.distribution), a._offsets = function(e, t, n, a, r) { var i, o, s = 0,
                                        d = 0; return r.offset && t.length && (r.time.min || (i = qn(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - i : (qn(e, "time", t[1], "pos") - i) / 2), r.time.max || (o = qn(e, "time", t[t.length - 1], "pos"), d = 1 === t.length ? o : (o - qn(e, "time", t[t.length - 2], "pos")) / 2)), { start: s, end: d } }(a._table, u, 0, 0, o), o.ticks.reverse && u.reverse(),
                                function(e, t, n) { var a, r, i, o, s = []; for (a = 0, r = t.length; a < r; ++a) i = t[a], o = !!n && i === +e._adapter.startOf(i, n), s.push({ value: i, major: o }); return s }(a, u, a._majorUnit) }, getLabelForIndex: function(e, t) { var n = this,
                                a = n._adapter,
                                r = n.chart.data,
                                i = n.options.time,
                                o = r.labels && e < r.labels.length ? r.labels[e] : "",
                                s = r.datasets[t].data[e]; return le.isObject(s) && (o = n.getRightValue(s)), i.tooltipFormat ? a.format(Kn(n, o), i.tooltipFormat) : "string" == typeof o ? o : a.format(Kn(n, o), i.displayFormats.datetime) }, tickFormatFunction: function(e, t, n, a) { var r = this._adapter,
                                i = this.options,
                                o = i.time.displayFormats,
                                s = o[this._unit],
                                d = this._majorUnit,
                                u = o[d],
                                l = +r.startOf(e, d),
                                c = i.ticks.major,
                                h = c.enabled && d && u && e === l,
                                _ = r.format(e, a || (h ? u : s)),
                                m = h ? c : i.ticks.minor,
                                f = zn(m.callback, m.userCallback); return f ? f(_, t, n) : _ }, convertTicksToLabels: function(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(e[t].value, t, e)); return a }, getPixelForOffset: function(e) { var t = this,
                                n = t.options.ticks.reverse,
                                a = t._horizontal ? t.width : t.height,
                                r = t._horizontal ? n ? t.right : t.left : n ? t.bottom : t.top,
                                i = qn(t._table, "time", e, "pos"),
                                o = a * (t._offsets.start + i) / (t._offsets.start + 1 + t._offsets.end); return n ? r - o : r + o }, getPixelForValue: function(e, t, n) { var a = null; if (void 0 !== t && void 0 !== n && (a = this._timestamps.datasets[n][t]), null === a && (a = $n(this, e)), null !== a) return this.getPixelForOffset(a) }, getPixelForTick: function(e) { var t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null }, getValueForPixel: function(e) { var t = this,
                                n = t._horizontal ? t.width : t.height,
                                a = t._horizontal ? t.left : t.top,
                                r = (n ? (e - a) / n : 0) * (t._offsets.start + 1 + t._offsets.start) - t._offsets.end,
                                i = qn(t._table, "pos", r, "time"); return t._adapter._create(i) }, getLabelWidth: function(e) { var t = this.options.ticks,
                                n = this.ctx.measureText(e).width,
                                a = le.toRadians(t.maxRotation),
                                r = Math.cos(a),
                                i = Math.sin(a),
                                o = zn(t.fontSize, se.global.defaultFontSize); return n * r + o * i }, getLabelCapacity: function(e) { var t = this,
                                n = t.options.time.displayFormats.millisecond,
                                a = t.tickFormatFunction(e, 0, [], n),
                                r = t.getLabelWidth(a),
                                i = t.isHorizontal() ? t.width : t.height,
                                o = Math.floor(i / r); return o > 0 ? o : 1 } }),
                    ea = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
                Qn._defaults = ea; var ta = { category: fn, linear: bn, logarithmic: Dn, radialLinear: In, time: Qn },
                    na = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
                dn._date.override("function" == typeof e ? { _id: "moment", formats: function() { return na }, parse: function(t, n) { return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null }, format: function(t, n) { return e(t).format(n) }, add: function(t, n, a) { return e(t).add(n, a).valueOf() }, diff: function(t, n, a) { return e.duration(e(t).diff(e(n))).as(a) }, startOf: function(t, n, a) { return t = e(t), "isoWeek" === n ? t.isoWeekday(a).valueOf() : t.startOf(n).valueOf() }, endOf: function(t, n) { return e(t).endOf(n).valueOf() }, _create: function(t) { return e(t) } } : {}), se._set("global", { plugins: { filler: { propagate: !0 } } }); var aa = { dataset: function(e) { var t = e.fill,
                            n = e.chart,
                            a = n.getDatasetMeta(t),
                            r = a && n.isDatasetVisible(t),
                            i = r && a.dataset._children || [],
                            o = i.length || 0; return o ? function(e, t) { return t < o && i[t]._view || null } : null }, boundary: function(e) { var t = e.boundary,
                            n = t ? t.x : null,
                            a = t ? t.y : null; return function(e) { return { x: null === n ? e.x : n, y: null === a ? e.y : a } } } };

                function ra(e, t, n) { var a, r = e._model || {},
                        i = r.fill; if (void 0 === i && (i = !!r.backgroundColor), !1 === i || null === i) return !1; if (!0 === i) return "origin"; if (a = parseFloat(i, 10), isFinite(a) && Math.floor(a) === a) return "-" !== i[0] && "+" !== i[0] || (a = t + a), !(a === t || a < 0 || a >= n) && a; switch (i) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return i;
                        default:
                            return !1 } }

                function ia(e) { var t, n = e.el._model || {},
                        a = e.el._scale || {},
                        r = e.fill,
                        i = null; if (isFinite(r)) return null; if ("start" === r ? i = void 0 === n.scaleBottom ? a.bottom : n.scaleBottom : "end" === r ? i = void 0 === n.scaleTop ? a.top : n.scaleTop : void 0 !== n.scaleZero ? i = n.scaleZero : a.getBasePosition ? i = a.getBasePosition() : a.getBasePixel && (i = a.getBasePixel()), null != i) { if (void 0 !== i.x && void 0 !== i.y) return i; if (le.isFinite(i)) return { x: (t = a.isHorizontal()) ? i : null, y: t ? null : i } } return null }

                function oa(e, t, n) { var a, r = e[t],
                        i = r.fill,
                        o = [t]; if (!n) return i; for (; !1 !== i && -1 === o.indexOf(i);) { if (!isFinite(i)) return i; if (!(a = e[i])) return !1; if (a.visible) return i;
                        o.push(i), i = a.fill } return !1 }

                function sa(e) { var t = e.fill,
                        n = "dataset"; return !1 === t ? null : (isFinite(t) || (n = "boundary"), aa[n](e)) }

                function da(e) { return e && !e.skip }

                function ua(e, t, n, a, r) { var i; if (a && r) { for (e.moveTo(t[0].x, t[0].y), i = 1; i < a; ++i) le.canvas.lineTo(e, t[i - 1], t[i]); for (e.lineTo(n[r - 1].x, n[r - 1].y), i = r - 1; i > 0; --i) le.canvas.lineTo(e, n[i], n[i - 1], !0) } } var la = { id: "filler", afterDatasetsUpdate: function(e, t) { var n, a, r, i, o = (e.data.datasets || []).length,
                                s = t.propagate,
                                d = []; for (a = 0; a < o; ++a) n = e.getDatasetMeta(a), r = n.dataset, i = null, r && r._model && r instanceof Ie.Line && (i = { visible: e.isDatasetVisible(a), fill: ra(r, a, o), chart: e, el: r }), n.$filler = i, d.push(i); for (a = 0; a < o; ++a)(i = d[a]) && (i.fill = oa(d, a, s), i.boundary = ia(i), i.mapper = sa(i)) }, beforeDatasetDraw: function(e, t) { var n = t.meta.$filler; if (n) { var a = e.ctx,
                                    r = n.el,
                                    i = r._view,
                                    o = r._children || [],
                                    s = n.mapper,
                                    d = i.backgroundColor || se.global.defaultColor;
                                s && d && o.length && (le.canvas.clipArea(a, e.chartArea), function(e, t, n, a, r, i) { var o, s, d, u, l, c, h, _ = t.length,
                                        m = a.spanGaps,
                                        f = [],
                                        p = [],
                                        g = 0,
                                        y = 0; for (e.beginPath(), o = 0, s = _ + !!i; o < s; ++o) u = t[d = o % _]._view, l = n(u, d, a), c = da(u), h = da(l), c && h ? (g = f.push(u), y = p.push(l)) : g && y && (m ? (c && f.push(u), h && p.push(l)) : (ua(e, f, p, g, y), g = y = 0, f = [], p = []));
                                    ua(e, f, p, g, y), e.closePath(), e.fillStyle = r, e.fill() }(a, o, s, i, d, r._loop), le.canvas.unclipArea(a)) } } },
                    ca = le.noop,
                    ha = le.valueOrDefault;

                function _a(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth }
                se._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(e, t) { var n = t.datasetIndex,
                                a = this.chart,
                                r = a.getDatasetMeta(n);
                            r.hidden = null === r.hidden ? !a.data.datasets[n].hidden : null, a.update() }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(e) { var t = e.data; return le.isArray(t.datasets) ? t.datasets.map(function(t, n) { return { text: t.label, fillStyle: le.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor, hidden: !e.isDatasetVisible(n), lineCap: t.borderCapStyle, lineDash: t.borderDash, lineDashOffset: t.borderDashOffset, lineJoin: t.borderJoinStyle, lineWidth: t.borderWidth, strokeStyle: t.borderColor, pointStyle: t.pointStyle, datasetIndex: n } }, this) : [] } } }, legendCallback: function(e) { var t = [];
                        t.push('<ul class="' + e.id + '-legend">'); for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>"); return t.push("</ul>"), t.join("") } }); var ma = fe.extend({ initialize: function(e) { le.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 }, beforeUpdate: ca, update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize }, afterUpdate: ca, beforeSetDimensions: ca, setDimensions: function() { var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: ca, beforeBuildLabels: ca, buildLabels: function() { var e = this,
                            t = e.options.labels || {},
                            n = le.callback(t.generateLabels, [e.chart], e) || [];
                        t.filter && (n = n.filter(function(n) { return t.filter(n, e.chart.data) })), e.options.reverse && n.reverse(), e.legendItems = n }, afterBuildLabels: ca, beforeFit: ca, fit: function() { var e = this,
                            t = e.options,
                            n = t.labels,
                            a = t.display,
                            r = e.ctx,
                            i = le.options._parseFont(n),
                            o = i.size,
                            s = e.legendHitBoxes = [],
                            d = e.minSize,
                            u = e.isHorizontal(); if (u ? (d.width = e.maxWidth, d.height = a ? 10 : 0) : (d.width = a ? 10 : 0, d.height = e.maxHeight), a)
                            if (r.font = i.string, u) { var l = e.lineWidths = [0],
                                    c = 0;
                                r.textAlign = "left", r.textBaseline = "top", le.each(e.legendItems, function(e, t) { var a = _a(n, o),
                                        i = a + o / 2 + r.measureText(e.text).width;
                                    (0 === t || l[l.length - 1] + i + n.padding > d.width) && (c += o + n.padding, l[l.length - (t > 0 ? 0 : 1)] = n.padding), s[t] = { left: 0, top: 0, width: i, height: o }, l[l.length - 1] += i + n.padding }), d.height += c } else { var h = n.padding,
                                    _ = e.columnWidths = [],
                                    m = n.padding,
                                    f = 0,
                                    p = 0,
                                    g = o + h;
                                le.each(e.legendItems, function(e, t) { var a = _a(n, o),
                                        i = a + o / 2 + r.measureText(e.text).width;
                                    t > 0 && p + g > d.height - h && (m += f + n.padding, _.push(f), f = 0, p = 0), f = Math.max(f, i), p += g, s[t] = { left: 0, top: 0, width: i, height: o } }), m += f, _.push(f), d.width += m }
                        e.width = d.width, e.height = d.height }, afterFit: ca, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var e = this,
                            t = e.options,
                            n = t.labels,
                            a = se.global,
                            r = a.defaultColor,
                            i = a.elements.line,
                            o = e.width,
                            s = e.lineWidths; if (t.display) { var d, u = e.ctx,
                                l = ha(n.fontColor, a.defaultFontColor),
                                c = le.options._parseFont(n),
                                h = c.size;
                            u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = l, u.fillStyle = l, u.font = c.string; var _ = _a(n, h),
                                m = e.legendHitBoxes,
                                f = e.isHorizontal();
                            d = f ? { x: e.left + (o - s[0]) / 2 + n.padding, y: e.top + n.padding, line: 0 } : { x: e.left + n.padding, y: e.top + n.padding, line: 0 }; var p = h + n.padding;
                            le.each(e.legendItems, function(a, l) { var c = u.measureText(a.text).width,
                                    g = _ + h / 2 + c,
                                    y = d.x,
                                    M = d.y;
                                f ? l > 0 && y + g + n.padding > e.left + e.minSize.width && (M = d.y += p, d.line++, y = d.x = e.left + (o - s[d.line]) / 2 + n.padding) : l > 0 && M + p > e.top + e.minSize.height && (y = d.x = y + e.columnWidths[d.line] + n.padding, M = d.y = e.top + n.padding, d.line++),
                                    function(e, n, a) { if (!(isNaN(_) || _ <= 0)) { u.save(); var o = ha(a.lineWidth, i.borderWidth); if (u.fillStyle = ha(a.fillStyle, r), u.lineCap = ha(a.lineCap, i.borderCapStyle), u.lineDashOffset = ha(a.lineDashOffset, i.borderDashOffset), u.lineJoin = ha(a.lineJoin, i.borderJoinStyle), u.lineWidth = o, u.strokeStyle = ha(a.strokeStyle, r), u.setLineDash && u.setLineDash(ha(a.lineDash, i.borderDash)), t.labels && t.labels.usePointStyle) { var s = _ * Math.SQRT2 / 2,
                                                    d = e + _ / 2,
                                                    l = n + h / 2;
                                                le.canvas.drawPoint(u, a.pointStyle, s, d, l) } else 0 !== o && u.strokeRect(e, n, _, h), u.fillRect(e, n, _, h);
                                            u.restore() } }(y, M, a), m[l].left = y, m[l].top = M,
                                    function(e, t, n, a) { var r = h / 2,
                                            i = _ + r + e,
                                            o = t + r;
                                        u.fillText(n.text, i, o), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(i, o), u.lineTo(i + a, o), u.stroke()) }(y, M, a, c), f ? d.x += g + n.padding : d.y += p }) } }, _getLegendItemAt: function(e, t) { var n, a, r, i = this; if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom)
                            for (r = i.legendHitBoxes, n = 0; n < r.length; ++n)
                                if (a = r[n], e >= a.left && e <= a.left + a.width && t >= a.top && t <= a.top + a.height) return i.legendItems[n];
                        return null }, handleEvent: function(e) { var t, n = this,
                            a = n.options,
                            r = "mouseup" === e.type ? "click" : e.type; if ("mousemove" === r) { if (!a.onHover && !a.onLeave) return } else { if ("click" !== r) return; if (!a.onClick) return }
                        t = n._getLegendItemAt(e.x, e.y), "click" === r ? t && a.onClick && a.onClick.call(n, e.native, t) : (a.onLeave && t !== n._hoveredItem && (n._hoveredItem && a.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), a.onHover && t && a.onHover.call(n, e.native, t)) } });

                function fa(e, t) { var n = new ma({ ctx: e.ctx, options: t, chart: e });
                    Lt.configure(e, n, t), Lt.addBox(e, n), e.legend = n } var pa = { id: "legend", _element: ma, beforeInit: function(e) { var t = e.options.legend;
                            t && fa(e, t) }, beforeUpdate: function(e) { var t = e.options.legend,
                                n = e.legend;
                            t ? (le.mergeIf(t, se.global.legend), n ? (Lt.configure(e, n, t), n.options = t) : fa(e, t)) : n && (Lt.removeBox(e, n), delete e.legend) }, afterEvent: function(e, t) { var n = e.legend;
                            n && n.handleEvent(t) } },
                    ga = le.noop;
                se._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } }); var ya = fe.extend({ initialize: function(e) { le.extend(this, e), this.legendHitBoxes = [] }, beforeUpdate: ga, update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize }, afterUpdate: ga, beforeSetDimensions: ga, setDimensions: function() { var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: ga, beforeBuildLabels: ga, buildLabels: ga, afterBuildLabels: ga, beforeFit: ga, fit: function() { var e = this,
                            t = e.options,
                            n = t.display,
                            a = e.minSize,
                            r = le.isArray(t.text) ? t.text.length : 1,
                            i = le.options._parseFont(t),
                            o = n ? r * i.lineHeight + 2 * t.padding : 0;
                        e.isHorizontal() ? (a.width = e.maxWidth, a.height = o) : (a.width = o, a.height = e.maxHeight), e.width = a.width, e.height = a.height }, afterFit: ga, isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e }, draw: function() { var e = this,
                            t = e.ctx,
                            n = e.options; if (n.display) { var a, r, i, o = le.options._parseFont(n),
                                s = o.lineHeight,
                                d = s / 2 + n.padding,
                                u = 0,
                                l = e.top,
                                c = e.left,
                                h = e.bottom,
                                _ = e.right;
                            t.fillStyle = le.valueOrDefault(n.fontColor, se.global.defaultFontColor), t.font = o.string, e.isHorizontal() ? (r = c + (_ - c) / 2, i = l + d, a = _ - c) : (r = "left" === n.position ? c + d : _ - d, i = l + (h - l) / 2, a = h - l, u = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(r, i), t.rotate(u), t.textAlign = "center", t.textBaseline = "middle"; var m = n.text; if (le.isArray(m))
                                for (var f = 0, p = 0; p < m.length; ++p) t.fillText(m[p], 0, f, a), f += s;
                            else t.fillText(m, 0, 0, a);
                            t.restore() } } });

                function Ma(e, t) { var n = new ya({ ctx: e.ctx, options: t, chart: e });
                    Lt.configure(e, n, t), Lt.addBox(e, n), e.titleBlock = n } var va = {},
                    ba = la,
                    La = pa,
                    ka = { id: "title", _element: ya, beforeInit: function(e) { var t = e.options.title;
                            t && Ma(e, t) }, beforeUpdate: function(e) { var t = e.options.title,
                                n = e.titleBlock;
                            t ? (le.mergeIf(t, se.global.title), n ? (Lt.configure(e, n, t), n.options = t) : Ma(e, t)) : n && (Lt.removeBox(e, n), delete e.titleBlock) } }; for (var Ya in va.filler = ba, va.legend = La, va.title = ka, rn.helpers = le,
                        function() {
                            function e(e, t, n) { var a; return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a }

                            function t(e) { return null != e && "none" !== e }

                            function n(n, a, r) { var i = document.defaultView,
                                    o = le._getParentNode(n),
                                    s = i.getComputedStyle(n)[a],
                                    d = i.getComputedStyle(o)[a],
                                    u = t(s),
                                    l = t(d),
                                    c = Number.POSITIVE_INFINITY; return u || l ? Math.min(u ? e(s, n, r) : c, l ? e(d, o, r) : c) : "none" }
                            le.where = function(e, t) { if (le.isArray(e) && Array.prototype.filter) return e.filter(t); var n = []; return le.each(e, function(e) { t(e) && n.push(e) }), n }, le.findIndex = Array.prototype.findIndex ? function(e, t, n) { return e.findIndex(t, n) } : function(e, t, n) { n = void 0 === n ? e : n; for (var a = 0, r = e.length; a < r; ++a)
                                    if (t.call(n, e[a], a, e)) return a;
                                return -1 }, le.findNextWhere = function(e, t, n) { le.isNullOrUndef(n) && (n = -1); for (var a = n + 1; a < e.length; a++) { var r = e[a]; if (t(r)) return r } }, le.findPreviousWhere = function(e, t, n) { le.isNullOrUndef(n) && (n = e.length); for (var a = n - 1; a >= 0; a--) { var r = e[a]; if (t(r)) return r } }, le.isNumber = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, le.almostEquals = function(e, t, n) { return Math.abs(e - t) < n }, le.almostWhole = function(e, t) { var n = Math.round(e); return n - t < e && n + t > e }, le.max = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.max(e, t) }, Number.NEGATIVE_INFINITY) }, le.min = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.min(e, t) }, Number.POSITIVE_INFINITY) }, le.sign = Math.sign ? function(e) { return Math.sign(e) } : function(e) { return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1 }, le.log10 = Math.log10 ? function(e) { return Math.log10(e) } : function(e) { var t = Math.log(e) * Math.LOG10E,
                                    n = Math.round(t),
                                    a = e === Math.pow(10, n); return a ? n : t }, le.toRadians = function(e) { return e * (Math.PI / 180) }, le.toDegrees = function(e) { return e * (180 / Math.PI) }, le._decimalPlaces = function(e) { if (le.isFinite(e)) { for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++; return n } }, le.getAngleFromPoint = function(e, t) { var n = t.x - e.x,
                                    a = t.y - e.y,
                                    r = Math.sqrt(n * n + a * a),
                                    i = Math.atan2(a, n); return i < -.5 * Math.PI && (i += 2 * Math.PI), { angle: i, distance: r } }, le.distanceBetweenPoints = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, le.aliasPixel = function(e) { return e % 2 == 0 ? 0 : .5 }, le._alignPixel = function(e, t, n) { var a = e.currentDevicePixelRatio,
                                    r = n / 2; return Math.round((t - r) * a) / a + r }, le.splineCurve = function(e, t, n, a) { var r = e.skip ? t : e,
                                    i = t,
                                    o = n.skip ? t : n,
                                    s = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                                    d = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                                    u = s / (s + d),
                                    l = d / (s + d);
                                u = isNaN(u) ? 0 : u, l = isNaN(l) ? 0 : l; var c = a * u,
                                    h = a * l; return { previous: { x: i.x - c * (o.x - r.x), y: i.y - c * (o.y - r.y) }, next: { x: i.x + h * (o.x - r.x), y: i.y + h * (o.y - r.y) } } }, le.EPSILON = Number.EPSILON || 1e-14, le.splineCurveMonotone = function(e) { var t, n, a, r, i, o, s, d, u, l = (e || []).map(function(e) { return { model: e._model, deltaK: 0, mK: 0 } }),
                                    c = l.length; for (t = 0; t < c; ++t)
                                    if (!(a = l[t]).model.skip) { if (n = t > 0 ? l[t - 1] : null, (r = t < c - 1 ? l[t + 1] : null) && !r.model.skip) { var h = r.model.x - a.model.x;
                                            a.deltaK = 0 !== h ? (r.model.y - a.model.y) / h : 0 }!n || n.model.skip ? a.mK = a.deltaK : !r || r.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2 }
                                for (t = 0; t < c - 1; ++t) a = l[t], r = l[t + 1], a.model.skip || r.model.skip || (le.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = r.mK = 0 : (i = a.mK / a.deltaK, o = r.mK / a.deltaK, (d = Math.pow(i, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(d), a.mK = i * s * a.deltaK, r.mK = o * s * a.deltaK))); for (t = 0; t < c; ++t)(a = l[t]).model.skip || (n = t > 0 ? l[t - 1] : null, r = t < c - 1 ? l[t + 1] : null, n && !n.model.skip && (u = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - u, a.model.controlPointPreviousY = a.model.y - u * a.mK), r && !r.model.skip && (u = (r.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + u, a.model.controlPointNextY = a.model.y + u * a.mK)) }, le.nextItem = function(e, t, n) { return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1] }, le.previousItem = function(e, t, n) { return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1] }, le.niceNum = function(e, t) { var n = Math.floor(le.log10(e)),
                                    a = e / Math.pow(10, n); return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n) }, le.requestAnimFrame = "undefined" == typeof window ? function(e) { e() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) }, le.getRelativePosition = function(e, t) { var n, a, r = e.originalEvent || e,
                                    i = e.target || e.srcElement,
                                    o = i.getBoundingClientRect(),
                                    s = r.touches;
                                s && s.length > 0 ? (n = s[0].clientX, a = s[0].clientY) : (n = r.clientX, a = r.clientY); var d = parseFloat(le.getStyle(i, "padding-left")),
                                    u = parseFloat(le.getStyle(i, "padding-top")),
                                    l = parseFloat(le.getStyle(i, "padding-right")),
                                    c = parseFloat(le.getStyle(i, "padding-bottom")),
                                    h = o.right - o.left - d - l,
                                    _ = o.bottom - o.top - u - c; return n = Math.round((n - o.left - d) / h * i.width / t.currentDevicePixelRatio), a = Math.round((a - o.top - u) / _ * i.height / t.currentDevicePixelRatio), { x: n, y: a } }, le.getConstraintWidth = function(e) { return n(e, "max-width", "clientWidth") }, le.getConstraintHeight = function(e) { return n(e, "max-height", "clientHeight") }, le._calculatePadding = function(e, t, n) { return (t = le.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10) }, le._getParentNode = function(e) { var t = e.parentNode; return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t }, le.getMaximumWidth = function(e) { var t = le._getParentNode(e); if (!t) return e.clientWidth; var n = t.clientWidth,
                                    a = le._calculatePadding(t, "padding-left", n),
                                    r = le._calculatePadding(t, "padding-right", n),
                                    i = n - a - r,
                                    o = le.getConstraintWidth(e); return isNaN(o) ? i : Math.min(i, o) }, le.getMaximumHeight = function(e) { var t = le._getParentNode(e); if (!t) return e.clientHeight; var n = t.clientHeight,
                                    a = le._calculatePadding(t, "padding-top", n),
                                    r = le._calculatePadding(t, "padding-bottom", n),
                                    i = n - a - r,
                                    o = le.getConstraintHeight(e); return isNaN(o) ? i : Math.min(i, o) }, le.getStyle = function(e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t) }, le.retinaScale = function(e, t) { var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) { var a = e.canvas,
                                        r = e.height,
                                        i = e.width;
                                    a.height = r * n, a.width = i * n, e.ctx.scale(n, n), a.style.height || a.style.width || (a.style.height = r + "px", a.style.width = i + "px") } }, le.fontString = function(e, t, n) { return t + " " + e + "px " + n }, le.longestText = function(e, t, n, a) { var r = (a = a || {}).data = a.data || {},
                                    i = a.garbageCollect = a.garbageCollect || [];
                                a.font !== t && (r = a.data = {}, i = a.garbageCollect = [], a.font = t), e.font = t; var o = 0;
                                le.each(n, function(t) { null != t && !0 !== le.isArray(t) ? o = le.measureText(e, r, i, o, t) : le.isArray(t) && le.each(t, function(t) { null == t || le.isArray(t) || (o = le.measureText(e, r, i, o, t)) }) }); var s = i.length / 2; if (s > n.length) { for (var d = 0; d < s; d++) delete r[i[d]];
                                    i.splice(0, s) } return o }, le.measureText = function(e, t, n, a, r) { var i = t[r]; return i || (i = t[r] = e.measureText(r).width, n.push(r)), i > a && (a = i), a }, le.numberOfLabelLines = function(e) { var t = 1; return le.each(e, function(e) { le.isArray(e) && e.length > t && (t = e.length) }), t }, le.color = G ? function(e) { return e instanceof CanvasGradient && (e = se.global.defaultColor), G(e) } : function(e) { return console.error("Color.js not found!"), e }, le.getHoverColor = function(e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : le.color(e).saturate(.5).darken(.1).rgbString() } }(), rn._adapters = dn, rn.Animation = ge, rn.animationService = ye, rn.controllers = lt, rn.DatasetController = ke, rn.defaults = se, rn.Element = fe, rn.elements = Ie, rn.Interaction = gt, rn.layouts = Lt, rn.platform = Et, rn.plugins = zt, rn.Scale = mn, rn.scaleService = Nt, rn.Ticks = un, rn.Tooltip = Xt, rn.helpers.each(ta, function(e, t) { rn.scaleService.registerScaleType(t, e, e._defaults) }), va) va.hasOwnProperty(Ya) && rn.plugins.register(va[Ya]);
                rn.platform.initialize(); var wa = rn; return "undefined" != typeof window && (window.Chart = rn), rn.Chart = rn, rn.Legend = va.legend._element, rn.Title = va.title._element, rn.pluginService = rn.plugins, rn.PluginBase = rn.Element.extend({}), rn.canvasHelpers = rn.helpers.canvas, rn.layoutService = rn.layouts, rn.LinearScaleBase = Mn, rn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(e) { rn[e] = function(t, n) { return new rn(t, rn.helpers.merge(n || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })) } }), wa }(function() { try { return n("wd/R") } catch (e) {} }()) }, OIYi: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }) }(n("wd/R")) }, Oaa7: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, Ob0Z: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
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
                e.defineLocale("tg", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"), weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"), weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT", lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT", lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT", sameElse: "L" }, relativeTime: { future: "\u0431\u0430\u044a\u0434\u0438 %s", past: "%s \u043f\u0435\u0448", s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f", m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430", mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430", h: "\u044f\u043a \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u044f\u043a \u0440\u04ef\u0437", dd: "%d \u0440\u04ef\u0437", M: "\u044f\u043a \u043c\u043e\u04b3", MM: "%d \u043c\u043e\u04b3", y: "\u044f\u043a \u0441\u043e\u043b", yy: "%d \u0441\u043e\u043b" }, meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0448\u0430\u0431" === t ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === t ? e : "\u0440\u04ef\u0437" === t ? e >= 11 ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/, ordinal: function(e) { var n = e % 10,
                            a = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[a]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, PA2r: function(e, t, n) {! function(e) { "use strict"; var t = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                    n = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
                    a = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
                    r = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;

                function i(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

                function o(e, t, n, a) { var r = e + " "; switch (n) {
                        case "s":
                            return t || a ? "p\xe1r sekund" : "p\xe1r sekundami";
                        case "ss":
                            return t || a ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
                        case "m":
                            return t ? "minuta" : a ? "minutu" : "minutou";
                        case "mm":
                            return t || a ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
                        case "h":
                            return t ? "hodina" : a ? "hodinu" : "hodinou";
                        case "hh":
                            return t || a ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
                        case "d":
                            return t || a ? "den" : "dnem";
                        case "dd":
                            return t || a ? r + (i(e) ? "dny" : "dn\xed") : r + "dny";
                        case "M":
                            return t || a ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                        case "MM":
                            return t || a ? r + (i(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : r + "m\u011bs\xedci";
                        case "y":
                            return t || a ? "rok" : "rokem";
                        case "yy":
                            return t || a ? r + (i(e) ? "roky" : "let") : r + "lety" } }
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
                                    return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "p\u0159ed %s", s: o, ss: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, PeUW: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0be7", 2: "\u0be8", 3: "\u0be9", 4: "\u0bea", 5: "\u0beb", 6: "\u0bec", 7: "\u0bed", 8: "\u0bee", 9: "\u0bef", 0: "\u0be6" },
                    n = { "\u0be7": "1", "\u0be8": "2", "\u0be9": "3", "\u0bea": "4", "\u0beb": "5", "\u0bec": "6", "\u0bed": "7", "\u0bee": "8", "\u0bef": "9", "\u0be6": "0" };
                e.defineLocale("ta", { months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"), weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"), weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT", nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT", nextWeek: "dddd, LT", lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT", lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0b87\u0bb2\u0bcd", past: "%s \u0bae\u0bc1\u0ba9\u0bcd", s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd", mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd", h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd", dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd", M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd", MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd", y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd", yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd" }, dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/, ordinal: function(e) { return e + "\u0bb5\u0ba4\u0bc1" }, preparse: function(e) { return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/, meridiem: function(e, t, n) { return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === t ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === t || "\u0b95\u0bbe\u0bb2\u0bc8" === t ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, PpIw: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0ce7", 2: "\u0ce8", 3: "\u0ce9", 4: "\u0cea", 5: "\u0ceb", 6: "\u0cec", 7: "\u0ced", 8: "\u0cee", 9: "\u0cef", 0: "\u0ce6" },
                    n = { "\u0ce7": "1", "\u0ce8": "2", "\u0ce9": "3", "\u0cea": "4", "\u0ceb": "5", "\u0cec": "6", "\u0ced": "7", "\u0cee": "8", "\u0cef": "9", "\u0ce6": "0" };
                e.defineLocale("kn", { months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"), monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"), monthsParseExact: !0, weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"), weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"), weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT", nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT", nextWeek: "dddd, LT", lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT", lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0ca8\u0c82\u0ca4\u0cb0", past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6", s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1", ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1", m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6", hh: "%d \u0c97\u0c82\u0c9f\u0cc6", d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8", dd: "%d \u0ca6\u0cbf\u0ca8", M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7", yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7" }, preparse: function(e) { return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === t ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === t ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === t ? e >= 10 ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" }, dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/, ordinal: function(e) { return e + "\u0ca8\u0cc6\u0cd5" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, Qj4J: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ar-kw", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 12 } }) }(n("wd/R")) }, RAwQ: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? r[n][0] : r[n][1] }

                function n(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var t = e % 10,
                            a = e / 10; return n(0 === t ? a : t) } if (e < 1e4) { for (; e >= 10;) e /= 10; return n(e) } return n(e /= 1e3) }
                e.defineLocale("lb", { months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"), weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[G\xebschter um] LT", lastWeek: function() { switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d M\xe9int", y: t, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, RnhZ: function(e, t, n) { var a = { "./af": "K/tc", "./af.js": "K/tc", "./ar": "jnO4", "./ar-dz": "o1bE", "./ar-dz.js": "o1bE", "./ar-kw": "Qj4J", "./ar-kw.js": "Qj4J", "./ar-ly": "HP3h", "./ar-ly.js": "HP3h", "./ar-ma": "CoRJ", "./ar-ma.js": "CoRJ", "./ar-sa": "gjCT", "./ar-sa.js": "gjCT", "./ar-tn": "bYM6", "./ar-tn.js": "bYM6", "./ar.js": "jnO4", "./az": "SFxW", "./az.js": "SFxW", "./be": "H8ED", "./be.js": "H8ED", "./bg": "hKrs", "./bg.js": "hKrs", "./bm": "p/rL", "./bm.js": "p/rL", "./bn": "kEOa", "./bn.js": "kEOa", "./bo": "0mo+", "./bo.js": "0mo+", "./br": "aIdf", "./br.js": "aIdf", "./bs": "JVSJ", "./bs.js": "JVSJ", "./ca": "1xZ4", "./ca.js": "1xZ4", "./cs": "PA2r", "./cs.js": "PA2r", "./cv": "A+xa", "./cv.js": "A+xa", "./cy": "l5ep", "./cy.js": "l5ep", "./da": "DxQv", "./da.js": "DxQv", "./de": "tGlX", "./de-at": "s+uk", "./de-at.js": "s+uk", "./de-ch": "u3GI", "./de-ch.js": "u3GI", "./de.js": "tGlX", "./dv": "WYrj", "./dv.js": "WYrj", "./el": "jUeY", "./el.js": "jUeY", "./en-SG": "zavE", "./en-SG.js": "zavE", "./en-au": "Dmvi", "./en-au.js": "Dmvi", "./en-ca": "OIYi", "./en-ca.js": "OIYi", "./en-gb": "Oaa7", "./en-gb.js": "Oaa7", "./en-ie": "4dOw", "./en-ie.js": "4dOw", "./en-il": "czMo", "./en-il.js": "czMo", "./en-nz": "b1Dy", "./en-nz.js": "b1Dy", "./eo": "Zduo", "./eo.js": "Zduo", "./es": "iYuL", "./es-do": "CjzT", "./es-do.js": "CjzT", "./es-us": "Vclq", "./es-us.js": "Vclq", "./es.js": "iYuL", "./et": "7BjC", "./et.js": "7BjC", "./eu": "D/JM", "./eu.js": "D/JM", "./fa": "jfSC", "./fa.js": "jfSC", "./fi": "gekB", "./fi.js": "gekB", "./fo": "ByF4", "./fo.js": "ByF4", "./fr": "nyYc", "./fr-ca": "2fjn", "./fr-ca.js": "2fjn", "./fr-ch": "Dkky", "./fr-ch.js": "Dkky", "./fr.js": "nyYc", "./fy": "cRix", "./fy.js": "cRix", "./ga": "USCx", "./ga.js": "USCx", "./gd": "9rRi", "./gd.js": "9rRi", "./gl": "iEDd", "./gl.js": "iEDd", "./gom-latn": "DKr+", "./gom-latn.js": "DKr+", "./gu": "4MV3", "./gu.js": "4MV3", "./he": "x6pH", "./he.js": "x6pH", "./hi": "3E1r", "./hi.js": "3E1r", "./hr": "S6ln", "./hr.js": "S6ln", "./hu": "WxRl", "./hu.js": "WxRl", "./hy-am": "1rYy", "./hy-am.js": "1rYy", "./id": "UDhR", "./id.js": "UDhR", "./is": "BVg3", "./is.js": "BVg3", "./it": "bpih", "./it-ch": "bxKX", "./it-ch.js": "bxKX", "./it.js": "bpih", "./ja": "B55N", "./ja.js": "B55N", "./jv": "tUCv", "./jv.js": "tUCv", "./ka": "IBtZ", "./ka.js": "IBtZ", "./kk": "bXm7", "./kk.js": "bXm7", "./km": "6B0Y", "./km.js": "6B0Y", "./kn": "PpIw", "./kn.js": "PpIw", "./ko": "Ivi+", "./ko.js": "Ivi+", "./ku": "JCF/", "./ku.js": "JCF/", "./ky": "lgnt", "./ky.js": "lgnt", "./lb": "RAwQ", "./lb.js": "RAwQ", "./lo": "sp3z", "./lo.js": "sp3z", "./lt": "JvlW", "./lt.js": "JvlW", "./lv": "uXwI", "./lv.js": "uXwI", "./me": "KTz0", "./me.js": "KTz0", "./mi": "aIsn", "./mi.js": "aIsn", "./mk": "aQkU", "./mk.js": "aQkU", "./ml": "AvvY", "./ml.js": "AvvY", "./mn": "lYtQ", "./mn.js": "lYtQ", "./mr": "Ob0Z", "./mr.js": "Ob0Z", "./ms": "6+QB", "./ms-my": "ZAMP", "./ms-my.js": "ZAMP", "./ms.js": "6+QB", "./mt": "G0Uy", "./mt.js": "G0Uy", "./my": "honF", "./my.js": "honF", "./nb": "bOMt", "./nb.js": "bOMt", "./ne": "OjkT", "./ne.js": "OjkT", "./nl": "+s0g", "./nl-be": "2ykv", "./nl-be.js": "2ykv", "./nl.js": "+s0g", "./nn": "uEye", "./nn.js": "uEye", "./pa-in": "8/+R", "./pa-in.js": "8/+R", "./pl": "jVdC", "./pl.js": "jVdC", "./pt": "8mBD", "./pt-br": "0tRk", "./pt-br.js": "0tRk", "./pt.js": "8mBD", "./ro": "lyxo", "./ro.js": "lyxo", "./ru": "lXzo", "./ru.js": "lXzo", "./sd": "Z4QM", "./sd.js": "Z4QM", "./se": "//9w", "./se.js": "//9w", "./si": "7aV9", "./si.js": "7aV9", "./sk": "e+ae", "./sk.js": "e+ae", "./sl": "gVVK", "./sl.js": "gVVK", "./sq": "yPMs", "./sq.js": "yPMs", "./sr": "zx6S", "./sr-cyrl": "E+lV", "./sr-cyrl.js": "E+lV", "./sr.js": "zx6S", "./ss": "Ur1D", "./ss.js": "Ur1D", "./sv": "X709", "./sv.js": "X709", "./sw": "dNwA", "./sw.js": "dNwA", "./ta": "PeUW", "./ta.js": "PeUW", "./te": "XLvN", "./te.js": "XLvN", "./tet": "V2x9", "./tet.js": "V2x9", "./tg": "Oxv6", "./tg.js": "Oxv6", "./th": "EOgW", "./th.js": "EOgW", "./tl-ph": "Dzi0", "./tl-ph.js": "Dzi0", "./tlh": "z3Vd", "./tlh.js": "z3Vd", "./tr": "DoHr", "./tr.js": "DoHr", "./tzl": "z1FC", "./tzl.js": "z1FC", "./tzm": "wQk9", "./tzm-latn": "tT3J", "./tzm-latn.js": "tT3J", "./tzm.js": "wQk9", "./ug-cn": "YRex", "./ug-cn.js": "YRex", "./uk": "raLr", "./uk.js": "raLr", "./ur": "UpQW", "./ur.js": "UpQW", "./uz": "Loxo", "./uz-latn": "AQ68", "./uz-latn.js": "AQ68", "./uz.js": "Loxo", "./vi": "KSF8", "./vi.js": "KSF8", "./x-pseudo": "/X5v", "./x-pseudo.js": "/X5v", "./yo": "fzPg", "./yo.js": "fzPg", "./zh-cn": "XDpg", "./zh-cn.js": "XDpg", "./zh-hk": "SatO", "./zh-hk.js": "SatO", "./zh-tw": "kOpN", "./zh-tw.js": "kOpN" };

            function r(e) { var t = i(e); return n(t) }

            function i(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return a[e] }
            r.keys = function() { return Object.keys(a) }, r.resolve = i, e.exports = r, r.id = "RnhZ" }, S6ln: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = e + " "; switch (n) {
                        case "ss":
                            return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return a += 1 === e ? "dan" : "dana";
                        case "MM":
                            return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } }
                e.defineLocale("hr", { months: { format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
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
                                    return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, SFxW: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xfcnc\xfc", 4: "-\xfcnc\xfc", 100: "-\xfcnc\xfc", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };
                e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"), weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"), weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xfcn\u0259n] LT", lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xe7\u0259 saniy\u0259", ss: "%d saniy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/, isPM: function(e) { return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/, ordinal: function(e) { if (0 === e) return e + "-\u0131nc\u0131"; var n = e % 10,
                            a = e % 100 - n,
                            r = e >= 100 ? 100 : null; return e + (t[n] || t[a] || t[r]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, SatO: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("zh-hk", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function(e, t) { switch (t) {
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
                                return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }) }(n("wd/R")) }, UDhR: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, USCx: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ga", { months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "M\xe9itheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deaireadh F\xf3mhair", "Samhain", "Nollaig"], monthsShort: ["Ean\xe1", "Feab", "M\xe1rt", "Aibr", "Beal", "M\xe9it", "I\xfail", "L\xfana", "Me\xe1n", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Satharn"], weekdaysShort: ["Dom", "Lua", "M\xe1i", "C\xe9a", "D\xe9a", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "M\xe1", "Ce", "D\xe9", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Am\xe1rach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inn\xe9 aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s \xf3 shin", s: "c\xfapla soicind", ss: "%d soicind", m: "n\xf3im\xe9ad", mm: "%d n\xf3im\xe9ad", h: "uair an chloig", hh: "%d uair an chloig", d: "l\xe1", dd: "%d l\xe1", M: "m\xed", MM: "%d m\xed", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, UpQW: function(e, t, n) {! function(e) { "use strict"; var t = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
                    n = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
                e.defineLocale("ur", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT", nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT", nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT", lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT", lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0628\u0639\u062f", past: "%s \u0642\u0628\u0644", s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688", ss: "%d \u0633\u06cc\u06a9\u0646\u0688", m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679", mm: "%d \u0645\u0646\u0679", h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1", hh: "%d \u06af\u06be\u0646\u0679\u06d2", d: "\u0627\u06cc\u06a9 \u062f\u0646", dd: "%d \u062f\u0646", M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1", MM: "%d \u0645\u0627\u06c1", y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, Ur1D: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, t, n) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, V2x9: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, Vclq: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, WYrj: function(e, t, n) {! function(e) { "use strict"; var t = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
                    n = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
                e.defineLocale("dv", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0789\u0786|\u0789\u078a/, isPM: function(e) { return "\u0789\u078a" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0789\u0786" : "\u0789\u078a" }, calendar: { sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT", nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT", nextWeek: "dddd LT", lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT", lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT", sameElse: "L" }, relativeTime: { future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s", past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s", s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0", ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa", m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0", mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d", h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0", hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d", d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0", dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d", M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0", MM: "\u0789\u07a6\u0790\u07b0 %d", y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0", yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 7, doy: 12 } }) }(n("wd/R")) }, WxRl: function(e, t, n) {! function(e) { "use strict"; var t = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

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
                e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"), weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"), weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xe5r] LT", nextWeek: "[P\xe5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xf6r %s sedan", s: "n\xe5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xe5nad", MM: "%d m\xe5nader", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, XDpg: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("zh-cn", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206", LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/, ordinal: function(e, t) { switch (t) {
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
                                return e } }, relativeTime: { future: "%s\u5185", past: "%s\u524d", s: "\u51e0\u79d2", ss: "%d \u79d2", m: "1 \u5206\u949f", mm: "%d \u5206\u949f", h: "1 \u5c0f\u65f6", hh: "%d \u5c0f\u65f6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4e2a\u6708", MM: "%d \u4e2a\u6708", y: "1 \u5e74", yy: "%d \u5e74" }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, XLvN: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("te", { months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"), monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"), monthsParseExact: !0, weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"), weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"), weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT", nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT", nextWeek: "dddd, LT", lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT", lastWeek: "[\u0c17\u0c24] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0c32\u0c4b", past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02", s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41", ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41", m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02", mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41", h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f", hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41", d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41", dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41", M: "\u0c12\u0c15 \u0c28\u0c46\u0c32", MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41", y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02", yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41" }, dayOfMonthOrdinalParse: /\d{1,2}\u0c35/, ordinal: "%d\u0c35", meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === t ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === t ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === t ? e >= 10 ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, XXja: function(e, t) { e.exports = "<p>\n  dashboard works!\n</p>\n" }, YRex: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ug-cn", { months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"), weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649", LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm", LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm" }, meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === t || "\u0633\u06d5\u06be\u06d5\u0631" === t || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === t ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === t || "\u0643\u06d5\u0686" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : a < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : a < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : a < 1230 ? "\u0686\u06c8\u0634" : a < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686" }, calendar: { sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT", nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT", nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT", lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0643\u06d0\u064a\u0649\u0646", past: "%s \u0628\u06c7\u0631\u06c7\u0646", s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a", ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a", m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a", mm: "%d \u0645\u0649\u0646\u06c7\u062a", h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a", hh: "%d \u0633\u0627\u0626\u06d5\u062a", d: "\u0628\u0649\u0631 \u0643\u06c8\u0646", dd: "%d \u0643\u06c8\u0646", M: "\u0628\u0649\u0631 \u0626\u0627\u064a", MM: "%d \u0626\u0627\u064a", y: "\u0628\u0649\u0631 \u064a\u0649\u0644", yy: "%d \u064a\u0649\u0644" }, dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-\u0643\u06c8\u0646\u0649";
                            case "w":
                            case "W":
                                return e + "-\u06be\u06d5\u067e\u062a\u06d5";
                            default:
                                return e } }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, Z4QM: function(e, t, n) {! function(e) { "use strict"; var t = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
                    n = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
                e.defineLocale("sd", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0627\u0684] LT", nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT", nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT", lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT", lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT", sameElse: "L" }, relativeTime: { future: "%s \u067e\u0648\u0621", past: "%s \u0627\u06b3", s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a", ss: "%d \u0633\u064a\u06aa\u0646\u068a", m: "\u0647\u06aa \u0645\u0646\u067d", mm: "%d \u0645\u0646\u067d", h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa", hh: "%d \u06aa\u0644\u0627\u06aa", d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646", dd: "%d \u068f\u064a\u0646\u0647\u0646", M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648", MM: "%d \u0645\u0647\u064a\u0646\u0627", y: "\u0647\u06aa \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, ZAMP: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, Zduo: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"), weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodia\u016d je] LT", nextDay: "[Morga\u016d je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hiera\u016d je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "anta\u016d %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, ZnE6: function(e, t) { e.exports = '<div style="display: block">\n    <canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"></canvas>\n</div>' }, aIdf: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { return e + " " + function(e, t) { return 2 === t ? function(e) { var t = { m: "v", b: "v", d: "z" }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }(e) : e }({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e) }
                e.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondenno\xf9", ss: "%d eilenn", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: function(e) { switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 9:
                                    return e + " bloaz";
                                default:
                                    return e + " vloaz" } } }, dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/, ordinal: function(e) { var t = 1 === e ? "a\xf1" : "vet"; return e + t }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, aIsn: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("mi", { months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"), weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te h\u0113kona ruarua", ss: "%d h\u0113kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, aQkU: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("mk", { months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"), weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT", nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT" } }, sameElse: "L" }, relativeTime: { future: "\u043f\u043e\u0441\u043b\u0435 %s", past: "\u043f\u0440\u0435\u0434 %s", s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u0435\u043d\u0430", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function(e) { var t = e % 10,
                            n = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, ahEl: function(e, t) { e.exports = '<div class="row">\n\n\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Usuarios</h4>\n                <table class="table table-hover" *ngIf="usuarios.length > 0">\n                    <tbody>\n                        <tr *ngFor="let usuario of usuarios" [routerLink]="[\'/usuarios\']" class="pointer">\n                            <td class="w70">\n                                <img [src]="usuario.img | imagen:\'usuario\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{usuario.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="usuarios.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Hospitales</h4>\n                <table class="table table-hover" *ngIf="hospitales.length > 0">\n                    <tbody>\n                        <tr *ngFor="let hospital of hospitales" [routerLink]="[\'/hospitales\']" class="pointer">\n                            <td class="w70">\n                                <img [src]="hospital.img | imagen:\'hospital\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{hospital.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="hospitales.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Medicos</h4>\n                <table class="table table-hover" *ngIf="medicos.length > 0">\n                    <tbody>\n                        <tr *ngFor="let medico of medicos" [routerLink]="[\'/medico\',medico._id]" class="pointer">\n                            <td class="w70">\n                                <img [src]="medico.img | imagen:\'medico\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{medico.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="medicos.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>' }, b1Dy: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, bOMt: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, bXm7: function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044b", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044b", 10: "-\u0448\u044b", 20: "-\u0448\u044b", 30: "-\u0448\u044b", 40: "-\u0448\u044b", 50: "-\u0448\u0456", 60: "-\u0448\u044b", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044b", 100: "-\u0448\u0456" };
                e.defineLocale("kk", { months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"), monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"), weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"), weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"), weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT", nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0456\u0448\u0456\u043d\u0434\u0435", past: "%s \u0431\u04b1\u0440\u044b\u043d", s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", hh: "%d \u0441\u0430\u0493\u0430\u0442", d: "\u0431\u0456\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0456\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0456\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/, ordinal: function(e) { var n = e % 10,
                            a = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[a]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, bYM6: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ar-tn", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, bpih: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, bxKX: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("it-ch", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, cRix: function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[\xf4fr\xfbne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien min\xfat", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, czMo: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }) }(n("wd/R")) }, dNwA: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, dgmN: function(e, t, n) { "use strict";
            n.r(t); var a = n("CcnG"),
                r = n("ZYCi"),
                i = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                o = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                s = function() {
                    function e() {} return e.prototype.ngOnInit = function() {}, e = i([Object(a.n)({ selector: "app-dashboard", template: n("XXja") }), o("design:paramtypes", [])], e) }(),
                d = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                u = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                l = function() {
                    function e() { this.progreso1 = 20, this.progreso2 = 30 } return e.prototype.ngOnInit = function() {}, e = d([Object(a.n)({ selector: "app-progress", template: n("J/NR") }), u("design:paramtypes", [])], e) }(),
                c = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                h = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                _ = function() {
                    function e() { this.graficos = { grafico1: { labels: ["Con Frijoles", "Con Natilla", "Con tocino"], data: [24, 30, 46], type: "doughnut", leyenda: "El pan se come con" }, grafico2: { labels: ["Hombres", "Mujeres"], data: [4500, 6e3], type: "doughnut", leyenda: "Entrevistados" }, grafico3: { labels: ["Si", "No"], data: [95, 5], type: "doughnut", leyenda: "\xbfLe dan gases los frijoles?" }, grafico4: { labels: ["No", "Si"], data: [85, 15], type: "doughnut", leyenda: "\xbfLe importa que le den gases?" } } } return e.prototype.ngOnInit = function() {}, e = c([Object(a.n)({ selector: "app-graficas1", template: n("HoiS") }), h("design:paramtypes", [])], e) }(),
                m = n("vWu4"),
                f = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                p = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                g = function() {
                    function e(e) { this._ajustes = e } return e.prototype.ngOnInit = function() { this.colocarCheck() }, e.prototype.cambiarColor = function(e, t) { this.aplicarCheck(t), this._ajustes.aplicarTema(e) }, e.prototype.aplicarCheck = function(e) { for (var t = 0, n = document.getElementsByClassName("selector"); t < n.length; t++) { n[t].classList.remove("working") }
                        e.classList.add("working") }, e.prototype.colocarCheck = function() { for (var e = document.getElementsByClassName("selector"), t = this._ajustes.ajustes.tema, n = 0, a = e; n < a.length; n++) { var r = a[n]; if (r.getAttribute("data-theme") === t) { r.classList.add("working"); break } } }, e.ctorParameters = function() { return [{ type: m.g }] }, e = f([Object(a.n)({ selector: "app-accout-settings", template: n("r3ED") }), p("design:paramtypes", [m.g])], e) }(),
                y = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                M = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                v = function() {
                    function e() { this.contarTres().then(function(e) { return console.log("Termino!", e) }).catch(function(e) { return console.error("Error en la promesa", e) }) } return e.prototype.ngOnInit = function() {}, e.prototype.contarTres = function() { return new Promise(function(e, t) { var n = 0,
                                a = setInterval(function() { n += 1, console.log(n), 3 === n && (e(!0), clearInterval(a)) }, 1e3) }) }, e = y([Object(a.n)({ selector: "app-promesas", template: n("K12L") }), M("design:paramtypes", [])], e) }(),
                b = n("88/t"),
                L = n("67Y/"),
                k = n("VnD/"),
                Y = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                w = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                D = function() {
                    function e() { this.subscription = this.regresaObservable().subscribe(function(e) { return console.log("subs", e) }, function(e) { return console.error("error en el obs", e) }, function() { return console.log("El Observador termino") }) } return e.prototype.ngOnInit = function() {}, e.prototype.ngOnDestroy = function() { console.log("La Pagina se va a cerrar"), this.subscription.unsubscribe() }, e.prototype.regresaObservable = function() { return new b.a(function(e) { var t = 0;
                            setInterval(function() { var n = { valor: ++t };
                                e.next(n) }, 1e3) }).pipe(Object(L.a)(function(e) { return e.valor }), Object(k.a)(function(e, t) { return e % 2 == 1 })) }, e = Y([Object(a.n)({ selector: "app-rxjs", template: n("0PPJ") }), w("design:paramtypes", [])], e) }(),
                x = n("GUC0"),
                T = n.n(x),
                S = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                H = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                j = function() {
                    function e(e) { this._usuarioService = e, this.usuario = this._usuarioService.usuario } return e.prototype.ngOnInit = function() {}, e.prototype.guardar = function(e) { this.usuario.nombre = e.nombre, this.usuario.google || (this.usuario.email = e.email), this._usuarioService.actualizarUsuario(this.usuario).subscribe() }, e.prototype.seleccionImage = function(e) { var t = this; if (e) { if (e.type.indexOf("image") < 0) return T()("Solo imagenes", "El archivo seleccionado no se una imagen", "error"), void(this.imagenSubir = null);
                            this.imagenSubir = e; var n = new FileReader;
                            n.readAsDataURL(e);
                            n.onloadend = function() { return t.imagenTemp = n.result } } else this.imagenSubir = null }, e.prototype.cambiarImagen = function() { this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id) }, e.ctorParameters = function() { return [{ type: m.k }] }, e = S([Object(a.n)({ selector: "app-profile", template: n("weJR") }), H("design:paramtypes", [m.k])], e) }(),
                O = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                P = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                A = function() {
                    function e(e, t) { this._usuarioService = e, this._modalUploadService = t, this.usuarios = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { var e = this;
                        this.cargarUsuarios(), this._modalUploadService.notificacion.subscribe(function(t) { return e.cargarUsuarios() }) }, e.prototype.cargarUsuarios = function() { var e = this;
                        this._usuarioService.cargarUsuarios().subscribe(function(t) { e.totalRegistros = t.total, e.usuarios = t.usuarios, e.cargando = !1 }) }, e.prototype.buscarUsuario = function(e) { var t = this;
                        e.length <= 0 ? this.cargarUsuarios() : (this.cargando = !0, this._usuarioService.buscarUsuarios(e).subscribe(function(e) { t.usuarios = e, t.cargando = !1 })) }, e.prototype.guardarUsuario = function(e) { this._usuarioService.actualizarUsuario(e).subscribe() }, e.prototype.borrarUsuario = function(e) { var t = this;
                        e._id !== this._usuarioService.usuario._id ? T()("\xbfEsta seguro?", "Esta a punto de borrar a " + e.nombre, "warning").then(function(n) { console.log(n), n && t._usuarioService.borrarUsuario(e._id).subscribe(function(e) { console.log(e), t.cargarUsuarios() }) }) : T()("No puede borrar usuario", "No se puede borrar a si mismo", "error") }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdeu")) + e;
                        t >= this.totalRegistros || t < 0 || (this._usuarioService.guardardesdeStorage(t), this.cargarUsuarios()) }, e.ctorParameters = function() { return [{ type: m.k }, { type: m.f }] }, e = O([Object(a.n)({ selector: "app-usuarios", template: n("2xEq") }), P("design:paramtypes", [m.k, m.f])], e) }(),
                C = function() {
                    function e(e, t, n, a) { this.nombre = e, this.img = t, this.usuario = n, this._id = a } return e.ctorParameters = function() { return [{ type: String }, { type: String }, { type: void 0 }, { type: String }] }, e }(),
                R = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                W = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                F = function() {
                    function e(e, t) { this._hospitalService = e, this._modalUploadService = t, this.hospitales = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { var e = this;
                        this.cargarHospitales(), this._modalUploadService.notificacion.subscribe(function() { return e.cargarHospitales() }) }, e.prototype.cargarHospitales = function() { var e = this;
                        this._hospitalService.cargarHospitales().subscribe(function(t) { e.totalRegistros = t.total, e.hospitales = t.hospitales, e.cargando = !1 }) }, e.prototype.crearHospital = function() { var e = this;
                        T()({ title: "Ingrese nuevo nombre:", text: "Ingrese el nombre del hospital", content: { element: "input", attributes: { placeholder: "Nombre de hospital" } }, buttons: ["Mejor no!", !0] }).then(function(t) { if (t) { var n = new C(t);
                                e._hospitalService.crearHospital(n).subscribe(function() { return e.cargarHospitales() }) } }) }, e.prototype.buscarHospital = function(e) { var t = this;
                        e.length <= 0 ? this.cargarHospitales() : (this.cargando = !0, this._hospitalService.buscarHospitales(e).subscribe(function(e) { t.totalRegistros = null, t.hospitales = e, t.cargando = !1 })) }, e.prototype.cambiarNombre = function(e) { T()({ title: "Nombre hospital:", text: "CAMBIAR A", content: { element: "input", attributes: { value: e.nombre } }, buttons: ["Mejor no!", !0] }).then(function(t) { t && (e.nombre = t) }) }, e.prototype.guardarHospital = function(e) { var t = this;
                        this._hospitalService.actualizarHospital(e).subscribe(function() { return t.cargarHospitales() }) }, e.prototype.borrarHospital = function(e) { var t = this;
                        this._hospitalService.borrarHospital(e._id).subscribe(function() { return t.cargarHospitales() }) }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("hospitales", e) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdeh")) + e;
                        t >= this.totalRegistros || t < 0 || (this._hospitalService.guardardesdeStorage(t), this.cargarHospitales()) }, e.ctorParameters = function() { return [{ type: m.c }, { type: m.f }] }, e = R([Object(a.n)({ selector: "app-hospitales", template: n("53Vw") }), W("design:paramtypes", [m.c, m.f])], e) }(),
                I = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                E = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                z = function() {
                    function e(e) { this._medicoService = e, this.medicos = [], this.desde = 0, this.cargando = !0 } return e.prototype.ngOnInit = function() { this.cargarMedicos() }, e.prototype.cargarMedicos = function() { var e = this;
                        this._medicoService.cargarMedico().subscribe(function(t) { e.medicos = t, e.cargando = !1 }) }, e.prototype.buscarMedico = function(e) { var t = this;
                        e.length <= 0 ? this.cargarMedicos() : (this.cargando = !0, this._medicoService.buscarMedicos(e).subscribe(function(e) { t._medicoService.totalMedicos = null, t.medicos = e, t.cargando = !1 })) }, e.prototype.borrarMedico = function(e) { var t = this;
                        this._medicoService.borrarMedico(e._id).subscribe(function() { return t.cargarMedicos() }) }, e.prototype.cambiarDesde = function(e) { var t = JSON.parse(localStorage.getItem("desdem")) + e;
                        t >= this._medicoService.totalMedicos || t < 0 || (this._medicoService.guardardesdeStorage(t), this.cargarMedicos()) }, e.ctorParameters = function() { return [{ type: m.e }] }, e = I([Object(a.n)({ selector: "app-medicos", template: n("CRzq") }), E("design:paramtypes", [m.e])], e) }(),
                N = function() {
                    function e(e, t, n, a, r) { this.nombre = e, this.img = t, this.usuario = n, this.hospital = a, this._id = r } return e.ctorParameters = function() { return [{ type: String }, { type: String }, { type: String }, { type: String }, { type: String }] }, e }(),
                B = n("7k1j"),
                V = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                U = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                J = function() {
                    function e(e, t, n, a, r) { var i = this;
                        this._medicoService = e, this._hospitalService = t, this.router = n, this.activatedRoute = a, this._modalUploadService = r, this.hospitales = [], this.medico = new N("", "", "", "", ""), this.hospital = new C(""), a.params.subscribe(function(e) { var t = e.id; "nuevo" !== t && i.cargarMedicoid(t) }) } return e.prototype.ngOnInit = function() { var e = this;
                        this._hospitalService.cargarHospitales().subscribe(function(t) { return e.hospitales = t.hospitales }), this._modalUploadService.notificacion.subscribe(function(t) { e.medico.img = t.medico.img }) }, e.prototype.guardarMedico = function(e) { var t = this;
                        console.log(e.valid), console.log(e.value), e.invalid || this._medicoService.guardarMedico(this.medico).subscribe(function(e) { t.medico._id = e._id, t.router.navigate(["/medico", e._id]) }) }, e.prototype.cambioHospital = function(e) { var t = this;
                        this._hospitalService.obtenerHospital(e).subscribe(function(e) { return t.hospital = e }) }, e.prototype.cargarMedicoid = function(e) { var t = this;
                        this._medicoService.cargarMedicoid(e).subscribe(function(e) { console.log(e), t.medico = e, t.medico.hospital = e.hospital._id, t.cambioHospital(t.medico.hospital) }) }, e.prototype.cambiarFoto = function() { this._modalUploadService.mostrarModal("medicos", this.medico._id) }, e.ctorParameters = function() { return [{ type: m.e }, { type: m.c }, { type: r.c }, { type: r.a }, { type: B.a }] }, e = V([Object(a.n)({ selector: "app-medico", template: n("0ncs") }), U("design:paramtypes", [m.e, m.c, r.c, r.a, B.a])], e) }(),
                G = n("t/Na"),
                q = n("0np6"),
                K = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                $ = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                Z = function() {
                    function e(e, t) { var n = this;
                        this.activatedRoute = e, this.http = t, this.usuarios = [], this.medicos = [], this.hospitales = [], e.params.subscribe(function(e) { var t = e.termino;
                            n.buscar(t) }) } return e.prototype.ngOnInit = function() {}, e.prototype.buscar = function(e) { var t = this,
                            n = q.a + "/busqueda/todo/" + e;
                        this.http.get(n).subscribe(function(e) { console.log(e), t.hospitales = e.hospitales, t.medicos = e.medicos, t.usuarios = e.usuarios }) }, e.ctorParameters = function() { return [{ type: r.a }, { type: G.a }] }, e = K([Object(a.n)({ selector: "app-busqueda", template: n("ahEl") }), $("design:paramtypes", [r.a, G.a])], e) }(),
                X = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                Q = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                ee = function() {
                    function e(e, t, n, a) { this._chatService = e, this._usuarioService = t, this._modalUploadService = n, this._wsService = a, this.value1 = "cargando sala", this.value2 = "cargando sala", this.value3 = "cargando sala", this.textoUser = "", this.usuarios = [], this.sala = this._usuarioService.usuario.sala, this.cargando = !0, this.totalRegistros = 0 } return e.prototype.ngOnInit = function() { var e = this,
                            t = this._usuarioService.obtenerSalas("salas");
                        this.salas = t, console.log("this.salas", this.salas), this.value1 = "Juegos", this.value2 = "Vacaciones", this.value3 = "dispersa", console.log("salasf", t), this.elemento = document.getElementById("divUsuarios"), this._chatService.emitirUsuariosActivos(), this.usuariosSubscription = this._chatService.getUsuariosActivos().subscribe(function(t) { void 0 === t && (t = []), e.usuarios = t, console.log("usuarios", e.usuarios) }), this.nombre = this._usuarioService.usuario.nombre, this.sala = this._usuarioService.usuario.sala, this.usuariosala = this._usuarioService.usuario }, e.prototype.ngOnDestroy = function() {}, e.prototype.onChanges = function(e) { e === this.value1 ? (this.sala = e, this.usuariosala.sala = this.value1, this._usuarioService.actualizarSala(this.usuariosala)) : e === this.value2 ? (this.sala = e, this.usuariosala.sala = this.value2) : e === this.value3 && (this.sala = e, this.usuariosala.sala = this.value3), this._usuarioService.actualizarSala(this.usuariosala) }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios1", e) }, e.prototype.buscar = function() { 0 !== this.textoUser.trim().length && (this._chatService.focusBuscar(this.textoUser), this.textoUser = "") }, e.prototype.salir = function() { this._chatService.logoutChatS() }, e.ctorParameters = function() { return [{ type: m.b }, { type: m.k }, { type: m.f }, { type: m.m }] }, X([Object(a.D)("value1"), Q("design:type", String)], e.prototype, "value1", void 0), X([Object(a.D)("value2"), Q("design:type", String)], e.prototype, "value2", void 0), X([Object(a.D)("value3"), Q("design:type", String)], e.prototype, "value3", void 0), e = X([Object(a.n)({ selector: "app-mensajes", template: n("Jt6t"), styles: [n("e0lI")] }), Q("design:paramtypes", [m.b, m.k, m.f, m.m])], e) }(),
                te = [{ path: "dashboard", component: s, canActivate: [m.l], data: { titulo: "Dashboard" } }, { path: "progress", component: l, data: { titulo: "Progress" } }, { path: "graficas1", component: _, data: { titulo: "Graficas" } }, { path: "promesas", component: v, data: { titulo: "Promesas" } }, { path: "rxjs", component: D, data: { titulo: "RxJs" } }, { path: "mensajes", component: ee, data: { titulo: "Mensajes" } }, { path: "account-settings", component: g, data: { titulo: "Ajustes" } }, { path: "perfil", component: j, data: { titulo: "Perfil" } }, { path: "busqueda/:termino", component: Z, data: { titulo: "Buscador" } }, { path: "usuarios", component: A, canActivate: [m.a], data: { titulo: "mantenimiento de usuario" } }, { path: "hospitales", component: F, data: { titulo: "mantenimiento de hospital" } }, { path: "medicos", component: z, data: { titulo: "mantenimiento de medico" } }, { path: "medico/:id", component: J, data: { titulo: "Actualizar medico" } }, { path: "", redirectTo: "/dashboard", pathMatch: "full" }],
                ne = r.d.forChild(te),
                ae = n("PCNd"),
                re = n("gIcY"),
                ie = n("Ip0R"),
                oe = n("mrSG"),
                se = n("MO+k"),
                de = n("26FU"),
                ue = n("LvDl"),
                le = [
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

            function ce(e, t, n) { if ("pie" === e || "doughnut" === e) return me(ge(n)); if ("polarArea" === e) return { backgroundColor: (a = ge(n)).map(function(e) { return he(e, .6) }), borderColor: a.map(function(e) { return he(e, 1) }), hoverBackgroundColor: a.map(function(e) { return he(e, .8) }), hoverBorderColor: a.map(function(e) { return he(e, 1) }) }; var a; if ("line" === e || "radar" === e) return function(e) { return { backgroundColor: he(e, .4), borderColor: he(e, 1), pointBackgroundColor: he(e, 1), pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: he(e, .8) } }(pe(t)); if ("bar" === e || "horizontalBar" === e) return function(e) { return { backgroundColor: he(e, .6), borderColor: he(e, 1), hoverBackgroundColor: he(e, .8), hoverBorderColor: he(e, 1) } }(pe(t)); if ("bubble" === e) return me(ge(n)); if ("scatter" === e) return me(ge(n)); throw new Error("getColors - Unsupported chart type " + e) }

            function he(e, t) { return "rgba(" + e.concat(t).join(",") + ")" }

            function _e(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e }

            function me(e) { return { backgroundColor: e.map(function(e) { return he(e, .6) }), borderColor: e.map(function() { return "#fff" }), pointBackgroundColor: e.map(function(e) { return he(e, 1) }), pointBorderColor: e.map(function() { return "#fff" }), pointHoverBackgroundColor: e.map(function(e) { return he(e, 1) }), pointHoverBorderColor: e.map(function(e) { return he(e, 1) }) } }

            function fe() { return [_e(0, 255), _e(0, 255), _e(0, 255)] }

            function pe(e) { return le[e] || fe() }

            function ge(e) { for (var t = new Array(e), n = 0; n < e; n++) t[n] = le[n] || fe(); return t } var ye = function() {
                    function e() { this.pColorschemesOptions = {}, this.colorschemesOptions = new de.a({}) } return e.prototype.setColorschemesOptions = function(e) { this.pColorschemesOptions = e, this.colorschemesOptions.next(e) }, e.prototype.getColorschemesOptions = function() { return this.pColorschemesOptions }, e.decorators = [{ type: a.A, args: [{ providedIn: "root" }] }], e.ctorParameters = function() { return [] }, e.ngInjectableDef = Object(a.nc)({ factory: function() { return new e }, token: e, providedIn: "root" }), e }(),
                Me = { Default: 0, Update: 1, Refresh: 2 };
            Me[Me.Default] = "Default", Me[Me.Update] = "Update", Me[Me.Refresh] = "Refresh"; var ve = function() {
                    function e(e, t) { this.element = e, this.themeService = t, this.options = {}, this.chartClick = new a.v, this.chartHover = new a.v, this.old = { dataExists: !1, dataLength: 0, datasetsExists: !1, datasetsLength: 0, datasetsDataObjects: [], datasetsDataLengths: [], colorsExists: !1, colors: [], labelsExist: !1, labels: [], legendExists: !1, legend: {} }, this.subs = [] } return e.registerPlugin = function(e) { se.Chart.plugins.register(e) }, e.unregisterPlugin = function(e) { se.Chart.plugins.unregister(e) }, e.prototype.ngOnInit = function() { var e = this;
                        this.ctx = this.element.nativeElement.getContext("2d"), this.refresh(), this.subs.push(this.themeService.colorschemesOptions.subscribe(function(t) { return e.themeChanged(t) })) }, e.prototype.themeChanged = function(e) { this.refresh() }, e.prototype.ngDoCheck = function() { var e = this; if (this.chart) { var t = Me.Default,
                                n = function(e) { t = e > t ? e : t }; switch (!!this.data !== this.old.dataExists && (this.propagateDataToDatasets(this.data), this.old.dataExists = !!this.data, n(Me.Update)), this.data && this.data.length !== this.old.dataLength && (this.old.dataLength = this.data && this.data.length || 0, n(Me.Update)), !!this.datasets !== this.old.datasetsExists && (this.old.datasetsExists = !!this.datasets, n(Me.Update)), this.datasets && this.datasets.length !== this.old.datasetsLength && (this.old.datasetsLength = this.datasets && this.datasets.length || 0, n(Me.Update)), this.datasets && this.datasets.filter(function(t, n) { return t.data !== e.old.datasetsDataObjects[n] }).length && (this.old.datasetsDataObjects = this.datasets.map(function(e) { return e.data }), n(Me.Update)), this.datasets && this.datasets.filter(function(t, n) { return t.data.length !== e.old.datasetsDataLengths[n] }).length && (this.old.datasetsDataLengths = this.datasets.map(function(e) { return e.data.length }), n(Me.Update)), !!this.colors !== this.old.colorsExists && (this.old.colorsExists = !!this.colors, this.updateColors(), n(Me.Update)), this.colors && this.colors.filter(function(t, n) { return !e.colorsEqual(t, e.old.colors[n]) }).length && (this.old.colors = this.colors.map(function(t) { return e.copyColor(t) }), this.updateColors(), n(Me.Update)), !!this.labels !== this.old.labelsExist && (this.old.labelsExist = !!this.labels, n(Me.Update)), this.labels && this.labels.filter(function(t, n) { return !e.labelsEqual(t, e.old.labels[n]) }).length && (this.old.labels = this.labels.map(function(t) { return e.copyLabel(t) }), n(Me.Update)), !!this.options.legend !== this.old.legendExists && (this.old.legendExists = !!this.options.legend, n(Me.Refresh)), this.options.legend && this.options.legend.position !== this.old.legend.position && (this.old.legend.position = this.options.legend.position, n(Me.Refresh)), t) {
                                case Me.Default:
                                    break;
                                case Me.Update:
                                    this.update(); break;
                                case Me.Refresh:
                                    this.refresh() } } }, e.prototype.copyLabel = function(e) { return Array.isArray(e) ? Object(oe.g)(e) : e }, e.prototype.labelsEqual = function(e, t) { return Array.isArray(e) === Array.isArray(t) && (Array.isArray(e) || e === t) && (!Array.isArray(e) || e.length === t.length) && (!Array.isArray(e) || 0 === e.filter(function(e, n) { return e !== t[n] }).length) }, e.prototype.copyColor = function(e) { return { backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderColor: e.borderColor, borderCapStyle: e.borderCapStyle, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderJoinStyle: e.borderJoinStyle, pointBorderColor: e.pointBorderColor, pointBackgroundColor: e.pointBackgroundColor, pointBorderWidth: e.pointBorderWidth, pointRadius: e.pointRadius, pointHoverRadius: e.pointHoverRadius, pointHitRadius: e.pointHitRadius, pointHoverBackgroundColor: e.pointHoverBackgroundColor, pointHoverBorderColor: e.pointHoverBorderColor, pointHoverBorderWidth: e.pointHoverBorderWidth, pointStyle: e.pointStyle, hoverBackgroundColor: e.hoverBackgroundColor, hoverBorderColor: e.hoverBorderColor, hoverBorderWidth: e.hoverBorderWidth } }, e.prototype.colorsEqual = function(e, t) { return !e == !t && (!e || e.backgroundColor === t.backgroundColor && e.borderWidth === t.borderWidth && e.borderColor === t.borderColor && e.borderCapStyle === t.borderCapStyle && e.borderDash === t.borderDash && e.borderDashOffset === t.borderDashOffset && e.borderJoinStyle === t.borderJoinStyle && e.pointBorderColor === t.pointBorderColor && e.pointBackgroundColor === t.pointBackgroundColor && e.pointBorderWidth === t.pointBorderWidth && e.pointRadius === t.pointRadius && e.pointHoverRadius === t.pointHoverRadius && e.pointHitRadius === t.pointHitRadius && e.pointHoverBackgroundColor === t.pointHoverBackgroundColor && e.pointHoverBorderColor === t.pointHoverBorderColor && e.pointHoverBorderWidth === t.pointHoverBorderWidth && e.pointStyle === t.pointStyle && e.hoverBackgroundColor === t.hoverBackgroundColor && e.hoverBorderColor === t.hoverBorderColor && e.hoverBorderWidth === t.hoverBorderWidth) }, e.prototype.updateColors = function() { var e = this;
                        this.datasets.forEach(function(t, n) { e.colors && e.colors[n] ? Object.assign(t, e.colors[n]) : Object.assign(t, ce(e.chartType, n, t.data.length), Object(oe.a)({}, t)) }) }, e.prototype.ngOnChanges = function(e) { var t = Me.Default,
                            n = function(e) { t = e > t ? e : t }; switch (e.hasOwnProperty("data") && e.data.currentValue && (this.propagateDataToDatasets(e.data.currentValue), n(Me.Update)), e.hasOwnProperty("datasets") && e.datasets.currentValue && (this.propagateDatasetsToData(e.datasets.currentValue), n(Me.Update)), e.hasOwnProperty("labels") && (this.chart && (this.chart.data.labels = e.labels.currentValue), n(Me.Update)), e.hasOwnProperty("legend") && (this.chart && (this.chart.config.options.legend.display = e.legend.currentValue, this.chart.generateLegend()), n(Me.Update)), e.hasOwnProperty("options") && n(Me.Refresh), t) {
                            case Me.Update:
                                this.update(); break;
                            case Me.Refresh:
                            case Me.Default:
                                this.refresh() } }, e.prototype.ngOnDestroy = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach(function(e) { return e.unsubscribe() }) }, e.prototype.update = function(e, t) { if (this.chart) return this.chart.update(e, t) }, e.prototype.hideDataset = function(e, t) { this.chart.getDatasetMeta(e).hidden = t, this.chart.update() }, e.prototype.isDatasetHidden = function(e) { return this.chart.getDatasetMeta(e).hidden }, e.prototype.toBase64Image = function() { return this.chart.toBase64Image() }, e.prototype.getChartConfiguration = function() { var e = this,
                            t = this.getDatasets(),
                            n = Object.assign({}, this.options);!1 === this.legend && (n.legend = { display: !1 }), n.hover = n.hover || {}, n.hover.onHover || (n.hover.onHover = function(t, n) { n && !n.length || e.chartHover.emit({ event: t, active: n }) }), n.onClick || (n.onClick = function(t, n) { e.chartClick.emit({ event: t, active: n }) }); var a = this.smartMerge(n, this.themeService.getColorschemesOptions()); return { type: this.chartType, data: { labels: this.labels || [], datasets: t }, plugins: this.plugins, options: a } }, e.prototype.getChartBuilder = function(e) { var t = this.getChartConfiguration(); return new se.Chart(e, t) }, e.prototype.smartMerge = function(e, t, n) { var a = this; if (void 0 === n && (n = 0), 0 === n && (e = Object(ue.cloneDeep)(e)), Object.keys(t).forEach(function(r) { if (Array.isArray(t[r])) { var i = e[r];
                                    i && i.forEach(function(e) { a.smartMerge(e, t[r][0], n + 1) }) } else "object" == typeof t[r] ? (r in e || (e[r] = {}), a.smartMerge(e[r], t[r], n + 1)) : e[r] = t[r] }), 0 === n) return e }, e.prototype.isMultiLineLabel = function(e) { return Array.isArray(e) }, e.prototype.joinLabel = function(e) { return e ? this.isMultiLineLabel(e) ? e.join(" ") : e : null }, e.prototype.propagateDatasetsToData = function(e) { this.data = this.datasets.map(function(e) { return e.data }), this.chart && (this.chart.data.datasets = e), this.updateColors() }, e.prototype.propagateDataToDatasets = function(e) { var t = this;
                        this.isMultiDataSet(e) ? this.datasets && e.length === this.datasets.length ? this.datasets.forEach(function(t, n) { t.data = e[n] }) : (this.datasets = e.map(function(e, n) { return { data: e, label: t.joinLabel(t.labels[n]) || "Label " + n } }), this.chart && (this.chart.data.datasets = this.datasets)) : this.datasets ? (this.datasets[0].data = e, this.datasets.splice(1)) : (this.datasets = [{ data: e }], this.chart && (this.chart.data.datasets = this.datasets)), this.updateColors() }, e.prototype.isMultiDataSet = function(e) { return Array.isArray(e[0]) }, e.prototype.getDatasets = function() { if (!this.datasets && !this.data) throw new Error("ng-charts configuration error, data or datasets field are required to render chart " + this.chartType); return this.datasets ? (this.propagateDatasetsToData(this.datasets), this.datasets) : this.data ? (this.propagateDataToDatasets(this.data), this.datasets) : void 0 }, e.prototype.refresh = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.ctx && (this.chart = this.getChartBuilder(this.ctx)) }, e.decorators = [{ type: a.s, args: [{ selector: "canvas[baseChart]", exportAs: "base-chart" }] }], e.ctorParameters = function() { return [{ type: a.t }, { type: ye }] }, e.propDecorators = { data: [{ type: a.D }], datasets: [{ type: a.D }], labels: [{ type: a.D }], options: [{ type: a.D }], chartType: [{ type: a.D }], colors: [{ type: a.D }], legend: [{ type: a.D }], plugins: [{ type: a.D }], chartClick: [{ type: a.P }], chartHover: [{ type: a.P }] }, e }(),
                be = function() {
                    function e() {} return e.decorators = [{ type: a.I, args: [{ declarations: [ve], imports: [], exports: [ve] }] }], e }(); var Le = n("iTUp"),
                ke = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                Ye = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                we = function() {
                    function e() { this.leyenda = "Leyenda", this.progreso = 50, this.cambioValor = new a.v } return e.prototype.ngOnInit = function() {}, e.prototype.onChanges = function(e) { this.progreso = e >= 100 ? 100 : e <= 0 ? 0 : e, this.txtProgress.nativeElement.value = this.progreso, this.cambioValor.emit(this.progreso) }, e.prototype.cambiarValor = function(e) { this.progreso >= 100 && e > 0 ? this.progreso = 100 : this.progreso <= 0 && e < 0 ? this.progreso = 0 : (this.progreso = this.progreso + e, this.cambioValor.emit(this.progreso), this.txtProgress.nativeElement.focus()) }, ke([Object(a.kb)("txtProgress", { static: !1 }), Ye("design:type", a.t)], e.prototype, "txtProgress", void 0), ke([Object(a.D)("nombre"), Ye("design:type", String)], e.prototype, "leyenda", void 0), ke([Object(a.D)(), Ye("design:type", Number)], e.prototype, "progreso", void 0), ke([Object(a.P)("actualizaValor"), Ye("design:type", a.v)], e.prototype, "cambioValor", void 0), e = ke([Object(a.n)({ selector: "app-incrementador", template: n("66Xq") }), Ye("design:paramtypes", [])], e) }(),
                De = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                xe = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                Te = function() {
                    function e() { this.doughnutChartLabels = [], this.doughnutChartData = [], this.doughnutChartType = "" } return e.prototype.ngOnInit = function() {}, De([Object(a.D)("chartLabels"), xe("design:type", Array)], e.prototype, "doughnutChartLabels", void 0), De([Object(a.D)("chartData"), xe("design:type", Array)], e.prototype, "doughnutChartData", void 0), De([Object(a.D)("chartType"), xe("design:type", String)], e.prototype, "doughnutChartType", void 0), e = De([Object(a.n)({ selector: "app-grafico-dona", template: n("ZnE6") }), xe("design:paramtypes", [])], e) }(),
                Se = n("gWzw"),
                He = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                je = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                Oe = function() {
                    function e(e, t, n) { this._chatService = e, this._usuarioService = t, this._modalUploadService = n, this.textoUser = "", this.texto = "", this.mensajes = [] } return e.prototype.ngOnInit = function() { var e = this;
                        this.elemento = document.getElementById("divChatbox"), this.mensajesSubscription = this._chatService.getMessages().subscribe(function(t) { console.log("En Subscribe"); var n = t.de,
                                a = t.cuerpo,
                                r = new Date(t.fecha),
                                i = t.img;
                            t.de === e._usuarioService.usuario.nombre && (n = "yo"); var o = r.getHours() + ":" + r.getMinutes();
                            e.msg = { de: n, cuerpo: a, hora: o, img: i }, e.mensajes.push(e.msg), console.log("mensaje1", e.msg) }), this._modalUploadService.notificacion.subscribe(function(t) { return e._usuarioService.cargarUsuarios() }) }, e.prototype.ngOnDestroy = function() { this.mensajesSubscription.unsubscribe() }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.enviar = function() { var e = this;
                        0 !== this.texto.trim().length && (this._chatService.sendMessage(this.texto, function(t) { e.msg = t, console.log("this.msg = ", e.msg) }), this.texto = "") }, e.ctorParameters = function() { return [{ type: m.b }, { type: Se.a }, { type: m.f }] }, e = He([Object(a.n)({ selector: "app-chat", template: n("6iPR"), styles: [n("3tpr")] }), je("design:paramtypes", [m.b, Se.a, m.f])], e) }();
            n.d(t, "PagesModule", function() { return Ae }); var Pe = function(e, t, n, a) { var r, i = arguments.length,
                        o = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o); return i > 3 && o && Object.defineProperty(t, n, o), o },
                Ae = function() {
                    function e() {} return e = Pe([Object(a.I)({ declarations: [s, l, _, we, Te, g, v, D, j, A, F, z, J, ee, Oe, Z], exports: [s, l, _, Oe], imports: [ie.b, ae.a, ne, re.c, be, Le.a] })], e) }() }, "e+ae": function(e, t, n) {! function(e) { "use strict"; var t = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                    n = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

                function a(e) { return e > 1 && e < 5 }

                function r(e, t, n, r) { var i = e + " "; switch (n) {
                        case "s":
                            return t || r ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                        case "ss":
                            return t || r ? i + (a(e) ? "sekundy" : "sek\xfand") : i + "sekundami";
                        case "m":
                            return t ? "min\xfata" : r ? "min\xfatu" : "min\xfatou";
                        case "mm":
                            return t || r ? i + (a(e) ? "min\xfaty" : "min\xfat") : i + "min\xfatami";
                        case "h":
                            return t ? "hodina" : r ? "hodinu" : "hodinou";
                        case "hh":
                            return t || r ? i + (a(e) ? "hodiny" : "hod\xedn") : i + "hodinami";
                        case "d":
                            return t || r ? "de\u0148" : "d\u0148om";
                        case "dd":
                            return t || r ? i + (a(e) ? "dni" : "dn\xed") : i + "d\u0148ami";
                        case "M":
                            return t || r ? "mesiac" : "mesiacom";
                        case "MM":
                            return t || r ? i + (a(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                        case "y":
                            return t || r ? "rok" : "rokom";
                        case "yy":
                            return t || r ? i + (a(e) ? "roky" : "rokov") : i + "rokmi" } }
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
                                    return "[minul\xfa sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, e0lI: function(e, t) { e.exports = "" }, fzPg: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("yo", { months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"), weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"), weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[O\u0300ni\u0300 ni] LT", nextDay: "[\u1ecc\u0300la ni] LT", nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT", lastDay: "[A\u0300na ni] LT", lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT", sameElse: "L" }, relativeTime: { future: "ni\u0301 %s", past: "%s k\u1ecdja\u0301", s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die", ss: "aaya\u0301 %d", m: "i\u0300s\u1eb9ju\u0301 kan", mm: "i\u0300s\u1eb9ju\u0301 %d", h: "wa\u0301kati kan", hh: "wa\u0301kati %d", d: "\u1ecdj\u1ecd\u0301 kan", dd: "\u1ecdj\u1ecd\u0301 %d", M: "osu\u0300 kan", MM: "osu\u0300 %d", y: "\u1ecddu\u0301n kan", yy: "\u1ecddu\u0301n %d" }, dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/, ordinal: "\u1ecdj\u1ecd\u0301 %d", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, gVVK: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = e + " "; switch (n) {
                        case "s":
                            return t || a ? "nekaj sekund" : "nekaj sekundami";
                        case "ss":
                            return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                        case "d":
                            return t || a ? "en dan" : "enim dnem";
                        case "dd":
                            return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                        case "M":
                            return t || a ? "en mesec" : "enim mesecem";
                        case "MM":
                            return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                        case "y":
                            return t || a ? "eno leto" : "enim letom";
                        case "yy":
                            return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti" } }
                e.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() { switch (this.day()) {
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
                                    return "[prej\u0161nji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "\u010dez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, gekB: function(e, t, n) {! function(e) { "use strict"; var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
                    n = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

                function a(e, a, r, i) { var o = ""; switch (r) {
                        case "s":
                            return i ? "muutaman sekunnin" : "muutama sekunti";
                        case "ss":
                            return i ? "sekunnin" : "sekuntia";
                        case "m":
                            return i ? "minuutin" : "minuutti";
                        case "mm":
                            o = i ? "minuutin" : "minuuttia"; break;
                        case "h":
                            return i ? "tunnin" : "tunti";
                        case "hh":
                            o = i ? "tunnin" : "tuntia"; break;
                        case "d":
                            return i ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                        case "dd":
                            o = i ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4"; break;
                        case "M":
                            return i ? "kuukauden" : "kuukausi";
                        case "MM":
                            o = i ? "kuukauden" : "kuukautta"; break;
                        case "y":
                            return i ? "vuoden" : "vuosi";
                        case "yy":
                            o = i ? "vuoden" : "vuotta" } return o = function(e, a) { return e < 10 ? a ? n[e] : t[e] : e }(e, i) + " " + o }
                e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\xe4n\xe4\xe4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4\xe4st\xe4", past: "%s sitten", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, gjCT: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
                    n = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" };
                e.defineLocale("ar-sa", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, hKrs: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("bg", { months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT", nextWeek: "dddd [\u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT", lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT" } }, sameElse: "L" }, relativeTime: { future: "\u0441\u043b\u0435\u0434 %s", past: "\u043f\u0440\u0435\u0434\u0438 %s", s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u043d\u0438", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function(e) { var t = e % 10,
                            n = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, honF: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u1041", 2: "\u1042", 3: "\u1043", 4: "\u1044", 5: "\u1045", 6: "\u1046", 7: "\u1047", 8: "\u1048", 9: "\u1049", 0: "\u1040" },
                    n = { "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1040": "0" };
                e.defineLocale("my", { months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"), monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"), weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"), weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]", nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]", nextWeek: "dddd LT [\u1019\u103e\u102c]", lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]", lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]", sameElse: "L" }, relativeTime: { future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c", past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000", s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a", ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a", m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a", mm: "%d \u1019\u102d\u1014\u1005\u103a", h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e", hh: "%d \u1014\u102c\u101b\u102e", d: "\u1010\u1005\u103a\u101b\u1000\u103a", dd: "%d \u101b\u1000\u103a", M: "\u1010\u1005\u103a\u101c", MM: "%d \u101c", y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a", yy: "%d \u1014\u103e\u1005\u103a" }, preparse: function(e) { return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, iEDd: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextDay: function() { return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, iYuL: function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, jUeY: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("el", { monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"), monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"), months: function(e, t) { return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl }, monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"), weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"), weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"), weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"), meridiem: function(e, t, n) { return e > 11 ? n ? "\u03bc\u03bc" : "\u039c\u039c" : n ? "\u03c0\u03bc" : "\u03a0\u039c" }, isPM: function(e) { return "\u03bc" === (e + "").toLowerCase()[0] }, meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT", nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT", lastWeek: function() { switch (this.day()) {
                                case 6:
                                    return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                                default:
                                    return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT" } }, sameElse: "L" }, calendar: function(e, t) { var n, a = this._calendarEl[e],
                            r = t && t.hours(); return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", r % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2") }, relativeTime: { future: "\u03c3\u03b5 %s", past: "%s \u03c0\u03c1\u03b9\u03bd", s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc", mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac", h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1", hh: "%d \u03ce\u03c1\u03b5\u03c2", d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1", dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2", M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2", MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2", y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2", yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1" }, dayOfMonthOrdinalParse: /\d{1,2}\u03b7/, ordinal: "%d\u03b7", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, jVdC: function(e, t, n) {! function(e) { "use strict"; var t = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
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
                    i = function(e) { return function(t, n, i, o) { var s = a(t),
                                d = r[e][a(t)]; return 2 === s && (d = d[n ? 0 : 1]), d.replace(/%d/i, t) } },
                    o = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar", { months: o, monthsShort: o, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: i("s"), ss: i("s"), m: i("m"), mm: i("m"), h: i("h"), hh: i("h"), d: i("d"), dd: i("d"), M: i("M"), MM: i("M"), y: i("y"), yy: i("y") }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return n[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, kEOa: function(e, t, n) {! function(e) { "use strict"; var t = { 1: "\u09e7", 2: "\u09e8", 3: "\u09e9", 4: "\u09ea", 5: "\u09eb", 6: "\u09ec", 7: "\u09ed", 8: "\u09ee", 9: "\u09ef", 0: "\u09e6" },
                    n = { "\u09e7": "1", "\u09e8": "2", "\u09e9": "3", "\u09ea": "4", "\u09eb": "5", "\u09ec": "6", "\u09ed": "7", "\u09ee": "8", "\u09ef": "9", "\u09e6": "0" };
                e.defineLocale("bn", { months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"), monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"), weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"), weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), longDateFormat: { LT: "A h:mm \u09b8\u09ae\u09df", LTS: "A h:mm:ss \u09b8\u09ae\u09df", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df", LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df" }, calendar: { sameDay: "[\u0986\u099c] LT", nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT", lastWeek: "[\u0997\u09a4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09aa\u09b0\u09c7", past: "%s \u0986\u0997\u09c7", s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f", mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f", h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be", hh: "%d \u0998\u09a8\u09cd\u099f\u09be", d: "\u098f\u0995 \u09a6\u09bf\u09a8", dd: "%d \u09a6\u09bf\u09a8", M: "\u098f\u0995 \u09ae\u09be\u09b8", MM: "%d \u09ae\u09be\u09b8", y: "\u098f\u0995 \u09ac\u099b\u09b0", yy: "%d \u09ac\u099b\u09b0" }, preparse: function(e) { return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === t && e >= 4 || "\u09a6\u09c1\u09aa\u09c1\u09b0" === t && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4" }, week: { dow: 0, doy: 6 } }) }(n("wd/R")) }, kOpN: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("zh-tw", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "\u51cc\u6668" : a < 900 ? "\u65e9\u4e0a" : a < 1130 ? "\u4e0a\u5348" : a < 1230 ? "\u4e2d\u5348" : a < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929] LT", nextDay: "[\u660e\u5929] LT", nextWeek: "[\u4e0b]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4e0a]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function(e, t) { switch (t) {
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
                                return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }) }(n("wd/R")) }, l5ep: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn \xf4l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var t = e,
                            n = ""; return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, lXzo: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r, i, o = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442", hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432", yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442" }; return "m" === n ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (a = o[n], r = +e, i = a.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) } var n = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
                e.defineLocale("ru", { months: { format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"), standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_") }, monthsShort: { format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"), standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_") }, weekdays: { standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"), format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ }, weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), monthsParse: n, longMonthsParse: n, shortMonthsParse: n, monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i, monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" }, calendar: { sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT", nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT", nextWeek: function(e) { if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT"; switch (this.day()) {
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
                                return e } }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, lYtQ: function(e, t, n) {! function(e) { "use strict";

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
                e.defineLocale("mn", { months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"), monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"), monthsParseExact: !0, weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"), weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"), weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D", LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm", LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm" }, meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i, isPM: function(e) { return "\u04ae\u0425" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425" }, calendar: { sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT", nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT", nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT", lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT", lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT", sameElse: "L" }, relativeTime: { future: "%s \u0434\u0430\u0440\u0430\u0430", past: "%s \u04e9\u043c\u043d\u04e9", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/, ordinal: function(e, t) { switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " \u04e9\u0434\u04e9\u0440";
                            default:
                                return e } } }) }(n("wd/R")) }, lgnt: function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-\u0447\u04af", 1: "-\u0447\u0438", 2: "-\u0447\u0438", 3: "-\u0447\u04af", 4: "-\u0447\u04af", 5: "-\u0447\u0438", 6: "-\u0447\u044b", 7: "-\u0447\u0438", 8: "-\u0447\u0438", 9: "-\u0447\u0443", 10: "-\u0447\u0443", 20: "-\u0447\u044b", 30: "-\u0447\u0443", 40: "-\u0447\u044b", 50: "-\u0447\u04af", 60: "-\u0447\u044b", 70: "-\u0447\u0438", 80: "-\u0447\u0438", 90: "-\u0447\u0443", 100: "-\u0447\u04af" };
                e.defineLocale("ky", { months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"), weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"), weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT", nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0438\u0447\u0438\u043d\u0434\u0435", past: "%s \u043c\u0443\u0440\u0443\u043d", s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442", mm: "%d \u043c\u04af\u043d\u04e9\u0442", h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442", hh: "%d \u0441\u0430\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0438\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0438\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/, ordinal: function(e) { var n = e % 10,
                            a = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[a]) }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, lyxo: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[n] }
                e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\xe2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s \xeen urm\u0103", s: "c\xe2teva secunde", ss: t, m: "un minut", mm: t, h: "o or\u0103", hh: t, d: "o zi", dd: t, M: "o lun\u0103", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, nyYc: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("fr", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function(e, t) { switch (t) {
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
                                return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, o1bE: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("ar-dz", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 4 } }) }(n("wd/R")) }, "p/rL": function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"), weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm" }, calendar: { sameDay: "[Bi l\u025br\u025b] LT", nextDay: "[Sini l\u025br\u025b] LT", nextWeek: "dddd [don l\u025br\u025b] LT", lastDay: "[Kunu l\u025br\u025b] LT", lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT", sameElse: "L" }, relativeTime: { future: "%s k\u0254n\u0254", past: "a b\u025b %s b\u0254", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "l\u025br\u025b kelen", hh: "l\u025br\u025b %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, r3ED: function(e, t) { e.exports = '<div class="row">\n    <div class="col-4">\n\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">Temas</h4>\n                <hr>\n\n                <div class="r-panel-body">\n                    <ul id="themecolors" class="m-t-20">\n                        <li><b>Con el sidebar claro</b></li>\n                        <li><a #link1 (click)="cambiarColor(\'default\', link1 )" data-theme="default" class="selector default-theme">1</a></li>\n                        <li><a #link2 (click)="cambiarColor(\'green\', link2 )" data-theme="green" class="selector green-theme">2</a></li>\n                        <li><a #link3 (click)="cambiarColor(\'red\', link3 )" data-theme="red" class="selector red-theme">3</a></li>\n                        <li><a #link4 (click)="cambiarColor(\'blue\', link4 )" data-theme="blue" class="selector blue-theme">4</a></li>\n                        <li><a #link5 (click)="cambiarColor(\'purple\', link5 )" data-theme="purple" class="selector purple-theme">5</a></li>\n                        <li><a #link6 (click)="cambiarColor(\'megna\', link6 )" data-theme="megna" class="selector megna-theme">6</a></li>\n\n                        <li class="d-block m-t-30"><b>Con el sidebar oscuro</b></li>\n                        <li><a #link7 (click)="cambiarColor(\'default-dark\', link7 )" data-theme="default-dark" class="selector default-dark-theme">7</a></li>\n                        <li><a #link8 (click)="cambiarColor(\'green-dark\', link8 )" data-theme="green-dark" class="selector green-dark-theme">8</a></li>\n                        <li><a #link9 (click)="cambiarColor(\'red-dark\', link9 )" data-theme="red-dark" class="selector red-dark-theme">9</a></li>\n                        <li><a #link10 (click)="cambiarColor(\'blue-dark\', link10 )" data-theme="blue-dark" class="selector blue-dark-theme">10</a></li>\n                        <li><a #link11 (click)="cambiarColor(\'purple-dark\', link11 )" data-theme="purple-dark" class="selector purple-dark-theme">11</a></li>\n                        <li><a #link12 (click)="cambiarColor(\'megna-dark\', link12 )" data-theme="megna-dark" class="selector megna-dark-theme">12</a></li>\n                    </ul>\n\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n</div>' }, raLr: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n) { var a, r, i, o = { ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434", mm: t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d", hh: t ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432", MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432", yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432" }; return "m" === n ? t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === n ? t ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (a = o[n], r = +e, i = a.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) }

                function n(e) { return function() { return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT" } }
                e.defineLocale("uk", { months: { format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_") }, monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"), weekdays: function(e, t) { var n = { nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_") }; if (!0 === e) return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)); if (!e) return n.nominative; var a = /(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"; return n[a][e.day()] }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" }, calendar: { sameDay: n("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "), nextDay: n("[\u0417\u0430\u0432\u0442\u0440\u0430 "), lastDay: n("[\u0412\u0447\u043e\u0440\u0430 "), nextWeek: n("[\u0423] dddd ["), lastWeek: function() { switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return n("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return n("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "%s \u0442\u043e\u043c\u0443", s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434", ss: t, m: t, mm: t, h: "\u0433\u043e\u0434\u0438\u043d\u0443", hh: t, d: "\u0434\u0435\u043d\u044c", dd: t, M: "\u043c\u0456\u0441\u044f\u0446\u044c", MM: t, y: "\u0440\u0456\u043a", yy: t }, meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/, isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/, ordinal: function(e, t) { switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            default:
                                return e } }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, "s+uk": function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                e.defineLocale("de-at", { months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, sp3z: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("lo", { months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/, isPM: function(e) { return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e }, meridiem: function(e, t, n) { return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" }, calendar: { sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", sameElse: "L" }, relativeTime: { future: "\u0ead\u0eb5\u0e81 %s", past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2", s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", m: "1 \u0e99\u0eb2\u0e97\u0eb5", mm: "%d \u0e99\u0eb2\u0e97\u0eb5", h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", d: "1 \u0ea1\u0eb7\u0ec9", dd: "%d \u0ea1\u0eb7\u0ec9", M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99", MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99", y: "1 \u0e9b\u0eb5", yy: "%d \u0e9b\u0eb5" }, dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/, ordinal: function(e) { return "\u0e97\u0eb5\u0ec8" + e } }) }(n("wd/R")) }, tGlX: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                e.defineLocale("de", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, tT3J: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("tzm-latn", { months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minu\u1e0d", mm: "%d minu\u1e0d", h: "sa\u025ba", hh: "%d tassa\u025bin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, tUCv: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }) }(n("wd/R")) }, u3GI: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[n][0] : r[n][1] }
                e.defineLocale("de-ch", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, uEye: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I g\xe5r klokka] LT", lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein m\xe5nad", MM: "%d m\xe5nader", y: "eit \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, uXwI: function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"), m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), h: "stundas_stund\u0101m_stunda_stundas".split("_"), hh: "stundas_stund\u0101m_stunda_stundas".split("_"), d: "dienas_dien\u0101m_diena_dienas".split("_"), dd: "dienas_dien\u0101m_diena_dienas".split("_"), M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

                function n(e, t, n) { return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1] }

                function a(e, a, r) { return e + " " + n(t[r], e, a) }

                function r(e, a, r) { return n(t[r], e, a) }
                e.defineLocale("lv", { months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"), weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[\u0160odien pulksten] LT", nextDay: "[R\u012bt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "p\u0113c %s", past: "pirms %s", s: function(e, t) { return t ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m" }, ss: a, m: r, mm: a, h: r, hh: a, d: r, dd: a, M: r, MM: a, y: r, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, wQk9: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("tzm", { months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT", nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT", nextWeek: "dddd [\u2d34] LT", lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT", lastWeek: "dddd [\u2d34] LT", sameElse: "L" }, relativeTime: { future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s", past: "\u2d62\u2d30\u2d4f %s", s: "\u2d49\u2d4e\u2d49\u2d3d", ss: "%d \u2d49\u2d4e\u2d49\u2d3d", m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a", mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a", h: "\u2d59\u2d30\u2d44\u2d30", hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f", d: "\u2d30\u2d59\u2d59", dd: "%d o\u2d59\u2d59\u2d30\u2d4f", M: "\u2d30\u2d62o\u2d53\u2d54", MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f", y: "\u2d30\u2d59\u2d33\u2d30\u2d59", yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f" }, week: { dow: 6, doy: 12 } }) }(n("wd/R")) }, "wd/R": function(e, t, n) {
            (function(e) { e.exports = function() { "use strict"; var t, a;

                    function r() { return t.apply(null, arguments) }

                    function i(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

                    function o(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

                    function s(e) { return void 0 === e }

                    function d(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

                    function u(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

                    function l(e, t) { var n, a = []; for (n = 0; n < e.length; ++n) a.push(t(e[n], n)); return a }

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

                    function y(e, t) { var n, a, r; if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = m(t)), s(t._locale) || (e._locale = t._locale), g.length > 0)
                            for (n = 0; n < g.length; n++) a = g[n], s(r = t[a]) || (e[a] = r); return e } var M = !1;

                    function v(e) { y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, r.updateOffset(this), M = !1) }

                    function b(e) { return e instanceof v || null != e && null != e._isAMomentObject }

                    function L(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

                    function k(e) { var t = +e,
                            n = 0; return 0 !== t && isFinite(t) && (n = L(t)), n }

                    function Y(e, t, n) { var a, r = Math.min(e.length, t.length),
                            i = Math.abs(e.length - t.length),
                            o = 0; for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && o++; return o + i }

                    function w(e) {!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

                    function D(e, t) { var n = !0; return h(function() { if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) { for (var a, i = [], o = 0; o < arguments.length; o++) { if (a = "", "object" == typeof arguments[o]) { for (var s in a += "\n[" + o + "] ", arguments[0]) a += s + ": " + arguments[0][s] + ", ";
                                        a = a.slice(0, -2) } else a = arguments[o];
                                    i.push(a) }
                                w(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), n = !1 } return t.apply(this, arguments) }, t) } var x, T = {};

                    function S(e, t) { null != r.deprecationHandler && r.deprecationHandler(e, t), T[e] || (w(t), T[e] = !0) }

                    function H(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

                    function j(e, t) { var n, a = h({}, e); for (n in t) c(t, n) && (o(e[n]) && o(t[n]) ? (a[n] = {}, h(a[n], e[n]), h(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]); for (n in e) c(e, n) && !c(t, n) && o(e[n]) && (a[n] = h({}, a[n])); return a }

                    function O(e) { null != e && this.set(e) }
                    r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, x = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) c(e, t) && n.push(t); return n }; var P = {};

                    function A(e, t) { var n = e.toLowerCase();
                        P[n] = P[n + "s"] = P[t] = e }

                    function C(e) { return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0 }

                    function R(e) { var t, n, a = {}; for (n in e) c(e, n) && (t = C(n)) && (a[t] = e[n]); return a } var W = {};

                    function F(e, t) { W[e] = t }

                    function I(e, t, n) { var a = "" + Math.abs(e),
                            r = t - a.length,
                            i = e >= 0; return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a } var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        N = {},
                        B = {};

                    function V(e, t, n, a) { var r = a; "string" == typeof a && (r = function() { return this[a]() }), e && (B[e] = r), t && (B[t[0]] = function() { return I(r.apply(this, arguments), t[1], t[2]) }), n && (B[n] = function() { return this.localeData().ordinal(r.apply(this, arguments), e) }) }

                    function U(e, t) { return e.isValid() ? (t = J(t, e.localeData()), N[t] = N[t] || function(e) { var t, n, a, r = e.match(E); for (t = 0, n = r.length; t < n; t++) B[r[t]] ? r[t] = B[r[t]] : r[t] = (a = r[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); return function(t) { var a, i = ""; for (a = 0; a < n; a++) i += H(r[a]) ? r[a].call(t, e) : r[a]; return i } }(t), N[t](e)) : e.localeData().invalidDate() }

                    function J(e, t) { var n = 5;

                        function a(e) { return t.longDateFormat(e) || e } for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, a), z.lastIndex = 0, n -= 1; return e } var G = /\d/,
                        q = /\d\d/,
                        K = /\d{3}/,
                        $ = /\d{4}/,
                        Z = /[+-]?\d{6}/,
                        X = /\d\d?/,
                        Q = /\d\d\d\d?/,
                        ee = /\d\d\d\d\d\d?/,
                        te = /\d{1,3}/,
                        ne = /\d{1,4}/,
                        ae = /[+-]?\d{1,6}/,
                        re = /\d+/,
                        ie = /[+-]?\d+/,
                        oe = /Z|[+-]\d\d:?\d\d/gi,
                        se = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                        ue = {};

                    function le(e, t, n) { ue[e] = H(t) ? t : function(e, a) { return e && n ? n : t } }

                    function ce(e, t) { return c(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) { return t || n || a || r }))) }

                    function he(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var _e = {};

                    function me(e, t) { var n, a = t; for ("string" == typeof e && (e = [e]), d(t) && (a = function(e, n) { n[t] = k(e) }), n = 0; n < e.length; n++) _e[e[n]] = a }

                    function fe(e, t) { me(e, function(e, n, a, r) { a._w = a._w || {}, t(e, a._w, a, r) }) }

                    function pe(e, t, n) { null != t && c(_e, e) && _e[e](t, n._a, n, e) } var ge = 0,
                        ye = 1,
                        Me = 2,
                        ve = 3,
                        be = 4,
                        Le = 5,
                        ke = 6,
                        Ye = 7,
                        we = 8;

                    function De(e) { return xe(e) ? 366 : 365 }

                    function xe(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
                    V("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), V(0, ["YY", 2], 0, function() { return this.year() % 100 }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), F("year", 1), le("Y", ie), le("YY", X, q), le("YYYY", ne, $), le("YYYYY", ae, Z), le("YYYYYY", ae, Z), me(["YYYYY", "YYYYYY"], ge), me("YYYY", function(e, t) { t[ge] = 2 === e.length ? r.parseTwoDigitYear(e) : k(e) }), me("YY", function(e, t) { t[ge] = r.parseTwoDigitYear(e) }), me("Y", function(e, t) { t[ge] = parseInt(e, 10) }), r.parseTwoDigitYear = function(e) { return k(e) + (k(e) > 68 ? 1900 : 2e3) }; var Te, Se = He("FullYear", !0);

                    function He(e, t) { return function(n) { return null != n ? (Oe(this, e, n), r.updateOffset(this, t), this) : je(this, e) } }

                    function je(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

                    function Oe(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

                    function Pe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n, a = (t % (n = 12) + n) % n; return e += (t - a) / 12, 1 === a ? xe(e) ? 29 : 28 : 31 - a % 7 % 2 }
                    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1 }, V("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), V("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), V("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), A("month", "M"), F("month", 8), le("M", X), le("MM", X, q), le("MMM", function(e, t) { return t.monthsShortRegex(e) }), le("MMMM", function(e, t) { return t.monthsRegex(e) }), me(["M", "MM"], function(e, t) { t[ye] = k(e) - 1 }), me(["MMM", "MMMM"], function(e, t, n, a) { var r = n._locale.monthsParse(e, a, n._strict);
                        null != r ? t[ye] = r : m(n).invalidMonth = e }); var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                    function We(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
                            if (/^\d+$/.test(t)) t = k(t);
                            else if (!d(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

                    function Fe(e) { return null != e ? (We(this, e), r.updateOffset(this, !0), this) : je(this, "Month") } var Ie = de,
                        Ee = de;

                    function ze() {
                        function e(e, t) { return t.length - e.length } var t, n, a = [],
                            r = [],
                            i = []; for (t = 0; t < 12; t++) n = _([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, "")); for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = he(a[t]), r[t] = he(r[t]); for (t = 0; t < 24; t++) i[t] = he(i[t]);
                        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

                    function Ne(e) { var t; if (e < 100 && e >= 0) { var n = Array.prototype.slice.call(arguments);
                            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

                    function Be(e, t, n) { var a = 7 + t - n,
                            r = (7 + Ne(e, 0, a).getUTCDay() - t) % 7; return -r + a - 1 }

                    function Ve(e, t, n, a, r) { var i, o, s = (7 + n - a) % 7,
                            d = Be(e, a, r),
                            u = 1 + 7 * (t - 1) + s + d; return u <= 0 ? o = De(i = e - 1) + u : u > De(e) ? (i = e + 1, o = u - De(e)) : (i = e, o = u), { year: i, dayOfYear: o } }

                    function Ue(e, t, n) { var a, r, i = Be(e.year(), t, n),
                            o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1; return o < 1 ? (r = e.year() - 1, a = o + Je(r, t, n)) : o > Je(e.year(), t, n) ? (a = o - Je(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = o), { week: a, year: r } }

                    function Je(e, t, n) { var a = Be(e, t, n),
                            r = Be(e + 1, t, n); return (De(e) - a + r) / 7 }

                    function Ge(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
                    V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), F("week", 5), F("isoWeek", 5), le("w", X), le("ww", X, q), le("W", X), le("WW", X, q), fe(["w", "ww", "W", "WW"], function(e, t, n, a) { t[a.substr(0, 1)] = k(e) }), V("d", 0, "do", "day"), V("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), V("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), V("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), le("d", X), le("e", X), le("E", X), le("dd", function(e, t) { return t.weekdaysMinRegex(e) }), le("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), le("dddd", function(e, t) { return t.weekdaysRegex(e) }), fe(["dd", "ddd", "dddd"], function(e, t, n, a) { var r = n._locale.weekdaysParse(e, a, n._strict);
                        null != r ? t.d = r : m(n).invalidWeekday = e }), fe(["d", "e", "E"], function(e, t, n, a) { t[a] = k(e) }); var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        Ke = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        Ze = de,
                        Xe = de,
                        Qe = de;

                    function et() {
                        function e(e, t) { return t.length - e.length } var t, n, a, r, i, o = [],
                            s = [],
                            d = [],
                            u = []; for (t = 0; t < 7; t++) n = _([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), o.push(a), s.push(r), d.push(i), u.push(a), u.push(r), u.push(i); for (o.sort(e), s.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = he(s[t]), d[t] = he(d[t]), u[t] = he(u[t]);
                        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i") }

                    function tt() { return this.hours() % 12 || 12 }

                    function nt(e, t) { V(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

                    function at(e, t) { return t._meridiemParse }
                    V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, tt), V("k", ["kk", 2], 0, function() { return this.hours() || 24 }), V("hmm", 0, 0, function() { return "" + tt.apply(this) + I(this.minutes(), 2) }), V("hmmss", 0, 0, function() { return "" + tt.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2) }), V("Hmm", 0, 0, function() { return "" + this.hours() + I(this.minutes(), 2) }), V("Hmmss", 0, 0, function() { return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2) }), nt("a", !0), nt("A", !1), A("hour", "h"), F("hour", 13), le("a", at), le("A", at), le("H", X), le("h", X), le("k", X), le("HH", X, q), le("hh", X, q), le("kk", X, q), le("hmm", Q), le("hmmss", ee), le("Hmm", Q), le("Hmmss", ee), me(["H", "HH"], ve), me(["k", "kk"], function(e, t, n) { var a = k(e);
                        t[ve] = 24 === a ? 0 : a }), me(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), me(["h", "hh"], function(e, t, n) { t[ve] = k(e), m(n).bigHour = !0 }), me("hmm", function(e, t, n) { var a = e.length - 2;
                        t[ve] = k(e.substr(0, a)), t[be] = k(e.substr(a)), m(n).bigHour = !0 }), me("hmmss", function(e, t, n) { var a = e.length - 4,
                            r = e.length - 2;
                        t[ve] = k(e.substr(0, a)), t[be] = k(e.substr(a, 2)), t[Le] = k(e.substr(r)), m(n).bigHour = !0 }), me("Hmm", function(e, t, n) { var a = e.length - 2;
                        t[ve] = k(e.substr(0, a)), t[be] = k(e.substr(a)) }), me("Hmmss", function(e, t, n) { var a = e.length - 4,
                            r = e.length - 2;
                        t[ve] = k(e.substr(0, a)), t[be] = k(e.substr(a, 2)), t[Le] = k(e.substr(r)) }); var rt, it = He("Hours", !0),
                        ot = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ce, monthsShort: Re, week: { dow: 0, doy: 6 }, weekdays: qe, weekdaysMin: $e, weekdaysShort: Ke, meridiemParse: /[ap]\.?m?\.?/i },
                        st = {},
                        dt = {};

                    function ut(e) { return e ? e.toLowerCase().replace("_", "-") : e }

                    function lt(t) { var a = null; if (!st[t] && void 0 !== e && e && e.exports) try { a = rt._abbr, n("RnhZ")("./" + t), ct(a) } catch (r) {}
                        return st[t] }

                    function ct(e, t) { var n; return e && ((n = s(t) ? _t(e) : ht(e, t)) ? rt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rt._abbr }

                    function ht(e, t) { if (null !== t) { var n, a = ot; if (t.abbr = e, null != st[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = st[e]._config;
                            else if (null != t.parentLocale)
                                if (null != st[t.parentLocale]) a = st[t.parentLocale]._config;
                                else { if (null == (n = lt(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []), dt[t.parentLocale].push({ name: e, config: t }), null;
                                    a = n._config }
                            return st[e] = new O(j(a, t)), dt[e] && dt[e].forEach(function(e) { ht(e.name, e.config) }), ct(e), st[e] } return delete st[e], null }

                    function _t(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt; if (!i(e)) { if (t = lt(e)) return t;
                            e = [e] } return function(e) { for (var t, n, a, r, i = 0; i < e.length;) { for (r = ut(e[i]).split("-"), t = r.length, n = (n = ut(e[i + 1])) ? n.split("-") : null; t > 0;) { if (a = lt(r.slice(0, t).join("-"))) return a; if (n && n.length >= t && Y(r, n, !0) >= t - 1) break;
                                    t-- }
                                i++ } return rt }(e) }

                    function mt(e) { var t, n = e._a; return n && -2 === m(e).overflow && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[Me] < 1 || n[Me] > Pe(n[ge], n[ye]) ? Me : n[ve] < 0 || n[ve] > 24 || 24 === n[ve] && (0 !== n[be] || 0 !== n[Le] || 0 !== n[ke]) ? ve : n[be] < 0 || n[be] > 59 ? be : n[Le] < 0 || n[Le] > 59 ? Le : n[ke] < 0 || n[ke] > 999 ? ke : -1, m(e)._overflowDayOfYear && (t < ge || t > Me) && (t = Me), m(e)._overflowWeeks && -1 === t && (t = Ye), m(e)._overflowWeekday && -1 === t && (t = we), m(e).overflow = t), e }

                    function ft(e, t, n) { return null != e ? e : null != t ? t : n }

                    function pt(e) { var t, n, a, i, o, s = []; if (!e._d) { for (a = function(e) { var t = new Date(r.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[Me] && null == e._a[ye] && function(e) { var t, n, a, r, i, o, s, d; if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, o = 4, n = ft(t.GG, e._a[ge], Ue(jt(), 1, 4).year), a = ft(t.W, 1), ((r = ft(t.E, 1)) < 1 || r > 7) && (d = !0);
                                    else { i = e._locale._week.dow, o = e._locale._week.doy; var u = Ue(jt(), i, o);
                                        n = ft(t.gg, e._a[ge], u.year), a = ft(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i }
                                    a < 1 || a > Je(n, i, o) ? m(e)._overflowWeeks = !0 : null != d ? m(e)._overflowWeekday = !0 : (s = Ve(n, a, r, i, o), e._a[ge] = s.year, e._dayOfYear = s.dayOfYear) }(e), null != e._dayOfYear && (o = ft(e._a[ge], a[ge]), (e._dayOfYear > De(o) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0), n = Ne(o, 0, e._dayOfYear), e._a[ye] = n.getUTCMonth(), e._a[Me] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = a[t]; for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[ve] && 0 === e._a[be] && 0 === e._a[Le] && 0 === e._a[ke] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? Ne : function(e, t, n, a, r, i, o) { var s; return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, a, r, i, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, a, r, i, o), s }).apply(null, s), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (m(e).weekdayMismatch = !0) } } var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        Mt = /Z|[+-]\d\d(?::?\d\d)?/,
                        vt = [
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
                        bt = [
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

                    function kt(e) { var t, n, a, r, i, o, s = e._i,
                            d = gt.exec(s) || yt.exec(s); if (d) { for (m(e).iso = !0, t = 0, n = vt.length; t < n; t++)
                                if (vt[t][1].exec(d[1])) { r = vt[t][0], a = !1 !== vt[t][2]; break }
                            if (null == r) return void(e._isValid = !1); if (d[3]) { for (t = 0, n = bt.length; t < n; t++)
                                    if (bt[t][1].exec(d[3])) { i = (d[2] || " ") + bt[t][0]; break }
                                if (null == i) return void(e._isValid = !1) } if (!a && null != i) return void(e._isValid = !1); if (d[4]) { if (!Mt.exec(d[4])) return void(e._isValid = !1);
                                o = "Z" }
                            e._f = r + (i || "") + (o || ""), Tt(e) } else e._isValid = !1 } var Yt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

                    function wt(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t } var Dt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                    function xt(e) { var t, n, a, r, i, o, s, d = Yt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (d) { var u = (t = d[4], n = d[3], a = d[2], r = d[5], i = d[6], o = d[7], s = [wt(t), Re.indexOf(n), parseInt(a, 10), parseInt(r, 10), parseInt(i, 10)], o && s.push(parseInt(o, 10)), s); if (! function(e, t, n) { if (e) { var a = Ke.indexOf(e),
                                            r = new Date(t[0], t[1], t[2]).getDay(); if (a !== r) return m(n).weekdayMismatch = !0, n._isValid = !1, !1 } return !0 }(d[1], u, e)) return;
                            e._a = u, e._tzm = function(e, t, n) { if (e) return Dt[e]; if (t) return 0; var a = parseInt(n, 10),
                                    r = a % 100,
                                    i = (a - r) / 100; return 60 * i + r }(d[8], d[9], d[10]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0 } else e._isValid = !1 }

                    function Tt(e) { if (e._f !== r.ISO_8601)
                            if (e._f !== r.RFC_2822) { e._a = [], m(e).empty = !0; var t, n, a, i, o, s = "" + e._i,
                                    d = s.length,
                                    u = 0; for (a = J(e._f, e._locale).match(E) || [], t = 0; t < a.length; t++) i = a[t], (n = (s.match(ce(i, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && m(e).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), B[i] ? (n ? m(e).empty = !1 : m(e).unusedTokens.push(i), pe(i, n, e)) : e._strict && !n && m(e).unusedTokens.push(i);
                                m(e).charsLeftOver = d - u, s.length > 0 && m(e).unusedInput.push(s), e._a[ve] <= 12 && !0 === m(e).bigHour && e._a[ve] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[ve] = (l = e._locale, c = e._a[ve], null == (h = e._meridiem) ? c : null != l.meridiemHour ? l.meridiemHour(c, h) : null != l.isPM ? ((_ = l.isPM(h)) && c < 12 && (c += 12), _ || 12 !== c || (c = 0), c) : c), pt(e), mt(e) } else xt(e);
                        else kt(e); var l, c, h, _ }

                    function St(e) { var t = e._i,
                            n = e._f; return e._locale = e._locale || _t(e._l), null === t || void 0 === n && "" === t ? p({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new v(mt(t)) : (u(t) ? e._d = t : i(n) ? function(e) { var t, n, a, r, i; if (0 === e._f.length) return m(e).invalidFormat = !0, void(e._d = new Date(NaN)); for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Tt(t), f(t) && (i += m(t).charsLeftOver, i += 10 * m(t).unusedTokens.length, m(t).score = i, (null == a || i < a) && (a = i, n = t));
                            h(e, n || t) }(e) : n ? Tt(e) : function(e) { var t = e._i;
                            s(t) ? e._d = new Date(r.now()) : u(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) { var t = Lt.exec(e._i);
                                null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, xt(e), !1 === e._isValid && (delete e._isValid, r.createFromInputFallback(e)))) : e._d = new Date(+t[1]) }(e) : i(t) ? (e._a = l(t.slice(0), function(e) { return parseInt(e, 10) }), pt(e)) : o(t) ? function(e) { if (!e._d) { var t = R(e._i);
                                    e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), pt(e) } }(e) : d(t) ? e._d = new Date(t) : r.createFromInputFallback(e) }(e), f(e) || (e._d = null), e)) }

                    function Ht(e, t, n, a, r) { var s, d = {}; return !0 !== n && !1 !== n || (a = n, n = void 0), (o(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0 }(e) || i(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = r, d._l = n, d._i = e, d._f = t, d._strict = a, (s = new v(mt(St(d))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

                    function jt(e, t, n, a) { return Ht(e, t, n, a, !1) }
                    r.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), r.ISO_8601 = function() {}, r.RFC_2822 = function() {}; var Ot = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = jt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
                        Pt = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = jt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : p() });

                    function At(e, t) { var n, a; if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return jt(); for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]); return n } var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                    function Rt(e) { var t = R(e),
                            n = t.year || 0,
                            a = t.quarter || 0,
                            r = t.month || 0,
                            i = t.week || t.isoWeek || 0,
                            o = t.day || 0,
                            s = t.hour || 0,
                            d = t.minute || 0,
                            u = t.second || 0,
                            l = t.millisecond || 0;
                        this._isValid = function(e) { for (var t in e)
                                if (-1 === Te.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
                            for (var n = !1, a = 0; a < Ct.length; ++a)
                                if (e[Ct[a]]) { if (n) return !1;
                                    parseFloat(e[Ct[a]]) !== k(e[Ct[a]]) && (n = !0) }
                            return !0 }(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = _t(), this._bubble() }

                    function Wt(e) { return e instanceof Rt }

                    function Ft(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

                    function It(e, t) { V(e, 0, 0, function() { var e = this.utcOffset(),
                                n = "+"; return e < 0 && (e = -e, n = "-"), n + I(~~(e / 60), 2) + t + I(~~e % 60, 2) }) }
                    It("Z", ":"), It("ZZ", ""), le("Z", se), le("ZZ", se), me(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = zt(se, e) }); var Et = /([\+\-]|\d\d)/gi;

                    function zt(e, t) { var n = (t || "").match(e); if (null === n) return null; var a = n[n.length - 1] || [],
                            r = (a + "").match(Et) || ["-", 0, 0],
                            i = 60 * r[1] + k(r[2]); return 0 === i ? 0 : "+" === r[0] ? i : -i }

                    function Nt(e, t) { var n, a; return t._isUTC ? (n = t.clone(), a = (b(e) || u(e) ? e.valueOf() : jt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), r.updateOffset(n, !1), n) : jt(e).local() }

                    function Bt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

                    function Vt() { return !!this.isValid() && this._isUTC && 0 === this._offset }
                    r.updateOffset = function() {}; var Ut = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        Jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                    function Gt(e, t) { var n, a, r, i, o, s, u = e,
                            l = null; return Wt(e) ? u = { ms: e._milliseconds, d: e._days, M: e._months } : d(e) ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (l = Ut.exec(e)) ? (n = "-" === l[1] ? -1 : 1, u = { y: 0, d: k(l[Me]) * n, h: k(l[ve]) * n, m: k(l[be]) * n, s: k(l[Le]) * n, ms: k(Ft(1e3 * l[ke])) * n }) : (l = Jt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, u = { y: qt(l[2], n), M: qt(l[3], n), w: qt(l[4], n), d: qt(l[5], n), h: qt(l[6], n), m: qt(l[7], n), s: qt(l[8], n) }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (i = jt(u.from), o = jt(u.to), r = i.isValid() && o.isValid() ? (o = Nt(o, i), i.isBefore(o) ? s = Kt(i, o) : ((s = Kt(o, i)).milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 }, (u = {}).ms = r.milliseconds, u.M = r.months), a = new Rt(u), Wt(e) && c(e, "_locale") && (a._locale = e._locale), a }

                    function qt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

                    function Kt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

                    function $t(e, t) { return function(n, a) { var r; return null === a || isNaN(+a) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), Zt(this, Gt(n = "string" == typeof n ? +n : n, a), e), this } }

                    function Zt(e, t, n, a) { var i = t._milliseconds,
                            o = Ft(t._days),
                            s = Ft(t._months);
                        e.isValid() && (a = null == a || a, s && We(e, je(e, "Month") + s * n), o && Oe(e, "Date", je(e, "Date") + o * n), i && e._d.setTime(e._d.valueOf() + i * n), a && r.updateOffset(e, o || s)) }
                    Gt.fn = Rt.prototype, Gt.invalid = function() { return Gt(NaN) }; var Xt = $t(1, "add"),
                        Qt = $t(-1, "subtract");

                    function en(e, t) { var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            i = e.clone().add(r, "months"); return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0 }

                    function tn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = _t(e)) && (this._locale = t), this) }
                    r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var nn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

                    function an() { return this._locale } var rn = 1e3,
                        on = 60 * rn,
                        sn = 60 * on,
                        dn = 3506328 * sn;

                    function un(e, t) { return (e % t + t) % t }

                    function ln(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - dn : new Date(e, t, n).valueOf() }

                    function cn(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - dn : Date.UTC(e, t, n) }

                    function hn(e, t) { V(0, [e, e.length], 0, t) }

                    function _n(e, t, n, a, r) { var i; return null == e ? Ue(this, a, r).year : (i = Je(e, a, r), t > i && (t = i), (function(e, t, n, a, r) { var i = Ve(e, t, n, a, r),
                                o = Ne(i.year, 0, i.dayOfYear); return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this }).call(this, e, t, n, a, r)) }
                    V(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), V(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), hn("gggg", "weekYear"), hn("ggggg", "weekYear"), hn("GGGG", "isoWeekYear"), hn("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", X, q), le("gg", X, q), le("GGGG", ne, $), le("gggg", ne, $), le("GGGGG", ae, Z), le("ggggg", ae, Z), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) { t[a.substr(0, 2)] = k(e) }), fe(["gg", "GG"], function(e, t, n, a) { t[a] = r.parseTwoDigitYear(e) }), V("Q", 0, "Qo", "quarter"), A("quarter", "Q"), F("quarter", 7), le("Q", G), me("Q", function(e, t) { t[ye] = 3 * (k(e) - 1) }), V("D", ["DD", 2], "Do", "date"), A("date", "D"), F("date", 9), le("D", X), le("DD", X, q), le("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), me(["D", "DD"], Me), me("Do", function(e, t) { t[Me] = k(e.match(X)[0]) }); var mn = He("Date", !0);
                    V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), F("dayOfYear", 4), le("DDD", te), le("DDDD", K), me(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = k(e) }), V("m", ["mm", 2], 0, "minute"), A("minute", "m"), F("minute", 14), le("m", X), le("mm", X, q), me(["m", "mm"], be); var fn = He("Minutes", !1);
                    V("s", ["ss", 2], 0, "second"), A("second", "s"), F("second", 15), le("s", X), le("ss", X, q), me(["s", "ss"], Le); var pn, gn = He("Seconds", !1); for (V("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), V(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), V(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), V(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), V(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), V(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), V(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), A("millisecond", "ms"), F("millisecond", 16), le("S", te, G), le("SS", te, q), le("SSS", te, K), pn = "SSSS"; pn.length <= 9; pn += "S") le(pn, re);

                    function yn(e, t) { t[ke] = k(1e3 * ("0." + e)) } for (pn = "S"; pn.length <= 9; pn += "S") me(pn, yn); var Mn = He("Milliseconds", !1);
                    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName"); var vn = v.prototype;

                    function bn(e) { return e }
                    vn.add = Xt, vn.calendar = function(e, t) { var n = e || jt(),
                            a = Nt(n, this).startOf("day"),
                            i = r.calendarFormat(this, a) || "sameElse",
                            o = t && (H(t[i]) ? t[i].call(this, n) : t[i]); return this.format(o || this.localeData().calendar(i, this, jt(n))) }, vn.clone = function() { return new v(this) }, vn.diff = function(e, t, n) { var a, r, i; if (!this.isValid()) return NaN; if (!(a = Nt(e, this)).isValid()) return NaN; switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = C(t)) {
                            case "year":
                                i = en(this, a) / 12; break;
                            case "month":
                                i = en(this, a); break;
                            case "quarter":
                                i = en(this, a) / 3; break;
                            case "second":
                                i = (this - a) / 1e3; break;
                            case "minute":
                                i = (this - a) / 6e4; break;
                            case "hour":
                                i = (this - a) / 36e5; break;
                            case "day":
                                i = (this - a - r) / 864e5; break;
                            case "week":
                                i = (this - a - r) / 6048e5; break;
                            default:
                                i = this - a } return n ? i : L(i) }, vn.endOf = function(e) { var t; if (void 0 === (e = C(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? cn : ln; switch (e) {
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
                                t = this._d.valueOf(), t += sn - un(t + (this._isUTC ? 0 : this.utcOffset() * on), sn) - 1; break;
                            case "minute":
                                t = this._d.valueOf(), t += on - un(t, on) - 1; break;
                            case "second":
                                t = this._d.valueOf(), t += rn - un(t, rn) - 1 } return this._d.setTime(t), r.updateOffset(this, !0), this }, vn.format = function(e) { e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat); var t = U(this, e); return this.localeData().postformat(t) }, vn.from = function(e, t) { return this.isValid() && (b(e) && e.isValid() || jt(e).isValid()) ? Gt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, vn.fromNow = function(e) { return this.from(jt(), e) }, vn.to = function(e, t) { return this.isValid() && (b(e) && e.isValid() || jt(e).isValid()) ? Gt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, vn.toNow = function(e) { return this.to(jt(), e) }, vn.get = function(e) { return H(this[e = C(e)]) ? this[e]() : this }, vn.invalidAt = function() { return m(this).overflow }, vn.isAfter = function(e, t) { var n = b(e) ? e : jt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = C(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, vn.isBefore = function(e, t) { var n = b(e) ? e : jt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = C(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, vn.isBetween = function(e, t, n, a) { var r = b(e) ? e : jt(e),
                            i = b(t) ? t : jt(t); return !!(this.isValid() && r.isValid() && i.isValid()) && (("(" === (a = a || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === a[1] ? this.isBefore(i, n) : !this.isAfter(i, n))) }, vn.isSame = function(e, t) { var n, a = b(e) ? e : jt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = C(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, vn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, vn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, vn.isValid = function() { return f(this) }, vn.lang = nn, vn.locale = tn, vn.localeData = an, vn.max = Pt, vn.min = Ot, vn.parsingFlags = function() { return h({}, m(this)) }, vn.set = function(e, t) { if ("object" == typeof e)
                            for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: W[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = R(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
                        else if (H(this[e = C(e)])) return this[e](t); return this }, vn.startOf = function(e) { var t; if (void 0 === (e = C(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? cn : ln; switch (e) {
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
                                t = this._d.valueOf(), t -= un(t + (this._isUTC ? 0 : this.utcOffset() * on), sn); break;
                            case "minute":
                                t = this._d.valueOf(), t -= un(t, on); break;
                            case "second":
                                t = this._d.valueOf(), t -= un(t, rn) } return this._d.setTime(t), r.updateOffset(this, !0), this }, vn.subtract = Qt, vn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, vn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, vn.toDate = function() { return new Date(this.valueOf()) }, vn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
                            n = t ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, vn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
                            t = "";
                        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
                            a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                            r = t + '[")]'; return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r) }, vn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, vn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, vn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, vn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, vn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, vn.year = Se, vn.isLeapYear = function() { return xe(this.year()) }, vn.weekYear = function(e) { return _n.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, vn.isoWeekYear = function(e) { return _n.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, vn.quarter = vn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, vn.month = Fe, vn.daysInMonth = function() { return Pe(this.year(), this.month()) }, vn.week = vn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, vn.isoWeek = vn.isoWeeks = function(e) { var t = Ue(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, vn.weeksInYear = function() { var e = this.localeData()._week; return Je(this.year(), e.dow, e.doy) }, vn.isoWeeksInYear = function() { return Je(this.year(), 1, 4) }, vn.date = mn, vn.day = vn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, vn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, vn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, vn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, vn.hour = vn.hours = it, vn.minute = vn.minutes = fn, vn.second = vn.seconds = gn, vn.millisecond = vn.milliseconds = Mn, vn.utcOffset = function(e, t, n) { var a, i = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = zt(se, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (a = Bt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), i !== e && (!t || this._changeInProgress ? Zt(this, Gt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? i : Bt(this) }, vn.utc = function(e) { return this.utcOffset(0, e) }, vn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this }, vn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                        else if ("string" == typeof this._i) { var e = zt(oe, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, vn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? jt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, vn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, vn.isLocal = function() { return !!this.isValid() && !this._isUTC }, vn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, vn.isUtc = Vt, vn.isUTC = Vt, vn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, vn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, vn.dates = D("dates accessor is deprecated. Use date instead.", mn), vn.months = D("months accessor is deprecated. Use month instead", Fe), vn.years = D("years accessor is deprecated. Use year instead", Se), vn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), vn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!s(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (y(e, this), (e = St(e))._a) { var t = e._isUTC ? _(e._a) : jt(e._a);
                            this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted }); var Ln = O.prototype;

                    function kn(e, t, n, a) { var r = _t(),
                            i = _().set(a, t); return r[n](i, e) }

                    function Yn(e, t, n) { if (d(e) && (t = e, e = void 0), e = e || "", null != t) return kn(e, t, n, "month"); var a, r = []; for (a = 0; a < 12; a++) r[a] = kn(e, a, n, "month"); return r }

                    function wn(e, t, n, a) { "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || ""); var r, i = _t(),
                            o = e ? i._week.dow : 0; if (null != n) return kn(t, (n + o) % 7, a, "day"); var s = []; for (r = 0; r < 7; r++) s[r] = kn(t, (r + o) % 7, a, "day"); return s }
                    Ln.calendar = function(e, t, n) { var a = this._calendar[e] || this._calendar.sameElse; return H(a) ? a.call(t, n) : a }, Ln.longDateFormat = function(e) { var t = this._longDateFormat[e],
                            n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, Ln.invalidDate = function() { return this._invalidDate }, Ln.ordinal = function(e) { return this._ordinal.replace("%d", e) }, Ln.preparse = bn, Ln.postformat = bn, Ln.relativeTime = function(e, t, n, a) { var r = this._relativeTime[n]; return H(r) ? r(e, t, n, a) : r.replace(/%d/i, e) }, Ln.pastFuture = function(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return H(n) ? n(t) : n.replace(/%s/i, t) }, Ln.set = function(e) { var t, n; for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, Ln.months = function(e, t) { return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone }, Ln.monthsShort = function(e, t) { return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ae.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, Ln.monthsParse = function(e, t, n) { var a, r, i; if (this._monthsParseExact) return (function(e, t, n) { var a, r, i, o = e.toLocaleLowerCase(); if (!this._monthsParse)
                                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = _([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, o)) ? r : null : "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, o)) ? r : -1 !== (r = Te.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, o)) ? r : -1 !== (r = Te.call(this._shortMonthsParse, o)) ? r : null }).call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) { if (r = _([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a; if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a; if (!n && this._monthsParse[a].test(e)) return a } }, Ln.monthsRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ee), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, Ln.monthsShortRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, Ln.week = function(e) { return Ue(e, this._week.dow, this._week.doy).week }, Ln.firstDayOfYear = function() { return this._week.doy }, Ln.firstDayOfWeek = function() { return this._week.dow }, Ln.weekdays = function(e, t) { var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Ge(n, this._week.dow) : e ? n[e.day()] : n }, Ln.weekdaysMin = function(e) { return !0 === e ? Ge(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, Ln.weekdaysShort = function(e) { return !0 === e ? Ge(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, Ln.weekdaysParse = function(e, t, n) { var a, r, i; if (this._weekdaysParseExact) return (function(e, t, n) { var a, r, i, o = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = _([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, o)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Te.call(this._weekdaysParse, o)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = Te.call(this._weekdaysParse, o)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, o)) ? r : null }).call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) { if (r = _([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a; if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a; if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a; if (!n && this._weekdaysParse[a].test(e)) return a } }, Ln.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, Ln.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, Ln.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, Ln.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, Ln.meridiem = function(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, ct("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10,
                                n = 1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }), r.lang = D("moment.lang is deprecated. Use moment.locale instead.", ct), r.langData = D("moment.langData is deprecated. Use moment.localeData instead.", _t); var Dn = Math.abs;

                    function xn(e, t, n, a) { var r = Gt(t, n); return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble() }

                    function Tn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

                    function Sn(e) { return 4800 * e / 146097 }

                    function Hn(e) { return 146097 * e / 4800 }

                    function jn(e) { return function() { return this.as(e) } } var On = jn("ms"),
                        Pn = jn("s"),
                        An = jn("m"),
                        Cn = jn("h"),
                        Rn = jn("d"),
                        Wn = jn("w"),
                        Fn = jn("M"),
                        In = jn("Q"),
                        En = jn("y");

                    function zn(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var Nn = zn("milliseconds"),
                        Bn = zn("seconds"),
                        Vn = zn("minutes"),
                        Un = zn("hours"),
                        Jn = zn("days"),
                        Gn = zn("months"),
                        qn = zn("years"),
                        Kn = Math.round,
                        $n = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                        Zn = Math.abs;

                    function Xn(e) { return (e > 0) - (e < 0) || +e }

                    function Qn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = Zn(this._milliseconds) / 1e3,
                            a = Zn(this._days),
                            r = Zn(this._months);
                        e = L(n / 60), t = L(e / 60), n %= 60, e %= 60; var i = L(r / 12),
                            o = r %= 12,
                            s = a,
                            d = t,
                            u = e,
                            l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                            c = this.asSeconds(); if (!c) return "P0D"; var h = c < 0 ? "-" : "",
                            _ = Xn(this._months) !== Xn(c) ? "-" : "",
                            m = Xn(this._days) !== Xn(c) ? "-" : "",
                            f = Xn(this._milliseconds) !== Xn(c) ? "-" : ""; return h + "P" + (i ? _ + i + "Y" : "") + (o ? _ + o + "M" : "") + (s ? m + s + "D" : "") + (d || u || l ? "T" : "") + (d ? f + d + "H" : "") + (u ? f + u + "M" : "") + (l ? f + l + "S" : "") } var ea = Rt.prototype; return ea.isValid = function() { return this._isValid }, ea.abs = function() { var e = this._data; return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this }, ea.add = function(e, t) { return xn(this, e, t, 1) }, ea.subtract = function(e, t) { return xn(this, e, t, -1) }, ea.as = function(e) { if (!this.isValid()) return NaN; var t, n, a = this._milliseconds; if ("month" === (e = C(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + Sn(t), e) {
                            case "month":
                                return n;
                            case "quarter":
                                return n / 3;
                            case "year":
                                return n / 12 } else switch (t = this._days + Math.round(Hn(this._months)), e) {
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
                                throw new Error("Unknown unit " + e) } }, ea.asMilliseconds = On, ea.asSeconds = Pn, ea.asMinutes = An, ea.asHours = Cn, ea.asDays = Rn, ea.asWeeks = Wn, ea.asMonths = Fn, ea.asQuarters = In, ea.asYears = En, ea.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN }, ea._bubble = function() { var e, t, n, a, r, i = this._milliseconds,
                            o = this._days,
                            s = this._months,
                            d = this._data; return i >= 0 && o >= 0 && s >= 0 || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * Tn(Hn(s) + o), o = 0, s = 0), d.milliseconds = i % 1e3, e = L(i / 1e3), d.seconds = e % 60, t = L(e / 60), d.minutes = t % 60, n = L(t / 60), d.hours = n % 24, o += L(n / 24), r = L(Sn(o)), s += r, o -= Tn(Hn(r)), a = L(s / 12), s %= 12, d.days = o, d.months = s, d.years = a, this }, ea.clone = function() { return Gt(this) }, ea.get = function(e) { return e = C(e), this.isValid() ? this[e + "s"]() : NaN }, ea.milliseconds = Nn, ea.seconds = Bn, ea.minutes = Vn, ea.hours = Un, ea.days = Jn, ea.weeks = function() { return L(this.days() / 7) }, ea.months = Gn, ea.years = qn, ea.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t = this.localeData(),
                            n = function(e, t, n) { var a = Gt(e).abs(),
                                    r = Kn(a.as("s")),
                                    i = Kn(a.as("m")),
                                    o = Kn(a.as("h")),
                                    s = Kn(a.as("d")),
                                    d = Kn(a.as("M")),
                                    u = Kn(a.as("y")),
                                    l = r <= $n.ss && ["s", r] || r < $n.s && ["ss", r] || i <= 1 && ["m"] || i < $n.m && ["mm", i] || o <= 1 && ["h"] || o < $n.h && ["hh", o] || s <= 1 && ["d"] || s < $n.d && ["dd", s] || d <= 1 && ["M"] || d < $n.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u]; return l[2] = t, l[3] = +e > 0, l[4] = n, (function(e, t, n, a, r) { return r.relativeTime(t || 1, !!n, e, a) }).apply(null, l) }(this, !e, t); return e && (n = t.pastFuture(+this, n)), t.postformat(n) }, ea.toISOString = Qn, ea.toString = Qn, ea.toJSON = Qn, ea.locale = tn, ea.localeData = an, ea.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn), ea.lang = nn, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), me("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), me("x", function(e, t, n) { n._d = new Date(k(e)) }), r.version = "2.24.0", t = jt, r.fn = vn, r.min = function() { return At("isBefore", [].slice.call(arguments, 0)) }, r.max = function() { return At("isAfter", [].slice.call(arguments, 0)) }, r.now = function() { return Date.now ? Date.now() : +new Date }, r.utc = _, r.unix = function(e) { return jt(1e3 * e) }, r.months = function(e, t) { return Yn(e, t, "months") }, r.isDate = u, r.locale = ct, r.invalid = p, r.duration = Gt, r.isMoment = b, r.weekdays = function(e, t, n) { return wn(e, t, n, "weekdays") }, r.parseZone = function() { return jt.apply(null, arguments).parseZone() }, r.localeData = _t, r.isDuration = Wt, r.monthsShort = function(e, t) { return Yn(e, t, "monthsShort") }, r.weekdaysMin = function(e, t, n) { return wn(e, t, n, "weekdaysMin") }, r.defineLocale = ht, r.updateLocale = function(e, t) { if (null != t) { var n, a, r = ot;
                            null != (a = lt(e)) && (r = a._config), t = j(r, t), (n = new O(t)).parentLocale = st[e], st[e] = n, ct(e) } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]); return st[e] }, r.locales = function() { return x(st) }, r.weekdaysShort = function(e, t, n) { return wn(e, t, n, "weekdaysShort") }, r.normalizeUnits = C, r.relativeTimeRounding = function(e) { return void 0 === e ? Kn : "function" == typeof e && (Kn = e, !0) }, r.relativeTimeThreshold = function(e, t) { return void 0 !== $n[e] && (void 0 === t ? $n[e] : ($n[e] = t, "s" === e && ($n.ss = t - 1), !0)) }, r.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, r.prototype = vn, r.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, r }() }).call(this, n("YuTi")(e)) }, weJR: function(e, t) { e.exports = '<div class="row animated fadeIn">\n    <div class="col-lg-7">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">Perfil del usuario</h4>\n                <h6 class="card-subtitle">{{usuario.nombre}}</h6>\n                <form ngNativeValidate #f="ngForm" (ngSubmit)="guardar( f.value )" class="form p-t-20">\n                    <div class="form-group">\n                        <label for="exampleInputuname">Nombre de usuario</label>\n                        <div class="input-group">\n                            <div class="input-group-addon"><i class="ti-user"></i></div>\n                            <input [ngModel]="usuario.nombre" name="nombre" type="text" class="form-control" placeholder="Nombre de usuario" required>\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <label for="exampleInputEmail1">Correo de usuario</label>\n                        <div class="input-group">\n                            <div class="input-group-addon"><i class="ti-email"></i></div>\n                            <input [ngModel]="usuario.email" [disabled]="usuario.google" name="email" type="email" class="form-control" placeholder="Correo del usuario" required>\n                        </div>\n                    </div>\n\n                    <button type="submit" class=" btn btn-success waves-effect waves-light m-r-10 ">\n                      <i class="fa fa-save "></i>\n                      Guardar\n                    </button>\n\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-lg-5">\n        <div class="card">\n            <div class="card-body" align="center">\n                <h4 class="card-title ">Fotografia del usuario</h4>\n                <h6 class="card-subtitle ">{{usuario.nombre}}</h6>\n\n                <img *ngIf="!imagenTemp" [src]="usuario.img | imagen" class="w150">\n                <img *ngIf="imagenTemp" [src]="imagenTemp" class="w150">\n                <input (change)="seleccionImage( $event.target.files[0] )" type="file">\n\n                <br><br>\n\n                <button (click)="cambiarImagen()" [disabled]="!imagenSubir" type="button" class="btn btn-block btn-success waves-effect waves-light m-r-10 ">\n                    <i class="fa fa-save "></i>\n                    Actualizar foto\n                </button>\n\n            </div>\n        </div>\n    </div>\n\n</div>' }, x6pH: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("he", { months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"), monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"), weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"), weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"), weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [\u05d1]MMMM YYYY", LLL: "D [\u05d1]MMMM YYYY HH:mm", LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT", nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT", nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT", lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT", lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT", sameElse: "L" }, relativeTime: { future: "\u05d1\u05e2\u05d5\u05d3 %s", past: "\u05dc\u05e4\u05e0\u05d9 %s", s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea", ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea", m: "\u05d3\u05e7\u05d4", mm: "%d \u05d3\u05e7\u05d5\u05ea", h: "\u05e9\u05e2\u05d4", hh: function(e) { return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea" }, d: "\u05d9\u05d5\u05dd", dd: function(e) { return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd" }, M: "\u05d7\u05d5\u05d3\u05e9", MM: function(e) { return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd" }, y: "\u05e9\u05e0\u05d4", yy: function(e) { return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd" } }, meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i, isPM: function(e) { return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e) }, meridiem: function(e, t, n) { return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? n ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? n ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1" } }) }(n("wd/R")) }, yPMs: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"), weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"), weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, n) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot n\xeb] LT", nextDay: "[Nes\xebr n\xeb] LT", nextWeek: "dddd [n\xeb] LT", lastDay: "[Dje n\xeb] LT", lastWeek: "dddd [e kaluar n\xeb] LT", sameElse: "L" }, relativeTime: { future: "n\xeb %s", past: "%s m\xeb par\xeb", s: "disa sekonda", ss: "%d sekonda", m: "nj\xeb minut\xeb", mm: "%d minuta", h: "nj\xeb or\xeb", hh: "%d or\xeb", d: "nj\xeb dit\xeb", dd: "%d dit\xeb", M: "nj\xeb muaj", MM: "%d muaj", y: "nj\xeb vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, z1FC: function(e, t, n) {! function(e) { "use strict";

                function t(e, t, n, a) { var r = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n m\xedut", "'iens m\xedut"], mm: [e + " m\xeduts", e + " m\xeduts"], h: ["'n \xfeora", "'iensa \xfeora"], hh: [e + " \xfeoras", e + " \xfeoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return a ? r[n][0] : t ? r[n][0] : r[n][1] }
                e.defineLocale("tzl", { months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"), weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"), weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi \xe0] LT", nextDay: "[dem\xe0 \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[ieiri \xe0] LT", lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, z3Vd: function(e, t, n) {! function(e) { "use strict"; var t = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function n(e, n, a, r) { var i = function(e) { var n = Math.floor(e % 1e3 / 100),
                            a = Math.floor(e % 100 / 10),
                            r = e % 10,
                            i = ""; return n > 0 && (i += t[n] + "vatlh"), a > 0 && (i += ("" !== i ? " " : "") + t[a] + "maH"), r > 0 && (i += ("" !== i ? " " : "") + t[r]), "" === i ? "pagh" : i }(e); switch (a) {
                        case "ss":
                            return i + " lup";
                        case "mm":
                            return i + " tup";
                        case "hh":
                            return i + " rep";
                        case "dd":
                            return i + " jaj";
                        case "MM":
                            return i + " jar";
                        case "yy":
                            return i + " DIS" } }
                e.defineLocale("tlh", { months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"), monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa\u2019leS] LT", nextWeek: "LLL", lastDay: "[wa\u2019Hu\u2019] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", ss: n, m: "wa\u2019 tup", mm: n, h: "wa\u2019 rep", hh: n, d: "wa\u2019 jaj", dd: n, M: "wa\u2019 jar", MM: n, y: "wa\u2019 DIS", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, zavE: function(e, t, n) {! function(e) { "use strict";
                e.defineLocale("en-SG", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                            n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n("wd/R")) }, zx6S: function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var r = t.words[a]; return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
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