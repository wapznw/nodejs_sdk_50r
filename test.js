/**
 * Created by wdj on 16/8/11.
 * test
 */
var url50r = require('./index');

var ak = '57ac3816d9cb467d121dd48f';
var longUrl = 'https://www.google.com.hk/search?q=hello';

/* demo 1 */
url50r.setAppKey(ak).convert(longUrl).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.error(err);
});
/* demo 1 end*/

/* demo 2 */
url50r.setAppKey(ak);
url50r.convert(longUrl).then(function (shortUrl) {
    console.log(shortUrl);
}).catch(function (err) {
    console.error(err);
});
/* demo 2 end*/
