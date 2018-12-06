(function($, Drupal) {

  Drupal.behaviors.toolsets = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.toolset-section').each(function() {
        var section_name = $(this).attr('id');
        var wrapper_class = 'toolset-section-wrapper toolset-section-wrapper--' + section_name;
        var wrapper_div = '<div class="' + wrapper_class + '"></div>';

        //adds a wrapper div for each toolset-section field group on toolset node displays
        $(this).wrap(wrapper_div);

      });

    }
  }

})(jQuery, Drupal);
