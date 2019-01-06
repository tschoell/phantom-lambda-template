// console.log('start phantom');
// setTimeout(function() {
//     console.log('Boo from phantom');
//     phantom.exit();
// }, 1000);

var webPage = require('webpage');
var page = webPage.create();

page.open('http://phantomjs.org', function (status) {
  var content = page.content;
  console.log('Content: ' + content);
  phantom.exit();
});