"use strict";

!function() {
    const e = [ [ 4298988, ".zxc" ], [ 687178, ".zxc-m" ], [ 11918799, ".zxc-stik" ], [ 5194391, ".zxc_home" ], [ 5255191, ".zxc_news" ], [ 5323427, ".zxc_left" ], [ 14353422, ".zxc_matni" ], [ 10341886, ".zxc-mobile" ], [ 7765280, ".zxc-header-zxc" ], [ 7634644, ".zxc-visible-fixed" ], [ 13791830, ".zxc-padding-custom" ], [ 15329921, ".main-zxc" ], [ 15974757, ".home-zxc" ], [ 956828, ".top_zxc" ], [ 14368092, ".zxc_top" ], [ 5820437, ".side_txt_zxc" ], [ 5035099, "#kaprila_linktable" ] ], c = self.genericSelectorMap || new Map;
    if (0 !== c.size) {
        for (const t of e) {
            const e = c.get(t[0]);
            c.set(t[0], void 0 === e ? t[1] : `${e},${t[1]}`);
        }
        self.genericSelectorMap = c;
    } else self.genericSelectorMap = new Map(e);
}();