/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';

    $('#search').autocomplete({
        minChars: 2,
        serviceUrl : 'https://www.transvision.co.id/api/websearch',
        onSelect: function (value, data) {
            window.location.replace(value.data);
        }
    });
});
