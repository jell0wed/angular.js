'use strict';
/**
 * @ngdoc service
 * @name $$qPromiseTracker
 *
 * @description
 * Service that tracks active promises by tracking and untracking promises as they are created,
 * rejected or resolved. 
 *
 */
function $$QPromiseTrackerProvider() {
    var pendingCount = 0;

    var trackNewPromise = function(promise) {
        this.pendingCount++;
    };

    var untrackPromise = function(promise) {
        this.pendingCount--;
    };

    this.$get = function() {
        return {
            track: trackNewPromise,
            untrack: untrackPromise
        };
    }
}