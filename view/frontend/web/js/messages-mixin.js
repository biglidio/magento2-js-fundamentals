define([], function() {
    'use strict'

    return function(originalMessages) {
        // Option 1:
        // originalMessages.defaults.hideTimeout = 1000;
        // Other changes ...
        // return originalMessages;

        //Option 2:
        return originalMessages.extend({
            defaults: {
                hideTimeout: 3000,
                hideSpeed: 100
            }
        });
    }
})