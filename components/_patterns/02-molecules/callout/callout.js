(function ($, Drupal) {

  Drupal.behaviors.callout = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.callout').each(function() {
        var caution = '<div class="icon"><span class="visually-hidden">Caution</span><i class="fas fa-exclamation"></i></div>';
        var ux_tip = '<div class="icon"><span class="visually-hidden">UX Tip</span><i class="fas fa-asterisk"></i></div>';

        if ($(this).hasClass('callout--caution')) {
          $(this).prepend(caution);
        } else if ($(this).hasClass('callout--ux-tip')) {
          $(this).prepend(ux_tip);
        }

        //add an additional class if the callout is only one line
        var height = $(this).innerHeight();
        if (height < 51) {
          $(this).addClass('short');
        }

      });

    }
  }

})(jQuery, Drupal);
