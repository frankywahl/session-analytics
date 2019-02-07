import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SessionAnalyticsService {
    constructor() { }
}
SessionAnalyticsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SessionAnalyticsService.ctorParameters = () => [];
/** @nocollapse */ SessionAnalyticsService.ngInjectableDef = defineInjectable({ factory: function SessionAnalyticsService_Factory() { return new SessionAnalyticsService(); }, token: SessionAnalyticsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SessionAnalyticsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SessionAnalyticsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sa-session-analytics',
                template: "<p>\n  session-analytics works great!\n  <sa-nps></sa-nps>\n</p>\n"
            }] }
];
/** @nocollapse */
SessionAnalyticsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NpsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NpsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sa-nps',
                template: "<p>\n  nps works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NpsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SessionAnalyticsModule {
}
SessionAnalyticsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SessionAnalyticsComponent, NpsComponent],
                imports: [],
                exports: [SessionAnalyticsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SessionAnalyticsService, SessionAnalyticsComponent, SessionAnalyticsModule, NpsComponent as ɵa };

//# sourceMappingURL=session-analytics.js.map