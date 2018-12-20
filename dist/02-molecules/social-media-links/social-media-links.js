'use strict';(function(a,b){b.behaviors.social={attach:function attach(b){'use strict';var c=a('.social-media__item').length;a('.social-media__list').addClass('count-'+c),a(b).find('#social-media-block').each(function(){7===c?a('<br/>').insertAfter('.social-media__item--4'):6===c&&a('<br/>').insertAfter('.social-media__item--3')})}}})(jQuery,Drupal);
//# sourceMappingURL=social-media-links.js.map
