'use strict';(function(a,b){b.behaviors.blockquote={attach:function attach(b){'use strict';a(b).find('blockquote').each(function(){a(this).hasClass('pull-quote')&&(a('.pull-quote p').wrap('<div class="pull-quote__text"></div>'),a('.pull-quote__text').before('<div class="pull-quote__icon"><i class="fas fa-quote-left fa-3x"></i></div>'))})}}})(jQuery,Drupal);
//# sourceMappingURL=blockquote.js.map
