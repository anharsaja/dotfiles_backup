"use strict";

!function() {
    const e = [ [ 11895552, "#kae_unique_id_0" ], [ 16153475, ".adsbygoogle" ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const s of e) {
            const e = o.get(s[0]);
            o.set(s[0], void 0 === e ? s[1] : `${e},${s[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();