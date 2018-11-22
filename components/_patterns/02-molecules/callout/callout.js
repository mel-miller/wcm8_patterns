(function($, Drupal) {

  Drupal.behaviors.callout = {
    attach: function(context, settings) {

      'use strict';

      // for spans
      $(context).find('span.callout').each(function() {
        var caution = '<div class="callout-icon"><span class="visually-hidden">Caution</span><i class="fas fa-exclamation"></i></div>';
        var ux_tip = '<div class="callout-icon"><span class="visually-hidden">UX Tip</span><i class="fas fa-asterisk"></i></div>';

        $(this).wrapInner('<div class="callout-body"></div>');

        if ($(this).hasClass('callout--caution')) {
          $(this).prepend(caution);
        } else if ($(this).hasClass('callout--ux-tip')) {
          $(this).prepend(ux_tip);
        }

      });

      //for divs
      $(context).find('div.callout').each(function() {

        //get the height of the callout div
        var height = $(this).innerHeight();

        //if the callout gets "too tall" nest the icon in the corner instead of the whole height
        if (height > 150) {
          $('.callout-icon', this).css({
            'height': '3.25em',
            'border-radius': '3px 0 5px'
          });
        }

      });

    }
  }

})(jQuery, Drupal);
