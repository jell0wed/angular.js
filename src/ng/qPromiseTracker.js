'use strict';
/**
 * @ngdoc service
 * @name $$qPromiseTracker
 *
 * @description
 * Tracks active promises by tracking and untracking promises as they are created,
 * rejected or resolved. 
 *
 */
function $$QPromiseTrackerProvider() {
    var pendingPromisesCount = 0;

    var trackNewPromise = function(promise) {
        pendingPromisesCount++;
    };

    var untrackPromise = function(promise) {
        pendingPromisesCount--;
    };

    var getPendingPromisesCount = function() {
        return pendingPromisesCount;
    };

    this.$get = function() {
        return {
            track: trackNewPromise,
            untrack: untrackPromise,
            getCount: getPendingPromisesCount
        };
    }
}