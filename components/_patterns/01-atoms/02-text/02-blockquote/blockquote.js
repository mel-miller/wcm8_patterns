(function ($, Drupal) {

  Drupal.behaviors.blockquote = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('blockquote').each(function() {

        var pq_icon = '<div class="pulled-quote__icon"><i class="fas fa-quote-left fa-3x"></i></div>';

        if ($(this).hasClass('pulled-quote')) {
          $('.pulled-quote p').wrap('<div class="pulled-quote__text"></div>');
          $('.pulled-quote__text').before(pq_icon);
        }

      });

    }
  }

})(jQuery, Drupal);
