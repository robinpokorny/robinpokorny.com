/*jslint evil: true */
/*exported mail2 */
function mail2(name, dom, tl, params, display) {
    'use strict';

    // Email.js version 5
    var tld = [],
        m = 'mailto:',
        a = '@',
        d = '.';
    tld[0] = 'com';

    document.write('<a href="' + m + name + a + dom + d + tld[tl] + params + '">' + display + '</a>');
}
