(function ($, Drupal) {

  Drupal.behaviors.status = {
    attach: function(context, settings) {

      'use strict';

      //get count of social media items
      var count = $('.social-media__item').length;
      $('.social-media__list').addClass('count-' + count);

      // add line breaks as necessary
      if (count === 7) {
        $('<br/>').insertAfter('.social-media__item--4');
      } else if (count === 6) {
        $('<br/>').insertAfter('.social-media__item--3');
      }
    }
  }

})(jQuery, Drupal);
