!function() {
    const t = self.declarativeImports || [];
    self.declarativeImports = void 0, delete self.declarativeImports;
    const e = [];
    try {
        e.push(...document.location.hostname.split("."));
    } catch (t) {}
    const n = e.length;
    if (0 === n) return;
    const o = [];
    for (const {argsList: s, exceptionsMap: i, hostnamesMap: r, entitiesMap: c} of t) {
        const t = new Set, a = [];
        if (0 !== i.size) {
            for (let t = 0; t < n; t++) {
                const n = e.slice(t).join("."), o = i.get(n);
                o && a.push(...o);
            }
            i.clear();
        }
        if (0 !== r.size) {
            const o = e => {
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) a.includes(e) || t.add(e);
                }
            };
            for (let t = 0; t < n; t++) o(e.slice(t).join("."));
            o("*"), r.clear();
        }
        if (0 !== c.size) {
            const o = n - 1;
            for (let n = 0; n < o; n++) for (let s = o; s > n; s--) {
                const o = e.slice(n, s).join(".");
                let i = c.get(o);
                if (void 0 !== i) {
                    "number" == typeof i && (i = [ i ]);
                    for (const e of i) a.includes(e) || t.add(e);
                }
            }
            c.clear();
        }
        for (const e of t) o.push(...s[e].map((t => JSON.parse(t))));
        s.length = 0;
    }
    if (t.length = 0, 0 === o.length) return;
    const s = t => {
        const {tasks: e, action: n} = t;
        let o, s, i;
        if (Array.isArray(e)) {
            if ("matches-media" !== e[0][0]) return;
            if (o = e[0][1], e.length > 2) return;
            if (2 === e.length) {
                if ("spath" !== e[1][0]) return;
                s = e[1][1];
            }
        }
        if (Array.isArray(n)) {
            if ("style" !== n[0]) return;
            s = s || t.selector, i = n[1];
        }
        if (void 0 !== o || void 0 !== i || void 0 !== s) return void 0 === o ? `${s}\n{${i}}` : void 0 === i ? `@media ${o} {\n${s}\n{display:none!important;}\n}` : `@media ${o} {\n${s}\n{${i}}\n}`;
    }, i = [];
    for (const t of o) {
        const e = s(t);
        void 0 !== e && i.push(e);
    }
    0 !== i.length && function t(e, n = 10) {
        chrome.runtime.sendMessage({
            what: "insertCSS",
            css: e
        }).catch((() => {
            0 != (n -= 1) && t(e, n - 1);
        }));
    }(i.join("\n"));
}();