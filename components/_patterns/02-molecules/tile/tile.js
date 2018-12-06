(function($, Drupal) {

  Drupal.behaviors.tile = {
    attach: function(context, settings) {

      'use strict';

      // add class to tile > a if it doesn't have it
      // this can help when entity reference elements are hard to get to via twig
      // TODO: maybe revist later
      $(context).find('.tile > a').each(function() {
        if(!$(this).hasClass('tile__link')) {
          $(this).addClass('tile__link');
        }
      });

    }
  }

})(jQuery, Drupal);
