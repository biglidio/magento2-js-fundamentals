define(['vue', 'jquery', 'Biglidio_JsFun/js/jquery-log'], function(Vue, $) {
    'use strict'

    $.log('Testing output');

    return function(config, element) {
        return new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        })
    }
})