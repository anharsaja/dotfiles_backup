"use strict";

!function() {
    const e = [ [ 7719083, "#digi-fm-live-stream" ], [ 12253005, ".only-desktop.promotii-wrapper" ], [ 16277823, ".only_desktop.related_on_top.parteneri.sectiune" ], [ 2566477, ".SC_TBlock" ], [ 16540261, ".strawberry_ads_container" ], [ 8559454, ".strawberry-ads__pretty-container" ], [ 9084222, ".strawberry-ads-manager-container" ], [ 5539703, ".strawberry-ad-card" ], [ 4430763, ".strawberry-ad" ], [ 5639992, '#sam_branding[style="min-height:250px;"]' ] ], r = self.genericSelectorMap || new Map;
    if (0 !== r.size) {
        for (const t of e) {
            const e = r.get(t[0]);
            r.set(t[0], void 0 === e ? t[1] : `${e},${t[1]}`);
        }
        self.genericSelectorMap = r;
    } else self.genericSelectorMap = new Map(e);
}();