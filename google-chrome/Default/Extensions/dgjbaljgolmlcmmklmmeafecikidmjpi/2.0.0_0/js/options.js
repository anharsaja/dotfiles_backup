(() => {
    var e = {
        638: function(e, t) {
            var n;
            /*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                } : n(t);
            }("undefined" != typeof window ? window : this, (function(r, o) {
                "use strict";
                var i = [], a = Object.getPrototypeOf, s = i.slice, u = i.flat ? function(e) {
                    return i.flat.call(e);
                } : function(e) {
                    return i.concat.apply([], e);
                }, c = i.push, l = i.indexOf, f = {}, p = f.toString, d = f.hasOwnProperty, h = d.toString, v = h.call(Object), g = {}, y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                }, m = function(e) {
                    return null != e && e === e.window;
                }, b = r.document, x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(e, t, n) {
                    var r, o, i = (n = n || b).createElement("script");
                    if (i.text = e, t) for (r in x) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i);
                }
                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
                }
                var k = "3.7.1", E = /HTML$/i, C = function(e, t) {
                    return new C.fn.init(e, t);
                };
                function S(e) {
                    var t = !!e && "length" in e && e.length, n = T(e);
                    return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
                }
                function _(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                C.fn = C.prototype = {
                    jquery: k,
                    constructor: C,
                    length: 0,
                    toArray: function() {
                        return s.call(this);
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function(e) {
                        var t = C.merge(this.constructor(), e);
                        return t.prevObject = this, t;
                    },
                    each: function(e) {
                        return C.each(this, e);
                    },
                    map: function(e) {
                        return this.pushStack(C.map(this, (function(t, n) {
                            return e.call(t, n, t);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return (t + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return t % 2;
                        })));
                    },
                    eq: function(e) {
                        var t = this.length, n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: c,
                    sort: i.sort,
                    splice: i.splice
                }, C.extend = C.fn.extend = function() {
                    var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), 
                    s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
                    "__proto__" !== t && a !== r && (c && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], 
                    i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(c, i, r)) : void 0 !== r && (a[t] = r));
                    return a;
                }, C.extend({
                    expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e);
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== v));
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n);
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    text: function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (!o) for (;t = e[r++]; ) n += C.text(t);
                        return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n;
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [ e ] : e) : c.call(n, e)), 
                        n;
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : l.call(t, e, n);
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                        return !E.test(t || n && n.nodeName || "HTML");
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return e.length = o, e;
                    },
                    grep: function(e, t, n) {
                        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                        return r;
                    },
                    map: function(e, t, n) {
                        var r, o, i = 0, a = [];
                        if (S(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                        return u(a);
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), 
                C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase();
                }));
                var j = i.pop, L = i.sort, A = i.splice, N = "[\\x20\\t\\r\\n\\f]", D = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g");
                C.contains = function(e, t) {
                    var n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                };
                var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function q(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }
                C.escapeSelector = function(e) {
                    return (e + "").replace(O, q);
                };
                var P = b, H = c;
                !function() {
                    var e, t, n, o, a, u, c, f, p, h, v = H, y = C.expando, m = 0, b = 0, x = ee(), w = ee(), T = ee(), k = ee(), E = function(e, t) {
                        return e === t && (a = !0), 0;
                    }, S = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", O = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", q = "\\[" + N + "*(" + O + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + N + "*\\]", R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", M = new RegExp(N + "+", "g"), I = new RegExp("^" + N + "*," + N + "*"), F = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"), $ = new RegExp(N + "|>"), W = new RegExp(R), B = new RegExp("^" + O + "$"), U = {
                        ID: new RegExp("^#(" + O + ")"),
                        CLASS: new RegExp("^\\.(" + O + ")"),
                        TAG: new RegExp("^(" + O + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + R),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + S + ")$", "i"),
                        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                    }, G = /^(?:input|select|textarea|button)$/i, z = /^h\d$/i, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, V = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"), Q = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                    }, J = function() {
                        ue();
                    }, K = pe((function(e) {
                        return !0 === e.disabled && _(e, "fieldset");
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        v.apply(i = s.call(P.childNodes), P.childNodes), i[P.childNodes.length].nodeType;
                    } catch (e) {
                        v = {
                            apply: function(e, t) {
                                H.apply(e, s.call(t));
                            },
                            call: function(e) {
                                H.apply(e, s.call(arguments, 1));
                            }
                        };
                    }
                    function Z(e, t, n, r) {
                        var o, i, a, s, c, l, d, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                        if (!r && (ue(t), t = t || u, f)) {
                            if (11 !== m && (c = X.exec(e))) if (o = c[1]) {
                                if (9 === m) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return v.call(n, a), n;
                                } else if (h && (a = h.getElementById(o)) && Z.contains(t, a) && a.id === o) return v.call(n, a), 
                                n;
                            } else {
                                if (c[2]) return v.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = c[3]) && t.getElementsByClassName) return v.apply(n, t.getElementsByClassName(o)), 
                                n;
                            }
                            if (!(k[e + " "] || p && p.test(e))) {
                                if (d = e, h = t, 1 === m && ($.test(e) || F.test(e))) {
                                    for ((h = V.test(e) && se(t.parentNode) || t) == t && g.scope || ((s = t.getAttribute("id")) ? s = C.escapeSelector(s) : t.setAttribute("id", s = y)), 
                                    i = (l = le(e)).length; i--; ) l[i] = (s ? "#" + s : ":scope") + " " + fe(l[i]);
                                    d = l.join(",");
                                }
                                try {
                                    return v.apply(n, h.querySelectorAll(d)), n;
                                } catch (t) {
                                    k(e, !0);
                                } finally {
                                    s === y && t.removeAttribute("id");
                                }
                            }
                        }
                        return me(e.replace(D, "$1"), t, n, r);
                    }
                    function ee() {
                        var e = [];
                        return function n(r, o) {
                            return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = o;
                        };
                    }
                    function te(e) {
                        return e[y] = !0, e;
                    }
                    function ne(e) {
                        var t = u.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null;
                        }
                    }
                    function re(e) {
                        return function(t) {
                            return _(t, "input") && t.type === e;
                        };
                    }
                    function oe(e) {
                        return function(t) {
                            return (_(t, "input") || _(t, "button")) && t.type === e;
                        };
                    }
                    function ie(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                        };
                    }
                    function ae(e) {
                        return te((function(t) {
                            return t = +t, te((function(n, r) {
                                for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
                            }));
                        }));
                    }
                    function se(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    function ue(e) {
                        var n, r = e ? e.ownerDocument || e : P;
                        return r != u && 9 === r.nodeType && r.documentElement ? (c = (u = r).documentElement, 
                        f = !C.isXMLDoc(u), h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, 
                        c.msMatchesSelector && P != u && (n = u.defaultView) && n.top !== n && n.addEventListener("unload", J), 
                        g.getById = ne((function(e) {
                            return c.appendChild(e).id = C.expando, !u.getElementsByName || !u.getElementsByName(C.expando).length;
                        })), g.disconnectedMatch = ne((function(e) {
                            return h.call(e, "*");
                        })), g.scope = ne((function() {
                            return u.querySelectorAll(":scope");
                        })), g.cssHas = ne((function() {
                            try {
                                return u.querySelector(":has(*,:jqfake)"), !1;
                            } catch (e) {
                                return !0;
                            }
                        })), g.getById ? (t.filter.ID = function(e) {
                            var t = e.replace(Y, Q);
                            return function(e) {
                                return e.getAttribute("id") === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n = t.getElementById(e);
                                return n ? [ n ] : [];
                            }
                        }) : (t.filter.ID = function(e) {
                            var t = e.replace(Y, Q);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++]; ) if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                }
                                return [];
                            }
                        }), t.find.TAG = function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                        }, t.find.CLASS = function(e, t) {
                            if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e);
                        }, p = [], ne((function(e) {
                            var t;
                            c.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>", 
                            e.querySelectorAll("[selected]").length || p.push("\\[" + N + "*(?:value|" + S + ")"), 
                            e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="), e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"), 
                            e.querySelectorAll(":checked").length || p.push(":checked"), (t = u.createElement("input")).setAttribute("type", "hidden"), 
                            e.appendChild(t).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), 
                            (t = u.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")");
                        })), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), E = function(e, t) {
                            if (e === t) return a = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == P && Z.contains(P, e) ? -1 : t === u || t.ownerDocument == P && Z.contains(P, t) ? 1 : o ? l.call(o, e) - l.call(o, t) : 0 : 4 & n ? -1 : 1);
                        }, u) : u;
                    }
                    for (e in Z.matches = function(e, t) {
                        return Z(e, null, null, t);
                    }, Z.matchesSelector = function(e, t) {
                        if (ue(e), f && !k[t + " "] && (!p || !p.test(t))) try {
                            var n = h.call(e, t);
                            if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
                        } catch (e) {
                            k(t, !0);
                        }
                        return Z(t, u, null, [ e ]).length > 0;
                    }, Z.contains = function(e, t) {
                        return (e.ownerDocument || e) != u && ue(e), C.contains(e, t);
                    }, Z.attr = function(e, n) {
                        (e.ownerDocument || e) != u && ue(e);
                        var r = t.attrHandle[n.toLowerCase()], o = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                        return void 0 !== o ? o : e.getAttribute(n);
                    }, Z.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }, C.uniqueSort = function(e) {
                        var t, n = [], r = 0, i = 0;
                        if (a = !g.sortStable, o = !g.sortStable && s.call(e, 0), L.call(e, E), a) {
                            for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                            for (;r--; ) A.call(e, n[r], 1);
                        }
                        return o = null, e;
                    }, C.fn.uniqueSort = function() {
                        return this.pushStack(C.uniqueSort(s.apply(this)));
                    }, (t = C.expr = {
                        cacheLength: 50,
                        createPseudo: te,
                        match: U,
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
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Y, Q), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q), 
                                "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), 
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), 
                                e;
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = le(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                                e[2] = n.slice(0, t)), e.slice(0, 3));
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Y, Q).toLowerCase();
                                return "*" === e ? function() {
                                    return !0;
                                } : function(e) {
                                    return _(e, t);
                                };
                            },
                            CLASS: function(e) {
                                var t = x[e + " "];
                                return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && x(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = Z.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                                };
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode;
                                } : function(t, n, u) {
                                    var c, l, f, p, d, h = i !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), b = !u && !s, x = !1;
                                    if (v) {
                                        if (i) {
                                            for (;h; ) {
                                                for (f = t; f = f[h]; ) if (s ? _(f, g) : 1 === f.nodeType) return !1;
                                                d = h = "only" === e && !d && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (d = [ a ? v.firstChild : v.lastChild ], a && b) {
                                            for (x = (p = (c = (l = v[y] || (v[y] = {}))[e] || [])[0] === m && c[1]) && c[2], 
                                            f = p && v.childNodes[p]; f = ++p && f && f[h] || (x = p = 0) || d.pop(); ) if (1 === f.nodeType && ++x && f === t) {
                                                l[e] = [ m, p, x ];
                                                break;
                                            }
                                        } else if (b && (x = p = (c = (l = t[y] || (t[y] = {}))[e] || [])[0] === m && c[1]), 
                                        !1 === x) for (;(f = ++p && f && f[h] || (x = p = 0) || d.pop()) && (!(s ? _(f, g) : 1 === f.nodeType) || !++x || (b && ((l = f[y] || (f[y] = {}))[e] = [ m, x ]), 
                                        f !== t)); ) ;
                                        return (x -= o) === r || x % r == 0 && x / r >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(e, n) {
                                var r, o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                return o[y] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; ) e[r = l.call(e, i[a])] = !(t[r] = i[a]);
                                })) : function(e) {
                                    return o(e, 0, r);
                                }) : o;
                            }
                        },
                        pseudos: {
                            not: te((function(e) {
                                var t = [], n = [], r = ye(e.replace(D, "$1"));
                                return r[y] ? te((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
                                };
                            })),
                            has: te((function(e) {
                                return function(t) {
                                    return Z(e, t).length > 0;
                                };
                            })),
                            contains: te((function(e) {
                                return e = e.replace(Y, Q), function(t) {
                                    return (t.textContent || C.text(t)).indexOf(e) > -1;
                                };
                            })),
                            lang: te((function(e) {
                                return B.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(Y, Q).toLowerCase(), 
                                function(t) {
                                    var n;
                                    do {
                                        if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                };
                            })),
                            target: function(e) {
                                var t = r.location && r.location.hash;
                                return t && t.slice(1) === e.id;
                            },
                            root: function(e) {
                                return e === c;
                            },
                            focus: function(e) {
                                return e === function() {
                                    try {
                                        return u.activeElement;
                                    } catch (e) {}
                                }() && u.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: ie(!1),
                            disabled: ie(!0),
                            checked: function(e) {
                                return _(e, "input") && !!e.checked || _(e, "option") && !!e.selected;
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function(e) {
                                return !t.pseudos.empty(e);
                            },
                            header: function(e) {
                                return z.test(e.nodeName);
                            },
                            input: function(e) {
                                return G.test(e.nodeName);
                            },
                            button: function(e) {
                                return _(e, "input") && "button" === e.type || _(e, "button");
                            },
                            text: function(e) {
                                var t;
                                return _(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                            },
                            first: ae((function() {
                                return [ 0 ];
                            })),
                            last: ae((function(e, t) {
                                return [ t - 1 ];
                            })),
                            eq: ae((function(e, t, n) {
                                return [ n < 0 ? n + t : n ];
                            })),
                            even: ae((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            odd: ae((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            lt: ae((function(e, t, n) {
                                var r;
                                for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                return e;
                            })),
                            gt: ae((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                return e;
                            }))
                        }
                    }).pseudos.nth = t.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) t.pseudos[e] = re(e);
                    for (e in {
                        submit: !0,
                        reset: !0
                    }) t.pseudos[e] = oe(e);
                    function ce() {}
                    function le(e, n) {
                        var r, o, i, a, s, u, c, l = w[e + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (s = e, u = [], c = t.preFilter; s; ) {
                            for (a in r && !(o = I.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), 
                            r = !1, (o = F.exec(s)) && (r = o.shift(), i.push({
                                value: r,
                                type: o[0].replace(D, " ")
                            }), s = s.slice(r.length)), t.filter) !(o = U[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), 
                            i.push({
                                value: r,
                                type: a,
                                matches: o
                            }), s = s.slice(r.length));
                            if (!r) break;
                        }
                        return n ? s.length : s ? Z.error(e) : w(e, u).slice(0);
                    }
                    function fe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r;
                    }
                    function pe(e, t, n) {
                        var r = t.dir, o = t.next, i = o || r, a = n && "parentNode" === i, s = b++;
                        return t.first ? function(t, n, o) {
                            for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, o);
                            return !1;
                        } : function(t, n, u) {
                            var c, l, f = [ m, s ];
                            if (u) {
                                for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                            } else for (;t = t[r]; ) if (1 === t.nodeType || a) if (l = t[y] || (t[y] = {}), 
                            o && _(t, o)) t = t[r] || t; else {
                                if ((c = l[i]) && c[0] === m && c[1] === s) return f[2] = c[2];
                                if (l[i] = f, f[2] = e(t, n, u)) return !0;
                            }
                            return !1;
                        };
                    }
                    function de(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                            return !0;
                        } : e[0];
                    }
                    function he(e, t, n, r, o) {
                        for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), 
                        c && t.push(s)));
                        return a;
                    }
                    function ve(e, t, n, r, o, i) {
                        return r && !r[y] && (r = ve(r)), o && !o[y] && (o = ve(o, i)), te((function(i, a, s, u) {
                            var c, f, p, d, h = [], g = [], y = a.length, m = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                                return n;
                            }(t || "*", s.nodeType ? [ s ] : s, []), b = !e || !i && t ? m : he(m, h, e, s, u);
                            if (n ? n(b, d = o || (i ? e : y || r) ? [] : a, s, u) : d = b, r) for (c = he(d, g), 
                            r(c, [], s, u), f = c.length; f--; ) (p = c[f]) && (d[g[f]] = !(b[g[f]] = p));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (c = [], f = d.length; f--; ) (p = d[f]) && c.push(b[f] = p);
                                        o(null, d = [], c, u);
                                    }
                                    for (f = d.length; f--; ) (p = d[f]) && (c = o ? l.call(i, p) : h[f]) > -1 && (i[c] = !(a[c] = p));
                                }
                            } else d = he(d === a ? d.splice(y, d.length) : d), o ? o(null, a, d, u) : v.apply(a, d);
                        }));
                    }
                    function ge(e) {
                        for (var r, o, i, a = e.length, s = t.relative[e[0].type], u = s || t.relative[" "], c = s ? 1 : 0, f = pe((function(e) {
                            return e === r;
                        }), u, !0), p = pe((function(e) {
                            return l.call(r, e) > -1;
                        }), u, !0), d = [ function(e, t, o) {
                            var i = !s && (o || t != n) || ((r = t).nodeType ? f(e, t, o) : p(e, t, o));
                            return r = null, i;
                        } ]; c < a; c++) if (o = t.relative[e[c].type]) d = [ pe(de(d), o) ]; else {
                            if ((o = t.filter[e[c].type].apply(null, e[c].matches))[y]) {
                                for (i = ++c; i < a && !t.relative[e[i].type]; i++) ;
                                return ve(c > 1 && de(d), c > 1 && fe(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace(D, "$1"), o, c < i && ge(e.slice(c, i)), i < a && ge(e = e.slice(i)), i < a && fe(e));
                            }
                            d.push(o);
                        }
                        return de(d);
                    }
                    function ye(e, r) {
                        var o, i = [], a = [], s = T[e + " "];
                        if (!s) {
                            for (r || (r = le(e)), o = r.length; o--; ) (s = ge(r[o]))[y] ? i.push(s) : a.push(s);
                            (s = T(e, function(e, r) {
                                var o = r.length > 0, i = e.length > 0, a = function(a, s, c, l, p) {
                                    var d, h, g, y = 0, b = "0", x = a && [], w = [], T = n, k = a || i && t.find.TAG("*", p), E = m += null == T ? 1 : Math.random() || .1, S = k.length;
                                    for (p && (n = s == u || s || p); b !== S && null != (d = k[b]); b++) {
                                        if (i && d) {
                                            for (h = 0, s || d.ownerDocument == u || (ue(d), c = !f); g = e[h++]; ) if (g(d, s || u, c)) {
                                                v.call(l, d);
                                                break;
                                            }
                                            p && (m = E);
                                        }
                                        o && ((d = !g && d) && y--, a && x.push(d));
                                    }
                                    if (y += b, o && b !== y) {
                                        for (h = 0; g = r[h++]; ) g(x, w, s, c);
                                        if (a) {
                                            if (y > 0) for (;b--; ) x[b] || w[b] || (w[b] = j.call(l));
                                            w = he(w);
                                        }
                                        v.apply(l, w), p && !a && w.length > 0 && y + r.length > 1 && C.uniqueSort(l);
                                    }
                                    return p && (m = E, n = T), x;
                                };
                                return o ? te(a) : a;
                            }(a, i))).selector = e;
                        }
                        return s;
                    }
                    function me(e, n, r, o) {
                        var i, a, s, u, c, l = "function" == typeof e && e, p = !o && le(e = l.selector || e);
                        if (r = r || [], 1 === p.length) {
                            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && f && t.relative[a[1].type]) {
                                if (!(n = (t.find.ID(s.matches[0].replace(Y, Q), n) || [])[0])) return r;
                                l && (n = n.parentNode), e = e.slice(a.shift().value.length);
                            }
                            for (i = U.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !t.relative[u = s.type]); ) if ((c = t.find[u]) && (o = c(s.matches[0].replace(Y, Q), V.test(a[0].type) && se(n.parentNode) || n))) {
                                if (a.splice(i, 1), !(e = o.length && fe(a))) return v.apply(r, o), r;
                                break;
                            }
                        }
                        return (l || ye(e, p))(o, n, !f, r, !n || V.test(e) && se(n.parentNode) || n), r;
                    }
                    ce.prototype = t.filters = t.pseudos, t.setFilters = new ce, g.sortStable = y.split("").sort(E).join("") === y, 
                    ue(), g.sortDetached = ne((function(e) {
                        return 1 & e.compareDocumentPosition(u.createElement("fieldset"));
                    })), C.find = Z, C.expr[":"] = C.expr.pseudos, C.unique = C.uniqueSort, Z.compile = ye, 
                    Z.select = me, Z.setDocument = ue, Z.tokenize = le, Z.escape = C.escapeSelector, 
                    Z.getText = C.text, Z.isXML = C.isXMLDoc, Z.selectors = C.expr, Z.support = C.support, 
                    Z.uniqueSort = C.uniqueSort;
                }();
                var R = function(e, t, n) {
                    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e);
                    }
                    return r;
                }, M = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }, I = C.expr.match.needsContext, F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function $(e, t, n) {
                    return y(t) ? C.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n;
                    })) : t.nodeType ? C.grep(e, (function(e) {
                        return e === t !== n;
                    })) : "string" != typeof t ? C.grep(e, (function(e) {
                        return l.call(t, e) > -1 !== n;
                    })) : C.filter(t, e, n);
                }
                C.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [ r ] : [] : C.find.matches(e, C.grep(t, (function(e) {
                        return 1 === e.nodeType;
                    })));
                }, C.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, o = this;
                        if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                            for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                        return r > 1 ? C.uniqueSort(n) : n;
                    },
                    filter: function(e) {
                        return this.pushStack($(this, e || [], !1));
                    },
                    not: function(e) {
                        return this.pushStack($(this, e || [], !0));
                    },
                    is: function(e) {
                        return !!$(this, "string" == typeof e && I.test(e) ? C(e) : e || [], !1).length;
                    }
                });
                var W, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (C.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || W, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : B.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), 
                            F.test(r[1]) && C.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this;
                        }
                        return (o = b.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
                }).prototype = C.fn, W = C(b);
                var U = /^(?:parents|prev(?:Until|All))/, G = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function z(e, t) {
                    for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                    return e;
                }
                C.fn.extend({
                    has: function(e) {
                        var t = C(e, this), n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
                        }));
                    },
                    closest: function(e, t) {
                        var n, r = 0, o = this.length, i = [], a = "string" != typeof e && C(e);
                        if (!I.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        }
                        return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? l.call(C(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function(e, t) {
                        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    }
                }), C.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function(e) {
                        return R(e, "parentNode");
                    },
                    parentsUntil: function(e, t, n) {
                        return R(e, "parentNode", n);
                    },
                    next: function(e) {
                        return z(e, "nextSibling");
                    },
                    prev: function(e) {
                        return z(e, "previousSibling");
                    },
                    nextAll: function(e) {
                        return R(e, "nextSibling");
                    },
                    prevAll: function(e) {
                        return R(e, "previousSibling");
                    },
                    nextUntil: function(e, t, n) {
                        return R(e, "nextSibling", n);
                    },
                    prevUntil: function(e, t, n) {
                        return R(e, "previousSibling", n);
                    },
                    siblings: function(e) {
                        return M((e.parentNode || {}).firstChild, e);
                    },
                    children: function(e) {
                        return M(e.firstChild);
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (_(e, "template") && (e = e.content || e), 
                        C.merge([], e.childNodes));
                    }
                }, (function(e, t) {
                    C.fn[e] = function(n, r) {
                        var o = C.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), 
                        this.length > 1 && (G[e] || C.uniqueSort(o), U.test(e) && o.reverse()), this.pushStack(o);
                    };
                }));
                var X = /[^\x20\t\r\n\f]+/g;
                function V(e) {
                    return e;
                }
                function Y(e) {
                    throw e;
                }
                function Q(e, t, n, r) {
                    var o;
                    try {
                        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                    } catch (e) {
                        n.apply(void 0, [ e ]);
                    }
                }
                C.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return C.each(e.match(X) || [], (function(e, n) {
                            t[n] = !0;
                        })), t;
                    }(e) : C.extend({}, e);
                    var t, n, r, o, i = [], a = [], s = -1, u = function() {
                        for (o = o || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, 
                        n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
                    }, c = {
                        add: function() {
                            return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                                C.each(n, (function(n, r) {
                                    y(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r);
                                }));
                            }(arguments), n && !t && u()), this;
                        },
                        remove: function() {
                            return C.each(arguments, (function(e, t) {
                                for (var n; (n = C.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                            })), this;
                        },
                        has: function(e) {
                            return e ? C.inArray(e, i) > -1 : i.length > 0;
                        },
                        empty: function() {
                            return i && (i = []), this;
                        },
                        disable: function() {
                            return o = a = [], i = n = "", this;
                        },
                        disabled: function() {
                            return !i;
                        },
                        lock: function() {
                            return o = a = [], n || t || (i = n = ""), this;
                        },
                        locked: function() {
                            return !!o;
                        },
                        fireWith: function(e, n) {
                            return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                            this;
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!r;
                        }
                    };
                    return c;
                }, C.extend({
                    Deferred: function(e) {
                        var t = [ [ "notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2 ], [ "resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", o = {
                            state: function() {
                                return n;
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this;
                            },
                            catch: function(e) {
                                return o.then(null, e);
                            },
                            pipe: function() {
                                var e = arguments;
                                return C.Deferred((function(n) {
                                    C.each(t, (function(t, r) {
                                        var o = y(e[r[4]]) && e[r[4]];
                                        i[r[1]]((function() {
                                            var e = o && o.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [ e ] : arguments);
                                        }));
                                    })), e = null;
                                })).promise();
                            },
                            then: function(e, n, o) {
                                var i = 0;
                                function a(e, t, n, o) {
                                    return function() {
                                        var s = this, u = arguments, c = function() {
                                            var r, c;
                                            if (!(e < i)) {
                                                if ((r = n.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = r && ("object" == typeof r || "function" == typeof r) && r.then, y(c) ? o ? c.call(r, a(i, t, V, o), a(i, t, Y, o)) : (i++, 
                                                c.call(r, a(i, t, V, o), a(i, t, Y, o), a(i, t, V, t.notifyWith))) : (n !== V && (s = void 0, 
                                                u = [ r ]), (o || t.resolveWith)(s, u));
                                            }
                                        }, l = o ? c : function() {
                                            try {
                                                c();
                                            } catch (r) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(r, l.error), e + 1 >= i && (n !== Y && (s = void 0, 
                                                u = [ r ]), t.rejectWith(s, u));
                                            }
                                        };
                                        e ? l() : (C.Deferred.getErrorHook ? l.error = C.Deferred.getErrorHook() : C.Deferred.getStackHook && (l.error = C.Deferred.getStackHook()), 
                                        r.setTimeout(l));
                                    };
                                }
                                return C.Deferred((function(r) {
                                    t[0][3].add(a(0, r, y(o) ? o : V, r.notifyWith)), t[1][3].add(a(0, r, y(e) ? e : V)), 
                                    t[2][3].add(a(0, r, y(n) ? n : Y));
                                })).promise();
                            },
                            promise: function(e) {
                                return null != e ? C.extend(e, o) : o;
                            }
                        }, i = {};
                        return C.each(t, (function(e, r) {
                            var a = r[2], s = r[5];
                            o[r[1]] = a.add, s && a.add((function() {
                                n = s;
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), 
                            i[r[0]] = function() {
                                return i[r[0] + "With"](this === i ? void 0 : this, arguments), this;
                            }, i[r[0] + "With"] = a.fireWith;
                        })), o.promise(i), e && e.call(i, i), i;
                    },
                    when: function(e) {
                        var t = arguments.length, n = t, r = Array(n), o = s.call(arguments), i = C.Deferred(), a = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o);
                            };
                        };
                        if (t <= 1 && (Q(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                        for (;n--; ) Q(o[n], a(n), i.reject);
                        return i.promise();
                    }
                });
                var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                C.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && J.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                }, C.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e;
                    }));
                };
                var K = C.Deferred();
                function Z() {
                    b.removeEventListener("DOMContentLoaded", Z), r.removeEventListener("load", Z), 
                    C.ready();
                }
                C.fn.ready = function(e) {
                    return K.then(e).catch((function(e) {
                        C.readyException(e);
                    })), this;
                }, C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || K.resolveWith(b, [ C ]));
                    }
                }), C.ready.then = K.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", Z), 
                r.addEventListener("load", Z));
                var ee = function(e, t, n, r, o, i, a) {
                    var s = 0, u = e.length, c = null == n;
                    if ("object" === T(n)) for (s in o = !0, n) ee(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, 
                    y(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(C(e), n);
                    })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
                }, te = /^-ms-/, ne = /-([a-z])/g;
                function re(e, t) {
                    return t.toUpperCase();
                }
                function oe(e) {
                    return e.replace(te, "ms-").replace(ne, re);
                }
                var ie = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function ae() {
                    this.expando = C.expando + ae.uid++;
                }
                ae.uid = 1, ae.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t;
                    },
                    set: function(e, t, n) {
                        var r, o = this.cache(e);
                        if ("string" == typeof t) o[oe(t)] = n; else for (r in t) o[oe(r)] = t[r];
                        return o;
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                        void 0 !== n ? n : t);
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [ t ] : t.match(X) || []).length;
                                for (;n--; ) delete r[t[n]];
                            }
                            (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !C.isEmptyObject(t);
                    }
                };
                var se = new ae, ue = new ae, ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, le = /[A-Z]/g;
                function fe(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(le, "-$&").toLowerCase(), 
                    "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e);
                            }(n);
                        } catch (e) {}
                        ue.set(e, t, n);
                    } else n = void 0;
                    return n;
                }
                C.extend({
                    hasData: function(e) {
                        return ue.hasData(e) || se.hasData(e);
                    },
                    data: function(e, t, n) {
                        return ue.access(e, t, n);
                    },
                    removeData: function(e, t) {
                        ue.remove(e, t);
                    },
                    _data: function(e, t, n) {
                        return se.access(e, t, n);
                    },
                    _removeData: function(e, t) {
                        se.remove(e, t);
                    }
                }), C.fn.extend({
                    data: function(e, t) {
                        var n, r, o, i = this[0], a = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = ue.get(i), 1 === i.nodeType && !se.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = oe(r.slice(5)), 
                                fe(i, r, o[r]));
                                se.set(i, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e ? this.each((function() {
                            ue.set(this, e);
                        })) : ee(this, (function(t) {
                            var n;
                            if (i && void 0 === t) return void 0 !== (n = ue.get(i, e)) || void 0 !== (n = fe(i, e)) ? n : void 0;
                            this.each((function() {
                                ue.set(this, e, t);
                            }));
                        }), null, t, arguments.length > 1, null, !0);
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            ue.remove(this, e);
                        }));
                    }
                }), C.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = se.get(e, t), n && (!r || Array.isArray(n) ? r = se.access(e, t, C.makeArray(n)) : r.push(n)), 
                        r || [];
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = C.queue(e, t), r = n.length, o = n.shift(), i = C._queueHooks(e, t);
                        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
                        delete i.stop, o.call(e, (function() {
                            C.dequeue(e, t);
                        }), i)), !r && i && i.empty.fire();
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return se.get(e, n) || se.access(e, n, {
                            empty: C.Callbacks("once memory").add((function() {
                                se.remove(e, [ t + "queue", n ]);
                            }))
                        });
                    }
                }), C.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = C.queue(this, e, t);
                            C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                        }));
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            C.dequeue(this, e);
                        }));
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function(e, t) {
                        var n, r = 1, o = C.Deferred(), i = this, a = this.length, s = function() {
                            --r || o.resolveWith(i, [ i ]);
                        };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = se.get(i[a], e + "queueHooks")) && n.empty && (r++, 
                        n.empty.add(s));
                        return s(), o.promise(t);
                    }
                });
                var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), he = [ "Top", "Right", "Bottom", "Left" ], ve = b.documentElement, ge = function(e) {
                    return C.contains(e.ownerDocument, e);
                }, ye = {
                    composed: !0
                };
                ve.getRootNode && (ge = function(e) {
                    return C.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
                });
                var me = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ge(e) && "none" === C.css(e, "display");
                };
                function be(e, t, n, r) {
                    var o, i, a = 20, s = r ? function() {
                        return r.cur();
                    } : function() {
                        return C.css(e, t, "");
                    }, u = s(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), l = e.nodeType && (C.cssNumber[t] || "px" !== c && +u) && de.exec(C.css(e, t));
                    if (l && l[3] !== c) {
                        for (u /= 2, c = c || l[3], l = +u || 1; a--; ) C.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), 
                        l /= i;
                        l *= 2, C.style(e, t, l + c), n = n || [];
                    }
                    return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
                    r.start = l, r.end = o)), o;
                }
                var xe = {};
                function we(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, o = xe[r];
                    return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), 
                    t.parentNode.removeChild(t), "none" === o && (o = "block"), xe[r] = o, o);
                }
                function Te(e, t) {
                    for (var n, r, o = [], i = 0, a = e.length; i < a; i++) (r = e[i]).style && (n = r.style.display, 
                    t ? ("none" === n && (o[i] = se.get(r, "display") || null, o[i] || (r.style.display = "")), 
                    "" === r.style.display && me(r) && (o[i] = we(r))) : "none" !== n && (o[i] = "none", 
                    se.set(r, "display", n)));
                    for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                    return e;
                }
                C.fn.extend({
                    show: function() {
                        return Te(this, !0);
                    },
                    hide: function() {
                        return Te(this);
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            me(this) ? C(this).show() : C(this).hide();
                        }));
                    }
                });
                var ke, Ee, Ce = /^(?:checkbox|radio)$/i, Se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, _e = /^$|^module$|\/(?:java|ecma)script/i;
                ke = b.createDocumentFragment().appendChild(b.createElement("div")), (Ee = b.createElement("input")).setAttribute("type", "radio"), 
                Ee.setAttribute("checked", "checked"), Ee.setAttribute("name", "t"), ke.appendChild(Ee), 
                g.checkClone = ke.cloneNode(!0).cloneNode(!0).lastChild.checked, ke.innerHTML = "<textarea>x</textarea>", 
                g.noCloneChecked = !!ke.cloneNode(!0).lastChild.defaultValue, ke.innerHTML = "<option></option>", 
                g.option = !!ke.lastChild;
                var je = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                function Le(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                    void 0 === t || t && _(e, t) ? C.merge([ e ], n) : n;
                }
                function Ae(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
                }
                je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td, g.option || (je.optgroup = je.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
                var Ne = /<|&#?\w+;/;
                function De(e, t, n, r, o) {
                    for (var i, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === T(i)) C.merge(p, i.nodeType ? [ i ] : i); else if (Ne.test(i)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (Se.exec(i) || [ "", "" ])[1].toLowerCase(), 
                        u = je[s] || je._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], l = u[0]; l--; ) a = a.lastChild;
                        C.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
                    } else p.push(t.createTextNode(i));
                    for (f.textContent = "", d = 0; i = p[d++]; ) if (r && C.inArray(i, r) > -1) o && o.push(i); else if (c = ge(i), 
                    a = Le(f.appendChild(i), "script"), c && Ae(a), n) for (l = 0; i = a[l++]; ) _e.test(i.type || "") && n.push(i);
                    return f;
                }
                var Oe = /^([^.]*)(?:\.(.+)|)/;
                function qe() {
                    return !0;
                }
                function Pe() {
                    return !1;
                }
                function He(e, t, n, r, o, i) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) He(e, s, n, r, t[s], i);
                        return e;
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
                    r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Pe; else if (!o) return e;
                    return 1 === i && (a = o, (o = function(e) {
                        return C().off(e), a.apply(this, arguments);
                    }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                        C.event.add(this, t, o, r, n);
                    }));
                }
                function Re(e, t, n) {
                    n ? (se.set(e, t, !1), C.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = se.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r) (C.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                                se.set(this, t, r), this[t](), n = se.get(this, t), se.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), 
                                e.preventDefault(), n;
                            } else r && (se.set(this, t, C.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), 
                            e.isImmediatePropagationStopped = qe);
                        }
                    })) : void 0 === se.get(e, t) && C.event.add(e, t, qe);
                }
                C.event = {
                    global: {},
                    add: function(e, t, n, r, o) {
                        var i, a, s, u, c, l, f, p, d, h, v, g = se.get(e);
                        if (ie(e)) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ve, o), 
                        n.guid || (n.guid = C.guid++), (u = g.events) || (u = g.events = Object.create(null)), 
                        (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
                        }), c = (t = (t || "").match(X) || [ "" ]).length; c--; ) d = v = (s = Oe.exec(t[c]) || [])[1], 
                        h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, 
                        f = C.event.special[d] || {}, l = C.extend({
                            type: d,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                        f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
                        C.event.global[d] = !0);
                    },
                    remove: function(e, t, n, r, o) {
                        var i, a, s, u, c, l, f, p, d, h, v, g = se.hasData(e) && se.get(e);
                        if (g && (u = g.events)) {
                            for (c = (t = (t || "").match(X) || [ "" ]).length; c--; ) if (d = v = (s = Oe.exec(t[c]) || [])[1], 
                            h = (s[2] || "").split(".").sort(), d) {
                                for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) l = p[i], 
                                !o && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1), 
                                l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, d, g.handle), 
                                delete u[d]);
                            } else for (d in u) C.event.remove(e, d + t[c], n, r, !0);
                            C.isEmptyObject(u) && se.remove(e, "handle events");
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, o, i, a, s = new Array(arguments.length), u = C.event.fix(e), c = (se.get(this, "events") || Object.create(null))[u.type] || [], l = C.event.special[u.type] || {};
                        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                            for (a = C.event.handlers.call(this, u, c), t = 0; (o = a[t++]) && !u.isPropagationStopped(); ) for (u.currentTarget = o.elem, 
                            n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); ) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, 
                            u.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), 
                            u.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, u), u.result;
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, o, i, a, s = [], u = t.delegateCount, c = e.target;
                        if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [ c ]).length), 
                            a[o] && i.push(r);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            });
                        }
                        return c = this, u < t.length && s.push({
                            elem: c,
                            handlers: t.slice(u)
                        }), s;
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(C.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                });
                            }
                        });
                    },
                    fix: function(e) {
                        return e[C.expando] ? e : new C.Event(e);
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Ce.test(t.type) && t.click && _(t, "input") && Re(t, "click", !0), !1;
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Ce.test(t.type) && t.click && _(t, "input") && Re(t, "click"), !0;
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Ce.test(t.type) && t.click && _(t, "input") && se.get(t, "click") || _(t, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            }
                        }
                    }
                }, C.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }, C.Event = function(e, t) {
                    if (!(this instanceof C.Event)) return new C.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? qe : Pe, 
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                    this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                    t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
                }, C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: Pe,
                    isPropagationStopped: Pe,
                    isImmediatePropagationStopped: Pe,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = qe, e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = qe, e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = qe, e && !this.isSimulated && e.stopImmediatePropagation(), 
                        this.stopPropagation();
                    }
                }, C.each({
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
                    char: !0,
                    code: !0,
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
                    which: !0
                }, C.event.addProp), C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    function n(e) {
                        if (b.documentMode) {
                            var n = se.get(this, "handle"), r = C.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r);
                        } else C.event.simulate(t, e.target, C.event.fix(e));
                    }
                    C.event.special[e] = {
                        setup: function() {
                            var r;
                            if (Re(this, e, !0), !b.documentMode) return !1;
                            (r = se.get(this, t)) || this.addEventListener(t, n), se.set(this, t, (r || 0) + 1);
                        },
                        trigger: function() {
                            return Re(this, e), !0;
                        },
                        teardown: function() {
                            var e;
                            if (!b.documentMode) return !1;
                            (e = se.get(this, t) - 1) ? se.set(this, t, e) : (this.removeEventListener(t, n), 
                            se.remove(this, t));
                        },
                        _default: function(t) {
                            return se.get(t.target, e);
                        },
                        delegateType: t
                    }, C.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this, o = b.documentMode ? this : r, i = se.get(o, t);
                            i || (b.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), 
                            se.set(o, t, (i || 0) + 1);
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this, o = b.documentMode ? this : r, i = se.get(o, t) - 1;
                            i ? se.set(o, t, i) : (b.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), 
                            se.remove(o, t));
                        }
                    };
                })), C.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    C.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === this || C.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                            e.type = t), n;
                        }
                    };
                })), C.fn.extend({
                    on: function(e, t, n, r) {
                        return He(this, e, t, n, r);
                    },
                    one: function(e, t, n, r) {
                        return He(this, e, t, n, r, 1);
                    },
                    off: function(e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                        this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Pe), 
                        this.each((function() {
                            C.event.remove(this, e, n, t);
                        }));
                    }
                });
                var Me = /<script|<style|<link/i, Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function $e(e, t) {
                    return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
                }
                function We(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
                }
                function Be(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                    e;
                }
                function Ue(e, t) {
                    var n, r, o, i, a, s;
                    if (1 === t.nodeType) {
                        if (se.hasData(e) && (s = se.get(e).events)) for (o in se.remove(t, "handle events"), 
                        s) for (n = 0, r = s[o].length; n < r; n++) C.event.add(t, o, s[o][n]);
                        ue.hasData(e) && (i = ue.access(e), a = C.extend({}, i), ue.set(t, a));
                    }
                }
                function Ge(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
                }
                function ze(e, t, n, r) {
                    t = u(t);
                    var o, i, a, s, c, l, f = 0, p = e.length, d = p - 1, h = t[0], v = y(h);
                    if (v || p > 1 && "string" == typeof h && !g.checkClone && Ie.test(h)) return e.each((function(o) {
                        var i = e.eq(o);
                        v && (t[0] = h.call(this, o, i.html())), ze(i, t, n, r);
                    }));
                    if (p && (i = (o = De(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
                    i || r)) {
                        for (s = (a = C.map(Le(o, "script"), We)).length; f < p; f++) c = o, f !== d && (c = C.clone(c, !0, !0), 
                        s && C.merge(a, Le(c, "script"))), n.call(e[f], c, f);
                        if (s) for (l = a[a.length - 1].ownerDocument, C.map(a, Be), f = 0; f < s; f++) c = a[f], 
                        _e.test(c.type || "") && !se.access(c, "globalEval") && C.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, l) : w(c.textContent.replace(Fe, ""), c, l));
                    }
                    return e;
                }
                function Xe(e, t, n) {
                    for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(Le(r)), 
                    r.parentNode && (n && ge(r) && Ae(Le(r, "script")), r.parentNode.removeChild(r));
                    return e;
                }
                C.extend({
                    htmlPrefilter: function(e) {
                        return e;
                    },
                    clone: function(e, t, n) {
                        var r, o, i, a, s = e.cloneNode(!0), u = ge(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = Le(s), 
                        r = 0, o = (i = Le(e)).length; r < o; r++) Ge(i[r], a[r]);
                        if (t) if (n) for (i = i || Le(e), a = a || Le(s), r = 0, o = i.length; r < o; r++) Ue(i[r], a[r]); else Ue(e, s);
                        return (a = Le(s, "script")).length > 0 && Ae(a, !u && Le(e, "script")), s;
                    },
                    cleanData: function(e) {
                        for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) if (ie(n)) {
                            if (t = n[se.expando]) {
                                if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[se.expando] = void 0;
                            }
                            n[ue.expando] && (n[ue.expando] = void 0);
                        }
                    }
                }), C.fn.extend({
                    detach: function(e) {
                        return Xe(this, e, !0);
                    },
                    remove: function(e) {
                        return Xe(this, e);
                    },
                    text: function(e) {
                        return ee(this, (function(e) {
                            return void 0 === e ? C.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                            }));
                        }), null, e, arguments.length);
                    },
                    append: function() {
                        return ze(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e);
                        }));
                    },
                    prepend: function() {
                        return ze(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = $e(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return ze(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        }));
                    },
                    after: function() {
                        return ze(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(Le(e, !1)), 
                        e.textContent = "");
                        return this;
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return C.clone(this, e, t);
                        }));
                    },
                    html: function(e) {
                        return ee(this, (function(e) {
                            var t = this[0] || {}, n = 0, r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !Me.test(e) && !je[(Se.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                                e = C.htmlPrefilter(e);
                                try {
                                    for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(Le(t, !1)), 
                                    t.innerHTML = e);
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        }), null, e, arguments.length);
                    },
                    replaceWith: function() {
                        var e = [];
                        return ze(this, arguments, (function(t) {
                            var n = this.parentNode;
                            C.inArray(this, e) < 0 && (C.cleanData(Le(this)), n && n.replaceChild(t, this));
                        }), e);
                    }
                }), C.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    C.fn[e] = function(e) {
                        for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), 
                        C(o[a])[t](n), c.apply(r, n.get());
                        return this.pushStack(r);
                    };
                }));
                var Ve = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Ye = /^--/, Qe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r), t.getComputedStyle(e);
                }, Je = function(e, t, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.call(e), t) e.style[o] = i[o];
                    return r;
                }, Ke = new RegExp(he.join("|"), "i");
                function Ze(e, t, n) {
                    var r, o, i, a, s = Ye.test(t), u = e.style;
                    return (n = n || Qe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(D, "$1") || void 0), 
                    "" !== a || ge(e) || (a = C.style(e, t)), !g.pixelBoxStyles() && Ve.test(a) && Ke.test(t) && (r = u.width, 
                    o = u.minWidth, i = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, 
                    u.width = r, u.minWidth = o, u.maxWidth = i)), void 0 !== a ? a + "" : a;
                }
                function et(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                !function() {
                    function e() {
                        if (l) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                            l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                            ve.appendChild(c).appendChild(l);
                            var e = r.getComputedStyle(l);
                            n = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), 
                            o = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
                            ve.removeChild(c), l = null;
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e));
                    }
                    var n, o, i, a, s, u, c = b.createElement("div"), l = b.createElement("div");
                    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
                    g.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o;
                        },
                        pixelBoxStyles: function() {
                            return e(), a;
                        },
                        pixelPosition: function() {
                            return e(), n;
                        },
                        reliableMarginLeft: function() {
                            return e(), u;
                        },
                        scrollboxSize: function() {
                            return e(), i;
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, o;
                            return null == s && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), 
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", 
                            t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ve.appendChild(e).appendChild(t).appendChild(n), 
                            o = r.getComputedStyle(t), s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, 
                            ve.removeChild(e)), s;
                        }
                    }));
                }();
                var tt = [ "Webkit", "Moz", "ms" ], nt = b.createElement("div").style, rt = {};
                function ot(e) {
                    return C.cssProps[e] || rt[e] || (e in nt ? e : rt[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                    }(e) || e);
                }
                var it = /^(none|table(?!-c[ea]).+)/, at = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, st = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function ut(e, t, n) {
                    var r = de.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                }
                function ct(e, t, n, r, o, i) {
                    var a = "width" === t ? 1 : 0, s = 0, u = 0, c = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (;a < 4; a += 2) "margin" === n && (c += C.css(e, n + he[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + he[a], !0, o)), 
                    "margin" !== n && (u -= C.css(e, "border" + he[a] + "Width", !0, o))) : (u += C.css(e, "padding" + he[a], !0, o), 
                    "padding" !== n ? u += C.css(e, "border" + he[a] + "Width", !0, o) : s += C.css(e, "border" + he[a] + "Width", !0, o));
                    return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), 
                    u + c;
                }
                function lt(e, t, n) {
                    var r = Qe(e), o = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r), i = o, a = Ze(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Ve.test(a)) {
                        if (!n) return a;
                        a = "auto";
                    }
                    return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && _(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), 
                    (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ct(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
                }
                function ft(e, t, n, r, o) {
                    return new ft.prototype.init(e, t, n, r, o);
                }
                C.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ze(e, "opacity");
                                    return "" === n ? "1" : n;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, i, a, s = oe(t), u = Ye.test(t), c = e.style;
                            if (u || (t = ot(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                            "string" == (i = typeof n) && (o = de.exec(n)) && o[1] && (n = be(e, t, o), i = "number"), 
                            null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), 
                            g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
                            a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
                        }
                    },
                    css: function(e, t, n, r) {
                        var o, i, a, s = oe(t);
                        return Ye.test(t) || (t = ot(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
                        void 0 === o && (o = Ze(e, t, r)), "normal" === o && t in st && (o = st[t]), "" === n || n ? (i = parseFloat(o), 
                        !0 === n || isFinite(i) ? i || 0 : o) : o;
                    }
                }), C.each([ "height", "width" ], (function(e, t) {
                    C.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !it.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, t, r) : Je(e, at, (function() {
                                return lt(e, t, r);
                            }));
                        },
                        set: function(e, n, r) {
                            var o, i = Qe(e), a = !g.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i), u = r ? ct(e, t, r, s, i) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ct(e, t, "border", !1, i) - .5)), 
                            u && (o = de.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), 
                            ut(0, n, u);
                        }
                    };
                })), C.cssHooks.marginLeft = et(g.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left;
                    }))) + "px";
                })), C.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    C.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                            return o;
                        }
                    }, "margin" !== e && (C.cssHooks[e + t].set = ut);
                })), C.fn.extend({
                    css: function(e, t) {
                        return ee(this, (function(e, t, n) {
                            var r, o, i = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Qe(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                                return i;
                            }
                            return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                        }), e, t, arguments.length > 1);
                    }
                }), C.Tween = ft, ft.prototype = {
                    constructor: ft,
                    init: function(e, t, n, r, o, i) {
                        this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, 
                        this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px");
                    },
                    cur: function() {
                        var e = ft.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
                    },
                    run: function(e) {
                        var t, n = ft.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                        this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                        n && n.set ? n.set(this) : ft.propHooks._default.set(this), this;
                    }
                }, ft.prototype.init.prototype = ft.prototype, ft.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                        },
                        set: function(e) {
                            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
                        }
                    }
                }, ft.propHooks.scrollTop = ft.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    }
                }, C.easing = {
                    linear: function(e) {
                        return e;
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing"
                }, C.fx = ft.prototype.init, C.fx.step = {};
                var pt, dt, ht = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
                function gt() {
                    dt && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(gt) : r.setTimeout(gt, C.fx.interval), 
                    C.fx.tick());
                }
                function yt() {
                    return r.setTimeout((function() {
                        pt = void 0;
                    })), pt = Date.now();
                }
                function mt(e, t) {
                    var n, r = 0, o = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = he[r])] = o["padding" + n] = e;
                    return t && (o.opacity = o.width = e), o;
                }
                function bt(e, t, n) {
                    for (var r, o = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r;
                }
                function xt(e, t, n) {
                    var r, o, i = 0, a = xt.prefilters.length, s = C.Deferred().always((function() {
                        delete u.elem;
                    })), u = function() {
                        if (o) return !1;
                        for (var t = pt || yt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                        return s.notifyWith(e, [ c, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ c, 1, 0 ]), 
                        s.resolveWith(e, [ c ]), !1);
                    }, c = s.promise({
                        elem: e,
                        props: C.extend({}, t),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: pt || yt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r;
                        },
                        stop: function(t) {
                            var n = 0, r = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
                            this;
                        }
                    }), l = c.props;
                    for (function(e, t) {
                        var n, r, o, i, a;
                        for (n in e) if (o = t[r = oe(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
                        n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), 
                        delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
                    }(l, c.opts.specialEasing); i < a; i++) if (r = xt.prefilters[i].call(c, e, l, c.opts)) return y(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), 
                    r;
                    return C.map(l, bt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
                    C.fx.timer(C.extend(u, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })), c;
                }
                C.Animation = C.extend(xt, {
                    tweeners: {
                        "*": [ function(e, t) {
                            var n = this.createTween(e, t);
                            return be(n.elem, e, de.exec(t), n), n;
                        } ]
                    },
                    tweener: function(e, t) {
                        y(e) ? (t = e, e = [ "*" ]) : e = e.match(X);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], xt.tweeners[n] = xt.tweeners[n] || [], 
                        xt.tweeners[n].unshift(t);
                    },
                    prefilters: [ function(e, t, n) {
                        var r, o, i, a, s, u, c, l, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, v = e.nodeType && me(e), g = se.get(e, "fxshow");
                        for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
                        s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s();
                        }), a.unqueued++, p.always((function() {
                            p.always((function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                            }));
                        }))), t) if (o = t[r], ht.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (v ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[r]) continue;
                                v = !0;
                            }
                            d[r] = g && g[r] || C.style(e, r);
                        }
                        if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                        null == (c = g && g.display) && (c = se.get(e, "display")), "none" === (l = C.css(e, "display")) && (c ? l = c : (Te([ e ], !0), 
                        c = e.style.display || c, l = C.css(e, "display"), Te([ e ]))), ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (p.done((function() {
                            h.display = c;
                        })), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), 
                        n.overflow && (h.overflow = "hidden", p.always((function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                        }))), u = !1, d) u || (g ? "hidden" in g && (v = g.hidden) : g = se.access(e, "fxshow", {
                            display: c
                        }), i && (g.hidden = !v), v && Te([ e ], !0), p.done((function() {
                            for (r in v || Te([ e ]), se.remove(e, "fxshow"), d) C.style(e, r, d[r]);
                        }))), u = bt(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, 
                        u.start = 0));
                    } ],
                    prefilter: function(e, t) {
                        t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
                    }
                }), C.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? C.extend({}, e) : {
                        complete: n || !n && t || y(e) && e,
                        duration: e,
                        easing: n && t || t && !y(t) && t
                    };
                    return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), 
                    null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
                    }, r;
                }, C.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(me).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r);
                    },
                    animate: function(e, t, n, r) {
                        var o = C.isEmptyObject(e), i = C.speed(t, n, r), a = function() {
                            var t = xt(this, C.extend({}, e), i);
                            (o || se.get(this, "finish")) && t.stop(!0);
                        };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), 
                        this.each((function() {
                            var t = !0, o = null != e && e + "queueHooks", i = C.timers, a = se.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                            for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
                            t = !1, i.splice(o, 1));
                            !t && n || C.dequeue(this, e);
                        }));
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = se.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = C.timers, a = r ? r.length : 0;
                            for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                            t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                            i.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        }));
                    }
                }), C.each([ "toggle", "show", "hide" ], (function(e, t) {
                    var n = C.fn[t];
                    C.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, r, o);
                    };
                })), C.each({
                    slideDown: mt("show"),
                    slideUp: mt("hide"),
                    slideToggle: mt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    C.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                })), C.timers = [], C.fx.tick = function() {
                    var e, t = 0, n = C.timers;
                    for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || C.fx.stop(), pt = void 0;
                }, C.fx.timer = function(e) {
                    C.timers.push(e), C.fx.start();
                }, C.fx.interval = 13, C.fx.start = function() {
                    dt || (dt = !0, gt());
                }, C.fx.stop = function() {
                    dt = null;
                }, C.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, C.fn.delay = function(e, t) {
                    return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                        var o = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(o);
                        };
                    }));
                }, function() {
                    var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", 
                    e.type = "radio", g.radioValue = "t" === e.value;
                }();
                var wt, Tt = C.expr.attrHandle;
                C.fn.extend({
                    attr: function(e, t) {
                        return ee(this, C.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            C.removeAttr(this, e);
                        }));
                    }
                }), C.extend({
                    attr: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? wt : void 0)), 
                        void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                        n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && _(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, o = t && t.match(X);
                        if (o && 1 === e.nodeType) for (;n = o[r++]; ) e.removeAttribute(n);
                    }
                }), wt = {
                    set: function(e, t, n) {
                        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
                    }
                }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = Tt[t] || C.find.attr;
                    Tt[t] = function(e, t, r) {
                        var o, i, a = t.toLowerCase();
                        return r || (i = Tt[a], Tt[a] = o, o = null != n(e, t, r) ? a : null, Tt[a] = i), 
                        o;
                    };
                }));
                var kt = /^(?:input|select|textarea|button)$/i, Et = /^(?:a|area)$/i;
                function Ct(e) {
                    return (e.match(X) || []).join(" ");
                }
                function St(e) {
                    return e.getAttribute && e.getAttribute("class") || "";
                }
                function _t(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(X) || [];
                }
                C.fn.extend({
                    prop: function(e, t) {
                        return ee(this, C.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[C.propFix[e] || e];
                        }));
                    }
                }), C.extend({
                    prop: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, 
                        o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = C.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : kt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (C.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                    }
                }), C.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    C.propFix[this.toLowerCase()] = this;
                })), C.fn.extend({
                    addClass: function(e) {
                        var t, n, r, o, i, a;
                        return y(e) ? this.each((function(t) {
                            C(this).addClass(e.call(this, t, St(this)));
                        })) : (t = _t(e)).length ? this.each((function() {
                            if (r = St(this), n = 1 === this.nodeType && " " + Ct(r) + " ") {
                                for (i = 0; i < t.length; i++) o = t[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                a = Ct(n), r !== a && this.setAttribute("class", a);
                            }
                        })) : this;
                    },
                    removeClass: function(e) {
                        var t, n, r, o, i, a;
                        return y(e) ? this.each((function(t) {
                            C(this).removeClass(e.call(this, t, St(this)));
                        })) : arguments.length ? (t = _t(e)).length ? this.each((function() {
                            if (r = St(this), n = 1 === this.nodeType && " " + Ct(r) + " ") {
                                for (i = 0; i < t.length; i++) for (o = t[i]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                                a = Ct(n), r !== a && this.setAttribute("class", a);
                            }
                        })) : this : this.attr("class", "");
                    },
                    toggleClass: function(e, t) {
                        var n, r, o, i, a = typeof e, s = "string" === a || Array.isArray(e);
                        return y(e) ? this.each((function(n) {
                            C(this).toggleClass(e.call(this, n, St(this), t), t);
                        })) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = _t(e), 
                        this.each((function() {
                            if (s) for (i = C(this), o = 0; o < n.length; o++) r = n[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r); else void 0 !== e && "boolean" !== a || ((r = St(this)) && se.set(this, "__className__", r), 
                            this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : se.get(this, "__className__") || ""));
                        })));
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + Ct(St(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    }
                });
                var jt = /\r/g;
                C.fn.extend({
                    val: function(e) {
                        var t, n, r, o = this[0];
                        return arguments.length ? (r = y(e), this.each((function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                                return null == e ? "" : e + "";
                            }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
                        }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(jt, "") : null == n ? "" : n : void 0;
                    }
                }), C.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = C.find.attr(e, "value");
                                return null != t ? t : Ct(C.text(e));
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                                for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))) {
                                    if (t = C(n).val(), a) return t;
                                    s.push(t);
                                }
                                return s;
                            },
                            set: function(e, t) {
                                for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            }
                        }
                    }
                }), C.each([ "radio", "checkbox" ], (function() {
                    C.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
                        }
                    }, g.checkOn || (C.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
                }));
                var Lt = r.location, At = {
                    guid: Date.now()
                }, Nt = /\?/;
                C.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml");
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, (function(e) {
                        return e.textContent;
                    })).join("\n") : e)), t;
                };
                var Dt = /^(?:focusinfocus|focusoutblur)$/, Ot = function(e) {
                    e.stopPropagation();
                };
                C.extend(C.event, {
                    trigger: function(e, t, n, o) {
                        var i, a, s, u, c, l, f, p, h = [ n || b ], v = d.call(e, "type") ? e.type : e, g = d.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = p = s = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), 
                        v = g.shift(), g.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
                        e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                        e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : C.makeArray(t, [ e ]), 
                        f = C.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                            if (!o && !f.noBubble && !m(n)) {
                                for (u = f.delegateType || v, Dt.test(u + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                                s = a;
                                s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r);
                            }
                            for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); ) p = a, e.type = i > 1 ? u : f.bindType || v, 
                            (l = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && l.apply(a, t), 
                            (l = c && a[c]) && l.apply && ie(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = v, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !ie(n) || c && y(n[v]) && !m(n) && ((s = n[c]) && (n[c] = null), 
                            C.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, Ot), n[v](), 
                            e.isPropagationStopped() && p.removeEventListener(v, Ot), C.event.triggered = void 0, 
                            s && (n[c] = s)), e.result;
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = C.extend(new C.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        C.event.trigger(r, null, t);
                    }
                }), C.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            C.event.trigger(e, t, this);
                        }));
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return C.event.trigger(e, t, n, !0);
                    }
                });
                var qt = /\[\]$/, Pt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Rt = /^(?:input|select|textarea|keygen)/i;
                function Mt(e, t, n, r) {
                    var o;
                    if (Array.isArray(t)) C.each(t, (function(t, o) {
                        n || qt.test(e) ? r(e, o) : Mt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
                    })); else if (n || "object" !== T(t)) r(e, t); else for (o in t) Mt(e + "[" + o + "]", t[o], n, r);
                }
                C.param = function(e, t) {
                    var n, r = [], o = function(e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                        o(this.name, this.value);
                    })); else for (n in e) Mt(n, e[n], t, o);
                    return r.join("&");
                }, C.fn.extend({
                    serialize: function() {
                        return C.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = C.prop(this, "elements");
                            return e ? C.makeArray(e) : this;
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !Ht.test(e) && (this.checked || !Ce.test(e));
                        })).map((function(e, t) {
                            var n = C(this).val();
                            return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Pt, "\r\n")
                                };
                            })) : {
                                name: t.name,
                                value: n.replace(Pt, "\r\n")
                            };
                        })).get();
                    }
                });
                var It = /%20/g, Ft = /#.*$/, $t = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Bt = /^(?:GET|HEAD)$/, Ut = /^\/\//, Gt = {}, zt = {}, Xt = "*/".concat("*"), Vt = b.createElement("a");
                function Yt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, o = 0, i = t.toLowerCase().match(X) || [];
                        if (y(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                    };
                }
                function Qt(e, t, n, r) {
                    var o = {}, i = e === zt;
                    function a(s) {
                        var u;
                        return o[s] = !0, C.each(e[s] || [], (function(e, s) {
                            var c = s(t, n, r);
                            return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
                            a(c), !1);
                        })), u;
                    }
                    return a(t.dataTypes[0]) || !o["*"] && a("*");
                }
                function Jt(e, t) {
                    var n, r, o = C.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && C.extend(!0, e, r), e;
                }
                Vt.href = Lt.href, C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Lt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Xt,
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
                            "text xml": C.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Jt(Jt(e, C.ajaxSettings), t) : Jt(C.ajaxSettings, e);
                    },
                    ajaxPrefilter: Yt(Gt),
                    ajaxTransport: Yt(zt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var n, o, i, a, s, u, c, l, f, p, d = C.ajaxSetup({}, t), h = d.context || d, v = d.context && (h.nodeType || h.jquery) ? C(h) : C.event, g = C.Deferred(), y = C.Callbacks("once memory"), m = d.statusCode || {}, x = {}, w = {}, T = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a) for (a = {}; t = Wt.exec(i); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "];
                                }
                                return null == t ? null : t.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return c ? i : null;
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), 
                                this;
                            },
                            overrideMimeType: function(e) {
                                return null == c && (d.mimeType = e), this;
                            },
                            statusCode: function(e) {
                                var t;
                                if (e) if (c) k.always(e[k.status]); else for (t in e) m[t] = [ m[t], e[t] ];
                                return this;
                            },
                            abort: function(e) {
                                var t = e || T;
                                return n && n.abort(t), E(0, t), this;
                            }
                        };
                        if (g.promise(k), d.url = ((e || d.url || Lt.href) + "").replace(Ut, Lt.protocol + "//"), 
                        d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [ "" ], 
                        null == d.crossDomain) {
                            u = b.createElement("a");
                            try {
                                u.href = d.url, u.href = u.href, d.crossDomain = Vt.protocol + "//" + Vt.host != u.protocol + "//" + u.host;
                            } catch (e) {
                                d.crossDomain = !0;
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = C.param(d.data, d.traditional)), 
                        Qt(Gt, d, t, k), c) return k;
                        for (f in (l = C.event && d.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), 
                        d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), o = d.url.replace(Ft, ""), 
                        d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(It, "+")) : (p = d.url.slice(o.length), 
                        d.data && (d.processData || "string" == typeof d.data) && (o += (Nt.test(o) ? "&" : "?") + d.data, 
                        delete d.data), !1 === d.cache && (o = o.replace($t, "$1"), p = (Nt.test(o) ? "&" : "?") + "_=" + At.guid++ + p), 
                        d.url = o + p), d.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]), 
                        C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && k.setRequestHeader("Content-Type", d.contentType), 
                        k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]), 
                        d.headers) k.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, k, d) || c)) return k.abort();
                        if (T = "abort", y.add(d.complete), k.done(d.success), k.fail(d.error), n = Qt(zt, d, t, k)) {
                            if (k.readyState = 1, l && v.trigger("ajaxSend", [ k, d ]), c) return k;
                            d.async && d.timeout > 0 && (s = r.setTimeout((function() {
                                k.abort("timeout");
                            }), d.timeout));
                            try {
                                c = !1, n.send(x, E);
                            } catch (e) {
                                if (c) throw e;
                                E(-1, e);
                            }
                        } else E(-1, "No Transport");
                        function E(e, t, a, u) {
                            var f, p, b, x, w, T = t;
                            c || (c = !0, s && r.clearTimeout(s), n = void 0, i = u || "", k.readyState = e > 0 ? 4 : 0, 
                            f = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) {
                                for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) for (o in s) if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break;
                                }
                                if (u[0] in n) i = u[0]; else {
                                    for (o in n) {
                                        if (!u[0] || e.converters[o + " " + u[0]]) {
                                            i = o;
                                            break;
                                        }
                                        a || (a = o);
                                    }
                                    i = i || a;
                                }
                                if (i) return i !== u[0] && u.unshift(i), n[i];
                            }(d, k, a)), !f && C.inArray("script", d.dataTypes) > -1 && C.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), 
                            x = function(e, t, n, r) {
                                var o, i, a, s, u, c = {}, l = e.dataTypes.slice();
                                if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
                                    if (!(a = c[u + " " + i] || c["* " + i])) for (o in c) if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                        !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
                                        break;
                                    }
                                    if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                        t = a(t);
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + i
                                        };
                                    }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            }(d, x, k, f), f ? (d.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), 
                            (w = k.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, 
                            p = x.data, f = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), 
                            k.status = e, k.statusText = (t || T) + "", f ? g.resolveWith(h, [ p, T, k ]) : g.rejectWith(h, [ k, T, b ]), 
                            k.statusCode(m), m = void 0, l && v.trigger(f ? "ajaxSuccess" : "ajaxError", [ k, d, f ? p : b ]), 
                            y.fireWith(h, [ k, T ]), l && (v.trigger("ajaxComplete", [ k, d ]), --C.active || C.event.trigger("ajaxStop")));
                        }
                        return k;
                    },
                    getJSON: function(e, t, n) {
                        return C.get(e, t, n, "json");
                    },
                    getScript: function(e, t) {
                        return C.get(e, void 0, t, "script");
                    }
                }), C.each([ "get", "post" ], (function(e, t) {
                    C[t] = function(e, n, r, o) {
                        return y(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
                            url: e,
                            type: t,
                            dataType: o,
                            data: n,
                            success: r
                        }, C.isPlainObject(e) && e));
                    };
                })), C.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                })), C._evalUrl = function(e, t, n) {
                    return C.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            C.globalEval(e, t, n);
                        }
                    });
                }, C.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), 
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                            return e;
                        })).append(this)), this;
                    },
                    wrapInner: function(e) {
                        return y(e) ? this.each((function(t) {
                            C(this).wrapInner(e.call(this, t));
                        })) : this.each((function() {
                            var t = C(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e);
                        }));
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each((function(n) {
                            C(this).wrapAll(t ? e.call(this, n) : e);
                        }));
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            C(this).replaceWith(this.childNodes);
                        })), this;
                    }
                }), C.expr.pseudos.hidden = function(e) {
                    return !C.expr.pseudos.visible(e);
                }, C.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }, C.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest;
                    } catch (e) {}
                };
                var Kt = {
                    0: 200,
                    1223: 204
                }, Zt = C.ajaxSettings.xhr();
                g.cors = !!Zt && "withCredentials" in Zt, g.ajax = Zt = !!Zt, C.ajaxTransport((function(e) {
                    var t, n;
                    if (g.cors || Zt && !e.crossDomain) return {
                        send: function(o, i) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
                            o) s.setRequestHeader(a, o[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()));
                                };
                            }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                4 === s.readyState && r.setTimeout((function() {
                                    t && n();
                                }));
                            }, t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null);
                            } catch (e) {
                                if (t) throw e;
                            }
                        },
                        abort: function() {
                            t && t();
                        }
                    };
                })), C.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1);
                })), C.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return C.globalEval(e), e;
                        }
                    }
                }), C.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                })), C.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, o) {
                            t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                            }), b.head.appendChild(t[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }));
                var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
                C.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = tn.pop() || C.expando + "_" + At.guid++;
                        return this[e] = !0, e;
                    }
                }), C.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var o, i, a, s = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                    s ? e[s] = e[s].replace(nn, "$1" + o) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
                    e.converters["script json"] = function() {
                        return a || C.error(o + " was not called"), a[0];
                    }, e.dataTypes[0] = "json", i = r[o], r[o] = function() {
                        a = arguments;
                    }, n.always((function() {
                        void 0 === i ? C(r).removeProp(o) : r[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
                        tn.push(o)), a && y(i) && i(a[0]), a = i = void 0;
                    })), "script";
                })), g.createHTMLDocument = ((en = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
                2 === en.childNodes.length), C.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, 
                    t.head.appendChild(r)) : t = b), i = !n && [], (o = F.exec(e)) ? [ t.createElement(o[1]) ] : (o = De([ e ], t, i), 
                    i && i.length && C(i).remove(), C.merge([], o.childNodes)));
                    var r, o, i;
                }, C.fn.load = function(e, t, n) {
                    var r, o, i, a = this, s = e.indexOf(" ");
                    return s > -1 && (r = Ct(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
                    a.length > 0 && C.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
                    })).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, i || [ e.responseText, t, e ]);
                        }));
                    }), this;
                }, C.expr.pseudos.animated = function(e) {
                    return C.grep(C.timers, (function(t) {
                        return e === t.elem;
                    })).length;
                }, C.offset = {
                    setOffset: function(e, t, n) {
                        var r, o, i, a, s, u, c = C.css(e, "position"), l = C(e), f = {};
                        "static" === c && (e.style.position = "relative"), s = l.offset(), i = C.css(e, "top"), 
                        u = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, 
                        o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), 
                        null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), 
                        "using" in t ? t.using.call(e, f) : l.css(f);
                    }
                }, C.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            C.offset.setOffset(this, e, t);
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0;
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], o = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect(); else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), 
                                o.left += C.css(e, "borderLeftWidth", !0));
                            }
                            return {
                                top: t.top - o.top - C.css(r, "marginTop", !0),
                                left: t.left - o.left - C.css(r, "marginLeft", !0)
                            };
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
                            return e || ve;
                        }));
                    }
                }), C.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    C.fn[e] = function(r) {
                        return ee(this, (function(e, r, o) {
                            var i;
                            if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                            i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
                        }), e, r, arguments.length);
                    };
                })), C.each([ "top", "left" ], (function(e, t) {
                    C.cssHooks[t] = et(g.pixelPosition, (function(e, n) {
                        if (n) return n = Ze(e, t), Ve.test(n) ? C(e).position()[t] + "px" : n;
                    }));
                })), C.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    C.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        C.fn[r] = function(o, i) {
                            var a = arguments.length && (n || "boolean" != typeof o), s = n || (!0 === o || !0 === i ? "margin" : "border");
                            return ee(this, (function(t, n, o) {
                                var i;
                                return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                                Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s);
                            }), t, a ? o : void 0, a);
                        };
                    }));
                })), C.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                    C.fn[t] = function(e) {
                        return this.on(t, e);
                    };
                })), C.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e);
                    }
                }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    C.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }));
                var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                C.proxy = function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), 
                    (o = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                    }).guid = e.guid = e.guid || C.guid++, o;
                }, C.holdReady = function(e) {
                    e ? C.readyWait++ : C.ready(!0);
                }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = _, C.isFunction = y, 
                C.isWindow = m, C.camelCase = oe, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                    var t = C.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }, C.trim = function(e) {
                    return null == e ? "" : (e + "").replace(rn, "$1");
                }, void 0 === (n = function() {
                    return C;
                }.apply(t, [])) || (e.exports = n);
                var on = r.jQuery, an = r.$;
                return C.noConflict = function(e) {
                    return r.$ === C && (r.$ = an), e && r.jQuery === C && (r.jQuery = on), C;
                }, void 0 === o && (r.jQuery = r.$ = C), C;
            }));
        }
    }, t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports;
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t;
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        });
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = n(638), t = n.n(e);
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function o(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== r(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t);
                        if ("object" !== r(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e, "string");
                return "symbol" === r(t) ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ i = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, o = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                l({}, "");
            } catch (e) {
                l = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function f(e, t, n, r) {
                var i = t && t.prototype instanceof h ? t : h, a = Object.create(i.prototype), s = new _(r || []);
                return o(a, "_invoke", {
                    value: k(e, n, s)
                }), a;
            }
            function p(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = f;
            var d = {};
            function h() {}
            function v() {}
            function g() {}
            var y = {};
            l(y, s, (function() {
                return this;
            }));
            var m = Object.getPrototypeOf, b = m && m(m(j([])));
            b && b !== t && n.call(b, s) && (y = b);
            var x = g.prototype = h.prototype = Object.create(y);
            function w(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    l(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function T(e, t) {
                function i(o, a, s, u) {
                    var c = p(e[o], e, a);
                    if ("throw" !== c.type) {
                        var l = c.arg, f = l.value;
                        return f && "object" == r(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            i("next", e, s, u);
                        }), (function(e) {
                            i("throw", e, s, u);
                        })) : t.resolve(f).then((function(e) {
                            l.value = e, s(l);
                        }), (function(e) {
                            return i("throw", e, s, u);
                        }));
                    }
                    u(c.arg);
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                i(e, n, t, r);
                            }));
                        }
                        return a = a ? a.then(r, r) : r();
                    }
                });
            }
            function k(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === d) continue;
                                return s;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = p(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === d) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function E(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = p(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, d);
            }
            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function _(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(C, this), this.reset(!0);
            }
            function j(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return v.prototype = g, o(x, "constructor", {
                value: g,
                configurable: !0
            }), o(g, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = l(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, l(e, c, "GeneratorFunction")), 
                e.prototype = Object.create(x), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, w(T.prototype), l(T.prototype, u, (function() {
                return this;
            })), e.AsyncIterator = T, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new T(f(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next();
                }));
            }, w(x), l(x, c, "Generator"), l(x, s, (function() {
                return this;
            })), l(x, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = j, _.prototype = {
                constructor: _,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(a);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    d;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: j(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), u = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function s(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function s(e) {
                        a(i, r, o, s, u, "next", e);
                    }
                    function u(e) {
                        a(i, r, o, s, u, "throw", e);
                    }
                    s(void 0);
                }));
            };
        }
        var u = self.browser instanceof Object && self.browser instanceof Element == 0 ? self.browser : self.chrome, c = (u.declarativeNetRequest, 
        u.i18n, u.runtime);
        function l(e) {
            return new Promise((function(t, n) {
                var r = 5;
                !function o() {
                    c.sendMessage(e).then((function(e) {
                        t(e);
                    })).catch((function(e) {
                        (r -= 1) <= 0 ? n(e) : setTimeout(o, 200);
                    }));
                }();
            }));
        }
        function f(e) {
            return p.apply(this, arguments);
        }
        function p() {
            return (p = s(i().mark((function e(t) {
                var n, r;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (u.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (u.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.prev = 4, e.next = 7, u.storage.local.get(t);

                      case 7:
                        if ((n = e.sent) instanceof Object != 0) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        return r = void 0 === n[t] ? "darkTheme" !== t && ("modeLevel" === t ? 1 : "userRules" === t || "allowlist" === t ? [] : void 0) : n[t], 
                        e.abrupt("return", r);

                      case 14:
                        e.prev = 14, e.t0 = e.catch(4);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 4, 14 ] ]);
            })))).apply(this, arguments);
        }
        function d(e, t) {
            return h.apply(this, arguments);
        }
        function h() {
            return (h = s(i().mark((function e(t, n) {
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (u.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (u.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.abrupt("return", u.storage.local.set(o({}, t, n)));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })))).apply(this, arguments);
        }
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function g() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ g = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                u({}, "");
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function c(e, t, n, o) {
                var i = t && t.prototype instanceof p ? t : p, a = Object.create(i.prototype), s = new _(o || []);
                return r(a, "_invoke", {
                    value: k(e, n, s)
                }), a;
            }
            function l(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = c;
            var f = {};
            function p() {}
            function d() {}
            function h() {}
            var y = {};
            u(y, i, (function() {
                return this;
            }));
            var m = Object.getPrototypeOf, b = m && m(m(j([])));
            b && b !== t && n.call(b, i) && (y = b);
            var x = h.prototype = p.prototype = Object.create(y);
            function w(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function T(e, t) {
                function o(r, i, a, s) {
                    var u = l(e[r], e, i);
                    if ("throw" !== u.type) {
                        var c = u.arg, f = c.value;
                        return f && "object" == v(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            o("next", e, a, s);
                        }), (function(e) {
                            o("throw", e, a, s);
                        })) : t.resolve(f).then((function(e) {
                            c.value = e, a(c);
                        }), (function(e) {
                            return o("throw", e, a, s);
                        }));
                    }
                    s(u.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function k(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === f) continue;
                                return s;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function E(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                var o = l(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                f;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, f);
            }
            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function _(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(C, this), this.reset(!0);
            }
            function j(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return d.prototype = h, r(x, "constructor", {
                value: h,
                configurable: !0
            }), r(h, "constructor", {
                value: d,
                configurable: !0
            }), d.displayName = u(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, s, "GeneratorFunction")), 
                e.prototype = Object.create(x), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, w(T.prototype), u(T.prototype, a, (function() {
                return this;
            })), e.AsyncIterator = T, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new T(c(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next();
                }));
            }, w(x), u(x, s, "Generator"), u(x, i, (function() {
                return this;
            })), u(x, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = j, _.prototype = {
                constructor: _,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    f) : this.complete(a);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    f;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), f;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: j(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), f;
                }
            }, e;
        }
        function y(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), u = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, (void 0, i = function(e, t) {
                    if ("object" !== v(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ("object" !== v(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(r.key, "string"), "symbol" === v(i) ? i : String(i)), r);
            }
            var i;
        }
        var b = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.$menu_item = t()(".menu_item"), this.$auto_refresh = t()("#auto_refresh"), 
                this.$item_pointer = t()(".item_pointer"), this.$back_btn = t()("#back_btn"), this.$opt = t()("#opt"), 
                this.$comp = t()("#comp"), this.userSettings = {}, this.rulesetMap = new Map, this.initMessageListener(), 
                this.getTheme(), this.initClickLitener();
            }
            var n, r, i, a;
            return n = e, (r = [ {
                key: "initMessageListener",
                value: function() {
                    var e = this;
                    u.runtime.sendMessage({
                        type: "iAmReady"
                    }, (function(n) {
                        "userrules" === n ? (t()(".general").css("display", "none"), t()(".user_rules").css("display", "block"), 
                        t()(".back_btn").css("display", "flex"), e.renderUserRules()) : "allowlist" === n && (t()(".general").css("display", "none"), 
                        t()(".allowlist").css("display", "block"), t()(".back_btn").css("display", "flex"), 
                        e.getAllowList());
                    }));
                }
            }, {
                key: "getTheme",
                value: function() {
                    var e = this;
                    f("darkTheme").then((function(t) {
                        e.applyTheme(t);
                    }));
                }
            }, {
                key: "applyTheme",
                value: function(e) {
                    !0 === e ? t()("*").addClass("dark_mode") : t()("*").removeClass("dark_mode");
                }
            }, {
                key: "onFilteringModeChange",
                value: (i = g().mark((function e(t) {
                    var n;
                    return g().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            e.t0 = t, e.next = 3 === e.t0 ? 3 : 12;
                            break;

                          case 3:
                            return e.next = 5, u.permissions.request({
                                origins: [ "<all_urls>" ]
                            });

                          case 5:
                            if (!e.sent) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 9, l({
                                what: "setDefaultFilteringMode",
                                level: t
                            });

                          case 9:
                            n = e.sent, this.userSettings.defaultFilteringMode = n;

                          case 11:
                          case 12:
                            return e.abrupt("break", 13);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                })), a = function() {
                    var e = this, t = arguments;
                    return new Promise((function(n, r) {
                        var o = i.apply(e, t);
                        function a(e) {
                            y(o, n, r, a, s, "next", e);
                        }
                        function s(e) {
                            y(o, n, r, a, s, "throw", e);
                        }
                        a(void 0);
                    }));
                }, function(e) {
                    return a.apply(this, arguments);
                })
            }, {
                key: "initClickLitener",
                value: function() {
                    var e = this;
                    this.onFilteringModeChange(3), this.$menu_item.each((function(n, r) {
                        t()(r).on("click", (function(n) {
                            var r = t()(n.target), o = r.attr("name");
                            switch (e.$menu_item.removeClass("active"), r.addClass("active"), o) {
                              case "advanced":
                                t()("#about_us").css("display", "none"), t()("#rule_limits").css("display", "none"), 
                                t()("#advanced").css("display", "block");
                                break;

                              case "about_us":
                                t()("#advanced").css("display", "none"), t()("#rule_limits").css("display", "none"), 
                                t()("#about_us").css("display", "block");
                            }
                        }));
                    })), this.$item_pointer.on("click", (function(n) {
                        var r = t()(n.currentTarget).attr("data-id");
                        switch (e.hideOtherViews(), r) {
                          case "allowlist":
                            t()(".general").css("display", "none"), t()(".allowlist").css("display", "block"), 
                            t()(".back_btn").css("display", "flex"), e.getAllowList();
                            break;

                          case "user-rules":
                            t()(".general").css("display", "none"), t()(".user_rules").css("display", "block"), 
                            t()(".back_btn").css("display", "flex"), e.renderUserRules();
                        }
                    })), this.$back_btn.on("click", (function() {
                        e.hideOtherViews(), t()(".lang_list").empty(), t()(".back_btn").css("display", "none"), 
                        t()(".general").css("display", "block");
                    })), t()(".active-hover").on("mouseenter", (function(e) {
                        t()(e.currentTarget).css("background-color", "#50cba4");
                    })), t()(".active-hover").on("mouseleave", (function(e) {
                        t()(e.currentTarget).css("background-color", "#09B37D");
                    })), t()(".active-hover").on("mousedown", (function(e) {
                        0 === e.button && t()(e.currentTarget).css("background-color", "#6fe7c1");
                    })), t()(".active-hover").on("mouseup", (function(e) {
                        0 === e.button && t()(e.currentTarget).css("background-color", "#50cba4");
                    })), t()(".about_us_item .arrow").on("click", (function(e) {
                        var n = t()(e.currentTarget).attr("data-link");
                        u.tabs.create({
                            url: n
                        });
                    }));
                }
            }, {
                key: "hideOtherViews",
                value: function() {
                    t()(".allowlist").css("display", "none"), t()(".language").css("display", "none"), 
                    t()(".user_rules").css("display", "none"), t()(".various_filters").css("display", "none"), 
                    t()(".switch_input").off(), t()(".lang_item .switch input").off(), t()(".usl_item_header_btn.delete").off(), 
                    t()(".usl_item_header_btn.edit").off();
                }
            }, {
                key: "updateLineNumbers",
                value: function() {
                    var e = document.getElementById("editableDiv"), t = e.innerText.split("\n"), n = document.getElementById("lineNumbers");
                    n && n.parentNode.removeChild(n), (n = document.createElement("div")).id = "lineNumbers", 
                    n.className = "lineNumbers";
                    for (var r = 0; r < t.length; r++) {
                        var o = document.createElement("div");
                        o.textContent = r + 1, n.appendChild(o);
                    }
                    e.parentNode.insertBefore(n, e);
                }
            }, {
                key: "getAllowList",
                value: function() {
                    var e = this, n = document.getElementById("editableDiv");
                    f("allowlist").then((function(t) {
                        if (t.length > 0) {
                            var r = t.join("\n");
                            n.innerText = r, e.updateLineNumbers();
                        }
                    })), n.addEventListener("input", (function() {
                        e.updateLineNumbers();
                    })), t()(".allowlist_btns .save").on("click", (function() {
                        var e = /^\s*$/gm;
                        d("allowlist", n.innerText.split("\n").filter((function(t) {
                            if (!e.test(t)) return t;
                        }))).then((function() {
                            t()(".allowlist_btns .noti").css("opacity", "1"), t()(".allowlist_btns .noti").text("Saved!"), 
                            setTimeout((function() {
                                var e, n = .9;
                                e = setInterval((function() {
                                    n <= .1 && (clearInterval(e), t()(".allowlist_btns .noti").text("")), t()(".allowlist_btns .noti").css("opacity", "".concat(n)), 
                                    n -= .1;
                                }), 100);
                            }), 500);
                        }));
                    })), t()(".allowlist_btns .import").on("click", (function() {
                        var t = document.createElement("input");
                        t.setAttribute("type", "file"), t.setAttribute("id", "fileInput"), t.setAttribute("style", "display: none"), 
                        document.body.appendChild(t), t.click(), document.getElementById("fileInput").addEventListener("change", (function(r) {
                            var o = r.target.files[0];
                            if (o) {
                                var i = new FileReader;
                                i.onload = function(e) {
                                    var r = e.target.result.split("\n").join("\n");
                                    n.innerText = r, document.body.removeChild(t);
                                }, i.readAsText(o), e.updateLineNumbers();
                            }
                        }));
                    })), t()(".allowlist_btns .export").on("click", (function() {
                        var e = n.innerText, t = new Blob([ e ], {
                            type: "text/plain;charset=utf-8"
                        }), r = document.createElement("a");
                        r.href = URL.createObjectURL(t), r.download = "allow_list.txt", document.body.appendChild(r), 
                        r.click(), document.body.removeChild(r);
                    }));
                }
            }, {
                key: "renderUserRules",
                value: function() {
                    var e = this;
                    f("userRules").then((function(n) {
                        t()(".user_rules_list").empty(), n.forEach((function(n) {
                            t()(".user_rules_list").append(e.createUserRulesItemTemplate(n));
                        })), e.initUserRulesListener(n);
                    }));
                }
            }, {
                key: "createUserRulesItemTemplate",
                value: function(e) {
                    var t = e.id, n = e.active, r = e.ruleText;
                    return '<div class="usl_item">\n                <div class="usl_item_header">\n                  <label class="switch">\n                    <input type="checkbox" id="'.concat(t, '" checked=').concat(n, ' class="user_rules_switch_input"/>\n                    <span class="slider round"></span>\n                  </label>\n                  <div class="usl_item_header_btn edit" data-id="').concat(t, '"></div>\n                  <div class="usl_item_header_btn delete" data-id="').concat(t, '"></div>\n                </div>\n                <p class="usl_item_content">').concat(r, "</p>\n              </div>");
                }
            }, {
                key: "initUserRulesListener",
                value: function(e) {
                    var n = this;
                    function r() {
                        t()(".user_rules_modal").css("display", "none"), t()(".usl_modal_btn").off("click"), 
                        t()(".usl_modal_content textarea").val(""), t()(".usl_modal_btn").removeClass("edit"), 
                        t()(".usl_modal_btn").removeClass("add"), t()(".usl_modal_btn").removeAttr("style");
                    }
                    e.length <= 100 ? t()(".add_user_rule").on("click", (function() {
                        t()(".usl_modal_header_title").text("Add user rule"), t()(".usl_modal_btn").text("Add"), 
                        t()(".usl_modal_btn").addClass("add"), t()(".user_rules_modal").css("display", "flex"), 
                        t()(".usl_modal_btn.add").on("click", (function() {
                            "" !== t()(".usl_modal_content textarea").val() ? f("userRules").then((function(e) {
                                var o = e;
                                o.push({
                                    active: !0,
                                    ruleText: t()(".usl_modal_content textarea").val(),
                                    id: (new Date).getTime()
                                }), d("userRules", o).then((function() {
                                    n.renderUserRules(), r();
                                }));
                            })) : r();
                        }));
                    })) : (t()(".add_user_rule").css("display", "none"), t()(".user_rules_count_warning").css("display", "block")), 
                    t()(".user_rules_switch_input").on("change", (function(t) {
                        var n = t.target.id;
                        e.map((function(e) {
                            e.id === +n && (e.active = t.target.checked);
                        })), d("userRules", e);
                    })), t()(".usl_item_header_btn.delete").on("click", (function(r) {
                        var o = t()(r.target).attr("data-id");
                        d("userRules", e.filter((function(e) {
                            return e.id !== +o;
                        }))).then((function() {
                            n.renderUserRules();
                        }));
                    })), t()(".usl_item_header_btn.edit").on("click", (function(o) {
                        t()(".usl_modal_header_title").text("Edit user rule"), t()(".usl_modal_btn").text("Done"), 
                        t()(".usl_modal_btn").addClass("edit"), t()(".user_rules_modal").css("display", "flex");
                        var i = t()(o.target).attr("data-id");
                        e.forEach((function(e) {
                            e.id === +i && t()(".usl_modal_content textarea").val(e.ruleText);
                        })), t()(".usl_modal_btn.edit").on("click", (function() {
                            e.map((function(e) {
                                e.id === +i && (e.ruleText = t()(".usl_modal_content textarea").val());
                            })), d("userRules", e).then((function() {
                                n.renderUserRules(), r();
                            }));
                        }));
                    })), t()(".usl_modal_header_close").on("click", (function() {
                        r();
                    }));
                }
            } ]) && m(n.prototype, r), Object.defineProperty(n, "prototype", {
                writable: !1
            }), e;
        }();
        document.addEventListener("DOMContentLoaded", (function() {
            new b;
        }));
    })();
})();