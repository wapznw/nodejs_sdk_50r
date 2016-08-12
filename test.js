/**
 * Created by wdj on 16/8/11.
 * test
 */
var assert = require("assert");
var url50r = require('./index')({
    ak: '57ac3816d9cb467d121dd48f',
    https: true
});
var it = require("mocha/lib/mocha.js").it;
var describe = require("mocha/lib/mocha.js").describe;

var longUrl = 'https://www.google.com.hk/search?q=hello';
describe('test short url', function () {
    it(longUrl, function (done) {
        url50r.convert(longUrl).then(function (result) {
            assert.equal('YM6qRM', String(result).substr(-6));
            done();
        }).catch(function (err) {
            done(err);
        });
        
    })
});
