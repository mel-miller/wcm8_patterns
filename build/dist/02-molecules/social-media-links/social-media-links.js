'use strict';(function(a,b){b.behaviors.status={attach:function attach(){'use strict';var b=a('.social-media__item').length;a('.social-media__list').addClass('count-'+b),7===b?a('<br/>').insertAfter('.social-media__item--4'):6===b&&a('<br/>').insertAfter('.social-media__item--3')}}})(jQuery,Drupal);
//# sourceMappingURL=social-media-links.js.map
