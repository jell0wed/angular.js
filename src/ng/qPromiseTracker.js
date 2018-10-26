'use strict';
/**
 * @ngdoc service
 * @name $$qPromiseTracker
 *
 * @description
 * Tracks active promises by tracking and untracking promises as they are created,
 * rejected or resolved. 
 * 
 * By default, this does not track any promises that gets created.
 * To use this API, one must override the `$$qPromiseTracker` at config time
 * and provide their own tracking implementation using `$provide`.
 *
 */
function $$QPromiseTrackerProvider() {
    this.$get = function() {
        return {
            track: angular.noop,
            untrack: angular.noop
        };
    }
}