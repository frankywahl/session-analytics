import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionAnalyticsService = /** @class */ (function () {
    function SessionAnalyticsService() {
    }
    SessionAnalyticsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SessionAnalyticsService.ctorParameters = function () { return []; };
    /** @nocollapse */ SessionAnalyticsService.ngInjectableDef = defineInjectable({ factory: function SessionAnalyticsService_Factory() { return new SessionAnalyticsService(); }, token: SessionAnalyticsService, providedIn: "root" });
    return SessionAnalyticsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionAnalyticsComponent = /** @class */ (function () {
    function SessionAnalyticsComponent() {
    }
    /**
     * @return {?}
     */
    SessionAnalyticsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SessionAnalyticsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sa-session-analytics',
                    template: "<p>\n  session-analytics works great!\n  <sa-nps></sa-nps>\n</p>\n"
                }] }
    ];
    /** @nocollapse */
    SessionAnalyticsComponent.ctorParameters = function () { return []; };
    return SessionAnalyticsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NpsComponent = /** @class */ (function () {
    function NpsComponent() {
    }
    /**
     * @return {?}
     */
    NpsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NpsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sa-nps',
                    template: "<p>\n  nps works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NpsComponent.ctorParameters = function () { return []; };
    return NpsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionAnalyticsModule = /** @class */ (function () {
    function SessionAnalyticsModule() {
    }
    SessionAnalyticsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SessionAnalyticsComponent, NpsComponent],
                    imports: [],
                    exports: [SessionAnalyticsComponent]
                },] }
    ];
    return SessionAnalyticsModule;
}());

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