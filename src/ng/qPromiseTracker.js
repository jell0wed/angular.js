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
    this.$get = function() {
        return {
            track: angular.noop,
            untrack: angular.noop
        };
    }
}