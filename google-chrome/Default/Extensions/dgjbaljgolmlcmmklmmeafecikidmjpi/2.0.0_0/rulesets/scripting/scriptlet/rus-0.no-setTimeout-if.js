"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "", "250" ], [ "Adblock" ], [ "X-Set-Adblock" ], [ "_modal" ], [ "adBlockEnabled" ], [ "adblock" ], [ "ai_adb" ], [ "alert", "15000" ], [ "antyadb", "5000" ], [ "doAd" ], [ "evercookie", "300000" ], [ "getComputedStyle", "250" ], [ "getCookie", "3000" ], [ "getElementBy" ], [ "getVisibleDivs", "300" ], [ "is_adblock" ], [ "removeJuristicNotification" ], [ "saa" ], [ "setInterval", "" ], [ "sparkle" ], [ "toUTCString" ], [ "slot:fail" ], [ "NO_MIMIC_ON_" ] ], o = new Map([ [ "otzovik.com", 0 ], [ "sibnet.ru", 1 ], [ "razlozhi.ru", 2 ], [ "allapteki.ru", 3 ], [ "buhgalter.com.ua", 4 ], [ "buhgalter911.com", 4 ], [ "factor.ua", 4 ], [ "strategium.ru", 5 ], [ "fonmod.com", [ 6, 11 ] ], [ "aqicn.org", 7 ], [ "tragtorr.in", 8 ], [ "tragtorr.info", 8 ], [ "tv-kanali.online", 9 ], [ "tradingview.com", 10 ], [ "hdkinoteatr.com", 12 ], [ "ferr-um.ucoz.ru", 13 ], [ "stalker-2-2012.ucoz.net", 13 ], [ "rusvesna.su", 14 ], [ "fishki.net", 15 ], [ "vseinstrumenti.ru", 16 ], [ "testserver.pro", 17 ], [ "websdr.space", 18 ], [ "anime-chan.me", 19 ], [ "num-words.com", 20 ], [ "softportal.com", 20 ], [ "e.mail.ru", [ 21, 22 ] ], [ "octavius.mail.ru", [ 21, 22 ] ] ]), r = new Map([]), n = new Map([]);
        function i(t = "", o = "") {
            if ("string" != typeof t) return;
            const r = function() {
                if (e.safeSelf) return e.safeSelf;
                const t = globalThis, o = {
                    Array_from: Array.from,
                    Error: t.Error,
                    Function_toStringFn: t.Function.prototype.toString,
                    Function_toString: e => o.Function_toStringFn.call(e),
                    Math_floor: Math.floor,
                    Math_max: Math.max,
                    Math_min: Math.min,
                    Math_random: Math.random,
                    Object: Object,
                    Object_defineProperty: Object.defineProperty.bind(Object),
                    Object_fromEntries: Object.fromEntries.bind(Object),
                    Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                    RegExp: t.RegExp,
                    RegExp_test: t.RegExp.prototype.test,
                    RegExp_exec: t.RegExp.prototype.exec,
                    Request_clone: t.Request.prototype.clone,
                    XMLHttpRequest: t.XMLHttpRequest,
                    addEventListener: t.EventTarget.prototype.addEventListener,
                    removeEventListener: t.EventTarget.prototype.removeEventListener,
                    fetch: t.fetch,
                    JSON: t.JSON,
                    JSON_parseFn: t.JSON.parse,
                    JSON_stringifyFn: t.JSON.stringify,
                    JSON_parse: (...e) => o.JSON_parseFn.call(o.JSON, ...e),
                    JSON_stringify: (...e) => o.JSON_stringifyFn.call(o.JSON, ...e),
                    log: void 0,
                    logLevel: 0,
                    makeLogPrefix(...e) {
                        return this.sendToLogger && `[${e.join(" ⁝ ")}]` || "";
                    },
                    uboLog(...e) {
                        if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("info", ...e);
                    },
                    uboErr(...e) {
                        if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("error", ...e);
                    },
                    escapeRegexChars: e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                    initPattern(e, t = {}) {
                        if ("" === e) return {
                            matchAll: !0
                        };
                        const o = !0 !== t.canNegate || !1 === e.startsWith("!");
                        !1 === o && (e = e.slice(1));
                        const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        return null !== r ? {
                            re: new this.RegExp(r[1], r[2] || t.flags),
                            expect: o
                        } : void 0 !== t.flags ? {
                            re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                            expect: o
                        } : {
                            pattern: e,
                            expect: o
                        };
                    },
                    testPattern(e, t) {
                        return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                    },
                    patternToRegex(e, t, o = !1) {
                        if ("" === e) return /^/;
                        const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        if (null === r) {
                            const r = this.escapeRegexChars(e);
                            return new RegExp(o ? `^${r}$` : r, t);
                        }
                        try {
                            return new RegExp(r[1], r[2] || void 0);
                        } catch (e) {}
                        return /^/;
                    },
                    getExtraArgs(e, t = 0) {
                        const o = e.slice(t).reduce(((e, t, o, r) => {
                            if (0 == (1 & o)) {
                                const t = r[o + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                                e.push([ r[o], n ]);
                            }
                            return e;
                        }), []);
                        return this.Object_fromEntries(o);
                    },
                    onIdle: (e, o) => t.requestIdleCallback ? t.requestIdleCallback(e, o) : t.requestAnimationFrame(e)
                };
                if (e.safeSelf = o, void 0 === e.bcSecret) return o;
                const r = new t.BroadcastChannel(e.bcSecret);
                let n = [];
                return o.logLevel = e.logLevel || 1, o.sendToLogger = (e, ...t) => {
                    if (0 === t.length) return;
                    const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                    if (void 0 === n) return r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    });
                    n.push({
                        type: e,
                        text: o
                    });
                }, r.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === n) break;
                        n.forEach((({type: e, text: t}) => r.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: t
                        }))), n = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        o.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        o.logLevel = 2;
                    }
                }, r.postMessage("areyouready?"), o;
            }(), n = r.makeLogPrefix("prevent-setTimeout", t, o), i = "!" === t.charAt(0);
            i && (t = t.slice(1)), "" === o && (o = void 0);
            let s = !1;
            void 0 !== o && (s = "!" === o.charAt(0), s && (o = o.slice(1)), o = parseInt(o, 10));
            const a = r.patternToRegex(t);
            self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, c, l) {
                    const g = l[0] instanceof Function ? String(r.Function_toString(l[0])) : String(l[0]), u = l[1];
                    if ("" === t && void 0 === o) return r.uboLog(n, `Called:\n${g}\n${u}`), Reflect.apply(e, c, l);
                    let p;
                    return "" !== t && (p = a.test(g) !== i), !1 !== p && void 0 !== o && (p = (u === o || isNaN(u) && isNaN(o)) !== s), 
                    p && (l[0] = function() {}, r.uboLog(n, `Prevented:\n${g}\n${u}`)), Reflect.apply(e, c, l);
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
            });
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const c = new Set, l = [];
        if (0 !== n.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), o = n.get(t);
                o && l.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || c.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = s.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) l.includes(e) || c.add(e);
                }
            }
            r.clear();
        }
        for (const e of c) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_noSetTimeoutIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_noSetTimeoutIf);
            r = t.URL.createObjectURL(n);
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = r, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_noSetTimeoutIf;
    }
})();