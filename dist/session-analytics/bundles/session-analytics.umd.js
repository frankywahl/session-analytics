(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('session-analytics', ['exports', '@angular/core'], factory) :
    (factory((global['session-analytics'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SessionAnalyticsService = /** @class */ (function () {
        function SessionAnalyticsService() {
        }
        SessionAnalyticsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SessionAnalyticsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SessionAnalyticsService.ngInjectableDef = i0.defineInjectable({ factory: function SessionAnalyticsService_Factory() { return new SessionAnalyticsService(); }, token: SessionAnalyticsService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.SessionAnalyticsService = SessionAnalyticsService;
    exports.SessionAnalyticsComponent = SessionAnalyticsComponent;
    exports.SessionAnalyticsModule = SessionAnalyticsModule;
    exports.ɵa = NpsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=session-analytics.umd.js.map