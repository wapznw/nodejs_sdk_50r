/**
 * Created by wdj on 16/8/11.
 * test
 */
var assert = require("assert");
var url50r = require('./index');
var it = require("mocha/lib/mocha.js").it;
var describe = require("mocha/lib/mocha.js").describe;

var ak = '57ac3816d9cb467d121dd48f';
var longUrl = 'https://www.google.com.hk/search?q=hello';

describe('test short url', function () {
    it(longUrl, function (done) {
        url50r.setAppKey(ak).convert(longUrl).then(function (result) {
            assert.equal('http://50r.cn/YM6qRM', result);
            done();
        }).catch(done);
    })
});

/*/!* demo 1 *!/
url50r.setAppKey(ak).convert(longUrl).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.error(err);
});
/!* demo 1 end*!/

/!* demo 2 *!/
url50r.setAppKey(ak);
url50r.convert(longUrl).then(function (shortUrl) {
    console.log(shortUrl);
}).catch(function (err) {
    console.error(err);
});
/!* demo 2 end*!/*/
