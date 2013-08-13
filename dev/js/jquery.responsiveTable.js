/*!
 * jquery.responsiveTables.js

Description: Responsive table plugin

Dependancies: jQuery


 */


(function ($) {

    $.fn.responsiveTable = function () {

        return this.each(function () {
            var table = $(this),
                header = [];

            table.addClass('table');

            // Get the column header text for each column
            for (i = 0; i < $('thead th', table).length; i++) {
                var colTitle = $('thead th:eq(' + i + ')', table).text().trim();
                header.push(colTitle);
            }

            // For each row within the table
            $('tbody tr', table).each(function (i) {
                var tableRow = $(this);

                // Assign the col title as a data-attr to each table cell
                $('td', tableRow).each(function(i){
                    $(this).attr('data-title', header[i]);
                })
            });
        });
    }

})(jQuery);