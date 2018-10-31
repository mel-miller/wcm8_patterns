'use strict';(function(a,b){b.behaviors.bookToc={attach:function attach(b){'use strict';a(b).find('.book-blocks-toc').each(function(){a(this).wrap('<nav aria-label="Instructional Guide navigation"></nav>'),a('.book-blocks-toc-prefix',this).hide(),a('.book-blocks-toc-book a',this).wrap('<h2 class="block__title"></h2>')})}}})(jQuery,Drupal);
//# sourceMappingURL=book-toc.js.map
