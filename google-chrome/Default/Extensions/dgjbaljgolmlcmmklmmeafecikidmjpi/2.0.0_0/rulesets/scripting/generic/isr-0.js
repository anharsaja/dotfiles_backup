"use strict";

!function() {
    const e = [ [ 9997183, '#HiddenMovie > [src^="http://www.youtube.com"] + #video-blocker' ], [ 11548607, ".entry > .entry-inner > .wpvl.wpvl-youtube.ng-scope.size-l" ], [ 2034647, '.wpvl.wpvl-dailymotion > .fblogin.lockoverlay.ng-scope,.wpvl.wpvl-youtube.ng-scope.size-xl > .ng-scope + .fblogin.lockoverlay.ng-scope,.wpvl.wpvl-youtube.ng-scope.size-xxl > [ng-show="!blocked"] + * + .ng-scope + .fblogin.lockoverlay.ng-scope' ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const l of e) {
            const e = o.get(l[0]);
            o.set(l[0], void 0 === e ? l[1] : `${e},${l[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();