/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||typeof e.execScript=="undefined"||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||k===void 0?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={i:{1E3:{other:"0\u00a0\u1011\u1031\u102c\u1004\u103a"},1E4:{other:"0\u00a0\u101e\u1031\u102c\u1004\u103a\u1038"},1E5:{other:"0\u00a0\u101e\u102d\u1014\u103a\u1038"},1E6:{other:"0\u00a0\u101e\u1014\u103a\u1038"},1E7:{other:"0\u00a0\u1000\u102f\u100b\u1031"},1E8:{other:"00\u00a0\u1000\u102f\u100b\u1031"},1E9:{other:"000\u00a0\u100b\u1031"},1E10:{other:"\u100b\u1031\u00a00\u00a0\u1011"},1E11:{other:"\u100b\u1031\u00a00\u00a0\u101e"},1E12:{other:"\u100b\u1031\u00a00\u00a0\u101e\u102d\u1014\u103a\u1038"},1E13:{other:"\u100b\u1031\u00a00\u00a0\u101e\u1014\u103a\u1038"},
1E14:{other:"0\u00a0\u1000\u1031\u102c\u100b\u102d"}},h:{1E3:{other:"0 \u1011\u1031\u102c\u1004\u103a"},1E4:{other:"0 \u101e\u1031\u102c\u1004\u103a\u1038"},1E5:{other:"0 \u101e\u102d\u1014\u103a\u1038"},1E6:{other:"0 \u101e\u1014\u103a\u1038"},1E7:{other:"0 \u1000\u102f\u100b\u1031"},1E8:{other:"00 \u1000\u102f\u100b\u1031"},1E9:{other:"000 \u1000\u102f\u100b\u1031"},1E10:{other:"0000 \u1000\u102f\u100b\u1031"},1E11:{other:"\u1000\u102f\u100b\u1031 0 \u101e\u1031\u102c\u1004\u103a\u1038"},1E12:{other:"\u1000\u102f\u100b\u1031 0 \u101e\u102d\u1014\u103a\u1038"},
1E13:{other:"\u1000\u102f\u100b\u1031 0 \u101e\u1014\u103a\u1038"},1E14:{other:"0 \u1000\u1031\u102c\u100b\u102d"}}};var d={la:"y",ta:"y G",ma:"MMM y",na:"MMMM y",ua:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",ra:"MMM d, y",ja:"EEE, MMM d",sa:"EEE, MMM d, y",o:"d",qa:"MMM d, h:mm\u202fa zzzz"};d={la:"y",ta:"G y",ma:"y MMM",na:"y MMMM",ua:"y-MM",K:"MMM d",L:"MMMM dd",N:"d/M",M:"MMMM d",ra:"y MMM d",ja:"MMM d EEE",sa:"y MMM d EEE",o:"d",qa:"MMM d zzzz HH:mm"};var h={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),ba:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ea:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ia:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ga:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),da:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ha:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ka:[5,
6],F:5};
h={oa:4160,B:["\u1018\u102e\u1005\u102e","\u1021\u1012\u1031\u102e"],A:["\u1001\u101b\u1005\u103a\u1010\u1031\u102c\u103a \u1019\u1015\u1031\u102b\u103a\u1019\u102e\u1014\u103e\u1005\u103a","\u1001\u101b\u1005\u103a\u1014\u103e\u1005\u103a"],P:"\u1007\u1016\u1019\u1027\u1019\u1007\u1007\u1029\u1005\u1021\u1014\u1012".split(""),ca:"\u1007\u1016\u1019\u1027\u1019\u1007\u1007\u1029\u1005\u1021\u1014\u1012".split(""),J:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),ba:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
Y:"\u1007\u1014\u103a \u1016\u1031 \u1019\u1010\u103a \u1027 \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030 \u1029 \u1005\u1000\u103a \u1021\u1031\u102c\u1000\u103a \u1014\u102d\u102f \u1012\u102e".split(" "),ea:"\u1007\u1014\u103a \u1016\u1031 \u1019\u1010\u103a \u1027 \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030 \u1029 \u1005\u1000\u103a \u1021\u1031\u102c\u1000\u103a \u1014\u102d\u102f \u1012\u102e".split(" "),ia:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
ga:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),aa:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
fa:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),R:"\u1010\u1010\u1021\u1017\u1000\u101e\u1005".split(""),da:"\u1010\u1010\u1021\u1017\u1000\u101e\u1005".split(""),Z:["Q1","Q2","Q3","Q4"],W:["\u1015\u1011\u1019 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a",
"\u1012\u102f\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a","\u1010\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a","\u1005\u1010\u102f\u1010\u1039\u1011 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a"],g:["\u1014\u1036\u1014\u1000\u103a","\u100a\u1014\u1031"],l:["y MMMM d EEEE","y MMMM d","y MMM d","d/M/yy"],ha:["zzzz HH:mm:ss","z HH:mm:ss","H:mm:ss","H:mm"],m:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],D:6,ka:[5,6],F:5};var l={u:".",G:",",S:"%",pa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};l={u:".",G:",",S:"%",pa:"\u1040",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"\u1002\u100f\u1014\u103a\u1038\u1019\u101f\u102f\u1010\u103a\u101e\u1031\u102c",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"#,##0.00\u00a0\u00a4",v:"MMK"};b("I18N_DATETIMESYMBOLS_ERAS",h.B);b("I18N_DATETIMESYMBOLS_ERANAMES",h.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",h.W);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ma);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.na);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ja);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.o);
h.oa!==void 0&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.oa);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.pa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);
