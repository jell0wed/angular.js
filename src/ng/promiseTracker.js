/**
 * @ngdoc service
 * @name $trackPromiseHandler
 *
 * @description
 * Any new user-created promises that are created are passed to this function for tracking purposes.
 * The default implementation is the no-op function. Hence, by default, promises are not tracked.
 *
 * One can override the tracking behaviour by overriding the $trackPromiseHandler service
 * as shown below:
 * ## Example:
 *
 * ```js
 *   angular.module('exceptionOverride', []).factory('$trackPromiseHandler', function() {
 *     return function(promise) {
 *       console.log("new promise was created");
 *     };
 *   });
 * ```
 *
 * This example will override the normal action of `$trackPromiseHandler`, to log every 
 * promises that gets created
 *
 * <hr />
 * Note, promise tracking usually comes on par with an untracking promise handler service. 
 * See $untrackPromiseHandler for untracking promises if needed.
 *
 */
function $PromiseTrackerHandlerProvider() {
    this.$get = ['', function() {
        return function(promise) {
            return; // no-op by default (tracking is disabled by default)
        };
    }];
}

/**
 * @ngdoc service
 * @name $untrackPromiseHandler
 *
 * @description
 * Any new user-created promises that are being terminated are passed to this function for tracking purposes.
 * The default implementation is the no-op function. Hence, by default, promises are not tracked.
 *
 * One can override the tracking behaviour by overriding the $untrackPromiseHandler service
 * as shown below:
 * ## Example:
 *
 * ```js
 *   angular.module('exceptionOverride', []).factory('$untrackPromiseHandler', function() {
 *     return function(promise) {
 *       console.log("new promise was rejected/resolved");
 *     };
 *   });
 * ```
 *
 * This example will override the normal action of `$untrackPromiseHandler`, to log every 
 * promises that gets terminated.
 *
 * <hr />
 * Note, promise tracking usually comes on par with a tracking promise handler service. 
 * See $trackPromiseHandler for tracking promises if needed.
 *
 */
function $PromiseUntrackerHandlerProvider() {
    this.$get = ['', function() {
        return function(promise) {
            return; // no-op by default (tracking is disabled by default)
        };
    }];
}