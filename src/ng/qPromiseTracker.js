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
    var pendingCount = 0;

    var trackNewPromise = function(promise) {
        pendingCount++;
    };

    var untrackPromise = function(promise) {
        pendingCount--;
    };

    this.$get = function() {
        return {
            track: trackNewPromise,
            untrack: untrackPromise
        };
    }
}