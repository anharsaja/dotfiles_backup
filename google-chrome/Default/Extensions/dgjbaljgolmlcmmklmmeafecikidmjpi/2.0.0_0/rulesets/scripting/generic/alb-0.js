"use strict";

!function() {
    const e = [ [ 9121034, ".grecaptcha-badge" ], [ 911183, "#gdpr-banner" ], [ 10215140, ".gdpr-popup" ], [ 878155, ".td-more-articles-box" ], [ 14687007, ".cc-type-info" ], [ 2386694, "#iframe_cookie" ] ], c = self.genericSelectorMap || new Map;
    if (0 !== c.size) {
        for (const o of e) {
            const e = c.get(o[0]);
            c.set(o[0], void 0 === e ? o[1] : `${e},${o[1]}`);
        }
        self.genericSelectorMap = c;
    } else self.genericSelectorMap = new Map(e);
}();