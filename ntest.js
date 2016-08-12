/**
 * Created by wdj on 16/8/12.
 * ntest
 */
var url50r = require('./index')({
    ak: '57ac3816d9cb467d121dd48f',
    https: true
});

var longUrl = 'https://www.google.com.hk/search?q=hello';
url50r.convert(longUrl).then(function (result) {
    if('YM6qRM' === String(result).substr(-6)){
        console.log('success');
    }else{
        throw new Error('gen fail.');
    }
}).catch(function (err) {
    console.error(err);
});
