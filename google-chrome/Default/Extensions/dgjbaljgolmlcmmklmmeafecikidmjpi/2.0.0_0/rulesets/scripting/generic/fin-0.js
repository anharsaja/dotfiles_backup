"use strict";

!function() {
    const a = [ [ 6474532, "#atwAdFrame" ], [ 15062341, "#keskimainos" ], [ 4838054, "#mainokset" ], [ 6414565, "#mainokset_oikea" ], [ 6423979, "#mainokset_vasen" ], [ 13572634, "#mainokset_yla" ], [ 5406194, "#mainos" ], [ 12991397, "#mainosbanneri" ], [ 13909958, "#mainosbannerit" ], [ 15174472, "#mainoskaruselli" ], [ 13982409, "#mainoslaatikko" ], [ 522998, "#mainospaikka" ], [ 1079866, "#mainostila" ], [ 7243995, "#natiivit" ], [ 2123407, "#parade-container" ], [ 6512302, "#sponsori" ], [ 4308675, "#sponsorit" ], [ 6410891, "#yhteistyokaruselli" ], [ 6410796, "#yhteistyokumppanit" ], [ 4313955, "#yhteistyossa" ], [ 2326646, "#ylamainokset" ], [ 2023566, "#ylamainos" ], [ 15963300, ".adbox_content" ], [ 14395122, ".card--native" ], [ 1051296, ".dfpBoxBottom" ], [ 191564, ".dfpListNativeBanner" ], [ 4961138, ".diks-display-ad" ], [ 14118062, ".diks-native-ad" ], [ 1072424, ".keskimainos" ], [ 6039851, ".mainokset" ], [ 12639368, ".mainokset_oikea" ], [ 12663750, ".mainokset_vasen" ], [ 4529623, ".mainokset_yla" ], [ 2872095, ".mainos" ], [ 3990312, ".mainosbanneri" ], [ 12078987, ".mainosbannerit" ], [ 1884709, ".mainoskaruselli" ], [ 11867140, ".mainoslaatikko" ], [ 13170588, ".mainosnosto" ], [ 15331355, ".mainospaikka" ], [ 4260023, ".mainostila" ], [ 1951427, ".sponsori" ], [ 6329486, ".sponsorit" ], [ 8266418, ".tdt-desktop-ad" ], [ 6517907, ".tdt-manager-element" ], [ 4923280, ".tdt-minilanding-button" ], [ 6619657, ".tdt-mobile-ad" ], [ 13658598, ".yhteistyokaruselli" ], [ 13658689, ".yhteistyokumppanit" ], [ 8899214, ".yhteistyossa" ], [ 7665307, ".ylamainokset" ], [ 13252419, ".ylamainos" ], [ 5409129, "div#commercial-carousel" ] ], i = self.genericSelectorMap || new Map;
    if (0 !== i.size) {
        for (const s of a) {
            const a = i.get(s[0]);
            i.set(s[0], void 0 === a ? s[1] : `${a},${s[1]}`);
        }
        self.genericSelectorMap = i;
    } else self.genericSelectorMap = new Map(a);
}();