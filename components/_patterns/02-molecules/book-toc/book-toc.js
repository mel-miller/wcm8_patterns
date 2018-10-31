(function ($, Drupal) {

  Drupal.behaviors.bookToc = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.book-blocks-toc').each(function() {

        //wrap enitre block in a <nav> element
        $(this).wrap('<nav aria-label="Instructional Guide navigation"></nav>');

        //Hide hardcoded span from book_blocks module
        //TODO: accomplish this programatically instead
        $('.book-blocks-toc-prefix', this).hide();

        //wrap parent book link with a block title
        $('.book-blocks-toc-book a', this).wrap('<h2 class="block__title"></h2>');

      });

    }
  }

})(jQuery, Drupal);
