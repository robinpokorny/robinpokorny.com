/*jslint evil: true */
/*exported mail2 */
function mail2(name, dom, tl, params, display, where) {
  'use strict';

  // Email.js version 5
  var tld = [],
    m = 'mailto:',
    a = '@',
    d = '.',
    e = document.createElement('a');

  tld[0] = 'com';

  e.href =  m + name + a + dom + d + tld[tl] + params;
  e.innerHTML = display;

  document.getElementById(where).appendChild(e);
}
