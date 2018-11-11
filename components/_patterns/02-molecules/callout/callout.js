(function ($, Drupal) {

  Drupal.behaviors.callout = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.callout').each(function() {

        //get the height of the callout div
        var height = $(this).innerHeight();

        //if the callout gets "too tall" nest the icon in the corner instead of the whole height
        if (height > 150) {
          $('.callout-icon', this).css({'height': '3.25em', 'border-radius': '3px 0 5px' });
        }

      });

    }
  }

})(jQuery, Drupal);
