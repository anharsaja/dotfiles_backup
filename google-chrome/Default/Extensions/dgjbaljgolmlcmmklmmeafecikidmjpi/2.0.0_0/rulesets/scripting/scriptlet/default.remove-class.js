"use strict";

!function() {
    const e = {}, t = [ [ "ad-controls", ".bitmovinplayer-container.ad-controls" ], [ "hidden", "button" ], [ "twig-body" ], [ "get-link", '.ybtn.get-link[target="_blank"]', "stay" ], [ "get-link", '.btn-success.get-link[target="_blank"]', "stay" ], [ "has-sidebar-adz|DashboardPage-inner", 'div[class^="DashboardPage-inner"]', "stay" ], [ "hasStickyAd", 'div.hasStickyAd[class^="SetPage"]', "stay" ], [ "cnx-ad-container|cnx-ad-bid-slot" ], [ "vjs-hidden", ".vjs-control-bar", "stay" ], [ "hidden", ".panel-body > .text-center > button" ], [ "disabled", "a#redirect-btn" ], [ "td-ad-background-link" ], [ "download-font-button2", ".download-font-button" ], [ "unclickable", "", "stay" ] ], o = new Map([ [ "sbs.com.au", 0 ], [ "apps2app.com", 1 ], [ "appsmodz.com", 1 ], [ "xda-developers.com", 2 ], [ "paid4.link", 3 ], [ "go.gets4link.com", 4 ], [ "quizlet.com", [ 5, 6 ] ], [ "funker530.com", 7 ], [ "av01.tv", 8 ], [ "so1.asia", 9 ], [ "top1iq.com", 10 ], [ "artribune.com", 11 ], [ "bestfonts.pro", 12 ], [ "falatron.com", 13 ] ]), n = new Map([]), r = new Map([]);
    function s(e = "", t = "", o = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const n = a(), r = n.makeLogPrefix("remove-class", e, t, o), s = e.split(/\s*\|\s*/), i = s.map((e => `${t}.${CSS.escape(e)}`)).join(",");
        n.logLevel > 1 && n.uboLog(r, `Target selector:\n\t${i}`);
        const c = /\bstay\b/.test(o);
        let l;
        const d = () => {
            l = void 0;
            try {
                const e = document.querySelectorAll(i);
                for (const t of e) t.classList.remove(...s), n.uboLog(r, "Removed class(es)");
            } catch (e) {}
            c || "complete" === document.readyState && g.disconnect();
        }, g = new MutationObserver((e => {
            if (void 0 !== l) return;
            let t = !0;
            for (let o = 0; o < e.length && t; o++) {
                const {type: n, addedNodes: r, removedNodes: s} = e[o];
                "attributes" === n && (t = !1);
                for (let e = 0; e < r.length && t; e++) if (1 === r[e].nodeType) {
                    t = !1;
                    break;
                }
                for (let e = 0; e < s.length && t; e++) if (1 === s[e].nodeType) {
                    t = !1;
                    break;
                }
            }
            t || (l = n.onIdle(d, {
                timeout: 67
            }));
        }));
        !function(e, t) {
            const o = e => {
                const t = {
                    loading: 1,
                    interactive: 2,
                    end: 2,
                    2: 2,
                    complete: 3,
                    idle: 3,
                    3: 3
                }, o = Array.isArray(e) ? e : [ e ];
                for (const e of o) {
                    const o = `${e}`;
                    if (!1 !== t.hasOwnProperty(o)) return t[o];
                }
                return 0;
            }, n = o(t);
            if (o(document.readyState) >= n) return void e();
            const s = a(), i = [ "readystatechange", () => {
                o(document.readyState) < n || (e(), s.removeEventListener.apply(document, i));
            }, {
                capture: !0
            } ];
            s.addEventListener.apply(document, i);
        }((() => {
            d(), g.observe(document, {
                attributes: !0,
                attributeFilter: [ "class" ],
                childList: !0,
                subtree: !0
            });
        }), /\bcomplete\b/.test(o) ? "idle" : "loading");
    }
    function a() {
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || t.flags),
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(o ? `^${n}$` : n, t);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch (e) {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const o = e.slice(t).reduce(((e, t, o, n) => {
                    if (0 == (1 & o)) {
                        const t = n[o + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[o], r ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (e, o) => t.requestIdleCallback ? t.requestIdleCallback(e, o) : t.requestAnimationFrame(e)
        };
        if (e.safeSelf = o, void 0 === e.bcSecret) return o;
        const n = new t.BroadcastChannel(e.bcSecret);
        let r = [];
        return o.logLevel = e.logLevel || 1, o.sendToLogger = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            if (void 0 === r) return n.postMessage({
                what: "messageToLogger",
                type: e,
                text: o
            });
            r.push({
                type: e,
                text: o
            });
        }, n.onmessage = e => {
            switch (e.data) {
              case "iamready!":
                if (void 0 === r) break;
                r.forEach((({type: e, text: t}) => n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: t
                }))), r = void 0;
                break;

              case "setScriptletLogLevelToOne":
                o.logLevel = 1;
                break;

              case "setScriptletLogLevelToTwo":
                o.logLevel = 2;
            }
        }, n.postMessage("areyouready?"), o;
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = i.length;
    if (0 === c) return;
    const l = new Set, d = [];
    if (0 !== r.size) {
        for (let e = 0; e < c; e++) {
            const t = i.slice(e).join("."), o = r.get(t);
            o && d.push(...o);
        }
        r.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) d.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(i.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== n.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = i.slice(t, o).join(".");
            let r = n.get(e);
            if (void 0 !== r) {
                "number" == typeof r && (r = [ r ]);
                for (const e of r) d.includes(e) || l.add(e);
            }
        }
        n.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();