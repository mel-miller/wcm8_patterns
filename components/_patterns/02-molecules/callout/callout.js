(function ($, Drupal) {

  Drupal.behaviors.callout = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.callout').each(function() {
        var caution = '<div class="icon"><i class="fas fa-exclamation-triangle"></i></div>';
        var ux_tip = '<div class="icon"><i class="fas fa-times-circle"></i></div>';

        if ($(this).hasClass('callout--caution')) {
          $(this).prepend(caution);
        } else if ($(this).hasClass('callout--ux-tip')) {
          $(this).prepend(ux_tip);
        }
      });

    }
  }

})(jQuery, Drupal);
