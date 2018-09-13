'use strict';Drupal.behaviors.blockquote={attach:function attach(a){$(a).find('blockquote').each(function(){$(this).hasClass('pulled-quote')&&($('.pulled-quote p').wrap('<div class="pulled-quote__text"></div>'),$('.pulled-quote__text').before('<div class="pulled-quote__icon"><i class="fas fa-quote-left fa-3x"></i></div>'))})}};
//# sourceMappingURL=blockquote.js.map
