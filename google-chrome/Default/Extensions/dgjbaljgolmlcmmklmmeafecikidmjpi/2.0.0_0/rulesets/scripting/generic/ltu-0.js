"use strict";

!function() {
    const e = [ [ 14552029, ".baneriai" ], [ 11006813, ".reklamos_nuorodos" ], [ 5359179, ".reklamos_tarpas" ], [ 14351896, ".top_reklama" ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const s of e) {
            const e = o.get(s[0]);
            o.set(s[0], void 0 === e ? s[1] : `${e},${s[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();