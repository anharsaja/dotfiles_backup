/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||typeof e.execScript=="undefined"||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||k===void 0?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={h:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},oa:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};c={h:{1E3:{other:"0\ucc9c"},1E4:{other:"0\ub9cc"},1E5:{other:"00\ub9cc"},1E6:{other:"000\ub9cc"},1E7:{other:"0000\ub9cc"},1E8:{other:"0\uc5b5"},1E9:{other:"00\uc5b5"},1E10:{other:"000\uc5b5"},1E11:{other:"0000\uc5b5"},1E12:{other:"0\uc870"},1E13:{other:"00\uc870"},1E14:{other:"000\uc870"}}};var d={ka:"y",sa:"y G",la:"MMM y",ma:"MMMM y",ta:"MM/y",J:"MMM d",K:"MMMM dd",M:"M/d",L:"MMMM d",qa:"MMM d, y",ia:"EEE, MMM d",ra:"EEE, MMM d, y",m:"d",pa:"MMM d, h:mm\u202fa zzzz"};d={ka:"y\ub144",sa:"G y\ub144",la:"y\ub144 MMM",ma:"y\ub144 MMMM",ta:"y. M.",J:"MMM d\uc77c",K:"MMMM dd\uc77c",M:"M. d.",L:"MMMM d\uc77c",qa:"y\ub144 MMM d\uc77c",ia:"MMM d\uc77c (EEE)",ra:"y\ub144 MMM d\uc77c (EEE)",m:"d\uc77c",pa:"MMM d\uc77c a h:mm zzzz"};var h={A:["BC","AD"],v:["Before Christ","Anno Domini"],O:"JFMAMJJASOND".split(""),ba:"JFMAMJJASOND".split(""),I:"January February March April May June July August September October November December".split(" "),aa:"January February March April May June July August September October November December".split(" "),X:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),da:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ha:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Z:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ea:"Sun Mon Tue Wed Thu Fri Sat".split(" "),P:"SMTWTFS".split(""),ca:"SMTWTFS".split(""),Y:["Q1","Q2","Q3","Q4"],V:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],j:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ga:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],l:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],C:6,ja:[5,6],
D:5};
h={A:["BC","AD"],v:["\uae30\uc6d0\uc804","\uc11c\uae30"],O:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),ba:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),I:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),aa:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),X:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
da:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),ha:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),fa:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),Z:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),ea:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
P:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),ca:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),Y:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"],V:["\uc81c 1/4\ubd84\uae30","\uc81c 2/4\ubd84\uae30","\uc81c 3/4\ubd84\uae30","\uc81c 4/4\ubd84\uae30"],g:["\uc624\uc804","\uc624\ud6c4"],j:["y\ub144 MMMM d\uc77c EEEE","y\ub144 MMMM d\uc77c","y. M. d.","yy. M. d."],ga:["a h\uc2dc m\ubd84 s\ucd08 zzzz","a h\uc2dc m\ubd84 s\ucd08 z","a h:mm:ss","a h:mm"],l:["{1} {0}",
"{1} {0}","{1} {0}","{1} {0}"],C:6,ja:[5,6],D:5};var l={s:".",F:",",R:"%",na:"0",U:"+",H:"-",B:"E",T:"\u2030",G:"\u221e",N:"NaN",o:"#,##0.###",W:"#E0",S:"#,##0%",i:"\u00a4#,##0.00",u:"USD"};l={s:".",F:",",R:"%",na:"0",U:"+",H:"-",B:"E",T:"\u2030",G:"\u221e",N:"NaN",o:"#,##0.###",W:"#E0",S:"#,##0%",i:"\u00a4#,##0.00",u:"KRW"};b("I18N_DATETIMESYMBOLS_ERAS",h.A);b("I18N_DATETIMESYMBOLS_ERANAMES",h.v);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_MONTHS",h.I);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.aa);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.da);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ha);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.Z);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.ea);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.ca);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Y);b("I18N_DATETIMESYMBOLS_QUARTERS",h.V);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.j);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ga);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.C);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ja);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.D);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.ka);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ma);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.J);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.M);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.L);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ia);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.m);
h.ua!==void 0&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ua);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.s);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.F);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.R);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.na);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.U);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.H);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.B);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.T);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.G);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.N);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.o);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.W);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.S);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.i);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.u);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.h);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.oa);
